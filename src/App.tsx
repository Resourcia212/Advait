import React, { useState, useEffect } from 'react';
import { Language, ServiceItem, SpecializationCardData } from './types';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/hero/HeroSection';
import { AboutSection } from './components/about/AboutSection';
import { MaxillofacialFeature } from './components/specializations/MaxillofacialFeature';
import { SmileDesignFeature } from './components/specializations/SmileDesignFeature';
import { ServicesDirectory } from './components/services/ServicesDirectory';
import { ServiceModal } from './components/services/ServiceModal';
import { GallerySection } from './components/gallery/GallerySection';
import { LocationsSection } from './components/locations/LocationsSection';
import { AppointmentPage } from './components/appointment/AppointmentPage';
import { ContactSection } from './components/contact/ContactSection';
import { CTASection } from './components/contact/CTASection';
import { Footer } from './components/layout/Footer';
import { ScrollToTop } from './components/layout/ScrollToTop';
import { LegalModal, LegalModalType } from './components/common/LegalModal';

export const App: React.FC = () => {
  const [currentLang, setCurrentLang] = useState<Language>('en');

  // Page Routing State: 'home' | 'appointment'
  const [currentPage, setCurrentPage] = useState<'home' | 'appointment'>(() => {
    const hash = window.location.hash;
    return hash === '#book-appointment' || hash === '#appointment' ? 'appointment' : 'home';
  });

  // Appointment Form prefill State
  const [appointmentInitialReason, setAppointmentInitialReason] = useState<string>('');
  const [appointmentInitialClinic, setAppointmentInitialClinic] = useState<string>('');

  // Service / Specialization Detail Modal State
  const [selectedModalItem, setSelectedModalItem] = useState<ServiceItem | SpecializationCardData | null>(null);

  // Legal Modal State
  const [legalModalType, setLegalModalType] = useState<LegalModalType>(null);

  // Sync with browser hash / navigation (back and forward buttons)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#book-appointment' || hash === '#appointment') {
        setCurrentPage('appointment');
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('popstate', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('popstate', handleHashChange);
    };
  }, []);

  const handleOpenAppointmentPage = (serviceOrReason?: string, clinicLocation?: string) => {
    setAppointmentInitialReason(serviceOrReason || '');
    setAppointmentInitialClinic(clinicLocation || '');
    setCurrentPage('appointment');
    window.location.hash = '#book-appointment';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateToSection = (id: string) => {
    if (currentPage === 'appointment') {
      setCurrentPage('home');
      window.history.replaceState(null, '', ' ');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          const navOffset = 80;
          const elementPosition = el.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navOffset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 50);
    } else {
      const el = document.getElementById(id);
      if (el) {
        const navOffset = 80;
        const elementPosition = el.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }
  };

  const handleBackToHome = (targetSectionId?: string) => {
    handleNavigateToSection(targetSectionId || 'home');
  };

  const handleToggleLang = (lang: Language) => {
    setCurrentLang(lang);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FBFF] text-[#14213D]">
      {/* Sticky Glassmorphic Navbar */}
      <Navbar
        currentLang={currentLang}
        onToggleLang={handleToggleLang}
        onOpenAppointmentModal={(reason) => handleOpenAppointmentPage(reason)}
        onNavigateToSection={handleNavigateToSection}
      />

      {currentPage === 'appointment' ? (
        <main className="flex-grow">
          <AppointmentPage
            currentLang={currentLang}
            initialServiceOrReason={appointmentInitialReason}
            initialClinicLocation={appointmentInitialClinic}
            onBackToHome={handleBackToHome}
          />
        </main>
      ) : (
        <main className="flex-grow">
          {/* Hero Section with Integrated Glass Trust Strip */}
          <HeroSection
            currentLang={currentLang}
            onOpenAppointmentModal={() => handleOpenAppointmentPage()}
            onExploreServices={() => handleNavigateToSection('services')}
          />

          {/* About Section */}
          <AboutSection
            currentLang={currentLang}
            onExploreSpecializations={() => handleNavigateToSection('specializations')}
            onOpenAppointmentModal={() => handleOpenAppointmentPage()}
          />

          {/* Two Clinic Locations Section */}
          <LocationsSection
            currentLang={currentLang}
            onOpenAppointmentModal={(clinic) => handleOpenAppointmentPage(undefined, clinic)}
          />

          {/* Maxillofacial Prosthesis Editorial Feature */}
          <MaxillofacialFeature
            currentLang={currentLang}
            onOpenAppointmentModal={(reason) => handleOpenAppointmentPage(reason || 'Maxillofacial Prosthesis')}
          />

          {/* Unified Clinical Specialties & Smile Designing Feature */}
          <SmileDesignFeature
            currentLang={currentLang}
            onOpenAppointmentModal={(reason) => handleOpenAppointmentPage(reason || 'Smile Design')}
            onSelectSpecialization={(spec) => setSelectedModalItem(spec)}
          />

          {/* Comprehensive Services Directory */}
          <ServicesDirectory
            currentLang={currentLang}
            onSelectService={(service) => setSelectedModalItem(service)}
            onOpenAppointmentModal={(serviceName) => handleOpenAppointmentPage(serviceName)}
          />

          {/* Clinic & Clinical Gallery */}
          <GallerySection currentLang={currentLang} />

          {/* Interactive Query & Contact Section */}
          <ContactSection currentLang={currentLang} />

          {/* High-Impact Final CTA Section */}
          <CTASection
            currentLang={currentLang}
            onOpenAppointmentModal={() => handleOpenAppointmentPage()}
          />
        </main>
      )}

      {/* Comprehensive Footer */}
      <Footer
        currentLang={currentLang}
        onOpenLegalModal={(type) => setLegalModalType(type)}
        onOpenAppointmentModal={() => handleOpenAppointmentPage()}
        onNavigateToSection={handleNavigateToSection}
      />

      {/* Floating Scroll to Top & WhatsApp Helpers */}
      <ScrollToTop />

      {/* Service / Specialization Detail Modal */}
      <ServiceModal
        item={selectedModalItem}
        isOpen={selectedModalItem !== null}
        onClose={() => setSelectedModalItem(null)}
        currentLang={currentLang}
        onBookAppointment={(treatmentName) => {
          setSelectedModalItem(null);
          handleOpenAppointmentPage(treatmentName);
        }}
      />

      {/* Legal & Medical Disclaimer Modal */}
      <LegalModal
        type={legalModalType}
        isOpen={legalModalType !== null}
        onClose={() => setLegalModalType(null)}
        currentLang={currentLang}
      />
    </div>
  );
};

export default App;
