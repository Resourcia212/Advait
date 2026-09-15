import { GalleryItem, GalleryCategory } from '../types';

export interface GalleryCategoryTab {
  id: GalleryCategory;
  name: string;
  nameMarathi: string;
}

export const GALLERY_CATEGORIES: GalleryCategoryTab[] = [
  { id: 'all', name: 'All Photos', nameMarathi: 'सर्व फोटो' },
  { id: 'clinic', name: 'Clinic & Doctor', nameMarathi: 'क्लिनिक व डॉक्टर' },
  { id: 'implants-rehab', name: 'Implants & Prosthodontics', nameMarathi: 'इम्प्लांट्स व प्रोस्थोडॉन्टिक्स' },
  { id: 'maxillo-aesthetic', name: 'Maxillofacial & Aesthetics', nameMarathi: 'कृत्रिम अवयव व स्माईल डिझाईन' },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  // ==========================================
  // Category 1: Clinic & Doctor (clinic)
  // ==========================================
  {
    id: "gal-doctor",
    title: "Dr. Lilesh A. Shinde (Chief Specialist)",
    titleMarathi: "डॉ. लिलेश ए. शिंदे (प्रमुख तज्ज्ञ)",
    category: "clinic",
    imageUrl: "./assets/dr-lilesh-shinde.png",
    additionalImages: ["./assets/dr-lilesh-scrubs.jpg", "./assets/Gallery/advait-clinic-images1.png"],
    tag: "Chief Specialist",
    caption: {
      en: "Dr. Lilesh A. Shinde, B.D.S., M.D.S. (M.U.H.S.), Reg. No. A-49871. Maxillofacial Prosthodontist & Implantologist. Hover to view clinical setup.",
      mr: "डॉ. लिलेश ए. शिंदे (B.D.S., M.D.S. M.U.H.S., नोंदणी क्र. A-49871), मॅक्सिलोफेशिअल प्रोस्थोडॉन्टिस्ट आणि इम्प्लांटॉलॉजिस्ट."
    }
  },
  {
    id: "gal-doctor-mayuree",
    title: "Dr. Mayuree L. Shinde (Patil) - Smile Makeover & Cosmetic Dentist",
    titleMarathi: "डॉ. मयुरी एल. शिंदे (पाटील) - स्माईल मेकओव्हर व कॉस्मेटिक दंततज्ज्ञ",
    category: "clinic",
    imageUrl: "./assets/dr-team-consultant.png",
    additionalImages: ["./assets/dr-mayuree-shinde.jpg", "./assets/Gallery/advait-clinic-images13.png"],
    tag: "Cosmetic Dentist",
    caption: {
      en: "Dr. Mayuree L. Shinde (Patil), B.D.S. (M.U.H.S.) Pune, Reg. No. A-55915. Smile Makeover & Cosmetic Dentist. Mobile: +91 77699 27930.",
      mr: "डॉ. मयुरी एल. शिंदे (पाटील), B.D.S. (M.U.H.S.) पुणे, नोंदणी क्र. A-55915. स्माईल मेकओव्हर व कॉस्मेटिक दंततज्ज्ञ. मो. ७७६९९ २७९३०."
    }
  },
  {
    id: "gal-operatory-suite",
    title: "Modern Dental Operatory & Sterilization Suite",
    titleMarathi: "आधुनिक दंतोपचार दालन व निर्जंतुकीकरण कक्ष",
    category: "clinic",
    imageUrl: "./assets/Gallery/modern-dental-operatory-full-setup.png",
    tag: "Operatory Suite",
    featuredInAll: true,
    caption: {
      en: "State-of-the-art operatory equipped with an ergonomic dental chair, hospital-grade sterilization protocols, and digital monitoring.",
      mr: "आधुनिक दंत खुर्ची, जागतिक दर्जाची स्वच्छता आणि डिजिटल उपकरणांनी सुसज्ज उपचार दालन."
    }
  },
  {
    id: "gal-clinical-consultation",
    title: "Clinical Consultation & Treatment Planning",
    titleMarathi: "रुग्ण तपासणी व उपचार नियोजन",
    category: "clinic",
    imageUrl: "./assets/Gallery/advait-clinic-images3.png",
    tag: "Patient Consultation",
    featuredInAll: true,
    caption: {
      en: "Detailed, empathetic one-on-one consultation with digital radiographic evaluations to design individualized treatment plans.",
      mr: "डिजिटल एक्स-रे व सविस्तर मार्गदर्शनासह रुग्णांसाठी वैयक्तिक उपचार नियोजन."
    }
  },
  {
    id: "gal-doctors-team-care",
    title: "Collaborative Surgical Team & Live Care",
    titleMarathi: "तज्ज्ञ डॉक्टरांचे संयुक्त उपचार व रुग्णसेवा",
    category: "clinic",
    imageUrl: "./assets/Gallery/advait-doctors-team-surgical-operatory.png",
    additionalImages: ["./assets/Gallery/clinical-surgery-grayscale-archival.png"],
    tag: "Collaborative Care",
    featuredInAll: true,
    caption: {
      en: "Dr. Lilesh Shinde and Dr. Mayuree Shinde delivering synchronized, gentle clinical care in sterile operatory conditions.",
      mr: "डॉ. लिलेश शिंदे व डॉ. मयुरी शिंदे यांच्यामार्फत सौम्य, सुरक्षित व अचूक दंतोपचार."
    }
  },

  // ==========================================
  // Category 2: Implants & Prosthodontics (implants-rehab)
  // ==========================================
  {
    id: "gal-implant-surgery",
    title: "Precision Dental Implant Surgical Suite",
    titleMarathi: "अचूक दंत रोपण (इम्प्लांट) शस्त्रक्रिया",
    category: "implants-rehab",
    imageUrl: "./assets/Gallery/dr-shinde-clinical-implant-surgery.png",
    tag: "Implant Surgery",
    featuredInAll: true,
    caption: {
      en: "Advanced implant placement utilizing real-time digital radiographic display and precision surgical protocols.",
      mr: "डिजिटल एक्स-रे मॉनिटर व अचूक तंत्रज्ञानासह टायटॅनियम दंत रोपण शस्त्रक्रिया."
    }
  },
  {
    id: "gal-guided-implantology",
    title: "Guided Implantology & 3D Diagnostics",
    titleMarathi: "गाइडेड इम्प्लांटॉलॉजी व 3D डिजिटल तपासणी",
    category: "implants-rehab",
    imageUrl: "./assets/Gallery/guided-implantology-digital-radiograph-suite.png",
    tag: "Digital Implantology",
    featuredInAll: false,
    caption: {
      en: "Real-time integration of 3D bone diagnostics and sterile surgical execution for permanent tooth replacements.",
      mr: "3D बोन मॅपिंग व प्रगत उपकरणांच्या साहाय्याने कायमस्वरूपी दात बसवण्याची प्रक्रिया."
    }
  },
  {
    id: "gal-precision-rotary",
    title: "Precision Restorative & Rotary Prosthodontics",
    titleMarathi: "अचूक रिस्टोरेटिव्ह व रोटरी प्रोस्थोडॉन्टिक्स",
    category: "implants-rehab",
    imageUrl: "./assets/Gallery/precision-restorative-rotary-treatment.png",
    tag: "Restorative Dentistry",
    featuredInAll: false,
    caption: {
      en: "High-precision rotary instruments restoring worn dentitions, root canals, and crown abutments with micro-accuracy.",
      mr: "मायक्रो-अचूकतेने दात भरणे, रूट कॅनॉल व क्राउन फिटिंगचे आधुनिक उपचार."
    }
  },
  {
    id: "gal-top-angle-procedure",
    title: "Specialized Oral Rehabilitation Procedure",
    titleMarathi: "विशेष संपूर्ण मुख दंतोपचार",
    category: "implants-rehab",
    imageUrl: "./assets/Gallery/top-angle-dental-operatory-procedure.png",
    tag: "Surgical Precision",
    featuredInAll: false,
    caption: {
      en: "Top-down perspective demonstrating sterile field maintenance and synchronized clinical execution.",
      mr: "कडक निर्जंतुकीकरण मानके व आधुनिक साधनांसह नियोजनबद्ध उपचार."
    }
  },
  {
    id: "gal-case-8",
    title: "Implant-Supported Overdenture Solutions",
    titleMarathi: "इम्प्लांट सपोर्टेड ओव्हरडेंचर कवळी",
    category: "implants-rehab",
    imageUrl: "./assets/Gallery/advait-clinic-images8.png",
    tag: "Denture Solutions",
    caption: {
      en: "Secure snap-on overdentures locked onto dental implants, eliminating slipping and restoring chewing comfort.",
      mr: "इम्प्लांट्सवर लॉक होणारी मजबूत व न निसटणारी आधुनिक कवळी."
    }
  },
  {
    id: "gal-case-6",
    title: "Fixed Zirconia Multi-Unit Crown & Bridge",
    titleMarathi: "झिर्कोनिया पक्के दात व ब्रिज",
    category: "implants-rehab",
    imageUrl: "./assets/Gallery/advait-clinic-images6.png",
    tag: "Fixed Restorations",
    caption: {
      en: "High-strength metal-free zirconia crowns and multi-unit bridges for optimal chewing strength and natural aesthetics.",
      mr: "उच्च ताकदीचे झिर्कोनिया क्राऊन्स व ब्रिज (पक्के दात)."
    }
  },
  {
    id: "gal-case-12",
    title: "Full-Arch Precision Implant Reconstruction",
    titleMarathi: "संपूर्ण जबड्याचे फिक्स इम्प्लांट दंत रोपण",
    category: "implants-rehab",
    imageUrl: "./assets/Gallery/advait-clinic-images12.png",
    tag: "Full Arch Implants",
    caption: {
      en: "Full arch fixed prosthetic bridge permanently anchored on strategically positioned dental implants.",
      mr: "संपूर्ण जबड्यावर फिक्स पक्के दात बसवण्याची आधुनिक इम्प्लांट पद्धत."
    }
  },
  {
    id: "gal-case-9",
    title: "TMJ Occlusal Therapy & Milled Splints",
    titleMarathi: "TMJ सांधेदुखी उपचार व मिल्ड स्प्लिंट",
    category: "implants-rehab",
    imageUrl: "./assets/Gallery/advait-clinic-images9.png",
    tag: "Jaw Joint Therapy",
    caption: {
      en: "CAD/CAM fabricated milled occlusal splints for temporomandibular joint pain, clicking, and teeth grinding (bruxism).",
      mr: "जबड्याच्या सांधेदुखी व दात खाण्याच्या सवयीवर आराम देणारा अचूक स्प्लिंट."
    }
  },

  // ==========================================
  // Category 3: Maxillofacial & Aesthetics (maxillo-aesthetic)
  // ==========================================
  {
    id: "gal-case-2",
    title: "Orbital & Ocular Maxillofacial Prosthesis",
    titleMarathi: "डोळ्याचे कृत्रिम अवयव (मॅक्सिलोफेशिअल)",
    category: "maxillo-aesthetic",
    imageUrl: "./assets/Gallery/advait-clinic-images2.png",
    tag: "Maxillofacial Prosthesis",
    caption: {
      en: "Precision skin shade-matched ocular and orbital prosthesis restoring natural facial aesthetics and patient dignity.",
      mr: "रुग्णाच्या त्वचेच्या रंगाशी तंतोतंत जुळणारे अचूक डोळ्याचे कृत्रिम अवयव."
    }
  },
  {
    id: "gal-case-4",
    title: "Custom Silicone Finger & Cranial Prosthesis",
    titleMarathi: "सिलिकॉन बोट व कवटीचे कृत्रिम अवयव",
    category: "maxillo-aesthetic",
    imageUrl: "./assets/Gallery/advait-clinic-images4.png",
    tag: "Prosthetic Care",
    caption: {
      en: "Medical-grade silicone finger prosthesis with realistic acrylic nails, skin creases, and comfortable retention.",
      mr: "नैसर्गिक नखे व त्वचेच्या संरचनेसह तयार केलेले सिलिकॉन कृत्रिम अवयव."
    }
  },
  {
    id: "gal-case-5",
    title: "Smile Makeover & Porcelain Veneers",
    titleMarathi: "स्माईल डिझायनिंग व सिरॅमिक व्हिनिअर्स",
    category: "maxillo-aesthetic",
    imageUrl: "./assets/Gallery/advait-clinic-images5.png",
    tag: "Cosmetic Dentistry",
    caption: {
      en: "Artistic ceramic veneers and laminates transforming chipped, discolored, or misaligned teeth into a radiant smile.",
      mr: "सिरॅमिक व्हिनिअर्स व लॅमिनेट्सद्वारे आकर्षक, नैसर्गिक व सुंदर हास्य."
    }
  },
  {
    id: "gal-case-7",
    title: "Auricular & Nasal Prosthetic Reconstruction",
    titleMarathi: "कान व नाकाचे कृत्रिम अवयव पुनर्रचना",
    category: "maxillo-aesthetic",
    imageUrl: "./assets/Gallery/advait-clinic-images7.png",
    tag: "Super Specialty",
    caption: {
      en: "Custom anatomical silicone ear and nose prostheses rehabilitating post-surgical and congenital craniofacial defects.",
      mr: "शस्त्रक्रियेनंतर अथवा जन्मतः नसलेल्या कान व नाकाचे सिलिकॉन कृत्रिम अवयव."
    }
  },
  {
    id: "gal-case-10",
    title: "Cleft Palate & Surgical Obturator Rehabilitation",
    titleMarathi: "टाळू दोष व सर्जिकल ऑब्ट्युरेटर उपचार",
    category: "maxillo-aesthetic",
    imageUrl: "./assets/Gallery/advait-clinic-images10.png",
    tag: "Maxillofacial Prosthesis",
    caption: {
      en: "Specialized prosthetic obturators sealing palatal defects to normalize swallowing, eating, and clear speech resonance.",
      mr: "टाळूच्या दोषांवर गिळणे, जेवणे व बोलणे पूर्ववत करणारे ऑब्ट्युरेटर."
    }
  },
  {
    id: "gal-case-11",
    title: "Aesthetic Composite Restorations & Tooth Jewellery",
    titleMarathi: "एस्थेटिक कंपोझिट व टूथ ज्वेलरी",
    category: "maxillo-aesthetic",
    imageUrl: "./assets/Gallery/advait-clinic-images11.png",
    tag: "Aesthetic Dentistry",
    caption: {
      en: "Direct nano-hybrid composite restorations seamlessly blending with natural enamel for invisible repairs.",
      mr: "नैसर्गिक दातांसारखे दिसणारे अदृश्य कंपोझिट फिलिंग्ज."
    }
  }
];
