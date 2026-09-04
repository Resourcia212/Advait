import { AppointmentFormData } from '../types';
import {
  DR_LILESH_PHONE,
  DR_LILESH_DISPLAY_PHONE,
  DR_MAYUREE_PHONE,
  DR_MAYUREE_DISPLAY_PHONE,
  DOCTOR_INFO,
  DOCTOR_MAYUREE_INFO,
} from '../data/clinicInfo';

/**
 * Returns the direct WhatsApp phone number of the doctor selected in the appointment form.
 * If Dr. Mayuree is selected, returns Dr. Mayuree's number (7769927930).
 * If Dr. Lilesh or any available specialist is selected, returns Dr. Lilesh's number (9405814675).
 */
export const getDoctorWhatsAppNumber = (doctorName?: string): string => {
  if (!doctorName) return DR_LILESH_PHONE;
  if (doctorName.includes('Mayuree') || doctorName.includes('मयुरी')) {
    return DR_MAYUREE_PHONE;
  }
  return DR_LILESH_PHONE;
};

export const getDoctorDisplayPhone = (doctorName?: string): string => {
  if (!doctorName) return DR_LILESH_DISPLAY_PHONE;
  if (doctorName.includes('Mayuree') || doctorName.includes('मयुरी')) {
    return DR_MAYUREE_DISPLAY_PHONE;
  }
  return DR_LILESH_DISPLAY_PHONE;
};

export const getDoctorDisplayName = (doctorName?: string): string => {
  if (!doctorName) return DOCTOR_INFO.name;
  if (doctorName.includes('Mayuree') || doctorName.includes('मयुरी')) {
    return DOCTOR_MAYUREE_INFO.name;
  }
  if (doctorName.includes('Lilesh') || doctorName.includes('लिलेश')) {
    return DOCTOR_INFO.name;
  }
  return doctorName;
};

/**
 * Creates a clean, highly structured WhatsApp message pre-filled with all patient details.
 */
export const generateStructuredWhatsAppUrl = (data: AppointmentFormData): string => {
  const targetPhone = getDoctorWhatsAppNumber(data.preferredDoctor);
  const targetDoctor = getDoctorDisplayName(data.preferredDoctor);
  const treatmentText = data.treatment?.trim() || 'General Consultation & Dental Checkup';
  const emailText = data.email?.trim() ? `\n✉️ *Email:* ${data.email.trim()}` : '';
  const notesText = data.message?.trim() ? `\n📝 *Notes / Symptoms:* ${data.message.trim()}` : '';

  const message = [
    `🏥 *ADVAIT DENTAL CLINIC & IMPLANT CENTRE*`,
    `_Official Appointment Request_`,
    `━━━━━━━━━━━━━━━━━━━━━━━━`,
    `👤 *Patient Name:* ${data.fullName.trim()}`,
    `📞 *Phone Number:* ${data.phone.trim()}${emailText}`,
    `📍 *Clinic Location:* ${data.preferredClinic}`,
    `👨‍⚕️ *Doctor Requested:* ${targetDoctor}`,
    `📅 *Preferred Date:* ${data.preferredDate}`,
    `⏰ *Time Slot:* ${data.preferredTime}`,
    `🩺 *Treatment / Reason:* ${treatmentText}${notesText}`,
    `━━━━━━━━━━━━━━━━━━━━━━━━`,
    `_Sent via Advait Dental Clinic Portal (Nashik)_`
  ].join('\n');

  return `https://wa.me/91${targetPhone}?text=${encodeURIComponent(message)}`;
};

/**
 * Triggers automatic redirection to WhatsApp with fallback handling.
 */
export const redirectToDoctorWhatsApp = (data: AppointmentFormData): void => {
  const url = generateStructuredWhatsAppUrl(data);
  try {
    const openedWindow = window.open(url, '_blank');
    if (!openedWindow || openedWindow.closed || typeof openedWindow.closed === 'undefined') {
      // If popup was blocked by browser, redirect current window
      window.location.href = url;
    }
  } catch (err) {
    window.location.href = url;
  }
};
