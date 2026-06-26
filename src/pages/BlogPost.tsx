import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Calendar, Clock, Tag, User } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import { fetchGoogleSheetsData } from "@/hooks/useBlogData";
 
interface BlogPostData {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  cover_image: string | null;
  author: string;
  category: string | null;
  tags: string[] | null;
  published_at: string | number | null;
}
 
const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPostData | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
 
  useEffect(() => {
    if (!slug) {
      setNotFound(true);
      setLoading(false);
      return;
    }
 
    const fetchPost = async () => {
      setLoading(true);
 
      try {
        const googlePosts = await fetchGoogleSheetsData();
 
        const selectedPost = googlePosts.find(
          (item) => item.slug === slug
        );
 
        if (!selectedPost) {
          setNotFound(true);
          return;
        }
 
        setPost({
          id: selectedPost.id,
          title: selectedPost.title,
          slug: selectedPost.slug,
          excerpt: selectedPost.excerpt,
          content: selectedPost.content,
          cover_image: selectedPost.cover_image,
          author: selectedPost.author,
          category: selectedPost.category,
          tags: [],
          published_at: selectedPost.published_at,
        });
 
        setNotFound(false);
      } catch (err) {
        console.error(err);
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [slug]);
 
  const formatDate = (dateValue: string | number | null) => {
    if (!dateValue) return "";
 
    // Google Sheets serial date
    if (typeof dateValue === "number") {
      const utcDays = Math.floor(dateValue - 25569);
      const utcValue = utcDays * 86400;
      const date = new Date(utcValue * 1000);
 
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    }
 
    // String date
    return new Date(dateValue).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };
  const getReadingTime = (content: string) => {
    const text = content.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
    const words = text ? text.split(" ").length : 0;
    return Math.max(1, Math.ceil(words / 180));
  };
 
  if (loading) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen bg-background pt-32 pb-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            <Skeleton className="h-8 w-32 mb-8" />
            <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
              <div className="space-y-5">
                <Skeleton className="h-10 w-40" />
                <Skeleton className="h-16 w-full" />
                <Skeleton className="h-6 w-72" />
                <Skeleton className="h-36 w-full rounded-lg" />
              </div>
              <Skeleton className="min-h-[420px] w-full rounded-lg" />
            </div>
            <div className="mx-auto mt-12 max-w-3xl space-y-4">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }
 
  if (notFound || !post) {
    return (
      <>
        <SEOHead
          title="Post Not Found | Cybaem Tech Blog"
          description="The blog post you're looking for could not be found."
          canonical={`/blog/${slug}`}
        />
        <Navbar />
        <main className="min-h-screen bg-background pt-32 pb-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12 text-center">
            <h1 className="font-display text-4xl font-bold text-foreground mb-4">
              Post Not Found
            </h1>
            <p className="text-muted-foreground mb-8">
              The blog post you're looking for doesn't exist or has been removed.
            </p>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowLeft size={16} />
              Back to Blog
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }
 
  const readingTime = getReadingTime(post.content);
  const displayDate = formatDate(post.published_at);
 
  return (
    <>
      <SEOHead
        title={`${post.title} | Cybaem Tech Blog`}
        description={post.excerpt || `Read ${post.title} on the Cybaem Tech blog.`}
        canonical={`/blog/${post.slug}`}
        ogImage={post.cover_image || undefined}
        ogType="article"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.excerpt,
            image: post.cover_image,
            author: {
              "@type": "Person",
              name: post.author,
            },
            datePublished: post.published_at,
            dateModified: post.published_at,
            publisher: {
              "@type": "Organization",
              name: "Cybaem Tech Pvt. Ltd.",
              logo: {
                "@type": "ImageObject",
                url: "https://cybaemtech.com/images/cybaem-logo.png",
              },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://cybaemtech.com/blog/${post.slug}`,
            },
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://cybaemtech.com/" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://cybaemtech.com/blog" },
              { "@type": "ListItem", position: 3, name: post.title, item: `https://cybaemtech.com/blog/${post.slug}` },
            ],
          },
        ]}
      />
      <Navbar />
 
      <main className="min-h-screen bg-background">
        <article className="pt-28 pb-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-8"
            >
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary"
              >
                <ArrowLeft size={16} />
                Back to Blog
              </Link>
            </motion.div>
 
            <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-stretch">
              <motion.header
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col justify-center rounded-xl border border-border bg-card p-6 shadow-xl sm:p-8 lg:p-10"
              >
                <div className="mb-5 flex flex-wrap items-center gap-3">
                  {post.category && (
                    <Badge className="rounded-md bg-primary text-primary-foreground hover:bg-primary/90">
                      {post.category}
                    </Badge>
                  )}
                  <span className="inline-flex items-center gap-1.5 rounded-md bg-background px-2.5 py-1 text-xs font-medium text-muted-foreground">
                    <Clock size={13} />
                    {readingTime} min read
                  </span>
                </div>
 
                <h1 className="font-display text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
                  {post.title}
                </h1>
 
                {post.excerpt && (
                  <p className="mt-5 text-base leading-7 text-muted-foreground">
                    {post.excerpt}
                  </p>
                )}
 
                <div className="mt-7 grid gap-3 border-t border-border pt-6 text-sm text-muted-foreground sm:grid-cols-2">
                  <span className="flex items-center gap-2">
                    <User size={16} className="text-primary" />
                    {post.author}
                  </span>
                  <span className="flex items-center gap-2">
                    <Calendar size={16} className="text-primary" />
                    {displayDate}
                  </span>
                </div>
              </motion.header>
 
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative overflow-hidden rounded-xl border border-border bg-muted shadow-xl"
              >
                {post.cover_image ? (
                  <img
                    src={post.cover_image}
                    alt={post.title}
                    className="h-full min-h-[320px] w-full object-cover lg:min-h-[520px]"
                  />
                ) : (
                  <div className="flex h-full min-h-[320px] w-full items-center justify-center bg-gradient-to-br from-primary/20 via-secondary to-background lg:min-h-[520px]">
                    <span className="font-display text-7xl font-bold text-primary/30">
                      {post.title.charAt(0)}
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/35 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 rounded-xl border border-white/30 bg-background/95 p-4 shadow-2xl backdrop-blur">
                  <p className="font-display text-sm font-semibold text-foreground">
                    Cybaem Tech Insight
                  </p>
                  <p className="mt-1 text-xs leading-5 text-muted-foreground">
                    Practical IT thinking for security, infrastructure, cloud, web systems, and digital growth.
                  </p>
                </div>
              </motion.div>
            </div>
 
            <div className="mt-12 grid gap-8 lg:grid-cols-[260px_minmax(0,760px)] lg:items-start lg:justify-center">
              <motion.aside
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.15 }}
                className="rounded-xl border border-border bg-card p-5 shadow-xl lg:sticky lg:top-28"
              >
                <p className="font-display text-sm font-semibold text-foreground">Article Briefing</p>
                <div className="mt-4 space-y-4 text-sm text-muted-foreground">
                  <div>
                    <p className="mb-1 text-xs font-semibold uppercase tracking-[0.14em] text-primary">Focus</p>
                    <p>{post.category || "IT Services"}</p>
                  </div>
                  <div>
                    <p className="mb-1 text-xs font-semibold uppercase tracking-[0.14em] text-primary">Published</p>
                    <p>{displayDate || "Recently"}</p>
                  </div>
                  <div>
                    <p className="mb-1 text-xs font-semibold uppercase tracking-[0.14em] text-primary">Read Time</p>
                    <p>{readingTime} minutes</p>
                  </div>
                </div>
              </motion.aside>
 
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="rounded-lg border border-border bg-background p-6 shadow-sm sm:p-8"
              >
                <div
                  className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-foreground prose-p:text-muted-foreground prose-p:leading-8 prose-a:text-primary prose-strong:text-foreground"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
 
                {post.tags && post.tags.length > 0 && (
                  <div className="mt-10 border-t border-border pt-6">
                    <div className="flex flex-wrap items-center gap-2">
                      <Tag size={16} className="text-muted-foreground" />
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
 
                <div className="mt-10 rounded-lg border border-border bg-card p-5">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="font-display text-lg font-semibold text-foreground">
                        Want more IT insights?
                      </p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Explore more practical guidance from the Cybaem Tech team.
                      </p>
                    </div>
                    <Link
                      to="/blog"
                      className="inline-flex w-fit items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-all hover:gap-3 hover:bg-primary/90"
                    >
                      View Blog <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
 
          </div>
        </article>
      </main>
 
      <Footer />
    </>
  );
};
 
export default BlogPost;
 