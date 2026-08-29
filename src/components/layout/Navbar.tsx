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
    { id: 'specializations', labelEn: 'Specializations', labelMr: 'विशेष तज्ज्ञता' },
    { id: 'services', labelEn: 'Services', labelMr: 'सर्व सेवा' },
    { id: 'gallery', labelEn: 'Gallery', labelMr: 'दालन' },
    { id: 'locations', labelEn: 'Locations', labelMr: 'शाखा' },
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-advait-border/80 py-2.5'
          : 'bg-white/90 backdrop-blur-sm border-b border-advait-border/40 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Logo & Clinic Branding */}
          <button
            onClick={() => scrollTo('home')}
            className="flex items-center gap-3 text-left shrink-0 group focus:outline-none"
            aria-label="Advait Dental Clinic Home"
          >
            <img
              src="./assets/logo-icon.jpg"
              alt="Advait Dental Clinic Emblem"
              className="h-10 w-10 sm:h-11 sm:w-11 object-contain rounded-xl p-0.5 bg-white border border-advait-border/80 shadow-xs transition-transform group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-extrabold tracking-tight text-advait-navy leading-none">
                ADVAIT
              </span>
              <span className="text-[10px] sm:text-[11px] font-bold text-advait-teal tracking-wide uppercase mt-1 leading-none">
                Dental & Implant Centre
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1" aria-label="Main Navigation">
            {primaryNavLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all relative ${
                    isActive
                      ? 'text-advait-blue bg-advait-blue-soft/80'
                      : 'text-advait-text-primary hover:text-advait-blue hover:bg-slate-50'
                  }`}
                >
                  {currentLang === 'en' ? link.labelEn : link.labelMr}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-advait-blue rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action CTAs: Language Toggle, Call, and Book Appointment */}
          <div className="hidden sm:flex items-center gap-2.5 shrink-0">
            {/* Language Switch Toggle */}
            <button
              onClick={() => onToggleLang(currentLang === 'en' ? 'mr' : 'en')}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-advait-border bg-slate-50 hover:bg-slate-100 hover:border-advait-blue/30 text-xs font-semibold text-advait-navy transition-all duration-200 hover:scale-[1.02] active:scale-95"
              title="Toggle Language / भाषा बदला"
              aria-label="Toggle language between English and Marathi"
            >
              <Globe className="w-3.5 h-3.5 text-advait-teal" />
              <span className={currentLang === 'en' ? 'font-bold text-advait-blue' : 'text-slate-500'}>EN</span>
              <span className="text-slate-300">|</span>
              <span className={currentLang === 'mr' ? 'font-bold text-advait-blue' : 'text-slate-500'}>मराठी</span>
            </button>

            {/* Quick Call Button */}
            <a
              href={`tel:${PRIMARY_PHONE}`}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-advait-navy bg-advait-blue-soft hover:bg-advait-blue/15 hover:border-advait-blue/40 transition-all duration-200 border border-advait-blue/20 hover:scale-[1.02] active:scale-95 shadow-xs"
              aria-label={`Call Advait Dental Clinic at ${DISPLAY_PRIMARY_PHONE}`}
            >
              <Phone className="w-3.5 h-3.5 text-advait-blue" />
              <span>{DISPLAY_PRIMARY_PHONE}</span>
            </a>

            {/* Book Appointment CTA Button */}
            <button
              onClick={() => onOpenAppointmentModal()}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-advait-blue hover:bg-advait-blue-dark shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 active:translate-y-0 active:scale-95"
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
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-advait-border bg-slate-50 hover:bg-slate-100 text-xs font-bold text-advait-navy transition-all"
              aria-label="Language Toggle"
            >
              <Globe className="w-3.5 h-3.5 text-advait-teal" />
              <span>{currentLang === 'en' ? 'मराठी' : 'EN'}</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-advait-navy hover:bg-slate-100 focus:outline-none transition-colors"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-advait-navy" /> : <Menu className="w-6 h-6 text-advait-navy" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Full-Screen Solid Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          className="xl:hidden absolute top-full left-0 right-0 w-full bg-white border-t border-advait-border shadow-2xl p-5 overflow-y-auto z-50 flex flex-col justify-between animate-fade-in"
          style={{ height: 'calc(100dvh - 100%)', maxHeight: 'calc(100vh - 100%)' }}
        >
          <div className="space-y-2">
            {/* Clinic Info Banner in Drawer */}
            <div className="px-4 py-3 bg-gradient-to-r from-advait-blue-soft via-advait-50 to-white rounded-2xl mb-3 border border-advait-blue/15 shadow-xs">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-advait-teal animate-pulse" />
                <span className="text-[10px] font-black text-advait-teal uppercase tracking-wider">
                  {currentLang === 'en' ? 'Advait Dental & Implant Centre' : 'अद्वैत डेंटल आणि इम्प्लांट सेंटर'}
                </span>
              </div>
              <p className="text-xs font-bold text-advait-navy">
                Dr. Shinde's Dental Multispeciality Clinic
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
                    className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold flex items-center justify-between transition-all active:scale-[0.99] ${
                      isActive
                        ? 'bg-advait-blue text-white shadow-sm'
                        : 'text-advait-navy hover:bg-advait-blue-soft/70 hover:text-advait-blue bg-slate-50/80 border border-slate-100'
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
          <div className="mt-6 pt-4 border-t border-slate-100 space-y-2.5 pb-6">
            <a
              href={`tel:${PRIMARY_PHONE}`}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-advait-blue/20 bg-advait-blue-soft text-sm font-bold text-advait-navy hover:bg-advait-blue/15 transition-all shadow-xs active:scale-[0.98]"
            >
              <Phone className="w-4 h-4 text-advait-blue" />
              <span>Call: {DISPLAY_PRIMARY_PHONE}</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAppointmentModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-advait-blue hover:bg-advait-blue-dark text-white text-sm font-bold shadow-md hover:shadow-lg transition-all active:scale-[0.98]"
            >
              <Calendar className="w-4 h-4" />
              <span>{currentLang === 'en' ? 'Book an Appointment' : 'अपॉइंटमेंट बुक करा'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
