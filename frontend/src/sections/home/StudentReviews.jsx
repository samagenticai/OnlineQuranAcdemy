import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const StudentReviews = () => {
  const reviews = [
    {
      name: "Ahmed Hassan",
      role: "Parent of 2 Students",
      text: "The teachers are incredibly patient and professional. My children look forward to their Quran classes every single day. Highly recommended!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100"
    },
    {
      name: "Sara Khan",
      role: "Adult Student",
      text: "Learning Tajweed from the comfort of my home has been a blessing. The interactive platform makes it feel like I'm in a real classroom.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100"
    },
    {
      name: "Omar Sharif",
      role: "Hifz Student",
      text: "I've memorized 5 Juz in just 6 months thanks to the systematic approach and constant encouragement from my teacher.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100&h=100"
    }
  ];

  return (
    <section className="relative py-16 md:py-28 bg-[#010604] overflow-hidden select-none">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/10 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-emerald-950/40 border border-emerald-500/30 px-3 py-1 rounded-full mb-4 backdrop-blur-md"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_8px_#f59e0b]" />
            <span className="text-[10px] font-bold text-emerald-400 tracking-[0.2em] uppercase font-mono">Heartfelt Reviews</span>
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight leading-tight font-sans">
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500 font-semibold">Students Say</span>
          </h2>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-8 rounded-3xl bg-[#020d08]/60 border border-emerald-500/10 backdrop-blur-xl group hover:border-emerald-500/30 transition-all duration-500"
            >
              <div className="absolute top-8 right-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-10 h-10 text-emerald-400" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-slate-300 text-[13px] leading-relaxed mb-8 italic">
                "{review.text}"
              </p>

              {/* Profile */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-emerald-500/20 shadow-lg">
                  <img src={review.image} alt={review.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm tracking-wide">{review.name}</h4>
                  <p className="text-emerald-400 text-[10px] font-bold uppercase tracking-widest">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentReviews;
