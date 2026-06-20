import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Cpu, Briefcase, Award, Sparkles, CheckCircle2, ChevronRight, FileSpreadsheet, Users, Milestone, MessageCircle } from 'lucide-react';
import { FEATURES } from '../data';

export default function WhyChooseUs() {
  const [activeSupportTab, setActiveSupportTab] = useState<string>('resume');

  const supportDetails: Record<string, { title: string; desc: string; list: string[]; emoji: string }> = {
    resume: {
      title: 'Resume & LinkedIn Building',
      desc: 'Formulate an optimized curriculum vitae that highlights high-end digital capabilities, practical micro-accreditations, and generative AI toolkits.',
      list: [
        'ATS-compliant tech resume formatting',
        'Keyword alignment for digital roles',
        'LinkedIn optimization for reach & recruiters',
        'GitHub & production showcase links'
      ],
      emoji: '📄'
    },
    interview: {
      title: 'Strategic Interview Preparation',
      desc: 'Participate in professional mock interview sessions modeled directly around modern agency benchmarks and international corporation recruitment styles.',
      list: [
        'Behavioral questions training',
        'Practical portfolio walkthrough tactics',
        'Digital marketing live scenario prompts',
        'Video editing portfolio pacing review'
      ],
      emoji: '🗣️'
    },
    portfolio: {
      title: 'Premium Portfolio Development',
      desc: 'Generate individual, live portfolios displaying actual client work, brand optimizations, or cinematic campaign production loops.',
      list: [
        'Web-hosted interactive case studies',
        'Full HD creative video showreels',
        'Proof of ROI metrics for marketers',
        'E-commerce performance metrics sheet'
      ],
      emoji: '💼'
    },
    readiness: {
      title: 'Industry Readiness Training',
      desc: 'Develop executive-level business communication, agency client handling frameworks, and team scheduling skills.',
      list: [
        'Client brief assessment techniques',
        'Freelancer invoice and quote drafting',
        'Corporate meetings conduct',
        'Creative collaboration processes'
      ],
      emoji: '🚀'
    }
  };

  // Map icon names from data to Lucide icons
  const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    BookOpen: BookOpen,
    Cpu: Cpu,
    Briefcase: Briefcase,
    Award: Award,
    Sparkles: Sparkles
  };

  return (
    <section className="relative py-24 bg-[#010410] overflow-hidden" id="why-choose-us-segment">
      {/* Absolute Backdrop glow */}
      <div className="absolute top-1/2 left-1/10 w-96 h-96 bg-cyan-600/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#a5f3fc]">
            WHY CHOOSE CYBER KING
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Designed Around Employer Benchmarks
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-indigo-500 to-cyan-400 mx-auto rounded-full" />
          <p className="font-sans text-slate-300 text-sm sm:text-base leading-relaxed">
            Discover how Cyber King Skillversity is changing skill training in Perinthalmanna with premium curricula, creative lab gear, and placement partnerships.
          </p>
        </div>

        {/* 5 Feature Cards Grid (Custom beautiful layout - 3 + 2 layout) */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 mb-20" id="whychoose-features-grid">
          {FEATURES.map((feat, index) => {
            const IconComponent = iconMap[feat.iconName] || Cpu;
            const isWide = index >= 3; // Make bottom 2 elements wider
            return (
              <motion.div
                key={feat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`p-6 rounded-2xl bg-[#030712] border border-indigo-950/80 hover:border-cyan-400/40 hover:bg-indigo-950/10 transition-all group flex flex-col space-y-4 ${
                  isWide ? 'md:col-span-3' : 'md:col-span-2'
                }`}
              >
                <div className="p-3 rounded-xl bg-indigo-950/40 border border-indigo-900/40 text-cyan-400 w-fit transition-transform group-hover:scale-105">
                  <IconComponent className="h-5 w-5" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-display font-extrabold text-lg text-white group-hover:text-cyan-300 transition-colors">
                    {feat.title}
                  </h3>
                  <p className="font-sans text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {feat.description}
                  </p>
                </div>

                <div className="h-1 w-12 bg-indigo-950 group-hover:bg-gradient-to-r group-hover:from-indigo-500 group-hover:to-cyan-400 rounded-full transition-all" />
              </motion.div>
            );
          })}
        </div>

        {/* Career Support Interactive Segment */}
        <div className="p-[1px] rounded-3xl bg-gradient-to-tr from-indigo-950 via-indigo-900/40 to-cyan-500/30" id="whychoose-careersupport-card">
          <div className="bg-[#030712] rounded-[23px] p-6 sm:p-10">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column Description */}
              <div className="lg:col-span-5 space-y-6 text-left">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-cyan-400 flex items-center space-x-1">
                  <span>●</span> <span>EXECUTIVE ACCELERATION LAB</span>
                </span>
                
                <h3 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight">
                  Comprehensive Career Support
                </h3>
                
                <p className="font-sans text-sm sm:text-base text-slate-300 leading-relaxed">
                  Securing a job takes more than just technical theory. Our active support module grooms you into a commanding communicator prepared to clear top-tier client trials.
                </p>

                {/* Vertical Support Links selectors */}
                <div className="flex flex-col space-y-2 pt-2" id="support-sub-tabs">
                  {[
                    { id: 'resume', label: 'Resume Building' },
                    { id: 'interview', label: 'Interview Preparation' },
                    { id: 'portfolio', label: 'Portfolio Development' },
                    { id: 'readiness', label: 'Industry Readiness Training' }
                  ].map((subItem) => (
                    <button
                      key={subItem.id}
                      onClick={() => setActiveSupportTab(subItem.id)}
                      className={`w-full text-left p-3.5 rounded-xl border font-sans text-xs sm:text-sm font-bold tracking-wide transition-all flex items-center justify-between cursor-pointer ${
                        activeSupportTab === subItem.id 
                          ? 'bg-indigo-950/40 border-indigo-500/40 text-cyan-400 shadow-md' 
                          : 'bg-transparent border-indigo-950/40 text-slate-400 hover:text-white hover:border-indigo-900/60'
                      }`}
                    >
                      <span>{subItem.label}</span>
                      <ChevronRight className={`h-4.5 w-4.5 transition-transform ${activeSupportTab === subItem.id ? 'translate-x-1 text-cyan-400' : 'text-slate-600'}`} />
                    </button>
                  ))}
                </div>
              </div>

              {/* Right Interactive Information Pane with visual mock elements */}
              <div className="lg:col-span-7" id="support-active-display">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSupportTab}
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -15 }}
                    transition={{ duration: 0.3 }}
                    className="p-6 sm:p-8 rounded-2xl bg-indigo-950/15 border border-indigo-950/70 space-y-6 relative overflow-hidden"
                  >
                    {/* Big background watermark stamp */}
                    <div className="absolute -top-6 -right-5 text-7xl select-none opacity-10 filter blur-[0.5px]">
                      {supportDetails[activeSupportTab].emoji}
                    </div>

                    <div className="space-y-3">
                      <span className="text-xs font-semibold text-cyan-400 tracking-widest uppercase block">
                        Module Feature Showcase
                      </span>
                      <h4 className="font-display font-extrabold text-xl sm:text-2xl text-white">
                        {supportDetails[activeSupportTab].title}
                      </h4>
                      <p className="font-sans text-xs sm:text-sm text-slate-350 leading-relaxed">
                        {supportDetails[activeSupportTab].desc}
                      </p>
                    </div>

                    {/* Bullet elements with custom checks */}
                    <div className="space-y-3 pt-4 border-t border-indigo-950/50">
                      <span className="font-mono text-[10.5px] font-bold tracking-widest uppercase text-slate-400 block mb-2">Key Framework Pillars:</span>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {supportDetails[activeSupportTab].list.map((bulletPoint, bpIdx) => (
                          <div key={bpIdx} className="flex items-start space-x-2.5 bg-[#030712]/50 p-3 rounded-lg border border-indigo-950/20">
                            <CheckCircle2 className="h-4.5 w-4.5 text-indigo-400 shrink-0 mt-0.5" />
                            <span className="font-sans text-xs text-white leading-tight">{bulletPoint}</span>
                          </div>
                        ))}
                      </div>

                    </div>

                  </motion.div>
                </AnimatePresence>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
