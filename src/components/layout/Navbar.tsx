import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar, Globe, ChevronRight } from 'lucide-react';
import { Language } from '../../types';
import {
  PRIMARY_PHONE,
  DISPLAY_PRIMARY_PHONE,
  SECONDARY_PHONE,
  DISPLAY_SECONDARY_PHONE,
} from '../../data/clinicInfo';

interface NavbarProps {
  currentLang: Language;
  onToggleLang: (lang: Language) => void;
  onOpenAppointmentModal: (serviceOrReason?: string) => void;
  onNavigateToSection?: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onToggleLang,
  onOpenAppointmentModal,
  onNavigateToSection,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Streamlined nav links
  const primaryNavLinks = [
    { id: 'home', labelEn: 'Home', labelMr: 'मुख्यपृष्ठ' },
    { id: 'about', labelEn: 'About', labelMr: 'माहिती' },
    { id: 'locations', labelEn: 'Locations', labelMr: 'शाखा' },
    { id: 'specializations', labelEn: 'Specializations', labelMr: 'विशेष तज्ज्ञता' },
    { id: 'services', labelEn: 'Services', labelMr: 'सर्व सेवा' },
    { id: 'gallery', labelEn: 'Gallery', labelMr: 'दालन' },
    { id: 'contact', labelEn: 'Contact', labelMr: 'संपर्क' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);

      const sectionIds = primaryNavLinks.map(l => l.id);
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    if (onNavigateToSection) {
      onNavigateToSection(id);
    } else {
      const element = document.getElementById(id);
      if (element) {
        const navOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <>
      {/* Dimmed Background Overlay on Mobile when Menu is Open */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 bg-slate-950/40 backdrop-blur-xs z-40 transition-opacity duration-300 xl:hidden pointer-events-auto"
          aria-hidden="true"
        />
      )}

      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-3 sm:px-5 lg:px-6 pt-3 sm:pt-4 pointer-events-none">
        <div
          className={`pointer-events-auto max-w-7xl mx-auto rounded-2xl sm:rounded-3xl transition-all duration-300 px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 ${
            mobileMenuOpen
              ? 'bg-gradient-to-b from-white via-[#F8FBFF] to-[#EDF5FF] shadow-[0_20px_60px_-15px_rgba(8,43,99,0.3)] border border-white ring-1 ring-advait-blue/20'
              : isScrolled
              ? 'glass-navbar-scrolled'
              : 'glass-navbar'
          }`}
        >
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            {/* Logo & Clinic Branding */}
            <button
              onClick={() => scrollTo('home')}
              className="flex items-center gap-2 sm:gap-2.5 text-left shrink-0 group focus:outline-none min-w-0"
              aria-label="Dr. Shinde's Advait Multispeciality Dental Clinic and Implant Centre Home"
            >
              <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-9 lg:h-9 rounded-xl p-1 bg-white/80 backdrop-blur-md border border-white/90 shadow-xs flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-105">
                <img
                  src="./assets/logo-icon.jpg"
                  alt="Dr. Shinde's Advait Dental Clinic Emblem"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-xs sm:text-[13px] font-extrabold tracking-tight text-advait-navy leading-none whitespace-nowrap">
                  Dr. Shinde's Advait
                </span>
                <span className="text-[6px] min-[360px]:text-[6.5px] sm:text-[7px] lg:text-[7.5px] font-bold text-advait-teal tracking-normal sm:tracking-wider uppercase mt-0.5 leading-none whitespace-nowrap">
                  Multispeciality Dental Clinic & Implant Centre
                </span>
              </div>
            </button>

            {/* Desktop Navigation Links within Glass Pill Track */}
            <nav
              className="hidden xl:flex items-center gap-0.5 bg-white/40 backdrop-blur-md rounded-2xl p-0.5 border border-white/60 shadow-2xs shrink-0"
              aria-label="Main Navigation"
            >
              {primaryNavLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => scrollTo(link.id)}
                    className={`px-2 xl:px-2.5 py-1 rounded-xl text-[11px] xl:text-[11.5px] font-semibold transition-all duration-200 ${
                      isActive
                        ? 'bg-advait-blue text-white shadow-xs font-bold scale-[1.02]'
                        : 'text-advait-navy hover:text-advait-blue hover:bg-white/70'
                    }`}
                  >
                    {currentLang === 'en' ? link.labelEn : link.labelMr}
                  </button>
                );
              })}
            </nav>

            {/* Action CTAs: Language Toggle, Dual Doctor Call Pill, and Book Appointment */}
            <div className="hidden sm:flex items-center gap-1.5 sm:gap-2 shrink-0">
              {/* Language Switch Toggle */}
              <button
                onClick={() => onToggleLang(currentLang === 'en' ? 'mr' : 'en')}
                className="glass-pill flex items-center gap-1 px-2 py-1.5 rounded-xl hover:bg-white/90 text-[11px] font-semibold text-advait-navy transition-all duration-200 hover:scale-105 active:scale-95 shadow-2xs"
                title="Toggle Language / भाषा बदला"
                aria-label="Toggle language between English and Marathi"
              >
                <Globe className="w-3.5 h-3.5 text-advait-teal" />
                <span className={currentLang === 'en' ? 'font-bold text-advait-blue' : 'text-slate-500'}>EN</span>
                <span className="text-slate-300">|</span>
                <span className={currentLang === 'mr' ? 'font-bold text-advait-blue' : 'text-slate-500'}>मराठी</span>
              </button>

              {/* Quick Call Dual Doctor Numbers in Glass Pill */}
              <div className="glass-pill flex flex-col justify-center px-2.5 py-1 rounded-xl text-[10px] font-bold text-advait-navy shadow-2xs">
                <a
                  href={`tel:${PRIMARY_PHONE}`}
                  className="flex items-center gap-1.5 hover:text-advait-blue transition-colors group/call leading-tight"
                  title="Call Dr. Lilesh A. Shinde"
                  aria-label={`Call Dr. Lilesh A. Shinde at ${DISPLAY_PRIMARY_PHONE}`}
                >
                  <Phone className="w-2.5 h-2.5 text-advait-blue group-hover/call:scale-110 transition-transform shrink-0" />
                  <span className="whitespace-nowrap">
                    <span className="font-semibold text-slate-500">Dr. Lilesh:</span> {DISPLAY_PRIMARY_PHONE}
                  </span>
                </a>
                <a
                  href={`tel:${SECONDARY_PHONE}`}
                  className="flex items-center gap-1.5 hover:text-advait-teal transition-colors group/call leading-tight mt-0.5"
                  title="Call Dr. Mayuree L. Shinde (Patil)"
                  aria-label={`Call Dr. Mayuree L. Shinde at ${DISPLAY_SECONDARY_PHONE}`}
                >
                  <Phone className="w-2.5 h-2.5 text-advait-teal group-hover/call:scale-110 transition-transform shrink-0" />
                  <span className="whitespace-nowrap">
                    <span className="font-semibold text-slate-500">Dr. Mayuree:</span> {DISPLAY_SECONDARY_PHONE}
                  </span>
                </a>
              </div>

              {/* Book Appointment CTA Button */}
              <button
                onClick={() => onOpenAppointmentModal()}
                className="flex items-center gap-1.5 px-3 sm:px-3.5 py-2 rounded-xl text-[11px] sm:text-xs font-bold text-white bg-advait-blue hover:bg-advait-blue-dark shadow-md hover:shadow-lg transition-all duration-200 hover:scale-[1.02] active:scale-95 whitespace-nowrap shrink-0"
              >
                <Calendar className="w-3.5 h-3.5 shrink-0" />
                <span>{currentLang === 'en' ? 'Book Appointment' : 'भेट निश्चित करा'}</span>
              </button>
            </div>

            {/* Mobile Controls: Language Switcher & Hamburger Menu */}
            <div className="flex items-center gap-2 xl:hidden">
              {/* Mobile Lang Button */}
              <button
                onClick={() => onToggleLang(currentLang === 'en' ? 'mr' : 'en')}
                className="glass-pill flex items-center gap-1 px-2.5 py-1.5 rounded-xl hover:bg-white/90 text-xs font-bold text-advait-navy transition-all shadow-2xs"
                aria-label="Language Toggle"
              >
                <Globe className="w-3.5 h-3.5 text-advait-teal" />
                <span>{currentLang === 'en' ? 'मराठी' : 'EN'}</span>
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 rounded-xl transition-all shadow-2xs ${
                  mobileMenuOpen
                    ? 'bg-advait-blue text-white shadow-sm'
                    : 'glass-pill text-advait-navy hover:bg-white/90'
                }`}
                aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-advait-navy" />}
              </button>
            </div>
          </div>

          {/* Mobile Frosted Glass Drawer Navigation */}
          {mobileMenuOpen && (
            <div className="xl:hidden mt-3 pt-3 border-t border-slate-200/70 animate-fade-in">
              <div className="space-y-2">
                {/* Clinic Info Banner in Drawer */}
                <div className="px-4 py-3 bg-gradient-to-r from-advait-blue/10 via-advait-teal/10 to-blue-50/70 rounded-2xl mb-3 border border-advait-blue/20 shadow-2xs">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 rounded-full bg-advait-teal animate-pulse" />
                    <span className="text-[10px] font-black text-advait-teal uppercase tracking-wider">
                      {currentLang === 'en' ? "Dr. Shinde's Advait Dental Clinic" : 'डॉ. शिंदे यांचे अद्वैत डेंटल क्लिनिक'}
                    </span>
                  </div>
                  <p className="text-xs font-extrabold text-advait-navy">
                    Multispeciality Dental Clinic & Implant Centre
                  </p>
                  <p className="text-[11px] text-advait-blue font-semibold mt-0.5 italic">
                    "Empathy. Expertise. Excellence."
                  </p>
                </div>

                {/* Navigation Links */}
                <nav className="space-y-1.5" aria-label="Mobile Navigation">
                  {primaryNavLinks.map((link) => {
                    const isActive = activeSection === link.id;
                    return (
                      <button
                        key={link.id}
                        onClick={() => scrollTo(link.id)}
                        className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-bold flex items-center justify-between transition-all active:scale-[0.99] group ${
                          isActive
                            ? 'bg-gradient-to-r from-[#0757C9] to-[#082B63] text-white shadow-md'
                            : 'bg-gradient-to-r from-white via-white to-[#F4F9FF] text-advait-navy hover:text-advait-blue hover:from-white hover:to-blue-50/80 border border-slate-200/80 hover:border-advait-blue/30 shadow-2xs'
                        }`}
                      >
                        <span>{currentLang === 'en' ? link.labelEn : link.labelMr}</span>
                        <ChevronRight
                          className={`w-4 h-4 transition-transform ${
                            isActive ? 'text-white translate-x-0.5' : 'text-advait-blue/60 group-hover:text-advait-blue group-hover:translate-x-0.5'
                          }`}
                        />
                      </button>
                    );
                  })}
                </nav>
              </div>

              {/* Action CTAs inside Mobile Drawer */}
              <div className="mt-4 pt-3 border-t border-slate-200/70 space-y-2 pb-2">
                <a
                  href={`tel:${PRIMARY_PHONE}`}
                  className="bg-gradient-to-r from-blue-50/90 via-white to-blue-50/60 hover:from-blue-100 hover:to-white border border-blue-200/90 w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-xs font-bold text-advait-navy transition-all shadow-2xs active:scale-[0.98]"
                >
                  <span className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-advait-blue" />
                    <span>Dr. Lilesh Shinde</span>
                  </span>
                  <span className="text-advait-blue font-bold">{DISPLAY_PRIMARY_PHONE}</span>
                </a>

                <a
                  href={`tel:${SECONDARY_PHONE}`}
                  className="bg-gradient-to-r from-teal-50/90 via-white to-teal-50/60 hover:from-teal-100 hover:to-white border border-teal-200/90 w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-xs font-bold text-advait-navy transition-all shadow-2xs active:scale-[0.98]"
                >
                  <span className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-advait-teal" />
                    <span>Dr. Mayuree Shinde</span>
                  </span>
                  <span className="text-advait-teal font-bold">{DISPLAY_SECONDARY_PHONE}</span>
                </a>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAppointmentModal();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-advait-blue to-advait-navy hover:from-advait-blue-dark hover:to-advait-navy text-white text-sm font-bold shadow-lg shadow-advait-blue/20 transition-all active:scale-[0.98]"
                >
                  <Calendar className="w-4 h-4" />
                  <span>{currentLang === 'en' ? 'Book an Appointment' : 'अपॉइंटमेंट बुक करा'}</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};
