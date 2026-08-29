import React, { useState } from 'react';
import { Eye, Smile, Headphones, Heart, Layers, Shield, Hand, Sparkles, Check, ArrowRight, Calendar } from 'lucide-react';
import { Language, MaxillofacialProsthesisItem } from '../../types';
import { MAXILLOFACIAL_PROSTHESIS_ITEMS } from '../../data/specializations';

interface MaxillofacialFeatureProps {
  currentLang: Language;
  onOpenAppointmentModal: (reason?: string) => void;
}

export const MaxillofacialFeature: React.FC<MaxillofacialFeatureProps> = ({
  currentLang,
  onOpenAppointmentModal,
}) => {
  const [selectedItem, setSelectedItem] = useState<MaxillofacialProsthesisItem>(
    MAXILLOFACIAL_PROSTHESIS_ITEMS[0]
  );

  const getOrganIcon = (iconName: string) => {
    const props = { className: "w-5 h-5" };
    switch (iconName) {
      case 'Eye': return <Eye {...props} />;
      case 'Smile': return <Smile {...props} />;
      case 'Headphones': return <Headphones {...props} />;
      case 'Heart': return <Heart {...props} />;
      case 'Layers': return <Layers {...props} />;
      case 'Shield': return <Shield {...props} />;
      case 'Hand': return <Hand {...props} />;
      default: return <Sparkles {...props} />;
    }
  };

  return (
    <section id="maxillofacial" className="py-20 bg-gradient-to-b from-[#082B63] to-[#051D44] text-white relative overflow-hidden">
      {/* Abstract Background Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-advait-teal/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-advait-blue/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-advait-teal-light text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-advait-green" />
            <span>{currentLang === 'en' ? 'SUPER-SPECIALIZED RECONSTRUCTION' : 'अतिविशेष कृत्रिम अवयव पुनर्रचना'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {currentLang === 'en' ? (
              <>
                Specialized <span className="text-advait-teal-light">Maxillofacial</span> Prosthetic Care
              </>
            ) : (
              <>
                विशेष <span className="text-advait-teal-light">मॅक्सिलोफेशिअल</span> कृत्रिम अवयव उपचार
              </>
            )}
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {currentLang === 'en'
              ? 'Providing restorative prosthetic rehabilitation for facial and cranial defects arising from congenital conditions, oncological surgery, or traumatic injury with utmost clinical dignity and artistry.'
              : 'जन्मजात व्यंग, कर्करोगाच्या शस्त्रक्रियेनंतर किंवा अपघातामुळे झालेल्या चेहऱ्याच्या व अवयवांच्या त्रुटी भरून काढण्यासाठी उच्च दर्जाचे कृत्रिम अवयव.'}
          </p>
        </div>

        {/* Editorial Two-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Nav List for All 8 Organs */}
          <div className="lg:col-span-5 space-y-2">
            <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-2 sm:p-3 divide-y divide-white/5">
              {MAXILLOFACIAL_PROSTHESIS_ITEMS.map((item) => {
                const isSelected = selectedItem.id === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setSelectedItem(item)}
                    className={`w-full text-left p-3.5 rounded-xl transition-all duration-200 flex items-center justify-between group ${
                      isSelected
                        ? 'bg-advait-blue text-white shadow-lg font-semibold scale-[1.01]'
                        : 'text-slate-300 hover:bg-white/10 hover:text-white hover:translate-x-1.5'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-105 ${
                          isSelected ? 'bg-white/20 text-white' : 'bg-white/10 text-advait-teal-light'
                        }`}
                      >
                        {getOrganIcon(item.iconName)}
                      </div>
                      <div>
                        <span className="text-xs sm:text-sm font-bold block leading-tight">
                          {currentLang === 'en' ? item.organName : item.organNameMarathi}
                        </span>
                        <span className={`text-[11px] block mt-0.5 ${isSelected ? 'text-blue-100' : 'text-slate-400'}`}>
                          {currentLang === 'en' ? item.title : item.titleMarathi}
                        </span>
                      </div>
                    </div>

                    <ArrowRight
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isSelected ? 'text-white translate-x-1' : 'text-slate-500 group-hover:text-white group-hover:translate-x-1'
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Detailed Editorial Feature View */}
          <div className="lg:col-span-7">
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-6 sm:p-8 lg:p-10 space-y-6 shadow-elevated">
              {/* Header inside card */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-5">
                <div>
                  <span className="text-xs font-bold text-advait-teal-light uppercase tracking-wider block">
                    {currentLang === 'en' ? 'Clinical Modality' : 'वैद्यकीय उपचार पद्धती'}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mt-0.5">
                    {currentLang === 'en' ? selectedItem.title : selectedItem.titleMarathi}
                  </h3>
                </div>

                <div className="flex items-center gap-1.5 bg-advait-teal/20 border border-advait-teal/40 px-3 py-1 rounded-full text-xs font-semibold text-advait-teal-light">
                  <span>{selectedItem.organName}</span>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                  {currentLang === 'en' ? 'Prosthetic Description' : 'उपचार व रचना तपशील'}
                </h4>
                <p className="text-sm sm:text-base text-slate-100 leading-relaxed">
                  {currentLang === 'en' ? selectedItem.description.en : selectedItem.description.mr}
                </p>
              </div>

              {/* Clinical Objective */}
              <div className="bg-black/25 rounded-2xl p-4 sm:p-5 border border-white/10 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-advait-green">
                  <Check className="w-4 h-4" />
                  <span>{currentLang === 'en' ? 'Primary Clinical & Aesthetic Objective' : 'मुख्य वैद्यकीय उद्दिष्ट'}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  {currentLang === 'en' ? selectedItem.clinicalObjective.en : selectedItem.clinicalObjective.mr}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-1">
                {selectedItem.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-medium text-slate-300"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs text-slate-400">
                  {currentLang === 'en'
                    ? 'Individualized evaluation required by Maxillofacial Prosthodontist.'
                    : 'मॅक्सिलोफेशिअल प्रोस्थोडॉन्टिस्ट डॉक्टरांकडून वैयक्तिक तपासणी आवश्यक.'}
                </p>

                <button
                  onClick={() => onOpenAppointmentModal(selectedItem.title)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-advait-teal hover:bg-advait-teal-dark text-white text-xs sm:text-sm font-bold shadow-md transition-all active:scale-95"
                >
                  <Calendar className="w-4 h-4" />
                  <span>{currentLang === 'en' ? 'Book Prosthetic Consultation' : 'तपासणीसाठी वेळ घ्या'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
