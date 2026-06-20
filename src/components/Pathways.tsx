import React, { useState } from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Briefcase, Award, TrendingUp, Sparkles, BookOpen, Layers } from 'lucide-react';
import { PATHWAY_STEPS } from '../data';

export default function Pathways() {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section className="relative py-24 bg-[#050b1a] overflow-hidden" id="pathways-segment">
      {/* Background lights */}
      <div className="absolute top-1/4 left-1/2 w-96 h-96 bg-indigo-650/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#a5f3fc]">
            QUALIFICATION + EXECUTION
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Integrated Academic Pathways
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-indigo-500 to-cyan-400 mx-auto rounded-full" />
          <p className="font-sans text-slate-300 text-sm sm:text-base leading-relaxed">
            "CyberWise Skillversity combines skill-based learning with academic opportunities, helping learners develop qualifications along with practical industry abilities."
          </p>
        </div>

        {/* Pathway Concept Explanation Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16" id="pathways-blueprint-grid">
          
          {/* Card 1: Skill + Education Model */}
          <div className="p-6 rounded-2xl bg-[#030712] border border-indigo-950/80 hover:border-indigo-500/20 transition-all flex flex-col space-y-3">
            <div className="p-2.5 rounded-xl bg-indigo-950/50 border border-indigo-500/20 text-indigo-400 w-fit">
              <Layers className="h-5 w-5" />
            </div>
            <h3 className="font-display font-extrabold text-lg text-white">Skill + Education Model</h3>
            <p className="font-sans text-xs text-slate-400 leading-relaxed">
              Earn validated certifications that complement your university degrees. Build tangible portfolio assets that solve actual company problems before graduation.
            </p>
          </div>

          {/* Card 2: Learning Pathways */}
          <div className="p-6 rounded-2xl bg-[#030712] border border-indigo-950/80 hover:border-indigo-500/20 transition-all flex flex-col space-y-3">
            <div className="p-2.5 rounded-xl bg-cyan-950/50 border border-cyan-500/20 text-cyan-400 w-fit">
              <BookOpen className="h-5 w-5" />
            </div>
            <h3 className="font-display font-extrabold text-lg text-white">Curated Learning Pathways</h3>
            <p className="font-sans text-xs text-slate-400 leading-relaxed">
              Tailored pathways which match student schedules. Go from basic communication confidence to launching full scale agencies under guided supervision.
            </p>
          </div>

          {/* Card 3: Career Growth Roadmap */}
          <div className="p-6 rounded-2xl bg-[#030712] border border-indigo-950/80 hover:border-indigo-500/20 transition-all flex flex-col space-y-3">
            <div className="p-2.5 rounded-xl bg-amber-950/50 border border-amber-500/20 text-amber-400 w-fit">
              <TrendingUp className="h-5 w-5" />
            </div>
            <h3 className="font-display font-extrabold text-lg text-white">Career Growth Roadmap</h3>
            <p className="font-sans text-xs text-slate-400 leading-relaxed">
              Immediate connection channels to media houses, design boutiques, and online platforms. Accelerate professional promotions without starting at zero.
            </p>
          </div>

        </div>

        {/* Visual Timeline Section */}
        <div className="bg-[#030712]/60 border border-indigo-950/80 rounded-3xl p-6 sm:p-10" id="pathways-timeline-display">
          <h3 className="font-display font-extrabold text-xl sm:text-2xl text-white mb-8 text-center flex items-center justify-center space-x-2">
            <Sparkles className="h-5 w-5 text-cyan-400" />
            <span>Step-by-Step Industry Career Growth Roadmap</span>
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            
            {/* Left Steps Tabs selectors */}
            <div className="lg:col-span-5 flex flex-col space-y-3" id="timeline-tabs-host">
              {PATHWAY_STEPS.map((pStep, index) => {
                const isActive = activeStep === index;
                return (
                  <button
                    key={index}
                    onClick={() => setActiveStep(index)}
                    className={`w-full text-left p-4 rounded-xl border transition-all flex items-center space-x-4 cursor-pointer ${
                      isActive 
                        ? 'bg-indigo-950/40 border-indigo-500/50 text-cyan-400 shadow-md shadow-indigo-650/10' 
                        : 'bg-transparent border-indigo-950/50 text-slate-400 hover:border-indigo-900/40 hover:text-white'
                    }`}
                  >
                    <span className={`h-8 w-8 rounded-lg font-mono text-xs font-bold leading-8 text-center shrink-0 ${
                      isActive ? 'bg-cyan-950 text-cyan-400 border border-cyan-500/40' : 'bg-indigo-950/20 text-slate-400'
                    }`}>
                      0{index + 1}
                    </span>
                    <div className="space-y-0.5">
                      <span className="block text-[10.5px] font-bold uppercase tracking-wider text-indigo-400">{pStep.step}</span>
                      <span className="font-display font-bold text-sm tracking-wide line-clamp-1">{pStep.title}</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Detailed Preview Box with motion */}
            <div className="lg:col-span-7 flex flex-col bg-indigo-950/10 border border-indigo-950/60 rounded-2xl p-6 sm:p-8 justify-between relative" id="timeline-result-card">
              
              <div className="absolute top-4 right-4 text-[10px] font-bold font-mono tracking-wider text-slate-500 bg-slate-950/40 px-2.5 py-1 rounded border border-indigo-950">
                ACTIVE FOCUS PATH
              </div>

              <div className="space-y-5">
                <span className="text-xs font-mono font-bold uppercase tracking-wide px-3 py-1 rounded-full bg-cyan-950/50 text-cyan-400 border border-cyan-500/20">
                  {PATHWAY_STEPS[activeStep].step} Detailed View
                </span>
                
                <h4 className="font-display font-black text-xl sm:text-2xl text-white">
                  {PATHWAY_STEPS[activeStep].title}
                </h4>
                
                <p className="font-sans text-sm text-slate-300 leading-relaxed">
                  {PATHWAY_STEPS[activeStep].description}
                </p>
              </div>

              {/* Outcomes row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-6 border-t border-indigo-950/60">
                
                {/* Academic Milestone */}
                <div className="p-3.5 rounded-xl bg-[#030712] border border-indigo-950/50 space-y-1">
                  <div className="flex items-center space-x-2 text-indigo-400 mb-1">
                    <GraduationCap className="h-4 w-4" />
                    <span className="font-display font-extrabold text-xs uppercase tracking-wider">Academic Outcome</span>
                  </div>
                  <p className="font-sans text-xs text-slate-300">
                    {PATHWAY_STEPS[activeStep].academicOutcome}
                  </p>
                </div>

                {/* Economic/Career Career Milestone */}
                <div className="p-3.5 rounded-xl bg-[#030712] border border-indigo-950/50 space-y-1">
                  <div className="flex items-center space-x-2 text-cyan-400 mb-1">
                    <Briefcase className="h-4 w-4" />
                    <span className="font-display font-extrabold text-xs uppercase tracking-wider">Career Milestone</span>
                  </div>
                  <p className="font-sans text-xs text-slate-300">
                    {PATHWAY_STEPS[activeStep].careerOutcome}
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
