import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, GraduationCap, Video, Compass, Sparkles, Trophy } from 'lucide-react';
import { INSTITUTION_STATS } from '../data';

interface HeroProps {
  onNavigate: (view: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section className="relative min-h-screen pt-28 pb-16 overflow-hidden flex items-center bg-gradient-to-b from-[#030712] via-[#091129] to-[#010410]">
      
      {/* Absolute Backdrop Gradient Blobs */}
      <div className="absolute top-1/4 left-1/10 w-80 h-80 bg-indigo-650/15 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl" />
      <div className="absolute top-10 right-1/4 w-72 h-72 bg-purple-600/10 rounded-full blur-2xl" />

      {/* Decorative Grid Mesh Layer */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b12_1px,transparent_1px),linear-gradient(to_bottom,#1e293b12_1px,transparent_1px)] bg-[size:32px_32px] opacity-70 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text / Info Hero Space */}
          <div className="lg:col-span-7 space-y-8 text-left" id="hero-text-frame">
            
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-indigo-950/40 border border-indigo-500/30 px-3.5 py-1.5 rounded-full"
            >
              <Trophy className="h-4 w-4 text-cyan-400" />
              <span className="font-mono text-xs font-semibold text-indigo-200 tracking-wide uppercase">
                Perinthalmanna's Premier Career Launchpad
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="space-y-4"
            >
              <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-none">
                Cyber King Skillversity <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-indigo-600">
                  Where Skills Meet Opportunities
                </span>
              </h1>
              <p className="font-display font-medium text-lg sm:text-xl text-cyan-300 tracking-wide">
                Bridging Skills, Education & Future Careers
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-sans text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl"
            >
              Unlock your potential with career-focused programs in AI-powered digital marketing, professional videography, e-commerce, and spoken English. Cyber King Skillversity helps students and professionals develop practical skills, confidence, and industry knowledge to succeed in the digital world.
            </motion.p>

            {/* CTA Interaction Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
              id="hero-actions-container"
            >
              <button
                onClick={() => onNavigate('courses')}
                id="hero-explore-courses-btn"
                className="group px-7 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-cyan-400 text-white font-sans font-extrabold text-sm tracking-wide transition-all shadow-lg shadow-indigo-600/20 flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>Explore Courses</span>
                <ArrowUpRight className="h-4 w-4 transform transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
              
              <button
                onClick={() => onNavigate('admissions')}
                id="hero-apply-btn"
                className="px-7 py-4 rounded-xl border border-indigo-900/60 hover:border-cyan-500/50 bg-[#0a1024]/40 hover:bg-[#0f1731]/80 text-cyan-300 hover:text-white font-sans font-bold text-sm tracking-wide transition-all flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>Apply Now</span>
              </button>
            </motion.div>

            {/* Quick Metrics Dashboard Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.4 }}
              className="pt-8 border-t border-indigo-950/40 grid grid-cols-2 sm:grid-cols-4 gap-6"
              id="hero-stats-frame"
            >
              {INSTITUTION_STATS.map((stat, idx) => (
                <div key={idx} className="flex flex-col space-y-1">
                  <span className="font-display font-extrabold text-2xl sm:text-3xl text-white">
                    {stat.value}
                  </span>
                  <span className="font-sans text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>

          </div>

          {/* Right Visual AI/Tech Element Board */}
          <div className="lg:col-span-5 relative flex justify-center items-center py-6" id="hero-graphic-frame">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-[420px]"
            >
              {/* Spinning tech orbits decoration */}
              <div className="absolute inset-0 rounded-full border border-dashed border-indigo-500/10 animate-[spin_50s_linear_infinite]" />
              <div className="absolute -inset-4 rounded-full border border-indigo-500/5 animate-[spin_100s_linear_infinite]" />

              {/* Main Visual Glass Frame card */}
              <div className="relative z-10 p-[1.5px] rounded-2xl bg-gradient-to-tr from-indigo-500 via-indigo-950 to-cyan-400 shadow-2xl">
                <div className="bg-[#030712] rounded-[15px] p-6 space-y-6">
                  
                  {/* Digital Live Indicator Header */}
                  <div className="flex items-center justify-between border-b border-indigo-950/60 pb-4">
                    <div className="flex items-center space-x-2">
                      <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-ping" />
                      <span className="font-mono text-[11px] font-semibold text-emerald-400 tracking-wider">SECURE DIGITAL PATHWAY</span>
                    </div>
                    <span className="font-mono text-[10px] text-zinc-500">REF: cw_pma_2026</span>
                  </div>

                  {/* Highlights Visual List */}
                  <div className="space-y-4">
                    
                    {/* Highlight Box 1 */}
                    <div className="flex items-start space-x-3.5 p-3 rounded-xl bg-indigo-950/20 border border-indigo-950/40 hover:bg-indigo-950/30 transition-colors">
                      <div className="p-2 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                        <GraduationCap className="h-5 w-5" />
                      </div>
                      <div className="space-y-0.5">
                        <h4 className="font-display font-semibold text-sm text-gray-200">Skills + Education Hybrid</h4>
                        <p className="font-sans text-xs text-slate-400">Receive certified university path integration aligned with practical jobs.</p>
                      </div>
                    </div>

                    {/* Highlight Box 2 */}
                    <div className="flex items-start space-x-3.5 p-3 rounded-xl bg-indigo-950/20 border border-indigo-950/40 hover:bg-indigo-950/30 transition-colors">
                      <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                        <Video className="h-5 w-5" />
                      </div>
                      <div className="space-y-0.5">
                        <h4 className="font-display font-semibold text-sm text-gray-200">Creative Media Studio</h4>
                        <p className="font-sans text-xs text-slate-400">Hands-on cinema camera rentals, post production suites, and live editing.</p>
                      </div>
                    </div>

                    {/* Highlight Box 3 */}
                    <div className="flex items-start space-x-3.5 p-3 rounded-xl bg-indigo-950/20 border border-indigo-950/40 hover:bg-indigo-950/30 transition-colors">
                      <div className="p-2 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-violet-400">
                        <Compass className="h-5 w-5" />
                      </div>
                      <div className="space-y-0.5">
                        <h4 className="font-display font-semibold text-sm text-gray-200">AI Marketing Lab</h4>
                        <p className="font-sans text-xs text-slate-400">Master production grade prompts, automated campaigns, and advanced SEO tools.</p>
                      </div>
                    </div>

                  </div>

                  {/* Micro Footer Inside Graphic */}
                  <div className="bg-indigo-950/20 border border-indigo-950/40 rounded-xl p-3.5 text-center">
                    <span className="font-sans text-[11px] text-[#a5f3fc] font-semibold flex items-center justify-center space-x-1.5">
                      <Sparkles className="h-3.5 w-3.5 text-cyan-400 animate-spin" />
                      <span>Learn next-gen practical intelligence</span>
                    </span>
                  </div>

                </div>
              </div>

              {/* Float decor cards */}
              <div className="absolute -top-6 -right-5 z-20 px-3 py-1.5 rounded-lg bg-cyan-950 border border-cyan-500/30 text-cyan-400 font-mono text-xs font-bold shadow-xl">
                🤖 AI Integrated
              </div>
              <div className="absolute -bottom-4 -left-6 z-20 px-3 py-1.5 rounded-lg bg-indigo-950 border border-indigo-500/30 text-indigo-300 font-mono text-xs font-bold shadow-xl">
                📍 Perinthalmanna
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
