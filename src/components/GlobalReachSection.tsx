import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/animations";
import { Globe, MapPin as LucideMapPin, ChevronRight } from "lucide-react";


const regions = [
  { id: "us", name: "US - United States", color: "#18b848ff", top: "30%", left: "25%", pinPosition: "right" },
  { id: "uk", name: "UK - United Kingdom", color: "#0820a7cc", top: "18%", left: "55%", pinPosition: "left" },
  { id: "eu", name: "EU - Europe", color: "#0820a7cc", top: "26%", left: "52%", pinPosition: "left" },
  { id: "dubai", name: "AE - Dubai", color: "#18b848ff", top: "33%", left: "64%", pinPosition: "left" },
  { id: "india", name: "IN - India", color: "#e76b19ff", top: "39%", left: "69%", pinPosition: "left" },
  { id: "africa", name: "Africa", color: "#0820a7cc", top: "42%", left: "54%", pinPosition: "left" },
];

const BLINK_COLORS = ["#e76b19ff", "#18b848ff", "#0820a7cc"];

const MapPin = ({ color, isBlinking = false }: { color: string; isBlinking?: boolean }) => (
  <div className="relative flex items-center justify-center">
    {isBlinking && (
      <div 
        className="absolute w-6 h-6 rounded-full animate-ping opacity-75"
        style={{ backgroundColor: color, top: '4px' }}
      />
    )}
    <svg width="28" height="38" viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-lg z-20 relative hover:-translate-y-1 transition-transform">
      <path d="M12 0C5.37258 0 0 5.37258 0 12C0 21 12 32 12 32C12 32 24 21 24 12C24 5.37258 18.6274 0 12 0Z" fill={color}/>
      <circle cx="12" cy="12" r="5" fill="white"/>
    </svg>
  </div>
);

const GlobalReachSection = () => {
  const [activeColorIndex, setActiveColorIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveColorIndex((prev) => (prev + 1) % BLINK_COLORS.length);
    }, 1000); // 1 second interval
    return () => clearInterval(interval);
  }, []);

  const activeColor = BLINK_COLORS[activeColorIndex];

  return (
    <section className="bg-[#F8FAFC] py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
          
          {/* Header */}
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <motion.h2 variants={itemVariants} className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0F172A] mb-4">
              Our Global Presence
            </motion.h2>
            <motion.p variants={itemVariants} className="text-lg text-[#64748B]">
              Delivering innovative solutions across the globe.
            </motion.p>
          </div>

          {/* Map Container */}
          <motion.div variants={itemVariants} className="relative w-full max-w-6xl mx-auto aspect-[16/9] min-h-[400px]">
            {/* World Map Background */}
            <div 
              className="absolute inset-0 bg-sky-200"
              style={{ 
                maskImage: "url('/images/world-map.svg')", 
                WebkitMaskImage: "url('/images/world-map.svg')", 
                maskSize: "contain", 
                WebkitMaskSize: "contain",
                maskRepeat: "no-repeat", 
                WebkitMaskRepeat: "no-repeat",
                maskPosition: "center", 
                WebkitMaskPosition: "center" 
              }}
            />

            {/* Continent Labels */}
            <div className="absolute inset-0 pointer-events-none select-none hidden sm:block">
              <span className="absolute top-[25%] left-[26%] text-xs sm:text-[11px] font-bold text-primary uppercase tracking-[0.15em] -translate-x-1/2 text-center leading-tight">North<br/>America</span>
              <span className="absolute top-[60%] left-[34%] text-xs sm:text-[11px] font-bold text-primary uppercase tracking-[0.15em] -translate-x-1/2 text-center leading-tight">South<br/>America</span>
              <span className="absolute top-[30%] left-[46%] text-xs sm:text-[11px] font-bold text-primary uppercase tracking-[0.15em] -translate-x-1/2 text-center">Europe</span>
              <span className="absolute top-[50%] left-[55%] text-xs sm:text-[11px] font-bold text-primary uppercase tracking-[0.15em] -translate-x-1/2 text-center">Africa</span>
              <span className="absolute top-[25%] left-[69%] text-xs sm:text-[11px] font-bold text-primary uppercase tracking-[0.15em] -translate-x-1/2 text-center">Asia</span>
              <span className="absolute top-[70%] left-[81%] text-xs sm:text-[11px] font-bold text-primary uppercase tracking-[0.15em] -translate-x-1/2 text-center">Australia</span>
            </div>

            {/* Map Markers */}
            {regions.map((region) => (
              <div
                key={region.id}
                className="absolute flex items-center group cursor-pointer z-10 hover:z-30"
                style={{ top: region.top, left: region.left }}
              >
                {region.pinPosition === "right" ? (
                  <div className="flex items-center -translate-x-full">
                    <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-sm border border-white/50 px-3 py-1.5 mr-[-6px] z-6 transition-transform group-hover:scale-105">
                      <p className="text-[#0F172A] font-bold text-xs whitespace-nowrap">{region.name}</p>
                    </div>
                    <MapPin color={region.color} isBlinking={region.color === activeColor} />
                  </div>
                ) : (
                  <div className="flex items-center -translate-x-6">
                    <MapPin color={region.color} isBlinking={region.color === activeColor} />
                    <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-sm border border-white/50 px-3 py-1.5 ml-[-6px] z-6 transition-transform group-hover:scale-105">
                      <p className="text-[#0F172A] font-bold text-xs whitespace-nowrap">{region.name}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </motion.div>

          {/* Desktop Legend (Hidden on Mobile) */}
          <motion.div variants={itemVariants} className="mt-16 hidden md:flex justify-center relative z-20">
            <div className="bg-white rounded-full shadow-[0_0_20px_rgba(0,0,0,0.25)] border border-gray-100 px-8 py-5 flex flex-wrap items-center justify-center gap-8 sm:gap-12">
              <div className="flex items-center gap-3">
                <MapPin color="#e76b19ff" isBlinking={"#e76b19ff" === activeColor} />
                <span className="text-[#0F172A] font-bold text-sm">Phase 1 – 2020 to 2023</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin color="#18b848ff" isBlinking={"#18b848ff" === activeColor} />
                <span className="text-[#0F172A] font-bold text-sm">Phase 2 – 2024 to 2026</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin color="#0820a7cc" isBlinking={"#0820a7cc" === activeColor} />
                <span className="text-[#0F172A] font-bold text-sm">Phase 3 – 2027 to 2030</span>
              </div>
            </div>
          </motion.div>

          {/* Mobile Timeline (Hidden on Desktop) */}
          <motion.div variants={itemVariants} className="mt-12 relative md:hidden px-2 max-w-md mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-[38px] top-[30px] bottom-[110px] w-px bg-gray-200 z-0"></div>

            <div className="flex flex-col gap-6">
              {[
                {
                  phase: "Phase 1",
                  years: "2020 - 2023",
                  color: "#e76b19ff",
                  bgColor: "bg-orange-50",
                  borderColor: "border-orange-200",
                  locations: [{ name: "India" }]
                },
                {
                  phase: "Phase 2",
                  years: "2024 - 2026",
                  color: "#18b848ff",
                  bgColor: "bg-green-50",
                  borderColor: "border-green-200",
                  locations: [{ name: "UAE" }, { name: "Europe" }]
                },
                {
                  phase: "Phase 3",
                  years: "2027 - 2030",
                  color: "#0820a7cc",
                  bgColor: "bg-blue-50",
                  borderColor: "border-blue-200",
                  locations: [{ name: "UK" }, { name: "USA" }, { name: "Africa" }]
                }
              ].map((item, idx) => (
                <div key={idx} className="relative flex items-center w-full z-10">
                  {/* Left Icon */}
                  <div className={`relative z-10 flex-shrink-0 w-[60px] h-[60px] rounded-full border ${item.borderColor} ${item.bgColor} flex items-center justify-center`}>
                    <div className="w-[42px] h-[42px] rounded-full flex items-center justify-center" style={{ backgroundColor: item.color }}>
                      <Globe className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  {/* Connecting Line (Horizontal) */}
                  <div className="w-4 h-px bg-gray-200 z-0"></div>

                  {/* Card */}
                  <div className={`relative flex-1 rounded-xl border ${item.borderColor} bg-white p-4 shadow-sm flex items-center justify-between`}>
                    {/* Caret */}
                    <div className={`absolute top-1/2 -translate-y-1/2 -left-[6px] w-[10px] h-[10px] border-l border-b ${item.borderColor} bg-white rotate-45 rounded-[2px]`}></div>
                    
                    <div className="flex-1 pl-1">
                      <h4 className="font-bold text-lg leading-tight" style={{ color: item.color }}>{item.phase}</h4>
                      <p className="text-gray-500 text-sm font-medium mb-2">{item.years}</p>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                        {item.locations.map((loc, i) => (
                          <div key={i} className="flex items-center gap-1">
                            <LucideMapPin className="w-[14px] h-[14px]" style={{ color: item.color, fill: item.color, stroke: 'white', strokeWidth: 1.5 }} />
                            <span className="text-[13px] font-semibold text-gray-800">{loc.name}</span>
                            {i < item.locations.length - 1 && <span className="text-gray-300 ml-2">•</span>}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <ChevronRight className="w-5 h-5 flex-shrink-0" style={{ color: item.color }} />
                  </div>
                </div>
              ))}

              {/* Bottom Footer Item */}
              <div className="mt-2 bg-[#f4f7fb] rounded-2xl p-4 flex items-center gap-4 border border-gray-100 z-10 relative">
                <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center bg-[#e2eaf6]`}>
                  <Globe className="w-6 h-6 text-[#0820a7cc]" />
                </div>
                <div className="flex-1">
                  <p className="text-[13px] sm:text-sm font-medium text-[#0F172A] leading-snug">
                    Expanding our footprint to deliver exceptional IT services worldwide.
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default GlobalReachSection;
