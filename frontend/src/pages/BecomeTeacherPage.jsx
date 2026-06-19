import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Clock, Globe, ShieldCheck, Heart, Send } from 'lucide-react';
import { getWhatsAppLink } from '../config/WhatsAppConfig';

const BecomeTeacherPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    qualification: '',
    experience: '',
    specialization: '',
    country: '',
    contact: '',
    email: '',
    timing: '',
    about: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `*Teacher Application*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Qualification:* ${formData.qualification}\n` +
      `*Experience:* ${formData.experience}\n` +
      `*Specialization:* ${formData.specialization}\n` +
      `*Country:* ${formData.country}\n` +
      `*Contact:* ${formData.contact}\n` +
      `*Email:* ${formData.email}\n` +
      `*Available Timing:* ${formData.timing}\n` +
      `*About:* ${formData.about}`;
    
    window.open(getWhatsAppLink(message), '_blank');
  };

  return (
    <div className="pt-28 pb-20 bg-[#010604] min-h-screen text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        
        {/* Intro Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="inline-flex items-center gap-2 bg-emerald-950/40 border border-emerald-500/30 px-3 py-1 rounded-full mb-6">
              <GraduationCap className="w-3 h-3 text-emerald-400" />
              <span className="text-[10px] font-bold text-emerald-400 tracking-[0.2em] uppercase font-mono">Join Our Mission</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-6">
              Inspire the <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500 font-semibold">Next Generation</span> of Quran Learners
            </h1>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-8">
              We are looking for dedicated, qualified, and passionate Quran teachers to join our global faculty. Share your knowledge and earn rewards in both worlds.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: <ShieldCheck className="w-5 h-5" />, title: "Certified Only", desc: "Must have Ijazah or equivalent." },
                { icon: <Globe className="w-5 h-5" />, title: "Remote Work", desc: "Teach from anywhere globally." },
                { icon: <Clock className="w-5 h-5" />, title: "Flexible Schedule", desc: "Choose your own teaching hours." },
                { icon: <Heart className="w-5 h-5" />, title: "Great Community", desc: "Supportive and professional environment." }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-2xl bg-emerald-950/20 border border-emerald-500/10">
                  <div className="text-emerald-400 shrink-0">{item.icon}</div>
                  <div>
                    <p className="text-sm font-bold text-white mb-1">{item.title}</p>
                    <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="p-8 md:p-10 rounded-[2.5rem] bg-[#020d08] border border-emerald-500/20 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 blur-3xl rounded-full" />
            <h2 className="text-2xl font-bold mb-8">Teacher Application</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-[11px] uppercase font-bold text-emerald-400 tracking-widest pl-1">Name</label>
                  <input required name="name" onChange={handleChange} className="w-full bg-slate-900 border border-emerald-500/10 rounded-xl px-4 py-3 text-sm focus:border-amber-500/50 transition-colors" placeholder="Full Name" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[11px] uppercase font-bold text-emerald-400 tracking-widest pl-1">Qualification</label>
                  <input required name="qualification" onChange={handleChange} className="w-full bg-slate-900 border border-emerald-500/10 rounded-xl px-4 py-3 text-sm focus:border-amber-500/50 transition-colors" placeholder="e.g. M.A Islamic Studies" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-[11px] uppercase font-bold text-emerald-400 tracking-widest pl-1">Experience</label>
                  <input required name="experience" onChange={handleChange} className="w-full bg-slate-900 border border-emerald-500/10 rounded-xl px-4 py-3 text-sm focus:border-amber-500/50 transition-colors" placeholder="Years of teaching" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[11px] uppercase font-bold text-emerald-400 tracking-widest pl-1">Specialization</label>
                  <input required name="specialization" onChange={handleChange} className="w-full bg-slate-900 border border-emerald-500/10 rounded-xl px-4 py-3 text-sm focus:border-amber-500/50 transition-colors" placeholder="e.g. Hifz, Tajweed" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-[11px] uppercase font-bold text-emerald-400 tracking-widest pl-1">Country</label>
                  <input required name="country" onChange={handleChange} className="w-full bg-slate-900 border border-emerald-500/10 rounded-xl px-4 py-3 text-sm focus:border-amber-500/50 transition-colors" placeholder="Your location" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[11px] uppercase font-bold text-emerald-400 tracking-widest pl-1">WhatsApp #</label>
                  <input required name="contact" onChange={handleChange} className="w-full bg-slate-900 border border-emerald-500/10 rounded-xl px-4 py-3 text-sm focus:border-amber-500/50 transition-colors" placeholder="+1 234..." />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] uppercase font-bold text-emerald-400 tracking-widest pl-1">Available Timing</label>
                <input required name="timing" onChange={handleChange} className="w-full bg-slate-900 border border-emerald-500/10 rounded-xl px-4 py-3 text-sm focus:border-amber-500/50 transition-colors" placeholder="e.g. 10 AM - 4 PM GMT" />
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] uppercase font-bold text-emerald-400 tracking-widest pl-1">Short Introduction</label>
                <textarea required name="about" onChange={handleChange} rows="4" className="w-full bg-slate-900 border border-emerald-500/10 rounded-xl px-4 py-3 text-sm focus:border-amber-500/50 transition-colors resize-none" placeholder="Tell us about yourself and your teaching style..."></textarea>
              </div>

              <button type="submit" className="w-full bg-gradient-to-r from-emerald-500 to-emerald-700 text-slate-950 font-bold py-4 rounded-xl uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:shadow-lg hover:shadow-emerald-500/20 active:scale-[0.98] transition-all">
                Send Application <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BecomeTeacherPage;
