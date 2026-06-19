import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Mail, Phone, MapPin, Send, Share2, Globe, AtSign } from 'lucide-react';

import { WHATSAPP_NUMBER, getWhatsAppLink } from '../config/WhatsAppConfig';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `*Connect with Team*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Email:* ${formData.email}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Subject:* ${formData.subject}\n` +
      `*Message:* ${formData.message}`;
    
    window.open(getWhatsAppLink(message), '_blank');
  };

  return (
    <div className="pt-28 pb-20 bg-[#010604] min-h-screen text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="inline-flex items-center gap-2 bg-emerald-950/40 border border-emerald-500/30 px-3 py-1 rounded-full mb-6">
              <MessageCircle className="w-3 h-3 text-emerald-400" />
              <span className="text-[10px] font-bold text-emerald-400 tracking-[0.2em] uppercase font-mono">Get in Touch</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-8">
              We're Here to <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500 font-semibold">Help You</span>
            </h1>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-12 max-w-lg">
              Have questions about our courses or the registration process? Our team is available 24/7 to provide assistance.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-all">
                  <Phone className="w-5 h-5 text-emerald-400 group-hover:text-inherit" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">WhatsApp & Call</h4>
                  <p className="text-slate-400 text-sm">+{WHATSAPP_NUMBER}</p>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all">
                  <Mail className="w-5 h-5 text-amber-400 group-hover:text-inherit" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Email Us</h4>
                  <p className="text-slate-400 text-sm">info@youracademy.com</p>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-all">
                  <MapPin className="w-5 h-5 text-emerald-400 group-hover:text-inherit" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Visit Office</h4>
                  <p className="text-slate-400 text-sm">Office #1, Ground Floor, Your Location</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              {[
                { Icon: Share2, label: 'Share' },
                { Icon: Globe, label: 'Website' },
                { Icon: AtSign, label: 'Social' }
              ].map(({ Icon, label }, i) => (
                <a key={i} href="#" aria-label={label} className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-amber-400 hover:border-amber-500 transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="p-8 md:p-10 rounded-[2.5rem] bg-[#020d08] border border-emerald-500/20 shadow-2xl"
          >
            <h2 className="text-2xl font-bold mb-8">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-[11px] uppercase font-bold text-emerald-400 tracking-widest pl-1">Your Name</label>
                  <input required name="name" onChange={handleChange} className="w-full bg-slate-900 border border-emerald-500/10 rounded-xl px-4 py-3 text-sm focus:border-amber-500/50 transition-colors" placeholder="Full Name" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[11px] uppercase font-bold text-emerald-400 tracking-widest pl-1">Email</label>
                  <input required type="email" name="email" onChange={handleChange} className="w-full bg-slate-900 border border-emerald-500/10 rounded-xl px-4 py-3 text-sm focus:border-amber-500/50 transition-colors" placeholder="name@example.com" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-[11px] uppercase font-bold text-emerald-400 tracking-widest pl-1">Phone</label>
                  <input required name="phone" onChange={handleChange} className="w-full bg-slate-900 border border-emerald-500/10 rounded-xl px-4 py-3 text-sm focus:border-amber-500/50 transition-colors" placeholder="+1..." />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[11px] uppercase font-bold text-emerald-400 tracking-widest pl-1">Subject</label>
                  <input required name="subject" onChange={handleChange} className="w-full bg-slate-900 border border-emerald-500/10 rounded-xl px-4 py-3 text-sm focus:border-amber-500/50 transition-colors" placeholder="How can we help?" />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] uppercase font-bold text-emerald-400 tracking-widest pl-1">Message</label>
                <textarea required name="message" onChange={handleChange} rows="5" className="w-full bg-slate-900 border border-emerald-500/10 rounded-xl px-4 py-3 text-sm focus:border-amber-500/50 transition-colors resize-none" placeholder="Your message here..."></textarea>
              </div>

              <button type="submit" className="w-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-bold py-4 rounded-xl uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:shadow-lg hover:shadow-amber-500/20 active:scale-[0.98] transition-all">
                Send via WhatsApp <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default ContactPage;
