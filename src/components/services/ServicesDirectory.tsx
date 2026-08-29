import React, { useState, useMemo } from 'react';
import {
  Search,
  Sparkles,
  Shield,
  Hammer,
  Layers,
  ShieldCheck,
  UserCheck,
  Stethoscope,
  ArrowRight,
  Calendar,
  Filter,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { Language, ServiceCategory, ServiceItem } from '../../types';
import { ALL_SERVICES, SERVICE_CATEGORIES } from '../../data/services';

interface ServicesDirectoryProps {
  currentLang: Language;
  onSelectService: (service: ServiceItem) => void;
  onOpenAppointmentModal: (serviceName?: string) => void;
}

export const ServicesDirectory: React.FC<ServicesDirectoryProps> = ({
  currentLang,
  onSelectService,
  onOpenAppointmentModal,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [visibleCount, setVisibleCount] = useState<number>(8);

  const filteredServices = useMemo(() => {
    return ALL_SERVICES.filter((service) => {
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        service.name.toLowerCase().includes(q) ||
        service.nameMarathi.toLowerCase().includes(q) ||
        service.shortDescription.en.toLowerCase().includes(q) ||
        service.shortDescription.mr.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Sliced services to show 8 by default
  const displayedServices = useMemo(() => {
    // If a search is active, show all matches; otherwise show up to visibleCount
    if (searchQuery.trim() !== '') {
      return filteredServices;
    }
    return filteredServices.slice(0, visibleCount);
  }, [filteredServices, visibleCount, searchQuery]);

  const hasMore = searchQuery.trim() === '' && filteredServices.length > visibleCount;
  const isExpanded = visibleCount >= filteredServices.length && filteredServices.length > 8;

  const handleToggleShowMore = () => {
    if (isExpanded) {
      setVisibleCount(8);
      const el = document.getElementById('services');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      setVisibleCount(filteredServices.length);
    }
  };

  const getCategoryIcon = (catId: ServiceCategory) => {
    const props = { className: "w-3.5 h-3.5" };
    switch (catId) {
      case 'preventive-general': return <Shield {...props} />;
      case 'restorative': return <Hammer {...props} />;
      case 'cosmetic': return <Sparkles {...props} />;
      case 'prosthodontics': return <Layers {...props} />;
      case 'implantology': return <ShieldCheck {...props} />;
      case 'maxillofacial': return <UserCheck {...props} />;
      case 'tmj-other': return <Stethoscope {...props} />;
      default: return <Sparkles {...props} />;
    }
  };

  return (
    <section id="services" className="py-14 sm:py-16 bg-[#F8FBFF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-advait-blue-soft border border-advait-blue/20 text-advait-blue text-[11px] font-bold uppercase tracking-wider">
            <Layers className="w-3 h-3 text-advait-teal" />
            <span>{currentLang === 'en' ? 'COMPREHENSIVE TREATMENTS' : 'सर्वसमावेशक दंतोपचार'}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-advait-navy tracking-tight">
            {currentLang === 'en' ? (
              <>
                All Dental Treatments <span className="gradient-text-blue">Under One Roof</span>
              </>
            ) : (
              <>
                सर्व दंत उपचार <span className="gradient-text-blue">एकाच छताखाली</span>
              </>
            )}
          </h2>

          <p className="text-xs sm:text-sm text-advait-text-secondary">
            {currentLang === 'en'
              ? 'Explore our full spectrum of specialized prosthodontic, surgical, cosmetic, and preventive dental procedures.'
              : 'प्राथमिक प्रतिबंधक उपचारांपासून ते प्रोस्थोडॉन्टिक्स, कृत्रिम अवयव व इम्प्लांट्सपर्यंत सर्व उपचार एकाच क्लिनिकमध्ये.'}
          </p>
        </div>

        {/* Filter Bar: Search Input & Category Pills */}
        <div className="space-y-3.5 mb-8">
          {/* Search Box */}
          <div className="max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                if (e.target.value) setVisibleCount(filteredServices.length);
              }}
              placeholder={currentLang === 'en' ? "Search treatments (e.g. Dentures, Implants, RCT)..." : "उपचार शोधा (उदा. कवळी, इम्प्लांट, रूट कॅनॉल)..."}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-advait-border bg-white text-xs sm:text-sm text-advait-navy focus:outline-none focus:ring-2 focus:ring-advait-blue/30 focus:border-advait-blue shadow-xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
              >
                ✕
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="flex items-center justify-start lg:justify-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
            <button
              onClick={() => {
                setSelectedCategory('all');
                setVisibleCount(8);
              }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold shrink-0 transition-all ${
                selectedCategory === 'all'
                  ? 'bg-advait-blue text-white shadow-xs'
                  : 'bg-white text-advait-navy border border-advait-border hover:bg-slate-50'
              }`}
            >
              <Filter className="w-3 h-3" />
              <span>{currentLang === 'en' ? 'All Treatments' : 'सर्व उपचार'}</span>
              <span className="text-[10px] opacity-75">({ALL_SERVICES.length})</span>
            </button>

            {SERVICE_CATEGORIES.map((cat) => {
              const count = ALL_SERVICES.filter(s => s.category === cat.id).length;
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setSelectedCategory(cat.id);
                    setVisibleCount(8);
                  }}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold shrink-0 transition-all ${
                    isSelected
                      ? 'bg-advait-blue text-white shadow-xs'
                      : 'bg-white text-advait-navy border border-advait-border hover:bg-slate-50'
                  }`}
                >
                  {getCategoryIcon(cat.id)}
                  <span>{currentLang === 'en' ? cat.name : cat.nameMarathi}</span>
                  <span className="text-[10px] opacity-75">({count})</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-advait-text-secondary mb-5 px-1">
          <span>
            {currentLang === 'en'
              ? `Showing ${displayedServices.length} of ${filteredServices.length} treatments`
              : `${filteredServices.length} पैकी ${displayedServices.length} उपचार दाखवत आहे`}
          </span>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="text-advait-blue font-semibold hover:underline"
            >
              {currentLang === 'en' ? 'Clear search' : 'शोध रद्द करा'}
            </button>
          )}
        </div>

        {/* Services 4-Column Responsive Grid */}
        {displayedServices.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {displayedServices.map((service) => (
              <div
                key={service.id}
                onClick={() => onSelectService(service)}
                className="bg-white rounded-2xl p-5 border border-advait-border hover:border-advait-blue/50 shadow-xs hover:shadow-card hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group cursor-pointer relative overflow-hidden"
              >
                <div className="space-y-3">
                  {/* Category Pill & Featured Tag */}
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-advait-blue-soft text-advait-blue border border-advait-blue/20 group-hover:bg-advait-blue group-hover:text-white transition-colors duration-300">
                      {SERVICE_CATEGORIES.find(c => c.id === service.category)?.name.split('&')[0] || service.category}
                    </span>
                    {service.isFeatured && (
                      <span className="text-[10px] font-bold text-advait-green uppercase tracking-wider">
                        ★ {currentLang === 'en' ? 'Key' : 'महत्त्वाचे'}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-sm sm:text-[15px] font-bold text-advait-navy group-hover:text-advait-blue transition-colors duration-200 leading-snug">
                    {currentLang === 'en' ? service.name : service.nameMarathi}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs text-advait-text-secondary leading-relaxed line-clamp-2">
                    {currentLang === 'en' ? service.shortDescription.en : service.shortDescription.mr}
                  </p>
                </div>

                {/* Card Actions */}
                <div className="pt-3 mt-3 border-t border-advait-border/60 flex items-center justify-between gap-2">
                  <span className="text-xs font-bold text-advait-blue group-hover:text-advait-blue-dark flex items-center gap-1">
                    <span>{currentLang === 'en' ? 'Details' : 'माहिती'}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
                  </span>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenAppointmentModal(service.name);
                    }}
                    className="px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-advait-blue-soft hover:bg-advait-blue hover:text-white text-advait-blue hover:shadow-xs hover:scale-[1.03] transition-all duration-200 border border-advait-blue/20 flex items-center gap-1 active:scale-95"
                  >
                    <Calendar className="w-3 h-3" />
                    <span>{currentLang === 'en' ? 'Book' : 'वेळ घ्या'}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-12 text-center border border-advait-border space-y-3">
            <p className="text-sm font-semibold text-advait-navy">
              {currentLang === 'en' ? 'No dental treatments match your search.' : 'शोधानुसार कोणतेही उपचार आढळले नाहीत.'}
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setVisibleCount(8);
              }}
              className="text-xs font-bold text-advait-blue hover:underline"
            >
              {currentLang === 'en' ? 'Reset filters and view all' : 'सर्व उपचार पुन्हा पहा'}
            </button>
          </div>
        )}

        {/* Show More / Show Less Toggle Button */}
        {filteredServices.length > 8 && searchQuery.trim() === '' && (
          <div className="mt-10 text-center">
            <button
              onClick={handleToggleShowMore}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-advait-blue hover:text-white text-advait-navy border border-advait-border hover:border-advait-blue font-bold text-xs sm:text-sm shadow-xs hover:shadow-md hover:-translate-y-0.5 hover:scale-[1.02] transition-all duration-200 active:scale-95 group"
            >
              <span>
                {hasMore
                  ? currentLang === 'en'
                    ? `Show More Treatments (${filteredServices.length - visibleCount} more)`
                    : `आणखी उपचार पहा (${filteredServices.length - visibleCount} शिल्लक)`
                  : currentLang === 'en'
                    ? 'Show Less'
                    : 'कमी दाखवा'}
              </span>
              {hasMore ? (
                <ChevronDown className="w-4 h-4 text-advait-blue group-hover:text-white transition-transform group-hover:translate-y-0.5" />
              ) : (
                <ChevronUp className="w-4 h-4 text-advait-blue group-hover:text-white transition-transform group-hover:-translate-y-0.5" />
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
