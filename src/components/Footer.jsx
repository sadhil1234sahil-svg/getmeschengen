import React from 'react';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Col 1: Brand Info */}
          <div className="footer-brand">
            <div className="brand-logo" style={{ color: 'var(--color-white)', marginBottom: '1.25rem' }}>
              <div className="logo-badge">★</div>
              <div className="brand-logo-text">
                <span className="brand-text-getme">getme</span>
                <span className="brand-text-schengen schengen-text">schengen</span>
              </div>
            </div>
            <p>
              Dubai's accredited European travel clearance and consular concierge desk. Fast-track appointment bookings, airtight dossier reviews, and complete submission assistance across 29 European states.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1rem', flexWrap: 'wrap' }}>
              <span className="badge-stone">Licensed in Dubai, UAE</span>
              <span className="badge-stone">DED Registered</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="footer-col">
            <h4>Navigation</h4>
            <ul className="footer-links">
              <li><a href="#why-us">Why Choose Us</a></li>
              <li><a href="#services">Our Services</a></li>
              <li><a href="#process">The 5-Step Process</a></li>
              <li><a href="#contact-booking">Book Consultation</a></li>
              <li><a href="#testimonials">Client Testimonials</a></li>
              <li><a href="#support">Concierge Support</a></li>
              <li><a href="#faqs">Travel Clearance FAQ</a></li>
            </ul>
          </div>

          {/* Col 3: Popular Destinations */}
          <div className="footer-col">
            <h4>Popular Destinations</h4>
            <ul className="footer-links">
              <li><a href="#contact-booking">France Consular Clearance</a></li>
              <li><a href="#contact-booking">Italy Appointment Desk</a></li>
              <li><a href="#contact-booking">Switzerland Travel Pass</a></li>
              <li><a href="#contact-booking">Germany Submission Pack</a></li>
              <li><a href="#contact-booking">Spain BLS Booking Dubai</a></li>
              <li><a href="#contact-booking">Greece Holiday Clearance</a></li>
              <li><a href="#contact-booking">Austria &amp; Netherlands</a></li>
            </ul>
          </div>

          {/* Col 4: Dubai Office Contact */}
          <div className="footer-col">
            <h4>Dubai Headquarters</h4>
            <p style={{ fontSize: '0.88rem', lineHeight: '1.6', marginBottom: '1rem', color: 'var(--color-warm-stone)' }}>
              Level 24, Boulevard Plaza Tower 1<br />
              Sheikh Mohammed Bin Rashid Blvd<br />
              Downtown Dubai, UAE
            </p>
            <p style={{ fontSize: '0.88rem', marginBottom: '0.5rem' }}>
              <strong>Hotline:</strong> <a href="tel:+971501089562" style={{ color: 'var(--color-accent-yellow)' }}>+971 50 108 9562</a>
            </p>
            <p style={{ fontSize: '0.88rem', marginBottom: '0.5rem' }}>
              <strong>WhatsApp:</strong> <a href="https://wa.me/971501089562" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-warm-stone)' }}>+971 50 108 9562</a>
            </p>
            <p style={{ fontSize: '0.88rem' }}>
              <strong>Email:</strong> <a href="mailto:concierge@getmeschengen.ae" style={{ color: 'var(--color-warm-stone)' }}>concierge@getmeschengen.ae</a>
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div>
            &copy; {new Date().getFullYear()} getmeschengen Dubai. All rights reserved. Registered travel consultancy in the United Arab Emirates.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <a href="#faqs" style={{ color: '#71717a' }}>Privacy Policy</a>
            <a href="#faqs" style={{ color: '#71717a' }}>Terms of Concierge Service</a>
            <a href="#faqs" style={{ color: '#71717a' }}>Consular Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

