import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import {
  Users, Briefcase, Rocket, Award, Star,
  Flag, BarChart, Lightbulb, Globe,
  ArrowRight, Mouse,
  Target, Heart, Trophy, BookOpen, User,
  ChevronLeft, ChevronRight, Calendar, Utensils, Smile, ImageIcon, Sparkles, PartyPopper, Linkedin
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { containerVariants, itemVariants } from "@/lib/animations";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { lifeAtCybaemtechSeoData } from "@/data/seo/lifeAtCybaemtechSeo";

const useSEO = () => {
  return (
    <SEOHead
      title={lifeAtCybaemtechSeoData.title}
      description={lifeAtCybaemtechSeoData.description}
      canonical={lifeAtCybaemtechSeoData.canonical}
      keywords={lifeAtCybaemtechSeoData.keywords}
      ogTitle={lifeAtCybaemtechSeoData.ogTitle}
      ogDescription={lifeAtCybaemtechSeoData.ogDescription}
      twitterTitle={lifeAtCybaemtechSeoData.twitterTitle}
      twitterDescription={lifeAtCybaemtechSeoData.twitterDescription}
      jsonLd={lifeAtCybaemtechSeoData.jsonLd}
    />
  );
};

/* --- HERO --- */
const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [isPlayingMobile, setIsPlayingMobile] = useState(false);

  return (
    <section ref={ref} className="relative pt-28 pb-32 lg:pt-32 lg:pb-48 overflow-hidden bg-[#051433] lg:bg-[hsl(var(--primary))]">
      {/* Background graphic & Subtle Lighting */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 pointer-events-none"></div>
      <div className="absolute -top-40 -right-40 w-[30rem] h-[30rem] bg-blue-500 rounded-full mix-blend-screen filter blur-[100px] opacity-20 animate-blob pointer-events-none"></div>
      <div className="absolute top-1/2 -left-40 w-[30rem] h-[30rem] bg-indigo-500 rounded-full mix-blend-screen filter blur-[100px] opacity-10 animate-blob animation-delay-2000 pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* === DESKTOP LAYOUT (Hidden on mobile) === */}
        <div className="hidden lg:grid lg:grid-cols-[5fr_7fr] gap-8 lg:gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="max-w-2xl"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center mb-6">
              <span className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-white/60">
                Life At Cybaem Tech
              </span>
            </motion.div>
            <motion.h1 variants={itemVariants} className="font-display text-5xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
              Build. Innovate. <br />
              <span className="italic font-light">Grow Together.</span>
            </motion.h1>
            <motion.p variants={itemVariants} className="text-lg lg:text-xl text-white/70 max-w-xl leading-relaxed mb-10">
              We are problem solvers, innovators and dreamers. Together, we build technology that creates impact and shapes the future.
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium border border-white/30 text-white rounded-full hover:bg-white/10 transition-colors"
              >
                Explore Our Culture <ArrowRight size={14} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium bg-white text-[#071A3D] rounded-full hover:opacity-90 transition-opacity"
              >
                Join Our Team <ArrowRight size={14} />
              </Link>
            </motion.div>
          </motion.div>

          {/* Hero Video */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:flex justify-end w-full"
          >
            <div className="relative w-full max-w-3xl aspect-[16/9] rounded-[2rem] overflow-hidden border-[6px] border-white/10 shadow-[0_20px_50px_rgba(37,99,235,0.2)]">
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="absolute inset-0 w-full h-full object-cover pointer-events-auto"
              >
                <source src="/video/video.mp4" type="video/mp4" />
              </video>
            </div>
          </motion.div>
        </div>

        {/* === MOBILE LAYOUT (Hidden on desktop) === */}
        <div className="lg:hidden flex flex-col pt-4 pb-2">
          
          {/* Header Text */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-[2px] bg-[#38bdf8]"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]"></div>
            </div>
            <span className="inline-block text-xs font-bold tracking-[0.1em] uppercase text-[#38bdf8] mb-5">
              Life At Cybaem Tech
            </span>
            <h1 className="font-display text-[2.75rem] leading-[1.1] font-bold text-white tracking-tight">
              Build.<br />
              Innovate.<br />
              <div className="relative inline-block mt-0.5">
                <span className="italic text-[#38bdf8] font-semibold pr-4">Grow Together.</span>
                
                {/* Underline Swoosh */}
                <svg className="absolute -bottom-1.5 left-0 w-[90%] h-[6px]" viewBox="0 0 200 10" preserveAspectRatio="none">
                  <path d="M0,5 Q100,10 200,2" stroke="#1d4ed8" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                  <path d="M10,8 Q100,12 180,4" stroke="#2563eb" strokeWidth="1" fill="none" opacity="0.6" />
                </svg>
                
                {/* Paper plane graphics */}
                <svg className="absolute -top-6 -right-6 w-[56px] h-[56px] text-[#38bdf8]/60" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M80,20 L35,45 L45,55 Z" strokeLinejoin="round" />
                  <path d="M45,55 L48,65 L55,48" strokeLinejoin="round" />
                  <path d="M40,65 Q25,85 5,95" strokeDasharray="3 3" />
                </svg>
              </div>
            </h1>
          </motion.div>

          {/* Video / Image Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-8 relative"
          >
            <div className="relative w-full aspect-[4/2.5] rounded-[1.25rem] overflow-hidden border border-white/10 shadow-xl bg-black">
              {isPlayingMobile ? (
                <video
                  autoPlay
                  controls
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                >
                  <source src="/video/video.mp4" type="video/mp4" />
                </video>
              ) : (
                <>
                  <img src="/lifeatcybaemtech/Foundationday.JPG" alt="Foundation Day Celebration" className="absolute inset-0 w-full h-full object-cover object-center" />
                  <div className="absolute inset-0 bg-black/10"></div>
                  
                  {/* Play Button */}
                  <div 
                    onClick={() => setIsPlayingMobile(true)}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-105 transition-transform z-10"
                  >
                    <div className="w-0 h-0 border-t-[7px] border-t-transparent border-l-[12px] border-l-[#1d4ed8] border-b-[7px] border-b-transparent ml-1"></div>
                  </div>

                  {/* Overlay Text */}
                  <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-md rounded-lg px-3 py-2 flex items-center gap-3 z-10 pointer-events-none">
                    <div className="flex items-center gap-1.5 text-white/90">
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                      <span className="text-[11px] font-semibold tracking-wide">02:15</span>
                    </div>
                    <div className="w-px h-3 bg-white/30"></div>
                    <span className="text-[11px] font-medium text-white/90">Foundation Day Celebration</span>
                  </div>
                </>
              )}
            </div>
            
            {/* Soft glow behind the video container */}
            <div className="absolute -inset-2 bg-blue-500/20 blur-xl -z-10 rounded-full opacity-50"></div>
          </motion.div>

          {/* Text Description */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8"
          >
            <p className="text-[#cbd5e1] text-[15px] leading-relaxed">
              We are problem solvers, innovators and dreamers.
              Together, we build technology that creates
              impact and shapes the future.
            </p>
          </motion.div>

          {/* Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col gap-3.5"
          >
            <Link to="/about" className="flex items-center justify-between w-full p-1.5 bg-[#1d4ed8] text-white rounded-[2rem] hover:bg-blue-700 transition-colors shadow-lg group">
              <div className="flex items-center gap-4 pl-1">
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center shrink-0">
                  <Users size={18} className="text-white" />
                </div>
                <span className="font-semibold text-[15px]">Explore Our Culture</span>
              </div>
              <div className="w-10 h-10 flex items-center justify-center pr-1">
                <ArrowRight size={20} className="text-white group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link to="/contact" className="flex items-center justify-between w-full p-1.5 bg-white text-[#0f172a] rounded-[2rem] hover:bg-gray-50 transition-colors shadow-md group">
              <div className="flex items-center gap-4 pl-1">
                <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center shrink-0 bg-white">
                  <Briefcase size={18} className="text-[#1d4ed8]" />
                </div>
                <span className="font-semibold text-[15px]">Join Our Team</span>
              </div>
              <div className="w-10 h-10 flex items-center justify-center pr-1">
                <ArrowRight size={20} className="text-[#0f172a] group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
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
      <div className="bg-white rounded-[1.5rem] lg:rounded-3xl shadow-xl border border-border p-6 lg:p-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-6 gap-x-4 lg:gap-8 lg:divide-x divide-border">
          {stats.map((stat, i) => (
            <div key={i} className={`flex flex-col items-center text-center ${i === 0 ? '' : 'lg:pl-8'}`}>
              <div className={`w-10 h-10 lg:w-12 lg:h-12 rounded-full ${stat.bg} flex items-center justify-center mb-3 lg:mb-4`}>
                <stat.icon className={`w-5 h-5 lg:w-6 lg:h-6 ${stat.color}`} />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-0.5 lg:mb-1">{stat.value}</h3>
              <p className="text-xs lg:text-sm font-medium text-muted-foreground">{stat.label}</p>
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
    <section ref={ref} className="py-1">
      {/*  <div className="container mx-auto px-6 lg:px-12">
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
              From a Vision <br /> to <span className="text-[#2563eb]">Real Impact</span>
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
      </div>*/}
    </section>
  );
};

/* --- PEOPLE --- */
const PeopleSection = () => {
  const people = [
    {
      name: "Rohan Bhosale",
      role: "Founder & CEO",
      quote: "Leading digital marketing initiatives across Fortune 500 companies.",
      years: "18+ Years Experience",
      team: "Global IT Strategy & Digital Marketing",
      image: "/people/rohan.png",
      linkedin: "https://www.linkedin.com/in/rohanbhosale15/"
    },
    {
      name: "Akshay Nawale",
      role: "Chief Technology Officer",
      quote: "Architecting next-generation technology solutions & leading innovation teams.",
      years: "15+ Years Experience",
      team: "AI Strategy & Product Leadership",
      image: "/people/akshay.png",
      linkedin: "https://www.linkedin.com/in/akshay-navle-2929a245/"
    },
    {
      name: "Yash Bhalekar",
      role: "Director",
      quote: "Driving financial excellence and strategic growth across global operations.",
      years: "12+ Years Experience",
      team: "Business Development",
      image: "/people/yash.png",
      linkedin: "https://www.linkedin.com/in/yash-bhalekar-imoexo/"
    }
  ];

  return (
    <section className="py-24 bg-[#f8fafc] relative overflow-hidden">
      {/* Subtle radial background glow to match the reference */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-50/60 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-start justify-between mb-16 gap-8">
          <div>
            <span className="text-sm font-bold tracking-widest text-[#2563eb] uppercase mb-4 block">
              PEOPLE OF CYBAEM
            </span>
            <h2 className="font-display text-4xl lg:text-[2.75rem] font-bold text-[#0f172a] mb-4">
              Real People. Real Stories<span className="text-[#2563eb]">.</span>
            </h2>
            <p className="text-[#64748b] text-lg max-w-lg">
              Meet the visionaries driving innovation, building solutions, and shaping the future at Cybaem Tech.
            </p>
          </div>
          <div className="flex items-center gap-4 shrink-0 mt-2">
            <Link to="#" className="px-6 py-2.5 rounded-full border border-[#2563eb] text-[#2563eb] text-sm font-bold hover:bg-blue-50 transition-colors flex items-center gap-2 mr-4">
              View All Stories <ArrowRight size={16} />
            </Link>
            <div className="flex gap-3">
              <button className="w-11 h-11 rounded-full border border-gray-200 bg-white flex items-center justify-center hover:border-[#2563eb] hover:text-[#2563eb] transition-colors text-gray-400 shadow-sm"><ArrowRight size={18} className="rotate-180" /></button>
              <button className="w-11 h-11 rounded-full border border-gray-200 bg-white flex items-center justify-center hover:border-[#2563eb] hover:text-[#2563eb] transition-colors text-gray-400 shadow-sm"><ArrowRight size={18} /></button>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {people.map((p, i) => (
            <div key={i} className="bg-white rounded-[2rem] shadow-[0_15px_50px_-12px_rgba(37,99,235,0.15)] flex flex-col group hover:-translate-y-2 transition-all duration-300 border border-blue-50 overflow-hidden">
              <div className="w-full h-72 relative overflow-hidden flex items-end justify-center bg-[url('/people/bg-pattern.png')] bg-cover bg-center bg-no-repeat">
                <img src={p.image} alt={p.name} className="relative z-0 w-full h-full object-contain object-bottom group-hover:scale-105 transition-transform duration-500" />
                <a href={p.linkedin} target="_blank" rel="noopener noreferrer" className="absolute top-5 right-5 w-8 h-8 bg-[#0a66c2] text-white rounded-lg flex items-center justify-center shadow-md hover:bg-[#004182] transition-colors z-10">
                  <Linkedin size={16} />
                </a>
              </div>
              <div className="px-8 pb-8 pt-8 flex flex-col grow bg-white">
                <div className="mb-5 text-center">
                  <h4 className="font-display font-bold text-[22px] text-[#0f172a] mb-1.5">{p.name}</h4>
                  <p className="text-primary font-bold text-sm uppercase tracking-wider">{p.role}</p>
                  <div className="w-8 h-[2px] bg-[#2563eb] mx-auto mt-4 rounded-full"></div>
                </div>
                <p className="text-[#64748b] text-[13px] italic mb-8 grow text-center leading-relaxed px-2">
                  "{p.quote}"
                </p>
                <div className="space-y-4 pt-6 border-t border-gray-100">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#eff6ff] flex items-center justify-center shrink-0">
                      <Star size={18} className="text-[#2563eb]" />
                    </div>
                    <span className="text-sm font-bold text-[#0f172a]">{p.years}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#eff6ff] flex items-center justify-center shrink-0">
                      <Users size={18} className="text-[#2563eb]" />
                    </div>
                    <span className="text-sm font-bold text-[#0f172a]">{p.team}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 bg-white rounded-[2rem] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-100">
            <div className="flex items-center gap-5 pt-4 md:pt-0 pl-0 md:pl-4 lg:pl-8">
              <div className="w-14 h-14 bg-[#eff6ff] rounded-full flex items-center justify-center shrink-0">
                <Users size={24} className="text-[#2563eb]" />
              </div>
              <div>
                <h4 className="font-bold text-[#0f172a] text-[17px] mb-0.5">Experienced Leaders</h4>
                <p className="text-xs text-[#64748b] font-medium">Industry experts with proven track record</p>
              </div>
            </div>

            <div className="flex items-center gap-5 pt-4 md:pt-0 pl-0 md:pl-8 lg:pl-12">
              <div className="w-14 h-14 bg-[#eff6ff] rounded-full flex items-center justify-center shrink-0">
                <Rocket size={24} className="text-[#2563eb]" />
              </div>
              <div>
                <h4 className="font-bold text-[#0f172a] text-[17px] mb-0.5">Innovation Driven</h4>
                <p className="text-xs text-[#64748b] font-medium">Building the future with cutting-edge solutions</p>
              </div>
            </div>

            <div className="flex items-center gap-5 pt-4 md:pt-0 pl-0 md:pl-8 lg:pl-12">
              <div className="w-14 h-14 bg-[#eff6ff] rounded-full flex items-center justify-center shrink-0">
                <Target size={24} className="text-[#2563eb]" />
              </div>
              <div>
                <h4 className="font-bold text-[#0f172a] text-[17px] mb-0.5">Results That Matter</h4>
                <p className="text-xs text-[#64748b] font-medium">Delivering impact across the globe</p>
              </div>
            </div>
          </div>
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
      image: "/lifeatcybaemtech/TeamLunch.jpg"
    },
    {
      title: "Foundation Day 2024",
      date: "15 June, 2024",
      desc: "Celebrating our milestones and the incredible journey so far! ✨",
      stats: [
        { icon: Users, value: "100+", label: "Cybaemites" },
        { icon: Award, value: "4", label: "Years Strong" },
        { icon: Smile, value: "100%", label: "Celebration" },
      ],
      image: "/lifeatcybaemtech/Foundationday.jpg"
    },
    {
      title: "Foundation Day 2026",
      date: "15 June, 2026",
      desc: "Celebrating our milestones and the incredible journey so far! ✨",
      stats: [
        { icon: Users, value: "150+", label: "Cybaemites" },
        { icon: Award, value: "6", label: "Years Strong" },
        { icon: Smile, value: "100%", label: "Celebration" },
      ],
      image: "/lifeatcybaemtech/Foundationday2026.jpg"
    },
    {
      title: "Team Outing",
      date: "21 June, 2026",
      desc: "Unwinding, relishing, and making memories together! 🌲",
      stats: [
        { icon: Users, value: "150+", label: "Cybaemites" },
        { icon: Award, value: "1", label: "Day of Fun" },
        { icon: Smile, value: "100%", label: "Good Times" },
      ],
      image: "/lifeatcybaemtech/TeamOuting.jpg"
    },
    {
      title: "Diwali Celebration",
      date: "12 Nov, 2025",
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
      image: "/lifeatcybaemtech/Womensdaycelebration.jpg"
    },
    {
      title: "Team Lunch",
      date: "15 May, 2026",
      desc: "Good food, great conversations and even better togetherness! 💙",
      stats: [
        { icon: Users, value: "150+", label: "Cybaemites" },
        { icon: Utensils, value: "1", label: "Amazing Day" },
        { icon: Smile, value: "100%", label: "Good Vibes" },
      ],
      image: "/lifeatcybaemtech/TeamLunch.jpg"
    },
    {
      title: "Celebration at Point",
      date: "22 Jan, 2026",
      desc: "Great conversations and even better togetherness! 💙",
      stats: [
        { icon: Users, value: "150+", label: "Cybaemites" },
        { icon: Globe, value: "1", label: "Destination" },
        { icon: Smile, value: "100%", label: "Good Times" },
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
            We celebrate every milestone <br />
            <span className="font-serif italic text-primary text-5xl lg:text-6xl lowercase">together</span>
          </h2>
          <p className="text-muted-foreground mt-4 text-sm max-w-2xl mx-auto">
            From festivals to achievements, our vibrant culture brings us closer as one team.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Slider Controls */}
          <button onClick={prev} className="absolute -left-4 md:-left-8 lg:-left-16 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-white rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex items-center justify-center text-[#2563eb] hover:bg-gray-50 transition-colors border border-gray-100">
            <ChevronLeft size={28} />
          </button>
          <button onClick={next} className="absolute -right-4 md:-right-8 lg:-right-16 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-white rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex items-center justify-center text-[#2563eb] hover:bg-gray-50 transition-colors border border-gray-100">
            <ChevronRight size={28} />
          </button>

          {/* Slide Card */}
          <div className="bg-[#041633] rounded-[32px] overflow-hidden flex flex-col relative shadow-[0_20px_50px_rgba(4,22,51,0.4)]">
            {/* Top Image */}
            <div className="w-full relative h-[350px] md:h-[480px]">
              {/* Subtle vignette effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-transparent z-10"></div>

              {/* Seamless blend gradient at the bottom */}
              <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#041633] via-[#041633]/80 to-transparent z-20"></div>

              <img
                key={slide.image}
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover object-center animate-fade-in transition-opacity duration-500"
              />
            </div>

            {/* Bottom Content */}
            <div className="w-full px-8 pb-10 lg:px-12 lg:pb-12 pt-0 flex flex-col lg:flex-row lg:items-end justify-between relative z-30 text-white gap-8 -mt-20">
              <div>
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-5 py-2.5 w-max mb-6 border border-white/10 shadow-sm">
                  <Calendar size={16} className="text-white/80" />
                  <span className="text-sm font-medium">{slide.date}</span>
                </div>

                <h3 className="font-display text-3xl lg:text-5xl font-bold mb-4 relative w-max text-white tracking-tight">
                  {slide.title}
                  <div className="absolute -bottom-3 left-0 w-1/3 h-1 bg-[#eab308] rounded-full"></div>
                </h3>

                <p className="text-base lg:text-lg text-white/80 max-w-xl mt-6">
                  {slide.desc}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-6 lg:gap-8 lg:divide-x divide-white/10 shrink-0">
                {slide.stats.map((s, i) => (
                  <div key={i} className={`flex items-center gap-4 ${i > 0 ? 'lg:pl-8' : ''}`}>
                    <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white/5 backdrop-blur-sm flex items-center justify-center shrink-0 border border-white/10 shadow-sm transition-transform hover:scale-105">
                      <s.icon size={22} className="text-white/90" />
                    </div>
                    <div>
                      <div className="font-bold text-xl lg:text-2xl tracking-tight text-white">{s.value}</div>
                      <div className="text-xs lg:text-sm text-white/60 font-medium mt-0.5">{s.label}</div>
                    </div>
                  </div>
                ))}
              </div>
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
