import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Volume2 } from 'lucide-react';
import heroImg from '../../assets/hero.png';
// If you place a Quran image in the dev server `public/` folder as `quran_PNG32.png`,
// it is served at the root path `/quran_PNG32.png`. Prefer that if present.
const quranImgPath = '/quran_PNG32.png';

const HeroSection = () => {
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const touch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      setIsTouch(touch);
    }
  }, []);

  // Motion coordinates
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springConfig = { damping: 40, stiffness: 90, mass: 0.8 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    
    const xRelative = (clientX - left) / width;
    const yRelative = (clientY - top) / height;
    
    mouseX.set(xRelative);
    mouseY.set(yRelative);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  // Parallax and interactive transforms
  const parallaxX = useTransform(smoothX, [0, 1], [-20, 20]);
  const parallaxY = useTransform(smoothY, [0, 1], [-20, 20]);

  const glowLeft = useTransform(smoothX, [0, 1], ["25%", "75%"]);
  const glowTop = useTransform(smoothY, [0, 1], ["25%", "75%"]);

  // Bismillah interactive reactive values
  const bismillahX = useTransform(smoothX, [0, 1], [10, -10]);
  const bismillahY = useTransform(smoothY, [0, 1], [5, -5]);
  const bismillahGlow = useTransform(smoothX, [0, 1], ["rgba(16, 185, 129, 0.2)", "rgba(245, 158, 11, 0.25)"]);

  // Arabic letters data for floating background effect
  const bgLetters = [
    { text: "الم", top: "14%", left: "60%", size: "text-3xl md:text-4xl", color: "text-emerald-500/25", delay: 0 },
    { text: "ق", top: "11%", left: "84%", size: "text-4xl md:text-5xl", color: "text-amber-500/20", delay: 0.5 },
    { text: "ب", top: "6%", left: "73%", size: "text-2xl", color: "text-emerald-500/15", delay: 0.2 },
    { text: "ع", top: "60%", left: "51%", size: "text-4xl", color: "text-emerald-500/20", delay: 0.7 },
    { text: "ن", top: "48%", left: "96%", size: "text-3xl", color: "text-slate-500/25", delay: 0.4 },
    { text: "ض", top: "74%", left: "53%", size: "text-3xl", color: "text-emerald-500/15", delay: 0.9 },
    { text: "غ", top: "72%", left: "93%", size: "text-4xl", color: "text-amber-500/15", delay: 0.3 },
    { text: "ف", top: "84%", left: "87%", size: "text-3xl", color: "text-emerald-500/20", delay: 0.6 },
    { text: "الم", top: "85%", left: "59%", size: "text-3xl", color: "text-emerald-400/25", delay: 0.1 },
  ];

  return (
    <section 
      ref={containerRef}
      onMouseMove={isTouch ? undefined : handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen pt-32 pb-16 md:pt-36 md:pb-20 flex flex-col items-center justify-center bg-[#010604] overflow-hidden select-none"
    >
      {/* ================= BACKGROUND LAYERS ================= */}
      <div className="absolute inset-0 pointer-events-none z-0">
        
        {/* Islamic Luxury Arabesque Lattice Pattern */}
        <div className="absolute inset-0 opacity-[0.02] bg-repeat bg-center" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cpath d='M40 0 L80 40 L40 80 L0 40 Z' stroke='%2310b981' strokeWidth='0.75' fill='none'/%3E%3C/svg%3E")` }} 
        />

        {/* Visible Arabic Letters Layout */}
        {bgLetters.map((letter, index) => (
          <motion.div
            key={index}
            style={{ position: 'absolute', top: letter.top, left: letter.left }}
            className={`font-serif font-light ${letter.size} ${letter.color} tracking-widest pointer-events-none drop-shadow-[0_0_15px_rgba(16,185,129,0.15)]`}
            animate={isTouch ? undefined : { y: [0, -8, 0], opacity: [0.7, 1, 0.7] }}
            transition={isTouch ? undefined : { duration: 6 + index, repeat: Infinity, ease: "easeInOut", delay: letter.delay }}
          >
            {letter.text}
          </motion.div>
        ))}

        {/* Dynamic Circular Mandala Grid */}
        <motion.div 
          className="absolute w-[550px] sm:w-[750px] md:w-[900px] h-[550px] sm:h-[750px] md:h-[900px] flex items-center justify-center opacity-50 mix-blend-screen"
          style={{ left: glowLeft, top: glowTop, x: "-50%", y: "-50%", willChange: 'transform' }}
          animate={isTouch ? undefined : { rotate: [0, 360] }}
          transition={isTouch ? undefined : { duration: 60, repeat: Infinity, ease: "linear" }}
        >
          <svg className="w-full h-full text-emerald-500/15 filter drop-shadow-[0_0_40px_rgba(16,185,129,0.12)]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.06">
            <circle cx="50" cy="50" r="46" className="opacity-40" />
            <circle cx="50" cy="50" r="43" strokeDasharray="1 3" className="opacity-30" />
            <circle cx="50" cy="50" r="34" strokeDasharray="2 2" className="opacity-40" />
            <circle cx="50" cy="50" r="23" className="opacity-20" />
            <path d="M50 4 L50 96 M4 50 L96 50" opacity="0.15" />
          </svg>

          {/* Radial Aura Engines */}
          <div className="absolute w-80 h-80 rounded-full bg-emerald-500/10 blur-[120px]" />
          <div className="absolute w-60 h-60 rounded-full bg-amber-500/5 blur-[80px]" />
        </motion.div>

        {/* Ambient Bottom Gradient Vignette */}
        <div className="absolute bottom-0 inset-x-0 h-[300px] bg-[radial-gradient(ellipse_at_bottom,rgba(1,15,10,0.7),transparent_75%)]" />
      </div>

      {/* ================= TOP CENTER BISMILLAH BANNER (SHIFTED HIGHER) ================= */}
        <motion.div 
        className="absolute top-24 md:top-28 text-center pointer-events-none transition-all duration-300 z-20 w-full px-4"
        style={{ 
          x: bismillahX,
          y: bismillahY,
          textShadow: `0 0 20px ${bismillahGlow}`
        }}
        animate={isTouch ? undefined : undefined}
      >
        <motion.div 
          animate={isTouch ? undefined : { opacity: isHovered ? 1 : 0.85, scale: isHovered ? 1.02 : 1 }}
          className="text-2xl sm:text-3xl lg:text-4xl font-serif text-transparent bg-clip-text bg-gradient-to-b from-emerald-400 via-emerald-500 to-emerald-600/60 tracking-widest font-normal antialiased"
        >
          بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
        </motion.div>
        <div className="text-[8px] uppercase font-mono tracking-[0.35em] text-amber-500/30 mt-1 font-medium">
          In the name of Allah, the Most Gracious, the Most Merciful
        </div>
      </motion.div>

      {/* ================= MAIN CONTENT GRID ================= */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-6 items-center relative z-10 mt-12 sm:mt-16 lg:mt-6">
        
        {/* LEFT COLUMN: BRANDING AND COPYWRITING */}
        <div className="lg:col-span-6 flex flex-col justify-center text-center lg:text-left order-2 lg:order-1 lg:-mt-10">
          
          {/* Certified Badge */}
          <motion.div 
            initial={isTouch ? undefined : { opacity: 0, y: -8 }}
            animate={isTouch ? undefined : { opacity: 1, y: 0 }}
            transition={isTouch ? undefined : { duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-emerald-950/30 border border-emerald-500/20 px-3.5 py-1.5 rounded-full self-center lg:self-start mb-5 backdrop-blur-md"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 shadow-[0_0_6px_#f59e0b] animate-pulse" />
            <span className="text-[9px] font-bold text-emerald-400/90 tracking-[0.2em] uppercase font-mono">
              Quality Assurance Certified Badge
            </span>
          </motion.div>

          {/* Typography Header */}
          <motion.h1 
            initial={isTouch ? undefined : { opacity: 0, y: 20 }}
            animate={isTouch ? undefined : { opacity: 1, y: 0 }}
            transition={isTouch ? undefined : { duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-4xl xl:text-[46px] font-medium text-white tracking-tight leading-[1.18] font-sans"
          >
            Discover the Pure <br className="hidden sm:inline" />
            Beauty of the <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500 font-semibold drop-shadow-sm">Al-Quran</span>. <br />
            Your Gateway to Divine <br className="hidden sm:inline" />
            Wisdom Starts Here
          </motion.h1>

          {/* Paragraph Copy */}
          <motion.p 
            initial={isTouch ? undefined : { opacity: 0 }}
            animate={isTouch ? undefined : { opacity: 1 }}
            transition={isTouch ? undefined : { duration: 0.5, delay: 0.18 }}
            className="mt-5 text-xs sm:text-sm text-slate-400/90 max-w-md mx-auto lg:mx-0 leading-relaxed font-normal"
          >
            Discover the Pure Beauty of the Al-Quran. Your Gateway to Divine Wisdom's online here comy certified Academy in the Premium Tajaway to Divine Wisdom Starts Here.
          </motion.p>

            <motion.div 
              initial={isTouch ? undefined : { opacity: 0, y: 12 }}
              animate={isTouch ? undefined : { opacity: 1, y: 0 }}
              transition={isTouch ? undefined : { duration: 0.5, delay: 0.25 }}
              className="mt-7 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <motion.div
                whileHover={isTouch ? undefined : { scale: 1.02, boxShadow: '0 6px 25px rgba(245,158,11,0.2)' }}
                whileTap={isTouch ? undefined : { scale: 0.98 }}
                className="w-full sm:w-auto"
              >
                <Link
                  to="/courses"
                  className="w-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-semibold px-7 py-3.5 rounded-full text-[11px] uppercase tracking-wider transition-all flex items-center justify-center gap-2"
                >
                  Book Free Trial Lesson
                  <ArrowRight className="w-3 h-3 stroke-[2.5]" />
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02, backgroundColor: 'rgba(16, 185, 129, 0.05)', borderColor: 'rgba(16,185,129,0.4)' }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto"
              >
                <Link
                  to="/courses"
                  className="w-full border border-emerald-500/20 text-emerald-400/90 font-medium px-7 py-3.5 rounded-full text-[11px] uppercase tracking-wider transition-all flex items-center justify-center"
                >
                  Browse Curriculums
                </Link>
              </motion.div>
            </motion.div>

        </div>

        {/* RIGHT COLUMN: INTERACTIVE VISUAL DISPLAY WITH HUD CARDS */}
        <div className="lg:col-span-6 relative flex flex-col items-center justify-center min-h-[480px] sm:min-h-[540px] lg:min-h-[600px] order-1 lg:order-2 lg:-mt-12">
          
          {/* Main Visual Group with Mouse Parallax */}
          <motion.div 
            className={`relative w-full max-w-[480px] aspect-[1.02] flex items-center justify-center ${isTouch ? 'disable-pointer-parallax' : ''}`}
            // hint to browser to promote element to its own layer
            style={{ x: parallaxX, y: parallaxY, willChange: 'transform' }}
          >
            {/* 1. Core Visual: Holy Quran Image */}
            <motion.div 
              animate={isTouch ? undefined : { y: [0, -10, 0] }}
              transition={isTouch ? undefined : { duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-[90%] z-10 drop-shadow-[0_35px_60px_rgba(0,0,0,0.95)]"
              style={{ willChange: 'transform' }}
            >
              <div className="rounded-2xl overflow-hidden border border-emerald-500/20 bg-slate-950/40 p-2.5 backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)]">
                <div className="relative rounded-xl overflow-hidden bg-[#07100d] border border-emerald-950 aspect-[4/3]">
                  <img
                    src={quranImgPath || heroImg}
                    alt="Holy Al-Quran"
                    className="w-full h-full object-cover brightness-[0.85] contrast-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
                </div>
              </div>
            </motion.div>

            {/* 2. HUD Layer: Makharij Card (Positioned Layer above the image) */}
            <motion.div 
              animate={{ y: [5, -5, 5], x: [-1, 1, -1] }}
              transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
              className="absolute bottom-6 -left-4 z-30 w-[42%] transform -rotate-3 drop-shadow-[0_20px_30px_rgba(0,0,0,0.9)]"
              style={{ willChange: 'transform' }}
            >
              <div className="bg-[#010a06]/95 p-1.5 rounded-xl border border-emerald-500/25 shadow-2xl backdrop-blur-sm">
                <div className="rounded-lg bg-gradient-to-b from-emerald-950/60 to-[#010403] border border-emerald-900/30 flex flex-col justify-between p-3 h-full">
                  <div className="flex items-center justify-between opacity-80 mb-2">
                    <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  </div>
                  
                  {/* Visual Spectrum Lines */}
                  <div className="my-2.5 space-y-1.5">
                    <div className="h-0.5 w-full bg-emerald-500/20 rounded-full overflow-hidden">
                      <div className="h-full w-4/5 bg-emerald-400 rounded-full" />
                    </div>
                    <div className="h-0.5 w-5/6 bg-emerald-500/10 rounded-full overflow-hidden">
                      <div className="h-full w-2/3 bg-amber-400 rounded-full" />
                    </div>
                    <div className="h-0.5 w-3/4 bg-slate-800 rounded-full" />
                  </div>

                  <span className="text-[8px] text-center font-bold font-mono tracking-widest text-emerald-400 uppercase bg-emerald-950/80 py-1 rounded border border-emerald-500/10">
                    Makharij
                  </span>
                </div>
              </div>
            </motion.div>

            {/* 3. HUD Layer: Live Audio Stream Card */}
            <motion.div 
              animate={{ y: [-6, 6, -6] }}
              transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
              className="absolute -bottom-2 -right-2 z-20 w-[48%] drop-shadow-[0_25px_40px_rgba(0,0,0,0.9)]"
              style={{ willChange: 'transform' }}
            >
              <div className="bg-slate-900/90 p-1.5 rounded-xl border border-slate-800/60 backdrop-blur-sm shadow-2xl">
                <div className="bg-gradient-to-br from-[#020c09] to-[#010504] rounded-lg border border-emerald-950 flex flex-col items-center justify-center p-3">
                  
                  {/* Pulse Audio Wave Emblem */}
                  <div className="w-7 h-7 rounded-full border border-amber-500/20 flex items-center justify-center bg-amber-500/5 mb-2 shadow-[0_0_15px_rgba(245,158,11,0.1)]">
                    <Volume2 className="w-3 h-3 text-amber-400 animate-pulse" />
                  </div>
                  
                  <div className="text-center">
                    <p className="text-[11px] font-bold text-slate-200 tracking-wide font-serif">الْثَّمْ</p>
                    <p className="text-[6.5px] text-amber-400/90 font-mono tracking-wider font-semibold mt-0.5 uppercase">LIVE AUDIO FEED ACTIVE</p>
                  </div>

                  {/* Status Strip */}
                  <div className="w-full mt-2.5 pt-2 border-t border-emerald-950 flex justify-between items-center opacity-80 text-[6px] font-mono">
                    <div className="flex items-center gap-1">
                      <span className="w-1 h-1 rounded-full bg-emerald-500" />
                      <span className="text-emerald-400 uppercase tracking-wider">Online</span>
                    </div>
                    <span className="text-white/40 tracking-wider">12:44 / 30:00</span>
                  </div>

                </div>
              </div>
            </motion.div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default HeroSection;