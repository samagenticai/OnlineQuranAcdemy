import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, MapPin, Phone, Mail, Globe, Link as LinkIcon, Share2, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#020d08] border-t border-emerald-500/10 pt-16 pb-8 select-none">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-3 group cursor-pointer w-fit">
              <div className="bg-gradient-to-br from-amber-400 to-yellow-500 p-2 rounded-xl shadow-lg group-hover:scale-105 transition-transform">
                <BookOpen className="w-5 h-5 text-slate-950" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white tracking-wide font-serif">Al-Quran</span>
                <span className="text-[9px] text-emerald-400 font-bold tracking-widest uppercase -mt-1">Academy</span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Empowering Muslim families with high-quality, personalized online Quranic education from certified expert tutors worldwide.
            </p>
            <div className="flex items-center gap-4">
              {[Globe, LinkIcon, Share2].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-amber-400 hover:border-amber-500/50 transition-all">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { name: 'Home', href: '/' },
                { name: 'Our Courses', href: '/courses' },
                { name: 'About Us', href: '/about-us' },
                { name: 'Become a Teacher', href: '/become-teacher' },
                { name: 'Contact Us', href: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-slate-400 text-sm hover:text-emerald-400 transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-emerald-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Our Courses</h4>
            <ul className="space-y-4">
              {[
                'Nazra Quran',
                'Quran with Tajweed',
                'Hifz Quran',
                'Quran Translation',
                'Kids Quran Classes'
              ].map((course) => (
                <li key={course}>
                  <Link to="/courses" className="text-slate-400 text-sm hover:text-emerald-400 transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-amber-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {course}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Contact Info</h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span className="text-slate-400 leading-relaxed">Office #1, Ground Floor, Your Academy Location</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-emerald-500 shrink-0" />
                <a href="tel:+923236177455" className="text-slate-400 hover:text-white transition-colors">+92 323 6177455</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-emerald-500 shrink-0" />
                <a href="mailto:info@youracademy.com" className="text-slate-400 hover:text-white transition-colors">info@youracademy.com</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-emerald-500/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-slate-500 text-xs">
            © {currentYear} Al-Quran Academy. All rights reserved. Built for Excellence.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-slate-500 text-xs hover:text-emerald-400 transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-500 text-xs hover:text-emerald-400 transition-colors">Terms of Service</a>
            <button 
              onClick={scrollToTop}
              className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 hover:bg-emerald-500 hover:text-slate-950 transition-all duration-300"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
