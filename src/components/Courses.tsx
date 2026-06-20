import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Award, Clock, ArrowRight, CheckCircle2, X, Briefcase, ChevronRight, HelpCircle } from 'lucide-react';
import { COURSES } from '../data';
import { Course } from '../types';

interface CoursesProps {
  onSelectCourse: (courseId: string) => void;
  onNavigate: (view: string) => void;
}

export default function Courses({ onSelectCourse, onNavigate }: CoursesProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeCourseModal, setActiveCourseModal] = useState<Course | null>(null);

  const categories = ['All', 'Marketing', 'Media', 'Business', 'Communication'];

  const filteredCourses = selectedCategory === 'All'
    ? COURSES
    : COURSES.filter(course => course.category === selectedCategory);

  const handleEnquire = (courseId: string) => {
    onSelectCourse(courseId);
    setActiveCourseModal(null);
    onNavigate('admissions');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="relative py-24 bg-[#010410] overflow-hidden" id="courses-segment">
      
      {/* Absolute Backdrop Gradients */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Course Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#a5f3fc]">
            CURRICULUMS OF THE FUTURE
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Explore Career-Focused Specializations
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-indigo-500 to-cyan-400 mx-auto rounded-full" />
          <p className="font-sans text-slate-300 text-sm sm:text-base leading-relaxed">
            Acquire modern practical expertise built specifically to secure stable employment and high-paying client contracts in technology-driven landscapes.
          </p>

          {/* Tab Categories Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-6" id="courses-filter-tabs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-[#1e293b] text-cyan-400 border border-cyan-500/40 shadow-sm shadow-cyan-500/10'
                    : 'text-gray-400 hover:text-white bg-indigo-950/20 hover:bg-indigo-950/40 border border-indigo-950/60'
                }`}
              >
                {cat} Core {cat === 'All' ? 'Paths' : ''}
              </button>
            ))}
          </div>
        </div>

        {/* Courses Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="courses-grid-frame">
          {filteredCourses.map((course, idx) => (
            <motion.div
              layout
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group p-[1px] rounded-2xl bg-gradient-to-tr from-indigo-950 via-indigo-950 to-indigo-900/40 hover:from-indigo-500 hover:via-indigo-950 hover:to-cyan-400 transition-all duration-500 shadow-xl"
            >
              <div className="bg-[#030712] rounded-[15px] overflow-hidden flex flex-col h-full">
                
                {/* Course Image Header with overlay */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={course.imageUrl}
                    alt={course.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/40 to-transparent" />
                  
                  {/* Badge tags overlay */}
                  <div className="absolute top-4 left-4 flex flex-col space-y-2">
                    {course.badge && (
                      <span className="px-3 py-1 rounded-full bg-indigo-900/90 text-indigo-300 font-mono text-[10px] font-bold uppercase tracking-wider border border-indigo-500/40 shadow">
                        {course.badge}
                      </span>
                    )}
                  </div>

                  <div className="absolute bottom-4 right-4 text-xs font-semibold text-cyan-300 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-indigo-900/60 flex items-center space-x-1">
                    <Clock className="h-3 w-3 shrink-0" />
                    <span>{course.duration}</span>
                  </div>
                </div>

                {/* Card Core Content */}
                <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                  
                  <div className="space-y-2.5">
                    {/* Category Label */}
                    <span className="font-mono text-[10.5px] font-bold text-cyan-400 uppercase tracking-widest block">
                      {course.category} Niche Program
                    </span>
                    {/* Title */}
                    <h3 className="font-display font-extrabold text-xl sm:text-2xl text-white group-hover:text-cyan-300 transition-colors">
                      {course.title}
                    </h3>
                    {/* Brief */}
                    <p className="font-sans text-xs text-slate-300 leading-relaxed line-clamp-2">
                      {course.description}
                    </p>
                  </div>

                  {/* Skills/Career options outline */}
                  <div className="pt-2">
                    <span className="font-sans text-[11px] font-extrabold uppercase text-slate-400 tracking-wider block mb-2">Target High-Paying Roles:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {course.careerOptions.map((role, rIdx) => (
                        <span key={rIdx} className="font-mono text-[10px] bg-indigo-950/20 border border-indigo-950 text-indigo-200 px-2 py-0.5 rounded-full">
                          🎯 {role}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="pt-4 border-t border-indigo-950/85 flex items-center justify-between gap-4">
                    <button
                      onClick={() => setActiveCourseModal(course)}
                      className="text-cyan-400 group/btn bg-cyan-950/10 border border-cyan-500/20 hover:border-cyan-400 px-3.5 py-2.5 rounded-xl font-sans text-xs font-bold tracking-wide transition-all flex items-center space-x-1 text-left cursor-pointer"
                    >
                      <span>Syllabus & Modules</span>
                      <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                    </button>

                    <button
                      onClick={() => handleEnquire(course.id)}
                      className="px-4 py-2.5 rounded-xl bg-indigo-600 group-hover:bg-indigo-500 text-white font-sans font-bold text-xs tracking-wide transition-all shadow-md cursor-pointer flex items-center justify-center space-x-1.5"
                    >
                      <span>Join Cohort</span>
                      <ArrowRight className="h-3 w-3" />
                    </button>
                  </div>

                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Dynamic Detailed Curriculum Modal Overlay */}
        <AnimatePresence>
          {activeCourseModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-100 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
              id="courses-modal-backdrop"
            >
              <motion.div
                initial={{ scale: 0.95, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 15 }}
                className="w-full max-w-2xl bg-[#030712] border border-indigo-950 rounded-2xl overflow-hidden shadow-2xl relative"
                id="courses-syllabus-modal"
              >
                {/* Closed Button */}
                <button
                  onClick={() => setActiveCourseModal(null)}
                  className="absolute top-4 right-4 p-2 bg-indigo-950/50 hover:bg-indigo-950 rounded-xl text-slate-300 hover:text-white transition-colors border border-indigo-900/60 z-10"
                >
                  <X className="h-5 w-5" />
                </button>

                {/* Modal Visual Banner */}
                <div className="relative h-44 bg-gradient-to-r from-indigo-950 to-indigo-900 p-6 flex items-end">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030712] to-transparent" />
                  <div className="relative z-10 space-y-1">
                    <span className="font-mono text-[10px] font-bold text-cyan-400 uppercase tracking-widest bg-cyan-950/20 px-2 py-0.5 rounded border border-cyan-500/20">
                      {activeCourseModal.category} Curricula
                    </span>
                    <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
                      {activeCourseModal.title}
                    </h3>
                  </div>
                </div>

                {/* Modal Info Content scroll space */}
                <div className="p-6 md:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
                  
                  {/* Scope summary row */}
                  <div className="grid grid-cols-2 gap-4 bg-indigo-950/15 border border-indigo-950/60 p-4 rounded-xl">
                    <div className="space-y-0.5">
                      <span className="block text-slate-400 text-[10.5px] font-bold tracking-wider uppercase">EXPECTED DURATION</span>
                      <span className="text-white text-sm font-semibold">{activeCourseModal.duration}</span>
                    </div>
                    <div className="space-y-0.5">
                      <span className="block text-slate-400 text-[10.5px] font-bold tracking-wider uppercase">CERTIFICATION ACCREDITATION</span>
                      <span className="text-white text-sm font-semibold">{activeCourseModal.level}</span>
                    </div>
                  </div>

                  {/* Modules segment */}
                  <div className="space-y-3">
                    <h4 className="font-display font-extrabold text-sm text-cyan-400 uppercase tracking-wider flex items-center space-x-1.5">
                      <BookOpen className="h-4.5 w-4.5" />
                      <span>Detailed Training Modules</span>
                    </h4>
                    <div className="space-y-2.5">
                      {activeCourseModal.modules.map((mod, mIdx) => (
                        <div key={mIdx} className="flex items-start space-x-3 bg-slate-950/40 p-3 rounded-lg border border-indigo-950/30">
                          <CheckCircle2 className="h-4.5 w-4.5 text-indigo-400 mt-0.5 shrink-0" />
                          <span className="font-sans text-xs text-slate-350">{mod}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Target placement options */}
                  <div className="space-y-3 pt-2">
                    <h4 className="font-display font-extrabold text-sm text-indigo-400 uppercase tracking-wider flex items-center space-x-1.5">
                      <Briefcase className="h-4.5 w-4.5" />
                      <span>Strategic Placement Paths</span>
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {activeCourseModal.careerOptions.map((role, cIdx) => (
                        <div key={cIdx} className="bg-indigo-950/10 border border-indigo-950/40 p-2.5 rounded-xl flex items-center space-x-2">
                          <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full shrink-0" />
                          <span className="font-sans font-semibold text-xs text-white">{role}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Modal Action footer */}
                <div className="p-6 bg-slate-950/90 border-t border-indigo-950 flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
                  <span className="text-slate-400 text-xs font-semibold self-center">🚀 Standard seats fill up rapidly daily</span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setActiveCourseModal(null)}
                      className="px-4 py-2.5 rounded-xl hover:bg-slate-900 border border-indigo-950 text-slate-300 text-xs font-bold transition-colors cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => handleEnquire(activeCourseModal.id)}
                      className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-cyan-400 text-white text-xs font-extrabold transition-all shadow-md shrink-0 cursor-pointer"
                    >
                      Enquire for Admission
                    </button>
                  </div>
                </div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
