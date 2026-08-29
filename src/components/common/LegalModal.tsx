import React, { useEffect } from 'react';
import { X, Shield, FileText, AlertCircle } from 'lucide-react';
import { Language } from '../../types';
import { CLINIC_NAME, CLINIC_EMAIL } from '../../data/clinicInfo';

export type LegalModalType = 'privacy' | 'terms' | 'disclaimer' | null;

interface LegalModalProps {
  type: LegalModalType;
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
}

export const LegalModal: React.FC<LegalModalProps> = ({
  type,
  isOpen,
  onClose,
  currentLang,
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

  if (!isOpen || !type) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto border border-advait-border shadow-2xl p-6 sm:p-8 space-y-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {type === 'privacy' && (
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-advait-blue">
              <Shield className="w-6 h-6" />
              <h3 className="text-xl font-bold text-advait-navy">
                {currentLang === 'en' ? 'Privacy Policy' : 'गोपनीयता धोरण'}
              </h3>
            </div>
            <div className="text-xs sm:text-sm text-advait-text-secondary leading-relaxed space-y-3">
              <p>
                <strong>{CLINIC_NAME}</strong> values and respects patient privacy. Any information submitted via our website appointment or contact forms (including patient names, contact numbers, and medical notes) is collected strictly for appointment coordination and clinical consultation purposes.
              </p>
              <p>
                We do not sell, rent, or distribute personal health information to third parties. All clinical discussions and health records remain confidential under standard medical and dental ethics guidelines.
              </p>
              <p>
                If you have questions regarding data privacy, please email us directly at <strong>{CLINIC_EMAIL}</strong>.
              </p>
            </div>
          </div>
        )}

        {type === 'terms' && (
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-advait-blue">
              <FileText className="w-6 h-6" />
              <h3 className="text-xl font-bold text-advait-navy">
                {currentLang === 'en' ? 'Terms of Service' : 'वापराच्या अटी'}
              </h3>
            </div>
            <div className="text-xs sm:text-sm text-advait-text-secondary leading-relaxed space-y-3">
              <p>
                The information provided on this website is for general educational and informational purposes regarding dental treatments offered by {CLINIC_NAME}.
              </p>
              <p>
                Online appointment submissions represent appointment requests and are confirmed only upon direct communication with our clinic reception desk.
              </p>
              <p>
                Treatment plans, procedural suitability, and clinical outcomes vary based on individualized diagnostics, clinical examinations, and patient health history.
              </p>
            </div>
          </div>
        )}

        {type === 'disclaimer' && (
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-amber-600">
              <AlertCircle className="w-6 h-6" />
              <h3 className="text-xl font-bold text-advait-navy">
                {currentLang === 'en' ? 'Medical & Dental Disclaimer' : 'वैद्यकीय अस्वीकरण'}
              </h3>
            </div>
            <div className="text-xs sm:text-sm text-advait-text-secondary leading-relaxed space-y-3">
              <p>
                The content on this website does not substitute for professional in-person medical or dental diagnosis, advice, or treatment. Always seek the advice of a qualified dental specialist with any questions regarding a dental condition.
              </p>
              <p>
                In the event of an acute dental trauma, severe hemorrhage, or emergency, please contact our emergency phone line or visit the nearest healthcare emergency department immediately.
              </p>
            </div>
          </div>
        )}

        <div className="pt-4 border-t border-advait-border flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-advait-blue text-white text-xs font-bold hover:bg-advait-blue-dark transition-colors"
          >
            {currentLang === 'en' ? 'Close' : 'बंद करा'}
          </button>
        </div>
      </div>
    </div>
  );
};
