import { ServiceItem, CategoryInfo } from '../types';

export const SERVICE_CATEGORIES: CategoryInfo[] = [
  {
    id: 'implantology',
    name: 'Dental Implants & Prosthodontics',
    nameMarathi: 'दंत रोपण (इम्प्लांट्स) व प्रोस्थोडॉन्टिक्स',
    icon: 'ShieldCheck',
    description: {
      en: 'Precision titanium dental implants, implant-retained overdentures, complete dentures (बसिसी), and full mouth rehabilitation.',
      mr: 'कायमस्वरूपी टायटॅनियम दंत रोपण, इम्प्लांट ओव्हरडेंचर्स, आधुनिक बसिसी व संपूर्ण मुख पुनर्रचना.'
    }
  },
  {
    id: 'maxillofacial',
    name: 'Maxillofacial Prosthesis',
    nameMarathi: 'मॅक्सिलोफेशिअल कृत्रिम अवयव',
    icon: 'UserCheck',
    description: {
      en: 'Specialized artificial eye, nose, ear, cheek, obturator, cleft palate, and finger prostheses.',
      mr: 'डोळे, नाक, कान, गाल, टाळू व बोटांचे वैद्यकीय दर्जाचे कृत्रिम अवयव.'
    }
  },
  {
    id: 'cosmetic',
    name: 'Smile Designing & Cosmetics',
    nameMarathi: 'स्माईल डिझायनिंग व कॉस्मेटिक्स',
    icon: 'Sparkles',
    description: {
      en: 'Porcelain veneers, clinical teeth bleaching, tooth jewellery, and tailored smile makeovers.',
      mr: 'व्हिनिअर्स, दात शुभ्र करणे, टूथ ज्वेलरी आणि आकर्षक हास्याची पुनर्रचना.'
    }
  },
  {
    id: 'restorative',
    name: 'Restorative Care & RCT',
    nameMarathi: 'रिस्टोरेटिव्ह व रूट कॅनॉल',
    icon: 'Hammer',
    description: {
      en: 'Single-sitting Root Canal Treatment (RCT), high-strength Zirconia crowns, bridges, post & core, and TMJ splints.',
      mr: 'रूट कॅनॉल (RCT), दर्जेदार क्राउन्स, पक्के ब्रीज, पोस्ट-कोअर आणि जबड्याचे सांधेदुखी स्प्लिंट्स.'
    }
  },
  {
    id: 'preventive-general',
    name: 'Preventive & General Dentistry',
    nameMarathi: 'प्रतिबंधक व सामान्य दंतचिकित्सा',
    icon: 'Shield',
    description: {
      en: 'Routine cleanings, scaling & polishing, digital dental X-rays, fluoride care, and gentle extractions.',
      mr: 'नियमित स्वच्छता (स्केलिंग), डिजिटल एक्सरे, फ्ल्युराईड लेप व दात काढणे.'
    }
  }
];

export const ALL_SERVICES: ServiceItem[] = [
  // 1. Preventive & General
  {
    id: "scaling-polishing",
    name: "Scaling and Polishing",
    nameMarathi: "मशिनने दात साफ करणे (Scaling & Polishing)",
    category: "preventive-general",
    shortDescription: {
      en: "Ultrasonic removal of tartar, calculus, and surface stains to prevent gum disease and freshen breath.",
      mr: "अल्ट्रासॉनिक मशिनद्वारे दातांवरील पिवळे थर, डाग व किटाणू काढून हिरड्या निरोगी ठेवणे."
    },
    fullDescription: {
      en: "Professional ultrasonic scaling gently dislodges hardened calculus and bacterial plaque deposits from teeth surfaces and beneath the gumline, followed by fine polishing to make surfaces smooth.",
      mr: "दातांवर साचलेला कडक क्षार (कॅल्क्युलस) व घाण मशिनद्वारे न दुखवता साफ केली जाते, ज्यामुळे हिरड्यांचे आजार टळतात."
    },
    indications: {
      en: ["Stained teeth from tea/coffee", "Bleeding or swollen gums", "Bad breath (halitosis)", "Routine 6-month cleaning"],
      mr: ["दातांवरील डाग", "हिरड्यांमधून रक्त येणे", "तोंडाची दुर्गंधी", "दर ६ महिन्यांची नियमित स्वच्छता"]
    },
    keyHighlights: {
      en: ["Ultrasonic painless vibration", "Protects enamel & gums", "Improves oral hygiene"],
      mr: ["अल्ट्रासॉनिक तंत्रज्ञान", "हिरड्यांचे संरक्षण", "तोंडाची ताजी हवा"]
    },
    iconName: "Sparkles",
    isFeatured: true
  },
  {
    id: "fluoride-application",
    name: "Fluoride Application",
    nameMarathi: "दातांवर फ्ल्युराईड लावणे (Fluoride Application)",
    category: "preventive-general",
    shortDescription: {
      en: "Topical medical fluoride treatment to strengthen tooth enamel and resist acid breakdown.",
      mr: "दातांची झीज रोखण्यासाठी आणि इनॅमल मजबूत करण्यासाठी फ्ल्युराईडचा सुरक्षित लेप."
    },
    fullDescription: {
      en: "Concentrated fluoride varnish or gel is applied directly onto teeth to remineralize weakened enamel, reverse microscopic early lesions, and provide robust decay resistance.",
      mr: "लहान मुलांच्या व प्रौढांच्या दातांना किडण्यापासून वाचवण्यासाठी फ्ल्युराईडची संरक्षक उपचार पद्धती."
    },
    indications: {
      en: ["High risk of dental cavities", "Tooth sensitivity to cold/sweet", "Children & young adults", "Dry mouth conditions"],
      mr: ["वारंवार दात किडणे", "थंड-गोड खाताना दात झिणझिणणे", "लहान मुलांचे दात संरक्षण"]
    },
    keyHighlights: {
      en: ["Strengthens tooth enamel", "Reduces dental sensitivity", "Quick in-clinic application"],
      mr: ["इनॅमल मजबुती", "संवेदनशीलता कमी", "जलद उपचार"]
    },
    iconName: "Shield"
  },
  {
    id: "cavity-filling",
    name: "Cavity Filling",
    nameMarathi: "दात भरणे - चांदी / सिमेंट (Cavity Filling)",
    category: "preventive-general",
    shortDescription: {
      en: "Precise excavation of decayed tooth structure and restoration with durable silver amalgam or biocompatible cements.",
      mr: "किडलेल्या दातातील घाण साफ करून चांदी किंवा दर्जेदार सिमेंट भरून दात सुरक्षित करणे."
    },
    fullDescription: {
      en: "Restores tooth anatomy after removing decay, stopping the progression into deeper pulp tissues and restoring comfortable chewing function.",
      mr: "दात किडल्यामुळे पडलेले खड्डे स्वच्छ करून त्यात आधुनिक सिमेंट किंवा चांदी भरून दात मजबूत केला जातो."
    },
    indications: {
      en: ["Dental decay / black spots", "Food lodgement between teeth", "Mild toothache on chewing"],
      mr: ["दातांमधील काळे डाग / कीड", "खाताना अन्न अडकणे", "चघळताना बारीक कळ मारणे"]
    },
    keyHighlights: {
      en: ["Stops decay progression", "Restores chewing strength", "Long-lasting restoration"],
      mr: ["कीड वाढणे थांबते", "चघळण्याची ताकद पूर्ववत", "टिकाऊ"]
    },
    iconName: "Hammer"
  },
  {
    id: "dental-xrays",
    name: "Dental X-rays",
    nameMarathi: "दातांचा एक्सरे (Dental X-Rays)",
    category: "preventive-general",
    shortDescription: {
      en: "High-resolution digital radiographic imaging for accurate diagnosis of hidden cavities, bone levels, and root infections.",
      mr: "दातांची मुळे, जबड्याचे हाड आणि आत लपलेली कीड अचूक तपासण्यासाठी आधुनिक डिजिटल एक्सरे."
    },
    fullDescription: {
      en: "Low-radiation digital radiography enables our specialists to inspect interdental cavities, root canal anatomy, bone support, and impactions with sharp clarity.",
      mr: "डोळ्यांना न दिसणारे दातांच्या मुळांमधील इन्फेक्शन, हाडांची स्थिती समजण्यासाठी डिजिटल एक्सरे."
    },
    indications: {
      en: ["Deep toothache diagnostics", "Pre-implant assessment", "Root canal evaluation", "Wisdom tooth positioning"],
      mr: ["तीव्र दातदुखीचे निदान", "इम्प्लांट्स पूर्व तपासणी", "रूट कॅनॉल मूल्यमापन", "अक्कलदाढ तपासणी"]
    },
    keyHighlights: {
      en: ["Ultra-low radiation dosage", "Instant digital viewing", "High diagnostic accuracy"],
      mr: ["कमी रेडिएशन", "झटपट निकाल", "अचूक निदान"]
    },
    iconName: "Activity"
  },
  {
    id: "tooth-extraction",
    name: "Tooth Extraction / Removal",
    nameMarathi: "दात काढणे (Tooth Removal / Extraction)",
    category: "preventive-general",
    shortDescription: {
      en: "Gentle, atraumatic removal of non-restorable severely decayed teeth or impacted wisdom teeth under local anesthesia.",
      mr: "खूप जास्त किडलेले, हलणारे किंवा त्रासदायक दात स्थानिक भूल देऊन न दुखवता काढणे."
    },
    fullDescription: {
      en: "Performed using precision elevators and forceps with maximum preservation of surrounding alveolar bone socket, setting the stage for future implant placement if desired.",
      mr: "आधुनिक साधनांचा वापर करून जबड्याच्या हाडाचे नुकसान न होता दात सुरक्षितपणे काढला जातो."
    },
    indications: {
      en: ["Severely broken teeth beyond repair", "Painful impacted wisdom teeth", "Severe periodontal mobility"],
      mr: ["उपचार न होऊ शकणारे तुटलेले दात", "त्रासदायक अक्कलदाढ", "अतिशय हलणारे दात"]
    },
    keyHighlights: {
      en: ["Atraumatic socket preservation", "Painless local anesthesia", "Strict post-extraction care guide"],
      mr: ["हाडांचे संरक्षण", "स्थानिक भूल", "तपशीलवार काळजी सूचना"]
    },
    iconName: "XCircle"
  },

  // 2. Restorative Dentistry
  {
    id: "dental-crowns",
    name: "Dental Crowns (Caps)",
    nameMarathi: "डेंटल क्राउन्स / कॅप (Dental Crowns)",
    category: "restorative",
    shortDescription: {
      en: "Full-coverage protective ceramic, zirconia, or metal caps that reinforce weakened or root-canal-treated teeth.",
      mr: "रूट कॅनॉल झालेल्या किंवा कमकुवत दातांवर बसवली जाणारी मजबूत आणि सुरक्षित कॅप (क्राउन)."
    },
    fullDescription: {
      en: "Custom-milled dental crowns encapsulate the entire visible portion of the tooth, restoring natural morphology, color, chewing capability, and preventing tooth fracture.",
      mr: "दात तुटण्यापासून वाचवण्यासाठी आणि चघळण्याची पूर्ण ताकद देण्यासाठी अचूक मापाची दर्जेदार कॅप बसवली जाते."
    },
    indications: {
      en: ["Post-Root Canal Treatment (RCT)", "Cracked or severely broken teeth", "Heavily filled teeth", "Cosmetic misshapen teeth"],
      mr: ["रूट कॅनॉल नंतरचे दात", "तडे गेलेले दात", "मोठे सिमेंट असलेले दात"]
    },
    keyHighlights: {
      en: ["Custom shade matching", "Exceptional fracture resistance", "Restores full bite force"],
      mr: ["नैसर्गिक दातांचा रंग", "मजबूत व टिकाऊ", "चाव्याची ताकद पूर्ववत"]
    },
    iconName: "ShieldCheck",
    isFeatured: true
  },
  {
    id: "dental-bridges",
    name: "Dental Bridges",
    nameMarathi: "फिक्स ब्रीज / पक्के दात (Dental Bridges)",
    category: "restorative",
    shortDescription: {
      en: "Fixed multi-unit restorations anchored to adjacent natural teeth to bridge missing tooth spaces seamlessly.",
      mr: "शेजारच्या दातांचा आधार घेऊन गहाळ दात कायमस्वरूपी बसवणारी फिक्स ब्रीज पद्धत."
    },
    fullDescription: {
      en: "Fixed dental bridges fill the gap created by one or more missing teeth, preventing adjacent teeth from shifting into the empty space and restoring natural bite dynamics without removable hardware.",
      mr: "दात पडल्यामुळे खाताना होणारा त्रास दूर करण्यासाठी शेजारील दातांच्या आधारे न निघणारे पक्के दात."
    },
    indications: {
      en: ["One or more missing teeth", "Desire for fixed non-removable teeth", "Preventing tilt of adjacent teeth"],
      mr: ["एक किंवा दोन गहाळ दात", "न निघणारे पक्के दात हवे असल्यास", "शेजारील दात वाकडे होण्यापासून रोखणे"]
    },
    keyHighlights: {
      en: ["Non-removable comfort", "No surgical procedure required", "Natural aesthetic blending"],
      mr: ["कायमस्वरूपी फिक्स", "शस्त्रक्रियेची गरज नाही", "नैसर्गिक स्वरूप"]
    },
    iconName: "Layers"
  },
  {
    id: "post-and-core-service",
    name: "Post and Core",
    nameMarathi: "पोस्ट आणि कोअर (Post and Core)",
    category: "restorative",
    shortDescription: {
      en: "Endodontic post foundation build-up inside root canal roots to anchor a crown when little tooth structure remains.",
      mr: "कमी उरलेल्या दातामध्ये फायबर पोस्ट टाकून क्राउन बसवण्यासाठी भक्कम पाया तयार करणे."
    },
    fullDescription: {
      en: "When extensive decay or trauma has destroyed the coronal structure of a tooth, a prefabricated fiber post is cemented inside the root canal space, and core resin is built up to recreate the crown stump.",
      mr: "दाताचा वरचा भाग तुटला असला तरी मुळाचा वापर करून नवीन दात बसवण्याचा विशेष प्रोस्थोडॉन्टिक उपचार."
    },
    indications: {
      en: ["Over 50% coronal tooth structure loss", "Post-RCT structural support", "High-stress bite areas"],
      mr: ["अर्ध्याहून अधिक दात तुटलेला असणे", "रूट कॅनॉल नंतरचा कमकुवत दात"]
    },
    keyHighlights: {
      en: ["Saves natural tooth roots", "Distributes chewing stress", "Fiber-reinforced biocompatibility"],
      mr: ["नैसर्गिक मूळ वाचते", "चाव्याचा ताण योग्य विभागला जातो", "मजबूत आधार"]
    },
    iconName: "Wrench"
  },
  {
    id: "composite-restoration",
    name: "Composite Restorations",
    nameMarathi: "कंपोझिट - दातांच्या रंगाचे सिमेंट (Composite)",
    category: "restorative",
    shortDescription: {
      en: "Tooth-colored composite resin fillings for invisible, natural restorations on front and back teeth.",
      mr: "समोरच्या व मागच्या दातांसाठी अगदी नैसर्गिक दातांच्या रंगाशी मिळणारे अदृश्य सिमेंट."
    },
    fullDescription: {
      en: "Direct light-cured composite bonding bonds directly to enamel and dentin, requiring minimal tooth cutting and resulting in highly aesthetic, durable tooth restorations.",
      mr: "कमीत कमी दात घासून दाताला केमिकल बाँडिंगने जोडले जाणारे अत्याधुनिक सिमेंट."
    },
    indications: {
      en: ["Front tooth chipped or decayed", "Invisible fillings in smile zone", "Replacing dark silver fillings"],
      mr: ["समोरचे तुटलेले किंवा किडलेले दात", "चांदीच्या जागी पांढरे सिमेंट हवे असल्यास"]
    },
    keyHighlights: {
      en: ["Seamless color matching", "Conserves healthy tooth enamel", "Light-cured instant set"],
      mr: ["हुबेहूब दाताचा रंग", "दात जास्त घासावा लागत नाही", "झटपट कडक होणारे"]
    },
    iconName: "Sparkles"
  },

  // 3. Cosmetic Dentistry
  {
    id: "veneers-laminates",
    name: "Veneers & Laminates",
    nameMarathi: "व्हिनिअर्स / लॅमिनेट्स (Veneers & Laminates)",
    category: "cosmetic",
    shortDescription: {
      en: "Ultra-thin custom porcelain or ceramic shells bonded to the front surfaces of teeth for dramatic cosmetic improvements.",
      mr: "समोरच्या दातांवर बसवले जाणारे अतिशय पातळ सिरॅमिक कव्हर्स ज्यामुळे दात पांढरे व सुबक दिसतात."
    },
    fullDescription: {
      en: "Porcelain veneers correct severe intrinsic stains, minor gaps, chipping, and uneven tooth shapes with minimal tooth reduction, creating a luminous, Hollywood-standard smile.",
      mr: "दातांमधील फटी, पिवळे डाग, लहान-मोठे दात दुरुस्त करून आकर्षक हास्य मिळवण्याचा उत्तम पर्याय."
    },
    indications: {
      en: ["Stubborn discoloration resistant to bleaching", "Gaps between front teeth (diastema)", "Chipped, worn or irregular teeth"],
      mr: ["दातांमधील फटी", "हट्टी डाग", "तुटलेले किंवा असमान दात"]
    },
    keyHighlights: {
      en: ["Stain-resistant porcelain", "Minimal enamel preparation", "Natural light translucency"],
      mr: ["डाग न पडणारे सिरॅमिक", "कमीत कमी दात घासणे", "नैसर्गिक चकाकी"]
    },
    iconName: "Sparkles",
    isFeatured: true
  },
  {
    id: "smile-designing",
    name: "Smile Designing & Cosmetic Dentistry",
    nameMarathi: "स्माईल डिझाईन: हास्याची पुनर्रचना (Smile Design)",
    category: "cosmetic",
    shortDescription: {
      en: "Comprehensive artistic and digital smile analysis harmonizing teeth, gums, and facial lips for optimal aesthetics.",
      mr: "चेहऱ्याची ठेवण, ओठ आणि हिरड्यांचे संतुलन साधून हास्याची शास्त्रोक्त पुनर्रचना."
    },
    fullDescription: {
      en: "Dr. Shinde evaluates facial midline, tooth proportion, smile line, and gingival display to formulate an individualized cosmetic plan combining veneers, whitening, and contouring.",
      mr: "रुग्णाच्या चेहऱ्याला साजेसे आणि आत्मविश्वास वाढवणारे आकर्षक हास्य निर्माण करणे."
    },
    indications: {
      en: ["Gummy smile or irregular gingival levels", "Multiple worn or discolored teeth", "Upcoming wedding or milestone event"],
      mr: ["हसताना हिरड्या जास्त दिसणे", "वेडेवाकडे दात", "लग्नासाठी किंवा कार्यक्रमासाठी स्माईल मेकओव्हर"]
    },
    keyHighlights: {
      en: ["Personalized aesthetic planning", "Prosthodontist-driven precision", "Harmonious facial balance"],
      mr: ["वैयक्तिक हास्य डिझाइन", "तज्ज्ञ प्रोस्थोडॉन्टिस्ट मार्गदर्शन", "चेहऱ्याशी सुसंगत"]
    },
    iconName: "Smile",
    isFeatured: true
  },
  {
    id: "teeth-whitening",
    name: "Teeth Whitening / Bleaching",
    nameMarathi: "दात शुभ्र करणे (Teeth Whitening / Bleaching)",
    category: "cosmetic",
    shortDescription: {
      en: "Safe in-clinic bleaching protocols to lighten teeth by multiple shades safely and effectively.",
      mr: "दातांचा पिवळेपणा घालवून त्यांना उजळ व चमकदार बनवण्यासाठी सुरक्षित ब्लिचिंग उपचार."
    },
    fullDescription: {
      en: "Professional dental bleaching breaks down deep organic stains embedded within enamel and dentin without damaging structural integrity, delivering a noticeably brighter smile.",
      mr: "दातांची कोणतीही हानी न करता चहा, कॉफी, तंबाखूचे डाग काढून दात पांढरे करणे."
    },
    indications: {
      en: ["Yellowing teeth due to aging", "Coffee, tea, or food stains", "Pre-event smile brightening"],
      mr: ["दातांचा पिवळेपणा", "चहा-कॉफीचे डाग", "उजळ हास्य हवे असल्यास"]
    },
    keyHighlights: {
      en: ["Safe enamel-safe formula", "Noticeable shade improvement", "Gum barrier protection during treatment"],
      mr: ["इनॅमलसाठी सुरक्षित", "लगेच दिसणारा फरक", "हिरड्यांचे संरक्षण"]
    },
    iconName: "Sun"
  },
  {
    id: "tooth-jewellery",
    name: "Tooth Jewellery",
    nameMarathi: "टूथ ज्वेलरी (Tooth Jewellery)",
    category: "cosmetic",
    shortDescription: {
      en: "Safe, non-invasive bonding of decorative dental crystals onto tooth surface without drilling.",
      mr: "कोणतीही इजा न करता दातावर बसवले जाणारे आकर्षक डायमंड किंवा क्रिस्टल."
    },
    fullDescription: {
      en: "Aesthetic dental crystals or gems are bonded painlessly to the enamel using dental adhesive. The procedure requires zero drilling and is 100% reversible without harming the tooth.",
      mr: "दात न टोचता किंवा न घासता स्पेशल गमच्या साहाय्याने दातात चमकणारे खडे बसवले जातात."
    },
    indications: {
      en: ["Fashionable smile enhancement", "Temporary or semi-permanent sparkle"],
      mr: ["फॅशन व आकर्षक हास्यासाठी", "नावीन्यपूर्ण लूक"]
    },
    keyHighlights: {
      en: ["Zero drilling / non-invasive", "Completely painless", "Easily removable without enamel damage"],
      mr: ["दात घासण्याची गरज नाही", "वेदनारहित", "कधीही काढता येते"]
    },
    iconName: "Gem"
  },

  // 4. Prosthodontics & Implantology
  {
    id: "complete-dentures",
    name: "Complete Dentures (बसिसी)",
    nameMarathi: "संपूर्ण कवळी - बसिसी (Complete Dentures)",
    category: "implantology",
    shortDescription: {
      en: "Precision-molded full-arch removable prostheses replacing all upper or lower missing teeth.",
      mr: "वरच्या किंवा खालच्या सर्व दात नसलेल्या जबड्यासाठी बसवली जाणारी संपूर्ण कवळी (बसिसी)."
    },
    fullDescription: {
      en: "Fabricated using high-impact acrylic resin, custom border molding, and anatomical tooth arrangement to maximize suction, stability, facial fullness, and chewing efficiency.",
      mr: "तोंडाच्या अचूक मापाने तयार केलेली, चेहऱ्याला सुरकुत्या पडू न देणारी आणि खाणे सुलभ करणारी कवळी."
    },
    indications: {
      en: ["Complete loss of upper and/or lower teeth (edentulism)", "Collapsed facial profile due to missing teeth"],
      mr: ["सर्व दात गहाळ असणे", "दात नसल्यामुळे चेहरा आकसलेला दिसणे"]
    },
    keyHighlights: {
      en: ["Custom border molding for suction", "Anatomical tooth arrangement", "Restores speech and chewing"],
      mr: ["सक्शन ग्रिप", "नैसर्गिक दातांची रचना", "बोलणे व खाणे सोपे"]
    },
    iconName: "Layers",
    isFeatured: true
  },
  {
    id: "cast-partial-dentures",
    name: "Cast Partial Dentures (अंशिक कवळी)",
    nameMarathi: "कास्ट पार्शिअल डेंचर्स - अंशिक कवळी (Cast Partial)",
    category: "implantology",
    shortDescription: {
      en: "Metal framework partial dentures with precise clasps for maximum retention and stability when several teeth remain.",
      mr: "धातूच्या मजबूत फ्रेमवर तयार केलेली, उरलेल्या दातांच्या आधारे घट्ट बसणारी अंशिक कवळी."
    },
    fullDescription: {
      en: "Engineered with medical-grade cobalt-chromium alloy frameworks and acrylic teeth, distributing occlusal forces evenly onto remaining abutment teeth and the alveolar ridge.",
      mr: "साध्या कवळीपेक्षा अधिक पातळ, मजबूत आणि खाताना अजिबात न हलणारी टिकाऊ कवळी."
    },
    indications: {
      en: ["Multiple missing teeth in one arch", "Need for high stability and strength", "Alternative to long-span fixed bridges"],
      mr: ["अनेक दात पडलेले असणे", "जास्त मजबूत व न हलणारी कवळी हवी असल्यास"]
    },
    keyHighlights: {
      en: ["Rigid thin metal framework", "Clasp retention to natural teeth", "Long-term dimensional stability"],
      mr: ["पातळ व मजबूत धातू फ्रेम", "नैसर्गिक दातांचा आधार", "दीर्घकाळ टिकाऊ"]
    },
    iconName: "Shield"
  },
  {
    id: "flexible-dentures",
    name: "Flexible Dentures",
    nameMarathi: "फ्लेक्सीबल कवळी (Flexible Dentures)",
    category: "implantology",
    shortDescription: {
      en: "Lightweight, unbreakable thermoplastic nylon dentures with gum-colored clasps for maximum comfort.",
      mr: "अतिशय लवचिक, न तुटणारी, हलकी आणि हिरड्यांच्या रंगाची लवचिक कवळी."
    },
    fullDescription: {
      en: "Manufactured from biocompatible nylon thermoplastic, eliminating metal clasps and offering unmatched flexibility, lightweight comfort, and seamless aesthetic blending with gum tissues.",
      mr: "धातूची क्लिप नसलेली, लवचिक असल्यामुळे तोंडाला न टोचणारी आणि निसरडी नसलेली आधुनिक कवळी."
    },
    indications: {
      en: ["Single or multiple missing teeth", "Allergy to metal or rigid acrylic", "Desire for lightweight discreet partial"],
      mr: ["काही दात नसणे", "धातूची ॲलर्जी असणे", "अतिशय हलकी कवळी हवी असल्यास"]
    },
    keyHighlights: {
      en: ["Unbreakable thermoplastic", "No visible metal clasps", "Super lightweight & gentle on gums"],
      mr: ["न तुटणारे मटेरियल", "धातूचे हुक दिसत नाहीत", "हिरड्यांसाठी सौम्य"]
    },
    iconName: "Activity"
  },
  {
    id: "overdentures",
    name: "Overdentures",
    nameMarathi: "ओव्हर डेंचर्स (Overdentures)",
    category: "implantology",
    shortDescription: {
      en: "Removable dentures supported and stabilized over remaining natural roots or dental implant attachments.",
      mr: "उरलेल्या मूळ दातांवर किंवा इम्प्लांट्सवर घट्ट लॉक होणारी विशेष ओव्हरडेंचर कवळी."
    },
    fullDescription: {
      en: "Preserves underlying bone by anchoring over treated roots or locators attached to dental implants, dramatically increasing biting force, stability, and patient satisfaction.",
      mr: "कवळी निसटू नये म्हणून मुळांवर किंवा इम्प्लांटवर क्लिपसारखी घट्ट बसते, ज्यामुळे जबड्याचे हाड झिजत नाही."
    },
    indications: {
      en: ["Loose conventional lower denture", "Few remaining sturdy natural roots", "Implant-retained denture therapy"],
      mr: ["खालची कवळी वारंवार निसटणे", "काही मजबूत मुळे शिल्लक असणे", "इम्प्लांट सपोर्टेड सोल्यूशन"]
    },
    keyHighlights: {
      en: ["Superior retention & stability", "Preserves alveolar bone ridge", "No embarrassing slippage while talking"],
      mr: ["उत्तम ग्रिप व पकड", "हाडांची झीज थांबते", "बोलताना कवळी पडत नाही"]
    },
    iconName: "CheckCircle2"
  },
  {
    id: "immediate-dentures",
    name: "Immediate Dentures",
    nameMarathi: "इमेडिएट डेंचर्स - त्वरित कवळी (Immediate Dentures)",
    category: "implantology",
    shortDescription: {
      en: "Dentures inserted on the exact same day teeth are extracted, ensuring you never have to be without teeth.",
      mr: "दात काढल्या दिवशीच लगेच बसवली जाणारी त्वरित कवळी, जेणेकरून दात नसलेली वेळ येत नाही."
    },
    fullDescription: {
      en: "Fabricated prior to surgical extractions from impressions so the prosthesis is placed immediately after tooth removal, protecting extraction sites and preserving speech and appearance.",
      mr: "दात काढल्यावर तोंड मोकळे दिसू नये म्हणून आधीच तयार करून लगेच बसवली जाणारी तात्पुरती कवळी."
    },
    indications: {
      en: ["Planned full extractions of hopeless teeth", "Social/professional need to avoid being toothless"],
      mr: ["सर्व दात एकाच वेळी काढायचे असल्यास", "नोकरी/व्यवसायामुळे दात नसणे परवडत नसल्यास"]
    },
    keyHighlights: {
      en: ["Zero downtime without teeth", "Acts as surgical bandage over sockets", "Preserves facial contour immediately"],
      mr: ["दात नसलेला एकही दिवस नाही", "जखमेचे संरक्षण", "चेहऱ्याचा आकार टिकतो"]
    },
    iconName: "Clock"
  },
  {
    id: "full-mouth-rehabilitation-service",
    name: "Full Mouth Rehabilitation",
    nameMarathi: "संपूर्ण दातांची पुनर्रचना (Full Mouth Rehabilitation)",
    category: "implantology",
    shortDescription: {
      en: "Complete restorative overhaul reconstructing all upper and lower teeth, restoring bite height and joint harmony.",
      mr: "सर्व दातांची, जबड्याच्या सांध्याची आणि चाव्याच्या उंचीची संपूर्ण शास्त्रीय पुनर्रचना."
    },
    fullDescription: {
      en: "Dr. Shinde leverages advanced prosthodontic principles using facebow transfers, semi-adjustable articulators, crowns, bridges, and implants to completely rebuild collapsed bites and worn dentitions.",
      mr: "घसलेले दात, वेदना आणि चावण्यास असमर्थ जबड्यासाठी सर्व दातांची नव्याने नियोजनबद्ध पुनर्रचना."
    },
    indications: {
      en: ["Severe tooth attrition/wear from grinding", "Collapsed bite vertical dimension", "Multiple failed restorations and missing teeth"],
      mr: ["अतिशय झिजलेले दात", "चावा बसलेला असणे", "अनेक दात तुटलेले व पडलेले असणे"]
    },
    keyHighlights: {
      en: ["Comprehensive prosthodontic diagnostics", "Restores youthful facial profile", "Pain-free joint function"],
      mr: ["अचूक प्रोस्थोडॉन्टिक नियोजन", "चेहऱ्याचे सौंदर्य पूर्ववत", "सांधेदुखीपासून मुक्ती"]
    },
    iconName: "Layers",
    isFeatured: true
  },

  // 5. Implantology
  {
    id: "dental-implants-service",
    name: "Dental Implants",
    nameMarathi: "दंत रोपण (Dental Implants)",
    category: "implantology",
    shortDescription: {
      en: "Bio-compatible titanium artificial roots surgically placed into the jawbone to permanently hold crowns, bridges, or overdentures.",
      mr: "जबड्याच्या हाडामध्ये टायटॅनियम स्क्रू बसवून त्यावर नैसर्गिक दातासारखा पक्का दात बसवण्याचा आधुनिक उपचार."
    },
    fullDescription: {
      en: "Dental implants fuse directly with the jawbone (osseointegration), mimicking natural tooth roots. They do not require grinding neighboring teeth and preserve bone from shrinking over time.",
      mr: "शेजारील दातांना हात न लावता एका किंवा अनेक दातांच्या जागी कायमस्वरूपी नवीन दात रोपणे."
    },
    indications: {
      en: ["Single missing tooth", "Multiple missing teeth", "Complete tooth loss desiring fixed teeth", "Unstable removable dentures"],
      mr: ["एक गहाळ दात", "अनेक दात पडलेले असणे", "कायमस्वरूपी पक्के दात हवे असल्यास"]
    },
    keyHighlights: {
      en: ["Lifelong permanent solution", "Zero trimming of adjacent healthy teeth", "Prevents jawbone shrinkage"],
      mr: ["कायमस्वरूपी उपाय", "शेजारचे दात घासण्याची गरज नाही", "हाडांची झीज रोखते"]
    },
    iconName: "ShieldCheck",
    isFeatured: true
  },
  {
    id: "implant-supported-prosthetics",
    name: "Implant-Supported Overdentures",
    nameMarathi: "इम्प्लांट सपोर्टेड ओव्हरडेंचर्स (Implant Overdentures)",
    category: "implantology",
    shortDescription: {
      en: "Snap-on overdentures firmly anchored onto 2 to 4 dental implants for rock-solid stability and chewing power.",
      mr: "२ ते ४ इम्प्लांट्सवर लॉक होणारी कवळी, जी खाताना किंवा बोलताना अजिबात हलत नाही."
    },
    fullDescription: {
      en: "Combines the affordability of dentures with the stability of implants. Locator attachments lock the denture firmly in place, eliminating the need for messy denture adhesives.",
      mr: "कवळीला खाली न निसटू देणारा व चघळण्याची ताकद वाढवणारा सुरक्षित पर्याय."
    },
    indications: {
      en: ["Loose lower dentures", "Flat jaw ridge with poor suction", "Desire for firm, non-slipping teeth"],
      mr: ["हलणारी खालची कवळी", "हाड झिजल्यामुळे सक्शन नसणे"]
    },
    keyHighlights: {
      en: ["Snaps securely in and out for cleaning", "No messy denture adhesives needed", "Significantly increases chewing force"],
      mr: ["स्वच्छतेसाठी सहज काढता-घालता येते", "गम किंवा पेस्टची गरज नाही", "उत्तम चघळण्याची ताकद"]
    },
    iconName: "Award"
  },

  // 6. Maxillofacial Prosthesis
  {
    id: "orbital-ocular-service",
    name: "Orbital & Ocular Prosthesis (डोळे)",
    nameMarathi: "ऑर्बिटल / ऑक्युलर - डोळ्याचे कृत्रिम अवयव",
    category: "maxillofacial",
    shortDescription: {
      en: "Custom hand-painted artificial eye and orbital prostheses with precise skin tone and iris matching.",
      mr: "रुग्णाच्या नैसर्गिक डोळ्याशी व त्वचेशी तंतोतंत जुळणारे हाताने रंगवलेले कृत्रिम डोळे."
    },
    fullDescription: {
      en: "Individually sculpted to fit the orbital socket, incorporating customized iris detailing, scleral vessels, and silicone skin margins for lifelike appearance.",
      mr: "शस्त्रक्रिया किंवा अपघातानंतर डोळ्याचा आकार आणि चेहऱ्याची सममिती पूर्ववत करण्यासाठी."
    },
    indications: {
      en: ["Loss of eye due to surgery or trauma", "Anophthalmia / Microphthalmia", "Orbital exenteration"],
      mr: ["शस्त्रक्रियेमुळे डोळा काढावा लागल्यास", "अपघातात डोळा गमावल्यास"]
    },
    keyHighlights: {
      en: ["Hand-matched iris color", "Biocompatible medical polymers", "Restores social confidence"],
      mr: ["हुबेहूब डोळ्याचा रंग", "वैद्यकीय दर्जाचे सुरक्षित मटेरियल", "आत्मविश्वास पूर्ववत"]
    },
    iconName: "Eye",
    isFeatured: true
  },
  {
    id: "nasal-service",
    name: "Nasal Prosthesis (नाक)",
    nameMarathi: "नाकाचे कृत्रिम अवयव (Nasal Prosthesis)",
    category: "maxillofacial",
    shortDescription: {
      en: "Custom medical silicone nasal prostheses restoring midface aesthetics and airway moisture.",
      mr: "चेहऱ्याच्या रचनेनुसार तयार केलेले नाकाचे नैसर्गिक दिसणारे सिलिकॉन कृत्रिम अवयव."
    },
    fullDescription: {
      en: "Engineered from flexible medical grade silicone to replicate nasal contours, skin pores, and coloration, retained via anatomical undercuts, medical adhesives, or implants.",
      mr: "नाकाची रचना, त्वचेचा पोत आणि रंग जुळवून चेहऱ्याचे सौंदर्य पुन्हा प्राप्त करून देणे."
    },
    indications: {
      en: ["Rhinectomy due to oncology", "Traumatic nasal destruction", "Congenital nasal deficiency"],
      mr: ["कर्करोगाच्या शस्त्रक्रियेनंतर नाक काढावे लागल्यास", "अपघाती जखम"]
    },
    keyHighlights: {
      en: ["Custom skin color blending", "Protects respiratory mucosa", "Lightweight medical silicone"],
      mr: ["त्वचेच्या रंगाशी जुळणारे", "श्वासमार्गाचे संरक्षण", "हलके सिलिकॉन"]
    },
    iconName: "Smile"
  },
  {
    id: "ear-service",
    name: "Ear (Auricular) Prosthesis (कान)",
    nameMarathi: "कानाचे कृत्रिम अवयव (Ear Prosthesis)",
    category: "maxillofacial",
    shortDescription: {
      en: "Realistic silicone ear replicas replicating cartilage folds, contours, and skin tone for microtia or trauma.",
      mr: "जन्मजात कान नसणे किंवा अपघातात कान गमावल्यास नैसर्गिक कानासारखे कृत्रिम अवयव."
    },
    fullDescription: {
      en: "Symmetrically matched to the contralateral healthy ear, replicating the helix, antihelix, tragus, and lobule in durable, soft medical silicone.",
      mr: "दुसऱ्या कानाचे हुबेहूब माप घेऊन चष्मा घालण्यासाठी योग्य असा कृत्रिम कान."
    },
    indications: {
      en: ["Microtia / Anotia in children or adults", "Ablative surgical ear loss", "Burn or trauma deformities"],
      mr: ["जन्मजात कान नसणे", "शस्त्रक्रिया किंवा भाजल्यामुळे कान खराब झाल्यास"]
    },
    keyHighlights: {
      en: ["Anatomical ear cartilage mapping", "Supports eyeglass frames", "Natural skin pigmentation"],
      mr: ["कानाच्या सर्व घड्यांची अचूक रचना", "चष्मा घालण्यास सुलभ", "नैसर्गिक रंग"]
    },
    iconName: "Headphones"
  },
  {
    id: "cheek-service",
    name: "Cheek Prosthesis (गाल)",
    nameMarathi: "गालाचे कृत्रिम अवयव (Cheek Prosthesis)",
    category: "maxillofacial",
    shortDescription: {
      en: "Soft tissue midface prostheses to restore sunken cheek contour following resection.",
      mr: "गालाचा खचलेला भाग पूर्ववत करण्यासाठी चेहऱ्याच्या आत किंवा बाहेर बसवले जाणारे अवयव."
    },
    fullDescription: {
      en: "Rebuilds malar prominence and soft tissue drape to eliminate deep facial depressions and restore symmetric facial contours.",
      mr: "चेहऱ्याचा फुगवटा आणि सममिती राखण्यासाठी विशेष मॅक्सिलोफेशिअल डिझाईन."
    },
    indications: {
      en: ["Malar bone resection", "Oncological defect of cheek", "Severe trauma"],
      mr: ["गालाच्या हाडाची शस्त्रक्रिया", "चेहरा खचणे"]
    },
    keyHighlights: {
      en: ["Restores facial symmetry", "Soft tissue contouring", "Improves lip drape"],
      mr: ["चेहऱ्याची सममिती", "नैसर्गिक आकार", "ओठांना आधार"]
    },
    iconName: "Smile"
  },
  {
    id: "cleft-lip-palate-service",
    name: "Cleft Lip & Palate Prosthesis",
    nameMarathi: "दुभंगलेले / फाटलेले ओठ व टाळू कृत्रिम उपचार",
    category: "maxillofacial",
    shortDescription: {
      en: "Specialized prosthetic appliances, feeding plates, and speech bulbs for cleft lip and palate conditions.",
      mr: "जन्मजात फाटलेले ओठ व टाळू असलेल्या रुग्णांसाठी अन्न खाणे व बोलणे सुलभ करणारी उपकरणे."
    },
    fullDescription: {
      en: "Prosthetically separates oral and nasal cavities, facilitating comfortable infant feeding, improving speech articulation, and supporting dental development.",
      mr: "तोंड आणि नाक यामधील अंतर बंद करून अन्न नाकात जाणे रोखणे व स्पष्ट बोलण्यास मदत."
    },
    indications: {
      en: ["Infant cleft feeding difficulty", "Velopharyngeal insufficiency", "Adult un-repaired cleft palate defects"],
      mr: ["बाळाला दूध पिण्यास त्रास", "फाटलेली टाळू", "अन्न नाकात जाणे"]
    },
    keyHighlights: {
      en: ["Aids clear speech resonation", "Prevents nasal regurgitation", "Custom molded comfort"],
      mr: ["स्पष्ट बोलणे शक्य", "अन्न नाकात जात नाही", "आरामदायी"]
    },
    iconName: "Heart"
  },
  {
    id: "obturator-service",
    name: "Obturator Prosthesis (ऑब्च्यूरेटर)",
    nameMarathi: "ऑब्च्यूरेटर कृत्रिम अवयव (Obturator)",
    category: "maxillofacial",
    shortDescription: {
      en: "Prosthetic device closing maxilla and palate defects following tumor resection, restoring swallowing and speech.",
      mr: "वरच्या जबड्याच्या किंवा टाळूच्या शस्त्रक्रियेनंतर पडलेली फट बंद करणारी विशेष प्लेट."
    },
    fullDescription: {
      en: "An essential maxillofacial rehabilitation modality that seals maxillectomy defects, restores oral containment for liquids and solids, and carries teeth for mastication.",
      mr: "पाणी पिताना नाकातून बाहेर येऊ नये आणि अन्न नीट चघळता यावे यासाठी आवश्यक कृत्रिम साधन."
    },
    indications: {
      en: ["Post-maxillectomy for oral cancer", "Palatal defect / perforation", "Loss of upper dental arch"],
      mr: ["तोंडाच्या कर्करोग शस्त्रक्रियेनंतर", "टाळूचे छिद्र / पोकळी", "वरचे दात व हाड गमावल्यास"]
    },
    keyHighlights: {
      en: ["Immediate liquid seal", "Eliminates hypernasal speech", "Carries functional prosthetic teeth"],
      mr: ["पाणी पिणे सुलभ", "आवाजातील अनुनासिकता दूर", "चावण्यासाठी दात"]
    },
    iconName: "Layers",
    isFeatured: true
  },
  {
    id: "cranial-stent-service",
    name: "Cranial Stent Prosthesis",
    nameMarathi: "क्रॅनियल स्टेंट कृत्रिम अवयव (Cranial Stent)",
    category: "maxillofacial",
    shortDescription: {
      en: "Protective medical-grade appliances designed to shield delicate cranial defects and support post-surgical tissue.",
      mr: "कवटीच्या शस्त्रक्रियेनंतर जखम सुरक्षित ठेवण्यासाठी तयार केलेले विशेष संरक्षक स्टेंट."
    },
    fullDescription: {
      en: "Custom fabricated rigid stents protecting cranial surgical sites from trauma while tissues heal or acting as guides during reconstructive phases.",
      mr: "नाजूक उतींना इजा होऊ नये म्हणून रुग्णाच्या कवटीच्या आकारानुसार बनवलेला स्टेंट."
    },
    indications: {
      en: ["Cranial bone resection", "Post-neurosurgical defect protection", "Tissue graft stabilization"],
      mr: ["कवटीच्या हाडाची शस्त्रक्रिया", "नाजूक भागाचे संरक्षण"]
    },
    keyHighlights: {
      en: ["Lightweight protective shield", "Custom anatomical fit", "Biocompatible medical acrylic"],
      mr: ["हलके संरक्षक कवच", "अचूक माप", "सुरक्षित मटेरियल"]
    },
    iconName: "Shield"
  },
  {
    id: "finger-prosthesis-service",
    name: "Silicone Finger & Toe Prosthesis (बोटे)",
    nameMarathi: "हातांची व पायांची बोटे कृत्रिम अवयव (Finger Prosthesis)",
    category: "maxillofacial",
    shortDescription: {
      en: "Lifelike silicone finger prostheses with customized acrylic nails, wrinkles, and skin tone matching.",
      mr: "हाताची किंवा पायाची बोटे तुटल्यास नैसर्गिक नखे आणि त्वचेच्या रंगासह हुबेहूब दिसणारी सिलिकॉन बोटे."
    },
    fullDescription: {
      en: "Fabricated from medical grade silicone featuring detailed palmar/dorsal skin folds, custom acrylic fingernails that can receive nail polish, and suction retention onto residual stump.",
      mr: "अपघातात बोट तुटल्यास वस्तू पकडण्यासाठी आणि हाताचे नैसर्गिक सौंदर्य परत मिळवण्यासाठी अचूक बनवलेले बोट."
    },
    indications: {
      en: ["Traumatic amputation of finger or thumb", "Congenital absence of digits", "Partial or complete finger loss"],
      mr: ["अपघातात बोट तुटणे", "जन्मजात बोट नसणे"]
    },
    keyHighlights: {
      en: ["Individual skin wrinkle reproduction", "Realistic acrylic nail beds", "Provides functional opposition for grasping"],
      mr: ["त्वचेच्या सुरकुत्यांची हुबेहूब रचना", "नैसर्गिक नखे", "वस्तू पकडण्यास मदत"]
    },
    iconName: "Hand",
    isFeatured: true
  },

  // 7. Restorative Care & RCT & TMJ
  {
    id: "tmj-treatment-service",
    name: "TMJ Disorder Treatment & Occlusal Splints",
    nameMarathi: "TMJ दोष : निदान व उपचार (TMJ & Splints)",
    category: "restorative",
    shortDescription: {
      en: "Diagnostic evaluation and custom milled occlusal splints to relieve jaw joint pain, clicking, and teeth grinding.",
      mr: "जबड्याच्या सांध्याचे दुखणे, आवाज येणे, दात खाणे या विकारांवर फॅब्रिकेटेड मिल्ड स्प्लिंट्सद्वारे उपचार."
    },
    fullDescription: {
      en: "Temporomandibular joint (TMJ) disorders can cause headaches, jaw locking, clicking sounds, and severe facial pain. Custom fabricated milled splints deprogram hyperactive muscles and align the joint into a resting state.",
      mr: "जबडा उघडताना होणारा त्रास, डोकेदुखी आणि रात्री झोपेत दात खाण्यावर आराम देणारे विशेष स्प्लिंट्स."
    },
    indications: {
      en: ["Clicking or popping in jaw joint", "Teeth grinding or clenching (bruxism)", "Morning jaw stiffness and facial headaches", "Limited mouth opening"],
      mr: ["जबड्यातून कट-कट आवाज येणे", "रात्री दात खाणे (ब्रक्सिझम)", "सकाळी जबडा आखडणे व डोकेदुखी", "तोंड कमी उघडणे"]
    },
    keyHighlights: {
      en: ["CAD/CAM precision milled splint", "Immediate muscle decompression", "Protects teeth from grinding wear"],
      mr: ["अचूक मिल्ड स्प्लिंट", "स्नायूंना त्वरित आराम", "दात झिजण्यापासून संरक्षण"]
    },
    iconName: "Stethoscope",
    isFeatured: true
  },
  {
    id: "root-canal-treatment",
    name: "Root Canal Treatment (RCT)",
    nameMarathi: "दातांच्या मज्जेचा उपचार / रूट कॅनॉल (RCT)",
    category: "restorative",
    shortDescription: {
      en: "Painless removal of infected pulp tissue, disinfecting root canals, and sealing to save badly damaged teeth.",
      mr: "किडलेल्या दाताच्या मुळातील इन्फेक्शन काढून दात न काढता कायमचा वाचवणारा रूट कॅनॉल उपचार."
    },
    fullDescription: {
      en: "Advanced rotary endodontics thoroughly cleans bacterial infection from inside the pulp chamber and root canals, followed by three-dimensional gutta-percha obturation to eliminate pain and preserve your natural tooth.",
      mr: "वेदना थांबवून नैसर्गिक दात आयुष्यभर टिकवण्यासाठी आधुनिक रोटरी मशिनद्वारे रूट कॅनॉल केले जाते."
    },
    indications: {
      en: ["Severe continuous throbbing toothache", "Swelling or pus near tooth root", "Pain while eating hot or cold foods", "Deep cavity reaching nerve"],
      mr: ["रात्रीची तीव्र दातदुखी", "हिरडीला सूज किंवा पू येणे", "गरम-थंड खाताना असह्य कळ"]
    },
    keyHighlights: {
      en: ["Saves your natural tooth", "Painless rotary endodontics", "Completed in quick comfortable visits"],
      mr: ["नैसर्गिक दात वाचतो", "वेदनारहित रोटरी उपचार", "कमी वेळेत पूर्ण"]
    },
    iconName: "Activity",
    isFeatured: true
  },
  {
    id: "orthodontic-treatment",
    name: "Orthodontic Treatment",
    nameMarathi: "वाकडेतिकडे दात सरळ करणे (Orthodontics)",
    category: "restorative",
    shortDescription: {
      en: "Alignment of crooked, crowded, or forward teeth using metal, ceramic braces, or clear aligners.",
      mr: "पुढे आलेले, वाकडेतिकडे किंवा एकमेकांवर चढलेले दात सरळ व सुंदर रेषेत आणणे."
    },
    fullDescription: {
      en: "Straightens irregular teeth, improves bite relationships, enhances speech clarity, and eliminates hard-to-clean food traps that lead to decay and gum problems.",
      mr: "दातांची मांडणी सुधारून चावा दुरुस्त करणे आणि हास्य आकर्षक बनवणे."
    },
    indications: {
      en: ["Crowded or overlapping teeth", "Forwardly placed upper teeth", "Spacing between teeth", "Crossbite or deep bite"],
      mr: ["एकमेकांवर चढलेले दात", "पुढे आलेले दात", "दातांमधील जागा", "चुकीचा चावा"]
    },
    keyHighlights: {
      en: ["Improves facial profile", "Easier oral cleaning", "Corrects bite dynamics"],
      mr: ["चेहऱ्याचा लूक सुधारतो", "दात स्वच्छ ठेवणे सोपे", "चावा दुरुस्ती"]
    },
    iconName: "Smile"
  },
  {
    id: "gum-surgery",
    name: "Gum Surgery",
    nameMarathi: "हिरड्यांची शस्त्रक्रिया (Gum Surgery)",
    category: "restorative",
    shortDescription: {
      en: "Periodontal flap surgery and bone grafting to treat deep gum pockets, advanced pyorrhea, and stop tooth loosening.",
      mr: "हिरड्यांचे गंभीर आजार (पायोरिया) दूर करण्यासाठी व हलणारे दात घट्ट करण्यासाठी शस्त्रक्रिया."
    },
    fullDescription: {
      en: "Cleans deep subgingival tartar and infected granulation tissue, reducing pocket depths and regenerating supportive bone around teeth.",
      mr: "हिरड्यांच्या खोलवर साचलेली घाण साफ करून दातांच्या हाडाचे संरक्षण करणे."
    },
    indications: {
      en: ["Severe bleeding gums & pyorrhea", "Pockets deeper than 5mm", "Loose teeth from bone loss"],
      mr: ["हिरड्यांमधून पू किंवा रक्त येणे", "दात सैल होणे", "हिरड्या खाली सरकणे"]
    },
    keyHighlights: {
      en: ["Halts bone loss around teeth", "Tightens supporting tissues", "Eliminates chronic gum infection"],
      mr: ["हाडांची झीज थांबते", "हिरड्या मजबूत होतात", "इन्फेक्शन नष्ट"]
    },
    iconName: "Shield"
  }
];
