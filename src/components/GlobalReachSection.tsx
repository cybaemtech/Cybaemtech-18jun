import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/animations";

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

          {/* Legend */}
          <motion.div variants={itemVariants} className="mt-16 flex justify-center relative z-20">
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

        </motion.div>
      </div>
    </section>
  );
};

export default GlobalReachSection;
