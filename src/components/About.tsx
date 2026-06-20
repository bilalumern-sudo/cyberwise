import React from 'react';
import { motion } from 'motion/react';
import { Target, Lightbulb, CheckCircle2, ShieldAlert, GraduationCap, Laptop, Sparkles, BookOpen } from 'lucide-react';

export default function About() {
  const pillars = [
    {
      title: 'Practical Training',
      desc: 'Move past static theoretical pdfs. Dive into concrete media projects, live digital marketing dashboards, and ecommerce storefront pipelines.',
      icon: Laptop,
      color: 'text-cyan-400 border-cyan-500/30 bg-cyan-950/20'
    },
    {
      title: 'Modern Technology Skills',
      desc: 'Master professional toolsets containing generative AI assistants, CRM optimization flows, professional lenses, and Premiere Pro rigs.',
      icon: Sparkles,
      color: 'text-indigo-400 border-indigo-500/30 bg-indigo-950/20'
    },
    {
      title: 'Industry-Focused Programs',
      desc: 'Acquire precise skills requested directly by technology startups, regional production agencies, and global ecommerce distributors.',
      icon: BookOpen,
      color: 'text-violet-400 border-violet-500/30 bg-violet-950/20'
    },
    {
      title: 'Professional Guidance',
      desc: 'Undergo direct training from veteran content creators, expert corporate communicators, and active digital consultants.',
      icon: GraduationCap,
      color: 'text-amber-400 border-amber-500/30 bg-amber-950/20'
    }
  ];

  const missionBullets = [
    'Deliver practical and innovative education',
    'Build industry-ready professionals',
    'Encourage creativity and entrepreneurship',
    'Connect learners with modern career opportunities',
    'Create a bridge between learning and employment'
  ];

  return (
    <section className="relative py-24 bg-[#050b1a] overflow-hidden" id="about-section">
      {/* Background shape */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-indigo-950/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Head Intro */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-cyan-400">
            About CyberWise Skillversity
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Bridging Academic Knowledge with Real-World Industry Skills
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-indigo-500 to-cyan-400 mx-auto rounded-full" />
          <p className="font-sans text-slate-300 text-base sm:text-lg leading-relaxed pt-2">
            CyberWise Skillversity, Perinthalmanna, is a next-generation career-focused learning platform designed to connect academic knowledge with real-world industry skills. We empower students, graduates, and professionals with hands-on capabilities.
          </p>
        </div>

        {/* Pillars GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20" id="about-pillars">
          {pillars.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-gradient-to-b from-indigo-950/10 to-[#070e24]/70 border border-indigo-950/80 hover:border-indigo-500/30 hover:bg-indigo-950/25 transition-all group"
              >
                <div className={`p-3 rounded-xl border w-fit mb-4 ${item.color}`}>
                  <IconComp className="h-5 w-5" />
                </div>
                <h3 className="font-display font-bold text-lg text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>
                <p className="font-sans text-xs text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Vision & Mission Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch" id="about-vision-mission">
          
          {/* Vision card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-between p-8 rounded-2xl bg-gradient-to-r from-indigo-950/20 to-slate-900/40 border border-indigo-950/80 relative overflow-hidden group hover:border-indigo-500/30 transition-all"
          >
            <div className="absolute top-0 right-0 p-6 opacity-5 select-none text-right">
              <Target className="h-28 w-28 text-white" />
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-cyan-400">
                <div className="p-2.5 rounded-lg bg-cyan-950/40 border border-cyan-500/20">
                  <Target className="h-6 w-6" />
                </div>
                <h3 className="font-display font-extrabold text-2xl text-white">Our Strategic Vision</h3>
              </div>
              
              <p className="font-sans text-slate-300 text-base leading-relaxed pt-2">
                "To become a leading skill development destination that transforms learners into confident professionals by combining education, technology, creativity, and career opportunities."
              </p>
            </div>

            <div className="pt-6 border-t border-indigo-950/55 mt-6 flex items-center space-x-2 text-xs font-mono text-cyan-400">
              <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" />
              <span>COMMITTED TO SUCCESS VALUE</span>
            </div>
          </motion.div>

          {/* Mission card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-2xl bg-gradient-to-r from-[#030712] to-indigo-950/20 border border-indigo-950/80 relative overflow-hidden hover:border-indigo-500/30 transition-all"
          >
            <div className="absolute top-0 right-0 p-6 opacity-5 select-none text-right">
              <Lightbulb className="h-28 w-28 text-white" />
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-indigo-400">
                <div className="p-2.5 rounded-lg bg-indigo-950/40 border border-indigo-500/20">
                  <Lightbulb className="h-6 w-6" />
                </div>
                <h3 className="font-display font-extrabold text-2xl text-white">Our Strategic Mission</h3>
              </div>

              <div className="space-y-3 pt-4">
                {missionBullets.map((bullet, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-indigo-400 shrink-0 mt-0.5" />
                    <span className="font-sans text-sm text-slate-300 leading-normal">{bullet}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
