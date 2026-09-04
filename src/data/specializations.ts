import { SpecializationCardData, MaxillofacialProsthesisItem } from '../types';

export const SPECIALIZATIONS_DATA: SpecializationCardData[] = [
  {
    id: "dental-implants",
    title: "Dental Implants",
    titleMarathi: "दंत रोपण (इम्प्लांट्स)",
    subtitle: "Permanent Tooth Replacement",
    category: "Implantology",
    iconName: "ShieldCheck",
    badge: "Core Specialty",
    description: {
      en: "Advanced titanium root replacement technology to permanently restore missing single teeth, multiple gaps, or support stable overdentures with natural bite force.",
      mr: "गहाळ झालेल्या एका किंवा अनेक दातांच्या जागी टायटॅनियम मुळांद्वारे कायमस्वरूपी नवीन दात बसवण्याचे आधुनिक तंत्रज्ञान."
    },
    subItems: [
      { en: "Single & Multiple Tooth Implants", mr: "एका किंवा अधिक दातांचे रोपण" },
      { en: "Implant Supported Overdentures", mr: "इम्प्लांट सपोर्टेड ओव्हरडेंचर्स" },
      { en: "Full Arch Implant Rehabilitation", mr: "संपूर्ण जबड्याचे दंत रोपण" }
    ]
  },
  {
    id: "maxillofacial-prosthesis",
    title: "Maxillofacial Prosthesis",
    titleMarathi: "मॅक्सिलोफेशिअल कृत्रिम अवयव",
    subtitle: "Craniofacial Reconstruction",
    category: "Prosthodontics",
    iconName: "UserCheck",
    badge: "Super Specialized",
    description: {
      en: "Specialized prosthetic rehabilitation for congenital defects or surgical resections including eye, nose, ear, palate obturators, and finger prostheses.",
      mr: "जन्मजात दोष, अपघात किंवा शस्त्रक्रियेनंतर चेहऱ्याचे अवयव (डोळे, नाक, कान, टाळू, बोटे) पूर्ववत करण्यासाठी उच्च दर्जाचे कृत्रिम अवयव."
    },
    subItems: [
      { en: "Orbital / Ocular, Nasal & Ear Prosthesis", mr: "डोळे, नाक आणि कान कृत्रिम अवयव" },
      { en: "Cleft Lip / Palate & Obturators", mr: "फाटलेले ओठ/टाळू व ऑब्च्यूरेटर" },
      { en: "Silicone Finger & Digit Prosthesis", mr: "हाता-पायांची सिलिकॉन बोटे" }
    ]
  },
  {
    id: "smile-design",
    title: "Smile Designing & Cosmetic Dentistry",
    titleMarathi: "स्माईल डिझाईन: हास्याची पुनर्रचना",
    subtitle: "Aesthetic Harmony",
    category: "Cosmetics",
    iconName: "Sparkles",
    badge: "Aesthetic Care",
    description: {
      en: "Customized cosmetic smile enhancement utilizing ceramic veneers, laminates, teeth bleaching, composite sculpting, and tooth jewellery for radiant natural smiles.",
      mr: "व्हिनिअर्स, लॅमिनेट्स, दात शुभ्र करणे (ब्लिचिंग), कंपोझिट आणि टूथ ज्वेलरीद्वारे नैसर्गिक व आकर्षक हास्याची पुनर्रचना."
    },
    subItems: [
      { en: "Porcelain Veneers & Laminates", mr: "व्हिनिअर्स व लॅमिनेट्स" },
      { en: "Teeth Whitening / Bleaching", mr: "दात शुभ्र करणे (ब्लिचिंग)" },
      { en: "Aesthetic Tooth Jewellery & Composite", mr: "टूथ ज्वेलरी व कंपोझिट" }
    ]
  },
  {
    id: "full-mouth-rehab",
    title: "Full Mouth Rehabilitation",
    titleMarathi: "संपूर्ण दातांची पुनर्रचना",
    subtitle: "Complete Functional Renewal",
    category: "Prosthodontics",
    iconName: "Layers",
    description: {
      en: "Comprehensive full-arch and full-mouth restorative reconstruction to correct severe tooth wear, collapsed bite vertical dimension, multiple missing teeth, and functional chewing disorders.",
      mr: "घसलेले दात, चुकीचा चावा आणि अनेक तुटलेल्या/गहाळ दातांसाठी आधुनिक पद्धतीने संपूर्ण तोंडाची व दातांची पुनर्रचना."
    },
    subItems: [
      { en: "Bite Correction & Occlusal Rehabilitation", mr: "चावा दुरुस्ती व पुनर्रचना" },
      { en: "Combined Crowns, Bridges & Implants", mr: "क्राउन्स, ब्रिजेस आणि इम्प्लांट्सचे संयोजन" },
      { en: "Long-term Functional Restoration", mr: "दीर्घकालीन चघळण्याची कार्यक्षमता" }
    ]
  },
  {
    id: "denture-solutions",
    title: "Advanced Denture Solutions",
    titleMarathi: "कवळीचे विविध आधुनिक प्रकार",
    subtitle: "Comfort & Stability",
    category: "Prosthodontics",
    iconName: "Activity",
    description: {
      en: "Comprehensive options tailored to patient needs: Complete Dentures, Cast Partial Dentures, flexible lightweight dentures, implant-retained overdentures, and immediate post-extraction dentures.",
      mr: "रुग्णाच्या गरजेनुसार संपूर्ण बसिसी, अंशिक कवळी, फ्लेक्सीबल कवळी, इम्प्लांट सपोर्टेड ओव्हरडेंचर आणि त्वरित कवळीचे पर्याय."
    },
    subItems: [
      { en: "Complete Dentures (बसिसी)", mr: "संपूर्ण कवळी (बसिसी)" },
      { en: "Cast Partial & Flexible Dentures", mr: "अंशिक व फ्लेक्सीबल कवळी" },
      { en: "Overdentures & Immediate Dentures", mr: "ओव्हर डेंचर व त्वरित कवळी" }
    ]
  },
  {
    id: "crowns-and-bridges",
    title: "Dental Crowns & Fixed Bridges",
    titleMarathi: "डेंटल क्राउन्स आणि फिक्स ब्रीज",
    subtitle: "Fixed Dental Restorations",
    category: "Restorative",
    iconName: "Hammer",
    description: {
      en: "Precision-engineered fixed crowns and bridges (पक्के दात) to protect root-canal-treated teeth, replace missing teeth without surgery, and restore natural chewing stability.",
      mr: "रूट कॅनॉल केलेल्या दातांचे संरक्षण करण्यासाठी व गहाळ दात भरून काढण्यासाठी मजबूत आणि नैसर्गिक दिसणारे पक्के दात (फिक्स ब्रीज)."
    },
    subItems: [
      { en: "Ceramic & Zirconia Crowns", mr: "सिरॅमिक व झिरकोनिया क्राउन्स" },
      { en: "Multi-Unit Fixed Bridges", mr: "मजबूत फिक्स ब्रीज" },
      { en: "Post and Core Foundation Build-up", mr: "पोस्ट आणि कोअर फाउंडेशन" }
    ]
  },
  {
    id: "tmj-splints",
    title: "TMJ Disorders & Occlusal Splints",
    titleMarathi: "TMJ दोष : निदान व उपचार",
    subtitle: "Jaw Joint Care",
    category: "Specialized",
    iconName: "Stethoscope",
    description: {
      en: "Accurate diagnosis and therapeutic management of temporomandibular joint pain, clicking, teeth grinding (bruxism), and muscle spasms using custom fabricated milled occlusal splints.",
      mr: "जबड्याच्या सांध्याचे दुखणे, आवाज येणे, दात खाणे या विकारांवर अचूक निदान व फॅब्रिकेटेड मिल्ड स्प्लिंट्सद्वारे उपचार."
    },
    subItems: [
      { en: "Fabricated Milled Splints", mr: "फॅब्रिकेटेड मिल्ड स्प्लिंट्स" },
      { en: "Bruxism & Night Grinding Management", mr: "दात खाणे व जबडा ताण नियंत्रण" },
      { en: "Jaw Joint Pain Relief Protocols", mr: "सांधेदुखी व चावा सुधारणा" }
    ]
  },
  {
    id: "post-and-core",
    title: "Post & Core Restorations",
    titleMarathi: "पोस्ट आणि कोअर (Post & Core)",
    subtitle: "Structural Foundation",
    category: "Restorative",
    iconName: "Wrench",
    description: {
      en: "Endodontic post placement within root canal treated teeth to rebuild severely broken-down crown structure prior to final crown placement.",
      mr: "खूप जास्त खराब झालेल्या किंवा तुटलेल्या दातांना मुळापासून मजबुती देऊन क्राउन बसवण्यासाठी आधार तयार करणे."
    },
    subItems: [
      { en: "Fiber Post Reinforcement", mr: "फायबर पोस्ट मजबुती" },
      { en: "Core Build-up Structure", mr: "कोअर स्ट्रक्चर पुनर्रचना" },
      { en: "Long-term Crown Retention", mr: "दीर्घकाळ क्राउन टिकवण्यासाठी आधार" }
    ]
  }
];

export const MAXILLOFACIAL_PROSTHESIS_ITEMS: MaxillofacialProsthesisItem[] = [
  {
    id: "orbital-ocular",
    title: "Orbital & Ocular Prosthesis",
    titleMarathi: "ऑर्बिटल / ऑक्युलर (डोळे) कृत्रिम अवयव",
    organName: "Eye & Orbit",
    organNameMarathi: "डोळा व डोळ्याची जागा",
    description: {
      en: "Custom hand-crafted ocular and orbital prostheses with precise iris painting and skin tone shade matching to achieve symmetric, natural facial aesthetics.",
      mr: "रुग्णाच्या डोळ्याचा नैसर्गिक रंग, बाहुली व चेहऱ्याच्या त्वचेच्या रंगाशी हुबेहूब जुळणारे कृत्रिम डोळे."
    },
    clinicalObjective: {
      en: "Restores facial symmetry, eye socket contour, and psychological confidence following surgical enucleation or exenteration.",
      mr: "शस्त्रक्रियेनंतर चेहऱ्याचे सौंदर्य व रुग्णाचा आत्मविश्वास पूर्ववत करणे."
    },
    iconName: "Eye",
    tags: ["Shade Matched", "Anatomical Iris", "Surgical Rehab"]
  },
  {
    id: "nasal",
    title: "Nasal Prosthesis",
    titleMarathi: "नाकाचे कृत्रिम अवयव (Nasal Prosthesis)",
    organName: "Nose",
    organNameMarathi: "नाक",
    description: {
      en: "Biocompatible medical-grade silicone nasal reconstruction tailored to the individual's facial contours, nasal bridge, and skin tone.",
      mr: "वैद्यकीय सिलिकॉनद्वारे चेहऱ्याच्या आकारानुसार तयार केलेले नाकाचे नैसर्गिक दिसणारे कृत्रिम अवयव."
    },
    clinicalObjective: {
      en: "Re-establishes mid-face anatomical aesthetics, air pathway protection, and moisture balance.",
      mr: "चेहऱ्याचा मध्यभाग, श्वासमार्गाचे संरक्षण आणि नैसर्गिक स्वरूप देणे."
    },
    iconName: "Smile",
    tags: ["Medical Silicone", "Contour Matching", "Aesthetic"]
  },
  {
    id: "ear-auricular",
    title: "Ear (Auricular) Prosthesis",
    titleMarathi: "कानाचे कृत्रिम अवयव (Ear Prosthesis)",
    organName: "External Ear",
    organNameMarathi: "बाहेरचा कान",
    description: {
      en: "Custom anatomical ear prosthesis replicating cartilage folds, antihelix contours, and skin pigmentation for microtia or trauma cases.",
      mr: "जन्मजात कान नसणे किंवा अपघातात कान गमावल्यास हुबेहूब कानाच्या रचनेसारखे कृत्रिम अवयव."
    },
    clinicalObjective: {
      en: "Provides anatomical symmetry with the contralateral ear and supports eyeglasses retention.",
      mr: "दुसऱ्या कानासारखीच सममिती आणि चष्मा घालण्यासाठी आधार प्रदान करणे."
    },
    iconName: "Headphones",
    tags: ["Microtia", "Trauma Rehab", "Cartilage Replication"]
  },
  {
    id: "cleft-lip-palate",
    title: "Cleft Lip & Palate Prosthesis",
    titleMarathi: "दुभंगलेले / फाटलेले ओठ व टाळू कृत्रिम उपचार",
    organName: "Lip & Palate",
    organNameMarathi: "ओठ व टाळू",
    description: {
      en: "Specialized prosthetic speech aids, feeding plates, and obturators for pediatric and adult patients with congenital cleft lip and palate.",
      mr: "जन्मजात फाटलेले ओठ व टाळू असणाऱ्या रुग्णांसाठी बोलणे व खाणे सोपे करणारी विशेष उपकरणे."
    },
    clinicalObjective: {
      en: "Seals the oronasal communication, normalizes speech resonance, and prevents food regurgitation.",
      mr: "तोंड व नाक यामधील फट बंद करून अन्न नाकात जाणे रोखणे व स्पष्ट बोलण्यास मदत करणे."
    },
    iconName: "Heart",
    tags: ["Congenital Care", "Speech Aid", "Feeding Plates"]
  },
  {
    id: "obturator-prosthesis",
    title: "Maxillary Obturator Prosthesis",
    titleMarathi: "ऑब्च्यूरेटर कृत्रिम अवयव (Obturator)",
    organName: "Maxilla / Palate Defect",
    organNameMarathi: "वरचा जबडा / टाळू",
    description: {
      en: "Prosthetic device that closes an opening in the hard or soft palate resulting from maxillectomy, oral oncology, or traumatic injury.",
      mr: "कर्करोगाच्या शस्त्रक्रियेनंतर वरच्या टाळूमध्ये पडलेली पोकळी बंद करण्यासाठी बनवलेले विशेष साधन."
    },
    clinicalObjective: {
      en: "Enables normal swallowing, speech without hypernasality, and provides dental occlusion for mastication.",
      mr: "अन्न गिळणे, पाणी पिणे आणि स्पष्ट बोलणे शक्य करणे."
    },
    iconName: "Layers",
    tags: ["Post-Maxillectomy", "Oronasal Seal", "Functional Chewing"]
  },
  {
    id: "finger-prosthesis",
    title: "Silicone Finger Prosthesis",
    titleMarathi: "हातांची व पायांची बोटे कृत्रिम अवयव (Finger Prosthesis)",
    organName: "Fingers & Toes",
    organNameMarathi: "हाताची व पायाची बोटे",
    description: {
      en: "Realistic silicone finger and digit prostheses featuring lifelike skin texture, wrinkles, dorsal/palmar anatomy, and acrylic nail beds.",
      mr: "हाताची किंवा पायाची बोटे तुटल्यास नैसर्गिक नखे, त्वचेच्या सुरकुत्या आणि रंगासह हुबेहूब दिसणारी सिलिकॉन बोटे."
    },
    clinicalObjective: {
      en: "Restores hand aesthetics, opposition support for holding objects, and self-confidence.",
      mr: "हाताचे सौंदर्य, वस्तू पकडण्यासाठी आधार आणि आत्मविश्वास परत मिळवणे."
    },
    iconName: "Hand",
    tags: ["Silicone Digit", "Acrylic Nail", "Dorsal/Palmar Details"]
  }
];
