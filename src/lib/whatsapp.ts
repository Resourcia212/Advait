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
 * Creates an executive, highly professional WhatsApp message pre-filled with structured patient and booking details.
 */
export const generateStructuredWhatsAppUrl = (data: AppointmentFormData): string => {
  const targetPhone = getDoctorWhatsAppNumber(data.preferredDoctor);
  const targetDoctor = getDoctorDisplayName(data.preferredDoctor);
  const treatmentText = data.treatment?.trim() || 'General Consultation & Dental Checkup';

  // Format date nicely (e.g. "Fri, 02 Oct 2026")
  let formattedDate = data.preferredDate || '';
  try {
    if (data.preferredDate) {
      const d = new Date(data.preferredDate + 'T00:00:00');
      if (!isNaN(d.getTime())) {
        formattedDate = d.toLocaleDateString('en-IN', {
          weekday: 'short',
          year: 'numeric',
          month: 'short',
          day: '2-digit',
        });
      }
    }
  } catch {
    formattedDate = data.preferredDate;
  }

  const lines: string[] = [
    `✨ *DR. SHINDE'S ADVAIT DENTAL CLINIC* ✨`,
    `_Multispeciality Dental & Implant Centre • Nashik_`,
    `══════════════════════════`,
    `📋 *NEW APPOINTMENT REQUEST*`,
    `══════════════════════════`,
    ``,
    `👤 *PATIENT INFORMATION*`,
    `• *Full Name:* ${data.fullName.trim()}`,
    `• *Contact Number:* +91 ${data.phone.trim()}`,
  ];

  if (data.email?.trim()) {
    lines.push(`• *Email Address:* ${data.email.trim()}`);
  }

  lines.push(
    ``,
    `🦷 *CONSULTATION DETAILS*`,
    `• *Doctor Requested:* ${targetDoctor}`,
    `• *Clinic Branch:* ${data.preferredClinic}`,
    `• *Treatment / Reason:* ${treatmentText}`,
    ``,
    `🗓️ *SCHEDULE PREFERRED*`,
    `• *Preferred Date:* ${formattedDate}`,
    `• *Time Slot:* ${data.preferredTime}`
  );

  if (data.message?.trim()) {
    lines.push(
      ``,
      `💬 *PATIENT REMARKS / SYMPTOMS*`,
      `• "${data.message.trim()}"`
    );
  }

  lines.push(
    ``,
    `══════════════════════════`,
    `🌟 _Sent via Advait Official Dental Portal (Nashik)_`,
    `📍 _Indira Nagar & Panchavati Branches_`
  );

  const message = lines.join('\n');
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
