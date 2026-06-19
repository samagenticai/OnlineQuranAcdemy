import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Clock, Monitor, CheckCircle } from 'lucide-react';

const WhyChooseUs = () => {
  // Features Data (Engineered for High-Contrast Elite UI Look)
  const features = [
    {
      icon: <Award className="w-5 h-5 text-amber-400 drop-shadow-[0_0_10px_rgba(245,158,11,0.6)]" />,
      title: "Qualified Quran Teachers",
      desc: "Learn from highly experienced, certified, and dedicated tutors specializing in Tajweed.",
      gradient: "from-emerald-500/20 via-emerald-500/5 to-transparent",
      hoverBorder: "group-hover:border-emerald-500/40"
    },
    {
      icon: <Users className="w-5 h-5 text-emerald-400 drop-shadow-[0_0_10px_rgba(16,185,129,0.6)]" />,
      title: "One-to-One Classes",
      desc: "Get undivided personalized attention with private interactive sessions tailored strictly to you.",
      gradient: "from-amber-500/15 via-amber-500/5 to-transparent",
      hoverBorder: "group-hover:border-amber-500/40"
    },
    {
      icon: <Clock className="w-5 h-5 text-amber-400 drop-shadow-[0_0_10px_rgba(245,158,11,0.6)]" />,
      title: "Flexible Timings",
      desc: "Schedule your online classes at your convenience. Tutors available 24/7 globally.",
      gradient: "from-emerald-500/20 via-emerald-500/5 to-transparent",
      hoverBorder: "group-hover:border-emerald-500/40"
    },
    {
      icon: <Monitor className="w-5 h-5 text-emerald-400 drop-shadow-[0_0_10px_rgba(16,185,129,0.6)]" />,
      title: "Online Learning",
      desc: "Access high-quality Quranic education safely from the comfort of your home smoothly.",
      gradient: "from-amber-500/15 via-amber-500/5 to-transparent",
      hoverBorder: "group-hover:border-amber-500/40"
    },
    {
      icon: <CheckCircle className="w-5 h-5 text-amber-400 drop-shadow-[0_0_10px_rgba(245,158,11,0.6)]" />,
      title: "Kids & Adults Classes",
      desc: "Comprehensive curriculum designed strictly to suit all age groups and individual goals.",
      gradient: "from-emerald-500/20 via-emerald-500/5 to-transparent",
      hoverBorder: "group-hover:border-emerald-500/40"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className="relative py-12 md:py-28 bg-[#010604] overflow-hidden select-none">
      
      {/* ================= BACKGROUND LUXURY AMBIENCE ================= */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 opacity-[0.015] bg-repeat bg-center mix-blend-overlay" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cpath d='M40 0 L80 40 L40 80 L0 40 Z' stroke='%2310b981' strokeWidth='0.5' fill='none'/%3E%3C/svg%3E")` }} 
        />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 md:left-1/4 md:translate-x-0 w-[240px] md:w-[450px] h-[240px] md:h-[450px] bg-emerald-500/[0.04] blur-[80px] md:blur-[130px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/10 w-[280px] md:w-[500px] h-[280px] md:h-[500px] bg-amber-500/[0.03] blur-[90px] md:blur-[150px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
        
        {/* ================= PREMIUM SECTION HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-emerald-950/40 border border-emerald-500/30 px-3 py-0.5 rounded-full mb-3 backdrop-blur-md shadow-md"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 shadow-[0_0_8px_#f59e0b] animate-pulse" />
            <span className="text-[8px] md:text-[9px] font-bold text-emerald-400 tracking-[0.22em] md:tracking-[0.25em] uppercase font-mono">
              Why Choose Our Academy
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xl sm:text-3xl lg:text-[42px] font-medium text-white tracking-tight leading-tight font-sans"
          >
            Why Choose Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500 font-semibold drop-shadow-sm">Quran Classes?</span>
          </motion.h2>
        </div>

        {/* ================= HIGH-FIDELITY FEATURES GRID ================= */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 sm:gap-5 md:gap-6 mb-8 md:mb-20"
        >
          {features.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3, ease: "easeOut" } }}
              className={`group relative rounded-2xl border border-emerald-950/60 bg-[#020d08]/40 border-t-white/10 p-5 sm:p-6 md:p-7 backdrop-blur-2xl transition-all duration-300 hover:bg-[#03140c]/50 ${item.hoverBorder} overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.05)] flex flex-col items-center text-center md:items-start md:text-left h-full min-h-[190px] sm:min-h-[220px]`}
            >
              <div className={`absolute inset-0 bg-gradient-to-b ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

              {/* Icon Container - Scaled down for mobile */}
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-[#03140c] border border-emerald-900/40 flex items-center justify-center mb-3 md:mb-6 group-hover:scale-105 group-hover:border-emerald-500/30 transition-all duration-300 shadow-inner shrink-0">
                {item.icon}
              </div>

              {/* Title with Absolute Visibility */}
              <h3 className="text-sm md:text-[17px] font-semibold text-white tracking-wide mb-1.5 md:text-left group-hover:text-amber-300 transition-colors duration-300 font-sans">
                {item.title}
              </h3>
              
              {/* Compact & Highly Readable Mobile Description */}
              <p className="text-[11px] sm:text-xs text-zinc-400 md:text-zinc-300 leading-relaxed font-normal font-sans antialiased max-w-[280px] md:max-w-none">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* ================= ELITE GENERATIONAL CLASSES BANNER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-xl md:rounded-2xl border border-emerald-500/20 border-t-white/10 bg-gradient-to-r from-[#03140d] via-[#010c07] to-slate-950/50 p-4 sm:p-8 md:p-12 backdrop-blur-2xl overflow-hidden flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8 shadow-[0_25px_55px_rgba(0,0,0,0.65),inset_0_1px_0_rgba(255,255,255,0.05)]"
        >
          <div className="absolute left-0 top-0 h-full w-1/4 bg-gradient-to-r from-emerald-500/[0.04] to-transparent blur-md pointer-events-none" />

          <div className="text-center md:text-left w-full md:w-auto relative z-10">
            <h4 className="text-base sm:text-2xl font-semibold text-white mb-1.5 md:mb-2.5 font-sans tracking-tight">
              Specialized Classes for <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-400 font-bold">Kids & Adults</span>
            </h4>
            <p className="text-[11px] sm:text-sm text-zinc-400 md:text-zinc-300 leading-relaxed font-sans max-w-2xl antialiased">
              Our comprehensive curriculum is thoughtfully designed to suit all age groups. Whether teaching young children or guiding adults, we adapt our methods to fit every student's individual learning capacity and goals.
            </p>
          </div>

          <div className="flex flex-row md:flex-col gap-2 w-full md:w-auto justify-center relative z-10">
            <div className="flex items-center justify-center md:justify-start gap-2 bg-[#03140c] border border-emerald-500/30 px-3 py-2 rounded-lg md:rounded-xl shadow-md flex-1 md:flex-initial md:min-w-[135px] border-t-white/5">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span className="text-[11px] md:text-[12px] font-medium text-zinc-200 font-sans tracking-wide">For Kids</span>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2 bg-[#171003] border border-amber-500/30 px-3 py-2 rounded-lg md:rounded-xl shadow-md flex-1 md:flex-initial md:min-w-[135px] border-t-white/5">
              <CheckCircle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span className="text-[11px] md:text-[12px] font-medium text-zinc-200 font-sans tracking-wide">For Adults</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default WhyChooseUs;