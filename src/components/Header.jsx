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

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : 'transparent-header'}`}>
      <div className="container nav-wrapper">
        <a href="#home" className="brand-logo" aria-label="getmeschengen homepage">
          <div className="logo-badge">★</div>
          <div className="brand-logo-text">
            <span className="brand-text-getme">getme</span>
            <span className="brand-text-schengen schengen-text">schengen</span>
          </div>
        </a>

        {/* Navigation Menu with improved spacing */}
        <nav aria-label="Main Navigation">
          <ul className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            <li><a href="#why-us" onClick={closeMenu}>Why Us</a></li>
            <li><a href="#services" onClick={closeMenu}>Services</a></li>
            <li><a href="#process" onClick={closeMenu}>Process</a></li>
            <li><a href="#contact-booking" onClick={closeMenu}>Consultation</a></li>
            <li><a href="#testimonials" onClick={closeMenu}>Testimonials</a></li>
            <li><a href="#support" onClick={closeMenu}>Support</a></li>
            <li><a href="#faqs" onClick={closeMenu}>FAQs</a></li>
          </ul>
        </nav>

        {/* CTA Button containing phone number */}
        <div className="header-actions">
          <a href="tel:+971501089562" className="btn-accent-yellow header-phone-cta">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            <span>+971 50 108 9562</span>
          </a>
          <button 
            className="mobile-menu-toggle" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M6 18L18 6M6 6l12 12"/>
              </svg>
            ) : (
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
