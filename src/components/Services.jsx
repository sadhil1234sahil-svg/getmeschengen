import React from 'react';

const servicesList = [
  {
    badge: 'FAST-TRACK SCHEDULING',
    title: 'Consular Appointment Procurement',
    desc: 'Struggling to find an open date at VFS Wafi Mall, BLS Oud Metha, or TLScontact? We secure prime morning and premium lounge appointment slots tailored to your departure schedule.',
    features: [
      'Priority slot hunting across 29 European consulates',
      'Rescheduling & emergency travel date adjustments',
      'Full confirmation slip & biometric voucher delivery'
    ],
    actionText: 'Schedule Your Slot'
  },
  {
    badge: 'LEGAL COMPLIANCE',
    title: 'Travel Dossier Formulation',
    desc: 'The consular dossier is the core determinant of approval. We draft compelling personal cover letters, format employment NOCs, structure financial proofs, and harmonize multi-country itineraries.',
    features: [
      'Personalized cover letter highlighting travel intent',
      'UAE employer NOC letter templates & verification',
      '3-month to 6-month bank statement balance checks'
    ],
    actionText: 'Audit My Dossier'
  },
  {
    badge: 'VERIFIABLE BOOKINGS',
    title: 'Flight & Accommodation Reservations',
    desc: 'Embassies mandate verifiable round-trip flight itineraries and confirmed accommodation bookings. We provide authentic, live reservations that pass strict consular barcode and PNR checks.',
    features: [
      'Live airline PNR booking references',
      'Confirmed hotel vouchers across European cities',
      'Zero risk of expensive non-refundable ticket losses'
    ],
    actionText: 'Get Flight & Hotel Pack'
  },
  {
    badge: 'COUNCIL MANDATED',
    title: 'Compliant Travel Medical Insurance',
    desc: 'Every European territory requires minimum health coverage of €30,000 with zero deductible covering hospitalization, emergency medical treatment, and repatriation across all Schengen states.',
    features: [
      'Fully accredited by European embassies in UAE',
      'Minimum €30,000 / $50,000 emergency medical sum',
      'Instant electronic certificate issued in minutes'
    ],
    actionText: 'Order Travel Insurance'
  },
  {
    badge: 'CONFIDENCE BUILDING',
    title: 'Biometrics & Interview Coaching',
    desc: 'First-time European traveler or attending an in-person interview? Our experts prep you on customary questions, cross-examination topics, and professional document presentation.',
    features: [
      'Simulated consular officer Q&A session',
      'Document sequencing in strict embassy order',
      'Center etiquette & biometric protocol briefing'
    ],
    actionText: 'Book Interview Prep'
  },
  {
    badge: 'CONCIERGE TIER',
    title: 'White-Glove VIP Doorstep Service',
    desc: 'Enjoy seamless end-to-end luxury. We collect your documentation directly from your home or office in Dubai, handle sworn translations, and deliver your stamped passport upon release.',
    features: [
      'Doorstep courier pickup & delivery across Dubai',
      'Certified translation for non-English records',
      'Dedicated VIP appointment lounge escort options'
    ],
    actionText: 'Upgrade to VIP Concierge'
  }
];

export default function Services() {
  const whatsappUrl = "https://wa.me/971501089562?text=Hey%20getmeschengen%20team%2C%20I%20would%20like%20to%20inquire%20about%20booking%20a%20Schengen%20consular%20appointment%20from%20Dubai.";

  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-header">
          <span className="badge-yellow">OUR END-TO-END SUITE</span>
          <h2 style={{ color: 'var(--color-midnight-blue)' }}>Comprehensive European Travel Services</h2>
          <p style={{ color: '#334155' }}>
            From your initial travel blueprint to the moment your stamped passport is safely delivered to your Dubai residence, we handle every complex procedural requirement.
          </p>
        </div>

        <div className="services-grid">
          {servicesList.map((service, idx) => (
            <div className="service-card" key={idx}>
              <div className="service-top">
                <span className="service-badge">{service.badge}</span>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <ul className="service-features">
                  {service.features.map((feat, fIdx) => (
                    <li key={fIdx}>
                      <span className="check-icon">✓</span> {feat}
                    </li>
                  ))}
                </ul>
              </div>
              <a href="#contact-booking" className="btn-accent-yellow" style={{ width: '100%', textAlign: 'center' }}>
                {service.actionText}
              </a>
            </div>
          ))}
        </div>

        {/* WhatsApp CTA 2 Banner */}
        <div className="services-whatsapp-banner">
          <div className="services-whatsapp-content">
            <span className="badge-yellow">INSTANT DUBAI CONCIERGE</span>
            <h3>Need Urgent Slots or Custom Travel Guidance?</h3>
            <p>
              Connect directly with our senior consular advisors on WhatsApp for live slot availability, documentation audits, and immediate booking.
            </p>
          </div>
          <a 
            href={whatsappUrl}
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-whatsapp"
            aria-label="Chat with getmeschengen team on WhatsApp"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
