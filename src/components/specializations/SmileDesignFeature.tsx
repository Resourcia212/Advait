import React, { useState } from 'react';
import {
  Sparkles,
  Sun,
  Gem,
  ShieldCheck,
  Layers,
  Activity,
  Hammer,
  Check,
  Calendar,
  ArrowRight,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { Language, SpecializationCardData } from '../../types';

interface SmileDesignFeatureProps {
  currentLang: Language;
  onOpenAppointmentModal: (reason?: string) => void;
  onSelectSpecialization?: (spec: SpecializationCardData) => void;
}

type TabType = 'all' | 'cosmetic' | 'prosthodontics';

export const SmileDesignFeature: React.FC<SmileDesignFeatureProps> = ({
  currentLang,
  onOpenAppointmentModal,
}) => {
  const [activeTab, setActiveTab] = useState<TabType>('all');
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const allSpecialties = [
    // --- Smile Designing & Cosmetic Dentistry ---
    {
      id: "veneers",
      category: "cosmetic" as const,
      categoryLabelEn: "Smile Design",
      categoryLabelMr: "स्माईल डिझायनिंग",
      titleEn: "Porcelain Veneers & Laminates",
      titleMr: "व्हिनिअर्स व लॅमिनेट्स",
      subtitleEn: "Flawless Front Teeth",
      subtitleMr: "समोरच्या दातांचे सौंदर्य",
      badge: "Aesthetic Care",
      descEn: "Ultra-thin custom porcelain shells bonded to front teeth to correct deep stains, gaps, chips, and irregular shapes.",
      descMr: "दातांमधील फटी, पिवळे डाग आणि वेडेवाकडे दात लपवून आकर्षक हास्य देणारे सिरॅमिक कव्हर्स.",
      icon: <Sparkles className="w-5 h-5 text-advait-blue" />,
      featuresEn: ["Stain resistant", "Minimal tooth shaving", "Natural translucency"],
      featuresMr: ["डाग न पडणारे", "कमीत कमी दात घासणे", "नैसर्गिक चमक"]
    },
    {
      id: "whitening",
      category: "cosmetic" as const,
      categoryLabelEn: "Cosmetics",
      categoryLabelMr: "कॉस्मेटिक",
      titleEn: "Teeth Whitening / Bleaching",
      titleMr: "दात शुभ्र करणे (Bleaching)",
      subtitleEn: "Radiant Brightness",
      subtitleMr: "उजळ व चमकदार दात",
      badge: "Radiant Smile",
      descEn: "Safe clinical bleaching formulated to lighten stained and yellowed teeth by multiple shades effectively and safely.",
      descMr: "दातांची हानी न करता चहा, कॉफी आणि अन्नाचे पिवळे डाग काढून दात चमकदार बनवणे.",
      icon: <Sun className="w-5 h-5 text-advait-teal" />,
      featuresEn: ["Enamel-safe formula", "Noticeable results", "In-clinic monitoring"],
      featuresMr: ["सुरक्षित फॉर्म्युला", "लगेच दिसणारा परिणाम", "हिरड्यांचे रक्षण"]
    },
    {
      id: "composite",
      category: "cosmetic" as const,
      categoryLabelEn: "Restorative Art",
      categoryLabelMr: "नैसर्गिक पुनर्रचना",
      titleEn: "Composite Sculpting & Bonding",
      titleMr: "कंपोझिट - दातांच्या रंगाचे सिमेंट",
      subtitleEn: "Seamless Integration",
      subtitleMr: "अदृश्य सिमेंट फिलिंग",
      badge: "Direct Bonding",
      descEn: "Tooth-colored direct composite resin bonding to invisibly restore chipped edges, minor fractures, and front cavities.",
      descMr: "समोरचे तुटलेले किंवा किडलेले दात दातांच्या मूळ रंगाशी जुळणाऱ्या सिमेंटने दुरुस्त करणे.",
      icon: <Sparkles className="w-5 h-5 text-advait-green" />,
      featuresEn: ["Single visit procedure", "Tooth-colored match", "Zero metal"],
      featuresMr: ["एकाच भेटीत पूर्ण", "दातांचा नैसर्गिक रंग", "धातूमुक्त"]
    },
    {
      id: "jewellery",
      category: "cosmetic" as const,
      categoryLabelEn: "Cosmetics",
      categoryLabelMr: "कॉस्मेटिक",
      titleEn: "Tooth Jewellery & Crystals",
      titleMr: "टूथ ज्वेलरी (Tooth Jewellery)",
      subtitleEn: "Distinctive Sparkle",
      subtitleMr: "हास्यात खास चमक",
      badge: "Non-Invasive",
      descEn: "Non-invasive, painless bonding of dental gems and crystals onto tooth surfaces without any drilling or enamel damage.",
      descMr: "दात न टोचता किंवा न घासता स्पेशल सुरक्षित गमने बसवले जाणारे चमकणारे खडे.",
      icon: <Gem className="w-5 h-5 text-advait-blue-light" />,
      featuresEn: ["100% Drill-free", "Completely reversible", "Zero pain"],
      featuresMr: ["ड्रिलिंग नाही", "कधीही काढता येते", "अजिबात दुखत नाही"]
    },

    // --- Specialized Prosthodontic & Implant Care ---
    {
      id: "dental-implants",
      category: "prosthodontics" as const,
      categoryLabelEn: "Implantology",
      categoryLabelMr: "दंत रोपण",
      titleEn: "Dental Implants",
      titleMr: "दंत रोपण (इम्प्लांट्स)",
      subtitleEn: "Permanent Tooth Replacement",
      subtitleMr: "कायमस्वरूपी दात",
      badge: "Core Specialty",
      descEn: "Advanced titanium root replacement technology to permanently restore missing single teeth, multiple gaps, or support stable overdentures.",
      descMr: "गहाळ झालेल्या एका किंवा अनेक दातांच्या जागी टायटॅनियम मुळांद्वारे कायमस्वरूपी नवीन दात बसवण्याचे आधुनिक तंत्रज्ञान.",
      icon: <ShieldCheck className="w-5 h-5 text-advait-blue" />,
      featuresEn: ["Single & Multiple Implants", "Overdenture Support", "Natural Bite Force"],
      featuresMr: ["एका किंवा अधिक दातांचे रोपण", "ओव्हरडेंचर्स सपोर्ट", "नैसर्गिक चावा"]
    },
    {
      id: "full-mouth-rehab",
      category: "prosthodontics" as const,
      categoryLabelEn: "Prosthodontics",
      categoryLabelMr: "प्रोस्थोडॉन्टिक्स",
      titleEn: "Full Mouth Rehabilitation",
      titleMr: "संपूर्ण दातांची पुनर्रचना",
      subtitleEn: "Complete Functional Renewal",
      subtitleMr: "चावा व मुख पुनर्रचना",
      badge: "M.D.S. Specialist",
      descEn: "Comprehensive restorative reconstruction to correct severe tooth wear, collapsed bite vertical dimension, and multiple missing teeth.",
      descMr: "घसलेले दात, चुकीचा चावा आणि अनेक तुटलेल्या दातांसाठी आधुनिक पद्धतीने संपूर्ण तोंडाची व दातांची पुनर्रचना.",
      icon: <Layers className="w-5 h-5 text-advait-teal" />,
      featuresEn: ["Bite Correction", "Combined Crowns & Implants", "Long-term Function"],
      featuresMr: ["चावा दुरुस्ती व पुनर्रचना", "क्राउन्स व इम्प्लांट्स", "दीर्घकालीन कार्यक्षमता"]
    },
    {
      id: "denture-solutions",
      category: "prosthodontics" as const,
      categoryLabelEn: "Prosthodontics",
      categoryLabelMr: "प्रोस्थोडॉन्टिक्स",
      titleEn: "Advanced Denture Solutions",
      titleMr: "कवळीचे विविध आधुनिक प्रकार",
      subtitleEn: "Comfort & Stability",
      subtitleMr: "आरामदायी बसिसी",
      badge: "Custom Prosthetics",
      descEn: "Complete Dentures (बसिसी), Cast Partial Dentures, flexible lightweight dentures, and implant-retained overdentures.",
      descMr: "रुग्णाच्या गरजेनुसार संपूर्ण बसिसी, अंशिक कवळी, फ्लेक्सीबल कवळी आणि इम्प्लांट सपोर्टेड ओव्हरडेंचर पर्याय.",
      icon: <Activity className="w-5 h-5 text-advait-green" />,
      featuresEn: ["Complete Dentures (बसिसी)", "Cast Partial & Flexible", "Implant Overdentures"],
      featuresMr: ["संपूर्ण कवळी (बसिसी)", "अंशिक व फ्लेक्सीबल कवळी", "ओव्हर डेंचर"]
    },
    {
      id: "crowns-and-bridges",
      category: "prosthodontics" as const,
      categoryLabelEn: "Restorative",
      categoryLabelMr: "फिक्स दात",
      titleEn: "Dental Crowns & Fixed Bridges",
      titleMr: "डेंटल क्राउन्स आणि फिक्स ब्रीज",
      subtitleEn: "Fixed Dental Restorations",
      subtitleMr: "पक्के दात",
      badge: "Fixed Restoration",
      descEn: "Precision-engineered fixed crowns and bridges (पक्के दात) to protect root-canal-treated teeth and replace missing teeth.",
      descMr: "रूट कॅनॉल केलेल्या दातांचे संरक्षण करण्यासाठी व गहाळ दात भरून काढण्यासाठी मजबूत आणि नैसर्गिक पक्के दात.",
      icon: <Hammer className="w-5 h-5 text-advait-blue" />,
      featuresEn: ["Ceramic & Zirconia Crowns", "Multi-Unit Fixed Bridges", "Post & Core Build-up"],
      featuresMr: ["सिरॅमिक व झिरकोनिया", "मजबूत फिक्स ब्रीज", "पोस्ट आणि कोअर"]
    }
  ];

  const filteredSpecialties = activeTab === 'all'
    ? allSpecialties
    : allSpecialties.filter((item) => item.category === activeTab);

  const displayedSpecialties = isExpanded ? filteredSpecialties : filteredSpecialties.slice(0, 4);

  return (
    <section id="specializations" className="py-16 sm:py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-advait-teal-soft border border-advait-teal/20 text-advait-teal text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{currentLang === 'en' ? 'CLINICAL SPECIALTIES & SMILE DESIGN' : 'विशेष दंतचिकित्सा व स्माईल डिझायनिंग'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-advait-navy tracking-tight">
            {currentLang === 'en' ? (
              <>
                Smile Designing & <span className="gradient-text-blue">Clinical Specialties</span>
              </>
            ) : (
              <>
                स्माईल डिझायनिंग आणि <span className="gradient-text-blue">विशेष दंतोपचार</span>
              </>
            )}
          </h2>

          <p className="text-sm sm:text-base text-advait-text-secondary">
            {currentLang === 'en'
              ? 'Blending aesthetic artistry and advanced M.D.S. prosthodontic precision to give you healthy, confident, and luminous smiles.'
              : 'सौंदर्यात्मक कला आणि M.D.S. प्रोस्थोडॉन्टिक्सची अचूकता यांचा मेळ घालून निरोगी आणि सुंदर हास्य प्रदान करणारे उपचार.'}
          </p>

          {/* Interactive Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            <button
              onClick={() => {
                setActiveTab('all');
              }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 shadow-2xs ${
                activeTab === 'all'
                  ? 'bg-advait-navy text-white shadow-xs scale-105'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-advait-navy'
              }`}
            >
              {currentLang === 'en' ? `All Specialties (${allSpecialties.length})` : `सर्व उपचार (${allSpecialties.length})`}
            </button>

            <button
              onClick={() => {
                setActiveTab('cosmetic');
              }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 shadow-2xs flex items-center gap-1.5 ${
                activeTab === 'cosmetic'
                  ? 'bg-advait-teal text-white shadow-xs scale-105'
                  : 'bg-advait-teal-soft/80 text-advait-teal hover:bg-advait-teal-soft hover:text-advait-teal-dark'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{currentLang === 'en' ? 'Smile Designing & Cosmetics' : 'स्माईल डिझायनिंग व कॉस्मेटिक्स'}</span>
            </button>

            <button
              onClick={() => {
                setActiveTab('prosthodontics');
              }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 shadow-2xs flex items-center gap-1.5 ${
                activeTab === 'prosthodontics'
                  ? 'bg-advait-blue text-white shadow-xs scale-105'
                  : 'bg-advait-blue-soft text-advait-blue hover:bg-advait-blue/15 hover:text-advait-blue-dark'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{currentLang === 'en' ? 'Prosthodontics & Implants' : 'प्रोस्थोडॉन्टिक्स व इम्प्लांट्स'}</span>
            </button>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {displayedSpecialties.map((item) => (
            <div
              key={item.id}
              className="bg-advait-bg rounded-2xl p-5 sm:p-6 border border-advait-border hover:border-advait-blue/50 shadow-soft hover:shadow-card hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Top Accent Stripe on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-gradient-to-r group-hover:from-advait-blue group-hover:to-advait-teal transition-all duration-300" />

              <div className="space-y-3.5">
                {/* Icon & Category Badge Row */}
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center border border-advait-border group-hover:scale-110 group-hover:bg-advait-blue-soft group-hover:border-advait-blue/30 transition-all duration-300 shadow-xs">
                    {item.icon}
                  </div>

                  <span className={`px-2.5 py-0.5 rounded-md text-[10px] font-bold border transition-colors duration-200 ${
                    item.category === 'cosmetic'
                      ? 'bg-advait-teal-soft text-advait-teal border-advait-teal/20'
                      : 'bg-advait-blue-soft text-advait-blue border-advait-blue/20'
                  }`}>
                    {item.badge}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h3 className="text-[15px] font-bold text-advait-navy group-hover:text-advait-blue transition-colors duration-200 leading-snug">
                    {currentLang === 'en' ? item.titleEn : item.titleMr}
                  </h3>
                  <span className="text-[11px] font-semibold text-advait-teal block mt-0.5">
                    {currentLang === 'en' ? item.subtitleEn : item.subtitleMr}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs text-advait-text-secondary leading-relaxed line-clamp-3">
                  {currentLang === 'en' ? item.descEn : item.descMr}
                </p>

                {/* Highlights */}
                <div className="pt-2.5 space-y-1.5 border-t border-advait-border/60">
                  {(currentLang === 'en' ? item.featuresEn : item.featuresMr).map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-1.5 text-[11px] text-advait-navy font-medium">
                      <Check className="w-3 h-3 text-advait-teal shrink-0" />
                      <span className="truncate">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Action Button */}
              <div className="pt-4 mt-4 border-t border-advait-border">
                <button
                  onClick={() => onOpenAppointmentModal(item.titleEn)}
                  className="w-full flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-white border border-advait-border text-xs font-bold text-advait-navy hover:bg-advait-blue hover:text-white hover:border-advait-blue hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200 shadow-xs active:scale-95"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{currentLang === 'en' ? 'Book Consultation' : 'तपासणीसाठी वेळ घ्या'}</span>
                  <ArrowRight className="w-3 h-3 ml-0.5 opacity-60 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Show More / Show Less Button */}
        {filteredSpecialties.length > 4 && (
          <div className="text-center pt-10">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-white border-2 border-advait-blue text-advait-blue hover:bg-advait-blue hover:text-white font-bold text-xs sm:text-sm shadow-sm hover:shadow-md hover:-translate-y-0.5 active:scale-95 transition-all duration-200 group"
            >
              {isExpanded ? (
                <>
                  <span>{currentLang === 'en' ? 'Show Less' : 'कमी उपचार दाखवा'}</span>
                  <ChevronUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                </>
              ) : (
                <>
                  <span>
                    {currentLang === 'en'
                      ? `Show More Specialties (+${filteredSpecialties.length - 4} more)`
                      : `अधिक विशेष उपचार पहा (+${filteredSpecialties.length - 4} अधिक)`}
                  </span>
                  <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
