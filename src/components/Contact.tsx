import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, Mail, ChevronDown, Compass, Milestone, Send, Heart, Laptop } from 'lucide-react';
import { FAQS } from '../data';

export default function Contact() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  return (
    <section className="relative py-24 bg-[#050b1a] overflow-hidden" id="contact-segment">
      <div className="absolute top-1/2 left-1/10 w-96 h-96 bg-cyan-600/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#a5f3fc]">
            CONNECT WITH SKILLVERSITY
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Our Campus Coordinates
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-indigo-500 to-cyan-400 mx-auto rounded-full" />
          <p className="font-sans text-slate-300 text-sm sm:text-base leading-relaxed pt-2">
            Visit our high-end digital agency layout in Perinthalmanna. Get straight directions, find transit distance grids, or consult our FAQs.
          </p>
        </div>

        {/* Double row: Map & Coordinates OR FAQ Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-16" id="contact-info-grid">
          
          {/* Left: Schematic Map & Coordinates */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-8 text-left" id="contact-locations-card">
            
            <div className="p-6 rounded-2xl bg-[#030712] border border-indigo-950/80 space-y-4 relative overflow-hidden">
              <h3 className="font-display font-extrabold text-lg text-white">Perinthalmanna Studio Hub</h3>
              <p className="font-sans text-xs sm:text-sm text-slate-400">
                Cyber King Skillversity is positioned next to major regional transport hubs, allowing college candidates and professionals to attend smoothly.
              </p>

              {/* Schematic Map Visualizer Box */}
              <div className="relative h-48 rounded-xl bg-[#010410] border border-indigo-950/60 overflow-hidden flex flex-col items-center justify-center p-4">
                {/* Dot matrix grid */}
                <div className="absolute inset-0 bg-[#070e24]/40 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-60" />

                {/* Cyberwise Pin */}
                <div className="relative z-10 flex flex-col items-center space-y-1 animate-bounce">
                  <div className="p-2.5 rounded-full bg-cyan-950 border border-cyan-400 shadow shadow-cyan-500/50">
                    <MapPin className="h-5 w-5 text-cyan-400" />
                  </div>
                  <span className="px-2 py-0.5 rounded bg-indigo-650 text-white font-mono text-[9px] font-bold uppercase tracking-wider shadow">
                     Cyber King Hub
                  </span>
                </div>

                {/* Grid Coordinates indicators */}
                <div className="absolute top-4 left-4 text-[9px] font-mono text-slate-500 space-y-0.5">
                  <p>LAT: 10.9749° N</p>
                  <p>LNG: 76.2235° E</p>
                </div>

                {/* Commute distances labels */}
                <div className="absolute bottom-4 left-4 right-4 flex justify-between gap-2">
                  <span className="font-sans text-[10px] bg-indigo-950/80 border border-indigo-900/40 text-indigo-300 px-2.5 py-1 rounded">
                    🚄 Railway: 4 mins
                  </span>
                  <span className="font-sans text-[10px] bg-slate-950/85 border border-indigo-900/40 text-cyan-300 px-2.5 py-1 rounded">
                    🚌 KSRTC Stand: 3 mins
                  </span>
                </div>

              </div>

              {/* Address detail list */}
              <div className="pt-4 space-y-3.5">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-indigo-400 shrink-0 mt-0.5" />
                  <span className="font-sans text-xs sm:text-sm text-slate-300">
                    Cyber King Skillversity, High-Tech Studio Ave, near Town Junction, Perinthalmanna, Kerala - 679322
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-cyan-400 shrink-0" />
                  <span className="font-sans text-xs sm:text-sm text-slate-300">+91 9446 88 55 22 / +91 9446 88 55 33</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-indigo-400 shrink-0" />
                  <span className="font-sans text-xs sm:text-sm text-slate-300">info@cyberkingskill.com / admissions@cyberkingskill.com</span>
                </div>
              </div>

            </div>

            {/* Social Channels panel */}
            <div className="p-5 rounded-2xl bg-indigo-950/15 border border-indigo-950/60 text-left space-y-3">
              <h4 className="font-display font-semibold text-sm text-white">Join Core Digital Channels</h4>
              <div className="flex flex-wrap gap-2.5" id="social-links-drawer">
                <a href="#instagram" className="px-3.5 py-1.5 rounded-lg bg-indigo-950/30 hover:bg-indigo-950 text-indigo-300 font-sans text-xs font-bold border border-indigo-950 transition-colors">
                  📸 Instagram
                </a>
                <a href="#youtube" className="px-3.5 py-1.5 rounded-lg bg-indigo-950/30 hover:bg-indigo-950 text-indigo-300 font-sans text-xs font-bold border border-indigo-950 transition-colors">
                  📺 YouTube
                </a>
                <a href="#linkedin" className="px-3.5 py-1.5 rounded-lg bg-indigo-950/30 hover:bg-indigo-950 text-indigo-300 font-sans text-xs font-bold border border-indigo-950 transition-colors">
                  💼 LinkedIn
                </a>
                <a href="#facebook" className="px-3.5 py-1.5 rounded-lg bg-indigo-950/30 hover:bg-indigo-950 text-indigo-300 font-sans text-xs font-bold border border-indigo-950 transition-colors">
                  👥 Facebook
                </a>
              </div>
            </div>

          </div>

          {/* Right: Interactive FAQ Accordion */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-4 text-left" id="contact-faq-cards">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#030712] border border-indigo-950/80 flex-grow">
              <span className="font-mono text-[10px] font-bold text-indigo-400 uppercase tracking-widest block mb-1">FREQUENTLY ASKED QUESTIONS</span>
              <h3 className="font-display font-extrabold text-2xl text-white mb-6">Course & Campus Inquiries</h3>

              <div className="space-y-3" id="faq-accordions-group">
                {FAQS.map((faq, idx) => {
                  const isOpen = activeFaq === idx;
                  return (
                    <div
                      key={idx}
                      className="border border-indigo-950 rounded-xl overflow-hidden bg-slate-950/30 hover:bg-slate-950/60 transition-colors"
                    >
                      <button
                        onClick={() => toggleFaq(idx)}
                        className="w-full text-left px-4 py-4 font-display font-bold text-sm sm:text-base text-gray-200 flex items-center justify-between focus:outline-none cursor-pointer"
                      >
                        <span className="pr-4">{faq.question}</span>
                        <ChevronDown className={`h-4.5 w-4.5 text-indigo-400 shrink-0 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                          >
                            <div className="px-4 pb-4 font-sans text-xs sm:text-sm text-slate-400 leading-relaxed border-t border-indigo-950/40 pt-2 bg-indigo-950/5">
                              {faq.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
