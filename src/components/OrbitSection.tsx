import { motion } from "framer-motion";
import { ArrowRight, Shield, HeadphonesIcon, Cloud, Users, BarChart3, Server } from "lucide-react";
import { Link } from "react-router-dom";
import { containerVariants, itemVariants } from "@/lib/animations";
import cybaemLogo from "@/assets/cybaem-logo.png";

const nodes = [
  { id: 'cyber', x: 18.75, y: 41.6, label: 'Cybersecurity', icon: <Shield size={20} className="text-[#0052cc]" fill="#0052cc" fillOpacity={0.1} />, align: 'left' },
  { id: 'support', x: 40, y: 20, label: '24/7\nSupport', icon: <HeadphonesIcon size={20} className="text-[#0052cc]" />, align: 'right' },
  { id: 'cloud', x: 75, y: 30, label: 'Cloud\nSolutions', icon: <Cloud size={20} className="text-[#0052cc]" fill="#0052cc" />, align: 'right' },
  { id: 'consult', x: 81.25, y: 55, label: 'Consulting', icon: <Users size={20} className="text-[#0052cc]" />, align: 'right' },
  { id: 'digital', x: 72.5, y: 80, label: 'Digital\nTransformation', icon: <BarChart3 size={20} className="text-[#0052cc]" />, align: 'right' },
  { id: 'managed', x: 32.5, y: 75, label: 'Managed IT', icon: <Server size={20} className="text-[#0052cc]" />, align: 'left' },
];

const OrbitSection = () => {
  return (
    <section className="relative pt-20 pb-12 lg:pt-28 lg:pb-12 overflow-hidden bg-[#f8faff]">
      {/* Background decoration for the right text side (wave dots pattern representation) */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-30 pointer-events-none hidden lg:block" 
           style={{
             backgroundImage: 'radial-gradient(#0052cc 1px, transparent 1px)',
             backgroundSize: '20px 20px',
             maskImage: 'linear-gradient(to left, rgba(0,0,0,1), rgba(0,0,0,0))',
             WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,1), rgba(0,0,0,0))'
           }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          
          {/* Left Side: Exact Network Diagram */}
          <div className="w-full lg:w-3/5">
            <div className="relative w-full max-w-[800px] aspect-[4/3] lg:aspect-[4/3] min-h-[300px] mx-auto">
              
              {/* SVG Background Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid meet">
                <g stroke="#0052cc" strokeWidth="1.5" strokeDasharray="4 6" fill="none" strokeOpacity="0.3">
                  {/* Center to nodes */}
                  <path d="M 400 300 Q 250 250 150 250" />
                  <path d="M 400 300 Q 350 200 320 120" />
                  <path d="M 400 300 Q 500 200 600 180" />
                  <path d="M 400 300 Q 550 300 650 330" />
                  <path d="M 400 300 Q 500 400 580 480" />
                  <path d="M 400 300 Q 300 400 260 450" />
                  
                  {/* Node to node ring */}
                  <path d="M 150 250 Q 250 150 320 120" />
                  <path d="M 320 120 Q 450 100 600 180" />
                  <path d="M 600 180 Q 650 250 650 330" />
                  <path d="M 650 330 Q 650 400 580 480" />
                  <path d="M 580 480 Q 450 500 260 450" />
                  <path d="M 260 450 Q 150 350 150 250" />
                  
                  {/* Extra outer arcs */}
                  <path d="M 100 300 A 300 300 0 0 1 400 -50" strokeDasharray="2 8" strokeOpacity="0.15" />
                  <path d="M 700 300 A 300 300 0 0 1 400 650" strokeDasharray="2 8" strokeOpacity="0.15" />
                </g>

                {/* Blue connection dots */}
                <g fill="#0052cc" fillOpacity="0.6">
                  <circle cx="220" cy="200" r="4" />
                  <circle cx="450" cy="130" r="4" />
                  <circle cx="630" cy="250" r="4" />
                  <circle cx="620" cy="400" r="4" />
                  <circle cx="400" cy="480" r="4" />
                  <circle cx="200" cy="350" r="4" />
                  <circle cx="500" cy="220" r="4" />
                  <circle cx="350" cy="380" r="4" />
                  <circle cx="560" cy="260" r="3" />
                  <circle cx="270" cy="330" r="3" />
                </g>
              </svg>

              {/* Center Logo */}
              <div 
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 
                           w-24 h-24 sm:w-36 sm:h-36 md:w-48 md:h-48 lg:w-56 lg:h-56 bg-white rounded-full 
                           shadow-[0_10px_40px_rgba(0,82,204,0.1)] flex items-center justify-center p-3 sm:p-5 lg:p-6"
              >
                <img src={cybaemLogo} alt="Cybaem Tech" className="w-[85%] h-auto" />
              </div>

              {/* Floating Nodes */}
              {nodes.map((node, i) => (
                <div 
                  key={node.id}
                  className="absolute flex items-center justify-center z-20"
                  style={{ 
                    left: `${node.x}%`, 
                    top: `${node.y}%`, 
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: i * 0.15, type: "spring", bounce: 0.4 }}
                    viewport={{ once: true }}
                    className={`relative flex items-center gap-1.5 sm:gap-4 flex-col ${node.align === 'left' ? 'sm:flex-row-reverse' : 'sm:flex-row'}`}
                  >
                    <div className="w-10 h-10 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full bg-white shadow-[0_4px_20px_rgba(0,82,204,0.12)] flex items-center justify-center shrink-0 border border-slate-50">
                      <div className="scale-75 sm:scale-100 flex items-center justify-center">{node.icon}</div>
                    </div>
                    <span 
                      className={`font-semibold sm:font-medium text-[9px] sm:text-[13px] lg:text-[15px] text-slate-800 whitespace-nowrap sm:whitespace-pre-line leading-tight text-center sm:text-left
                                  ${node.align === 'left' ? 'sm:text-right' : 'sm:text-left'}`}
                    >
                      {node.label}
                    </span>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-2/5 lg:pl-10 text-center lg:text-left mt-10 sm:mt-16 lg:mt-0">
            <motion.div 
              variants={containerVariants} 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }} 
              className="max-w-xl mx-auto lg:mx-0"
            >
              <motion.h2 variants={itemVariants} className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4 sm:mb-5 text-slate-900 tracking-tight">
                Ready to <span className="text-[#0052cc]">Transform</span> Your Business?
              </motion.h2>
              <motion.p variants={itemVariants} className="text-base sm:text-[17px] text-slate-600 leading-relaxed mb-6 sm:mb-8">
                Partner with certified experts to build secure, scalable and future-ready IT ecosystems.
              </motion.p>
              <motion.div variants={itemVariants}>
                <Link to="/contact" className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 text-sm sm:text-[15px] font-semibold bg-[#0052cc] text-white rounded-full shadow-[0_8px_20px_rgba(0,82,204,0.25)] hover:bg-[#0040a8] transition-all hover:-translate-y-0.5">
                  Book a Discovery Call
                  <ArrowRight size={18} />
                </Link>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OrbitSection;
