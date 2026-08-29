import React from 'react';
import { CheckCircle2, MessageCircle, Phone, Calendar, MapPin, User, Clock, Stethoscope } from 'lucide-react';
import { AppointmentFormData, Language } from '../../types';
import {
  generateStructuredWhatsAppUrl,
  getDoctorDisplayPhone,
  getDoctorWhatsAppNumber,
  getDoctorDisplayName,
} from '../../lib/whatsapp';

interface BookingConfirmationProps {
  data: AppointmentFormData;
  onClose: () => void;
  currentLang: Language;
}

export const BookingConfirmation: React.FC<BookingConfirmationProps> = ({
  data,
  onClose,
  currentLang,
}) => {
  const whatsappUrl = generateStructuredWhatsAppUrl(data);
  const doctorPhone = getDoctorWhatsAppNumber(data.preferredDoctor);
  const doctorDisplayPhone = getDoctorDisplayPhone(data.preferredDoctor);
  const doctorName = getDoctorDisplayName(data.preferredDoctor);

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 space-y-6 text-center animate-fade-in max-w-lg mx-auto">
      {/* Success Icon */}
      <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-xs">
        <CheckCircle2 className="w-10 h-10" />
      </div>

      {/* Header */}
      <div className="space-y-1.5">
        <h3 className="text-xl sm:text-2xl font-extrabold text-advait-navy">
          {currentLang === 'en' ? 'Appointment Details Sent!' : 'अपॉइंटमेंट तपशील पाठवला गेला आहे!'}
        </h3>
        <p className="text-xs sm:text-sm text-advait-text-secondary">
          {currentLang === 'en'
            ? `Your request has been prepared for ${doctorName}. Please verify and send the pre-filled message on WhatsApp.`
            : `आपली विनंती ${doctorName} यांच्याकडे पाठवली जात आहे. कृपया व्हॉट्सॲपवर माहिती तपासा.`}
        </p>
      </div>

      {/* Summary Box */}
      <div className="bg-advait-bg rounded-2xl p-4 border border-advait-border text-left space-y-2.5 text-xs sm:text-sm shadow-xs">
        <div className="flex items-center gap-2 text-advait-navy font-semibold">
          <User className="w-4 h-4 text-advait-blue shrink-0" />
          <span className="font-bold">{data.fullName}</span>
          <span className="text-slate-500 font-normal">({data.phone})</span>
        </div>

        <div className="flex items-center gap-2 text-advait-navy">
          <Stethoscope className="w-4 h-4 text-advait-blue shrink-0" />
          <span className="font-bold text-advait-blue">{doctorName}</span>
        </div>

        <div className="flex items-center gap-2 text-advait-navy">
          <MapPin className="w-4 h-4 text-advait-teal shrink-0" />
          <span>{data.preferredClinic}</span>
        </div>

        <div className="flex items-center gap-2 text-advait-navy">
          <Calendar className="w-4 h-4 text-advait-green shrink-0" />
          <span>{data.preferredDate}</span>
          <Clock className="w-4 h-4 text-slate-400 shrink-0 ml-2" />
          <span>{data.preferredTime}</span>
        </div>

        {data.treatment && (
          <div className="pt-2 border-t border-advait-border/60 text-xs text-advait-text-secondary">
            <strong className="text-advait-navy">Treatment / Reason:</strong> {data.treatment}
          </div>
        )}
      </div>

      {/* Instant Action: WhatsApp & Direct Call */}
      <div className="space-y-2.5 pt-1">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all active:scale-95"
        >
          <MessageCircle className="w-4 h-4" />
          <span>{currentLang === 'en' ? 'Open in WhatsApp Directly' : 'थेट व्हॉट्सॲपवर उघडा'}</span>
        </a>

        <a
          href={`tel:${doctorPhone}`}
          className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-50 text-advait-navy border border-advait-border font-semibold text-xs hover:bg-slate-100 transition-colors"
        >
          <Phone className="w-4 h-4 text-advait-blue" />
          <span>
            {currentLang === 'en' ? `Call ${doctorName}: ${doctorDisplayPhone}` : `कॉल करा: ${doctorDisplayPhone}`}
          </span>
        </a>
      </div>

      <div className="pt-2">
        <button
          onClick={onClose}
          className="text-xs font-semibold text-slate-500 hover:text-advait-blue hover:underline"
        >
          {currentLang === 'en' ? '← Back to Home' : '← मुख्य पानावर परत जा'}
        </button>
      </div>
    </div>
  );
};
