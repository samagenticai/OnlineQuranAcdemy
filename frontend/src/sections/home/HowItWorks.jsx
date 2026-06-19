import React from 'react';
import { motion } from 'framer-motion';
import { MousePointerClick, CalendarClock, BookOpenText, ArrowRight } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <MousePointerClick className="w-6 h-6 text-amber-400" />,
      title: "Book Free Trial",
      desc: "Sign up for a free no-obligation trial lesson to evaluate our teachers and teaching methods.",
      step: "01"
    },
    {
      icon: <CalendarClock className="w-6 h-6 text-emerald-400" />,
      title: "Select Timing",
      desc: "Choose a schedule that fits your lifestyle. Our tutors are available 24/7 across all time zones.",
      step: "02"
    },
    {
      icon: <BookOpenText className="w-6 h-6 text-amber-400" />,
      title: "Start Learning",
      desc: "Begin your spiritual journey with personalized one-to-one sessions from the comfort of home.",
      step: "03"
    }
  ];

  return (
    <section id="how-it-works" className="relative py-16 md:py-28 bg-[#010604] overflow-hidden select-none">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.03)_0%,transparent_70%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-emerald-950/40 border border-emerald-500/30 px-3 py-1 rounded-full mb-4 backdrop-blur-md"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-[10px] font-bold text-emerald-400 tracking-[0.2em] uppercase font-mono">Simple 3-Step Process</span>
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight leading-tight font-sans">
            How It <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500 font-semibold">Works</span>
          </h2>
          <p className="mt-4 text-slate-400 text-sm md:text-base max-w-xl mx-auto">
            Starting your Quranic education is easy and transparent. Follow these steps to begin your journey with us today.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
          {/* Connection Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent -translate-y-1/2 z-0" />

          {steps.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative flex flex-col items-center text-center z-10"
            >
              {/* Step Number Circle */}
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#020d08] border border-emerald-500/20 flex items-center justify-center mb-6 relative group-hover:border-amber-500/40 transition-all duration-500 shadow-2xl">
                <div className="absolute inset-0 rounded-full bg-gradient-to-b from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {item.icon}
                <span className="absolute -top-2 -right-2 bg-gradient-to-br from-amber-400 to-amber-600 text-slate-950 text-[10px] font-bold w-6 h-6 rounded-full flex items-center justify-center shadow-lg">
                  {item.step}
                </span>
              </div>

              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-amber-400 transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed max-w-[280px]">
                {item.desc}
              </p>

              {/* Mobile Arrow Indicator */}
              {index < steps.length - 1 && (
                <div className="md:hidden mt-8 text-emerald-500/30">
                  <ArrowRight className="w-6 h-6 rotate-90" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
