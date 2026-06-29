import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowLeft, ArrowRight, Calendar, Clock, Tag, User, Users, Share2, Bookmark, Facebook, Twitter, Linkedin, Link2, Quote, Target, CircleCheck, MousePointerClick, LineChart, Check } from "lucide-react";
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
  const [relatedPosts, setRelatedPosts] = useState<BlogPostData[]>([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [headings, setHeadings] = useState<{ id: string; text: string; level: number }[]>([]);
  const [progress, setProgress] = useState(0);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      setProgress(Math.round(latest * 100));
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

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

        const otherPosts = googlePosts
          .filter((item) => item.slug !== slug)
          .slice(0, 3)
          .map(item => ({
            id: item.id,
            title: item.title,
            slug: item.slug,
            excerpt: item.excerpt,
            content: item.content,
            cover_image: item.cover_image,
            author: item.author,
            category: item.category,
            tags: [],
            published_at: item.published_at,
          }));

        setRelatedPosts(otherPosts);

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

  useEffect(() => {
    if (!post || !post.content) return;
    
    // Wait for safely setting inner HTML
    const timer = setTimeout(() => {
      const container = document.getElementById("blog-content-container");
      if (!container) return;
      
      const elements = Array.from(container.querySelectorAll("h2, h3"));
      const newHeadings = elements.map((el, index) => {
        const text = el.textContent || "";
        const id = el.id || text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "") || `heading-${index}`;
        el.id = id;
        return {
          id,
          text,
          level: el.tagName === "H3" ? 3 : 2
        };
      });
      setHeadings(newHeadings);
    }, 150);

    return () => clearTimeout(timer);
  }, [post]);

  const formatDate = (dateValue: string | number | null) => {
    if (!dateValue) return "";

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

    return new Date(dateValue).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getReadingTime = (content: string | undefined | null) => {
    if (!content) return 1;
    const text = content.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
    const words = text ? text.split(" ").length : 0;
    return Math.max(1, Math.ceil(words / 180));
  };

  const formatContent = (content: string | undefined | null) => {
    if (!content) return "<p>No content available.</p>";
    
    // Only assume it's fully pre-formatted HTML if it contains block-level structural tags
    // This ensures that plain text containing just an <img> tag still gets parsed into paragraphs!
    if (/<(p|div|h[1-6]|ul|ol|table)\b[^>]*>/i.test(content)) {
      return content;
    }
    
    // Convert raw text into paragraph blocks, auto-detecting headings
    return content
      .split(/\n\n+/)
      .map(paragraph => {
        const trimmed = paragraph.trim();
        // Heuristic: If it's a short, single line without ending punctuation, treat as heading
        const isHeading = trimmed.length > 0 && trimmed.length < 80 && !trimmed.includes('\n') && !/[.!?:]$/.test(trimmed);
        
        if (isHeading) {
          return `<h2>${trimmed}</h2>`;
        }
        return `<p>${trimmed.replace(/\n/g, '<br/>')}</p>`;
      })
      .join('');
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen bg-background pt-32 pb-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            <Skeleton className="h-8 w-32 mb-8" />
            <Skeleton className="h-96 w-full rounded-2xl mb-12" />
            <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
              <Skeleton className="h-[400px] w-full rounded-lg" />
              <div className="space-y-4">
                <Skeleton className="h-6 w-full" />
                <Skeleton className="h-6 w-full" />
                <Skeleton className="h-6 w-3/4" />
              </div>
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
      />
      
      {/* Progress Bar */}
      <motion.div
        className="fixed top-[72px] left-0 right-0 h-1 bg-slate-200 origin-left z-50 flex"
      >
        <motion.div className="h-full bg-[#0F4CFF]" style={{ scaleX, width: "100%", transformOrigin: "left" }} />
      </motion.div>

      <Navbar />

      <main className="min-h-screen bg-[#F8FAFC]">
        {/* HERO SECTION */}
        <section className="pt-[120px] pb-12 px-4 sm:px-6 lg:px-12 max-w-[1440px] mx-auto mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative w-full h-[540px] rounded-[32px] overflow-hidden flex flex-col justify-end p-8 sm:p-12 lg:p-16"
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <img 
                src={post.cover_image || "/images/blog-placeholder.jpg"} 
                alt={post.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020817] via-[#020817]/80 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-4xl">
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <Badge className="bg-white text-slate-900 hover:bg-white/90 font-semibold px-3 py-1 text-xs uppercase tracking-wider rounded-md">
                  {post.category || "IT Strategy"}
                </Badge>
                <div className="flex items-center gap-4 text-white/80 text-sm font-medium">
                  <span className="flex items-center gap-1.5"><Clock size={14} /> {readingTime} min read</span>
                  <span className="flex items-center gap-1.5"><Calendar size={14} /> {displayDate || "Recently"}</span>
                </div>
              </div>
              
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.15] mb-6">
                {post.title}
              </h1>
              
              {post.excerpt && (
                <p className="text-lg text-white/80 leading-relaxed max-w-3xl mb-8">
                  {post.excerpt}
                </p>
              )}

              {/* Author & Actions Row */}
              <div className="flex flex-wrap items-center justify-between gap-6 pt-6 border-t border-white/20">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center overflow-hidden shrink-0">
                    <img src="/images/cybaem-logo.png" alt="Cybaem Tech" className="w-8 h-8 object-contain" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{post.author || "Cybaem Tech Editorial Team"}</p>
                    <p className="text-white/60 text-xs">Enterprise IT & Digital Transformation Experts</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm font-medium transition-colors backdrop-blur-md">
                    <Share2 size={16} /> Share
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm font-medium transition-colors backdrop-blur-md">
                    <Bookmark size={16} /> Bookmark
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* CONTENT LAYOUT */}
        <section className="px-4 sm:px-6 lg:px-12 max-w-[1440px] mx-auto pb-[120px] grid lg:grid-cols-[280px_1fr] gap-12 lg:gap-16 items-start">
          
          {/* SIDEBAR */}
          <aside className="space-y-8 lg:sticky lg:top-[112px] hidden lg:block">
            {/* On This Page */}
            {headings.length > 0 ? (
              <div className="bg-white rounded-[20px] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100">
                <h3 className="font-bold text-slate-900 mb-5">On This Page</h3>
                <ul className="space-y-4 text-sm max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
                  {headings.map((heading, i) => (
                    <li key={heading.id} className={`flex items-start gap-3 ${heading.level === 3 ? 'ml-4' : ''}`}>
                      <span className="flex items-center justify-center w-5 h-5 rounded-full bg-slate-100 text-slate-500 text-[10px] font-bold shrink-0 mt-0.5">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <a 
                        href={`#${heading.id}`} 
                        onClick={(e) => {
                          e.preventDefault();
                          document.getElementById(heading.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }}
                        className="text-slate-600 hover:text-[#0F4CFF] transition-colors leading-snug"
                      >
                        {heading.text}
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium uppercase tracking-wider">
                  <span>Article Progress</span>
                  <span className="text-[#0F4CFF]">{progress}%</span>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-[20px] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100 opacity-60">
                <h3 className="font-bold text-slate-900 mb-5">On This Page</h3>
                <p className="text-sm text-slate-500">Add headers (H2, H3) to your Google Sheet content to generate navigation.</p>
                <div className="mt-6 pt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium uppercase tracking-wider">
                  <span>Article Progress</span>
                  <span className="text-[#0F4CFF]">{progress}%</span>
                </div>
              </div>
            )}
          </aside>

          {/* MAIN CONTENT */}
          <article className="min-w-0 max-w-[820px]">
            {/* Real HTML Content from Google Sheets */}
            <div
              id="blog-content-container"
              className="prose prose-lg max-w-none prose-headings:font-display prose-headings:font-bold prose-headings:text-slate-900 prose-headings:mb-6 prose-p:text-slate-600 prose-p:leading-[1.8] prose-p:mb-10 prose-p:mt-0 prose-a:text-[#0F4CFF] prose-li:text-slate-600 prose-li:my-5 prose-ul:mt-6 prose-ol:mt-6 prose-img:my-16 prose-img:max-h-[500px] prose-img:w-full prose-img:mx-auto prose-img:rounded-2xl prose-img:object-cover prose-img:shadow-2xl prose-img:shadow-primary/20 mb-12 text-slate-800"
              dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
            />



          </article>
        </section>

        {/* BOTTOM SECTIONS */}
        <section className="px-4 sm:px-6 lg:px-12 max-w-[1440px] mx-auto pb-[120px] grid lg:grid-cols-[1fr_2fr] gap-16">
          
          {/* Author Block */}
          <div className="bg-slate-50 rounded-[24px] p-8 border border-slate-100 flex flex-col sm:flex-row gap-6 items-start">
            <div className="w-20 h-20 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center shrink-0 overflow-hidden">
               <img src="/images/cybaem-logo.png" alt="Cybaem Tech" className="w-12 h-12 object-contain" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">About the Author</p>
              <h4 className="font-display text-xl font-bold text-slate-900 mb-1">Cybaem Tech Editorial Team</h4>
              <p className="text-sm text-slate-500 mb-4">Enterprise IT & Digital Transformation Experts</p>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                We share insights on technology, IT solutions, digital transformation, and industry trends to help businesses grow and innovate.
              </p>
              <div className="flex items-center gap-3">
                <a href="#" className="w-8 h-8 rounded-full bg-white border border-slate-200 text-slate-400 hover:text-[#0F4CFF] hover:border-[#0F4CFF] transition-all flex items-center justify-center"><Linkedin size={14} /></a>
                <a href="#" className="w-8 h-8 rounded-full bg-white border border-slate-200 text-slate-400 hover:text-[#0F4CFF] hover:border-[#0F4CFF] transition-all flex items-center justify-center"><Twitter size={14} /></a>
                <a href="#" className="w-8 h-8 rounded-full bg-white border border-slate-200 text-slate-400 hover:text-[#0F4CFF] hover:border-[#0F4CFF] transition-all flex items-center justify-center"><Link2 size={14} /></a>
              </div>
            </div>
          </div>

          {/* Related Articles */}
          <div className="bg-white rounded-[24px] p-8 border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-display text-xl font-bold text-slate-900">Related Articles</h3>
              <a href="/blog" className="text-sm font-semibold text-[#0F4CFF] hover:text-blue-700 flex items-center gap-1.5">View All Articles <ArrowRight size={14} /></a>
            </div>
            <div className="grid sm:grid-cols-3 gap-6">
              {relatedPosts.map((article, i) => (
                <Link to={`/blog/${article.slug}`} key={article.id || i} className="group cursor-pointer block">
                  <div className="w-full h-32 rounded-xl overflow-hidden mb-4 bg-slate-100">
                    <img src={article.cover_image || "/images/blog-placeholder.jpg"} alt={article.title} className="w-full h-full shadow-2xl object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <span className="inline-block px-2.5 py-1 rounded bg-slate-100 text-slate-600 text-[10px] font-bold uppercase tracking-wider mb-2">{article.category || "IT Strategy"}</span>
                  <h4 className="font-bold text-slate-900 text-sm leading-snug mb-2 group-hover:text-[#0F4CFF] transition-colors">{article.title}</h4>
                  <p className="text-xs text-slate-500 flex items-center gap-1.5"><Clock size={12} /> {getReadingTime(article.content)} min read</p>
                </Link>
              ))}
            </div>
          </div>

        </section>

      </main>
      <Footer />
    </>
  );
};

export default BlogPost;