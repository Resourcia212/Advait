import React from 'react';
import { Sparkles, Sun, Gem, Check, Calendar } from 'lucide-react';
import { Language } from '../../types';

interface SmileDesignFeatureProps {
  currentLang: Language;
  onOpenAppointmentModal: (reason?: string) => void;
}

export const SmileDesignFeature: React.FC<SmileDesignFeatureProps> = ({
  currentLang,
  onOpenAppointmentModal,
}) => {
  const cosmeticTreatments = [
    {
      id: "veneers",
      titleEn: "Porcelain Veneers & Laminates",
      titleMr: "व्हिनिअर्स व लॅमिनेट्स",
      subtitleEn: "Flawless Front Teeth",
      subtitleMr: "समोरच्या दातांचे सौंदर्य",
      descEn: "Ultra-thin custom porcelain shells bonded to the front surfaces of teeth to correct deep stains, gaps, and irregular shapes.",
      descMr: "दातांमधील फटी, पिवळे डाग आणि वेडेवाकडे दात लपवून आकर्षक हास्य देणारे सिरॅमिक कव्हर्स.",
      icon: <Sparkles className="w-5 h-5 text-advait-blue" />,
      featuresEn: ["Stain resistant", "Minimal tooth shaving", "Natural translucency"],
      featuresMr: ["डाग न पडणारे", "कमीत कमी दात घासणे", "नैसर्गिक चमक"]
    },
    {
      id: "whitening",
      titleEn: "Teeth Whitening / Bleaching",
      titleMr: "दात शुभ्र करणे (Bleaching)",
      subtitleEn: "Radiant Brightness",
      subtitleMr: "उजळ व चमकदार दात",
      descEn: "Safe clinical bleaching formulated to lighten stained and yellowed teeth by multiple shades effectively and safely.",
      descMr: "दातांची हानी न करता चहा, कॉफी आणि अन्नाचे पिवळे डाग काढून दात चमकदार बनवणे.",
      icon: <Sun className="w-5 h-5 text-advait-teal" />,
      featuresEn: ["Enamel-safe formula", "Noticeable results", "In-clinic monitoring"],
      featuresMr: ["सुरक्षित फॉर्म्युला", "लगेच दिसणारा परिणाम", "हिरड्यांचे रक्षण"]
    },
    {
      id: "composite",
      titleEn: "Composite Sculpting & Bonding",
      titleMr: "कंपोझिट - दातांच्या रंगाचे सिमेंट",
      subtitleEn: "Seamless Integration",
      subtitleMr: "अदृश्य सिमेंट फिलिंग",
      descEn: "Tooth-colored direct composite resin bonding to invisibly restore chipped edges, minor fractures, and front cavities.",
      descMr: "समोरचे तुटलेले किंवा किडलेले दात दातांच्या मूळ रंगाशी जुळणाऱ्या सिमेंटने दुरुस्त करणे.",
      icon: <Sparkles className="w-5 h-5 text-advait-green" />,
      featuresEn: ["Single visit procedure", "Tooth-colored match", "Zero metal"],
      featuresMr: ["एकाच भेटीत पूर्ण", "दातांचा नैसर्गिक रंग", "धातूमुक्त"]
    },
    {
      id: "jewellery",
      titleEn: "Tooth Jewellery & Crystals",
      titleMr: "टूथ ज्वेलरी (Tooth Jewellery)",
      subtitleEn: "Distinctive Sparkle",
      subtitleMr: "हास्यात खास चमक",
      descEn: "Non-invasive, painless bonding of dental gems and crystals onto tooth surfaces without any drilling or enamel damage.",
      descMr: "दात न टोचता किंवा न घासता स्पेशल सुरक्षित गमने बसवले जाणारे चमकणारे खडे.",
      icon: <Gem className="w-5 h-5 text-advait-blue-light" />,
      featuresEn: ["100% Drill-free", "Completely reversible", "Zero pain"],
      featuresMr: ["ड्रिलिंग नाही", "कधीही काढता येते", "अजिबात दुखत नाही"]
    }
  ];

  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-advait-teal-soft border border-advait-teal/20 text-advait-teal text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{currentLang === 'en' ? 'AESTHETIC & COSMETIC DENTISTRY' : 'कॉस्मेटिक व स्माईल डिझायनिंग'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-advait-navy tracking-tight">
            {currentLang === 'en' ? (
              <>
                Smile Designing & <span className="gradient-text-blue">Cosmetic Dentistry</span>
              </>
            ) : (
              <>
                स्माईल डिझायनिंग आणि <span className="gradient-text-blue">कॉस्मेटिक दंतोपचार</span>
              </>
            )}
          </h2>

          <p className="text-sm sm:text-base text-advait-text-secondary">
            {currentLang === 'en'
              ? 'Blending medical precision with aesthetic art to create natural, luminous smiles designed specifically for your facial contours.'
              : 'चेहऱ्याच्या रचनेला साजेसे आणि नैसर्गिक दिसणारे सुंदर हास्य निर्माण करण्यासाठी शास्त्रीय व कॉस्मेटिक उपचार.'}
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cosmeticTreatments.map((item) => (
            <div
              key={item.id}
              className="bg-advait-bg rounded-2xl p-6 border border-advait-border hover:border-advait-teal/50 shadow-soft hover:shadow-card hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center border border-advait-border group-hover:scale-110 group-hover:bg-advait-teal-soft group-hover:border-advait-teal/40 transition-all duration-300 shadow-xs">
                  {item.icon}
                </div>

                <div>
                  <h3 className="text-base font-bold text-advait-navy group-hover:text-advait-blue transition-colors duration-200 leading-snug">
                    {currentLang === 'en' ? item.titleEn : item.titleMr}
                  </h3>
                  <span className="text-[11px] font-semibold text-advait-teal block mt-0.5">
                    {currentLang === 'en' ? item.subtitleEn : item.subtitleMr}
                  </span>
                </div>

                <p className="text-xs text-advait-text-secondary leading-relaxed">
                  {currentLang === 'en' ? item.descEn : item.descMr}
                </p>

                {/* Highlights */}
                <div className="pt-2 space-y-1.5 border-t border-advait-border/60">
                  {(currentLang === 'en' ? item.featuresEn : item.featuresMr).map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-1.5 text-[11px] text-advait-navy font-medium">
                      <Check className="w-3 h-3 text-advait-teal shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-5 mt-4 border-t border-advait-border">
                <button
                  onClick={() => onOpenAppointmentModal(item.titleEn)}
                  className="w-full flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-white border border-advait-border text-xs font-bold text-advait-navy hover:bg-advait-blue hover:text-white hover:border-advait-blue hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200 shadow-xs active:scale-95"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{currentLang === 'en' ? 'Book Consultation' : 'तपासणीसाठी वेळ घ्या'}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
