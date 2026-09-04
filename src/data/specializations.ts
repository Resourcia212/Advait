import { MaxillofacialProsthesisItem } from '../types';

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
