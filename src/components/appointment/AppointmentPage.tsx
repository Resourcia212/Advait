import React, { useState, useEffect } from 'react';
import { Calendar, User, Phone, Mail, MapPin, Clock, FileText, ShieldCheck, Sparkles, Stethoscope, ArrowLeft } from 'lucide-react';
import { AppointmentFormData, Language } from '../../types';
import { PRIMARY_PHONE, SECONDARY_PHONE, DOCTOR_INFO, DOCTOR_MAYUREE_INFO } from '../../data/clinicInfo';
import { BookingConfirmation } from './BookingConfirmation';
import { redirectToDoctorWhatsApp } from '../../lib/whatsapp';
import { validateGenuineMobile, validatePatientName } from '../../lib/validation';

const ADVAIT_LOCATION_ADDRESS = "Advait Multi Speciality Clinic, Plot No. 20-A, Chandrabhaga, Opp. Shantidham Apt., Geetanjali Colony, Indira Nagar, Nashik - 422009";
const SHREE_RAM_LOCATION_ADDRESS = "Shree Ram Multi Speciality Clinic, Shop No. 01, Ground Floor, Near SBI Bank & Swagat Sweets, Jatra Hotel Chaufali, Adgaon Shivar, Panchavati, Nashik - 422003";

interface AppointmentPageProps {
  currentLang: Language;
  initialServiceOrReason?: string;
  initialClinicLocation?: string;
  onBackToHome: (targetSectionId?: string) => void;
}

export const AppointmentPage: React.FC<AppointmentPageProps> = ({
  currentLang,
  initialServiceOrReason = '',
  initialClinicLocation = '',
  onBackToHome,
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
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    if (initialServiceOrReason) {
      setFormData((prev) => ({ ...prev, treatment: initialServiceOrReason }));
    }
    if (initialClinicLocation) {
      const isMayuree =
        initialClinicLocation.includes('Shree Ram') ||
        initialClinicLocation.includes('Panchavati');
      setFormData((prev) => ({
        ...prev,
        preferredDoctor: isMayuree ? DOCTOR_MAYUREE_INFO.name : DOCTOR_INFO.name,
        preferredClinic: isMayuree ? SHREE_RAM_LOCATION_ADDRESS : ADVAIT_LOCATION_ADDRESS,
      }));
    }
  }, [initialServiceOrReason, initialClinicLocation]);

  const handleDoctorChange = (doctorName: string) => {
    const isMayuree = doctorName.includes('Mayuree');
    setFormData((prev) => ({
      ...prev,
      preferredDoctor: isMayuree ? DOCTOR_MAYUREE_INFO.name : DOCTOR_INFO.name,
      preferredClinic: isMayuree ? SHREE_RAM_LOCATION_ADDRESS : ADVAIT_LOCATION_ADDRESS,
    }));
  };

  const handleClinicChange = (clinicAddress: string) => {
    const isMayuree =
      clinicAddress.includes('Shree Ram') || clinicAddress.includes('Panchavati');
    setFormData((prev) => ({
      ...prev,
      preferredClinic: clinicAddress,
      preferredDoctor: isMayuree ? DOCTOR_MAYUREE_INFO.name : DOCTOR_INFO.name,
    }));
  };

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

  const isMayureeActive =
    formData.preferredDoctor?.includes('Mayuree') ||
    formData.preferredClinic?.includes('Shree Ram') ||
    formData.preferredClinic?.includes('Panchavati');

  return (
    <div className="min-h-screen bg-linear-to-b from-[#F0F7FF] to-white pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back navigation button */}
        <div className="mb-6">
          <button
            onClick={() => onBackToHome()}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-advait-border text-advait-navy hover:text-advait-blue hover:border-advait-blue/30 shadow-xs hover:shadow-sm font-semibold text-xs transition-all active:scale-95"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{currentLang === 'en' ? 'Back to Home' : 'मुख्य पानावर परत जा'}</span>
          </button>
        </div>

        {/* Two-column layout: Info on left, Form on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Clinic Info & Trust Highlights */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-advait-blue-soft border border-advait-blue/20 text-advait-blue text-xs font-bold uppercase tracking-wider">
                <Calendar className="w-3.5 h-3.5 text-advait-teal" />
                <span>{currentLang === 'en' ? 'ONLINE BOOKING' : 'ऑनलाइन अपॉइंटमेंट'}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-extrabold text-advait-navy tracking-tight leading-tight">
                {currentLang === 'en' ? (
                  <>
                    Book Your <span className="gradient-text-blue">Dental Consultation</span>
                  </>
                ) : (
                  <>
                    आपली <span className="gradient-text-blue">दंत तपासणी</span> आरक्षित करा
                  </>
                )}
              </h1>

              <p className="text-sm text-advait-text-secondary leading-relaxed">
                {currentLang === 'en'
                  ? 'Consult with Dr. Lilesh A. Shinde (MDS Prosthodontist & Implantologist) or Dr. Mayuree L. Shinde (Smile Makeover Specialist) across our modern Nashik clinics.'
                  : 'डॉ. लिलेश शिंदे (MDS प्रोस्थोडॉन्टिक्स व इम्प्लांट्स) किंवा डॉ. मयुरी शिंदे (स्माईल मेकओव्हर तज्ज्ञ) यांच्याकडून दर्जेदार उपचारांसाठी वेळ निश्चित करा.'}
              </p>
            </div>

            {/* Doctor Contact Cards */}
            <div className="space-y-3">
              {/* Dr. Lilesh Card */}
              <div className="p-4 rounded-2xl bg-white border border-advait-border shadow-xs hover:border-advait-blue/40 transition-all flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-advait-blue-soft border border-advait-blue/20 overflow-hidden shrink-0">
                    <img
                      src="./assets/dr-lilesh-shinde.png"
                      alt="Dr. Lilesh Shinde"
                      className="w-full h-full object-cover object-top"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = './assets/logo-icon.jpg';
                      }}
                    />
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-advait-navy">{DOCTOR_INFO.name}</h2>
                    <p className="text-[11px] text-advait-teal font-semibold">M.D.S. Prosthodontist & Implantologist</p>
                    <p className="text-[10px] text-slate-500">Advait Multi Speciality Clinic (Indira Nagar)</p>
                  </div>
                </div>
                <a
                  href={`tel:${PRIMARY_PHONE}`}
                  className="px-3 py-1.5 rounded-xl bg-advait-blue-soft text-advait-blue hover:bg-advait-blue hover:text-white font-bold text-xs border border-advait-blue/20 transition-all shrink-0"
                >
                  Call
                </a>
              </div>

              {/* Dr. Mayuree Card */}
              <div className="p-4 rounded-2xl bg-white border border-advait-border shadow-xs hover:border-advait-blue/40 transition-all flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-advait-blue-soft border border-advait-blue/20 overflow-hidden shrink-0">
                    <img
                      src="./assets/dr-team-consultant.png"
                      alt="Dr. Mayuree Shinde"
                      className="w-full h-full object-cover object-top"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = './assets/logo-icon.jpg';
                      }}
                    />
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-advait-navy">{DOCTOR_MAYUREE_INFO.name}</h2>
                    <p className="text-[11px] text-advait-teal font-semibold">B.D.S. Smile Makeover Specialist</p>
                    <p className="text-[10px] text-slate-500">Shree Ram Multi Speciality Clinic (Panchavati)</p>
                  </div>
                </div>
                <a
                  href={`tel:${SECONDARY_PHONE}`}
                  className="px-3 py-1.5 rounded-xl bg-advait-blue-soft text-advait-blue hover:bg-advait-blue hover:text-white font-bold text-xs border border-advait-blue/20 transition-all shrink-0"
                >
                  Call
                </a>
              </div>
            </div>

            {/* Clinic Highlights Strip */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-white border border-advait-border shadow-2xs flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                <span className="text-xs font-semibold text-advait-navy">
                  {currentLang === 'en' ? 'Sterilized Environment' : '१००% निर्जंतुकीकरण'}
                </span>
              </div>
              <div className="p-3 rounded-xl bg-white border border-advait-border shadow-2xs flex items-center gap-2.5">
                <Sparkles className="w-5 h-5 text-advait-teal shrink-0" />
                <span className="text-xs font-semibold text-advait-navy">
                  {currentLang === 'en' ? '2 Nashik Locations' : '२ नाशिक शाखा'}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Appointment Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-advait-border shadow-card">
              {isSubmitted ? (
                <BookingConfirmation
                  data={formData}
                  onClose={() => {
                    setIsSubmitted(false);
                    onBackToHome();
                  }}
                  currentLang={currentLang}
                />
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-advait-border/60 pb-3 mb-2">
                    <h2 className="text-lg font-bold text-advait-navy">
                      {currentLang === 'en' ? 'Patient & Visit Information' : 'रुग्ण व भेटीचा तपशील'}
                    </h2>
                    <p className="text-xs text-advait-text-secondary">
                      {currentLang === 'en'
                        ? 'Fill in your details below to schedule your appointment.'
                        : 'कृपया खालील माहिती भरा, आमची टीम आपल्याशी संपर्क करेल.'}
                    </p>
                  </div>

                  {/* Patient Name & Mobile */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

                  {/* Email */}
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
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                      <span>{currentLang === 'en' ? 'Treatment / Reason for Visit' : 'उपचार / भेटीचे कारण'}</span>
                    </label>
                    <input
                      type="text"
                      value={formData.treatment}
                      onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                      placeholder={currentLang === 'en' ? 'e.g. Dental Implants, Denture Consultation, Root Canal, General Checkup' : 'उदा. इम्प्लांट्स, कवळी, रूट कॅनॉल, तपासणी'}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-advait-border text-xs sm:text-sm text-advait-navy bg-white focus:outline-none focus:ring-2 focus:ring-advait-blue/30"
                    />
                  </div>

                  {/* Message / Symptoms Notes */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-advait-navy">
                      {currentLang === 'en' ? 'Additional Notes / Symptoms (Optional)' : 'काही विशेष सूचना / लक्षणे (ऐच्छिक)'}
                    </label>
                    <textarea
                      rows={2}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={currentLang === 'en' ? 'Describe any specific concerns or pain...' : 'काही त्रास किंवा शंका असल्यास लिहा...'}
                      className="w-full px-3.5 py-2 rounded-xl border border-advait-border text-xs sm:text-sm text-advait-navy bg-white focus:outline-none focus:ring-2 focus:ring-advait-blue/30"
                    />
                  </div>

                  {/* Privacy Notice */}
                  <p className="text-[11px] text-advait-text-secondary leading-snug">
                    🔒 {currentLang === 'en'
                      ? 'Privacy Notice: Your contact information is kept strictly confidential and used solely for appointment scheduling.'
                      : 'गोपनीयता सूचना: आपली माहिती पूर्णपणे सुरक्षित ठेवली जाईल व फक्त अपॉइंटमेंटसाठी वापरली जाईल.'}
                  </p>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 px-6 rounded-xl bg-advait-blue hover:bg-advait-blue-dark text-white font-bold text-sm shadow-md hover:shadow-lg transition-all active:scale-[0.98] flex items-center justify-center gap-2"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>{currentLang === 'en' ? 'Confirm Appointment Request' : 'अपॉइंटमेंट विनंती पाठवा'}</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
