import { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import {
  ArrowUpRight, ArrowRight, CheckCircle2, Server, Shield, Cloud,
  Network, Monitor, Lightbulb, Phone, MessageSquare, ChevronLeft,
  ChevronRight, Building2, Heart, GraduationCap, ShoppingCart, Home,
  Factory, Landmark, Truck, Star, Cpu, HardDrive, Users, BarChart3,
  ClipboardList, Wrench, RefreshCw, Briefcase, TrendingUp, Award,
  Zap, Clock, Activity, Sparkles, Check, MousePointer2, Globe2,
  Laptop2, BadgeCheck, CloudCog, NetworkIcon, Boxes, PenTool
} from "lucide-react";
import Navbar from "@/components/Navbar";
import { MagneticButton } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SEOHead from "@/components/SEOHead";
import { itInfrastructureServicesSeoData } from "@/data/seo/itInfrastructureServicesSeo";

import partnerAws from "@/assets/partners/aws.svg";
import partnerMicrosoft from "@/assets/partners/microsoft.svg";
import partnerDell from "@/assets/partners/dell.svg";
import partnerHp from "@/assets/partners/hp.svg";
import partnerLenovo from "@/assets/partners/lenovo.svg";
import partnerAzure from "@/assets/partners/azure.svg";
import partnerFortinet from "@/assets/partners/fortinet.svg";
import partnerSophos from "@/assets/partners/sophos.jpg";
import partnerTataTele from "@/assets/partners/tata-tele.png";
import partnerEset from "@/assets/partners/eset.svg";
import partnerRedington from "@/assets/partners/redington.png";
import itInfrastructureBg from "@/assets/it-infrastructure-bg.png";

/* ── Animation helpers ── */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 80, damping: 20 } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } } };
const staggerFast = { hidden: {}, visible: { transition: { staggerChildren: 0.06 } } };

/* ── Reveal wrapper ── */
const Reveal = ({ children, className = "", dark = false }: {
  children: React.ReactNode; className?: string; dark?: boolean;
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-70px" });
  return (
    <section ref={ref} className={`${dark ? "bg-foreground text-background" : ""} ${className}`}>
      <motion.div variants={stagger} initial="hidden" animate={inView ? "visible" : "hidden"}>
        {children}
      </motion.div>
    </section>
  );
};

const partners = [
  { src: partnerMicrosoft, alt: "Microsoft" }, { src: partnerAws, alt: "AWS" },
  { src: partnerAzure, alt: "Azure" }, { src: partnerDell, alt: "Dell" },
  { src: partnerHp, alt: "HP" }, { src: partnerLenovo, alt: "Lenovo" },
  { src: partnerFortinet, alt: "Fortinet" }, { src: partnerSophos, alt: "Sophos" },
  { src: partnerTataTele, alt: "Tata Tele" }, { src: partnerEset, alt: "ESET" },
  { src: partnerRedington, alt: "Redington" },
];

const serviceCards = [
  {
    icon: Server, title: "Managed IT & Support", slug: "managed-it",
    color: "from-blue-500 to-blue-700",
    bullets: ["24×7 Monitoring", "Helpdesk & End-User Support", "ITIL Processes"],
  },
  {
    icon: Shield, title: "Cybersecurity & Data Protection", slug: "cybersecurity",
    color: "from-red-500 to-rose-700",
    bullets: ["Threat Detection", "Endpoint Security", "Data Backup & DR"],
  },
  {
    icon: Cloud, title: "Cloud, Server & Productivity", slug: "cloud",
    color: "from-violet-500 to-purple-700",
    bullets: ["Microsoft 365", "Cloud Infrastructure", "Virtualization"],
  },
  {
    icon: Network, title: "Network & Connectivity", slug: "network",
    color: "from-emerald-500 to-teal-700",
    bullets: ["Wi-Fi & LAN", "SD-WAN Solutions", "24×7 Monitoring"],
  },
  {
    icon: HardDrive, title: "Device, Asset & Procurement", slug: "devices",
    color: "from-amber-500 to-orange-700",
    bullets: ["IT Asset Management", "Lifecycle Management", "Vendor Management"],
  },
  {
    icon: Lightbulb, title: "IT Consulting & Strategy", slug: "consulting",
    color: "from-sky-500 to-blue-700",
    bullets: ["Digital Transformation", "IT Roadmap", "Governance & Risk"],
  },
];

const serviceSections = [
  {
    id: "managed-it",
    number: "01",
    title: "Managed IT & Support",
    description: "End-to-end infrastructure management with proactive support and SLA-backed responsiveness.",
    accent: "from-[#0F4CFF] via-[#3B82F6] to-[#7DD3FC]",
    image: "/services/Managed IT & Support.png",
    icon: Laptop2,
    modules: ["Managed IT Services", "IT Support L1-L3", "AMC & Helpdesk", "ITSM Operations"],
    shortBullets: ["24x7 monitoring", "Vendor coordination", "Documentation-led governance"],
    details: [
      { title: "Managed IT Services", bullets: ["End-to-end infrastructure management", "24x7 monitoring and remediation", "Reporting and performance optimization"] },
      { title: "IT Support L1-L3", bullets: ["Tiered issue resolution", "Remote and onsite assistance", "Escalation handling with SLAs"] },
      { title: "AMC & Helpdesk", bullets: ["Preventive maintenance cycles", "Asset-aware support workflows", "Priority incident response"] },
      { title: "ITSM Operations", bullets: ["Ticketing and change control", "Knowledge base and documentation", "Monthly service reviews"] },
    ],
  },
  {
    id: "cybersecurity",
    number: "02",
    title: "Cybersecurity & Data Protection",
    description: "Layered defense for endpoints, networks, identities, and business-critical data.",
    accent: "from-[#1D4ED8] via-[#2563EB] to-[#60A5FA]",
    image: "/services/Cybersecurity & Data Protection.png",
    icon: BadgeCheck,
    modules: ["Threat Defense", "Firewall Security", "Backup & DR", "Patch Management"],
    shortBullets: ["Blue-team protection", "Security compliance", "Resilient recovery"],
    details: [
      { title: "Threat Defense", bullets: ["Endpoint protection and detection", "Security audits and assessments", "Zero Trust controls"] },
      { title: "Firewall Security", bullets: ["Firewall policy management", "VPN and IDS/IPS configuration", "Multi-vendor security stack support"] },
      { title: "Backup & DR", bullets: ["Cloud, M365, server and endpoint backup", "Business continuity planning", "Recovery validation and testing"] },
      { title: "Patch Management", bullets: ["OS and firmware updates", "Vulnerability remediation", "Compliance aligned cadence"] },
    ],
  },
  {
    id: "cloud",
    number: "03",
    title: "Cloud, Server & Productivity",
    description: "Modernize collaboration, servers, and cloud operations with enterprise-grade control.",
    accent: "from-[#4F46E5] via-[#0F4CFF] to-[#22D3EE]",
    image: "/services/Cloud, Server & Productivity.png",
    icon: CloudCog,
    modules: ["M365 Admin", "Cloud Infra", "Server Care", "Identity & Email"],
    shortBullets: ["Scalable platforms", "Migration support", "Productivity governance"],
    details: [
      { title: "M365 Admin", bullets: ["Licensing and tenant governance", "Teams, SharePoint and Exchange administration", "Email security setup"] },
      { title: "Cloud Infra", bullets: ["Azure and hybrid architecture support", "Migration and modernization", "Cost and access optimization"] },
      { title: "Server Care", bullets: ["Windows and Linux administration", "AD and domain operations", "Availability and hardening"] },
      { title: "Identity & Email", bullets: ["Identity governance", "SPF, DKIM, DMARC", "Collaboration policy management"] },
    ],
  },
  {
    id: "network",
    number: "04",
    title: "Network & Connectivity",
    description: "High-performance, secure networking designed for always-on business operations.",
    accent: "from-[#0EA5E9] via-[#0F4CFF] to-[#38BDF8]",
    image: "/services/Network & Connectivity.png",
    icon: NetworkIcon,
    modules: ["LAN/WAN", "Wi-Fi", "SD-WAN", "Monitoring"],
    shortBullets: ["Low-latency connectivity", "Proactive oversight", "Enterprise network hygiene"],
    details: [
      { title: "LAN/WAN", bullets: ["Structured network design", "Switch and router configuration", "Branch connectivity planning"] },
      { title: "Wi-Fi", bullets: ["Secure wireless deployments", "Coverage and performance tuning", "Guest and enterprise segmentation"] },
      { title: "SD-WAN", bullets: ["Resilient WAN orchestration", "Traffic optimization", "Link failover strategies"] },
      { title: "Monitoring", bullets: ["Network health visibility", "Alerting and response", "Capacity planning"] },
    ],
  },
  {
    id: "devices",
    number: "05",
    title: "Device, Asset & Procurement",
    description: "Lifecycle control for hardware, inventory, warranties, and vendor coordination.",
    accent: "from-[#F59E0B] via-[#F97316] to-[#FDBA74]",
    image: "/services/Device, Asset & Procurement.png",
    icon: Boxes,
    modules: ["Procurement", "Lifecycle", "Assets", "Vendors"],
    shortBullets: ["Fleet visibility", "Warranty management", "Procurement governance"],
    details: [
      { title: "Procurement", bullets: ["Hardware sourcing and approvals", "Vendor comparison and ordering", "Asset tagging and onboarding"] },
      { title: "Lifecycle", bullets: ["Deployment to retirement handling", "Refresh planning", "Secure disposal support"] },
      { title: "Assets", bullets: ["Inventory and license tracking", "Warranty visibility", "Compliance reporting"] },
      { title: "Vendors", bullets: ["ISP and OEM coordination", "Escalation handling", "Renewals and replacements"] },
    ],
  },
  {
    id: "consulting",
    number: "06",
    title: "IT Consulting & Strategy",
    description: "Executive-level guidance for transformation, governance, risk, and modernization.",
    accent: "from-[#6366F1] via-[#0F4CFF] to-[#A78BFA]",
    image: "/services/IT Consulting & Strategy.png",
    icon: PenTool,
    modules: ["Roadmaps", "Audits", "Governance", "Transformation"],
    shortBullets: ["Strategic advisory", "Technology planning", "Risk-aware execution"],
    details: [
      { title: "Roadmaps", bullets: ["Business-aligned IT planning", "Modernization sequencing", "Budget and capability mapping"] },
      { title: "Audits", bullets: ["Infrastructure assessments", "Security and compliance reviews", "Architecture gap analysis"] },
      { title: "Governance", bullets: ["Policy and standards", "Risk and control alignment", "Stakeholder reporting"] },
      { title: "Transformation", bullets: ["Change planning and delivery", "Cloud adoption guidance", "Operating model improvement"] },
    ],
  },
];

const engagementModels = [
  {
    title: "Fully Managed IT", badge: "ALL-INCLUSIVE", badgeColor: "bg-blue-100 text-blue-700",
    desc: "We manage your entire IT environment end-to-end.",
    best: "SMEs & Startups", icon: Server,
  },
  {
    title: "Co-Managed IT", badge: "MOST POPULAR", badgeColor: "bg-primary/10 text-primary",
    desc: "Extend your internal IT team with our expertise and 24×7 support.",
    best: "50–500 Users", icon: Users, highlight: true,
  },
  {
    title: "AMC (Annual Contract)", badge: null, badgeColor: "",
    desc: "Reliable maintenance and support for your existing infrastructure.",
    best: "Existing IT Setups", icon: ClipboardList,
  },
  {
    title: "Project-Based", badge: null, badgeColor: "",
    desc: "One-time projects delivered with precision and speed.",
    best: "Specific Initiatives", icon: Wrench,
  },
  {
    title: "On-Demand Support", badge: null, badgeColor: "",
    desc: "Get expert help when you need it — no long-term commitment.",
    best: "Ad-hoc Requirements", icon: Phone,
  },
];

const outcomes = [
  { value: "99.9%", label: "Uptime Achieved", icon: Activity },
  { value: "40%", label: "Avg. Cost Savings", icon: TrendingUp },
  { value: "15 min", label: "Avg. Response Time", icon: Clock },
  { value: "65%", label: "Faster Issue Resolution", icon: Zap },
  { value: "200+", label: "Happy Clients", icon: Users },
];

const processSteps = [
  { step: "01", title: "Assess", desc: "We evaluate your current infrastructure, risks, and gaps.", icon: BarChart3 },
  { step: "02", title: "Design", desc: "We design a tailored solution aligned with your business goals.", icon: Lightbulb },
  { step: "03", title: "Onboard", desc: "Smooth onboarding with documentation, tools, and alignment.", icon: RefreshCw },
  { step: "04", title: "Manage", desc: "Proactive management, monitoring & support 24×7.", icon: Monitor },
  { step: "05", title: "Optimize", desc: "Continuous improvement through insights and innovation.", icon: TrendingUp },
];

const industries = [
  { icon: Factory, label: "Manufacturing" }, { icon: Heart, label: "Healthcare" },
  { icon: GraduationCap, label: "Education" }, { icon: ShoppingCart, label: "Retail" },
  { icon: Home, label: "Real Estate" }, { icon: Building2, label: "Construction" },
  { icon: Landmark, label: "Financial Services" }, { icon: Truck, label: "Logistics" },
  { icon: Star, label: "Hospitality" }, { icon: Briefcase, label: "Professional Services" },
  { icon: Building2, label: "Government" }, { icon: Cpu, label: "IT Companies" },
];

const faqs = [
  { q: "What are Managed IT Services?", a: "Managed IT Services means outsourcing the day-to-day management of your IT infrastructure — monitoring, maintenance, support, and security — to Cybaem Tech for a fixed monthly fee." },
  { q: "What is included in an IT AMC?", a: "Our AMCs cover preventive maintenance, scheduled health checks, hardware & software maintenance, security updates, performance tuning, and priority support for desktops, laptops, servers, networks, firewalls, and storage." },
  { q: "Do you provide both remote and onsite support?", a: "Yes. Most issues are resolved instantly through secure remote support, and our engineers provide onsite assistance whenever physical intervention is needed." },
  { q: "Can you work alongside our existing IT team?", a: "Absolutely. Our Co-Managed IT model supplements your internal team with 24×7 monitoring, specialist skills, and extra capacity during peak demand." },
  { q: "How quickly do you respond to issues?", a: "Response times are defined in your SLA. Critical incidents receive immediate attention — typical response within 15–30 minutes." },
  { q: "Which locations do you serve?", a: "Headquartered in Pune (Hinjawadi), we serve clients across India with remote-first support that extends to international clients." },
  { q: "How much do Managed IT Services cost?", a: "Pricing depends on users, devices, servers, and service level. We offer per-user and per-device monthly models. Most clients save 30–40% vs. in-house IT." },
];

/* ════════ SVG Progress Ring ════════ */
const ProgressRing = ({ pct }: { pct: number }) => {
  const r = 44, circ = 2 * Math.PI * r;
  const offset = circ * (1 - pct / 100);
  return (
    <svg width="110" height="110" viewBox="0 0 110 110" className="-rotate-90">
      <circle cx="55" cy="55" r={r} fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="8" />
      <circle cx="55" cy="55" r={r} fill="none" stroke="hsl(var(--primary))" strokeWidth="8"
        strokeLinecap="round" strokeDasharray={circ} strokeDashoffset={offset}
        style={{ transition: "stroke-dashoffset 1.5s ease" }}
      />
    </svg>
  );
};

/* ════════════════ HERO ════════════════ */
const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const inView = useInView(heroRef, { once: true });
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <>
    <section ref={heroRef} className="relative min-h-[90vh] flex items-center overflow-hidden pt-28 lg:pt-20 pb-20 bg-cover bg-center lg:bg-right bg-no-repeat" style={{ backgroundImage: `url('/images/it-bg.png')` }}>
      <motion.div className="container mx-auto px-5 sm:px-6 lg:px-12 relative z-10 pt-4 lg:pt-16 pb-8 lg:pb-16" style={{ y: contentY }}>
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-6 items-center">

          {/* Left — copy */}
          <motion.div variants={stagger} initial="hidden" animate={inView ? "visible" : "hidden"} className="lg:pr-10">
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 text-[10px] sm:text-xs font-bold tracking-widest uppercase text-blue-600 border border-blue-100 rounded-full mb-6 sm:mb-8 bg-white shadow-sm">
                <div className="w-2 h-2 rounded-full bg-[#0F4CFF]" />
                ENTERPRISE IT INFRASTRUCTURE SERVICES
              </span>
            </motion.div>

            <motion.h1 variants={fadeUp} className="font-display font-bold leading-[1.1] text-slate-900 mb-5 sm:mb-6 text-4xl sm:text-5xl xl:text-[64px] tracking-tight">
              Infrastructure<br />
              Engineered for<br />
              <span className="text-[#0F4CFF]">Business Continuity.</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-base sm:text-[17px] text-slate-600 leading-relaxed max-w-[420px] mb-8 sm:mb-10 font-medium">
              We design, manage and secure IT environments that keep your business running — 24x7.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 sm:gap-4 mb-10 sm:mb-14">
              <MagneticButton>
                <Link to="/contact" className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 text-[15px] font-semibold bg-[#0F4CFF] text-white rounded-[12px] sm:rounded-[14px] hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/25">
                  Get Free Assessment <ArrowRight size={18} />
                </Link>
              </MagneticButton>
              <MagneticButton>
                <a href="#managed-it" className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 text-[15px] font-semibold border border-slate-200 text-slate-700 rounded-[12px] sm:rounded-[14px] hover:bg-slate-50 transition-colors bg-white/50 backdrop-blur-sm">
                  Explore Services <ArrowRight size={18} className="text-slate-400" />
                </a>
              </MagneticButton>
            </motion.div>

            {/* Stats row */}
            <motion.div variants={fadeUp} className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5">
              {[
                { icon: Shield, value: "ISO 27001", label: "Certified" },
                { icon: Phone, value: "24 x 7", label: "NOC Support" },
                { icon: Clock, value: "15+ Min", label: "Avg. Response" },
                { icon: Users, value: "200+", label: "Happy Clients" },
              ].map((s) => (
                <div key={s.label} className="flex flex-col gap-2">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0 border border-blue-100/50 text-[#0F4CFF]">
                    <s.icon size={18} />
                  </div>
                  <div>
                    <p className="font-display text-[15px] font-bold text-slate-900 leading-none mb-1.5">{s.value}</p>
                    <p className="text-[11px] text-slate-500 leading-tight font-medium">{s.label}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — Empty container to balance grid */}
          <div className="hidden lg:block z-20" />

        </div>
      </motion.div>
    </section>

    {/* Logos Strip Below Header */}
    <div className="container mx-auto px-5 sm:px-6 lg:px-12 mt-12 mb-24 relative z-30">
       <div className="bg-white rounded-[24px] py-8 sm:py-10 px-4 sm:px-8 shadow-[0_15px_50px_rgba(0,0,0,0.08)] border border-slate-100">
         <p className="text-center text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-[#0F4CFF] mb-6 sm:mb-8">
           TRUSTED BY 200+ BUSINESSES ACROSS INDIA
         </p>
         <div className="relative overflow-hidden w-full">
           {/* Fading edges for marquee */}
           <div className="absolute inset-y-0 left-0 w-12 sm:w-24 bg-gradient-to-r from-white to-transparent z-10" />
           <div className="absolute inset-y-0 right-0 w-12 sm:w-24 bg-gradient-to-l from-white to-transparent z-10" />
           
           <div className="flex animate-marquee gap-10 sm:gap-16 items-center w-max">
             {[...partners, ...partners].map((p, i) => (
               <img key={i} src={p.src} alt={p.alt} className="h-7 sm:h-8 lg:h-9 w-auto object-contain" />
             ))}
           </div>
         </div>
       </div>
    </div>
    </>
  );
};

const LogosStrip = () => null;

/* ════════════════ WHAT WE MANAGE ════════════════ */
const FlipServiceCard = ({ service, active, onActivate }: {
  service: typeof serviceSections[0];
  active: boolean;
  onActivate: (id: string | null) => void;
}) => {
  const [hovered, setHovered] = useState(false);
  const flipped = active || hovered;
  return (
    <button
      type="button"
      onClick={() => onActivate(active ? null : service.id)}
      onMouseEnter={() => {
        setHovered(true);
        onActivate(service.id);
      }}
      onMouseLeave={() => {
        setHovered(false);
        onActivate(null);
      }}
      className={`group relative block w-full text-left [perspective:1800px] h-full antialiased ${active ? "z-20" : "z-10"}`}
    >
      <motion.div
        animate={{ y: active ? -6 : 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full h-full min-h-[460px]"
      >
        {/* FRONT FACE */}
        <motion.div
          animate={{ rotateY: flipped ? -180 : 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{ backfaceVisibility: "hidden" }}
          className={`absolute inset-0 w-full h-full rounded-[24px] shadow-[0_20px_80px_rgba(15,23,42,0.12)] ${active ? "shadow-[0_30px_100px_rgba(15,76,255,0.22)] ring-1 ring-blue-400/40" : ""} bg-white border border-slate-200/80 overflow-hidden flex flex-col z-20`}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(15,76,255,0.12),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(56,189,248,0.12),transparent_25%)] opacity-100" />
          <div className="relative h-[220px] overflow-hidden shrink-0">
            <motion.img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
              animate={{ scale: flipped ? 1.12 : 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            />
            <div className="absolute left-4 top-4 flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/95 border border-slate-200 shadow-sm">
                <service.icon size={18} className="text-[#0F4CFF]" />
              </span>
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-800 bg-white/95 px-3 py-1.5 rounded-full border border-slate-200 shadow-sm">Hover to Explore</span>
            </div>
            <div className="absolute right-4 bottom-4 rounded-full bg-white/95 border border-slate-200 px-3 py-1.5 text-[11px] font-bold text-slate-800 shadow-sm">
              Service Group {service.number}
            </div>
          </div>
          <div className="p-5 flex-1 flex flex-col justify-center">
            <p className="text-[11px] font-bold tracking-[0.24em] uppercase text-[#0F4CFF] mb-2">Service Group {service.number}</p>
            <h3 className="text-xl font-bold tracking-tight text-slate-950 mb-2 leading-tight">{service.title}</h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">{service.description}</p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {service.shortBullets.map((item) => (
                <span key={item} className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-2 text-xs font-medium text-slate-700 shadow-sm">
                  <Check size={12} className="text-[#0F4CFF]" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
        {/* BACK FACE */}
        <motion.div
          initial={{ rotateY: 180 }}
          animate={{ rotateY: flipped ? 0 : 180 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{ backfaceVisibility: "hidden" }}
          className={`absolute inset-0 w-full h-full rounded-[24px] shadow-[0_20px_80px_rgba(15,23,42,0.12)] ${active ? "shadow-[0_30px_100px_rgba(15,76,255,0.22)] ring-1 ring-blue-400/40" : ""} bg-white text-slate-900 p-6 flex flex-col overflow-hidden border border-slate-200/80 z-10`}
        >
          <div className="flex items-center justify-between mb-4 shrink-0">
            <div>
              <p className="text-xs font-semibold tracking-[0.28em] uppercase text-[#0F4CFF] mb-2">Service Group {service.number}</p>
              <h3 className="text-xl font-bold leading-tight text-slate-950">{service.title}</h3>
            </div>
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50">
              <service.icon size={18} className="text-[#0F4CFF]" />
            </span>
          </div>

          <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
            <p className="text-sm leading-relaxed text-slate-600 max-w-[28ch]">{service.description}</p>
            <div className="my-4 h-px bg-slate-200 shrink-0" />
            <div className="grid grid-cols-2 gap-3 pb-2">
              {service.details.map((detail) => (
                <div key={detail.title} className="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-3 shadow-sm h-full">
                  <div className="flex items-start gap-2 mb-2">
                    <div className="mt-0.5 h-4 w-4 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                      <CheckCircle2 size={10} className="text-[#0F4CFF]" />
                    </div>
                    <span className="text-[13px] font-semibold leading-snug text-[#0F4CFF]">{detail.title}</span>
                  </div>
                  <ul className="space-y-1.5 pl-6">
                    {detail.bullets.map(b => (
                      <li key={b} className="text-[11px] text-slate-600 list-disc">{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="shrink-0 mt-4 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs text-slate-500 text-center font-medium">
            Tap or hover back to return to the overview.
          </div>
        </motion.div>
      </motion.div>
    </button>
  );
};

const WhatWeManage = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeId, setActiveId] = useState<string | null>(null);
  const serviceRows = [serviceSections.slice(0, 3), serviceSections.slice(3, 6)];

  return (
    <section ref={ref} className="relative overflow-hidden py-20 sm:py-28 bg-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(15,76,255,0.08),transparent_30%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_26%),linear-gradient(180deg,#ffffff,rgba(244,248,255,0.88))]" />
      <div className="absolute inset-0 pointer-events-none opacity-50" style={{ backgroundImage: "radial-gradient(circle, rgba(15,76,255,0.10) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <motion.div variants={stagger} initial="hidden" animate={inView ? "visible" : "hidden"}>
          <motion.div variants={fadeUp} className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-200 bg-white/80 text-xs font-semibold tracking-[0.25em] uppercase text-[#0F4CFF] backdrop-blur-md shadow-sm">
              <Sparkles size={13} /> Our Infrastructure Services
            </span>
            <h2 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-950">
              What We Manage. <span className="text-[#0F4CFF] italic">So You Can Focus.</span>
            </h2>
            <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Enterprise-grade service groups crafted with spacious layouts, premium visuals, and fast-glance clarity for modern IT teams.
            </p>
          </motion.div>

          <div className="space-y-6 xl:space-y-7">
            {serviceRows.map((row, rowIndex) => (
              <motion.div
                key={rowIndex}
                variants={fadeUp}
                layout
                className="flex flex-col lg:flex-row gap-6 xl:gap-7 items-stretch"
              >
                {row.map((service, colIndex) => {
                  const active = service.id === activeId;
                  const itemIndex = rowIndex * 3 + colIndex;
                  return (
                    <motion.div
                      key={service.id}
                      layout
                      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                      className={`min-w-0 w-full ${active ? "lg:flex-[2_1_0%]" : "lg:flex-[1_1_0%]"} sticky top-24 lg:relative lg:top-auto`}
                      style={{ zIndex: active ? 30 : itemIndex }}
                    >
                      <FlipServiceCard service={service} active={active} onActivate={setActiveId} />
                    </motion.div>
                  );
                })}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

/* ════════════════ ENGAGEMENT MODELS ════════════════ */
/* ── Cube illustration image ── */
const CubeIllustration = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.92 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
    className="w-full h-full flex items-center justify-center"
  >
    <motion.img
      src="/it-infrastructure-cubes.png"
      alt="IT Infrastructure Solutions"
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      className="w-full h-full object-contain drop-shadow-2xl"
      style={{ filter: "drop-shadow(0 20px 48px rgba(59,130,246,0.35))" }}
    />
  </motion.div>
);

/* ── Small engagement card (mockup style) ── */
const EngCard = ({ model }: { model: typeof engagementModels[0] }) => (
  <div className={`rounded-2xl bg-background border p-4 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 ${model.highlight ? "border-primary/40 ring-1 ring-primary/15" : "border-border/60"}`}>
    <div className="flex items-start justify-between gap-2 mb-2">
      <h3 className="font-display text-sm font-bold text-foreground leading-snug">{model.title}</h3>
      {model.badge && (
        <span className={`shrink-0 text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full whitespace-nowrap ${model.badgeColor}`}>
          {model.badge}
        </span>
      )}
    </div>
    <p className="text-[11px] text-muted-foreground leading-relaxed mb-2">{model.desc}</p>
    <p className="text-[10px] text-muted-foreground/70">
      <span className="font-semibold text-foreground/50">Best for:</span>{" "}
      <span className="text-primary font-medium">{model.best}</span>
    </p>
  </div>
);

const EngagementSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  /* split cards for layout */
  const [fullyManaged, coManaged, amc, projectBased, onDemand] = engagementModels;

  return (
    <section id="engagement-models" ref={ref} className="py-14 sm:py-20 bg-background section-border overflow-hidden">
    <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* <motion.div variants={stagger} initial="hidden" animate={inView ? "visible" : "hidden"}>

      
          <div className="hidden lg:flex items-start gap-0">

            <motion.div variants={fadeUp} className="shrink-0 w-[230px] xl:w-[260px] pr-6 pt-2">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-3 block">
                Flexible Engagement Models
              </span>
              <h2 className="font-display text-3xl xl:text-4xl font-bold leading-tight">
                Engagements That Fit{" "}
                <span className="text-primary italic">Your Business</span>
              </h2>
            </motion.div>

            <div className="flex-1 min-w-0">
              <div className="grid grid-cols-[1fr_auto_1fr] gap-4 items-center">

                <motion.div variants={stagger} className="flex flex-col gap-4 justify-center py-6">
                  <motion.div variants={fadeUp}><EngCard model={fullyManaged} /></motion.div>
                  <motion.div variants={fadeUp}><EngCard model={coManaged} /></motion.div>
                </motion.div>

                <motion.div variants={fadeUp} className="w-[300px] xl:w-[360px] shrink-0 h-[360px] xl:h-[420px]">
                  <CubeIllustration />
                </motion.div>

                <motion.div variants={stagger} className="flex flex-col gap-4 justify-center py-6">
                  <motion.div variants={fadeUp}><EngCard model={amc} /></motion.div>
                  <motion.div variants={fadeUp}><EngCard model={projectBased} /></motion.div>
                </motion.div>

              </div>

              <motion.div variants={fadeUp} className="flex justify-center -mt-2">
                <div className="w-[260px] xl:w-[300px]">
                  <EngCard model={onDemand} />
                </div>
              </motion.div>
            </div>

          </div>

         
          <div className="lg:hidden">
            <motion.div variants={fadeUp} className="mb-8">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-2 block">
                Flexible Engagement Models
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold leading-tight">
                Engagements That Fit{" "}
                <span className="text-primary italic">Your Business</span>
              </h2>
            </motion.div>

           
            <motion.div variants={fadeUp} className="h-[220px] mb-6">
              <CubeIllustration />
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-4">
              {engagementModels.map((m) => (
                <motion.div key={m.title} variants={fadeUp}>
                  <EngCard model={m} />
                </motion.div>
              ))}
            </div>
          </div>

        </motion.div> */}
      </div> 
    </section>
  );
};

/* ════════════════ OUTCOMES ════════════════ */
const OutcomesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <section ref={ref} className="py-16 sm:py-24 section-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div variants={stagger} initial="hidden" animate={inView ? "visible" : "hidden"}>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-2 block">Business Impact</span>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
                Outcomes That <span className="text-primary italic">Matter</span>
              </h2>
            </div>
            <MagneticButton>
              <Link to="/portfolio" className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold border border-border rounded-full text-foreground hover:bg-muted/50 transition-colors">
                See Our Case Studies <ArrowRight size={14} />
              </Link>
            </MagneticButton>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {outcomes.map((o) => (
              <motion.div key={o.label} variants={fadeUp}
                className="glass-panel rounded-2xl p-5 sm:p-6 border hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 text-center group"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                  <o.icon size={20} className="text-primary" />
                </div>
                <p className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-1">{o.value}</p>
                <p className="text-xs text-muted-foreground leading-snug">{o.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

/* ════════════════ 5-STEP PROCESS ════════════════ */
const ProcessSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <section ref={ref} className="py-16 sm:py-24 bg-[hsl(var(--card))] section-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div variants={stagger} initial="hidden" animate={inView ? "visible" : "hidden"}>
          <motion.div variants={fadeUp} className="mb-12">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-2 block">Our Proven Process</span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight max-w-lg">
              A 5-Step Journey to Infrastructure{" "}
              <span className="text-primary italic">Excellence</span>
            </h2>
          </motion.div>

          <div className="relative">
            {/* Connector line — desktop only */}
            <div className="hidden lg:block absolute top-11 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

            <div className="grid sm:grid-cols-3 lg:grid-cols-5 gap-5">
              {processSteps.map((s, i) => (
                <motion.div key={s.step} variants={fadeUp} className="relative">
                  <div className="glass-panel rounded-2xl p-5 border hover:border-primary/30 transition-colors h-full">
                    <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center mb-4 relative z-10">
                      <span className="font-display text-xs font-bold text-primary-foreground">{s.step}</span>
                    </div>
                    <h3 className="font-display text-base font-bold text-foreground mb-1.5">{s.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                  {i < processSteps.length - 1 && (
                    <div className="lg:hidden flex justify-center my-1">
                      <ChevronRight size={16} className="text-primary/40 rotate-90" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

/* ════════════════ INDUSTRIES + FAQ ════════════════ */
const IndustriesFAQ = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <section ref={ref} className="py-16 sm:py-24 section-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div variants={stagger} initial="hidden" animate={inView ? "visible" : "hidden"}>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">

            {/* Left: Industries */}
            <div>
              <motion.span variants={fadeUp} className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-2 block">
                Industries We Serve
              </motion.span>
              <motion.h2 variants={fadeUp} className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-3">
                Industry-Aware{" "}
                <span className="text-primary italic">IT Solutions</span>
              </motion.h2>
              <motion.p variants={fadeUp} className="text-sm text-muted-foreground leading-relaxed mb-8">
                We understand the compliance, uptime, and security demands unique to each sector.
              </motion.p>
              <motion.div variants={staggerFast} className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                {industries.map((ind) => (
                  <motion.div key={ind.label} variants={fadeUp}
                    className="glass-panel rounded-xl p-3 flex flex-col items-center text-center gap-2 border hover:border-primary/30 hover:-translate-y-0.5 transition-all group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <ind.icon size={16} className="text-primary" />
                    </div>
                    <span className="text-[10px] sm:text-xs font-medium text-muted-foreground leading-tight">{ind.label}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Right: FAQ + sidebar */}
            <div>
              <motion.span variants={fadeUp} className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-2 block">
                Frequently Asked Questions
              </motion.span>
              <motion.h2 variants={fadeUp} className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-6">
                IT Infrastructure —{" "}
                <span className="text-primary italic">Answered</span>
              </motion.h2>

              <motion.div variants={fadeUp}>
                <Accordion type="single" collapsible className="space-y-2">
                  {faqs.map((faq, i) => (
                    <AccordionItem key={i} value={`faq-${i}`} className="glass-panel rounded-xl px-4 border">
                      <AccordionTrigger className="text-left font-display font-semibold text-sm hover:no-underline py-4">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-4">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>

            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

/* ════════════════ SERVICE SECTIONS (anchor targets) ════════════════ */
const serviceGroups = [
  {
    id: "managed-it", icon: Server, number: "01",
    title: "Managed IT & Support", subtitle: "Your complete outsourced IT department",
    color: "from-blue-600 to-blue-800",
    services: [
      { name: "Managed IT Services", desc: "Dedicated IT team proactively monitoring, maintaining, and supporting your complete IT environment.", bullets: ["End-to-end infrastructure management", "24×7 monitoring & vendor coordination", "IT documentation & performance optimization"], outcome: "Up to 30–40% reduction in IT operating costs." },
      { name: "IT Support (L1 / L2 / L3)", desc: "Multi-tier support model ensuring the right expert handles every issue.", bullets: ["Level 1 — Basic user support", "Level 2 — Advanced troubleshooting", "Level 3 — Infrastructure & server escalations"] },
      { name: "Annual Maintenance Contract (AMC)", desc: "Flexible AMC plans covering preventive maintenance and priority support.", bullets: ["Desktop, laptop, server & network AMC", "Hardware health checks & software upkeep", "Priority response & scheduled visits"] },
      { name: "Helpdesk & ITSM", desc: "Process-driven helpdesk built on ITSM best practices.", bullets: ["Ticket & incident management", "SLA management with escalation matrix", "Monthly performance reporting"] },
    ],
  },
  {
    id: "cybersecurity", icon: Shield, number: "02",
    title: "Cybersecurity & Data Protection", subtitle: "Layered defense for perimeter, endpoints, email, and data",
    color: "from-red-600 to-rose-800",
    services: [
      { name: "Cybersecurity Services", desc: "Layered protection against ransomware, phishing, and advanced attacks.", bullets: ["EDR/MDR deployment", "Security audits & vulnerability assessments", "Zero Trust implementation"] },
      { name: "Firewall & Network Security", desc: "Enterprise-grade firewall management — install, configure, and monitor.", bullets: ["Firewall installation & configuration", "VPN & IDS/IPS management", "Sophos, Fortinet, SonicWall, Cisco, Palo Alto"] },
      { name: "Data Backup & Disaster Recovery", desc: "Automated backup and DR solutions ensuring critical data is always protected.", bullets: ["Server, cloud, M365 & endpoint backup", "DR planning & BCP", "Recovery testing & high-availability architectures"] },
      { name: "Patch Management", desc: "Keep every system updated, secure, and compliant automatically.", bullets: ["Windows, server & firmware patches", "Vulnerability remediation & compliance updates"] },
    ],
  },
  {
    id: "cloud", icon: Cloud, number: "03",
    title: "Cloud, Server & Productivity", subtitle: "Modern, scalable computing from M365 to Azure",
    color: "from-violet-600 to-purple-800",
    services: [
      { name: "Microsoft 365 & Email", desc: "Deploy, secure, and manage the complete M365 ecosystem.", bullets: ["M365 deployment, migration & license management", "Exchange Online, Teams, SharePoint & OneDrive admin", "DKIM, SPF & DMARC configuration"] },
      { name: "Cloud Infrastructure", desc: "Plan, migrate, secure, and optimize cloud environments.", bullets: ["Microsoft Azure & Google Workspace", "Cloud migration, security & monitoring", "Hybrid cloud & cost optimization"] },
      { name: "Server Management", desc: "Keep servers secure, optimized, and always available.", bullets: ["Windows & Linux administration", "Active Directory & domain controller management", "Security hardening & 24×7 monitoring"] },
    ],
  },
  {
    id: "network", icon: Network, number: "04",
    title: "Network & Connectivity", subtitle: "Fast, secure, always-on connectivity",
    color: "from-emerald-600 to-teal-800",
    services: [
      { name: "Network Infrastructure", desc: "Design, implement, and manage fast, secure, highly available networks.", bullets: ["LAN/WAN implementation & structured cabling", "Enterprise wireless, router & switch configuration", "VPN & SD-WAN connectivity"] },
      { name: "24×7 Infrastructure Monitoring", desc: "Monitoring platform identifying and resolving issues before they impact operations.", bullets: ["Servers, networks, storage & applications", "Security events & cloud workloads", "Performance monitoring with proactive alerting"] },
    ],
  },
  {
    id: "devices", icon: HardDrive, number: "05",
    title: "Device, Asset & Procurement", subtitle: "Complete control of your hardware fleet",
    color: "from-amber-600 to-orange-700",
    services: [
      { name: "Device Lifecycle Management", desc: "Complete lifecycle for every user device — procurement to retirement.", bullets: ["Procurement, deployment & OS installation", "Hardware upgrades & device security", "Warranty management & end-of-life disposal"] },
      { name: "IT Asset Management", desc: "Full visibility and control over all IT assets.", bullets: ["Asset inventory & hardware/software tracking", "License & warranty management", "Audits, compliance reporting & lifecycle"] },
      { name: "Vendor & ISP Management", desc: "One call handles all your technology vendors and ISPs.", bullets: ["ISP coordination & vendor management", "Warranty claims & escalation handling", "Procurement coordination & license renewals"] },
    ],
  },
  {
    id: "consulting", icon: Lightbulb, number: "06",
    title: "IT Consulting & Strategy", subtitle: "Senior-level technology guidance",
    color: "from-sky-600 to-blue-700",
    services: [
      { name: "IT Consulting & Digital Transformation", desc: "Strategic consulting aligning IT with business goals.", bullets: ["IT infrastructure assessment & audits", "IT roadmap planning & digital transformation", "Cloud strategy, cybersecurity strategy & compliance readiness"] },
    ],
  },
];

const ServiceSections = () => (
  <>
    {serviceGroups.map((group, i) => {
      const isEven = i % 2 === 0;
      return (
        <ServiceGroup key={group.id} group={group} dark={!isEven} />
      );
    })}
  </>
);

const ServiceGroup = ({ group, dark }: { group: typeof serviceGroups[0]; dark: boolean }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <section id={group.id} ref={ref} className={`scroll-mt-32 py-16 sm:py-20 section-border ${dark ? "bg-[hsl(var(--card))]" : ""}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div variants={stagger} initial="hidden" animate={inView ? "visible" : "hidden"}>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row sm:items-end gap-4 mb-8 sm:mb-10">
            <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br ${group.color} flex items-center justify-center shrink-0`}>
              <group.icon size={24} className="text-white" />
            </div>
            <div>
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-0.5 block">Service Group {group.number}</span>
              <h2 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold leading-tight">{group.title}</h2>
              <p className="text-sm text-muted-foreground mt-0.5">{group.subtitle}</p>
            </div>
          </motion.div>
          <motion.div variants={fadeUp}>
            <Accordion type="multiple" className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {group.services.map((svc, si) => (
                <AccordionItem key={si} value={`${group.id}-${si}`} className="glass-panel rounded-2xl px-4 sm:px-5 border">
                  <AccordionTrigger className="text-left font-display font-semibold text-sm sm:text-base hover:no-underline py-4">
                    <span className="flex items-center gap-3">
                      <span className="text-xs font-bold text-primary/50 shrink-0">{String(si + 1).padStart(2, "0")}</span>
                      {svc.name}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-5">
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">{svc.desc}</p>
                    <ul className="space-y-1.5">
                      {svc.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-primary" /> {b}
                        </li>
                      ))}
                    </ul>
                    {svc.outcome && (
                      <div className="mt-4 p-3 rounded-xl bg-primary/8 border border-primary/15">
                        <p className="text-xs font-semibold text-primary">{svc.outcome}</p>
                      </div>
                    )}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

/* ════════════════ CTA ════════════════ */
const CTASection = () => (
  <section className="py-20 sm:py-28 bg-[linear-gradient(180deg,#07122F,#0A1F4D_50%,#061126)] text-white relative overflow-hidden">
    <div className="absolute inset-0 opacity-25" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
    <div className="absolute -top-20 left-0 right-0 h-40 bg-[radial-gradient(circle_at_center,rgba(15,76,255,0.45),transparent_70%)] blur-3xl" />
    <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
      <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
          <motion.span variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/15 bg-white/8 backdrop-blur-xl text-[10px] font-semibold tracking-[0.3em] uppercase text-white/70">
            <Globe2 size={13} /> Enterprise Infrastructure
          </motion.span>
          <motion.h2 variants={fadeUp} className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05]">
            Ready to Modernize Your IT Infrastructure?
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-5 max-w-2xl text-base sm:text-lg text-white/70 leading-relaxed">
            Bring together support, security, cloud, network, and strategy in one premium operating model designed for scale.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-10 flex flex-col sm:flex-row gap-3">
            <MagneticButton>
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-[#07122F] shadow-[0_20px_50px_rgba(15,76,255,0.28)] transition-transform hover:-translate-y-0.5">
                Schedule Consultation <ArrowUpRight size={16} />
              </Link>
            </MagneticButton>
            <MagneticButton>
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/6 px-7 py-4 text-sm font-semibold text-white backdrop-blur-xl transition-colors hover:bg-white/12">
                Contact Our Experts <MessageSquare size={16} />
              </Link>
            </MagneticButton>
          </motion.div>
        </motion.div>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} className="relative">
          <div className="relative rounded-[28px] border border-white/12 bg-white/8 backdrop-blur-xl p-5 shadow-[0_30px_100px_rgba(0,0,0,0.25)] overflow-hidden">
            <img src="/it-infrastructure-cubes.png" alt="Enterprise infrastructure" className="w-full h-[360px] object-contain" />
            <div className="absolute top-5 left-5 rounded-2xl border border-white/15 bg-white/10 backdrop-blur-xl px-4 py-3">
              <p className="text-[10px] uppercase tracking-[0.25em] text-white/60">Uptime</p>
              <p className="text-lg font-semibold text-white">99.9%</p>
            </div>
            <div className="absolute top-6 right-5 rounded-2xl border border-white/15 bg-white/10 backdrop-blur-xl px-4 py-3">
              <p className="text-[10px] uppercase tracking-[0.25em] text-white/60">Response</p>
              <p className="text-lg font-semibold text-white">15 min</p>
            </div>
            <div className="absolute bottom-5 left-5 right-5 grid grid-cols-3 gap-3">
              {["Support", "Security", "Cloud"].map((metric) => (
                <div key={metric} className="rounded-2xl border border-white/15 bg-white/10 backdrop-blur-xl px-3 py-3 text-center">
                  <p className="text-xs font-medium tracking-[0.18em] uppercase text-white/55">{metric}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

/* ════════════════ STICKY ANCHOR NAV ════════════════ */
const AnchorNav = () => {
  const labels = [
    { id: "managed-it", label: "Managed IT" }, { id: "cybersecurity", label: "Cybersecurity" },
    { id: "cloud", label: "Cloud & Server" }, { id: "network", label: "Network" },
    { id: "devices", label: "Devices & Assets" }, { id: "consulting", label: "Consulting" },
  ];
  return (
    <div className="sticky top-[64px] z-40 bg-background/95 backdrop-blur border-b border-border/20 py-3 overflow-x-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center gap-2 sm:gap-3 min-w-max sm:min-w-0 sm:flex-wrap">
          <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-widest mr-1 shrink-0">Jump to:</span>
          {labels.map((l) => (
            <a key={l.id} href={`#${l.id}`}
              className="text-xs font-medium px-3 py-1.5 rounded-full border border-border/40 text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-200 whitespace-nowrap">
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ════════════════ PAGE ════════════════ */
const ITInfrastructure = () => {
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [hash]);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead
        title={itInfrastructureServicesSeoData.title}
        description={itInfrastructureServicesSeoData.description}
        canonical={itInfrastructureServicesSeoData.canonical}
        keywords={itInfrastructureServicesSeoData.keywords}
        ogDescription={itInfrastructureServicesSeoData.ogDescription}
        twitterDescription={itInfrastructureServicesSeoData.twitterDescription}
        jsonLd={itInfrastructureServicesSeoData.jsonLd}
      />
      <Navbar />
      <main id="main-content">
        <Hero />
        <LogosStrip />
        <WhatWeManage />
        <OutcomesSection />
        <ProcessSection />
        <IndustriesFAQ />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default ITInfrastructure;

