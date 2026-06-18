import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import {
  Users, Briefcase, Rocket, Award, Star,
  Flag, BarChart, Lightbulb, Globe,
  ArrowRight, Mouse,
  Target, Heart, Trophy, BookOpen, User,
  ChevronLeft, ChevronRight, Calendar, Utensils, Smile, ImageIcon, Sparkles, PartyPopper
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { containerVariants, itemVariants } from "@/lib/animations";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { approachSeoData } from "@/data/seo/approachSeo";

const useSEO = () => {
  return (
    <SEOHead
      title={approachSeoData.title}
      description={approachSeoData.description}
      canonical={approachSeoData.canonical}
      keywords={approachSeoData.keywords}
      ogDescription={approachSeoData.ogDescription}
      ogImageAlt={approachSeoData.ogImageAlt}
      twitterDescription={approachSeoData.twitterDescription}
      twitterImageAlt={approachSeoData.twitterImageAlt}
      jsonLd={approachSeoData.jsonLd}
    />
  );
};

/* --- HERO --- */
const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="relative pt-32 pb-40 lg:pb-48 overflow-hidden bg-[#050b14] text-white">
      {/* Background graphic */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="max-w-2xl"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-4 py-1.5 mb-8">
              <span className="text-xs font-bold tracking-widest uppercase text-white/90">Life At Cybaem Tech</span>
            </motion.div>
            <motion.h1 variants={itemVariants} className="font-display text-5xl lg:text-7xl font-bold leading-[1.1] mb-6">
              Build. Innovate. <br />
              <span className="text-[#8b5cf6]">Grow Together.</span>
            </motion.h1>
            <motion.p variants={itemVariants} className="text-lg text-white/70 leading-relaxed mb-10 max-w-lg">
              We are problem solvers, innovators and dreamers. Together, we build technology that creates impact and shapes the future.
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4">
              <Link to="/about" className="px-6 py-3.5 rounded-full bg-[#8b5cf6] hover:bg-[#7c3aed] transition-colors text-white font-medium flex items-center gap-2 text-sm">
                Explore Our Culture <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="px-6 py-3.5 rounded-full border border-white/30 hover:bg-white/10 transition-colors text-white font-medium flex items-center gap-2 text-sm">
                Join Our Team <ArrowRight size={16} />
              </Link>
            </motion.div>
            <motion.div variants={itemVariants} className="mt-16 flex items-center gap-2 text-white/50 text-sm font-medium">
              <Mouse size={18} /> Scroll Down
            </motion.div>
          </motion.div>

          {/* Hero Images Grid */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="grid grid-cols-2 gap-4 relative">
              <img src="/lifeatcybaemtech/Team.jpg" alt="Team" className="rounded-2xl w-full h-56 object-cover col-span-2 border border-white/10" />
              <img src="/lifeatcybaemtech/Foundationday.JPG" alt="Foundation Day" className="rounded-2xl w-full h-48 object-cover border border-white/10" />
              <img src="/lifeatcybaemtech/TeamLunch.jpeg" alt="Team Lunch" className="rounded-2xl w-full h-48 object-cover border border-white/10" />
              
              {/* Floating Badge */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#1e3a8a]/90 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-white/20 text-center min-w-[200px]">
                <Users size={32} className="mx-auto text-white mb-2" />
                <h3 className="text-3xl font-bold text-white mb-1">200+</h3>
                <p className="text-xs text-white/80 font-medium">Cybaemites<br/>Growing Together</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* --- STATS --- */
const StatsSection = () => {
  const stats = [
    { icon: Users, value: "200+", label: "Cybaemites", color: "text-blue-600", bg: "bg-blue-50" },
    { icon: Briefcase, value: "50+", label: "Active Clients", color: "text-blue-600", bg: "bg-blue-50" },
    { icon: Rocket, value: "150+", label: "Projects Delivered", color: "text-blue-600", bg: "bg-blue-50" },
    { icon: Award, value: "5+", label: "Years of Excellence", color: "text-green-600", bg: "bg-green-50" },
    { icon: Star, value: "4.8/5", label: "Employee Rating", color: "text-yellow-600", bg: "bg-yellow-50" },
  ];

  return (
    <div className="container mx-auto px-6 lg:px-12 relative z-20 -mt-20 mb-24">
      <div className="bg-white rounded-3xl shadow-xl border border-border p-8 lg:p-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 divide-x divide-border">
          {stats.map((stat, i) => (
            <div key={i} className={`flex flex-col items-center text-center ${i === 0 ? '' : 'pl-8'}`}>
              <div className={`w-12 h-12 rounded-full ${stat.bg} flex items-center justify-center mb-4`}>
                <stat.icon size={24} className={stat.color} />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-1">{stat.value}</h3>
              <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* --- JOURNEY --- */
const JourneySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const timeline = [
    { year: "2020", title: "Founded", desc: "Cybaem Tech was established with a vision to solve real-world problems.", icon: Flag },
    { year: "2022", title: "Growth", desc: "Expanded our team and capabilities delivering successful digital solutions.", icon: BarChart },
    { year: "2024", title: "Innovation", desc: "Strengthened our expertise in Cloud, DevOps, Cybersecurity and emerging tech.", icon: Lightbulb },
    { year: "2026", title: "Global Vision", desc: "Empowering businesses worldwide with secure, scalable and future-ready solutions.", icon: Globe },
  ];

  return (
    <section ref={ref} className="py-16">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-[300px_1fr] gap-16 items-start">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.span variants={itemVariants} className="text-xs font-bold tracking-widest text-[#2563eb] uppercase mb-4 block">
              Our Journey
            </motion.span>
            <motion.h2 variants={itemVariants} className="font-display text-4xl lg:text-5xl font-bold leading-tight mb-6 text-foreground">
              From a Vision <br/> to <span className="text-[#2563eb]">Real Impact</span>
            </motion.h2>
            <motion.p variants={itemVariants} className="text-muted-foreground mb-8 text-sm leading-relaxed">
              Our journey is built on passion, innovation and the people who make it possible.
            </motion.p>
            <motion.div variants={itemVariants}>
              <Link to="/about" className="inline-flex px-6 py-3 rounded-full bg-[#8b5cf6] hover:bg-[#7c3aed] transition-colors text-white font-medium items-center gap-2 text-sm">
                Know Our Story <ArrowRight size={16} />
              </Link>
            </motion.div>
          </motion.div>

          <div className="relative pt-12">
            <div className="absolute top-[4.5rem] left-10 right-10 h-px bg-[#e2e8f0] border-dashed border-t-2 hidden md:block"></div>
            <div className="grid md:grid-cols-4 gap-8">
              {timeline.map((item, i) => (
                <div key={i} className="relative z-10 text-center md:text-left">
                  <h4 className="text-xl font-bold text-[#2563eb] mb-4 text-center">{item.year}</h4>
                  <div className="w-14 h-14 bg-white border border-[#e2e8f0] rounded-full flex items-center justify-center mb-6 shadow-sm mx-auto">
                    <item.icon size={22} className="text-[#2563eb]" />
                  </div>
                  <h5 className="font-bold text-foreground mb-3 text-center">{item.title}</h5>
                  <p className="text-sm text-muted-foreground leading-relaxed text-center">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* --- PEOPLE --- */
const PeopleSection = () => {
  const people = [
    {
      name: "Rohan Bhosale",
      role: "Founder & CEO",
      quote: "Cybaem Tech has helped me grow technically and professionally. The learning never stops here!",
      years: "3 Years Journey",
      team: "Development Team",
      image: "https://ui-avatars.com/api/?name=Rohan+Bhosale&background=0D8ABC&color=fff"
    },
    {
      name: "Richa Nawale",
      role: "Sr. UI/UX Designer",
      quote: "I love the collaborative culture and the freedom to create meaningful designs.",
      years: "2 Years Journey",
      team: "Design Team",
      image: "https://ui-avatars.com/api/?name=Richa+Nawale&background=E04A7B&color=fff"
    },
    {
      name: "Yash Bhalekar",
      role: "DevOps Engineer",
      quote: "Great work-life balance, supportive leadership and amazing opportunities!",
      years: "4 Years Journey",
      team: "DevOps Team",
      image: "https://ui-avatars.com/api/?name=Yash+Bhalekar&background=42B57B&color=fff"
    }
  ];

  return (
    <section className="py-24 bg-[#f8fafc]">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="text-xs font-bold tracking-widest text-[#2563eb] uppercase mb-3 block">
              People of Cybaem
            </span>
            <h2 className="font-display text-4xl font-bold text-foreground">
              Real People. Real Stories.
            </h2>
          </div>
          <div className="mt-6 md:mt-0 flex items-center gap-6">
            <Link to="#" className="px-6 py-2.5 rounded-full border border-border text-sm font-semibold hover:bg-muted transition-colors flex items-center gap-2">
              View All Stories <ArrowRight size={16} />
            </Link>
            <div className="flex gap-2">
              <button className="w-10 h-10 rounded-full border border-border bg-white flex items-center justify-center hover:bg-muted transition-colors text-muted-foreground"><ArrowRight size={18} className="rotate-180" /></button>
              <button className="w-10 h-10 rounded-full border border-border bg-white flex items-center justify-center hover:bg-muted transition-colors text-muted-foreground"><ArrowRight size={18} /></button>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {people.map((p, i) => (
            <div key={i} className="bg-white rounded-3xl p-8 shadow-sm border border-border">
              <div className="flex items-center gap-5 mb-8">
                <img src={p.image} alt={p.name} className="w-16 h-16 rounded-full object-cover border border-border" />
                <div>
                  <h4 className="font-bold text-lg text-foreground mb-1">{p.name}</h4>
                  <p className="text-[#2563eb] text-sm font-semibold">{p.role}</p>
                </div>
              </div>
              <blockquote className="text-muted-foreground mb-10 text-sm leading-relaxed min-h-[4rem] font-medium">
                "{p.quote}"
              </blockquote>
              <div className="flex items-center justify-between text-xs font-semibold text-muted-foreground border-t border-border pt-6">
                <span className="flex items-center gap-2 bg-muted px-3 py-1.5 rounded-full"><User size={14} /> {p.years}</span>
                <span className="flex items-center gap-2 bg-muted px-3 py-1.5 rounded-full"><Users size={14} /> {p.team}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* --- CELEBRATIONS --- */
const CelebrationsSection = () => {
  const celebrations = [
    {
      title: "Team Lunch",
      date: "15 May, 2025",
      desc: "Good food, great conversations and even better togetherness! 💙",
      stats: [
        { icon: Users, value: "35+", label: "Cybaemites" },
        { icon: Utensils, value: "1", label: "Amazing Day" },
        { icon: Smile, value: "100%", label: "Good Vibes" },
      ],
      image: "/lifeatcybaemtech/TeamLunch.jpeg"
    },
    {
      title: "Foundation Day",
      date: "10 Aug, 2024",
      desc: "Celebrating our milestones and the incredible journey so far! ✨",
      stats: [
        { icon: Users, value: "100+", label: "Cybaemites" },
        { icon: Award, value: "4", label: "Years Strong" },
        { icon: Smile, value: "100%", label: "Celebration" },
      ],
      image: "/lifeatcybaemtech/Foundationday.JPG"
    },
    {
      title: "Diwali Celebration",
      date: "12 Nov, 2024",
      desc: "Lighting up the workspace with joy, colors, and festive vibes! 🪔",
      stats: [
        { icon: Users, value: "80+", label: "Cybaemites" },
        { icon: Sparkles, value: "Countless", label: "Memories" },
        { icon: Smile, value: "100%", label: "Festivity" },
      ],
      image: "/lifeatcybaemtech/DiwaliCelebration.jfif"
    },
    {
      title: "Women's Day",
      date: "08 Mar, 2025",
      desc: "Honoring the incredible women who make Cybaem Tech amazing! 🌸",
      stats: [
        { icon: Users, value: "40+", label: "Superwomen" },
        { icon: Heart, value: "1", label: "Special Day" },
        { icon: Smile, value: "100%", label: "Empowerment" },
      ],
      image: "/lifeatcybaemtech/Womensdaycelebration.jpeg"
    },
    {
      title: "Trip to Point",
      date: "22 Jan, 2025",
      desc: "A refreshing getaway full of fun, adventure, and team bonding! ⛰️",
      stats: [
        { icon: Users, value: "50+", label: "Cybaemites" },
        { icon: Globe, value: "1", label: "Destination" },
        { icon: Smile, value: "100%", label: "Adventure" },
      ],
      image: "/lifeatcybaemtech/celebrationatpoint.jpg"
    }
  ];

  const [current, setCurrent] = useState(0);
  const total = celebrations.length;

  const next = useCallback(() => setCurrent((c) => (c + 1) % total), [total]);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + total) % total), [total]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = celebrations[current];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <PartyPopper size={20} className="text-[#2563eb]" />
            <span className="text-xs font-bold tracking-widest text-[#2563eb] uppercase">
              Team Culture & Celebrations
            </span>
            <PartyPopper size={20} className="text-[#2563eb]" />
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            We celebrate every milestone <br/>
            <span className="font-serif italic text-[#8b5cf6] text-5xl lg:text-6xl lowercase">together</span>
          </h2>
          <p className="text-muted-foreground mt-4 text-sm max-w-2xl mx-auto">
            From festivals to achievements, our vibrant culture brings us closer as one team.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Slider Controls */}
          <button onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 md:-translate-x-6 z-20 w-14 h-14 bg-white rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex items-center justify-center text-[#2563eb] hover:bg-gray-50 transition-colors">
            <ChevronLeft size={28} />
          </button>
          <button onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 md:translate-x-6 z-20 w-14 h-14 bg-white rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex items-center justify-center text-[#2563eb] hover:bg-gray-50 transition-colors">
            <ChevronRight size={28} />
          </button>

          {/* Slide Card */}
          <div className="bg-[#0f172a] rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row relative min-h-[500px] shadow-2xl">
            {/* Left Content */}
            <div className="md:w-1/2 p-10 lg:p-16 flex flex-col justify-center relative z-10 text-white">
              <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 w-max mb-8 border border-white/10">
                <Calendar size={16} className="text-white/80" />
                <span className="text-sm font-medium">{slide.date}</span>
              </div>
              
              <h3 className="font-display text-4xl lg:text-5xl font-bold mb-4 relative w-max">
                {slide.title}
                <div className="absolute -bottom-2 left-0 w-1/3 h-1 bg-[#eab308] rounded-full"></div>
              </h3>
              
              <p className="text-lg text-white/80 mb-12 max-w-md">
                {slide.desc}
              </p>
              
              <div className="flex flex-wrap items-center gap-6 lg:gap-8 divide-x divide-white/10">
                {slide.stats.map((s, i) => (
                  <div key={i} className={`flex items-center gap-3 ${i > 0 ? 'pl-6 lg:pl-8' : ''}`}>
                    <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/5">
                      <s.icon size={20} className="text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-lg lg:text-xl">{s.value}</div>
                      <div className="text-[10px] lg:text-xs text-white/60 font-medium">{s.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image */}
            <div className="md:w-1/2 relative min-h-[300px] md:min-h-full">
              {/* Removed gradient overlays completely so image is 100% visible */}
              
              <img 
                key={slide.image}
                src={slide.image} 
                alt={slide.title} 
                className="absolute inset-0 w-full h-full object-cover object-left animate-fade-in transition-opacity duration-500"
              />
            </div>
          </div>

          {/* Dots */}
          <div className="flex items-center justify-center gap-3 mt-8">
            {celebrations.map((_, i) => (
              <button 
                key={i} 
                onClick={() => setCurrent(i)}
                className={`h-2.5 rounded-full transition-all duration-300 ${current === i ? 'w-8 bg-[#2563eb]' : 'w-2.5 bg-gray-200 hover:bg-gray-300'}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
          
          {/* Bottom Banner */}
          <div className="mt-12 bg-[#f8fafc] rounded-2xl border border-border p-6 flex flex-col md:flex-row items-center justify-between max-w-4xl mx-auto">
            <div className="flex items-center gap-5 mb-4 md:mb-0">
              <div className="w-14 h-14 bg-[#2563eb] rounded-full flex items-center justify-center shrink-0">
                <Sparkles size={24} className="text-white" />
              </div>
              <div>
                <h4 className="font-bold text-foreground text-lg">Every moment. Every milestone.</h4>
                <p className="text-[#2563eb] font-serif italic text-xl flex items-center gap-2">Always together. <Heart size={18} className="text-[#2563eb]" /></p>
              </div>
            </div>
            <button className="px-6 py-3 bg-white border border-[#2563eb] text-[#2563eb] rounded-full font-semibold text-sm hover:bg-blue-50 transition-colors flex items-center gap-2">
              <ImageIcon size={18} /> View All Moments
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

/* --- CULTURE VALUES --- */
const CultureSection = () => {
  const values = [
    { title: "Innovation", icon: Rocket, color: "text-[#3b82f6]", bg: "bg-[#eff6ff]", border: "border-[#bfdbfe]", desc: "We embrace new ideas and technologies to create impact." },
    { title: "Collaboration", icon: Users, color: "text-[#10b981]", bg: "bg-[#ecfdf5]", border: "border-[#a7f3d0]", desc: "We work together, support each other and win as one team." },
    { title: "Learning", icon: BookOpen, color: "text-[#8b5cf6]", bg: "bg-[#f5f3ff]", border: "border-[#ddd6fe]", desc: "Continuous learning keeps us curious and future-ready." },
    { title: "Ownership", icon: Target, color: "text-[#f97316]", bg: "bg-[#fff7ed]", border: "border-[#fed7aa]", desc: "We take ownership, deliver with pride and exceed expectations." },
    { title: "Work-Life Balance", icon: Heart, color: "text-[#ef4444]", bg: "bg-[#fef2f2]", border: "border-[#fecaca]", desc: "We respect our time and value a healthy life balance." },
    { title: "Recognition", icon: Trophy, color: "text-[#eab308]", bg: "bg-[#fefce8]", border: "border-[#fef08a]", desc: "We celebrate wins and appreciate every contribution." },
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <span className="text-xs font-bold tracking-widest text-[#2563eb] uppercase mb-3 block">
            Our Culture
          </span>
          <h2 className="font-display text-4xl font-bold text-foreground">
            Values That Drive Us
          </h2>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
          {values.map((v, i) => (
            <div key={i} className={`rounded-3xl p-6 border ${v.border} hover:-translate-y-1.5 transition-transform bg-white shadow-sm flex flex-col items-center text-center`}>
              <div className={`w-16 h-16 rounded-2xl ${v.bg} flex items-center justify-center mb-6`}>
                <v.icon size={28} className={v.color} />
              </div>
              <h4 className="font-bold text-[15px] text-foreground mb-3">{v.title}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed font-medium">
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* --- PAGE --- */
const Approach = () => {
  return (
    <div className="min-h-screen bg-white text-foreground font-sans">
      {useSEO()}
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <JourneySection />
        <PeopleSection />
        <CelebrationsSection />
        <CultureSection />
      </main>
      <Footer />
    </div>
  );
};

export default Approach;
