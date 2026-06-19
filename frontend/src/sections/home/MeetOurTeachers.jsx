import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Star } from 'lucide-react';

const MeetOurTeachers = () => {
  const teachers = [
    {
      name: "Sheikh Abdullah",
      role: "Senior Tajweed Specialist",
      qual: "Al-Azhar University Graduate",
      exp: "12+ Years Experience",
      image: "./public/arabian-religious-muslim-man-600w-169340498.webp"
    },
    {
      name: "Ustazah Fatimah",
      role: "Hifz & Kids Expert",
      qual: "Ijazah in Ten Qira'at",
      exp: "8+ Years Experience",
      image: "./public/cheerful-young-student-in-muslim-headscarf-standing-confidently-with-books-in-hands-on-transparent-background-png.webp"
    },
    {
      name: "Hafiz Mohammed",
      role: "Islamic Studies Tutor",
      qual: "Certified Quran Teacher",
      exp: "10+ Years Experience",
      image: "./public/young-sunni-muslim-cleric-smiling-confidently-in-traditional-white-attire-against-rustic-background-photo.jpg"
    }
  ];

  return (
    <section id="teachers" className="relative py-16 md:py-28 bg-[#010604] overflow-hidden select-none">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-500/[0.02] blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-500/[0.02] blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-emerald-950/40 border border-emerald-500/30 px-3 py-1 rounded-full mb-4 backdrop-blur-md"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_8px_#f59e0b]" />
            <span className="text-[10px] font-bold text-emerald-400 tracking-[0.2em] uppercase font-mono">Expert Educators</span>
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight leading-tight font-sans">
            Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500 font-semibold">Qualified Teachers</span>
          </h2>
        </div>

        {/* Teachers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teachers.map((teacher, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-[#020d08]/80 border border-emerald-500/10 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-xl"
            >
              {/* Teacher Image */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-[0.8] grayscale-[0.2] group-hover:grayscale-0 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#010604] via-transparent to-transparent" />

                {/* Qualification Badge */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  <div className="bg-emerald-950/80 backdrop-blur-md border border-emerald-500/20 px-2 py-1 rounded-lg flex items-center gap-1.5">
                    <GraduationCap className="w-3 h-3 text-emerald-400" />
                    <span className="text-[9px] text-white font-medium uppercase tracking-wider">{teacher.qual}</span>
                  </div>
                </div>
              </div>

              {/* Teacher Info */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-amber-400 transition-colors">
                  {teacher.name}
                </h3>
                <p className="text-emerald-400 text-xs font-semibold tracking-widest uppercase mb-4">
                  {teacher.role}
                </p>
                <div className="flex items-center justify-center gap-3 py-3 border-t border-emerald-500/10">
                  <div className="flex items-center gap-1 text-slate-400 text-[10px] uppercase font-bold tracking-tighter">
                    <Award className="w-3 h-3 text-amber-500" />
                    {teacher.exp}
                  </div>
                  <div className="w-1 h-1 rounded-full bg-slate-700" />
                  <div className="flex items-center gap-1 text-amber-400 text-[10px] uppercase font-bold">
                    <Star className="w-3 h-3 fill-amber-400" />
                    Top Rated
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetOurTeachers;
