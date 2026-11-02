import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import WhyUs from './components/WhyUs';
import Services from './components/Services';
import Process from './components/Process';
import ContactFormSection from './components/ContactFormSection';
import Testimonials from './components/Testimonials';
import ExceptionalSupport from './components/ExceptionalSupport';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import ConfirmationModal from './components/ConfirmationModal';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [referenceCode, setReferenceCode] = useState('');

  const handleBookingSubmitted = (refCode) => {
    setReferenceCode(refCode);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="site-wrapper">
      <Header />
      <main>
        <Hero />
        <StatsBar />
        <WhyUs />
        <Services />
        <Process />
        <ContactFormSection onBookingSubmitted={handleBookingSubmitted} />
        <Testimonials />
        <ExceptionalSupport />
        <FaqSection />
      </main>
      <Footer />
      <ConfirmationModal 
        isOpen={modalOpen} 
        onClose={handleCloseModal} 
        referenceCode={referenceCode} 
      />
    </div>
  );
}

