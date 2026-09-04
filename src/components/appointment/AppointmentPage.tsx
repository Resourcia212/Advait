import React, { useState, useEffect } from 'react';
import { Calendar, User, Phone, Mail, MapPin, Clock, FileText, ShieldCheck, Sparkles, Stethoscope, ArrowLeft } from 'lucide-react';
import { AppointmentFormData, Language } from '../../types';
import { CLINIC_LOCATIONS, PRIMARY_PHONE, SECONDARY_PHONE, DISPLAY_PRIMARY_PHONE, DISPLAY_SECONDARY_PHONE, DOCTOR_INFO, DOCTOR_MAYUREE_INFO } from '../../data/clinicInfo';
import { BookingConfirmation } from './BookingConfirmation';
import { redirectToDoctorWhatsApp } from '../../lib/whatsapp';
import { validateGenuineMobile, validatePatientName } from '../../lib/validation';

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
  const [formData, setFormData] = useState<AppointmentFormData>({
    fullName: '',
    phone: '',
    email: '',
    preferredClinic: initialClinicLocation || CLINIC_LOCATIONS[0].name,
    preferredDoctor: DOCTOR_INFO.name,
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
      const isMayureeBranch =
        initialClinicLocation.includes('Shree Ram') ||
        initialClinicLocation.includes('Panchavati') ||
        initialClinicLocation.includes('Adgaon');
      setFormData((prev) => ({
        ...prev,
        preferredClinic: isMayureeBranch
          ? 'Shree Ram Multi Speciality Clinic, Adgaon Shivar'
          : 'Advait Multi Speciality Clinic, Indira Nagar',
        preferredDoctor: isMayureeBranch
          ? DOCTOR_MAYUREE_INFO.name
          : DOCTOR_INFO.name,
      }));
    }
  }, [initialServiceOrReason, initialClinicLocation]);

  const handleClinicChange = (clinicName: string) => {
    const isMayureeBranch =
      clinicName.includes('Shree Ram') || clinicName.includes('Panchavati') || clinicName.includes('Adgaon');
    setFormData((prev) => ({
      ...prev,
      preferredClinic: clinicName,
      preferredDoctor: isMayureeBranch
        ? DOCTOR_MAYUREE_INFO.name
        : DOCTOR_INFO.name,
    }));
  };

  const handleDoctorChange = (doctorName: string) => {
    const isMayuree = doctorName.includes('Mayuree');
    setFormData((prev) => ({
      ...prev,
      preferredDoctor: isMayuree
        ? DOCTOR_MAYUREE_INFO.name
        : DOCTOR_INFO.name,
      preferredClinic: isMayuree
        ? 'Shree Ram Multi Speciality Clinic, Adgaon Shivar'
        : 'Advait Multi Speciality Clinic, Indira Nagar',
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#EBF4FE] via-[#F4F9FF] to-white pt-24 pb-16 px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
      <div className="max-w-6xl mx-auto w-full">
        {/* Back to Home Navigation Button */}
        <div className="mb-6 flex items-center justify-between">
          <button
            onClick={() => onBackToHome('home')}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white hover:bg-slate-50 text-advait-navy hover:text-advait-blue font-bold text-xs sm:text-sm border border-advait-border shadow-xs transition-all hover:scale-[1.02] active:scale-95"
            aria-label="Back to Main Website"
          >
            <ArrowLeft className="w-4 h-4 text-advait-blue" />
            <span>{currentLang === 'en' ? '← Back to Home' : '← मुख्य पानावर परत जा'}</span>
          </button>

          <div className="hidden sm:flex items-center gap-2 text-xs font-semibold text-advait-text-secondary">
            <span>{currentLang === 'en' ? 'Advait Dental & Implant Centre' : 'अद्वैत डेंटल आणि इम्प्लांट सेंटर'}</span>
            <span>•</span>
            <span className="text-advait-blue font-bold">Nashik</span>
          </div>
        </div>

        {/* The Exact Two-Column Appointment Card matching the reference image */}
        <div className="bg-white rounded-3xl border border-advait-border shadow-2xl overflow-hidden animate-fade-in">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left Column: Reassurance & Official Clinic Details */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#082B63] via-[#0757C9] to-[#063B82] p-6 sm:p-8 lg:p-9 text-white flex flex-col justify-between space-y-6 relative overflow-hidden">
              {/* Subtle background ambient light */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-advait-teal/10 rounded-full blur-3xl pointer-events-none" />

              {/* Header section */}
              <div className="space-y-3 relative z-10">
                <div className="flex items-center justify-between gap-2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-advait-teal-light text-[11px] font-bold uppercase tracking-wider">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{currentLang === 'en' ? 'EFFORTLESS BOOKING' : 'सुलभ अपॉइंटमेंट'}</span>
                  </div>
                  <span className="text-[11px] font-bold text-teal-200/90 tracking-wide">
                    ॥ श्री स्वामी समर्थ ॥
                  </span>
                </div>

                <h1 className="text-2xl sm:text-3xl lg:text-[32px] font-extrabold text-white leading-tight tracking-tight">
                  {currentLang === 'en' ? (
                    <>
                      Schedule Your <br />
                      <span className="text-advait-teal-light">Dental Consultation</span>
                    </>
                  ) : (
                    <>
                      तुमच्या भेटीची <br />
                      <span className="text-advait-teal-light">वेळ निश्चित करा</span>
                    </>
                  )}
                </h1>

                <p className="text-xs text-slate-200 leading-relaxed font-normal">
                  {currentLang === 'en'
                    ? 'Our clinic team will promptly confirm your appointment slot and ensure personalized, compassionate specialist attention in Nashik.'
                    : 'आमची टीम आपल्या वेळेनुसार खात्री करून वैयक्तिक व सहानुभूतीपूर्वक उपचारांचे नियोजन करेल.'}
                </p>
              </div>

              {/* Both Doctors Mini Credential Cards */}
              <div className="space-y-2.5 relative z-10">
                <span className="text-[10px] uppercase font-bold tracking-wider text-advait-teal-light block">
                  {currentLang === 'en' ? 'CONSULTING SPECIALISTS' : 'तज्ज्ञ दंतचिकित्सक'}
                </span>

                {/* Dr. Lilesh */}
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/15 space-y-1 hover:bg-white/15 transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold text-white">{DOCTOR_INFO.name}</span>
                    <span className="text-[10px] font-bold text-advait-teal-light bg-advait-teal/20 px-2 py-0.5 rounded border border-advait-teal/30">
                      Reg. {DOCTOR_INFO.registrationNo}
                    </span>
                  </div>
                  <p className="text-[11px] text-teal-100 font-semibold">{DOCTOR_INFO.specialization}</p>
                  <p className="text-[10px] text-slate-300">{DOCTOR_INFO.degrees}</p>
                </div>

                {/* Dr. Mayuree */}
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/15 space-y-1 hover:bg-white/15 transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold text-white">{DOCTOR_MAYUREE_INFO.name}</span>
                    <span className="text-[10px] font-bold text-advait-teal-light bg-advait-teal/20 px-2 py-0.5 rounded border border-advait-teal/30">
                      Reg. {DOCTOR_MAYUREE_INFO.registrationNo}
                    </span>
                  </div>
                  <p className="text-[11px] text-teal-100 font-semibold">{DOCTOR_MAYUREE_INFO.specialization}</p>
                  <p className="text-[10px] text-slate-300">{DOCTOR_MAYUREE_INFO.degrees}</p>
                </div>
              </div>

              {/* Clinic Guarantees & Features */}
              <div className="space-y-2.5 pt-2 border-t border-white/10 relative z-10">
                <div className="grid grid-cols-2 gap-2 text-xs text-slate-200">
                  <div className="flex items-center gap-2 bg-white/5 rounded-lg p-2 border border-white/5">
                    <ShieldCheck className="w-4 h-4 text-advait-green shrink-0" />
                    <span className="text-[11px] leading-tight">{currentLang === 'en' ? 'Strict Sterilization' : 'कडक निर्जंतुकीकरण'}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/5 rounded-lg p-2 border border-white/5">
                    <Sparkles className="w-4 h-4 text-advait-teal-light shrink-0" />
                    <span className="text-[11px] leading-tight">{currentLang === 'en' ? 'M.D.S. Diagnosis' : 'M.D.S. अचूक निदान'}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/5 rounded-lg p-2 border border-white/5">
                    <MapPin className="w-4 h-4 text-advait-green shrink-0" />
                    <span className="text-[11px] leading-tight">{currentLang === 'en' ? '2 Nashik Branches' : '२ नाशिक शाखा'}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/5 rounded-lg p-2 border border-white/5">
                    <Clock className="w-4 h-4 text-advait-teal-light shrink-0" />
                    <span className="text-[11px] leading-tight">{currentLang === 'en' ? '10 AM - 8:30 PM' : 'सकाळी १० ते रात्री ८:३०'}</span>
                  </div>
                </div>
              </div>

              {/* Direct Telephone Booking & Helpline */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 space-y-2.5 relative z-10">
                <span className="text-[10px] uppercase font-bold tracking-wider text-teal-200 block">
                  {currentLang === 'en' ? 'DIRECT TELEPHONE BOOKING & HELPLINE' : 'थेट फोनवर वेळ बुक करा'}
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <a
                    href={`tel:${PRIMARY_PHONE}`}
                    className="flex flex-col p-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 transition-all group"
                  >
                    <span className="text-[10px] text-slate-300">Dr. Lilesh (Prosthodontist):</span>
                    <span className="font-extrabold text-white group-hover:text-advait-teal-light text-xs mt-0.5">{DISPLAY_PRIMARY_PHONE}</span>
                  </a>
                  <a
                    href={`tel:${SECONDARY_PHONE}`}
                    className="flex flex-col p-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 transition-all group"
                  >
                    <span className="text-[10px] text-slate-300">Dr. Mayuree (Cosmetic):</span>
                    <span className="font-extrabold text-white group-hover:text-advait-teal-light text-xs mt-0.5">{DISPLAY_SECONDARY_PHONE}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Appointment Form */}
            <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-center">
              {isSubmitted ? (
                <div className="space-y-4">
                  <BookingConfirmation
                    data={formData}
                    onClose={() => onBackToHome('home')}
                    currentLang={currentLang}
                  />
                  <div className="text-center pt-2">
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="text-xs font-semibold text-advait-blue hover:underline"
                    >
                      {currentLang === 'en' ? 'Book Another Appointment' : 'दुसरी अपॉइंटमेंट बुक करा'}
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1 mb-4">
                    <h2 className="text-xl sm:text-2xl font-bold text-advait-navy">
                      {currentLang === 'en' ? 'Patient & Treatment Details' : 'रुग्ण व उपचाराचा तपशील'}
                    </h2>
                    <p className="text-xs text-advait-text-secondary">
                      {currentLang === 'en' ? 'Fill out the details below to request a convenient time.' : 'खालील माहिती भरा व सोयीची वेळ निवडा.'}
                    </p>
                  </div>

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

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

                    {/* Preferred Clinic Branch */}
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-advait-navy flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-advait-blue" />
                        <span>{currentLang === 'en' ? 'Preferred Clinic Location *' : 'शाखा निवडा *'}</span>
                      </label>
                      <select
                        value={formData.preferredClinic}
                        onChange={(e) => handleClinicChange(e.target.value)}
                        className="w-full max-w-full px-3 py-2.5 rounded-xl border border-advait-border text-xs sm:text-sm text-advait-navy bg-white font-medium focus:outline-none focus:ring-2 focus:ring-advait-blue/30 truncate"
                      >
                        <option value="Advait Multi Speciality Clinic, Indira Nagar">
                          {currentLang === 'en'
                            ? 'Advait Clinic, Opp. Shantidham Apt., Geetanjali Colony, Indira Nagar • Dr. Lilesh Shinde'
                            : 'अद्वैत क्लिनिक, शांतिधाम अपार्ट. समोर, गीतांजली कॉलनी, इंदिरा नगर • डॉ. लिलेश शिंदे'}
                        </option>
                        <option value="Shree Ram Multi Speciality Clinic, Adgaon Shivar">
                          {currentLang === 'en'
                            ? 'Shree Ram Clinic, Near SBI Bank, Jatra Hotel Chaufali, Adgaon Shivar • Dr. Mayuree Shinde'
                            : 'श्री राम क्लिनिक, एसबीआय बँके जवळ, जत्रा हॉटेल चौफुली, आडगाव शिवार • डॉ. मयुरी शिंदे'}
                        </option>
                      </select>
                    </div>
                  </div>

                  {/* Select Doctor / Specialist */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-advait-navy flex items-center justify-between gap-1">
                      <span className="flex items-center gap-1">
                        <Stethoscope className="w-3.5 h-3.5 text-advait-blue" />
                        <span>{currentLang === 'en' ? 'Assigned Doctor / Specialist *' : 'तज्ज्ञ डॉक्टर *'}</span>
                      </span>
                      <span className="text-[11px] font-normal text-advait-blue bg-advait-blue-soft px-2 py-0.5 rounded-md border border-advait-blue/20">
                        {currentLang === 'en' ? 'Auto-synced with clinic' : 'शाखेशी संलग्न'}
                      </span>
                    </label>
                    <select
                      value={formData.preferredDoctor}
                      onChange={(e) => handleDoctorChange(e.target.value)}
                      className="w-full max-w-full px-3 py-2.5 rounded-xl border border-advait-border text-xs sm:text-sm text-advait-navy bg-white font-semibold focus:outline-none focus:ring-2 focus:ring-advait-blue/30 truncate"
                    >
                      <option value={DOCTOR_INFO.name}>
                        Dr. Lilesh A. Shinde — Advait Multi Speciality Clinic, Opp. Shantidham Apt., Geetanjali Colony, Indira Nagar
                      </option>
                      <option value={DOCTOR_MAYUREE_INFO.name}>
                        Dr. Mayuree L. Shinde — Shree Ram Multi Speciality Clinic, Near SBI Bank, Jatra Hotel Chaufali, Adgaon Shivar
                      </option>
                    </select>

                    {/* Auto-Assignment Notification Pill */}
                    <div className="flex items-center gap-2 p-2 rounded-xl bg-advait-blue-soft/60 border border-advait-blue/20 text-[11px] text-advait-navy">
                      <span className="font-bold text-advait-blue shrink-0">ℹ️ {currentLang === 'en' ? 'Branch Doctor:' : 'शाखा प्रमुख:'}</span>
                      <span className="truncate">
                        {formData.preferredClinic.includes('Shree Ram') || formData.preferredClinic.includes('Adgaon') || formData.preferredDoctor?.includes('Mayuree')
                          ? currentLang === 'en'
                            ? 'Dr. Mayuree L. Shinde heads Shree Ram Clinic, Near SBI Bank, Jatra Hotel Chaufali, Adgaon Shivar.'
                            : 'डॉ. मयुरी शिंदे या श्री राम क्लिनिक (एसबीआय बँके जवळ, जत्रा हॉटेल चौफुली, आडगाव शिवार) येथील प्रमुख आहेत.'
                          : currentLang === 'en'
                            ? 'Dr. Lilesh A. Shinde heads Advait Clinic, Opp. Shantidham Apt., Geetanjali Colony, Indira Nagar.'
                            : 'डॉ. लिलेश शिंदे हे अद्वैत क्लिनिक (शांतिधाम अपार्ट. समोर, गीतांजली कॉलनी, इंदिरा नगर) येथील प्रमुख आहेत.'}
                      </span>
                    </div>
                  </div>

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
                      placeholder="e.g. Dental Implants, Denture Consultation, Root Canal, General Checkup"
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
                      className="w-full px-3.5 py-2.5 rounded-xl border border-advait-border text-xs sm:text-sm text-advait-navy bg-white focus:outline-none focus:ring-2 focus:ring-advait-blue/30 resize-none"
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
