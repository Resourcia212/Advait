import React, { useState } from 'react';
import { Phone, Mail, Send, CheckCircle2, MessageCircle, Stethoscope } from 'lucide-react';
import { Language, ContactFormData } from '../../types';
import {
  PRIMARY_PHONE,
  SECONDARY_PHONE,
  DISPLAY_PRIMARY_PHONE,
  DISPLAY_SECONDARY_PHONE,
  CLINIC_EMAIL,
  CLINIC_LOCATIONS,
  DOCTOR_INFO,
  DOCTOR_MAYUREE_INFO
} from '../../data/clinicInfo';
import { validateGenuineMobile, validatePatientName } from '../../lib/validation';

interface ContactSectionProps {
  currentLang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ currentLang }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    phone: '',
    email: '',
    preferredClinic: CLINIC_LOCATIONS[0].name,
    preferredDoctor: DOCTOR_INFO.name,
    preferredDate: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});

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

  const validate = (): boolean => {
    const errs: Partial<Record<keyof ContactFormData, string>> = {};
    
    // Validate genuine patient name
    const nameCheck = validatePatientName(formData.name, currentLang);
    if (!nameCheck.isValid && nameCheck.error) {
      errs.name = nameCheck.error;
    }

    // Validate genuine Indian mobile number (anti-spam)
    const phoneCheck = validateGenuineMobile(formData.phone, currentLang);
    if (!phoneCheck.isValid && phoneCheck.error) {
      errs.phone = phoneCheck.error;
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = currentLang === 'en' ? 'Valid email required' : 'वैध ईमेल आवश्यक आहे';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
    }
  };

  const getWhatsAppQuickLink = () => {
    const text = `Hello Advait Dental Clinic,\nI have a general inquiry:\n• Name: ${formData.name || 'Patient'}\n• Doctor: ${formData.preferredDoctor || 'Any Specialist'}\n• Clinic: ${formData.preferredClinic}\n• Message: ${formData.message || 'I would like more information on dental treatments.'}`;
    return `https://wa.me/91${PRIMARY_PHONE}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-[#F8FBFF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-advait-blue-soft border border-advait-blue/20 text-advait-blue text-[11px] font-bold uppercase tracking-wider">
            <Phone className="w-3 h-3 text-advait-teal" />
            <span>{currentLang === 'en' ? 'GET IN TOUCH' : 'संपर्क साधा'}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-advait-navy tracking-tight">
            {currentLang === 'en' ? (
              <>
                Connect with Our <span className="gradient-text-blue">Dental Care Team</span>
              </>
            ) : (
              <>
                आमच्या <span className="gradient-text-blue">दंतचिकित्सा टीमशी संपर्क साधा</span>
              </>
            )}
          </h2>

          <p className="text-xs sm:text-sm text-advait-text-secondary">
            {currentLang === 'en'
              ? 'Have questions about a specialized dental treatment or need directions to our Nashik clinics? Reach out directly.'
              : 'उपचारांविषयी माहिती, शंका किंवा दिशानिर्देशांसाठी थेट संपर्क साधा.'}
          </p>
        </div>

        {/* 2-Column Perfectly Aligned Equal Height Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch max-w-6xl mx-auto">
          {/* Left Column: Direct Contact Information Card */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-advait-border shadow-card flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              <div>
                <h3 className="text-lg font-bold text-advait-navy">
                  {currentLang === 'en' ? 'Direct Contact Information' : 'थेट संपर्क माहिती'}
                </h3>
                <p className="text-xs text-advait-text-secondary mt-0.5">
                  {currentLang === 'en' ? 'Reach our doctors directly for appointments & consultations:' : 'वेळ निश्चित करण्यासाठी अथवा माहितीसाठी थेट कॉल करा:'}
                </p>
              </div>

              {/* Direct Doctor Phone Links */}
              <div className="space-y-2.5">
                <a
                  href={`tel:${PRIMARY_PHONE}`}
                  className="flex items-center justify-between p-3 rounded-2xl bg-advait-blue-soft hover:bg-advait-blue/15 border border-advait-blue/20 hover:border-advait-blue/40 text-advait-navy hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200 group"
                  title="Call Dr. Lilesh A. Shinde"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-advait-blue text-white flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform duration-200">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase text-advait-blue block">{DOCTOR_INFO.name}</span>
                      <span className="text-xs text-slate-500 font-medium">{DOCTOR_INFO.specialization}</span>
                      <span className="text-sm font-extrabold text-advait-navy group-hover:text-advait-blue block mt-0.5 transition-colors">{DISPLAY_PRIMARY_PHONE}</span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-advait-blue px-2 py-1 bg-white rounded-lg border border-advait-blue/20 shrink-0 group-hover:bg-advait-blue group-hover:text-white transition-all duration-200">Call →</span>
                </a>

                <a
                  href={`tel:${SECONDARY_PHONE}`}
                  className="flex items-center justify-between p-3 rounded-2xl bg-advait-teal-soft hover:bg-advait-teal/15 border border-advait-teal/20 hover:border-advait-teal/40 text-advait-navy hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200 group"
                  title="Call Dr. Mayuree L. Shinde (Patil)"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-advait-teal text-white flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform duration-200">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase text-advait-teal block">{DOCTOR_MAYUREE_INFO.name}</span>
                      <span className="text-xs text-slate-500 font-medium">{DOCTOR_MAYUREE_INFO.specialization}</span>
                      <span className="text-sm font-extrabold text-advait-navy group-hover:text-advait-teal block mt-0.5 transition-colors">{DISPLAY_SECONDARY_PHONE}</span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-advait-teal px-2 py-1 bg-white rounded-lg border border-advait-teal/20 shrink-0 group-hover:bg-advait-teal group-hover:text-white transition-all duration-200">Call →</span>
                </a>
              </div>

              {/* Email Inquiries Box */}
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-advait-border hover:border-advait-blue/30 transition-colors duration-200 space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-advait-navy">
                  <Mail className="w-4 h-4 text-advait-blue" />
                  <span>{currentLang === 'en' ? 'Email Inquiries' : 'ईमेल संपर्क'}</span>
                </div>
                <a
                  href={`mailto:${CLINIC_EMAIL}`}
                  className="text-xs font-semibold text-advait-blue hover:underline break-all block pl-6"
                >
                  {CLINIC_EMAIL}
                </a>
              </div>
            </div>

            {/* WhatsApp Quick Chat Card */}
            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 hover:border-emerald-300 transition-colors duration-200 space-y-2">
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-700" />
                <h4 className="text-xs font-bold text-emerald-900">
                  {currentLang === 'en' ? 'WhatsApp Direct Helpline' : 'व्हॉट्सॲप थेट संपर्क'}
                </h4>
              </div>
              <p className="text-[11px] text-emerald-800 leading-snug">
                {currentLang === 'en' ? 'Instant coordination for appointments & directions.' : 'अपॉइंटमेंट व माहितीसाठी व्हॉट्सॲपवर चॅट करा.'}
              </p>
              <a
                href={getWhatsAppQuickLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 hover:shadow-md hover:-translate-y-0.5 text-white text-xs font-bold shadow-xs transition-all duration-200 active:scale-95"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>{currentLang === 'en' ? 'Chat on WhatsApp' : 'व्हॉट्सॲपवर संपर्क करा'}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Send Direct Query Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-advait-border shadow-card flex flex-col justify-between">
            {isSubmitted ? (
              <div className="text-center py-12 space-y-4 my-auto">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-advait-navy">
                  {currentLang === 'en' ? 'Query Sent Successfully!' : 'संदेश यशस्वीरित्या पाठवला!'}
                </h3>
                <p className="text-xs sm:text-sm text-advait-text-secondary max-w-md mx-auto">
                  {currentLang === 'en'
                    ? `Thank you ${formData.name}. Our clinic coordination team will contact you shortly regarding your query.`
                    : `धन्यवाद ${formData.name}. आमची टीम आपल्याशी लवकरच संपर्क साधेल.`}
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-5 py-2.5 rounded-xl bg-advait-blue text-white text-xs font-bold hover:bg-advait-blue-dark transition-colors"
                >
                  {currentLang === 'en' ? 'Send Another Query' : 'दुसरा संदेश पाठवा'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-advait-navy">
                    {currentLang === 'en' ? 'Send a Direct Query' : 'थेट संदेश पाठवा'}
                  </h3>
                  <p className="text-xs text-advait-text-secondary mt-0.5">
                    {currentLang === 'en' ? 'Have a question? We will get back to you shortly.' : 'आपला प्रश्न लिहा, आमची टीम लवकरच संपर्क करेल.'}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Your Name */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-advait-navy">
                      {currentLang === 'en' ? 'Your Name *' : 'आपले नाव *'}
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Anand Kulkarni"
                      className={`w-full px-3.5 py-2 rounded-xl border text-xs sm:text-sm text-advait-navy focus:outline-none focus:ring-2 focus:ring-advait-blue/30 ${
                        errors.name ? 'border-red-500 bg-red-50/50' : 'border-advait-border bg-slate-50/50 focus:bg-white'
                      }`}
                    />
                    {errors.name && <p className="text-[10px] text-red-500">{errors.name}</p>}
                  </div>

                  {/* Phone Number */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-advait-navy">
                      {currentLang === 'en' ? 'Phone Number *' : 'फोन नंबर *'}
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 9876543210"
                      className={`w-full px-3.5 py-2 rounded-xl border text-xs sm:text-sm text-advait-navy focus:outline-none focus:ring-2 focus:ring-advait-blue/30 ${
                        errors.phone ? 'border-red-500 bg-red-50/50' : 'border-advait-border bg-slate-50/50 focus:bg-white'
                      }`}
                    />
                    {errors.phone && <p className="text-[10px] text-red-500">{errors.phone}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email Address */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-advait-navy">
                      {currentLang === 'en' ? 'Email Address' : 'ईमेल'}
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className={`w-full px-3.5 py-2 rounded-xl border text-xs sm:text-sm text-advait-navy focus:outline-none focus:ring-2 focus:ring-advait-blue/30 ${
                        errors.email ? 'border-red-500 bg-red-50/50' : 'border-advait-border bg-slate-50/50 focus:bg-white'
                      }`}
                    />
                  </div>

                  {/* Select Preferred Clinic */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-advait-navy">
                      {currentLang === 'en' ? 'Select Preferred Clinic' : 'शाखा निवडा'}
                    </label>
                    <select
                      value={formData.preferredClinic}
                      onChange={(e) => handleClinicChange(e.target.value)}
                      className="w-full max-w-full px-3 py-2 rounded-xl border border-advait-border bg-slate-50/50 focus:bg-white text-xs sm:text-sm text-advait-navy font-medium focus:outline-none focus:ring-2 focus:ring-advait-blue/30 truncate"
                    >
                      <option value="Advait Multi Speciality Clinic, Indira Nagar">
                        {currentLang === 'en'
                          ? 'Advait Clinic, Indira Nagar • Dr. Lilesh Shinde'
                          : 'अद्वैत क्लिनिक, इंदिरा नगर • डॉ. लिलेश शिंदे'}
                      </option>
                      <option value="Shree Ram Multi Speciality Clinic, Adgaon Shivar">
                        {currentLang === 'en'
                          ? 'Shree Ram Clinic, Adgaon Shivar • Dr. Mayuree Shinde'
                          : 'श्री राम क्लिनिक, आडगाव शिवार • डॉ. मयुरी शिंदे'}
                      </option>
                    </select>
                  </div>
                </div>

                {/* Select Doctor / Specialist Required */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-advait-navy flex items-center justify-between gap-1">
                    <span className="flex items-center gap-1">
                      <Stethoscope className="w-3.5 h-3.5 text-advait-blue" />
                      <span>{currentLang === 'en' ? 'Assigned Doctor / Specialist *' : 'तज्ज्ञ डॉक्टर निवडा *'}</span>
                    </span>
                    <span className="text-[10px] font-normal text-advait-blue bg-advait-blue-soft px-2 py-0.5 rounded-md border border-advait-blue/20">
                      {currentLang === 'en' ? 'Auto-synced' : 'शाखेशी संलग्न'}
                    </span>
                  </label>
                  <select
                    value={formData.preferredDoctor}
                    onChange={(e) => handleDoctorChange(e.target.value)}
                    className="w-full max-w-full px-3 py-2.5 rounded-xl border border-advait-border bg-slate-50/50 focus:bg-white text-xs sm:text-sm text-advait-navy font-semibold focus:outline-none focus:ring-2 focus:ring-advait-blue/30 truncate"
                  >
                    <option value={DOCTOR_INFO.name}>
                      Dr. Lilesh A. Shinde — Advait Clinic, Indira Nagar
                    </option>
                    <option value={DOCTOR_MAYUREE_INFO.name}>
                      Dr. Mayuree L. Shinde — Shree Ram Clinic, Adgaon Shivar
                    </option>
                  </select>

                  {/* Auto-Assignment Notification Pill */}
                  <div className="flex items-start gap-2 p-2.5 rounded-xl bg-advait-blue-soft/70 border border-advait-blue/20 text-[11px] text-advait-navy">
                    <span className="font-bold text-advait-blue shrink-0 mt-0.5">ℹ️ {currentLang === 'en' ? 'Address:' : 'पत्ता:'}</span>
                    <span className="leading-relaxed">
                      {formData.preferredClinic.includes('Shree Ram') || formData.preferredClinic.includes('Adgaon') || formData.preferredDoctor?.includes('Mayuree')
                        ? currentLang === 'en'
                          ? 'Shree Ram Multi Speciality Clinic, Shop No. 01, Ground Floor, Near SBI Bank & Swagat Sweets, Jatra Hotel Chaufali, Adgaon Shivar, Nashik - 422003 (Dr. Mayuree Shinde)'
                          : 'श्री राम मल्टी स्पेशालिटी क्लिनिक, शॉप नं. ०१, तळमजला, एसबीआय बँक व स्वागत स्वीट्स जवळ, जत्रा हॉटेल चौफुली, आडगाव शिवार, नाशिक - ४२२००३ (डॉ. मयुरी शिंदे)'
                        : currentLang === 'en'
                          ? 'Advait Multi Speciality Clinic, Plot No. 20-A, Chandrabhaga, Opp. Shantidham Apt., Geetanjali Colony, Indira Nagar, Nashik - 422009 (Dr. Lilesh Shinde)'
                          : 'अद्वैत मल्टी स्पेशालिटी क्लिनिक, प्लॉट नं. २०-ए, चंद्रभागा, शांतिधाम अपार्ट. समोर, गीतांजली कॉलनी, इंदिरा नगर, नाशिक - ४२२००९ (डॉ. लिलेश शिंदे)'}
                    </span>
                  </div>
                </div>

                {/* Your Message or Question */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-advait-navy">
                    {currentLang === 'en' ? 'Your Message or Question *' : 'आपला प्रश्न अथवा संदेश *'}
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={currentLang === 'en' ? 'Describe your query or treatment requirements...' : 'आपली विचारणा अथवा उपचारांची माहिती लिहा...'}
                    className="w-full px-3.5 py-2 rounded-xl border border-advait-border bg-slate-50/50 focus:bg-white text-xs sm:text-sm text-advait-navy focus:outline-none focus:ring-2 focus:ring-advait-blue/30 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-xl bg-advait-navy hover:bg-advait-blue text-white font-bold text-xs sm:text-sm shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2 active:scale-98"
                >
                  <Send className="w-4 h-4" />
                  <span>{currentLang === 'en' ? 'Submit Inquiry' : 'संदेश पाठवा'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
