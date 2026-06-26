import { useState, useEffect } from "react";

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  cover_image: string | null;
  author: string;
  category: string | null;
  published_at: string | number | null;
}

interface CacheData {
  posts: BlogPost[];
  timestamp: number;
}

const CACHE_KEY = "cybaem_blog_posts_local_v1";

const GOOGLE_SHEETS_API =
  "https://docs.google.com/spreadsheets/d/1fI_YaQF9y53wjRBKwi_T7SGCTqkz_1gLDvWbA1zp8P4/gviz/tq?tqx=out:json&sheet=Sheet1";

/**
 * Decode HTML entities + clean text
 */
const cleanText = (text: string = "") => {
  if (!text) return "";

  const textarea = document.createElement("textarea");

  textarea.innerHTML = text;

  return textarea.value
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&#8217;/gi, "'")
    .replace(/&#8216;/gi, "'")
    .replace(/&quot;/gi, '"')
    .replace(/&#8220;/gi, '"')
    .replace(/&#8221;/gi, '"')
    .replace(/<[^>]*>/g, "")
    .replace(/\u00A0/g, " ")
    .replace(/\s+/g, " ")
    .trim();
};

export async function fetchGoogleSheetsData(): Promise<BlogPost[]> {
  const response = await fetch(GOOGLE_SHEETS_API);

  if (!response.ok) {
    throw new Error("Google Sheets fetch failed");
  }

  const text = await response.text();

  const json = JSON.parse(text.substring(47).slice(0, -2));

  const headers = json.table.cols.map((col: any) => col.label);

  const data = json.table.rows.map((row: any) => {
    const obj: any = {};

    headers.forEach((header: string, index: number) => {
      obj[header] = row.c?.[index]?.v ?? "";
    });

    return obj;
  });

  const filteredPosts: BlogPost[] = data
    .filter(
      (row: any) =>
        String(row["Blog"]).trim().toUpperCase() === "YES"
    )
    .map((row: any, index: number) => ({
      id: row["Post ID"] || String(index),

      title: cleanText(row["Title"] || "Untitled"),

      slug: row["Slug"] || `wordpress-post-${index}`,

      excerpt: row["Content"]
        ? cleanText(row["Content"]).substring(0, 180) + "..."
        : "",

      // Full HTML content
      content: row["Content"] || "",

      cover_image: row["Image URL"] || null,

      author: "Cybaem Tech",

      category: "WordPress",

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
        const cachedData = localStorage.getItem(CACHE_KEY);

        if (cachedData) {
          try {
            const parsed: CacheData = JSON.parse(cachedData);

            if (parsed.posts?.length > 0) {
              setPosts(parsed.posts);
              setLoading(false);
            }
          } catch (e) {
            console.warn("Cache Parse Error", e);
          }
        }

        const sheetsData = await fetchGoogleSheetsData();

        setPosts(sheetsData);

        setError(null);

        localStorage.setItem(
          CACHE_KEY,
          JSON.stringify({
            posts: sheetsData,
            timestamp: Date.now(),
          })
        );
      } catch (err) {
        const errorMsg =
          err instanceof Error ? err.message : "Unknown error";

        console.error(errorMsg);

        setError(errorMsg);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogData();
  }, []);

  return {
    posts,
    loading,
    error,
  };
};