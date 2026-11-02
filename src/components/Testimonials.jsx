import React from 'react';

const testimonials = [
  {
    quote: "We were planning our family holiday to Switzerland and France, but VFS in Dubai was displaying 'No slots available' for eight consecutive weeks! getmeschengen hunted down 4 appointment slots within three days. Our paperwork passed the consular desk with zero objections!",
    initials: 'RK',
    name: 'Rahul & Ananya Kapoor',
    location: 'Dubai Marina | Family Trip to Switzerland & France'
  },
  {
    quote: "As an entrepreneur with a UAE Golden Residency, I needed to travel to Munich and Milan for commercial conferences on short notice. The getmeschengen team organized my corporate cover letter, hotel bookings, and €50k insurance in 24 hours. Flawless white-glove service.",
    initials: 'MB',
    name: 'Marcus Bennett',
    location: 'Palm Jumeirah | Corporate Travel to Germany & Italy'
  },
  {
    quote: "Their documentation audit saved my entire summer. The team discovered that my bank statement format was missing the bank's digital verification stamp and corrected my employer NOC. We received our stamped passports in 9 calendar days!",
    initials: 'TH',
    name: 'Tarek Haddad',
    location: 'Downtown Dubai | Holiday to Greece & Spain'
  },
  {
    quote: "I was extremely nervous about the biometrics appointment at Wafi Mall because it was my first time applying for European travel authorization. The mock coaching session gave me complete confidence. I knew every question before they even asked it.",
    initials: 'CD',
    name: 'Cherrylyn Dizon',
    location: 'Business Bay | First-Time European Traveler (Italy)'
  },
  {
    quote: "The doorstep pickup and passport return service is a game changer for busy executives in Dubai. They handled all sworn Arabic-to-English translations for our family documentation. getmeschengen is the only travel concierge I trust.",
    initials: 'SA',
    name: 'Sultan Al Nuaimi',
    location: 'Jumeirah Islands | Annual European Tour'
  },
  {
    quote: "After facing a frustrating refusal through a generic travel agent last year, getmeschengen reviewed my previous refusal letter, restructured my itinerary, and drafted an airtight justification. Result? Approved for two full years multi-entry!",
    initials: 'PS',
    name: 'Priya & Siddharth',
    location: 'JLT, Dubai | Multi-Entry European Clearance'
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <div className="section-header">
          <span className="badge-yellow">VERIFIED DUBAI REVIEWS</span>
          <h2 style={{ color: 'var(--color-midnight-blue)' }}>What Our UAE Clients Say</h2>
          <p style={{ color: '#334155' }}>
            Read how we have helped over 14,500 UAE expatriates and citizens secure timely European travel clearances without stress, rejection, or appointment delays.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((item, idx) => (
            <div className="testimonial-card" key={idx}>
              <div>
                <div className="review-stars">★★★★★</div>
                <p className="review-quote">"{item.quote}"</p>
              </div>
              <div className="reviewer-meta">
                <div className="reviewer-avatar">{item.initials}</div>
                <div className="reviewer-info">
                  <h4>{item.name}</h4>
                  <p>{item.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

