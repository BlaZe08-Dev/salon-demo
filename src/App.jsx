import { useState, useEffect } from 'react';
import { sections } from './salon';

// Components
import Navbar from './components/Navbar';
import MobileBottomNav from './components/MobileBottomNav';
import Footer from './components/Footer';
import FloatingBookButton from './components/FloatingBookButton';
import WhatsAppButton from './components/WhatsAppButton';

// Sections
import Hero from './sections/Hero';
import TrustBar from './sections/TrustBar';
import ServicesSection from './sections/ServicesSection';
import ExperienceSection from './sections/ExperienceSection';
import TeamSection from './sections/TeamSection';
import PackagesSection from './sections/PackagesSection';
import BridalSection from './sections/BridalSection';
import BeforeAfterSection from './sections/BeforeAfterSection';
import Gallery from './sections/Gallery';
import Testimonials from './sections/Testimonials';
import LocationSection from './sections/LocationSection';
import BookingSection from './sections/BookingSection';

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [initialService, setInitialService] = useState(null);
  const [activeSection, setActiveSection] = useState('home');

  // Open booking — optionally with a pre-selected service
  const openBooking = (service = null) => {
    setInitialService(service || null);
    setBookingOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeBooking = () => {
    setBookingOpen(false);
    setInitialService(null);
    document.body.style.overflow = '';
  };

  // Track active section for bottom nav
  useEffect(() => {
    const tracked = [
      { id: 'home',     el: document.getElementById('home') },
      { id: 'services', el: document.getElementById('services') },
      { id: 'gallery',  el: document.getElementById('gallery') },
      { id: 'contact',  el: document.getElementById('contact') },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -40% 0px' }
    );

    tracked.forEach(({ el }) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar onBookClick={() => openBooking()} />

      <main>
        <Hero
          onBookClick={() => openBooking()}
          onExploreClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
        />
        <TrustBar />
        <ServicesSection onBookClick={openBooking} />
        <ExperienceSection />
        {sections.transformations && <BeforeAfterSection />}
        {sections.packages && <PackagesSection onBookClick={openBooking} />}
        {sections.bridal && <BridalSection />}
        {sections.team && <TeamSection />}
        {sections.gallery && <Gallery />}
        {sections.testimonials && <Testimonials />}
        <LocationSection />
      </main>

      <Footer />

      {/* Floating UI */}
      <FloatingBookButton onClick={() => openBooking()} />
      <WhatsAppButton />
      <MobileBottomNav activeSection={activeSection} onBookClick={() => openBooking()} />

      {/* Booking Modal */}
      <BookingSection
        isOpen={bookingOpen}
        initialService={initialService}
        onClose={closeBooking}
      />
    </>
  );
}
