import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar, Globe, ChevronRight } from 'lucide-react';
import { Language } from '../../types';
import { PRIMARY_PHONE, DISPLAY_PRIMARY_PHONE } from '../../data/clinicInfo';

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
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-3 sm:px-6 lg:px-8 pt-3 sm:pt-4 pointer-events-none">
      <div
        className={`pointer-events-auto max-w-7xl mx-auto rounded-2xl sm:rounded-3xl transition-all duration-300 px-3.5 sm:px-5 py-2 sm:py-2.5 ${
          isScrolled ? 'glass-navbar-scrolled' : 'glass-navbar'
        }`}
      >
        <div className="flex items-center justify-between gap-3 sm:gap-4">
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
              <span className="text-xs sm:text-[13px] lg:text-sm font-extrabold tracking-tight text-advait-navy leading-none whitespace-nowrap">
                Dr. Shinde's Advait
              </span>
              <span className="text-[6px] min-[360px]:text-[6.8px] sm:text-[7.5px] lg:text-[8px] font-bold text-advait-teal tracking-normal sm:tracking-wider uppercase mt-0.5 leading-none whitespace-nowrap">
                Multispeciality Dental Clinic & Implant Centre
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links within Glass Pill Track */}
          <nav
            className="hidden xl:flex items-center gap-0.5 bg-white/40 backdrop-blur-md rounded-2xl p-0.5 border border-white/60 shadow-2xs"
            aria-label="Main Navigation"
          >
            {primaryNavLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`px-2.5 lg:px-3 py-1 rounded-xl text-[11.5px] lg:text-xs font-semibold transition-all duration-200 ${
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

          {/* Action CTAs: Language Toggle, Call, and Book Appointment */}
          <div className="hidden sm:flex items-center gap-1.5 lg:gap-2 shrink-0">
            {/* Language Switch Toggle */}
            <button
              onClick={() => onToggleLang(currentLang === 'en' ? 'mr' : 'en')}
              className="glass-pill flex items-center gap-1 px-2 lg:px-2.5 py-1.5 rounded-xl hover:bg-white/90 text-[11px] lg:text-xs font-semibold text-advait-navy transition-all duration-200 hover:scale-105 active:scale-95 shadow-2xs"
              title="Toggle Language / भाषा बदला"
              aria-label="Toggle language between English and Marathi"
            >
              <Globe className="w-3.5 h-3.5 text-advait-teal" />
              <span className={currentLang === 'en' ? 'font-bold text-advait-blue' : 'text-slate-500'}>EN</span>
              <span className="text-slate-300">|</span>
              <span className={currentLang === 'mr' ? 'font-bold text-advait-blue' : 'text-slate-500'}>मराठी</span>
            </button>

            {/* Quick Call Button in Glass Pill */}
            <a
              href={`tel:${PRIMARY_PHONE}`}
              className="glass-pill flex items-center gap-1.5 px-2.5 lg:px-3 py-1.5 rounded-xl text-[11px] lg:text-xs font-bold text-advait-navy hover:bg-white/90 hover:text-advait-blue transition-all duration-200 hover:scale-105 active:scale-95 shadow-2xs"
              aria-label={`Call Advait Dental Clinic at ${DISPLAY_PRIMARY_PHONE}`}
            >
              <Phone className="w-3.5 h-3.5 text-advait-blue" />
              <span>{DISPLAY_PRIMARY_PHONE}</span>
            </a>

            {/* Book Appointment CTA Button */}
            <button
              onClick={() => onOpenAppointmentModal()}
              className="flex items-center gap-1.5 px-3 lg:px-3.5 py-1.5 rounded-xl text-[11px] lg:text-xs font-bold text-white bg-advait-blue hover:bg-advait-blue-dark shadow-md hover:shadow-lg transition-all duration-200 hover:scale-[1.02] active:scale-95"
            >
              <Calendar className="w-3.5 h-3.5" />
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
              className="glass-pill p-2 rounded-xl text-advait-navy hover:bg-white/90 focus:outline-none transition-all shadow-2xs"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-advait-navy" /> : <Menu className="w-5 h-5 text-advait-navy" />}
            </button>
          </div>
        </div>

        {/* Mobile Frosted Glass Drawer Navigation */}
        {mobileMenuOpen && (
          <div className="xl:hidden mt-3 pt-3 border-t border-white/80 animate-fade-in">
            <div className="space-y-2">
              {/* Clinic Info Banner in Drawer */}
              <div className="px-4 py-3 bg-white/60 backdrop-blur-md rounded-2xl mb-3 border border-white/80 shadow-xs">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-advait-teal animate-pulse" />
                  <span className="text-[10px] font-black text-advait-teal uppercase tracking-wider">
                    {currentLang === 'en' ? "Dr. Shinde's Advait Dental Clinic" : 'डॉ. शिंदे यांचे अद्वैत डेंटल क्लिनिक'}
                  </span>
                </div>
                <p className="text-xs font-bold text-advait-navy">
                  Multispeciality Dental Clinic & Implant Centre
                </p>
                <p className="text-[11px] text-advait-text-secondary mt-0.5 italic">
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
                      className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-bold flex items-center justify-between transition-all active:scale-[0.99] ${
                        isActive
                          ? 'bg-advait-blue text-white shadow-sm'
                          : 'text-advait-navy hover:bg-white/80 hover:text-advait-blue bg-white/50 border border-white/70 shadow-2xs'
                      }`}
                    >
                      <span>{currentLang === 'en' ? link.labelEn : link.labelMr}</span>
                      <ChevronRight
                        className={`w-4 h-4 transition-transform ${
                          isActive ? 'text-white translate-x-0.5' : 'text-slate-400'
                        }`}
                      />
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Action CTAs inside Mobile Drawer */}
            <div className="mt-4 pt-3 border-t border-white/80 space-y-2 pb-2">
              <a
                href={`tel:${PRIMARY_PHONE}`}
                className="glass-pill w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-bold text-advait-navy hover:bg-white/90 transition-all shadow-xs active:scale-[0.98]"
              >
                <Phone className="w-4 h-4 text-advait-blue" />
                <span>Call: {DISPLAY_PRIMARY_PHONE}</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAppointmentModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-advait-blue hover:bg-advait-blue-dark text-white text-sm font-bold shadow-md hover:shadow-lg transition-all active:scale-[0.98]"
              >
                <Calendar className="w-4 h-4" />
                <span>{currentLang === 'en' ? 'Book an Appointment' : 'अपॉइंटमेंट बुक करा'}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
