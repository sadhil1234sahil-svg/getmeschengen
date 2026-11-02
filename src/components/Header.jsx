import React, { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const closeMenu = () => setMobileMenuOpen(false);
  const whatsappUrl = "https://wa.me/971501089562?text=Hey%20getmeschengen%20team%2C%20I%20would%20like%20to%20inquire%20about%20booking%20a%20Schengen%20consular%20appointment%20from%20Dubai.";

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : 'transparent-header'}`}>
      <div className="container nav-wrapper">
        <a href="#home" className="brand-logo" aria-label="getmeschengen homepage">
          <div className="logo-badge" aria-hidden="true">★</div>
          <div className="brand-logo-text">
            <span className="brand-text-getme">getme</span>
            <span className="brand-text-schengen schengen-text">schengen</span>
          </div>
        </a>

        {/* Navigation Menu */}
        <nav aria-label="Main Navigation">
          <ul className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            <li><a href="#why-us" onClick={closeMenu}>Why Us</a></li>
            <li><a href="#services" onClick={closeMenu}>Services</a></li>
            <li><a href="#process" onClick={closeMenu}>Process</a></li>
            <li><a href="#contact-booking" onClick={closeMenu}>Consultation</a></li>
            <li><a href="#testimonials" onClick={closeMenu}>Testimonials</a></li>
            <li><a href="#support" onClick={closeMenu}>Support</a></li>
            <li><a href="#faqs" onClick={closeMenu}>FAQs</a></li>
            
            {/* Mobile-only action buttons */}
            <li className="mobile-menu-actions">
              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-whatsapp mobile-menu-btn"
                onClick={closeMenu}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                <span>WhatsApp: +971 50 108 9562</span>
              </a>
              <a 
                href="tel:+971501089562" 
                className="btn-accent-yellow mobile-menu-btn"
                onClick={closeMenu}
              >
                <span>Call Concierge: +971 50 108 9562</span>
              </a>
            </li>
          </ul>
        </nav>

        {/* CTA Button containing phone number */}
        <div className="header-actions">
          <a 
            href="tel:+971501089562" 
            className="btn-accent-yellow header-phone-cta"
            aria-label="Call +971 50 108 9562"
            title="Call Dubai Concierge Desk"
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            <span className="header-phone-text">+971 50 108 9562</span>
            <span className="header-phone-short-text">Call</span>
          </a>
          <button 
            className="mobile-menu-toggle" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6 18L18 6M6 6l12 12"/>
              </svg>
            ) : (
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Backdrop overlay for mobile menu */}
      {mobileMenuOpen && (
        <div 
          className="mobile-menu-backdrop" 
          onClick={closeMenu} 
          aria-hidden="true"
        />
      )}
    </header>
  );
}
