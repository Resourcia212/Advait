import React from 'react';
import {
  ShieldCheck,
  UserCheck,
  Sparkles,
  Layers,
  Activity,
  Hammer,
  Stethoscope,
  Wrench,
  ArrowRight
} from 'lucide-react';
import { Language, SpecializationCardData } from '../../types';
import { SPECIALIZATIONS_DATA } from '../../data/specializations';

interface SpecializationsSectionProps {
  currentLang: Language;
  onSelectSpecialization: (spec: SpecializationCardData) => void;
  onOpenAppointmentModal: (serviceName?: string) => void;
}

export const SpecializationsSection: React.FC<SpecializationsSectionProps> = ({
  currentLang,
  onSelectSpecialization,
}) => {
  const getIcon = (iconName: string) => {
    const props = { className: "w-5 h-5 text-advait-blue" };
    switch (iconName) {
      case 'ShieldCheck': return <ShieldCheck {...props} />;
      case 'UserCheck': return <UserCheck {...props} />;
      case 'Sparkles': return <Sparkles {...props} />;
      case 'Layers': return <Layers {...props} />;
      case 'Activity': return <Activity {...props} />;
      case 'Hammer': return <Hammer {...props} />;
      case 'Stethoscope': return <Stethoscope {...props} />;
      case 'Wrench': return <Wrench {...props} />;
      default: return <ShieldCheck {...props} />;
    }
  };

  return (
    <section id="specializations" className="py-14 sm:py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-advait-blue-soft border border-advait-blue/20 text-advait-blue text-[11px] font-bold uppercase tracking-wider">
            <Sparkles className="w-3 h-3 text-advait-teal" />
            <span>{currentLang === 'en' ? 'CLINICAL SPECIALTIES' : 'विशेष दंतचिकित्सा'}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-advait-navy tracking-tight">
            {currentLang === 'en' ? (
              <>
                Specialized <span className="gradient-text-blue">Prosthodontic & Implant</span> Care
              </>
            ) : (
              <>
                विशेष <span className="gradient-text-blue">प्रोस्थोडॉन्टिक्स व दंत रोपण</span>
              </>
            )}
          </h2>

          <p className="text-xs sm:text-sm text-advait-text-secondary">
            {currentLang === 'en'
              ? 'Comprehensive restorative, prosthetic, and implant dentistry under M.D.S. specialists.'
              : 'M.D.S. तज्ज्ञ डॉक्टरांच्या मार्गदर्शनाखाली आधुनिक प्रोस्थोडॉन्टिक्स व इम्प्लांट्सचे उपचार.'}
          </p>
        </div>

        {/* Compact 8-Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {SPECIALIZATIONS_DATA.map((spec) => (
            <div
              key={spec.id}
              onClick={() => onSelectSpecialization(spec)}
              className="bg-[#F8FBFF] hover:bg-white rounded-2xl p-5 border border-advait-border hover:border-advait-blue/50 shadow-xs hover:shadow-card hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group cursor-pointer relative overflow-hidden"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-gradient-to-r group-hover:from-advait-blue group-hover:to-advait-teal transition-all duration-300" />

              <div className="space-y-3">
                {/* Icon & Badge Row */}
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center border border-advait-border group-hover:border-advait-blue/40 group-hover:bg-advait-blue-soft/60 group-hover:scale-110 transition-all duration-300 shadow-xs">
                    {getIcon(spec.iconName)}
                  </div>

                  {spec.badge && (
                    <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-advait-teal-soft text-advait-teal border border-advait-teal/20 group-hover:bg-advait-teal group-hover:text-white transition-colors duration-300">
                      {spec.badge}
                    </span>
                  )}
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h3 className="text-sm sm:text-[15px] font-bold text-advait-navy group-hover:text-advait-blue transition-colors duration-200 leading-snug">
                    {currentLang === 'en' ? spec.title : spec.titleMarathi}
                  </h3>
                  <span className="text-[11px] font-medium text-advait-teal block mt-0.5">
                    {spec.subtitle}
                  </span>
                </div>

                {/* Short 2-line Description */}
                <p className="text-xs text-advait-text-secondary leading-relaxed line-clamp-2">
                  {currentLang === 'en' ? spec.description.en : spec.description.mr}
                </p>
              </div>

              {/* Action Trigger */}
              <div className="pt-3 mt-3 border-t border-advait-border/60 flex items-center justify-between">
                <span className="text-xs font-bold text-advait-blue group-hover:text-advait-blue-dark flex items-center gap-1">
                  <span>{currentLang === 'en' ? 'Learn More' : 'अधिक माहिती'}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
