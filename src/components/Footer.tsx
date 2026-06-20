import React from 'react';
import { GraduationCap, Sparkles, Heart } from 'lucide-react';

interface FooterProps {
  onNavigate: (view: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const handleLinkClick = (id: string) => {
    onNavigate(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#030611] border-t border-indigo-950/70 text-slate-400 py-16 text-left relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 border-b border-indigo-950/40 pb-12 mb-12">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3 cursor-pointer group" onClick={() => handleLinkClick('home')}>
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 p-[1px] shadow-lg shadow-indigo-500/10">
                <div className="flex items-center justify-center w-full h-full bg-[#030712] rounded-[9px]">
                  <GraduationCap className="h-5 w-5 text-cyan-400" />
                </div>
              </div>
              
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-lg text-white leading-none">
                  Cyber King
                </span>
                <span className="font-sans text-[9px] font-semibold uppercase tracking-widest text-[#a5f3fc]">
                  Skillversity
                </span>
              </div>
            </div>

            <p className="font-sans text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Next-generation career-focused skill university located in Perinthalmanna, bridging the gap between education and premium technology careers.
            </p>

            <span className="inline-flex items-center space-x-2 bg-indigo-950/20 border border-indigo-950 text-indigo-400 text-[10.5px] px-3 py-1 rounded-full font-mono uppercase">
              <span>●</span> <span>Authorized Training Center</span>
            </span>
          </div>

          {/* Quick links Col */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-sm text-white tracking-widest uppercase">Institution Directory</h4>
            <ul className="space-y-2 font-sans text-xs sm:text-sm">
              <li>
                <button onClick={() => handleLinkClick('home')} className="hover:text-cyan-400 transition-colors cursor-pointer">
                  H-1 Home Welcome Suite
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('courses')} className="hover:text-cyan-400 transition-colors cursor-pointer">
                  H-2 Specialized Curriculums
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('about')} className="hover:text-cyan-400 transition-colors cursor-pointer">
                  H-3 Core Mission & Vision
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('why-us')} className="hover:text-cyan-400 transition-colors cursor-pointer">
                  H-4 Why Choose Cyber King
                </button>
              </li>
            </ul>
          </div>

          {/* Admisssions/Support Col */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-display font-bold text-sm text-white tracking-widest uppercase">Admissions Desk</h4>
            <ul className="space-y-2 font-sans text-xs sm:text-sm">
              <li>
                <button onClick={() => handleLinkClick('pathways')} className="hover:text-cyan-400 transition-colors cursor-pointer">
                  Academic Integrated Roadmap
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('success')} className="hover:text-cyan-400 transition-colors cursor-pointer">
                  Student Verification Spotlights
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('admissions')} className="hover:text-cyan-400 transition-colors cursor-pointer text-cyan-400 font-semibold underline decoration-2 decoration-cyan-500/30">
                  Apply Online Registration Portal
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('contact')} className="hover:text-cyan-400 transition-colors cursor-pointer">
                  Studio Contacts & Maps
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer bottom bar copyrights */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-indigo-950/15 text-xs sm:text-xs">
          <p className="font-sans text-slate-500 text-center sm:text-left">
            © 2026 Cyber King Skillversity. Perinthalmanna Studio Division. All Rights Reserved.
          </p>
          <div className="flex items-center space-x-1.5 font-sans text-slate-650 font-semibold text-center">
            <span>Powered by</span>
            <span className="text-cyan-400 font-display font-bold">Practical EdTech</span>
            <Sparkles className="h-3.5 w-3.5 text-cyan-400 animate-pulse" />
          </div>
        </div>

      </div>
    </footer>
  );
}
