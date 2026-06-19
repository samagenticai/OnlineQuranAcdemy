import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Home, BookOpen, Heart } from 'lucide-react';

const LearningBenefits = () => {
  const benefits = [
    {
      icon: <BookOpen className="w-6 h-6 text-emerald-400" />,
      title: "Improve Quran Reading",
      desc: "Perfect your recitation with personalized feedback and structured learning paths tailored to your level.",
      color: "emerald"
    },
    {
      icon: <Sparkles className="w-6 h-6 text-amber-400" />,
      title: "Better Tajweed",
      desc: "Master the intricate rules of pronunciation and articulation to recite the Quran as it was revealed.",
      color: "amber"
    },
    {
      icon: <Home className="w-6 h-6 text-emerald-400" />,
      title: "Learn From Home",
      desc: "Eliminate travel time and learn in a safe, comfortable environment that fits your daily routine.",
      color: "emerald"
    },
    {
      icon: <Heart className="w-6 h-6 text-amber-400" />,
      title: "Build Islamic Knowledge",
      desc: "Deepen your spiritual connection and understanding of Islamic values through guided Quranic study.",
      color: "amber"
    }
  ];

  return (
    <section className="relative py-16 md:py-28 bg-[#010604] overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Left Column: Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-emerald-500/10 rounded-[2rem] blur-2xl group-hover:bg-emerald-500/20 transition-all duration-500" />
              <img
                src="./public/ChatGPT Image Jun 19, 2026, 05_36_05 PM.png"
                alt="Learning Experience"
                className="relative rounded-3xl border border-emerald-500/20 object-cover w-full aspect-square shadow-2xl brightness-90 grayscale-[0.1] hover:grayscale-0 transition-all duration-700"
              />
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-slate-900/90 backdrop-blur-xl border border-emerald-500/30 p-5 rounded-2xl shadow-2xl animate-bounce-slow">
                <div className="flex items-center gap-3">
                  <div className="bg-emerald-500/20 p-2 rounded-lg">
                    <Sparkles className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg">100%</p>
                    <p className="text-emerald-400 text-[10px] uppercase font-bold tracking-widest">Satisfaction</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Content */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-10 text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 bg-emerald-950/40 border border-emerald-500/30 px-3 py-1 rounded-full mb-4 backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span className="text-[10px] font-bold text-emerald-400 tracking-[0.2em] uppercase font-mono">Learning Benefits</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight leading-tight font-sans">
                Experience the <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500 font-semibold">Spiritual Growth</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-[#020d08]/50 border border-emerald-500/10 hover:border-emerald-500/30 transition-all duration-300 group"
                >
                  <div className={`w-12 h-12 rounded-xl bg-[#03140c] border border-emerald-900/40 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    {benefit.icon}
                  </div>
                  <h3 className="text-white font-semibold mb-2 group-hover:text-amber-300 transition-colors">{benefit.title}</h3>
                  <p className="text-slate-400 text-[12px] leading-relaxed">{benefit.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningBenefits;
