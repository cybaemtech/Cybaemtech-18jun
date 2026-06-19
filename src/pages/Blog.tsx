import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, ArrowRight, User } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import NewsletterSignup from "@/components/NewsletterSignup";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import { useBlogData } from "@/hooks/useBlogData";
import { cn } from "@/lib/utils";

const Blog = () => {
  const { posts, loading, error } = useBlogData();
  const [featuredPost, ...otherPosts] = posts;

  const formatDate = (dateString: string | null) => {
    if (!dateString) return "";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getReadingTime = (text: string | null, index: number) => {
    const base = text ? Math.ceil(text.split(" ").length / 20) : 3;
    return `${Math.max(3, base + (index % 4))} min read`;
  };

  return (
    <>
      <SEOHead
        title="IT Services Blog | Cybaem Tech - Enterprise Insights & Strategies"
        description="Read expert insights on enterprise IT services, software development, managed IT security, web systems, and digital growth strategies from Cybaem Tech."
        canonical="/blog"
        keywords="IT services blog, enterprise software insights, managed IT services, web development, digital growth strategies, cybersecurity tips"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "Cybaem Tech IT Services Blog",
          description: "Expert insights on IT services, enterprise software, managed IT, and digital growth.",
          url: "https://cybaemtech.com/blog",
          publisher: {
            "@type": "Organization",
            name: "Cybaem Tech Pvt Ltd",
            url: "https://cybaemtech.com"
          }
        }}
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <Badge variant="outline" className="mb-4 text-primary border-primary/30">
                Insights & Updates
              </Badge>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                IT Service Insights & Blog
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Stay ahead with expert insights on enterprise IT services, software development, IT security, 
                web systems, and digital growth strategies from our team of specialists.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="pb-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            {loading ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="overflow-hidden rounded-lg border border-border bg-card">
                    <Skeleton className="h-52 w-full rounded-none" />
                    <div className="space-y-4 p-5">
                      <Skeleton className="h-4 w-32" />
                      <Skeleton className="h-7 w-full" />
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-3/4" />
                    </div>
                  </div>
                ))}
              </div>
            ) : error && posts.length === 0 ? (
              <div className="text-center py-20">
                <div className="max-w-md mx-auto">
                  <p className="text-muted-foreground text-lg mb-4 font-medium">
                    Unable to Load Blog Posts
                  </p>
                  <p className="text-muted-foreground mb-6 text-sm">
                    {error}
                  </p>
                  <button
                    onClick={() => window.location.reload()}
                    className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-primary hover:bg-primary/90 rounded-lg transition-colors"
                  >
                    Refresh Page
                  </button>
                </div>
              </div>
            ) : posts.length > 0 ? (
              <div className="space-y-8 lg:space-y-10">
                {featuredPost && (
                  <motion.article
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55 }}
                    className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 max-w-4xl mx-auto"
                  >
                    <Link to={`/blog/${featuredPost.slug}`} className="grid min-h-[360px] lg:grid-cols-[1.18fr_0.82fr]">
                      <div className="relative min-h-[260px] overflow-hidden bg-muted lg:min-h-full">
                        {featuredPost.cover_image ? (
                          <img
                            src={featuredPost.cover_image}
                            alt={featuredPost.title}
                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/20 via-secondary to-background">
                            <span className="font-display text-6xl font-bold text-primary/30">
                              {featuredPost.title.charAt(0)}
                            </span>
                          </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent" />
                        {featuredPost.category && (
                          <Badge className="absolute left-5 top-5 rounded-md bg-background/95 text-primary shadow-sm hover:bg-background">
                            {featuredPost.category}
                          </Badge>
                        )}
                      </div>

                      <div className="relative flex flex-col justify-center p-6 sm:p-8 lg:p-10">
                        <span className="mb-5 h-1 w-14 rounded-full bg-primary" />
                        <div className="mb-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1.5">
                            <User size={14} />
                            {featuredPost.author}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Calendar size={14} />
                            {formatDate(featuredPost.published_at)}
                          </span>
                        </div>

                        <h2 className="font-display text-2xl font-semibold leading-tight text-foreground transition-colors group-hover:text-primary sm:text-3xl">
                          {featuredPost.title}
                        </h2>

                        {featuredPost.excerpt && (
                          <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
                            {featuredPost.excerpt}
                          </p>
                        )}

                        <span className="mt-7 inline-flex w-fit items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-all group-hover:gap-3 group-hover:bg-primary/90">
                          Read Featured <ArrowRight size={16} />
                        </span>
                      </div>
                    </Link>
                  </motion.article>
                )}

                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 max-w-5xl mx-auto">
                  {otherPosts.map((post, index) => {
                    // Create dynamic heights for the Pinterest masonry feel
                    const aspectRatios = ["aspect-[4/3]", "aspect-[3/4]", "aspect-[4/5]", "aspect-[1/1]", "aspect-[5/4]"];
                    const imageAspect = aspectRatios[index % aspectRatios.length];

                    return (
                      <motion.article
                        key={post.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: (index % 10) * 0.08 }}
                        className={cn(
                          "group overflow-hidden rounded-2xl border border-border bg-background shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 break-inside-avoid mb-6 inline-block w-full"
                        )}
                      >
                        <Link
                          to={`/blog/${post.slug}`}
                          className="flex h-full flex-col"
                        >
                          <div
                            className={cn(
                              "relative overflow-hidden bg-muted",
                              imageAspect
                            )}
                          >
                            {post.cover_image ? (
                              <img
                                src={post.cover_image}
                                alt={post.title}
                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                loading="lazy"
                              />
                            ) : (
                              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/15 via-muted to-background">
                                <span className="font-display text-5xl font-bold text-primary/30">
                                  {post.title.charAt(0)}
                                </span>
                              </div>
                            )}
                            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent" />
                            {post.category && (
                              <Badge className="absolute left-4 top-4 rounded-md bg-white/95 text-primary shadow-sm hover:bg-white border-none font-semibold">
                                {post.category}
                              </Badge>
                            )}
                          </div>

                          <div className="flex flex-1 flex-col p-5 sm:p-6 bg-white">
                            <div className="mb-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground font-medium">
                              <span className="flex items-center gap-1.5 text-gray-500">
                                <Calendar size={13} />
                                {formatDate(post.published_at)}
                              </span>
                              <span className="flex items-center gap-1.5 text-gray-500">
                                <div className="w-1 h-1 rounded-full bg-gray-300" />
                                {getReadingTime(post.excerpt, index)}
                              </span>
                            </div>

                            <h2 className="font-display text-xl font-bold leading-snug text-[#0f172a] transition-colors group-hover:text-primary mb-3">
                              {post.title}
                            </h2>

                            {post.excerpt && (
                              <p className="text-sm leading-relaxed text-[#64748b] line-clamp-3 mb-6">
                                {post.excerpt}
                              </p>
                            )}

                            <span className="mt-auto inline-flex items-center gap-2 text-sm font-bold text-primary transition-all group-hover:gap-3 uppercase tracking-wider">
                              Read More <ArrowRight size={16} />
                            </span>
                          </div>
                        </Link>
                      </motion.article>
                    );
                  })}
                </div>
              </div>
            ) : (
              <div className="py-20 text-center">
                <p className="text-lg font-medium text-muted-foreground">No blog posts found.</p>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Signup */}
        <NewsletterSignup />
      </main>

      <Footer />
    </>
  );
};

export default Blog;
