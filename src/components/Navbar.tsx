import React, { useState } from 'react';
import { Menu, X, GraduationCap, ShieldCheck, Sparkles } from 'lucide-react';

interface NavbarProps {
  currentView: string;
  onNavigate: (view: string) => void;
}

export default function Navbar({ currentView, onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'courses', label: 'Courses' },
    { id: 'about', label: 'About' },
    { id: 'pathways', label: 'Pathways' },
    { id: 'why-us', label: 'Why Us' },
    { id: 'success', label: 'Student Spotlights' },
    { id: 'admissions', label: 'Join / Admissions' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a1128]/85 backdrop-blur-md border-b border-indigo-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Brand Frame */}
          <div 
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => handleLinkClick('home')}
            id="nav-logo-box"
          >
            <div className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 p-[1.5px] shadow-lg shadow-indigo-500/15">
              <div className="flex items-center justify-center w-full h-full bg-[#030712] rounded-[10px] transition-all group-hover:bg-opacity-80">
                <GraduationCap className="h-6 w-6 text-cyan-400 transition-transform group-hover:scale-110" />
              </div>
              <div className="absolute -bottom-1 -right-1 flex items-center justify-center w-5 h-5 bg-indigo-600 rounded-full border border-slate-900 shadow">
                <Sparkles className="h-2.5 w-2.5 text-white animate-pulse" />
              </div>
            </div>
            
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-xl tracking-tight text-white leading-none">
                CyberWise
              </span>
              <span className="font-sans text-[10px] font-semibold uppercase tracking-widest text-[#a5f3fc]">
                Skillversity
              </span>
            </div>
          </div>

          {/* Large Screen Desktop Links */}
          <div className="hidden lg:flex items-center space-x-1" id="nav-large-links">
            {menuItems.map((item) => {
              const isActive = currentView === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleLinkClick(item.id)}
                  className={`relative px-4 py-2 rounded-lg font-sans text-[13.5px] font-semibold tracking-wide transition-all duration-300 ${
                    isActive 
                      ? 'text-cyan-400 bg-indigo-950/40 border border-indigo-900/30' 
                      : 'text-slate-350 hover:text-white hover:bg-slate-950/20'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[3px] bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Quick Contact CTA Button */}
          <div className="hidden sm:flex items-center space-x-3" id="nav-cta-frame">
            <span className="font-mono text-[10.5px] border border-cyan-500/30 text-cyan-400 bg-cyan-950/30 px-2.5 py-1 rounded-full flex items-center space-x-1">
              <span className="inline-block w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping" />
              <span>Adm. Open 2026</span>
            </span>
            <button
              onClick={() => handleLinkClick('admissions')}
              id="header-apply-button"
              className="relative overflow-hidden group px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-cyan-500 text-white font-sans font-bold text-sm tracking-wide transition-all duration-300 shadow-lg shadow-indigo-600/20 active:scale-95 cursor-pointer"
            >
              Apply Now
            </button>
          </div>

          {/* Small Screen Mobile Toggle */}
          <div className="flex lg:hidden items-center" id="nav-mobile-toggle-btn">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-xl text-slate-300 hover:text-white hover:bg-[#111827] focus:outline-none focus:ring-2 focus:ring-indigo-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Panel Drawer Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-[#050b1a] border-b border-indigo-950/80 shadow-2xl" id="nav-mobile-drawer">
          <div className="px-3 py-4 space-y-1.5">
            {menuItems.map((item) => {
              const isActive = currentView === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-mobile-link-${item.id}`}
                  onClick={() => handleLinkClick(item.id)}
                  className={`w-full text-left px-5 py-3 rounded-xl font-sans text-sm font-semibold tracking-wide transition-all ${
                    isActive 
                      ? 'bg-gradient-to-r from-[#0d1530] to-[#12284e] text-cyan-400 border-l-4 border-cyan-400' 
                      : 'text-slate-300 hover:bg-[#111d35]/30 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
            
            <div className="pt-4 pb-2 px-4 border-t border-indigo-950/50 flex flex-col space-y-2">
              <span className="text-gray-400 text-xs text-center font-semibold">📍 Perinthalmanna High-Tech Hub</span>
              <button
                onClick={() => handleLinkClick('admissions')}
                className="w-full text-center py-3 px-4 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-sans font-extrabold text-sm tracking-wide shadow-md"
              >
                Apply Admission Online
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
