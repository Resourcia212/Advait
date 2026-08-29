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
  {
    id: "gal-doctor",
    title: "Dr. Lilesh A. Shinde (Chief Specialist)",
    titleMarathi: "डॉ. लिलेश ए. शिंदे (प्रमुख तज्ज्ञ)",
    category: "clinic",
    imageUrl: "./assets/dr-lilesh-shinde.png",
    additionalImages: ["./assets/dr-lilesh-scrubs.jpg"],
    tag: "Doctor Profile (Hover to Flip)",
    caption: {
      en: "Dr. Lilesh A. Shinde, B.D.S., M.D.S. (M.U.H.S.), Reg. No. A-49871. Maxillofacial Prosthodontist & Implantologist. Hover or click to view clinical setup.",
      mr: "डॉ. लिलेश ए. शिंदे (B.D.S., M.D.S. M.U.H.S., नोंदणी क्र. A-49871), मॅक्सिलोफेशिअल प्रोस्थोडॉन्टिस्ट आणि इम्प्लांटॉलॉजिस्ट."
    }
  },
  {
    id: "gal-doctor-mayuree",
    title: "Dr. Mayuree L. Shinde (Patil) - Smile Makeover & Cosmetic Dentist",
    titleMarathi: "डॉ. मयुरी एल. शिंदे (पाटील) - स्माईल मेकओव्हर व कॉस्मेटिक दंततज्ज्ञ",
    category: "clinic",
    imageUrl: "./assets/dr-team-consultant.png",
    additionalImages: ["./assets/dr-mayuree-shinde.jpg"],
    tag: "Cosmetic Dentist (Hover to Flip)",
    caption: {
      en: "Dr. Mayuree L. Shinde (Patil), B.D.S. (M.U.H.S.) Pune, Reg. No. A-55915. Smile Makeover & Cosmetic Dentist. Mobile: +91 77699 27930. (Hover to view in clinical scrubs).",
      mr: "डॉ. मयुरी एल. शिंदे (पाटील), B.D.S. (M.U.H.S.) पुणे, नोंदणी क्र. A-55915. स्माईल मेकओव्हर व कॉस्मेटिक दंततज्ज्ञ. मो. ७७६९९ २७९३०."
    }
  },
  {
    id: "gal-case-1",
    title: "Full Mouth Rehabilitation & Bite Correction",
    titleMarathi: "संपूर्ण दातांची पुनर्रचना व चावा दुरुस्ती",
    category: "implants-rehab",
    imageUrl: "./assets/Gallery/advait-clinic-images1.png",
    tag: "Prosthodontics",
    caption: {
      en: "Comprehensive full-mouth rehabilitation correcting severe attrition, bite collapse, and restoring natural masticatory function.",
      mr: "घसलेल्या दातांची अचूक चावा दुरुस्ती व संपूर्ण मुख पुनर्रचना उपचार."
    }
  },
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
    id: "gal-case-3",
    title: "Dental Implant Precision Placement",
    titleMarathi: "अचूक दंत रोपण (इम्प्लांट्स)",
    category: "implants-rehab",
    imageUrl: "./assets/Gallery/advait-clinic-images3.png",
    tag: "Dental Implants",
    caption: {
      en: "Biocompatible titanium dental implants restoring missing teeth with lifelong stability and bone preservation.",
      mr: "नैसर्गिक दातांप्रमाणे मजबूत आणि कायमस्वरूपी टायटॅनियम दंत रोपण."
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
  }
];
