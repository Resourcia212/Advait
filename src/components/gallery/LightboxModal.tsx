import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryItem, Language } from '../../types';

interface LightboxModalProps {
  items: GalleryItem[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  currentLang: Language;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  items,
  currentIndex,
  isOpen,
  onClose,
  onPrev,
  onNext,
  currentLang,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || items.length === 0) return null;

  const currentItem = items[currentIndex];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-title"
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
        aria-label="Close Lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
        aria-label="Previous Image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
        aria-label="Next Image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Image Container */}
      <div
        className="max-w-4xl w-full bg-neutral-900 rounded-3xl overflow-hidden border border-white/10 shadow-2xl space-y-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative max-h-[65vh] flex items-center justify-center bg-black/50 p-2">
          <img
            src={currentItem.imageUrl}
            alt={currentItem.title}
            className="max-h-[60vh] max-w-full object-contain mx-auto rounded-xl"
          />
        </div>

        {/* Caption & Metadata Footer */}
        <div className="p-6 text-white space-y-2 border-t border-white/10 bg-neutral-900">
          <div className="flex items-center justify-between gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-advait-teal/20 text-advait-teal-light border border-advait-teal/30">
              {currentItem.tag}
            </span>
            <span className="text-xs text-slate-400 font-mono">
              {currentIndex + 1} / {items.length}
            </span>
          </div>

          <h3 id="lightbox-title" className="text-lg font-bold text-white">
            {currentLang === 'en' ? currentItem.title : currentItem.titleMarathi}
          </h3>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {currentLang === 'en' ? currentItem.caption.en : currentItem.caption.mr}
          </p>
        </div>
      </div>
    </div>
  );
};
