import { motion } from "framer-motion";
import { Clock, Rocket, Target, Leaf, Award } from "lucide-react";
import { containerVariants, itemVariants } from "@/lib/animations";

const metrics = [
  {
    id: 1,
    value: "99.9%",
    title: "Uptime SLA",
    description: "Consistent performance you can rely on",
    icon: <Clock size={32} className="text-[#3b82f6]" />,
    color: "#3b82f6",
    bgColor: "bg-blue-50"
  },
  {
    id: 2,
    value: "48h",
    title: "Resource Deployment",
    description: "Average turnaround time",
    icon: <Rocket size={32} className="text-[#a855f7]" />,
    color: "#a855f7",
    bgColor: "bg-purple-50"
  },
  {
    id: 3,
    value: "100%",
    title: "Certified Talent Pool",
    description: "ISO & cloud certified experts",
    icon: <Award size={32} className="text-[#22c55e]" />,
    color: "#22c55e",
    bgColor: "bg-green-50"
  },
  {
    id: 4,
    value: "500+",
    title: "Projects Delivered",
    description: "Enterprise grade success stories",
    icon: <Target size={32} className="text-[#fb923c]" />,
    color: "#fb923c",
    bgColor: "bg-orange-50"
  },
];

const MetricsSection = () => {
  return (
    <section className="relative py-20 lg:py-28 bg-white overflow-hidden font-sans">
      {/* Clean Faint Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#111827 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <motion.h4 variants={itemVariants} className="text-primary  text-xs uppercase tracking-[0.2em] mb-4">OUR IMPACT</motion.h4>
            <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold text-[#111827] mb-4 tracking-tight">
              Real Impact. <span className="text-primary">Real Results.</span>
            </motion.h2>
            <motion.p variants={itemVariants} className="text-[15px] text-slate-600 mb-8">
              Delivering measurable outcomes through expertise, innovation and commitment.
            </motion.p>
            
            {/* Divider */}
          
          </div>

          {/* Metrics Container */}
          <div className="max-w-[1200px] mx-auto mb-0 px-2 sm:px-0">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
              {metrics.map((metric) => (
                <motion.div key={metric.id} variants={itemVariants} className="bg-white border border-gray-100 rounded-3xl sm:rounded-[2rem] shadow-[0_0_25px_rgba(0,0,0,0.12)] flex flex-col items-center text-center p-4 sm:p-8 lg:p-12 group hover:-translate-y-1 transition-all duration-300">
                  <div className={`w-10 h-10 sm:w-14 sm:h-14 rounded-full flex items-center justify-center ${metric.bgColor} mb-3 sm:mb-6`}>
                    {metric.icon}
                  </div>
                  <h3 className="text-xl sm:text-3xl lg:text-[2.5rem] font-bold text-slate-900 mb-1 sm:mb-2.5 tracking-tight">{metric.value}</h3>
                  <p className="text-[10px] sm:text-[13px] font-medium text-slate-500 mb-1 sm:mb-1.5">{metric.title}</p>
                  <p className="text-[9px] sm:text-[11px] text-slate-400 max-w-[200px] leading-relaxed hidden sm:block">
                    {metric.description}
                  </p>

                </motion.div>
              ))}
            </div>
          </div>          {/* Bottom Banner */}
          {/* <motion.div variants={itemVariants} className="relative rounded-3xl overflow-hidden shadow-lg bg-gradient-to-r from-[#f0f5ff] to-white border border-[#e5edff] max-w-5xl mx-auto">
            <div className="absolute inset-0 pointer-events-none">
              <svg className="absolute bottom-0 w-full h-[150%] object-cover opacity-60" preserveAspectRatio="none" viewBox="0 0 1440 320">
                <path fill="#dce6f9" d="M0,160L48,176C96,192,192,224,288,240C384,256,480,256,576,234.7C672,213,768,171,864,170.7C960,171,1056,213,1152,218.7C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                <path fill="#c7d9f7" d="M0,224L60,213.3C120,203,240,181,360,192C480,203,600,245,720,250.7C840,256,960,224,1080,197.3C1200,171,1320,149,1380,138.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
              </svg>
            </div>

          
          </motion.div> */}

        </motion.div>
      </div>
    </section>
  );
};

export default MetricsSection;
