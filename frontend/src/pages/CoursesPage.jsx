import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Clock, Target, Users, ArrowRight, Sparkles } from 'lucide-react';
import Modal from '../components/Modal';
import EnrollForm from '../components/EnrollForm';

const CoursesPage = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const courses = [
    {
      title: "Nazra Quran",
      desc: "Perfect your reading fluency with proper vowel pronunciation and flow. Ideal for beginners.",
      duration: "3-6 Months",
      suitable: "Kids & Adults",
      outcomes: ["Fluency in reading", "Correct pronunciation", "Basic Tajweed rules"],
      icon: <BookOpen className="w-8 h-8 text-emerald-400" />,
      color: "emerald"
    },
    {
      title: "Quran with Tajweed",
      desc: "Detailed study of rules for correct articulation and musicality of Quranic recitation.",
      duration: "12 Months",
      suitable: "Intermediate Learners",
      outcomes: ["Makharij mastery", "Rule application", "Rhythmic recitation"],
      icon: <Sparkles className="w-8 h-8 text-amber-400" />,
      color: "amber"
    },
    {
      title: "Hifz Quran",
      desc: "Comprehensive memorization program with specialized techniques for long-term retention.",
      duration: "2-3 Years",
      suitable: "Dedicated Students",
      outcomes: ["Full/Partial memorization", "Revision techniques", "Discipline"],
      icon: <Target className="w-8 h-8 text-emerald-400" />,
      color: "emerald"
    },
    {
      title: "Quran Translation",
      desc: "Understand the divine message word-for-word with context and deep linguistic analysis.",
      duration: "Duration Varies",
      suitable: "Advanced Students",
      outcomes: ["Direct understanding", "Spiritual connection", "Linguistic insight"],
      icon: <BookOpen className="w-8 h-8 text-amber-400" />,
      color: "amber"
    },
    {
      title: "Kids Quran Classes",
      desc: "Engaging and fun lessons designed specifically for children using interactive tools.",
      duration: "Ongoing",
      suitable: "Kids (Ages 4-15)",
      outcomes: ["Interest building", "Foundation skills", "Character building"],
      icon: <Users className="w-8 h-8 text-emerald-400" />,
      color: "emerald"
    }
  ];

  const handleEnroll = (course) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  return (
    <div className="pt-28 pb-20 bg-[#010604] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-emerald-950/40 border border-emerald-500/30 px-3 py-1 rounded-full mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-[10px] font-bold text-emerald-400 tracking-[0.2em] uppercase font-mono">Our Curriculum</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-medium text-white tracking-tight"
          >
            Explore Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500 font-semibold">Divine Courses</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-slate-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed"
          >
            We offer a wide range of courses tailored for all age groups and levels. Join us to start your spiritual journey today.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-[#020d08] border border-emerald-500/10 rounded-[2.5rem] p-8 hover:border-emerald-500/30 transition-all duration-500 flex flex-col h-full"
            >
              <div className="absolute top-0 right-0 p-8">
                <div className={`w-14 h-14 rounded-2xl bg-slate-900 flex items-center justify-center border border-slate-800 transition-colors duration-500 group-hover:border-amber-500/40`}>
                  {course.icon}
                </div>
              </div>

              <div className="mt-4">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">{course.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {course.desc}
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-slate-300">
                  <Clock className="w-4 h-4 text-emerald-400" />
                  <span className="text-[13px] font-medium">Duration: {course.duration}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <Users className="w-4 h-4 text-amber-400" />
                  <span className="text-[13px] font-medium">Suitable: {course.suitable}</span>
                </div>
                <div className="pt-4 border-t border-emerald-500/5">
                  <p className="text-xs font-bold text-emerald-500 uppercase tracking-widest mb-3">Learning Outcomes:</p>
                  <ul className="space-y-2">
                    {course.outcomes.map((outcome, i) => (
                      <li key={i} className="flex items-center gap-2 text-slate-400 text-[13px]">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/40" />
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <button
                onClick={() => handleEnroll(course)}
                className="mt-auto w-full py-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold text-xs uppercase tracking-widest hover:bg-emerald-500 hover:text-slate-950 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.2)]"
              >
                Enroll Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Enrollment Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={`Enroll in ${selectedCourse?.title}`}
      >
        <EnrollForm 
          courseName={selectedCourse?.title} 
          onSuccess={() => setIsModalOpen(false)} 
        />
      </Modal>
    </div>
  );
};

export default CoursesPage;
