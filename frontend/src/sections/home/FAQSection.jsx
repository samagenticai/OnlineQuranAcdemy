import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How do online classes work?",
      answer: "Online classes are conducted via a specialized interactive virtual classroom program (like Zoom or Google Meet). You'll have a one-to-one session with your tutor where you can see their screen, hear their audio, and follow along with the digital Quran."
    },
    {
      question: "Is free trial available?",
      answer: "Yes, we offer a 3-day free trial period with no obligations. This allows you to experience our teaching style, meet your tutor, and understand the curriculum before making a commitment."
    },
    {
      question: "How can I choose timing?",
      answer: "We offer completely flexible timings. During the registration process, you can specify your preferred days and times. Our tutors are available 24/7 to accommodate students from all time zones globally."
    },
    {
      question: "Who can join?",
      answer: "Our academy is open to everyone regardless of age or gender. We have specialized courses for kids starting from age 4, as well as dedicated programs for adults (both beginners and advanced learners)."
    }
  ];

  return (
    <section id="faq" className="relative py-16 md:py-28 bg-[#010604] overflow-hidden select-none">
      <div className="max-w-4xl mx-auto px-6 lg:px-16 relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-emerald-950/40 border border-emerald-500/30 px-3 py-1 rounded-full mb-4 backdrop-blur-md"
          >
            <HelpCircle className="w-3 h-3 text-emerald-400" />
            <span className="text-[10px] font-bold text-emerald-400 tracking-[0.2em] uppercase font-mono">Any Questions?</span>
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight leading-tight font-sans">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500 font-semibold">Questions</span>
          </h2>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`rounded-2xl border transition-all duration-300 ${activeIndex === index
                  ? 'bg-emerald-950/20 border-emerald-500/40 shadow-2xl shadow-emerald-500/5'
                  : 'bg-[#020d08]/50 border-emerald-500/10 hover:border-emerald-500/30'
                }`}
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 md:p-6 text-left"
              >
                <span className={`text-sm md:text-base font-semibold transition-colors duration-300 ${activeIndex === index ? 'text-amber-400' : 'text-slate-200'
                  }`}>
                  {faq.question}
                </span>
                <ChevronDown className={`w-5 h-5 text-emerald-400 transition-transform duration-500 ${activeIndex === index ? 'rotate-180' : ''
                  }`} />
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-slate-400 text-[13px] md:text-sm leading-relaxed border-t border-emerald-500/10 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
