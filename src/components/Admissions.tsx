import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, CheckCircle, Clock, Send, Users, ShieldAlert, GraduationCap } from 'lucide-react';
import { COURSES } from '../data';
import { InquiryForm } from '../types';

interface AdmissionsProps {
  selectedCourseId: string;
}

export default function Admissions({ selectedCourseId }: AdmissionsProps) {
  const [formData, setFormData] = useState<InquiryForm>({
    name: '',
    phone: '',
    email: '',
    courseInterested: '',
    message: ''
  });

  const [registeredList, setRegisteredList] = useState<InquiryForm[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    // Sync prefilled course ID
    if (selectedCourseId) {
      const parentCourse = COURSES.find(c => c.id === selectedCourseId);
      if (parentCourse) {
        setFormData(prev => ({ ...prev, courseInterested: parentCourse.title }));
      }
    } else if (!formData.courseInterested) {
      setFormData(prev => ({ ...prev, courseInterested: COURSES[0].title }));
    }
  }, [selectedCourseId]);

  useEffect(() => {
    const list = localStorage.getItem('cyberking_enquiries');
    if (list) {
      try {
        setRegisteredList(JSON.parse(list));
      } catch (e) {
        setRegisteredList([]);
      }
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.name.trim() || !formData.phone.trim() || !formData.email.trim()) {
      setErrorMessage('Please fill out all required fields (Name, Phone, and Email).');
      return;
    }

    // Capture entry
    const updated = [formData, ...registeredList];
    setRegisteredList(updated);
    localStorage.setItem('cyberking_enquiries', JSON.stringify(updated));

    setIsSubmitted(true);
    setFormData({
      name: '',
      phone: '',
      email: '',
      courseInterested: COURSES[0].title,
      message: ''
    });

    setTimeout(() => {
      setIsSubmitted(false);
    }, 6000);
  };

  // Build WhatsApp template links
  const handleWhatsAppEnquiry = () => {
    const defaultTemplate = `Hi Cyber King Skillversity, I am interested in seeking admission and details for course programs in Perinthalmanna. Please assist!`;
    const encoded = encodeURIComponent(defaultTemplate);
    window.open(`https://wa.me/919999999999?text=${encoded}`, '_blank');
  };

  return (
    <section className="relative py-24 bg-[#010410] overflow-hidden" id="admissions-segment">
      {/* Absolute Backdrop lamp */}
      <div className="absolute top-1/4 right-1/10 w-96 h-96 bg-[#12224d]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-cyan-400">
            Secure Your Admission Desk
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Apply To High-Payout Careers Today
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-indigo-500 to-cyan-400 mx-auto rounded-full" />
          <p className="font-sans text-slate-300 text-sm sm:text-base leading-relaxed">
            Fill out the rapid online registration form below. Our career advisors in Perinthalmanna will reach out to schedule your personal assessment profile.
          </p>
        </div>

        {/* Double-Column Display grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch" id="admissions-cols-grid">
          
          {/* Left Column Description and instructions */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8" id="adm-info-column">
            
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-[#030712] border border-indigo-950/60 text-left space-y-4">
                <span className="text-[10.5px] font-bold font-mono tracking-widest text-[#a5f3fc] uppercase flex items-center space-x-1">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                  <span>PERINTHALMANNA SKILLS COHORT 2026</span>
                </span>
                <h3 className="font-display font-extrabold text-xl text-white">Admissions & Counseling Process</h3>
                <p className="font-sans text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Join hundreds of graduates executing actual client workflows. Follow these three quick milestones to claim your practical workspace seat:
                </p>

                {/* Vertical roadmap items list */}
                <div className="space-y-3.5 pt-2">
                  <div className="flex items-start space-x-3 text-xs text-slate-350">
                    <span className="font-mono font-extrabold text-cyan-455 text-sm">01.</span>
                    <p><strong className="text-white">Submit Inquiry Profile:</strong> Fill out details regarding your course aspirations and contact channels.</p>
                  </div>
                  <div className="flex items-start space-x-3 text-xs text-slate-350">
                    <span className="font-mono font-extrabold text-[#7c3aed] text-sm">02.</span>
                    <p><strong className="text-white">Interactive Assessment:</strong> Visit Perinthalmanna studio center for a communication & tech aptitude diagnostic evaluation.</p>
                  </div>
                  <div className="flex items-start space-x-3 text-xs text-slate-350">
                    <span className="font-mono font-extrabold text-[#7c3aed] text-sm">03.</span>
                    <p><strong className="text-white">Claim Active Spot:</strong> Finalize tuition, receive core software licenses, and configure your individual practical workstation.</p>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Call and coordinates */}
              <div className="p-5 rounded-2xl bg-indigo-950/20 border border-indigo-950/80 text-left space-y-4">
                <h4 className="font-display font-bold text-sm text-white">Have immediate custom questions?</h4>
                <p className="font-sans text-xs text-slate-300">Interact instantly with our counseling team directly on WhatsApp with prefilled message templates.</p>
                
                <button
                  type="button"
                  onClick={handleWhatsAppEnquiry}
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-sans font-bold text-xs tracking-wide transition-all shadow-md flex items-center justify-center space-x-2 cursor-pointer border border-emerald-500/30"
                >
                  <svg className="h-4.5 w-4.5 fill-current text-white shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.037 21.978c-1.803 0-3.568-.475-5.118-1.378l-.366-.214-3.806.997 1.014-3.71-.234-.373A9.856 9.856 0 0 1 2.038 12c0-5.44 4.426-9.863 9.873-9.863 2.634 0 5.109 1.025 6.968 2.885a9.782 9.782 0 0 1 2.88 6.978c-.004 5.44-4.428 9.878-9.872 9.878l.15-.022zM12.037 0C5.385 0 .012 5.371.012 12c0 2.116.55 4.18 1.597 5.993L0 24l6.195-1.623a11.91 11.91 0 0 0 5.836 1.62c6.647 0 12.012-5.373 12.012-12c0-3.201-1.246-6.212-3.51-8.479A11.95 11.95 0 0 0 12.037 0zm5.127 15.228c-.282-.14-.282-.321-1.66-.995-.141-.07-.243-.105-.347.053-.105.158-.408.508-.499.613-.09.105-.181.123-.463.018a5.831 5.831 0 0 1-1.72-1.06 6.436 6.436 0 0 1-1.192-1.48c-.167-.282-.018-.435.123-.576.126-.127.282-.333.424-.499a2.02 2.02 0 0 0 .14-.246c.047-.099.023-.19-.011-.263-.035-.07-.35-.843-.479-1.157-.126-.307-.253-.263-.347-.267-.09-.004-.193-.004-.296-.004a.57.57 0 0 0-.411.19c-.141.159-.539.527-.539 1.282 0 .755.549 1.484.626 1.587.078.106 1.079 1.65 2.617 2.313.366.158.65.253.873.324.368.118.702.102.968.062.296-.044.912-.372 1.04-.73.128-.357.128-.664.09-.728-.04-.061-.141-.105-.424-.246z" fill="#FFFFFF"/>
                  </svg>
                  <span>WhatsApp Academic Desk</span>
                </button>
              </div>

            </div>

            {/* Quick contact panel information card */}
            <div className="space-y-4 text-left border-t border-indigo-950/40 pt-6">
              <div className="flex items-center space-x-3 text-slate-400">
                <MapPin className="h-5 w-5 text-indigo-400 shrink-0" />
                <span className="font-sans text-xs sm:text-sm">Cyber King High-Tech Studio, Perinthalmanna, Kerala</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-400">
                <Phone className="h-5 w-5 text-cyan-400 shrink-0" />
                <span className="font-sans text-xs sm:text-sm">+91 9446 88 55 22 / +91 9446 88 55 33</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-400">
                <Mail className="h-5 w-5 text-indigo-400 shrink-0" />
                <span className="font-sans text-xs sm:text-sm">admissions@cyberkingskill.com</span>
              </div>
            </div>

          </div>

          {/* Right Column Form submission */}
          <div className="lg:col-span-7" id="adm-form-column">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#030712] border border-indigo-950 relative overflow-hidden flex flex-col justify-between h-full shadow-2xl">
              
              <form onSubmit={handleFormSubmit} className="space-y-4" id="admissions-enquiry-form">
                <h3 className="font-display font-extrabold text-xl text-white border-b border-indigo-950/80 pb-3 mb-6 flex items-center space-x-1.5 text-left">
                  <GraduationCap className="h-5.5 w-5.5 text-cyan-400" />
                  <span>Online Course Registration Form</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-400 font-sans text-xs font-bold uppercase tracking-wider mb-1.5 text-left">Full Student Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Rahul Murali"
                      className="w-full bg-[#050b1a] border border-indigo-950 rounded-xl px-4 py-3 font-sans text-sm text-white focus:outline-none focus:border-cyan-500/50"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-slate-400 font-sans text-xs font-bold uppercase tracking-wider mb-1.5 text-left">Mobil / Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full bg-[#050b1a] border border-indigo-950 rounded-xl px-4 py-3 font-sans text-sm text-white focus:outline-none focus:border-cyan-500/50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-400 font-sans text-xs font-bold uppercase tracking-wider mb-1.5 text-left">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="e.g. rahulmurali@gmail.com"
                    className="w-full bg-[#050b1a] border border-indigo-950 rounded-xl px-4 py-3 font-sans text-sm text-white focus:outline-none focus:border-cyan-500/50"
                  />
                </div>

                <div>
                  <label className="block text-slate-400 font-sans text-xs font-bold uppercase tracking-wider mb-1.5 text-left">Desired Course Specialization *</label>
                  <select
                    name="courseInterested"
                    value={formData.courseInterested}
                    onChange={handleInputChange}
                    className="w-full bg-[#050b1a] border border-indigo-950 rounded-xl px-4 py-3.5 font-sans text-sm text-slate-300 focus:outline-none focus:ring-1 focus:ring-cyan-500/40 text-left"
                  >
                    {COURSES.map((course) => (
                      <option key={course.id} value={course.title}>
                        {course.title} ({course.category})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-slate-400 font-sans text-xs font-bold uppercase tracking-wider mb-1.5 text-left">Your Message / Career Goals</label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Briefly share your academic education background and what you hope to achieve at Cyber King Skillversity."
                    className="w-full bg-[#050b1a] border border-indigo-950 rounded-xl px-4 py-3 font-sans text-sm text-white focus:outline-none focus:border-cyan-500/50"
                  />
                </div>

                {errorMessage && (
                  <div className="p-3 bg-red-950/50 border border-red-500/35 rounded-xl text-red-300 font-sans text-xs text-left">
                    {errorMessage}
                  </div>
                )}

                <button
                  type="submit"
                  className="px-6 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-cyan-400 transition-all text-white font-sans font-extrabold text-sm tracking-widest uppercase shadow-lg flex items-center justify-center space-x-2 w-full cursor-pointer"
                >
                  <span>Submit Candidate Registration</span>
                  <Send className="h-4.5 w-4.5" />
                </button>

                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-emerald-950/60 border border-emerald-500/35 rounded-xl text-emerald-300 font-sans text-xs text-left font-semibold flex items-center space-x-2"
                  >
                    <CheckCircle className="h-5 w-5 text-emerald-400 shrink-0" />
                    <span>Success! Your registration inquiry profile has been cataloged. Our counselors will call you shortly.</span>
                  </motion.div>
                )}

              </form>

              {/* Secure Active Enquiries list logger block */}
              {registeredList.length > 0 && (
                <div className="mt-8 pt-6 border-t border-indigo-950/80 text-left" id="logged-registration-list">
                  <h4 className="font-display font-extrabold text-xs text-cyan-400 uppercase tracking-widest mb-3 flex items-center space-x-1.5">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                    <span>Your Submitted Applications ({registeredList.length})</span>
                  </h4>
                  <div className="space-y-2 max-h-[140px] overflow-y-auto">
                    {registeredList.map((entry, eIdx) => (
                      <div key={eIdx} className="p-3 rounded-lg bg-indigo-950/10 border border-indigo-950/60 text-xs flex justify-between items-center">
                        <div className="space-y-0.5">
                          <span className="font-sans font-bold text-gray-200 block">{entry.name}</span>
                          <span className="font-sans text-slate-400 block">{entry.courseInterested}</span>
                        </div>
                        <span className="px-2.5 py-1 rounded bg-indigo-950 text-[#a5f3fc] font-mono font-bold text-[9px] uppercase tracking-wide">
                          🔔 PENDING REVIEW
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
