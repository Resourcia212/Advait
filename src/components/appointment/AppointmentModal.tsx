import React, { useState, useEffect } from 'react';
import { X, Calendar, User, Phone, Mail, MapPin, Clock, FileText, ShieldCheck, Stethoscope } from 'lucide-react';
import { AppointmentFormData, Language } from '../../types';
import { DOCTOR_INFO, DOCTOR_MAYUREE_INFO } from '../../data/clinicInfo';
import { BookingConfirmation } from './BookingConfirmation';
import { redirectToDoctorWhatsApp } from '../../lib/whatsapp';
import { validateGenuineMobile, validatePatientName } from '../../lib/validation';

const ADVAIT_LOCATION_ADDRESS = "Advait Multi Speciality Clinic, Plot No. 20-A, Chandrabhaga, Opp. Shantidham Apt., Geetanjali Colony, Indira Nagar, Nashik - 422009";
const SHREE_RAM_LOCATION_ADDRESS = "Shree Ram Multi Speciality Clinic, Shop No. 01, Ground Floor, Near SBI Bank & Swagat Sweets, Jatra Hotel Chaufali, Adgaon Shivar, Panchavati, Nashik - 422003";

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
  initialServiceOrReason?: string;
  initialClinicLocation?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  currentLang,
  initialServiceOrReason = '',
  initialClinicLocation = '',
}) => {
  const isInitialMayuree =
    initialClinicLocation.includes('Shree Ram') ||
    initialClinicLocation.includes('Panchavati');

  const [formData, setFormData] = useState<AppointmentFormData>({
    fullName: '',
    phone: '',
    email: '',
    preferredDoctor: isInitialMayuree ? DOCTOR_MAYUREE_INFO.name : DOCTOR_INFO.name,
    preferredClinic: isInitialMayuree ? SHREE_RAM_LOCATION_ADDRESS : ADVAIT_LOCATION_ADDRESS,
    preferredDate: '',
    preferredTime: 'Morning (10:00 AM - 1:00 PM)',
    treatment: initialServiceOrReason || '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof AppointmentFormData, string>>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialServiceOrReason) {
      setFormData(prev => ({ ...prev, treatment: initialServiceOrReason }));
    }
    if (initialClinicLocation) {
      const isMayuree =
        initialClinicLocation.includes('Shree Ram') ||
        initialClinicLocation.includes('Panchavati');
      setFormData(prev => ({
        ...prev,
        preferredDoctor: isMayuree ? DOCTOR_MAYUREE_INFO.name : DOCTOR_INFO.name,
        preferredClinic: isMayuree ? SHREE_RAM_LOCATION_ADDRESS : ADVAIT_LOCATION_ADDRESS,
      }));
    }
  }, [initialServiceOrReason, initialClinicLocation]);

  const handleDoctorChange = (doctorName: string) => {
    const isMayuree = doctorName.includes('Mayuree');
    setFormData(prev => ({
      ...prev,
      preferredDoctor: isMayuree ? DOCTOR_MAYUREE_INFO.name : DOCTOR_INFO.name,
      preferredClinic: isMayuree ? SHREE_RAM_LOCATION_ADDRESS : ADVAIT_LOCATION_ADDRESS,
    }));
  };

  const handleClinicChange = (clinicAddress: string) => {
    const isMayuree =
      clinicAddress.includes('Shree Ram') || clinicAddress.includes('Panchavati');
    setFormData(prev => ({
      ...prev,
      preferredClinic: clinicAddress,
      preferredDoctor: isMayuree ? DOCTOR_MAYUREE_INFO.name : DOCTOR_INFO.name,
    }));
  };

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

  if (!isOpen) return null;

  const timeSlots = [
    { id: 'morning', labelEn: 'Morning (10:00 AM - 1:00 PM)', labelMr: 'सकाळ (१०:०० ते १:००)' },
    { id: 'afternoon', labelEn: 'Afternoon (1:00 PM - 5:00 PM)', labelMr: 'दुपार (१:०० ते ५:००)' },
    { id: 'evening', labelEn: 'Evening (5:00 PM - 8:30 PM)', labelMr: 'संध्याकाळ (५:०० ते ८:३०)' },
  ];

  const validate = (): boolean => {
    const errs: Partial<Record<keyof AppointmentFormData, string>> = {};

    // Validate genuine patient name
    const nameCheck = validatePatientName(formData.fullName, currentLang);
    if (!nameCheck.isValid && nameCheck.error) {
      errs.fullName = nameCheck.error;
    }

    // Validate genuine Indian mobile number (anti-spam)
    const phoneCheck = validateGenuineMobile(formData.phone, currentLang);
    if (!phoneCheck.isValid && phoneCheck.error) {
      errs.phone = phoneCheck.error;
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = currentLang === 'en' ? 'Please enter a valid email address' : 'कृपया वैध ईमेल प्रविष्ट करा';
    }

    if (!formData.preferredDate) {
      errs.preferredDate = currentLang === 'en' ? 'Please select a preferred date' : 'कृपया तारीख निवडा';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
      redirectToDoctorWhatsApp(formData);
    }
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  const isMayureeActive =
    formData.preferredDoctor?.includes('Mayuree') ||
    formData.preferredClinic?.includes('Shree Ram') ||
    formData.preferredClinic?.includes('Panchavati');

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm animate-fade-in overflow-y-auto"
      onClick={handleResetAndClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-advait-border my-auto relative flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-advait-navy hover:bg-slate-100 transition-colors z-20"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Content Container */}
        <div className="p-6 sm:p-8">
          {isSubmitted ? (
            <BookingConfirmation
              data={formData}
              onClose={handleResetAndClose}
              currentLang={currentLang}
            />
          ) : (
            <div className="space-y-6">
              {/* Modal Header */}
              <div className="text-center max-w-md mx-auto space-y-1.5 pr-6 pl-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-advait-blue-soft border border-advait-blue/20 text-advait-blue text-xs font-bold uppercase tracking-wider">
                  <Calendar className="w-3.5 h-3.5 text-advait-teal" />
                  <span>{currentLang === 'en' ? 'BOOK AN APPOINTMENT' : 'ऑनलाइन अपॉइंटमेंट'}</span>
                </div>
                <h3 id="modal-title" className="text-xl sm:text-2xl font-extrabold text-advait-navy tracking-tight">
                  {currentLang === 'en' ? 'Schedule Your Dental Visit' : 'आपली वेळ आरक्षित करा'}
                </h3>
                <p className="text-xs sm:text-sm text-advait-text-secondary">
                  {currentLang === 'en'
                    ? 'Connect directly with our MDS Prosthodontist & BDS Smile Specialists via Instant WhatsApp confirmation.'
                    : 'तज्ज्ञ दंतवैद्यांशी थेट संपर्क साधा आणि व्हॉट्सॲपवर त्वरित कन्फर्मेशन मिळवा.'}
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Patient Name & Mobile */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Full Name */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-advait-navy flex items-center gap-1">
                      <User className="w-3.5 h-3.5 text-advait-blue" />
                      <span>{currentLang === 'en' ? 'Full Name *' : 'पूर्ण नाव *'}</span>
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Ramesh Patil"
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm text-advait-navy bg-white focus:outline-none focus:ring-2 focus:ring-advait-blue/30 ${
                        errors.fullName ? 'border-rose-500 bg-rose-50/30' : 'border-advait-border'
                      }`}
                    />
                    {errors.fullName && <p className="text-[11px] text-rose-500">{errors.fullName}</p>}
                  </div>

                  {/* Phone Number */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-advait-navy flex items-center gap-1">
                      <Phone className="w-3.5 h-3.5 text-advait-blue" />
                      <span>{currentLang === 'en' ? 'Phone Number *' : 'फोन नंबर *'}</span>
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 9876543210"
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm text-advait-navy bg-white focus:outline-none focus:ring-2 focus:ring-advait-blue/30 ${
                        errors.phone ? 'border-rose-500 bg-rose-50/30' : 'border-advait-border'
                      }`}
                    />
                    {errors.phone && <p className="text-[11px] text-rose-500">{errors.phone}</p>}
                  </div>
                </div>

                {/* Email Address */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-advait-navy flex items-center gap-1">
                    <Mail className="w-3.5 h-3.5 text-advait-blue" />
                    <span>{currentLang === 'en' ? 'Email Address (Optional)' : 'ईमेल पत्ता (ऐच्छिक)'}</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-advait-border text-xs sm:text-sm text-advait-navy bg-white focus:outline-none focus:ring-2 focus:ring-advait-blue/30"
                  />
                  {errors.email && <p className="text-[11px] text-rose-500">{errors.email}</p>}
                </div>

                {/* 1. Select Doctor / Specialist (Positioned First) */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-advait-navy flex items-center justify-between gap-1">
                    <span className="flex items-center gap-1">
                      <Stethoscope className="w-3.5 h-3.5 text-advait-blue" />
                      <span>{currentLang === 'en' ? 'Select Doctor / Specialist *' : 'तज्ज्ञ डॉक्टर निवडा *'}</span>
                    </span>
                    <span className="text-[10px] font-semibold text-advait-blue bg-advait-blue-soft px-2 py-0.5 rounded-md border border-advait-blue/20">
                      {currentLang === 'en' ? 'Auto-synced with clinic' : 'क्लिनिकशी संलग्न'}
                    </span>
                  </label>
                  <select
                    value={formData.preferredDoctor}
                    onChange={(e) => handleDoctorChange(e.target.value)}
                    className="w-full max-w-full px-3 py-2.5 rounded-xl border border-advait-border text-xs sm:text-sm text-advait-navy bg-white font-semibold focus:outline-none focus:ring-2 focus:ring-advait-blue/30"
                  >
                    <option value={DOCTOR_INFO.name}>
                      Dr. Lilesh A. Shinde — Advait Multi Speciality Clinic, Plot No. 20-A, Chandrabhaga, Opp. Shantidham Apt., Geetanjali Colony, Indira Nagar, Nashik - 422009
                    </option>
                    <option value={DOCTOR_MAYUREE_INFO.name}>
                      Dr. Mayuree L. Shinde — Shree Ram Multi Speciality Clinic, Shop No. 01, Ground Floor, Near SBI Bank & Swagat Sweets, Jatra Hotel Chaufali, Adgaon Shivar, Panchavati, Nashik - 422003
                    </option>
                  </select>
                </div>

                {/* 2. Clinic Location & Full Address (Positioned Second) */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-advait-navy flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-advait-blue" />
                    <span>{currentLang === 'en' ? 'Clinic Location & Full Address *' : 'क्लिनिक व पूर्ण पत्ता निवडा *'}</span>
                  </label>
                  <select
                    value={formData.preferredClinic}
                    onChange={(e) => handleClinicChange(e.target.value)}
                    className="w-full max-w-full px-3 py-2.5 rounded-xl border border-advait-border text-xs sm:text-sm text-advait-navy bg-white font-medium focus:outline-none focus:ring-2 focus:ring-advait-blue/30"
                  >
                    <option value={ADVAIT_LOCATION_ADDRESS}>
                      Advait Multi Speciality Clinic, Plot No. 20-A, Chandrabhaga, Opp. Shantidham Apt., Geetanjali Colony, Indira Nagar, Nashik - 422009
                    </option>
                    <option value={SHREE_RAM_LOCATION_ADDRESS}>
                      Shree Ram Multi Speciality Clinic, Shop No. 01, Ground Floor, Near SBI Bank & Swagat Sweets, Jatra Hotel Chaufali, Adgaon Shivar, Panchavati, Nashik - 422003
                    </option>
                  </select>
                </div>

                {/* Structured Location & Doctor Info Card (Fully Contained & Well-Structured) */}
                <div className="p-3.5 rounded-2xl bg-advait-blue-soft/70 border border-advait-blue/20 text-xs space-y-2 shadow-2xs">
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <div className="flex items-center gap-1.5 font-extrabold text-advait-navy">
                      <Stethoscope className="w-4 h-4 text-advait-blue shrink-0" />
                      <span>{isMayureeActive ? DOCTOR_MAYUREE_INFO.name : DOCTOR_INFO.name}</span>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-advait-blue text-white shrink-0">
                      {isMayureeActive ? 'Smile Makeover & Cosmetic Dentist' : 'M.D.S. Prosthodontist & Implantologist'}
                    </span>
                  </div>

                  <div className="flex items-start gap-2 text-slate-700 text-[11px] sm:text-xs leading-relaxed pt-1.5 border-t border-advait-blue/15">
                    <MapPin className="w-3.5 h-3.5 text-advait-teal shrink-0 mt-0.5" />
                    <div className="break-words leading-tight space-y-0.5">
                      <p className="font-bold text-advait-navy">
                        {isMayureeActive ? 'Shree Ram Multi Speciality Clinic' : 'Advait Multi Speciality Clinic'}
                      </p>
                      <p className="text-slate-600 text-[11px] leading-snug">
                        {isMayureeActive
                          ? 'Shop No. 01, Ground Floor, Near SBI Bank & Swagat Sweets, Jatra Hotel Chaufali, Adgaon Shivar, Panchavati, Nashik - 422003'
                          : 'Plot No. 20-A, Chandrabhaga, Opp. Shantidham Apt., Geetanjali Colony, Indira Nagar, Nashik - 422009'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Preferred Date & Time Slot */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Preferred Date */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-advait-navy flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-advait-blue" />
                      <span>{currentLang === 'en' ? 'Preferred Date *' : 'तारीख निवडा *'}</span>
                    </label>
                    <input
                      type="date"
                      min={new Date().toISOString().split('T')[0]}
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm text-advait-navy bg-white focus:outline-none focus:ring-2 focus:ring-advait-blue/30 ${
                        errors.preferredDate ? 'border-rose-500 bg-rose-50/30' : 'border-advait-border'
                      }`}
                    />
                    {errors.preferredDate && <p className="text-[11px] text-rose-500">{errors.preferredDate}</p>}
                  </div>

                  {/* Preferred Time Slot */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-advait-navy flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-advait-blue" />
                      <span>{currentLang === 'en' ? 'Preferred Time Slot' : 'वेळेचा स्लॉट'}</span>
                    </label>
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-advait-border text-xs sm:text-sm text-advait-navy bg-white focus:outline-none focus:ring-2 focus:ring-advait-blue/30"
                    >
                      {timeSlots.map((slot) => (
                        <option key={slot.id} value={slot.labelEn}>
                          {currentLang === 'en' ? slot.labelEn : slot.labelMr}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Treatment or Reason for Visit */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-advait-navy flex items-center gap-1">
                    <FileText className="w-3.5 h-3.5 text-advait-blue" />
                    <span>{currentLang === 'en' ? 'Treatment or Reason for Visit' : 'उपचार / भेटीचे कारण'}</span>
                  </label>
                  <input
                    type="text"
                    value={formData.treatment}
                    onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                    placeholder={currentLang === 'en' ? 'e.g. Dental Implants, Dentures, Smile Makeover, RCT' : 'उदा. इम्प्लांट्स, कवळी, स्माईल मेकओव्हर, रूट कॅनॉल'}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-advait-border text-xs sm:text-sm text-advait-navy bg-white focus:outline-none focus:ring-2 focus:ring-advait-blue/30"
                  />
                </div>

                {/* Additional Notes / Symptoms */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-advait-navy">
                    {currentLang === 'en' ? 'Additional Notes / Symptoms (Optional)' : 'काही विशेष सूचना / लक्षणे (ऐच्छिक)'}
                  </label>
                  <textarea
                    rows={2}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={currentLang === 'en' ? 'Describe any specific pain, dental concern or questions...' : 'काही त्रास किंवा शंका असल्यास लिहा...'}
                    className="w-full px-3.5 py-2 rounded-xl border border-advait-border text-xs sm:text-sm text-advait-navy bg-white focus:outline-none focus:ring-2 focus:ring-advait-blue/30"
                  />
                </div>

                {/* Privacy Assurance */}
                <div className="flex items-center gap-2 text-[11px] text-slate-500 pt-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>
                    {currentLang === 'en'
                      ? 'Strict patient confidentiality guaranteed. No promotional spam.'
                      : 'रुग्णाची माहिती १००% सुरक्षित ठेवली जाईल.'}
                  </span>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-advait-blue hover:bg-advait-blue-dark text-white font-bold text-sm shadow-md hover:shadow-lg transition-all active:scale-[0.98] flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>{currentLang === 'en' ? 'Book & Send via WhatsApp' : 'अपॉइंटमेंट आरक्षित करा (WhatsApp)'}</span>
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
