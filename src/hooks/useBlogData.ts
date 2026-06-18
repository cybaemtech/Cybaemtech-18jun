import { useState, useEffect } from "react";

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  cover_image: string | null;
  author: string;
  category: string | null;
  published_at: string | null;
}

interface CacheData {
  posts: BlogPost[];
  timestamp: number;
}

const CACHE_KEY = "cybaem_blog_posts_local_v1";
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 1 day cache
const GOOGLE_SHEETS_API = "https://docs.google.com/spreadsheets/d/1fI_YaQF9y53wjRBKwi_T7SGCTqkz_1gLDvWbA1zp8P4/gviz/tq?tqx=out:json&sheet=Sheet1";

// Export the fallback parser so BlogPost page can reuse it
export async function fetchGoogleSheetsData(): Promise<BlogPost[]> {
  const response = await fetch(GOOGLE_SHEETS_API, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Cache-Control': 'no-cache',
    }
  });
  if (!response.ok) throw new Error("Google Sheets fetch failed");
  const text = await response.text();
  if (!text.includes('table')) throw new Error("Invalid response format");
  
  const jsonString = text.substring(47, text.length - 2);
  const json = JSON.parse(jsonString);
  if (!json.table || !json.table.rows || json.table.rows.length === 0) {
    throw new Error("No data in sheet");
  }
  
  const headers = json.table.rows[0].c.map((col: any) => col?.v);
  const data = json.table.rows.slice(1).map((row: any) => {
    const obj: any = {};
    row.c.forEach((cell: any, i: number) => {
      obj[headers[i]] = cell?.v || null;
    });
    return obj;
  });

  const filteredPosts: BlogPost[] = data
    .filter((row: any) => row.Blog === "YES" && row["Post Text"])
    .map((row: any, index: number) => ({
      id: row["Post ID"] || String(index),
      title: row["Post Text"]?.substring(0, 70) + "..." || "Untitled",
      slug: `linkedin-post-${index}`,
      excerpt: row["Post Text"]?.substring(0, 180) || null,
      cover_image: row["Image URL"] || null,
      author: "Cybaem Tech",
      category: row["Category"] || "LinkedIn",
      published_at: row["Published Date"] || null,
    }));
    
  return filteredPosts;
}

export const useBlogData = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        // Load cache first
        const cachedData = localStorage.getItem(CACHE_KEY);
        if (cachedData) {
          try {
            const parsed: CacheData = JSON.parse(cachedData);
            if (parsed.posts && parsed.posts.length > 0) {
              setPosts(parsed.posts);
              setLoading(false);
            }
          } catch (e) {
            console.warn("[Blog Cache] Parse error:", e);
          }
        }

        // Always fetch from Google Sheets to ensure only the 7 LinkedIn blogs are displayed
        const sheetsData = await fetchGoogleSheetsData();
        setPosts(sheetsData);
        setError(null);
        
        localStorage.setItem(CACHE_KEY, JSON.stringify({
          posts: sheetsData,
          timestamp: Date.now()
        }));
      } catch (err) {
        const errorMsg = err instanceof Error ? err.message : "Unknown error";
        console.error("[Blog Fetch Error]", errorMsg);
        setError(`Unable to load blog posts. (${errorMsg})`);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogData();
  }, []);

  return { posts, loading, error };
};
