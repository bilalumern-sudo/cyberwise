import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Quote, Star, MessageSquareCode, Check, Send, Award } from 'lucide-react';
import { TESTIMONIALS } from '../data';
import { Testimonial } from '../types';

export default function Reviews() {
  const [stories, setStories] = useState<Testimonial[]>([]);
  const [newStory, setNewStory] = useState({
    name: '',
    role: '',
    course: 'AI-Driven Digital Marketing',
    quote: '',
    rating: 5
  });
  const [successMsg, setSuccessMsg] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('cyberwise_testimonials');
    if (saved) {
      try {
        setStories(JSON.parse(saved));
      } catch (e) {
        setStories(TESTIMONIALS);
      }
    } else {
      setStories(TESTIMONIALS);
    }
  }, []);

  const handleRatingChange = (stars: number) => {
    setNewStory(prev => ({ ...prev, rating: stars }));
  };

  const handleSubmitStory = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newStory.name || !newStory.quote) return;

    const newStoryObj: Testimonial = {
      id: String(Date.now()),
      name: newStory.name,
      role: newStory.role || 'CyberWise Graduate',
      course: newStory.course,
      quote: newStory.quote,
      avatarUrl: `https://images.unsplash.com/photo-${1500000000000 + Math.floor(Math.random() * 900000)}?auto=format&fit=crop&w=150&q=80`,
      rating: newStory.rating,
      badge: 'Student Verified'
    };

    const updated = [newStoryObj, ...stories];
    setStories(updated);
    localStorage.setItem('cyberwise_testimonials', JSON.stringify(updated));

    setNewStory({
      name: '',
      role: '',
      course: 'AI-Driven Digital Marketing',
      quote: '',
      rating: 5
    });

    setSuccessMsg(true);
    setTimeout(() => {
      setSuccessMsg(false);
    }, 4000);
  };

  return (
    <section className="relative py-24 bg-[#050b1a] overflow-hidden" id="student-reviews-segment">
      {/* Absolute Backdrop lamp */}
      <div className="absolute top-1/2 right-1/10 w-96 h-96 bg-indigo-550/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#a5f3fc]">
            PROUD COMMUNITY ALUMNI
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Learner Spotlights & Success Stories
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-indigo-500 to-cyan-400 mx-auto rounded-full" />
          <p className="font-sans text-slate-300 text-sm sm:text-base leading-relaxed">
            See how real working professionals and fresh graduates in Perinthalmanna went from general tech interest to launching premium industry careers.
          </p>
        </div>

        {/* Stories list grid cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20" id="testimonials-grid-holder">
          {stories.map((story) => (
            <motion.div
              layout
              key={story.id}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-[#030712] border border-indigo-950/60 relative flex flex-col justify-between hover:border-indigo-500/30 transition-all shadow-lg"
            >
              <div className="absolute top-6 right-6 text-indigo-950 select-none pointer-events-none">
                <Quote className="h-14 w-14 rotate-180 opacity-50" />
              </div>

              <div className="space-y-4">
                {/* Rating star block */}
                <div className="flex items-center space-x-1">
                  {Array.from({ length: 5 }).map((_, rIdx) => (
                    <Star
                      key={rIdx}
                      className={`h-4.5 w-4.5 shrink-0 ${
                        rIdx < story.rating ? 'text-amber-400 fill-amber-400' : 'text-slate-800'
                      }`}
                    />
                  ))}
                </div>

                <p className="font-sans text-[#cbd5e1] italic text-sm sm:text-base leading-relaxed relative z-10">
                  "{story.quote}"
                </p>
              </div>

              {/* Bio details card footer */}
              <div className="flex items-center space-x-4 pt-6 mt-6 border-t border-indigo-950/50">
                <div className="relative">
                  <img
                    src={story.avatarUrl}
                    alt={story.name}
                    referrerPolicy="no-referrer"
                    className="h-12 w-12 rounded-full object-cover border-2 border-indigo-500/30"
                  />
                  {story.badge && (
                    <span className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-emerald-500 text-white flex items-center justify-center border border-slate-900 shadow">
                      <Check className="h-2.5 w-2.5 stroke-[4.5px]" />
                    </span>
                  )}
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h4 className="font-display font-semibold text-sm text-white truncate">{story.name}</h4>
                    {story.badge && (
                      <span className="font-mono text-[9px] font-bold text-cyan-400 border border-cyan-500/20 bg-cyan-950/40 px-1.5 py-0.5 rounded leading-none">
                        {story.badge}
                      </span>
                    )}
                  </div>
                  <p className="font-sans text-xs text-slate-400 truncate">{story.role}</p>
                  <p className="font-mono text-[10px] text-indigo-400 mt-0.5 truncate uppercase">Course: {story.course}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Share your story Interaction Form */}
        <div className="p-6 sm:p-10 rounded-3xl bg-[#030712] border border-indigo-950/80 max-w-3xl mx-auto" id="submit-success-card">
          <div className="flex items-center space-x-3 text-cyan-400 mb-6 border-b border-indigo-950/60 pb-4">
            <div className="p-2 bg-cyan-950/40 border border-cyan-500/20 rounded-lg">
              <MessageSquareCode className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-display font-extrabold text-lg text-white">Alumni Feedback Hub</h3>
              <p className="font-sans text-xs text-slate-400">Are you a graduate? Share your career success story with upcoming students.</p>
            </div>
          </div>

          <form onSubmit={handleSubmitStory} className="space-y-4" id="testimonials-alumni-form">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-slate-400 font-sans text-xs font-bold uppercase tracking-wider mb-1">Your Full Name *</label>
                <input
                  type="text"
                  required
                  value={newStory.name}
                  onChange={(e) => setNewStory(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="e.g. Anand Krishna"
                  className="w-full bg-[#050b1a] border border-indigo-950 rounded-xl px-4 py-3 font-sans text-sm text-white focus:outline-none focus:border-cyan-500/50"
                />
              </div>
              
              <div>
                <label className="block text-slate-400 font-sans text-xs font-bold uppercase tracking-wider mb-1">Current Job Role / Designation</label>
                <input
                  type="text"
                  value={newStory.role}
                  onChange={(e) => setNewStory(prev => ({ ...prev, role: e.target.value }))}
                  placeholder="e.g. Media Specialist / Freelancer"
                  className="w-full bg-[#050b1a] border border-indigo-950 rounded-xl px-4 py-3 font-sans text-sm text-white focus:outline-none focus:border-cyan-500/50"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-slate-400 font-sans text-xs font-bold uppercase tracking-wider mb-1">Course Completed *</label>
                <select
                  value={newStory.course}
                  onChange={(e) => setNewStory(prev => ({ ...prev, course: e.target.value }))}
                  className="w-full bg-[#050b1a] border border-indigo-950 rounded-xl px-4 py-3 font-sans text-sm text-slate-300 focus:outline-none focus:ring-1 focus:ring-cyan-500/40"
                >
                  <option value="AI-Driven Digital Marketing">AI-Driven Digital Marketing</option>
                  <option value="Professional Videography & Creative Media">Professional Videography & Creative Media</option>
                  <option value="E-Commerce & Online Business Skills">E-Commerce & Online Business Skills</option>
                  <option value="Spoken English & Professional Communication">Spoken English & Professional Communication</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-400 font-sans text-xs font-bold uppercase tracking-wider mb-1">Student rating *</label>
                <div className="flex items-center space-x-1.5 h-10 mt-1">
                  {Array.from({ length: 5 }).map((_, ratingStarsIdx) => (
                    <button
                      type="button"
                      key={ratingStarsIdx}
                      onClick={() => handleRatingChange(ratingStarsIdx + 1)}
                      className="text-amber-400 focus:outline-none hover:scale-110 transition-transform cursor-pointer"
                    >
                      <Star
                        className={`h-6.5 w-6.5 ${
                          ratingStarsIdx < newStory.rating ? 'fill-amber-400 text-amber-400' : 'text-slate-800'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <label className="block text-slate-400 font-sans text-xs font-bold uppercase tracking-wider mb-1">Your Story / Quote *</label>
              <textarea
                required
                rows={3}
                value={newStory.quote}
                onChange={(e) => setNewStory(prev => ({ ...prev, quote: e.target.value }))}
                placeholder="How did CyberWise support your education gap and assist your placement search?"
                className="w-full bg-[#050b1a] border border-indigo-950 rounded-xl px-4 py-3 font-sans text-sm text-white focus:outline-none focus:border-cyan-500/50"
              />
            </div>

            <button
              type="submit"
              className="px-6 py-3.5 rounded-xl bg-indigo-650 hover:bg-cyan-500 transition-all text-white font-sans font-bold text-sm tracking-wide shadow flex items-center justify-center space-x-2 w-full sm:w-auto cursor-pointer"
            >
              <span>Submit Alumnus Testimonial</span>
              <Send className="h-4 w-4" />
            </button>

            {successMsg && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-3.5 bg-emerald-950/60 border border-emerald-500/35 rounded-xl text-emerald-300 font-sans text-xs text-center font-semibold"
              >
                Thank you! Your testimonial has been logged successfully and appended to the spotlights registry.
              </motion.div>
            )}

          </form>
        </div>

      </div>
    </section>
  );
}
