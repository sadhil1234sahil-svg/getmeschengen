import React from 'react';

export default function Hero() {
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
                <svg className="brush-underline-svg" viewBox="0 0 280 20" fill="none" preserveAspectRatio="none">
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
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a 
              href="#services" 
              className="btn-accent-yellow" 
              style={{ backgroundColor: '#ffffff', color: 'var(--color-midnight-blue)', borderColor: 'var(--color-midnight-blue)' }}
            >
              <span>Explore 29 Destinations</span>
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
              <div className="stars">★★★★★</div>
              <span>Trusted by 14,500+ UAE Residents across Dubai &amp; Abu Dhabi</span>
            </div>
          </div>
        </div>

        {/* Hero Right Visual Section (User's 3D Smartphone & Airplane) */}
        <div className="hero-visual-wrapper">
          <div className="hero-image-container">
            <img 
              src="/hero-flight.png" 
              alt="European travel clearance and consular booking from Dubai" 
              className="hero-main-image"
              width="1000"
              height="1200"
              loading="eager"
            />

            {/* Floating Live Slot Badge */}
            <div className="hero-floating-badge badge-top-right">
              <span className="pulsing-dot"></span>
              <div>
                <div className="floating-badge-title">14 Priority Slots Open</div>
                <div className="floating-badge-subtitle">VFS Wafi &amp; BLS Oud Metha, Dubai</div>
              </div>
            </div>

            {/* Floating Approval Badge */}
            <div className="hero-floating-badge badge-bottom-left">
              <div className="floating-badge-icon">★</div>
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
