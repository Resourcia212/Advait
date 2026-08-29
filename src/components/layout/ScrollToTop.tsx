import React, { useState, useEffect } from 'react';
import { ArrowUp, MessageCircle } from 'lucide-react';
import { PRIMARY_PHONE } from '../../data/clinicInfo';

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-3">
      {/* Floating Quick WhatsApp Chat */}
      <a
        href={`https://wa.me/91${PRIMARY_PHONE}?text=${encodeURIComponent('Hello Advait Dental Clinic, I would like to inquire about appointments.')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110 active:scale-95 group"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>

      {/* Floating Scroll to Top */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="w-11 h-11 rounded-full bg-white text-advait-navy border border-advait-border hover:bg-advait-blue hover:text-white hover:border-advait-blue flex items-center justify-center shadow-lg transition-all hover:scale-105 active:scale-95 animate-fade-in"
          aria-label="Scroll to top of page"
          title="Back to Top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};
