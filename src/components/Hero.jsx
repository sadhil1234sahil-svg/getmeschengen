import React from 'react';

export default function Hero() {
  const whatsappUrl = "https://wa.me/971501089562?text=Hey%20getmeschengen%20team%2C%20I%20would%20like%20to%20inquire%20about%20booking%20a%20Schengen%20consular%20appointment%20from%20Dubai.";

  return (
    <section id="home" className="hero-section hero-artistic-layout">
      {/* Decorative Sun Doodle */}
      <div className="hero-doodle-sun" aria-hidden="true">
        <svg viewBox="0 0 100 100" width="80" height="80">
          <circle cx="50" cy="50" r="18" fill="#ffd700" />
          <path 
            d="M50 14v10M50 76v10M14 50h10M76 50h10M25 25l7 7M68 68l7 7M25 75l7-7M68 32l7-7" 
            stroke="#ffd700" 
            strokeWidth="4" 
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="container hero-grid">
        {/* Hero Left Content */}
        <div className="hero-content">
          <div className="hero-badge-container">
            <span className="badge-yellow">
              <span>★</span> DUBAI'S PREMIER EUROPEAN TRAVEL DESK
            </span>
          </div>

          {/* 4-Word Headline: Medium bold and tilted */}
          <div className="hero-title-wrapper">
            <h1 className="hero-title-poster">
              <span className="poster-line-1">Seamless European</span>
              <span className="poster-line-2">
                Travel Clearance
                {/* Hand-drawn red brush stroke underline */}
                <svg className="brush-underline-svg" viewBox="0 0 280 20" fill="none" preserveAspectRatio="none" aria-hidden="true">
                  <path 
                    d="M4 14 C 70 6, 170 4, 276 11 C 210 18, 120 18, 30 16" 
                    stroke="#e10600" 
                    strokeWidth="5" 
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>
          </div>

          {/* Subtitle paragraph with reduced font size */}
          <p className="hero-subtitle">
            Fast-track Schengen consular appointments, airtight documentation audits, and dedicated submission advocacy for UAE residents and expatriates across 29 European destinations.
          </p>

          <div className="hero-cta-group">
            <a href="#contact-booking" className="btn-accent-yellow">
              <span>Reserve Dubai Slot Now</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a 
              href={whatsappUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-whatsapp"
              aria-label="Chat with getmeschengen team on WhatsApp"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* Social Proof Bar */}
          <div className="hero-social-proof">
            <div className="avatar-stack">
              <div className="avatar-item">RK</div>
              <div className="avatar-item">MA</div>
              <div className="avatar-item">SL</div>
              <div className="avatar-item">+14k</div>
            </div>
            <div className="proof-text">
              <div className="stars" aria-label="5 out of 5 stars">★★★★★</div>
              <span>Trusted by 14,500+ UAE Residents across Dubai &amp; Abu Dhabi</span>
            </div>
          </div>
        </div>

        {/* Hero Right Visual Section (3D Smartphone & Airplane) */}
        <div className="hero-visual-wrapper">
          <div className="hero-image-container">
            <img 
              src="/hero-flight.png" 
              alt="European travel clearance and Schengen visa consular booking concierge in Dubai" 
              className="hero-main-image"
              width="1000"
              height="1200"
              loading="eager"
            />

            {/* Floating Live Slot Badge */}
            <div className="hero-floating-badge badge-top-right">
              <span className="pulsing-dot" aria-hidden="true"></span>
              <div>
                <div className="floating-badge-title">14 Priority Slots Open</div>
                <div className="floating-badge-subtitle">VFS Wafi &amp; BLS Oud Metha, Dubai</div>
              </div>
            </div>

            {/* Floating Approval Badge */}
            <div className="hero-floating-badge badge-bottom-left">
              <div className="floating-badge-icon" aria-hidden="true">★</div>
              <div>
                <div className="floating-badge-title">99.4% Clearance Rate</div>
                <div className="floating-badge-subtitle">Across 29 European Destinations</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
