import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutUsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const values = [
    { title: "Who We Are", desc: "A premium online institute dedicated to bringing traditional Quranic wisdom to the modern digital world through qualified scholars.", icon: <Heart className="w-6 h-6 text-emerald-400" /> },
    { title: "Our Mission", desc: "Expanding spiritual awareness by making Quranic education accessible, structured, and personalized for every individual.", icon: <Target className="w-6 h-6 text-amber-400" /> },
    { title: "Our Vision", desc: "To be the leading global hub for authentic Quranic learning, character building, and spiritual excellence.", icon: <Eye className="w-6 h-6 text-emerald-400" /> },
    { title: "Our Purpose", desc: "Connecting hearts with the words of Allah and building a strong foundation for the next generation of Muslims.", icon: <CheckCircle className="w-6 h-6 text-amber-400" /> }
  ];

  return (
    <div className="pt-28 pb-20 bg-[#010604] min-h-screen text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        
        {/* Hero Section */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-emerald-950/40 border border-emerald-500/30 px-3 py-1 rounded-full mb-6"
          >
            <span className="text-[10px] font-bold text-emerald-400 tracking-[0.2em] uppercase font-mono">Our Journey</span>
          </motion.div>
          <h1 className="text-4xl md:text-7xl font-medium tracking-tight mb-8">
            Nurturing Hearts with <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500 font-semibold italic">Divine Wisdom</span>
          </h1>
          <p className="text-slate-400 max-w-3xl mx-auto text-sm md:text-lg leading-relaxed">
            Al-Quran Academy was founded with a single vision: to bridge the gap between people and the words of Allah. We combine traditional teaching methods with modern technology to provide an unparalleled learning experience.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-28">
          {values.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-[2rem] bg-[#020d08] border border-emerald-500/10 hover:border-emerald-500/30 transition-all group"
            >
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 w-fit mb-6 group-hover:bg-emerald-950 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-amber-400 transition-colors">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Story Section */}
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 mb-28">
          <div className="lg:w-1/2 relative">
             <div className="absolute -inset-4 bg-emerald-500/10 rounded-[2rem] blur-2xl" />
             <img 
               src="./public/ChatGPT Image Jun 19, 2026, 05_29_42 PM.png" 
               alt="Academy Vision"
               className="relative rounded-[2.5rem] border border-emerald-500/20 object-cover aspect-video shadow-2xl brightness-90"
             />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6">Why Choose Our <br /><span className="text-emerald-500">Quran Academy?</span></h2>
            <div className="space-y-6">
              {[
                { title: "Personalized Attention", text: "We believe in one-to-one learning to ensure every student gets the focus they deserve." },
                { title: "Verified Tutors", text: "Our teachers go through rigorous vetting and are experts in Tajweed and Arabic." },
                { title: "Always Available", text: "With tutors across time zones, you can learn whenever it suits your lifestyle." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1 w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-500 flex items-center justify-center shrink-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">{item.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link to="/courses" className="mt-10 inline-flex items-center gap-2 bg-amber-500 text-slate-950 font-bold px-8 py-4 rounded-2xl hover:bg-amber-400 transition-all">
              Explore Courses <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutUsPage;
