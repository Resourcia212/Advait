import React from 'react';
import { Award, ShieldCheck, HeartHandshake, Sparkles, ArrowRight, UserCheck } from 'lucide-react';
import { Language } from '../../types';
import {
  CLINIC_NAME,
  CLINIC_NAME_MARATHI,
  CLINIC_TAGLINE,
  CLINIC_TAGLINE_MARATHI,
  DOCTOR_INFO,
  DOCTOR_MAYUREE_INFO,
} from '../../data/clinicInfo';

interface AboutSectionProps {
  currentLang: Language;
  onExploreSpecializations: () => void;
  onOpenAppointmentModal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  currentLang,
  onExploreSpecializations,
  onOpenAppointmentModal,
}) => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-white relative overflow-hidden">
      {/* Background soft ambient accents */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-advait-blue-soft/50 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-advait-teal-soft/50 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Showcase featuring both Lead Doctors */}
          <div className="lg:col-span-6 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Doctor 1: Dr. Lilesh A. Shinde */}
              <div className="rounded-2xl overflow-hidden bg-advait-bg border border-advait-border shadow-card relative group">
                <img
                  src={DOCTOR_INFO.image}
                  alt="Dr. Lilesh A. Shinde"
                  className="w-full h-64 sm:h-72 object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-advait-navy/95 via-transparent to-transparent flex flex-col justify-end p-4 text-white">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-advait-teal-light block">
                    Reg. No. {DOCTOR_INFO.registrationNo}
                  </span>
                  <h4 className="text-sm sm:text-base font-bold text-white leading-tight mt-0.5">
                    {DOCTOR_INFO.name}
                  </h4>
                  <p className="text-[11px] text-advait-teal-light font-semibold mt-0.5">
                    M.D.S., B.D.S. (MUHS) Nashik
                  </p>
                  <p className="text-[10px] text-slate-200 line-clamp-1">
                    {currentLang === 'en' ? DOCTOR_INFO.specialization : DOCTOR_INFO.specializationMarathi}
                  </p>
                </div>
              </div>

              {/* Doctor 2: Dr. Mayuree L. Shinde (Patil) */}
              <div className="rounded-2xl overflow-hidden bg-advait-bg border border-advait-border shadow-card relative group">
                <img
                  src={DOCTOR_MAYUREE_INFO.image}
                  alt="Dr. Mayuree L. Shinde (Patil)"
                  className="w-full h-64 sm:h-72 object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-advait-navy/95 via-transparent to-transparent flex flex-col justify-end p-4 text-white">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-advait-teal-light block">
                    Reg. No. {DOCTOR_MAYUREE_INFO.registrationNo}
                  </span>
                  <h4 className="text-sm sm:text-base font-bold text-white leading-tight mt-0.5">
                    {DOCTOR_MAYUREE_INFO.name}
                  </h4>
                  <p className="text-[11px] text-advait-teal-light font-semibold mt-0.5">
                    {DOCTOR_MAYUREE_INFO.degrees}
                  </p>
                  <p className="text-[10px] text-slate-200 line-clamp-1">
                    {currentLang === 'en' ? DOCTOR_MAYUREE_INFO.specialization : DOCTOR_MAYUREE_INFO.specializationMarathi}
                  </p>
                </div>
              </div>
            </div>

            {/* Credibility Banner Below Images */}
            <div className="bg-advait-blue-soft rounded-xl p-4 border border-advait-blue/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-advait-blue flex items-center justify-center text-white shrink-0 shadow-xs">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="text-xs font-bold text-advait-navy uppercase tracking-wider">
                    {currentLang === 'en' ? 'Core Philosophy' : 'क्लिनिकचे ब्रीदवाक्य'}
                  </h5>
                  <p className="text-sm font-extrabold text-advait-blue">
                    "{currentLang === 'en' ? CLINIC_TAGLINE : CLINIC_TAGLINE_MARATHI}"
                  </p>
                </div>
              </div>

              <div className="text-xs text-advait-text-secondary font-medium">
                <span className="text-advait-navy font-bold">Maharashtra University of Health Sciences</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Content Based on Brochure */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-advait-teal-soft text-advait-teal text-xs font-bold uppercase tracking-wider border border-advait-teal/20">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{currentLang === 'en' ? 'ABOUT ADVAIT CLINIC' : 'अद्वैत क्लिनिकबद्दल'}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-advait-navy tracking-tight leading-tight">
                {currentLang === 'en' ? (
                  <>
                    Comprehensive Dental Care <br />
                    <span className="gradient-text-blue">Delivered with Empathy & Precision.</span>
                  </>
                ) : (
                  <>
                    अचूक व दर्जेदार दंतोपचार <br />
                    <span className="gradient-text-blue">सहानुभूती आणि विश्वासासह.</span>
                  </>
                )}
              </h2>
            </div>

            {/* Core Narrative */}
            <div className="space-y-4 text-xs sm:text-sm text-advait-text-secondary leading-relaxed">
              <p>
                {currentLang === 'en' ? (
                  <>
                    <strong className="text-advait-navy font-bold">{CLINIC_NAME}</strong> is committed to delivering state-of-the-art dental solutions under one roof. Led by <strong className="text-advait-navy font-bold">Dr. Lilesh A. Shinde</strong> (M.D.S., B.D.S. MUHS Nashik, Reg. No. A-49871) and <strong className="text-advait-navy font-bold">Dr. Mayuree L. Shinde (Patil)</strong> (B.D.S. MUHS Pune, Reg. No. A-55915).
                  </>
                ) : (
                  <>
                    <strong className="text-advait-navy font-bold">{CLINIC_NAME_MARATHI}</strong> हे नाशिकमधील अग्रगण्य दंत चिकित्सालय आहे. <strong className="text-advait-navy font-bold">डॉ. लिलेश ए. शिंदे</strong> (M.D.S., B.D.S. MUHS नाशिक, नोंदणी क्र. A-49871) आणि <strong className="text-advait-navy font-bold">डॉ. मयुरी एल. शिंदे (पाटील)</strong> (B.D.S. MUHS पुणे, नोंदणी क्र. A-55915) यांच्या मार्गदर्शनाखाली सर्व आधुनिक दंत उपचार एकाच छताखाली उपलब्ध आहेत.
                  </>
                )}
              </p>

              <p>
                {currentLang === 'en'
                  ? 'Our clinics in Indira Nagar and Panchavati are fully equipped with cutting-edge dental technology, computerized radiography, and stringent multi-tier sterilization protocols ensuring the highest clinical safety.'
                  : 'इंदिरा नगर आणि पंचवटी येथील आमच्या दोन्ही शाखांमध्ये अत्याधुनिक उपकरणे, अचूक निदान व्यवस्था आणि जागतिक दर्जाची निर्जंतुकीकरण मानके पाळली जातात.'}
              </p>
            </div>

            {/* 3 Value Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-advait-bg border border-advait-border hover:border-advait-blue/40 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group cursor-default">
                <div className="group-hover:scale-110 transition-transform duration-300">
                  <ShieldCheck className="w-5 h-5 text-advait-blue mb-1.5" />
                </div>
                <h4 className="text-xs font-bold text-advait-navy group-hover:text-advait-blue transition-colors duration-200">
                  {currentLang === 'en' ? 'Strict Sterilization' : 'कडक निर्जंतुकीकरण'}
                </h4>
                <p className="text-[11px] text-advait-text-secondary mt-0.5">
                  {currentLang === 'en' ? 'Hospital-grade safety' : 'जागतिक दर्जाची स्वच्छता'}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-advait-bg border border-advait-border hover:border-advait-teal/40 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group cursor-default">
                <div className="group-hover:scale-110 transition-transform duration-300">
                  <UserCheck className="w-5 h-5 text-advait-teal mb-1.5" />
                </div>
                <h4 className="text-xs font-bold text-advait-navy group-hover:text-advait-teal transition-colors duration-200">
                  {currentLang === 'en' ? 'M.D.S. & B.D.S. Experts' : 'निष्णात तज्ज्ञ डॉक्टर'}
                </h4>
                <p className="text-[11px] text-advait-text-secondary mt-0.5">
                  {currentLang === 'en' ? 'MUHS qualified specialists' : 'M.U.H.S. पदवीधारक'}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-advait-bg border border-advait-border hover:border-advait-green/40 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group cursor-default">
                <div className="group-hover:scale-110 transition-transform duration-300">
                  <HeartHandshake className="w-5 h-5 text-advait-green mb-1.5" />
                </div>
                <h4 className="text-xs font-bold text-advait-navy group-hover:text-advait-green transition-colors duration-200">
                  {currentLang === 'en' ? 'All Treatments' : 'सर्व दंत उपचार'}
                </h4>
                <p className="text-[11px] text-advait-text-secondary mt-0.5">
                  {currentLang === 'en' ? 'Under one single roof' : 'एकाच छताखाली उपलब्ध'}
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-3 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenAppointmentModal}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-advait-blue hover:bg-advait-blue-dark text-white font-bold text-xs shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 active:scale-95 group"
              >
                <span>{currentLang === 'en' ? 'Book Consultation' : 'तपासणीसाठी वेळ घ्या'}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onExploreSpecializations}
                className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl bg-white border border-advait-border hover:bg-advait-bg hover:border-advait-blue/30 text-advait-navy font-bold text-xs shadow-xs hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200 active:scale-95"
              >
                <span>{currentLang === 'en' ? 'View Specializations' : 'विशेष तज्ज्ञता पहा'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
