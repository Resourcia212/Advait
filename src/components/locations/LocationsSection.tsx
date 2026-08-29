import React, { useState } from 'react';
import { MapPin, Phone, Mail, Navigation, Copy, Check, ExternalLink, Calendar } from 'lucide-react';
import { Language } from '../../types';
import { CLINIC_LOCATIONS, DISPLAY_PRIMARY_PHONE, DISPLAY_SECONDARY_PHONE, PRIMARY_PHONE, SECONDARY_PHONE, CLINIC_EMAIL } from '../../data/clinicInfo';

interface LocationsSectionProps {
  currentLang: Language;
  onOpenAppointmentModal: (clinicLocation?: string) => void;
}

export const LocationsSection: React.FC<LocationsSectionProps> = ({
  currentLang,
  onOpenAppointmentModal,
}) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopyAddress = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <section id="locations" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-advait-blue-soft border border-advait-blue/20 text-advait-blue text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5 text-advait-teal" />
            <span>{currentLang === 'en' ? 'OUR TWO NASHIK LOCATIONS' : 'आमच्या नाशिकमधील २ शाखा'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-advait-navy tracking-tight">
            {currentLang === 'en' ? (
              <>
                Visit Our <span className="gradient-text-blue">Modern Dental Clinics</span>
              </>
            ) : (
              <>
                आमच्या <span className="gradient-text-blue">क्लिनिकला भेट द्या</span>
              </>
            )}
          </h2>

          <p className="text-sm sm:text-base text-advait-text-secondary">
            {currentLang === 'en'
              ? 'Conveniently located in Indira Nagar and Panchavati to provide quality dental care across Nashik.'
              : 'इंदिरा नगर आणि पंचवटी येथील सोयीस्कर ठिकाणी सर्व आधुनिक उपकरणांसह क्लिनिक्स उपलब्ध.'}
          </p>
        </div>

        {/* 2 Locations Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {CLINIC_LOCATIONS.map((loc) => {
            const fullAddress = `${loc.name}, ${loc.addressLine1} ${loc.addressLine2} ${loc.landmark ? loc.landmark + ', ' : ''}${loc.area}, ${loc.city}${loc.pincode ? ' - ' + loc.pincode : ''}`;

            return (
              <div
                key={loc.id}
                className="bg-advait-bg rounded-3xl p-6 sm:p-8 border border-advait-border hover:border-advait-blue/50 shadow-card hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between space-y-6 relative group"
              >
                <div className="space-y-4">
                  {/* Top Badge */}
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-advait-blue text-white shadow-xs group-hover:scale-105 transition-transform duration-200">
                      {currentLang === 'en' ? `Location 0${loc.clinicNumber}` : `शाखा ०${loc.clinicNumber}`}
                    </span>
                    {loc.badge && (
                      <span className="text-xs font-bold text-advait-teal">
                        {loc.badge}
                      </span>
                    )}
                  </div>

                  {/* Clinic Name */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-advait-navy group-hover:text-advait-blue transition-colors duration-200">
                      {loc.name}
                    </h3>
                    <p className="text-xs font-semibold text-advait-teal mt-0.5">
                      {loc.area}, {loc.city}
                    </p>
                  </div>

                  {/* Address Box */}
                  <div className="bg-white rounded-2xl p-4 border border-advait-border/80 space-y-2 group-hover:border-advait-blue/30 transition-colors duration-200">
                    <div className="flex items-start gap-2.5">
                      <MapPin className="w-5 h-5 text-advait-blue shrink-0 mt-0.5" />
                      <div className="text-xs sm:text-sm text-advait-navy leading-relaxed">
                        <p className="font-semibold">{loc.addressLine1}</p>
                        <p>{loc.addressLine2}</p>
                        {loc.landmark && <p className="text-advait-text-secondary">{loc.landmark}</p>}
                        <p className="font-bold text-advait-blue">
                          {loc.area}, {loc.city} {loc.pincode && `- ${loc.pincode}`}
                        </p>
                      </div>
                    </div>

                    <div className="pt-2 flex items-center justify-end">
                      <button
                        onClick={() => handleCopyAddress(loc.id, fullAddress)}
                        className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-500 hover:text-advait-blue transition-colors hover:scale-105"
                        title="Copy full address"
                      >
                        {copiedId === loc.id ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                            <span className="text-emerald-600">Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copy Address</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Contact Numbers for this location */}
                  <div className="space-y-2 pt-1 text-xs text-advait-navy font-medium">
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-advait-teal" />
                      <span>Appointments: </span>
                      <a href={`tel:${PRIMARY_PHONE}`} className="font-bold hover:text-advait-blue transition-colors">
                        {DISPLAY_PRIMARY_PHONE}
                      </a>
                      <span>, </span>
                      <a href={`tel:${SECONDARY_PHONE}`} className="font-bold hover:text-advait-blue transition-colors">
                        {DISPLAY_SECONDARY_PHONE}
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-slate-400" />
                      <span>{CLINIC_EMAIL}</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="pt-4 border-t border-advait-border grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href={loc.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-white border border-advait-border text-xs font-bold text-advait-navy hover:bg-slate-50 hover:border-advait-blue/40 hover:shadow-xs hover:scale-[1.02] transition-all duration-200 shadow-xs active:scale-95"
                  >
                    <Navigation className="w-3.5 h-3.5 text-advait-blue" />
                    <span>{currentLang === 'en' ? 'Get Directions' : 'नकाशा / मार्ग पहा'}</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>

                  <button
                    onClick={() => onOpenAppointmentModal(loc.name)}
                    className="inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-advait-blue text-white text-xs font-bold hover:bg-advait-blue-dark hover:shadow-md hover:-translate-y-0.5 hover:scale-[1.02] transition-all duration-200 shadow-xs active:scale-95"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{currentLang === 'en' ? 'Book at this Branch' : 'या शाखेसाठी वेळ घ्या'}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
