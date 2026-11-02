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
              <a href="#contact-booking" className="btn-accent-yellow" style={{ width: '100%' }}>
                {service.actionText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

