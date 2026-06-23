import { motion } from "framer-motion";
import { ShieldCheck, Clock, User, Rocket, Target } from "lucide-react";
import { containerVariants, itemVariants } from "@/lib/animations";

const metrics = [
  {
    id: 1,
    value: "99.9%",
    title: "Uptime SLA",
    description: "Consistent performance you can rely on",
    icon: <ShieldCheck size={24} className="text-[#0052cc]" />,
    color: "#0052cc",
    ringClass: "text-[#0052cc]",
    shadowColor: "rgba(0, 82, 204, 0.25)"
  },
  {
    id: 2,
    value: "48h",
    title: "Resource Deployment",
    description: "Average turnaround time",
    icon: <Clock size={24} className="text-[#6366f1]" />,
    color: "#6366f1",
    ringClass: "text-[#6366f1]",
    shadowColor: "rgba(99, 102, 241, 0.25)"
  },
  {
    id: 3,
    value: "100%",
    title: "Certified Talent Pool",
    description: "ISO & cloud certified experts",
    icon: <User size={24} className="text-[#06b6d4]" />,
    color: "#06b6d4",
    ringClass: "text-[#06b6d4]",
    shadowColor: "rgba(6, 182, 212, 0.25)"
  },
  {
    id: 4,
    value: "500+",
    title: "Projects Delivered",
    description: "Enterprise grade success stories",
    icon: <Rocket size={24} className="text-[#f43f5e]" />,
    color: "#f43f5e",
    ringClass: "text-[#f43f5e]",
    shadowColor: "rgba(244, 63, 94, 0.25)"
  },
];

const MetricsSection = () => {
  return (
    <section className="relative py-16 lg:py-24 bg-white overflow-hidden font-sans">
      {/* Abstract Wave Background */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg className="w-full h-full" viewBox="0 0 1440 600" preserveAspectRatio="none">
          <path d="M0,300 C300,100 600,500 1440,200 L1440,0 L0,0 Z" fill="none" stroke="#0052cc" strokeWidth="0.5" />
          <path d="M0,350 C400,150 800,450 1440,250 L1440,0 L0,0 Z" fill="none" stroke="#0052cc" strokeWidth="0.5" />
          <path d="M0,400 C500,200 1000,400 1440,300 L1440,0 L0,0 Z" fill="none" stroke="#0052cc" strokeWidth="0.5" />
          <path d="M0,450 C600,250 1200,350 1440,350 L1440,0 L0,0 Z" fill="none" stroke="#0052cc" strokeWidth="0.5" />
          {/* subtle radial gradient */}
          <radialGradient id="wave-grad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#0052cc" stopOpacity="0.1" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>
          <rect width="100%" height="100%" fill="url(#wave-grad)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-[#111827] mb-3 tracking-tight">
              Real Impact. <span className="text-[#0052cc]">Real Results.</span>
            </motion.h2>
            <motion.p variants={itemVariants} className="text-[15px] text-slate-600">
              Delivering measurable outcomes through expertise, innovation and commitment.
            </motion.p>
            
            {/* Divider */}
            <motion.div variants={itemVariants} className="flex items-center justify-center gap-3 mt-6">
              <div className="w-16 h-px bg-[#0052cc]/30"></div>
              <div className="w-5 h-5 border-2 border-[#0052cc] rounded-md flex items-center justify-center rotate-45 shadow-[0_0_10px_rgba(0,82,204,0.3)]">
                <div className="w-1.5 h-1.5 bg-[#0052cc] rounded-full"></div>
              </div>
              <div className="w-16 h-px bg-[#0052cc]/30"></div>
            </motion.div>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-6 mb-20 max-w-[1200px] mx-auto">
            {metrics.map((metric) => (
              <motion.div key={metric.id} variants={itemVariants} className="flex flex-col items-center justify-center relative">
                
                {/* SVG Circle Background */}
                <div className="relative w-[220px] h-[220px] lg:w-[240px] lg:h-[240px] flex items-center justify-center">
                  <svg 
                    className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" 
                    viewBox="0 0 256 256"
                    style={{ filter: `drop-shadow(0 15px 35px rgba(0,0,0,0.05)) drop-shadow(0 8px 16px ${metric.shadowColor})` }}
                  >
                    {/* Background ring (solid white circle to block wave background and catch shadow) */}
                    <circle cx="128" cy="128" r="110" fill="white" stroke="#f8fafc" strokeWidth="1.5" />
                    {/* Colored arc */}
                    <circle 
                      cx="128" cy="128" r="110" 
                      fill="none" 
                      stroke={metric.color} 
                      strokeWidth="3" 
                      strokeDasharray="691" 
                      strokeDashoffset="200" 
                      strokeLinecap="round"
                    />
                    {/* Small dots along the ring */}
                    <circle cx="128" cy="18" r="4.5" fill={metric.color} />
                    <circle cx="35" cy="180" r="3.5" fill={metric.color} />
                    <circle cx="221" cy="180" r="3.5" fill={metric.color} />
                  </svg>

                  {/* Top Floating Hexagon/Circle Icon */}
                  <div 
                    className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[72px] h-[72px] bg-white rounded-2xl flex items-center justify-center rotate-45 z-20 shadow-sm"
                    style={{ border: `1.5px solid ${metric.shadowColor}` }}
                  >
                    <div className="-rotate-45">{metric.icon}</div>
                  </div>

                  {/* Inner Content (Properly Centered) */}
                  <div className="flex flex-col items-center justify-center text-center px-4 z-10">
                    <h3 className={`text-4xl lg:text-[42px] font-bold mb-1 tracking-tight ${metric.ringClass}`}>{metric.value}</h3>
                    <p className="text-slate-800 font-semibold text-sm mb-1">{metric.title}</p>
                    <p className="text-slate-500 text-[11px] leading-snug max-w-[130px] mx-auto">{metric.description}</p>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Banner */}
          <motion.div variants={itemVariants} className="relative rounded-3xl overflow-hidden shadow-lg bg-gradient-to-r from-[#f0f5ff] to-white border border-[#e5edff] max-w-5xl mx-auto">
            {/* Banner Background Mountains */}
            <div className="absolute inset-0 pointer-events-none">
              <svg className="absolute bottom-0 w-full h-[150%] object-cover opacity-60" preserveAspectRatio="none" viewBox="0 0 1440 320">
                <path fill="#dce6f9" d="M0,160L48,176C96,192,192,224,288,240C384,256,480,256,576,234.7C672,213,768,171,864,170.7C960,171,1056,213,1152,218.7C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                <path fill="#c7d9f7" d="M0,224L60,213.3C120,203,240,181,360,192C480,203,600,245,720,250.7C840,256,960,224,1080,197.3C1200,171,1320,149,1380,138.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
              </svg>
            </div>

            <div className="relative z-10 px-6 py-8 md:py-10 md:px-12 flex flex-col md:flex-row items-center gap-6 md:gap-8">
              <div className="w-16 h-16 rounded-full bg-white shadow-[0_8px_20px_rgba(0,82,204,0.15)] flex items-center justify-center shrink-0 border border-blue-50">
                <div className="w-12 h-12 rounded-full bg-[#f0f5ff] flex items-center justify-center border border-blue-100">
                  <Target size={22} className="text-[#0052cc]" />
                </div>
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <p className="text-[#0052cc] font-bold text-[10px] uppercase tracking-[0.15em] mb-2">Our Promise</p>
                <h3 className="text-2xl md:text-[28px] font-bold text-[#111827] mb-2.5">Your Success is Our Mission</h3>
                <p className="text-slate-600 text-sm md:text-[15px] leading-relaxed max-w-2xl mx-auto md:mx-0">
                  We combine technology, talent and trust to deliver solutions that drive growth and create long-term value.
                </p>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default MetricsSection;
