/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Courses from './components/Courses';
import Pathways from './components/Pathways';
import WhyChooseUs from './components/WhyChooseUs';
import Reviews from './components/Reviews';
import Admissions from './components/Admissions';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ArrowUpRight, Award, Compass, Sparkles, AlertTriangle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [currentView, setCurrentView] = useState<string>('home');
  const [selectedCourseId, setSelectedCourseId] = useState<string>('');

  const handleSelectCourse = (courseId: string) => {
    setSelectedCourseId(courseId);
  };

  const handleNavigate = (view: string) => {
    setCurrentView(view);
    // Clear course prefill if switching back to home or contact
    if (view === 'home') {
      setSelectedCourseId('');
    }
  };

  return (
    <div className="min-h-screen bg-[#030712] text-white selection:bg-cyan-500 selection:text-black antialiased font-sans">
      
      {/* Dynamic Navigation Header bar */}
      <Navbar currentView={currentView} onNavigate={handleNavigate} />

      {/* Main Container workspace */}
      <main className="relative min-h-[75vh]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentView}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          >
            {/* View Router logic */}
            {currentView === 'home' && (
              <div id="home-aggregate-stream">
                
                {/* 1. Immersive Digital Hero section */}
                <Hero onNavigate={handleNavigate} />

                {/* 2. Educational Highlights of core specialized courses */}
                <div className="py-2 border-y border-indigo-950/40 bg-indigo-950/5">
                  <Courses 
                    onSelectCourse={handleSelectCourse} 
                    onNavigate={handleNavigate} 
                  />
                </div>

                {/* 3. Why Choose CyberWise features mesh */}
                <WhyChooseUs />

                {/* 4. Main academic integration overview teaser */}
                <About />

                {/* 5. Custom CTA banner for Perinthalmanna region */}
                <section className="relative py-20 bg-gradient-to-r from-indigo-950 via-[#0a122e] to-cyan-950 border-t border-indigo-950/60 overflow-hidden" id="home-cta-block">
                  <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]" />
                  <div className="relative max-w-5xl mx-auto px-4 text-center space-y-6">
                    <span className="font-mono text-xs font-bold text-cyan-400 uppercase tracking-widest bg-cyan-950/40 px-3 py-1.5 rounded-full border border-cyan-500/20">
                      📅 SEATS FILLING FOR COHORT JUNE 2026
                    </span>
                    <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-none max-w-3xl mx-auto">
                      Step Into Perinthalmanna's Premier Skill Ecosystem
                    </h2>
                    <p className="font-sans text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
                      Don't delay your professional validation. Connect instantly with expert creators, build a premium client portfolio, and claim your high-paying tech career.
                    </p>
                    <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                      <button
                        onClick={() => handleNavigate('admissions')}
                        className="px-6 py-3.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-black font-sans font-extrabold text-sm tracking-widest uppercase transition-all shadow shadow-cyan-400/20 flex items-center justify-center space-x-1.5 cursor-pointer"
                      >
                        <span>Apply Online Now</span>
                        <ArrowUpRight className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => handleNavigate('contact')}
                        className="px-6 py-3.5 rounded-xl border border-indigo-900/60 hover:bg-indigo-950 bg-transparent text-gray-300 text-xs font-bold uppercase transition-all"
                      >
                        Consult Location Map
                      </button>
                    </div>
                  </div>
                </section>

              </div>
            )}

            {currentView === 'courses' && (
              <Courses 
                onSelectCourse={handleSelectCourse} 
                onNavigate={handleNavigate} 
              />
            )}

            {currentView === 'about' && (
              <About />
            )}

            {currentView === 'pathways' && (
              <Pathways />
            )}

            {currentView === 'why-us' && (
              <WhyChooseUs />
            )}

            {currentView === 'success' && (
              <Reviews />
            )}

            {currentView === 'admissions' && (
              <Admissions selectedCourseId={selectedCourseId} />
            )}

            {currentView === 'contact' && (
              <Contact />
            )}

          </motion.div>
        </AnimatePresence>
      </main>

      {/* Structured footer directory parameters */}
      <Footer onNavigate={handleNavigate} />

    </div>
  );
}

