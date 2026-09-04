import React, { useEffect } from 'react';
import { X, CheckCircle2, Shield, Calendar, Phone, ArrowRight } from 'lucide-react';
import { Language, ServiceItem } from '../../types';
import { PRIMARY_PHONE, DISPLAY_PRIMARY_PHONE } from '../../data/clinicInfo';

interface ServiceModalProps {
  item: ServiceItem | null;
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
  onBookAppointment: (treatmentName: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  item,
  isOpen,
  onClose,
  currentLang,
  onBookAppointment,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !item) return null;

  const title = currentLang === 'en' ? item.name : item.nameMarathi;
  const description = item.fullDescription
    ? (currentLang === 'en' ? item.fullDescription.en : item.fullDescription.mr)
    : (currentLang === 'en' ? item.shortDescription.en : item.shortDescription.mr);

  const indications = currentLang === 'en' ? item.indications?.en : item.indications?.mr;
  const highlights = currentLang === 'en' ? item.keyHighlights?.en : item.keyHighlights?.mr;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
    >
      <div
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-advait-border shadow-2xl p-6 sm:p-8 space-y-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 pr-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[11px] font-bold bg-advait-blue-soft text-advait-blue border border-advait-blue/20 uppercase tracking-wider">
            <Shield className="w-3 h-3 text-advait-teal" />
            <span>{currentLang === 'en' ? 'Clinical Treatment Overview' : 'वैद्यकीय उपचार तपशील'}</span>
          </div>

          <h3 id="service-modal-title" className="text-xl sm:text-2xl font-extrabold text-advait-navy">
            {title}
          </h3>
        </div>

        {/* In-depth Description */}
        <div className="space-y-2">
          <h4 className="text-xs font-bold text-advait-navy uppercase tracking-wider">
            {currentLang === 'en' ? 'Description & Treatment Protocol' : 'उपचाराचा तपशील व पद्धत'}
          </h4>
          <p className="text-xs sm:text-sm text-advait-text-secondary leading-relaxed bg-advait-bg p-4 rounded-xl border border-advait-border/60">
            {description}
          </p>
        </div>

        {/* Indications & When Needed */}
        {indications && indications.length > 0 && (
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-advait-navy uppercase tracking-wider">
              {currentLang === 'en' ? 'Indications / When It Is Recommended' : 'हा उपचार केव्हा आवश्यक ठरतो?'}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {indications.map((ind, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-advait-navy font-medium">
                  <CheckCircle2 className="w-4 h-4 text-advait-teal shrink-0 mt-0.5" />
                  <span>{ind}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Key Highlights */}
        {highlights && highlights.length > 0 && (
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-advait-navy uppercase tracking-wider">
              {currentLang === 'en' ? 'Key Clinical Highlights' : 'मुख्य वैशिष्ट्ये'}
            </h4>
            <div className="flex flex-wrap gap-2">
              {highlights.map((high, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg bg-advait-teal-soft border border-advait-teal/20 text-xs font-semibold text-advait-teal"
                >
                  ✓ {high}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Footer Actions */}
        <div className="pt-4 border-t border-advait-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <a
            href={`tel:${PRIMARY_PHONE}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-50 text-advait-navy border border-advait-border text-xs font-semibold hover:bg-slate-100 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-advait-blue" />
            <span>{DISPLAY_PRIMARY_PHONE}</span>
          </a>

          <button
            onClick={() => {
              onClose();
              onBookAppointment(title);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-advait-blue text-white text-xs sm:text-sm font-semibold hover:bg-advait-blue-dark shadow-sm transition-all"
          >
            <Calendar className="w-4 h-4" />
            <span>{currentLang === 'en' ? 'Book Appointment for This' : 'या उपचारासाठी वेळ बुक करा'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
