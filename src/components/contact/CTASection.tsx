import React from 'react';
import { Calendar, Phone, ArrowRight, Sparkles } from 'lucide-react';
import { Language } from '../../types';
import { PRIMARY_PHONE, CLINIC_NAME, CLINIC_NAME_MARATHI, CLINIC_TAGLINE, CLINIC_TAGLINE_MARATHI } from '../../data/clinicInfo';

interface CTASectionProps {
  currentLang: Language;
  onOpenAppointmentModal: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({
  currentLang,
  onOpenAppointmentModal,
}) => {
  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-r from-[#082B63] via-[#0757C9] to-[#079F9A] text-white">
      {/* Abstract decorative circles & glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:28px_28px] opacity-10 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-advait-green" />
          <span>"{currentLang === 'en' ? CLINIC_TAGLINE : CLINIC_TAGLINE_MARATHI}"</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          {currentLang === 'en'
            ? 'Take the First Step Toward Better Dental Care'
            : 'निरोगी व सुंदर हास्यासाठी आजच पहिले पाऊल टाका'}
        </h2>

        <p className="text-sm sm:text-base text-blue-100 max-w-2xl mx-auto leading-relaxed">
          {currentLang === 'en'
            ? `Book an appointment with ${CLINIC_NAME}. Personalized specialist treatment, modern technology, and compassionate care in Nashik.`
            : `${CLINIC_NAME_MARATHI} मध्ये आपली भेट निश्चित करा. आधुनिक तंत्रज्ञान आणि तज्ज्ञ डॉक्टरांचे विश्वासार्ह उपचार.`}
        </p>

        {/* Action Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenAppointmentModal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-advait-navy hover:bg-slate-50 font-bold text-sm shadow-xl hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.02] transition-all duration-200 active:scale-95 group"
          >
            <Calendar className="w-4 h-4 text-advait-blue" />
            <span>{currentLang === 'en' ? 'Book an Appointment' : 'अपॉइंटमेंट बुक करा'}</span>
            <ArrowRight className="w-4 h-4 text-advait-blue group-hover:translate-x-1.5 transition-transform duration-200" />
          </button>

          <a
            href={`tel:${PRIMARY_PHONE}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-black/25 hover:bg-black/40 text-white border border-white/30 hover:border-white/60 font-bold text-sm hover:-translate-y-1 hover:scale-[1.02] transition-all duration-200 active:scale-95"
          >
            <Phone className="w-4 h-4 text-advait-green" />
            <span>{currentLang === 'en' ? `Call ${PRIMARY_PHONE}` : `कॉल करा ${PRIMARY_PHONE}`}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
