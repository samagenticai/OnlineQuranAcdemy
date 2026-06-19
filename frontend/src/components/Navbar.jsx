import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Menu, X, BookOpen, GraduationCap, Users, Phone } from 'lucide-react';
import Modal from './Modal';
import EnrollForm from './EnrollForm';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);

  // Nav items list (Home is routed via logo click)
  const navItems = [
    { name: 'Home', href: '/', icon: <BookOpen className="w-4.5 h-4.5" /> },
    { name: 'Courses', href: '/courses', icon: <BookOpen className="w-4.5 h-4.5" /> },
    { name: 'Become a Teacher', href: '/become-teacher', icon: <GraduationCap className="w-4.5 h-4.5" /> },
    { name: 'About Us', href: '/about-us', icon: <Users className="w-4.5 h-4.5" /> },
    { name: 'Contact Us', href: '/contact', icon: <Phone className="w-4.5 h-4.5" /> },
  ];

  // Mobile Menu Stagger Variants
  const menuVariants = {
    closed: { opacity: 0, scale: 0.95, y: -20 },
    open: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, x: -10 },
    open: { opacity: 1, x: 0 }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[60] pt-4 px-6 md:px-10 lg:px-16 pointer-events-none">
        <motion.div 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-7xl mx-auto bg-slate-950/40 backdrop-blur-xl border border-emerald-500/15 rounded-[2.5rem] px-8 shadow-2xl shadow-emerald-950/20 pointer-events-auto"
        >
          <div className="flex items-center justify-between h-22 py-4">
            
            {/* Logo Section - Animated on Load (Clicks to #home) */}
            <Link 
              to="/"
              className="flex items-center space-x-3 group cursor-pointer select-none"
            >
              <div className="bg-gradient-to-br from-amber-400 to-yellow-500 p-2.5 rounded-2xl shadow-xl shadow-amber-500/15 group-hover:scale-105 transition-transform duration-300">
                <BookOpen className="w-6 h-6 text-slate-950" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white tracking-wide font-serif group-hover:text-amber-400 transition-colors duration-300">
                  Al-Quran
                </span>
                <span className="text-[10px] text-emerald-400 font-semibold tracking-widest uppercase font-sans -mt-1 group-hover:text-white transition-colors duration-300">
                  Academy
                </span>
              </div>
            </Link>

            {/* Desktop Navigation - Staggered Slide-Down Entrance */}
            <div className="hidden md:flex items-center space-x-2 bg-emerald-950/10 px-3 py-1.5 rounded-full border border-emerald-500/5">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="relative px-4 py-2 rounded-full text-sm font-medium text-slate-300 hover:text-amber-400 transition-colors duration-300 flex items-center gap-2 select-none"
                >
                  {/* Smooth Pill Hover Effect */}
                  {hoveredIndex === index && (
                    <motion.span
                      layoutId="navHoverBg"
                      className="absolute inset-0 bg-emerald-900/40 rounded-full border border-emerald-500/25 -z-10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="text-emerald-400">{item.icon}</span>
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Right Action Button - Premium Amber CTA */}
            <div className="hidden md:flex items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsTrialModalOpen(true)}
                className="bg-gradient-to-r from-amber-400 to-amber-600 text-slate-950 px-7 py-3 rounded-[1.4rem] font-bold text-[11px] uppercase tracking-widest shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 transition-all duration-300"
              >
                Start Free Trial
              </motion.button>
            </div>

            {/* Mobile Menu Trigger */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="p-3 rounded-2xl bg-emerald-950/30 border border-emerald-500/20 text-emerald-400"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </motion.div>

        {/* Mobile Sidebar Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="absolute top-28 left-6 right-6 md:hidden bg-slate-950/80 backdrop-blur-2xl border border-emerald-500/15 rounded-[2.5rem] p-8 shadow-3xl pointer-events-auto"
            >
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-emerald-950/20 border border-emerald-500/10 text-white font-medium hover:bg-emerald-900/40 transition-all"
                    >
                      <span className="text-emerald-400">{item.icon}</span>
                      {item.name}
                    </Link>
                ))}
                <button 
                  onClick={() => {
                    setIsOpen(false);
                    setIsTrialModalOpen(true);
                  }}
                  className="w-full bg-gradient-to-r from-amber-400 to-amber-600 text-slate-950 py-5 rounded-2xl font-bold uppercase tracking-widest text-[11px] shadow-xl"
                >
                  Start Free Trial
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Global Free Trial Modal */}
      <Modal
        isOpen={isTrialModalOpen}
        onClose={() => setIsTrialModalOpen(false)}
        title="Start Your 3-Day Free Trial"
      >
        <EnrollForm 
          courseName="Free Trial Session"
          onSuccess={() => setIsTrialModalOpen(false)}
        />
      </Modal>
    </>
  );
};

export default Navbar;