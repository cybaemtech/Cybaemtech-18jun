import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ShieldCheck,
  Users,
  Settings,
  Calendar,
  ThumbsUp,
  Headset,
  Shield,
  Globe,
  Lightbulb,
  CheckCircle,
  Handshake,
  Star,
  Rocket,
  TrendingUp,
  Trophy,
  Target,
  ChevronLeft,
  ChevronRight,
  User,
  Briefcase,
  Quote,
  BadgeCheck,
  Server
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { aboutSeoData } from "@/data/seo/aboutSeo";
import cybaemLogoIcon from "@/assets/cybaem-logo-icon.png";

/* ── Animation helpers ── */
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const SectionHeader = ({ subtitle, title, titleHighlight, align = "left" }: { subtitle: string, title: string, titleHighlight: string, align?: "left" | "center" }) => (
  <div className={`mb-12 ${align === "center" ? "text-center" : ""}`}>
    <span className="inline-block text-xs font-bold tracking-[0.15em] uppercase text-primary mb-3">
      {subtitle}
    </span>
    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
      {title} <span className="text-primary italic font-light">{titleHighlight}</span>
    </h2>
  </div>
);

/* ──────────────────── HERO ──────────────────── */
const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-background">
      {/* Background Dots Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <motion.div variants={stagger} initial="hidden" animate="visible" className="max-w-xl">
            <motion.span variants={fadeUp} className="inline-block text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase text-primary mb-6 bg-primary/5 px-3 py-1 rounded-full">
              Leading Technology Solutions Provider
            </motion.span>
            <motion.h1 variants={fadeUp} className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-6">
              Premium IT Service <br />
              <span className="text-primary font-medium italic" style={{ fontFamily: "cursive" }}>zero compromise</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="hidden lg:block text-sm sm:text-base text-muted-foreground leading-relaxed mb-8 max-w-lg">
              Delivering smart IT infrastructure, cloud, and software solutions for modern enterprises.
            </motion.p>
            <motion.div variants={fadeUp} className="hidden lg:block">
              <Link to="/#solutions" className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                Explore Our Solutions<ArrowRight size={16} />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Image Layout */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Main Image Masked in a pill/oval shape */}
            <div className="relative w-full drop-shadow-[0_15px_35px_rgba(0,0,0,0.25)]">
              <img src="/images/about-team-1.png" alt="Cybaem Tech Team" className="w-full h-full object-cover" />
            </div>

            {/* Floating Element 1: Cybaemians */}
            <div className="absolute top-8 -left-4 sm:-left-8 bg-white rounded-2xl p-3 sm:p-4 shadow-xl border border-border/50 hidden lg:flex items-center gap-3 animate-bounce-slow">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-primary">
                <Users size={20} />
              </div>
              <div>
                <p className="text-sm font-bold text-foreground leading-tight">200+</p>
                <p className="text-xs text-muted-foreground font-medium">Cybaemians</p>
              </div>
            </div>

            {/* Floating Element 2: CT Logo */}
            <div className="absolute top-1/4 right-2 sm:-right-6 flex flex-col items-center">
              <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-white/10 backdrop-blur-md border border-white/40 shadow-2xl flex items-center justify-center">
                <img src="/images/cybaem-logo.png" alt="CT" className="w-12 h-12 sm:w-20 sm:h-20" />
              </div>
            
            </div>

            {/* Floating Element 3: Rating */}
            <div className="absolute bottom-8 -right-4 sm:-right-8 bg-white rounded-2xl p-3 sm:p-4 shadow-xl border border-border/50 hidden lg:flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-500">
                <Star size={20} className="fill-orange-500" />
              </div>
              <div>
                <p className="text-sm font-bold text-foreground leading-tight">4.8/5</p>
                <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider">Employee Rating</p>
              </div>
            </div>
            
            {/* Decorative background shapes */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-50 rounded-full blur-3xl opacity-50" />
          </motion.div>

          {/* Mobile Description & Button */}
          <div className="flex flex-col items-center mt-8 lg:hidden text-center px-2">
            <motion.p variants={fadeUp} className="text-sm text-muted-foreground leading-relaxed mb-6">
              Delivering smart IT infrastructure, cloud, and software solutions for modern enterprises.
            </motion.p>
            <motion.div variants={fadeUp} className="flex justify-center w-full">
              <Link to="/#solutions" className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                Explore Our Solutions <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

/* ──────────────────── PILLARS ──────────────────── */
const PillarsSection = () => {
  const pillars = [
    {
      icon: ShieldCheck, tag: "Mission", title: "Outcomes, not just code",
      desc: "We deliver project-focused IT solutions that drive real results—optimized systems, stronger security, and seamless digital experiences that help you achieve business growth.",
      image: "/images/about-mission.avif",
      iconColor: "text-blue-600", bg: "bg-blue-50"
    },
    {
      icon: Users, tag: "Values", title: "Security. Accountability. Always.",
      desc: "We operate with strict ISO standards, zero compromise on data security, and a culture of ethics and cutting edge technology that makes us a trusted partner for long-term success.",
      image: "/images/about-datacenter.avif",
      iconColor: "text-indigo-600", bg: "bg-indigo-50"
    },
    {
      icon: Settings, tag: "How We Work", title: "Process-led. Results delivered.",
      desc: "A disciplined work process, total project visibility, and continuous improvement ensure we deliver with precision—from strategy to successful deployment.",
      image: "/images/about-process.avif",
      iconColor: "text-purple-600", bg: "bg-purple-50"
    }
  ];

  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="py-10 lg:py-10 bg-background relative z-10">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div variants={stagger} initial="hidden" animate={inView ? "visible" : "hidden"} className="grid md:grid-cols-3 gap-8 ">
          {pillars.map((p, i) => (
            <motion.div key={i} variants={fadeUp} className="bg-white rounded-[2rem] p-4 shadow-[0_0_40px_rgba(37,99,235,0.12)] border border-primary/10 flex flex-col h-full hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 rounded-2xl ${p.bg} flex items-center justify-center shrink-0`}>
                  <p.icon size={24} className={p.iconColor} />
                </div>
                <span className="text-sm font-bold text-foreground">{p.tag}</span>
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-4">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-8">
                {p.desc}
              </p>
              <div className="relative rounded-2xl overflow-hidden aspect-[16/10]">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                <div className="absolute bottom-3 right-3 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:bg-primary hover:text-white transition-colors group">
                  <ArrowRight size={18} className="text-foreground group-hover:text-white transition-colors" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

/* ──────────────────── STATS ──────────────────── */
const StatsStrip = () => {
  const stats = [
    { icon: Users, value: "75+", label: "Satisfied Clients" },
    { icon: Calendar, value: "5+", label: "Years of Experience" },
    { icon: ThumbsUp, value: "100%", label: "Client Satisfaction" },
    { icon: Headset, value: "24/7", label: "Support Available" },
  ];

  return (
    <section className="py-8">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="bg-white border border-primary/10 rounded-[2.5rem] py-8 px-12 flex flex-wrap justify-between items-center gap-8 shadow-[0_0_40px_rgba(37,99,235,0.12)]">
          {stats.map((s, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center">
                <s.icon size={22} className="text-primary" />
              </div>
              <div>
                <p className="font-display text-2xl font-bold text-foreground leading-none">{s.value}</p>
                <p className="text-xs font-semibold text-muted-foreground mt-1">{s.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ──────────────────── CORE VALUES ──────────────────── */
const CoreValuesSection = () => {
  const values = [
    { icon: Shield, title: "Security First", desc: "We prioritize security in every solution we deliver.", color: "text-blue-500", bg: "bg-blue-50" },
    { icon: Globe, title: "Global Perspective", desc: "Bringing global expertise to local challenges.", color: "text-indigo-500", bg: "bg-indigo-50" },
    { icon: Lightbulb, title: "Innovation", desc: "Embracing cutting-edge technology for business.", color: "text-green-500", bg: "bg-green-50" },
    { icon: CheckCircle, title: "Reliability", desc: "Consistent, reliable solutions for business continuity.", color: "text-orange-500", bg: "bg-orange-50" },
    { icon: Handshake, title: "Client Partnership", desc: "We build lasting partnerships with our clients.", color: "text-pink-500", bg: "bg-pink-50" },
    { icon: Star, title: "Excellence", desc: "Delivering high-quality solutions that exceed expectations.", color: "text-teal-500", bg: "bg-teal-50" },
  ];

  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="py-20 lg:py-28">
      <div className="container mx-auto px-6 lg:px-12">
        <SectionHeader subtitle="WHAT DRIVES US" title="Our Core" titleHighlight="Values." />
        
        <motion.div variants={stagger} initial="hidden" animate={inView ? "visible" : "hidden"} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {values.map((v, i) => (
            <motion.div key={i} variants={fadeUp} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm text-center hover:-translate-y-1 transition-transform">
              <div className={`w-14 h-14 mx-auto rounded-full ${v.bg} flex items-center justify-center mb-5`}>
                <v.icon size={26} className={v.color} />
              </div>
              <h3 className="font-display text-sm font-bold text-foreground mb-2">{v.title}</h3>
              <p className="text-[11px] text-muted-foreground leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

/* ──────────────────── TIMELINE ──────────────────── */
const TimelineSection = () => {
  const milestones = [
    { year: "2020", title: "Foundation", desc: "Established with a vision to deliver innovative IT solutions and empower businesses.", icon: Rocket, color: "text-blue-500" },
    { year: "2021", title: "Innovation Hub", desc: "Invested in emerging technologies and built strong capabilities.", icon: Lightbulb, color: "text-green-500" },
    { year: "2022", title: "Strategic Partnerships", desc: "Formed key alliances to deliver greater value to clients.", icon: Handshake, color: "text-pink-500" },
    { year: "2023", title: "Global Expansion", desc: "Expanded our footprint across multiple regions and industries.", icon: Globe, color: "text-indigo-500" },
    { year: "2024", title: "Client-Centric Growth", desc: "Scaled operations while maintaining a strong client-first approach.", icon: TrendingUp, color: "text-purple-500" },
    { year: "2025", title: "Excellence Achieved", desc: "Recognized for excellence in delivery, security & innovation.", icon: Trophy, color: "text-orange-500" },
    { year: "2026", title: "Future Ready", desc: "Continuously innovating for a smarter, secure, and digital future.", icon: Target, color: "text-blue-600" },
  ];

  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="py-20 bg-gray-50/50">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        <SectionHeader subtitle="OUR JOURNEY" title="Milestones in" titleHighlight="Transforming Enterprise IT" align="center" />
        <p className="text-muted-foreground text-sm max-w-xl mx-auto -mt-8 mb-16">
          We're proud of the path we've forged in the world of enterprise IT.<br /> Here's a look at some of the key milestones in our journey:
        </p>

        <div className="relative">
          {/* Horizontal Line */}
          <div className="hidden lg:block absolute top-10 left-0 right-0 h-0.5 bg-gray-200 border-t border-dashed border-gray-300" />
          
          <motion.div variants={stagger} initial="hidden" animate={inView ? "visible" : "hidden"} className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-7 gap-8 relative z-10">
            {milestones.map((m, i) => (
              <motion.div key={i} variants={fadeUp} className="flex flex-col items-center">
                <div className={`w-20 h-20 rounded-full bg-white border border-gray-100 shadow-md flex items-center justify-center mb-6 relative z-10`}>
                  <m.icon size={32} className={m.color} strokeWidth={1.5} />
                </div>
                <h4 className="font-display font-bold text-primary mb-2 text-lg">{m.year}</h4>
                <h5 className="font-bold text-foreground text-sm mb-3">{m.title}</h5>
                <p className="text-[11px] text-muted-foreground leading-relaxed px-2">{m.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* ──────────────────── TESTIMONIALS ──────────────────── */
const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 0,
      quote: "CYBAEM transformed our IT operations with 24/7 support and robust security monitoring, helping us achieve higher uptime and stronger operational resilience.",
      author: "CTO", 
      role: "Client", 
      companyName: "FinTech Company",
      image: cybaemLogoIcon,
      rating: 4.5,
      verified: true,
      tags: ["Managed IT", "Cyber Security", "Infrastructure", "24/7 Support"],
      metrics: [
        { label: "Project Duration", value: "18 Months", icon: Calendar },
        { label: "Environment", value: "Windows Server, Azure, Microsoft 365", icon: Server },
        { label: "Team Size", value: "12+ Experts", icon: Users }
      ]
    },
    {
      id: 1,
      quote: "Their cloud team helped us migrate to Azure seamlessly, reducing infrastructure costs by 30% while improving application performance and scalability.",
      author: "Head of IT", 
      role: "Client", 
      companyName: "Manufacturing Group",
      image: cybaemLogoIcon,
      rating: 4,
      verified: true,
      tags: ["Cloud Migration", "Azure", "DevOps", "Automation"],
      metrics: [
        { label: "Project Duration", value: "12 Months", icon: Calendar },
        { label: "Environment", value: "Azure, Docker, Kubernetes", icon: Server },
        { label: "Team Size", value: "15+ Experts", icon: Users }
      ]
    },
    {
      id: 2,
      quote: "Digital campaigns delivered a 2× boost in qualified leads within just 90 days, significantly improving our online visibility and conversion rates.",
      author: "Marketing Lead", 
      role: "Client", 
      companyName: "SaaS Startup",
      image: cybaemLogoIcon,
      rating: 4.5,
      verified: true,
      tags: ["Digital Marketing", "SEO", "Performance Marketing", "Analytics"],
      metrics: [
        { label: "Project Duration", value: "6 Months", icon: Calendar },
        { label: "Environment", value: "Google Ads, Meta Ads, GA4", icon: Server },
        { label: "Team Size", value: "8+ Experts", icon: Users }
      ]
    },
    {
      id: 3,
      quote: "CYBAEM's software development team delivered a scalable enterprise application with modern architecture, accelerating our digital transformation and improving operational efficiency.",
      author: "Engineering Manager", 
      role: "Client", 
      companyName: "Enterprise Software Company",
      image: cybaemLogoIcon,
      rating: 5,
      verified: true,
      tags: ["Software Development", "React", "Node.js", "Microservices"],
      metrics: [
        { label: "Project Duration", value: "14 Months", icon: Calendar },
        { label: "Environment", value: "React, Node.js, AWS, PostgreSQL", icon: Server },
        { label: "Team Size", value: "18+ Experts", icon: Users }
      ]
    }
  ];

  const [activeIndex, setActiveIndex] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 lg:py-28 bg-gray-50/50 overflow-hidden relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative text-center">
        <SectionHeader subtitle="WHAT OUR CLIENTS SAY" title="Trusted by Leaders, Proven by" titleHighlight="Results." align="center" />
        <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto -mt-8 mb-24">
          Real stories from real partnerships that drive real impact.
        </p>
        
        <div className="relative max-w-6xl mx-auto flex items-center justify-center min-h-[420px]">
          
          <button onClick={handlePrev} className="absolute left-0 z-20 w-12 h-12 rounded-full bg-white shadow-md border border-gray-100 hidden md:flex items-center justify-center hover:bg-gray-50 transition-colors shrink-0 text-primary">
            <ChevronLeft size={24} />
          </button>

          <div className="relative w-full h-[420px] flex justify-center items-center">
            {testimonials.map((t, index) => {
              const isActive = index === activeIndex;
              const isPrev = index === (activeIndex - 1 + testimonials.length) % testimonials.length;
              const isNext = index === (activeIndex + 1) % testimonials.length;

              let position = "hidden";
              let xOffset = 0;
              let scale = 1;
              let zIndex = 0;
              let opacity = 0;

              if (isActive) {
                position = "active";
                xOffset = 0;
                scale = 1;
                zIndex = 10;
                opacity = 1;
              } else if (isPrev) {
                position = "prev";
                xOffset = -60;
                scale = 0.85;
                zIndex = 5;
                opacity = 0.4;
              } else if (isNext) {
                position = "next";
                xOffset = 60;
                scale = 0.85;
                zIndex = 5;
                opacity = 0.4;
              }

              if (position === "hidden") return null;

              return (
                <motion.div
                  key={t.id}
                  initial={false}
                  animate={{
                    x: `calc(-50% + ${xOffset}%)`,
                    y: "-50%",
                    scale: scale,
                    opacity: opacity,
                    zIndex: zIndex
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute top-1/2 left-1/2 w-full md:w-[80%] lg:w-[65%] bg-white rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-gray-100 p-6 md:p-8 text-left"
                >
                  <div className="flex flex-col md:flex-row gap-8 relative">
                    {/* Background Quote Mark */}
                    <Quote size={100} className="absolute top-0 left-1/2 -translate-x-1/2 text-gray-50 z-0 pointer-events-none" fill="currentColor" strokeWidth={0} />
                    
                    {/* Left Column */}
                    <div className="flex-1 relative z-10">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-semibold mb-6">
                        <BadgeCheck size={14} /> Verified Client
                      </div>
                      
                      <div className="flex items-center gap-2 mb-6">
                        <div className="flex text-yellow-400">
                          {[...Array(Math.floor(t.rating))].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                          {t.rating % 1 !== 0 && <Star size={16} fill="currentColor" className="opacity-50" />}
                        </div>
                        <span className="text-sm font-bold text-foreground">{t.rating}/5</span>
                      </div>

                      <p className="text-base md:text-lg lg:text-xl font-medium text-foreground leading-relaxed mb-6 relative z-10">
                        "{t.quote}"
                      </p>

                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
                        <div className="flex items-center gap-4">
                           {/* Simplified placeholder for company logo / info */}
                           <div className="flex items-center gap-2 shrink-0">
                             <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                               {t.companyName[0]}
                             </div>
                             <div className="font-bold text-base text-slate-800 tracking-tight leading-none">
                                {t.companyName}
                             </div>
                           </div>
                           <div className="border-l border-gray-200 pl-4">
                             <p className="font-bold text-foreground text-sm">{t.author}</p>
                             <p className="text-xs text-muted-foreground">{t.role}</p>
                           </div>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {t.tags.map(tag => (
                          <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-[10px] font-semibold">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right Column */}
                    <div className="w-full md:w-[220px] shrink-0 relative z-10 flex flex-col justify-between pt-4">
                      <div className="hidden md:block relative h-[120px] w-[120px] mx-auto -mt-8 md:-mt-10 mb-6 rounded-full overflow-hidden shadow-lg shadow-primary/30 border border-gray-100 shrink-0 bg-white p-2">
                         <img src={t.image} alt={t.author} className="w-full h-full object-contain opacity-80" />
                      </div>
                      
                      <div className="space-y-5 pl-2">
                        {t.metrics.map(m => (
                           <div key={m.label} className="flex gap-4 items-start">
                             <m.icon size={18} className="text-gray-400 mt-0.5 shrink-0" />
                             <div>
                               <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider mb-0.5">{m.label}</p>
                               <p className="text-sm font-bold text-foreground leading-tight">{m.value}</p>
                             </div>
                           </div>
                        ))}
                      </div>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </div>

          <button onClick={handleNext} className="absolute right-0 z-20 w-12 h-12 rounded-full bg-white shadow-md border border-gray-100 hidden md:flex items-center justify-center hover:bg-gray-50 transition-colors shrink-0 text-primary">
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden justify-center items-center gap-4 mt-8">
           <button onClick={handlePrev} className="w-10 h-10 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center text-primary">
             <ChevronLeft size={20} />
           </button>
           <button onClick={handleNext} className="w-10 h-10 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center text-primary">
             <ChevronRight size={20} />
           </button>
        </div>

        <div className="flex justify-center gap-3 mt-8 mb-10">
          {testimonials.map((_, i) => (
             <button 
               key={i} 
               onClick={() => setActiveIndex(i)}
               className={`w-2.5 h-2.5 rounded-full transition-all ${i === activeIndex ? 'bg-primary w-4' : 'bg-gray-300'}`} 
             />
          ))}
        </div>

       
      </div>
    </section>
  );
};

/* ──────────────────── CTA ──────────────────── */
const CTASection = () => {
  return (
    <section className="py-12 lg:py-20 pb-24">
      <div className="container mx-auto px-6 lg:px-12">
        <div 
          className="rounded-[3rem] border border-blue-100/50 p-12 lg:p-16 flex flex-col lg:flex-row items-center gap-12 relative overflow-hidden bg-cover bg-center bg-no-repeat bg-[url('/images/about-cta1.png')] lg:bg-[url('/images/about-cta.png')]"
        >
          
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-100/30 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />

          {/* Left Text */}
          <div className="lg:w-1/3 relative z-10">
            <h2 className="font-display text-4xl font-bold text-foreground leading-tight mb-6">
              Ready to <span className="text-primary italic">Transform</span> Your Business?
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-8">
              Let's discuss how CYBAEM TECH can help you streamline operations, enhance security, and achieve scalable business growth.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
              Contact Us Today <ArrowRight size={16} />
            </Link>
          </div>

          {/* Center spacer to allow background to show through */}
          <div className="lg:w-1/3 hidden lg:block h-64 relative z-10">
          </div>

          {/* Right Features */}
          <div className="lg:w-1/3 relative z-10 flex flex-col gap-8 pl-0 lg:pl-12">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-blue-50 flex items-center justify-center shrink-0">
                <Briefcase size={20} className="text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-foreground text-sm mb-1">Meaningful Work</h4>
                <p className="text-xs text-muted-foreground">Solve real problems that create impact.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-blue-50 flex items-center justify-center shrink-0">
                <TrendingUp size={20} className="text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-foreground text-sm mb-1">Growth Mindset</h4>
                <p className="text-xs text-muted-foreground">Learn, grow and unlock your potential.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-blue-50 flex items-center justify-center shrink-0">
                <Users size={20} className="text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-foreground text-sm mb-1">Amazing People</h4>
                <p className="text-xs text-muted-foreground">Work with talented, passionate people.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

/* ──────────────────── PAGE ──────────────────── */
const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white">
      <SEOHead
        title={aboutSeoData.title}
        description={aboutSeoData.description}
        canonical={aboutSeoData.canonical}
        keywords={aboutSeoData.keywords}
        ogDescription={aboutSeoData.ogDescription}
        twitterDescription={aboutSeoData.twitterDescription}
        jsonLd={aboutSeoData.jsonLd}
      />
      <Navbar />
      <main>
        <Hero />
        <PillarsSection />
        <StatsStrip />
        <CoreValuesSection />
        <TimelineSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default About;
