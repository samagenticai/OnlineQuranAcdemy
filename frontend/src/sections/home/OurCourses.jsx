import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BookOpen, GraduationCap, Award, Languages, User, ArrowRight, Sparkles } from 'lucide-react';

const OurCourses = () => {
  const courses = [
    {
      icon: <BookOpen className="w-5 h-5 text-amber-400 drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]" />,
      title: "Nazra Quran",
      desc: "Learn to read the Holy Quran fluently from the basics with correct Arabic pronunciation and foundational rules.",
      gradient: "from-emerald-500/15 via-emerald-500/5 to-transparent",
      hoverBorder: "group-hover:border-emerald-500/30"
    },
    {
      icon: <Award className="w-5 h-5 text-emerald-400 drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]" />,
      title: "Quran with Tajweed",
      desc: "Master the art of Quranic recitation by applying the precise rules of Tajweed, accent, and rhythmic articulation.",
      gradient: "from-amber-500/10 via-amber-500/5 to-transparent",
      hoverBorder: "group-hover:border-amber-500/30"
    },
    {
      icon: <GraduationCap className="w-5 h-5 text-amber-400 drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]" />,
      title: "Hifz Quran",
      desc: "Memorize the Holy Quran systematically under the supervision of certified Huffaz with proven retention techniques.",
      gradient: "from-emerald-500/15 via-emerald-500/5 to-transparent",
      hoverBorder: "group-hover:border-emerald-500/30"
    },
    {
      icon: <Languages className="w-5 h-5 text-emerald-400 drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]" />,
      title: "Quran Translation",
      desc: "Understand the deep divine wisdom, context, and word-by-word meaning of the Quranic verses in your language.",
      gradient: "from-amber-500/10 via-amber-500/5 to-transparent",
      hoverBorder: "group-hover:border-amber-500/30"
    },
    {
      icon: <User className="w-5 h-5 text-amber-400 drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]" />,
      title: "Kids Quran Classes",
      desc: "Specially tailored, fun, and highly engaging interactive sessions designed to build a strong spiritual bond in young minds.",
      gradient: "from-emerald-500/15 via-emerald-500/5 to-transparent",
      hoverBorder: "group-hover:border-emerald-500/30"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.03 } // Super fast render to bypass browser interceptors
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3, ease: "linear" } // Pure flat animation to avoid scroll glitches
    }
  };

  return (
    // 'notranslate' forces mobile browsers to treat texts as pure strings, not media triggers
    <section className="relative py-12 md:py-28 bg-[#010604] overflow-hidden select-none notranslate" translate="no">
      
      {/* ================= BACKGROUND LUXURY AMBIENCE ================= */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 opacity-[0.015] bg-repeat bg-center mix-blend-overlay" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cpath d='M40 0 L80 40 L40 80 L0 40 Z' stroke='%2310b981' strokeWidth='0.5' fill='none'/%3E%3C/svg%3E")` }} 
        />
        <div className="absolute top-1/3 right-1/4 w-[240px] md:w-[450px] h-[240px] md:h-[450px] bg-emerald-500/[0.03] blur-[80px] md:blur-[140px] rounded-full" />
        <div className="absolute bottom-1/3 left-1/10 w-[280px] md:w-[480px] h-[280px] md:h-[480px] bg-amber-500/[0.02] blur-[90px] md:blur-[130px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
        
        {/* ================= SECTION HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-20">
          <div className="inline-flex items-center gap-2 bg-emerald-950/40 border border-emerald-500/30 px-3 py-0.5 rounded-full mb-3 backdrop-blur-md shadow-md">
            <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 shadow-[0_0_8px_#f59e0b]" />
            <span className="text-[8px] md:text-[9px] font-bold text-emerald-400 tracking-[0.22em] uppercase font-mono">
              Our Specialized Programs
            </span>
          </div>

          <h2 className="text-xl sm:text-3xl lg:text-[42px] font-medium text-white tracking-tight leading-tight font-sans">
            Explore Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500 font-semibold drop-shadow-sm">Online Courses</span>
          </h2>
        </div>

        {/* ================= COURSES DYNAMIC GRID ================= */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-20px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 justify-center items-stretch"
        >
          {courses.map((course, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`group relative rounded-xl md:rounded-2xl border border-emerald-950/60 bg-[#020d08]/80 border-t-white/10 p-5 sm:p-6 md:p-7 backdrop-blur-md transition-all duration-200 ${course.hoverBorder} overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.6)] flex flex-col items-center text-center md:items-start md:text-left h-full pointer-events-auto`}
            >
              {/* Atmosphere Effect */}
              <div className={`absolute inset-0 bg-gradient-to-b ${course.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-0`} />

              {/* Icon */}
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-[#03140c] border border-emerald-900/40 flex items-center justify-center mb-4 md:mb-6 shrink-0 relative z-10 pointer-events-none">
                {course.icon}
              </div>

              {/* Course Title - Protected against translators/media catchers */}
              <h3 className="text-base md:text-lg font-semibold text-white tracking-wide mb-2 font-sans relative z-10 notranslate pointer-events-none" translate="no">
                {course.title}
              </h3>
              
              {/* Description */}
              <p className="text-[12px] sm:text-[13px] md:text-xs text-zinc-400 md:text-zinc-300 leading-relaxed font-normal font-sans antialiased mb-5 flex-grow max-w-[290px] md:max-w-none relative z-10 pointer-events-none">
                {course.desc}
              </p>

              {/* Learn More Button */}
              <Link 
                to="/courses"
                className="relative inline-flex items-center gap-2 px-4 py-2 rounded-lg md:rounded-xl text-[11px] md:text-[13px] font-medium text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 hover:border-amber-500/50 hover:text-amber-300 transition-all duration-200 shadow-md mt-auto z-10 active:scale-95"
              >
                <span>Learn More</span>
                <ArrowRight className="w-3.5 h-3.5 text-emerald-400 group-hover:text-amber-300" />
              </Link>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default OurCourses;