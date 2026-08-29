import React from 'react';
import { Calendar, ArrowRight, Phone, Award, ShieldCheck, Layers, HeartHandshake, Sparkles, Download, FileText } from 'lucide-react';
import { Language } from '../../types';
import { PRIMARY_PHONE, DISPLAY_PRIMARY_PHONE } from '../../data/clinicInfo';

interface HeroSectionProps {
  currentLang: Language;
  onOpenAppointmentModal: () => void;
  onExploreServices: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  currentLang,
  onOpenAppointmentModal,
  onExploreServices,
}) => {
  const [currentBgIndex, setCurrentBgIndex] = React.useState(0);

  const heroBackgrounds = [
    {
      url: './assets/hero-bg.jpg',
      alt: 'Gentle and Advanced Dental Care',
      objectPosition: 'object-[82%_25%] md:object-[85%_25%] lg:object-[right_25%]',
    },
    {
      url: './assets/hero-smile.png',
      alt: 'Radiant Healthy Smile Design',
      objectPosition: 'object-[right_center] md:object-[right_center] lg:object-[right_center]',
    },
  ];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % heroBackgrounds.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [heroBackgrounds.length]);

  const trustPillars = [
    {
      titleEn: "Experienced Dentists",
      titleMr: "अनुभवी तज्ज्ञ डॉक्टर",
      descEn: "M.D.S. Prosthodontist & Implantologist",
      descMr: "M.D.S. पदवीधारक विशेष तज्ज्ञ",
      icon: <Award className="w-5 h-5 text-advait-blue" />,
    },
    {
      titleEn: "Advanced Technology",
      titleMr: "आधुनिक तंत्रज्ञान",
      descEn: "Modern dental equipment & digital care",
      descMr: "अचूक डिजिटल उपकरणे व सुविधा",
      icon: <ShieldCheck className="w-5 h-5 text-advait-teal" />,
    },
    {
      titleEn: "Comfortable Environment",
      titleMr: "शांत व आरामदायी वातावरण",
      descEn: "Relaxed & friendly clinical care",
      descMr: "रुग्ण-मैत्रीपूर्ण व स्वच्छ क्लिनिक",
      icon: <HeartHandshake className="w-5 h-5 text-advait-green" />,
    },
    {
      titleEn: "Affordable Care",
      titleMr: "परवडणारे दर्जेदार उपचार",
      descEn: "Quality dental care for everyone",
      descMr: "वाजवी दरात जागतिक दर्जाची सेवा",
      icon: <Layers className="w-5 h-5 text-advait-blue-light" />,
    },
  ];

  return (
    <section
      id="home"
      className="relative pt-24 sm:pt-28 pb-12 sm:pb-16 overflow-hidden bg-[#E6F2FD]"
    >
      {/* Background Hero Images - Ultra-Smooth Cinematic Crossfade Dissolve */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {heroBackgrounds.map((bg, idx) => (
          <img
            key={bg.url}
            src={bg.url}
            alt={bg.alt}
            className={`absolute inset-0 w-full h-full object-cover ${bg.objectPosition} transition-opacity duration-[1800ms] ease-in-out ${
              idx === currentBgIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              willChange: 'opacity',
              transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          />
        ))}

        {/* Minimal soft blend strictly on the far-left to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#E6F2FD]/85 via-[#E6F2FD]/30 to-transparent w-full md:w-[60%] lg:w-[48%] z-1" />

        {/* Soft light white gradient at the bottom for smooth, professional section transition */}
        <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-t from-white via-white/50 to-transparent pointer-events-none z-1" />
      </div>

      {/* Ambient Continuous Breathing Light */}
      <div className="absolute top-1/4 left-8 w-[400px] h-[400px] bg-[#0757C9]/20 rounded-full blur-[80px] pointer-events-none z-0 animate-ambient-breathe" />
      <div className="absolute bottom-10 left-1/4 w-[420px] h-[420px] bg-[#079F9A]/20 rounded-full blur-[90px] pointer-events-none z-0 animate-ambient-breathe" style={{ animationDelay: '-3s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[500px] lg:min-h-[540px]">
          {/* Left Column: True Frosted Glassmorphism Card */}
          <div className="lg:col-span-7 xl:col-span-6">
            <div className="glass-hero-card rounded-3xl p-6 sm:p-9 lg:p-11 space-y-5 animate-fade-in relative overflow-hidden group">
              {/* Continuous Specular Top Border Light Sweep */}
              <div className="absolute top-0 left-0 right-0 h-[2px] overflow-hidden pointer-events-none z-10">
                <div className="w-3/4 h-full bg-gradient-to-r from-transparent via-white to-transparent animate-border-glow opacity-90" />
              </div>

              {/* Continuous Diagonal Glass Light Sheen Sweep */}
              <div
                className="absolute inset-y-0 w-60 bg-gradient-to-r from-transparent via-white/35 to-transparent pointer-events-none animate-glass-shine z-0"
              />

              {/* Eyebrow Glass Pill */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-advait-blue shadow-xs relative z-10">
                <Sparkles className="w-3.5 h-3.5 text-advait-teal animate-pulse" />
                <span className="text-[11px] sm:text-xs font-black tracking-wider uppercase">
                  {currentLang === 'en' ? 'YOUR SMILE, OUR PRIORITY' : 'तुमचे हास्य, आमचे प्राधान्य'}
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-[50px] font-black text-advait-navy tracking-tight leading-[1.14]">
                {currentLang === 'en' ? (
                  <>
                    Better Care. <br />
                    <span className="text-advait-blue drop-shadow-sm">Brighter Smiles.</span>
                  </>
                ) : (
                  <>
                    उत्कृष्ट उपचार. <br />
                    <span className="text-advait-blue drop-shadow-sm">उजळ व सुंदर हास्य.</span>
                  </>
                )}
              </h1>

              {/* Supporting Text */}
              <p className="text-xs sm:text-sm lg:text-[15px] text-advait-navy/90 leading-relaxed font-medium">
                {currentLang === 'en' ? (
                  <>
                    Experience gentle, advanced, and personalized dental care. <strong className="text-advait-navy font-bold">Dr. Shinde's Advait Multispeciality Dental Clinic and Implant Centre</strong> provides modern prosthodontics, dental implants, and comprehensive dental treatments for a healthier, more confident you.
                  </>
                ) : (
                  <>
                    सहानुभूतीपूर्वक आणि आधुनिक दंतोपचारांचा अनुभव घ्या. <strong className="text-advait-navy font-bold">डॉ. शिंदेज् अद्वैत मल्टीस्पेशालिटी डेंटल क्लिनिक आणि इम्प्लांट सेंटर</strong> मध्ये अत्याधुनिक उपकरणे व निष्णात तज्ज्ञांद्वारे सर्व उपचार एकाच छताखाली.
                  </>
                )}
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  onClick={onOpenAppointmentModal}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-advait-blue hover:bg-advait-blue-dark text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all active:scale-95 group"
                >
                  <Calendar className="w-4 h-4" />
                  <span>{currentLang === 'en' ? 'Book Appointment' : 'भेट निश्चित करा'}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <a
                  href={`tel:${PRIMARY_PHONE}`}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl glass-pill hover:bg-white/80 text-advait-navy font-bold text-xs sm:text-sm transition-all shadow-xs"
                  title={`Call ${DISPLAY_PRIMARY_PHONE}`}
                >
                  <Phone className="w-4 h-4 text-advait-teal" />
                  <span>{currentLang === 'en' ? `Call: ${DISPLAY_PRIMARY_PHONE}` : `कॉल करा: ${DISPLAY_PRIMARY_PHONE}`}</span>
                </a>
              </div>

              {/* Bottom Quick Links & One-Click Brochure Download */}
              <div className="pt-3 flex flex-wrap items-center justify-between gap-3 text-xs text-advait-navy/80 border-t border-white/40">
                <a
                  href="./assets/Advait-Dental-Clinic-Brochure.pdf"
                  download="Advait-Dental-Clinic-Brochure.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/70 hover:bg-white text-advait-navy hover:text-advait-blue font-bold text-[11px] sm:text-xs border border-white/80 shadow-xs transition-all hover:scale-[1.02] active:scale-98 group"
                  title="Download Official Clinic Brochure (PDF)"
                >
                  <Download className="w-3.5 h-3.5 text-advait-blue group-hover:translate-y-0.5 transition-transform" />
                  <span>{currentLang === 'en' ? 'Download Brochure (PDF)' : 'माहिती पुस्तिका (PDF) डाउनलोड करा'}</span>
                  <FileText className="w-3 h-3 text-slate-400 ml-0.5" />
                </a>

                <button
                  onClick={onExploreServices}
                  className="font-bold text-advait-navy hover:text-advait-blue flex items-center gap-1 transition-colors group ml-auto text-[11px] sm:text-xs"
                >
                  <span>{currentLang === 'en' ? 'Explore all services' : 'सर्व सेवा पहा'}</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Open space displaying the patient treatment photo */}
          <div className="hidden lg:block lg:col-span-5 xl:col-span-6" />
        </div>

        {/* Full-width Frosted Glassmorphism Trust Strip matching Reference */}
        <div className="mt-8 sm:mt-10 glass-hero-strip rounded-2xl sm:rounded-3xl p-4 sm:p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-white/50">
            {trustPillars.map((item, idx) => (
              <div
                key={idx}
                className={`flex items-center gap-3.5 p-2 rounded-2xl hover:bg-white/40 hover:shadow-xs transition-all duration-300 group cursor-default ${idx !== 0 ? 'pt-3 sm:pt-0 sm:pl-5 lg:pl-6' : ''}`}
              >
                <div className="w-11 h-11 rounded-2xl glass-pill flex items-center justify-center shrink-0 shadow-xs group-hover:scale-110 group-hover:bg-white/80 transition-all duration-300">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-extrabold text-advait-navy group-hover:text-advait-blue transition-colors duration-200 leading-tight">
                    {currentLang === 'en' ? item.titleEn : item.titleMr}
                  </h4>
                  <p className="text-[11px] text-advait-text-secondary leading-snug mt-0.5 font-medium">
                    {currentLang === 'en' ? item.descEn : item.descMr}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
