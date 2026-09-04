import { ClinicLocation, DoctorInfo } from '../types';

export const CLINIC_NAME = "Dr. Shinde's Advait Multispeciality Dental Clinic and Implant Centre";
export const CLINIC_NAME_MARATHI = "डॉ. शिंदेज् \"अद्वैत\" मल्टीस्पेशालिटी डेंटल क्लिनिक व इम्प्लांट सेंटर";
export const CLINIC_TAGLINE = "Empathy. Expertise. Excellence.";
export const CLINIC_TAGLINE_MARATHI = "सहानुभूती. तज्ज्ञता. उत्कृष्टता.";
export const CLINIC_SUBTITLE_MARATHI = "दातांचा दवाखाना";

// Official Direct Mobile Numbers from Banner & Brochure
export const DR_LILESH_PHONE = "9405814675";
export const DR_LILESH_DISPLAY_PHONE = "+91 94058 14675";

export const DR_MAYUREE_PHONE = "7769927930";
export const DR_MAYUREE_DISPLAY_PHONE = "+91 77699 27930";

export const CLINIC_SECONDARY_PHONE = "9270724787";
export const CLINIC_SECONDARY_DISPLAY_PHONE = "+91 92707 24787";

export const PRIMARY_PHONE = DR_LILESH_PHONE;
export const DISPLAY_PRIMARY_PHONE = DR_LILESH_DISPLAY_PHONE;
export const SECONDARY_PHONE = DR_MAYUREE_PHONE;
export const DISPLAY_SECONDARY_PHONE = DR_MAYUREE_DISPLAY_PHONE;
export const CLINIC_EMAIL = "lileshshinde101@gmail.com";

// Doctor 1: Dr. Lilesh A. Shinde
export const DOCTOR_INFO: DoctorInfo = {
  name: "Dr. Lilesh A. Shinde",
  salutation: "Dr.",
  degrees: "M.D.S. (Maxillofacial Prosthodontist and Implantologist), B.D.S. (MUHS) Nashik",
  university: "Maharashtra University of Health Sciences (MUHS) Nashik",
  registrationNo: "A-49871",
  specialization: "Maxillofacial Prosthodontist and Implantologist",
  specializationMarathi: "मॅक्सिलोफेशिअल प्रोस्थोडॉन्टिस्ट आणि इम्प्लांटॉलॉजिस्ट",
  phone: DR_LILESH_PHONE,
  displayPhone: DR_LILESH_DISPLAY_PHONE,
  image: "./assets/dr-lilesh-shinde.png",
  additionalImages: ["./assets/dr-lilesh-scrubs.jpg"],
  bio: {
    en: "Dr. Lilesh A. Shinde is an M.D.S. Maxillofacial Prosthodontist and Implantologist, and B.D.S. (MUHS) Nashik graduate (Reg. No. A-49871). Dedicated to advanced restorative dentistry, full-mouth rehabilitations, precision dental implants, and specialized maxillofacial prosthetic care.",
    mr: "डॉ. लिलेश ए. शिंदे हे B.D.S. (MUHS) नाशिक आणि M.D.S. (मॅक्सिलोफेशिअल प्रोस्थोडॉन्टिक्स व इम्प्लांटॉलॉजी) पदवीधारक आहेत (नोंदणी क्र. A-49871). दंतरोग निवारण, अचूक दंत रोपण (इम्प्लांट्स), कृत्रिम अवयव आणि संपूर्ण दातांची पुनर्रचना यामध्ये विशेष तज्ज्ञता."
  },
  keyPillars: {
    en: [
      "Specialized Prosthodontic & Maxillofacial Prosthetic Care",
      "Modern Dental Implantology & Precision Rehabilitations",
      "Strict Sterilization Protocols & Hospital-Grade Hygiene Standards",
      "Patient-Centered Treatment Philosophy: Empathy, Expertise, Excellence"
    ],
    mr: [
      "प्रोस्थोडॉन्टिक्स आणि कृत्रिम अवयव (मॅक्सिलोफेशिअल) विशेष उपचार",
      "आधुनिक दंत रोपण (इम्प्लांट्स) व अचूक पुनर्रचना",
      "कडक निर्जंतुकीकरण मानके व जागतिक दर्जाची स्वच्छता",
      "रुग्ण-केंद्रित उपचार पद्धती: सहानुभूती, तज्ज्ञता, उत्कृष्टता"
    ]
  }
};

// Doctor 2: Dr. Mayuree L. Shinde (Patil)
export const DOCTOR_MAYUREE_INFO = {
  name: "Dr. Mayuree L. Shinde (Patil)",
  salutation: "Dr.",
  degrees: "B.D.S. (MUHS) PUNE",
  university: "Maharashtra University of Health Sciences (MUHS) Pune",
  registrationNo: "A-55915",
  specialization: "Smile Makeover & Cosmetic Dentist",
  specializationMarathi: "स्माईल मेकओव्हर व कॉस्मेटिक दंततज्ज्ञ",
  phone: DR_MAYUREE_PHONE,
  displayPhone: DR_MAYUREE_DISPLAY_PHONE,
  image: "./assets/dr-team-consultant.png",
  additionalImages: ["./assets/dr-mayuree-shinde.jpg"],
  bio: {
    en: "Dr. Mayuree L. Shinde (Patil), B.D.S. (MUHS) PUNE (Reg. No. A-55915), specializes in artistic smile designing, cosmetic dentistry, ceramic veneers, laminates, teeth whitening, and aesthetic composite restorations.",
    mr: "डॉ. मयुरी एल. शिंदे (पाटील), B.D.S. (MUHS) पुणे (नोंदणी क्र. A-55915), स्माईल मेकओव्हर, कॉस्मेटिक डेंटिस्ट्री, सिरॅमिक व्हिनिअर्स, दात पांढरे करणे आणि एस्थेटिक उपचारांमध्ये विशेष तज्ज्ञ."
  },
  keyPillars: {
    en: [
      "Artistic Smile Makeovers & Cosmetic Veneers",
      "Teeth Whitening & Bleaching Procedures",
      "Aesthetic Nano-Composite Enamel Restorations",
      "Gentle & Preventive Dental Care for Families"
    ],
    mr: [
      "आधुनिक स्माईल डिझायनिंग व सिरॅमिक व्हिनिअर्स",
      "दात पांढरे करण्याचे शास्त्रीय उपचार",
      "नैसर्गिक कंपोझिट फिलिंग्ज व सौंदर्यात्मक पुनर्रचना",
      "कुटुंबासाठी सौम्य व प्रतिबंधक दंत उपचार"
    ]
  }
};

export const CLINIC_DOCTORS = [
  DOCTOR_INFO,
  DOCTOR_MAYUREE_INFO
];

export const CLINIC_LOCATIONS: ClinicLocation[] = [
  {
    id: "clinic-1",
    clinicNumber: 1,
    name: "Advait Multi Speciality Clinic",
    subname: "Indira Nagar, Nashik",
    leadDoctorName: "Dr. Lilesh A. Shinde",
    leadDoctorDegree: "M.D.S., B.D.S. (MUHS) Nashik",
    leadDoctorRoleEn: "Head Prosthodontist & Implantologist",
    leadDoctorRoleMr: "प्रमुख दंततज्ज्ञ व इम्प्लांटॉलॉजिस्ट",
    leadDoctorImage: "./assets/dr-lilesh-shinde.png",
    leadDoctorPhone: DR_LILESH_PHONE,
    leadDoctorDisplayPhone: DR_LILESH_DISPLAY_PHONE,
    addressLine1: "Plot No. 20-A, Chandrabhaga,",
    addressLine2: "Opp. Shantidham Apt., Geetanjali Colony,",
    area: "Indira Nagar",
    city: "Nashik",
    pincode: "422009",
    phonePrimary: DR_LILESH_PHONE,
    phoneSecondary: DR_MAYUREE_PHONE,
    email: "lileshshinde101@gmail.com",
    mapLink: "https://www.google.com/maps/dir/?api=1&destination=Advait+Multispeciality+Dental+Clinic+and+Implant+Centre+Plot+No+20-A+Chandrabhaga+Geetanjali+Colony+Indira+Nagar+Nashik+Maharashtra+422009",
    badge: "Main Implant & Prosthodontic Centre"
  },
  {
    id: "clinic-2",
    clinicNumber: 2,
    name: "Shree Ram Multi Speciality Clinic",
    subname: "Panchavati, Nashik",
    leadDoctorName: "Dr. Mayuree L. Shinde (Patil)",
    leadDoctorDegree: "B.D.S. (MUHS) Pune",
    leadDoctorRoleEn: "Head Cosmetic Dentist & Smile Makeover",
    leadDoctorRoleMr: "प्रमुख दंततज्ज्ञ व कॉस्मेटिक स्पेशलिस्ट",
    leadDoctorImage: "./assets/dr-team-consultant.png",
    leadDoctorPhone: DR_MAYUREE_PHONE,
    leadDoctorDisplayPhone: DR_MAYUREE_DISPLAY_PHONE,
    addressLine1: "Shop No. 01, Ground Floor,",
    addressLine2: "Near SBI Bank & Swagat Sweets, Jatra Hotel Chaufali, Adgaon Shivar,",
    area: "Panchavati",
    city: "Nashik",
    pincode: "422003",
    phonePrimary: DR_MAYUREE_PHONE,
    phoneSecondary: DR_LILESH_PHONE,
    email: "lileshshinde101@gmail.com",
    mapLink: "https://www.google.com/maps/dir/?api=1&destination=Shree+Ram+Multi+Speciality+Dental+Clinic+Shop+No+01+Near+SBI+Bank+Jatra+Hotel+Chaufali+Adgaon+Shivar+Panchavati+Nashik+Maharashtra+422003",
    badge: "Speciality Dental Care Centre"
  }
];

export const TRUST_STRIP_ITEMS = [
  {
    icon: "Award",
    title: {
      en: "Specialized Prosthodontic Care",
      mr: "विशेष प्रोस्थोडॉन्टिक्स उपचार"
    },
    description: {
      en: "M.D.S. specialized prosthodontic diagnostics, smile reconstruction & full mouth rehab.",
      mr: "M.D.S. पदवीधारक विशेष तज्ज्ञांकडून प्रोस्थोडॉन्टिक उपचार व संपूर्ण मुख पुनर्रचना."
    }
  },
  {
    icon: "ShieldCheck",
    title: {
      en: "Dental Implant Expertise",
      mr: "अचूक दंत रोपण (इम्प्लांट्स)"
    },
    description: {
      en: "Single-tooth to full-arch implant solutions and implant-supported overdentures.",
      mr: "एका दातापासून ते संपूर्ण जबड्याचे आधुनिक दंत रोपण व ओव्हरडेंचर्स."
    }
  },
  {
    icon: "Layers",
    title: {
      en: "Comprehensive Dental Treatments",
      mr: "सर्वसमावेशक दंत उपचार"
    },
    description: {
      en: "All general, restorative, surgical, and cosmetic dental treatments under one roof.",
      mr: "प्राथमिक, सौंदर्यात्मक, शस्त्रक्रिया आणि सर्व दंतोपचार एकाच छताखाली."
    }
  },
  {
    icon: "HeartHandshake",
    title: {
      en: "Patient-Centered Care",
      mr: "रुग्ण-केंद्रित उपचार"
    },
    description: {
      en: "Strict sterilization standards with compassionate, personalized patient attention.",
      mr: "कडक निर्जंतुकीकरण मानके आणि सहानुभूतीपूर्वक वैयक्तिक काळजी."
    }
  }
];
