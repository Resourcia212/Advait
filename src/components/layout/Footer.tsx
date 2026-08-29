import React from 'react';
import { Phone, Mail, ShieldCheck } from 'lucide-react';
import { Language } from '../../types';
import {
  CLINIC_NAME,
  CLINIC_NAME_MARATHI,
  CLINIC_TAGLINE,
  CLINIC_TAGLINE_MARATHI,
  CLINIC_LOCATIONS,
  PRIMARY_PHONE,
  SECONDARY_PHONE,
  DISPLAY_PRIMARY_PHONE,
  DISPLAY_SECONDARY_PHONE,
  CLINIC_EMAIL,
  DOCTOR_INFO,
  DOCTOR_MAYUREE_INFO
} from '../../data/clinicInfo';
import { LegalModalType } from '../common/LegalModal';

interface FooterProps {
  currentLang: Language;
  onOpenLegalModal: (type: LegalModalType) => void;
  onOpenAppointmentModal: () => void;
  onNavigateToSection?: (id: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  currentLang,
  onOpenLegalModal,
  onOpenAppointmentModal,
  onNavigateToSection,
}) => {
  const scrollTo = (id: string) => {
    if (onNavigateToSection) {
      onNavigateToSection(id);
    } else {
      const el = document.getElementById(id);
      if (el) {
        const navOffset = 85;
        const elementPosition = el.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }
  };

  const navLinks = [
    { id: 'home', labelEn: 'Home', labelMr: 'मुख्यपृष्ठ' },
    { id: 'about', labelEn: 'About Advait', labelMr: 'क्लिनिक माहिती' },
    { id: 'specializations', labelEn: 'Specializations', labelMr: 'विशेष तज्ज्ञता' },
    { id: 'services', labelEn: 'Dental Services', labelMr: 'सर्व दंत उपचार' },
    { id: 'gallery', labelEn: 'Gallery', labelMr: 'दालन' },
    { id: 'locations', labelEn: 'Clinic Locations', labelMr: 'शाखा पत्ते' },
    { id: 'contact', labelEn: 'Contact Us', labelMr: 'संपर्क' },
  ];

  return (
    <footer className="bg-[#082B63] text-white pt-16 pb-8 border-t border-advait-border/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Doctor Credentials (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-white p-3 sm:p-3.5 rounded-2xl inline-block shadow-sm">
              <img
                src="./assets/footer-logo.png"
                alt="Dr. Shinde's Advait Multispeciality Dental Clinic and Implant Centre"
                className="h-12 sm:h-14 w-auto object-contain max-w-full"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = './assets/logo.png';
                }}
              />
            </div>

            <div className="space-y-1">
              <h3 className="text-base font-bold text-white">
                {currentLang === 'en' ? CLINIC_NAME : CLINIC_NAME_MARATHI}
              </h3>
              <p className="text-xs font-semibold text-advait-teal-light">
                "{currentLang === 'en' ? CLINIC_TAGLINE : CLINIC_TAGLINE_MARATHI}"
              </p>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              {currentLang === 'en'
                ? 'Equipped with state-of-the-art equipment and highly skilled dentists committed to world-class quality dental services under one roof in Nashik.'
                : 'अत्याधुनिक उपकरणे आणि निष्णात तज्ज्ञ डॉक्टरांसह सर्वसमावेशक दंत उपचार एकाच छताखाली.'}
            </p>

            <div className="pt-2 space-y-2 border-t border-white/10 text-xs">
              <div>
                <div className="flex items-center gap-1.5 text-white font-bold">
                  <ShieldCheck className="w-3.5 h-3.5 text-advait-green shrink-0" />
                  <span>{DOCTOR_INFO.name}</span>
                </div>
                <p className="text-[11px] text-advait-teal-light pl-5">
                  M.D.S., B.D.S. (MUHS) Nashik • Reg. {DOCTOR_INFO.registrationNo}
                </p>
              </div>

              <div>
                <div className="flex items-center gap-1.5 text-white font-bold">
                  <ShieldCheck className="w-3.5 h-3.5 text-advait-teal shrink-0" />
                  <span>{DOCTOR_MAYUREE_INFO.name}</span>
                </div>
                <p className="text-[11px] text-advait-teal-light pl-5">
                  {DOCTOR_MAYUREE_INFO.degrees} • Reg. {DOCTOR_MAYUREE_INFO.registrationNo}
                </p>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-advait-teal-light">
              {currentLang === 'en' ? 'Quick Links' : 'महत्त्वाच्या लिंक्स'}
            </h4>
            <div className="flex flex-col gap-1.5 text-xs text-slate-300">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="text-left hover:text-white hover:translate-x-1 transition-all duration-200 py-0.5"
                >
                  {currentLang === 'en' ? link.labelEn : link.labelMr}
                </button>
              ))}
            </div>
          </div>

          {/* Col 3: Clinic Locations (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-advait-teal-light">
              {currentLang === 'en' ? 'Our Nashik Locations' : 'आमच्या शाखा'}
            </h4>
            <div className="space-y-3 text-xs text-slate-300 leading-snug">
              {CLINIC_LOCATIONS.map((loc) => (
                <a
                  key={loc.id}
                  href={loc.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white/5 hover:bg-white/10 rounded-xl p-3 border border-white/5 hover:border-white/20 transition-all duration-200 space-y-1 group hover:-translate-y-0.5"
                  title="Click to view on Google Maps"
                >
                  <p className="font-bold text-white text-xs group-hover:text-advait-teal-light transition-colors flex items-center justify-between">
                    <span>{loc.name}</span>
                    <span className="text-[10px] opacity-70 group-hover:opacity-100">↗</span>
                  </p>
                  <p className="text-[11px] text-slate-300">
                    {loc.addressLine1} {loc.addressLine2} {loc.area}, {loc.city}
                  </p>
                </a>
              ))}
            </div>
          </div>

          {/* Col 4: Direct Contacts & Booking (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-advait-teal-light">
              {currentLang === 'en' ? 'Contact Details' : 'थेट संपर्क'}
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <a
                href={`tel:${PRIMARY_PHONE}`}
                className="flex items-center gap-2 hover:text-white hover:translate-x-0.5 transition-all duration-200 whitespace-nowrap"
                title="Call Dr. Lilesh A. Shinde"
              >
                <Phone className="w-3.5 h-3.5 text-advait-green shrink-0" />
                <span className="whitespace-nowrap">
                  <strong className="text-white font-semibold">Dr. Lilesh:</strong> {DISPLAY_PRIMARY_PHONE}
                </span>
              </a>
              <a
                href={`tel:${SECONDARY_PHONE}`}
                className="flex items-center gap-2 hover:text-white hover:translate-x-0.5 transition-all duration-200 whitespace-nowrap"
                title="Call Dr. Mayuree L. Shinde (Patil)"
              >
                <Phone className="w-3.5 h-3.5 text-advait-teal-light shrink-0" />
                <span className="whitespace-nowrap">
                  <strong className="text-white font-semibold">Dr. Mayuree:</strong> {DISPLAY_SECONDARY_PHONE}
                </span>
              </a>
              <a
                href={`mailto:${CLINIC_EMAIL}`}
                className="flex items-center gap-2 hover:text-white hover:translate-x-0.5 transition-all duration-200"
                title="Email Advait Dental Clinic"
              >
                <Mail className="w-3.5 h-3.5 text-advait-teal-light shrink-0" />
                <span className="truncate">{CLINIC_EMAIL}</span>
              </a>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenAppointmentModal}
                className="w-full py-2.5 px-3 rounded-xl bg-advait-blue hover:bg-advait-blue-light hover:shadow-md hover:-translate-y-0.5 text-white text-xs font-bold shadow-xs transition-all duration-200 active:scale-95 whitespace-nowrap"
              >
                {currentLang === 'en' ? 'Book Appointment' : 'वेळ निश्चित करा'}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Legal, Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} {CLINIC_NAME}. All rights reserved.</p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
            <button
              onClick={() => onOpenLegalModal('privacy')}
              className="hover:text-white transition-colors hover:underline"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={() => onOpenLegalModal('terms')}
              className="hover:text-white transition-colors hover:underline"
            >
              Terms of Service
            </button>
            <span>•</span>
            <button
              onClick={() => onOpenLegalModal('disclaimer')}
              className="hover:text-white transition-colors hover:underline text-amber-300 hover:text-amber-200"
            >
              Medical Disclaimer
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
