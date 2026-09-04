import React, { useState, useMemo, useEffect } from 'react';
import { Image as ImageIcon, Maximize2, ChevronDown, ChevronUp, Layers } from 'lucide-react';
import { Language, GalleryItem, GalleryCategory } from '../../types';
import { GALLERY_ITEMS, GALLERY_CATEGORIES } from '../../data/galleryData';
import { LightboxModal } from './LightboxModal';

interface GallerySectionProps {
  currentLang: Language;
}

// Individual Gallery Card with automatic hover slideshow if multiple images exist
const GalleryCard: React.FC<{
  item: GalleryItem;
  onClick: () => void;
  currentLang: Language;
}> = ({ item, onClick, currentLang }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  const allImages = useMemo(() => {
    return [item.imageUrl, ...(item.additionalImages || [])];
  }, [item]);

  useEffect(() => {
    let interval: ReturnType<typeof setTimeout> | null = null;
    if (isHovered && allImages.length > 1) {
      interval = setInterval(() => {
        setImageIndex((prev) => (prev + 1) % allImages.length);
      }, 1500);
    } else {
      setImageIndex(0);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isHovered, allImages]);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="bg-white rounded-2xl overflow-hidden border border-advait-border hover:border-advait-blue/40 shadow-xs hover:shadow-card hover:-translate-y-1.5 transition-all duration-300 group cursor-pointer flex flex-col justify-between"
    >
      {/* Image Container with smooth slideshow */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
        {allImages.map((imgSrc, idx) => (
          <img
            key={idx}
            src={imgSrc}
            alt={`${item.title} view ${idx + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
              idx === imageIndex ? 'opacity-100 scale-100 group-hover:scale-105' : 'opacity-0 scale-105 pointer-events-none'
            }`}
            loading="lazy"
          />
        ))}

        {/* Hover Dark Overlay with Zoom Icon */}
        <div className="absolute inset-0 bg-advait-navy/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
          <div className="w-10 h-10 rounded-full bg-white/30 backdrop-blur-md text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
            <Maximize2 className="w-5 h-5" />
          </div>
        </div>

        {/* Floating Tag */}
        <div className="absolute top-3 left-3 z-10">
          <span className="px-2.5 py-1 rounded-lg text-[10px] font-bold bg-white/90 backdrop-blur-md text-advait-navy border border-advait-border shadow-xs group-hover:bg-white group-hover:text-advait-blue transition-colors duration-200">
            {item.tag}
          </span>
        </div>

        {/* Multi-image indicator badge */}
        {allImages.length > 1 && (
          <div className="absolute bottom-3 right-3 z-10 bg-advait-navy/80 backdrop-blur-md text-white px-2 py-0.5 rounded-md text-[10px] font-semibold flex items-center gap-1 shadow-xs">
            <Layers className="w-3 h-3 text-advait-teal" />
            <span>{allImages.length} Views</span>
          </div>
        )}
      </div>

      {/* Title & Caption */}
      <div className="p-4 space-y-1.5 bg-white border-t border-advait-border/60">
        <h4 className="text-xs sm:text-sm font-bold text-advait-navy group-hover:text-advait-blue transition-colors duration-200 leading-snug line-clamp-1">
          {currentLang === 'en' ? item.title : item.titleMarathi}
        </h4>
        <p className="text-[11px] text-advait-text-secondary line-clamp-2 leading-relaxed font-normal">
          {currentLang === 'en' ? item.caption.en : item.caption.mr}
        </p>
      </div>
    </div>
  );
};

export const GallerySection: React.FC<GallerySectionProps> = ({ currentLang }) => {
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState<number>(8);

  const filteredItems = useMemo(() => {
    if (selectedCategory === 'all') return GALLERY_ITEMS;
    return GALLERY_ITEMS.filter((i) => i.category === selectedCategory);
  }, [selectedCategory]);

  const displayedItems = useMemo(() => {
    return filteredItems.slice(0, visibleCount);
  }, [filteredItems, visibleCount]);

  const hasMore = filteredItems.length > visibleCount;
  const isExpanded = visibleCount >= filteredItems.length && filteredItems.length > 8;

  const handleToggleShowMore = () => {
    if (isExpanded) {
      setVisibleCount(8);
      const el = document.getElementById('gallery');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      setVisibleCount(filteredItems.length);
    }
  };

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const handlePrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  const handleNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  return (
    <section id="gallery" className="py-14 sm:py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-advait-blue-soft border border-advait-blue/20 text-advait-blue text-[11px] font-bold uppercase tracking-wider">
            <ImageIcon className="w-3 h-3 text-advait-teal" />
            <span>{currentLang === 'en' ? 'CLINICAL & CASE GALLERY' : 'क्लिनिकल व उपचार दालन'}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-advait-navy tracking-tight">
            {currentLang === 'en' ? (
              <>
                Advait <span className="gradient-text-blue">Clinical Gallery</span>
              </>
            ) : (
              <>
                अद्वैत <span className="gradient-text-blue">क्लिनिकल छायाचित्रे</span>
              </>
            )}
          </h2>

          <p className="text-xs sm:text-sm text-advait-text-secondary">
            {currentLang === 'en'
              ? 'Photographic records of our clinic operatory, doctor profiles, and specialized prosthodontic cases.'
              : 'अद्वैत क्लिनिकमधील कन्सल्टेशन कक्ष आणि विशेष प्रोस्थोडॉन्टिक व मॅक्सिलोफेशिअल उपचारांची छायाचित्रे.'}
          </p>
        </div>

        {/* Essential 4 Categories Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-3 mb-8 scrollbar-none">
          {GALLERY_CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            const count = cat.id === 'all'
              ? GALLERY_ITEMS.length
              : GALLERY_ITEMS.filter((i) => i.category === cat.id).length;

            return (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.id);
                  setVisibleCount(8);
                }}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold shrink-0 transition-all ${
                  isSelected
                    ? 'bg-advait-blue text-white shadow-xs'
                    : 'bg-[#F8FBFF] text-advait-navy border border-advait-border hover:bg-slate-100'
                }`}
              >
                <span>{currentLang === 'en' ? cat.name : cat.nameMarathi}</span>
                <span className="text-[10px] opacity-75">({count})</span>
              </button>
            );
          })}
        </div>

        {/* Gallery 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {displayedItems.map((item, idx) => (
            <GalleryCard
              key={item.id}
              item={item}
              currentLang={currentLang}
              onClick={() => handleOpenLightbox(idx)}
            />
          ))}
        </div>

        {/* Show More / Show Less Button */}
        {filteredItems.length > 8 && (
          <div className="mt-10 text-center">
            <button
              onClick={handleToggleShowMore}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-advait-blue hover:text-white text-advait-navy border border-advait-border hover:border-advait-blue font-bold text-xs sm:text-sm shadow-xs hover:shadow-md hover:-translate-y-0.5 hover:scale-[1.02] transition-all duration-200 active:scale-95 group"
            >
              <span>
                {hasMore
                  ? currentLang === 'en'
                    ? `Show More Photos (${filteredItems.length - visibleCount} more)`
                    : `आणखी फोटो पहा (${filteredItems.length - visibleCount} शिल्लक)`
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

        {/* Lightbox Modal */}
        {lightboxIndex !== null && (
          <LightboxModal
            items={filteredItems}
            currentIndex={lightboxIndex}
            isOpen={lightboxIndex !== null}
            onClose={() => setLightboxIndex(null)}
            onPrev={handlePrev}
            onNext={handleNext}
            currentLang={currentLang}
          />
        )}
      </div>
    </section>
  );
};
