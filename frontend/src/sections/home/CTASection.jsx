import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';


const CTASection = () => {
  return (
    <section className="relative py-16 md:py-24 bg-[#010604] overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-[2.5rem] bg-gradient-to-br from-emerald-950/80 via-[#020d08]/90 to-emerald-950/80 border border-emerald-500/20 p-8 md:p-16 text-center overflow-hidden shadow-2xl"
        >
          {/* Animated Background Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-emerald-500/20 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="inline-block bg-amber-500/10 p-3 rounded-2xl mb-6 border border-amber-500/20"
            >
              <Sparkles className="w-8 h-8 text-amber-500" />
            </motion.div>
            
            <h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight leading-tight font-sans mb-6">
              Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500 font-semibold italic">Quran Learning</span> Journey Today
            </h2>
            
            <p className="text-slate-300 text-sm md:text-base mb-10 leading-relaxed">
              Join thousands of students worldwide and experience a transformative path to understanding the Holy Quran with our expert tutors.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/courses"
                className="w-full sm:w-auto bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-bold px-10 py-4 rounded-full text-sm uppercase tracking-widest flex items-center justify-center gap-2 shadow-xl shadow-amber-500/20 hover:scale-[1.03] transition-all"
              >
                Book Free Trial
                <ArrowRight className="w-4 h-4" />
              </Link>
              
              <Link
                to="/contact"
                className="w-full sm:w-auto bg-transparent border border-emerald-500/30 text-emerald-400 font-bold px-10 py-4 rounded-full text-sm uppercase tracking-widest hover:bg-emerald-500/10 hover:border-emerald-500/50 transition-all flex items-center justify-center"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
