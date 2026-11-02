import React from 'react';

const whyUsPoints = [
  {
    icon: '⚡',
    title: 'Automated Slot Sniping',
    desc: 'Our proprietary tracking software monitors consular scheduling portals 24/7 across VFS Global, BLS International, and TLScontact in Dubai and Abu Dhabi to capture cancelled and newly released slots instantly.'
  },
  {
    icon: '🛡️',
    title: 'Zero-Error Dossier Audits',
    desc: 'Every document—from Dubai employer NOC letters to bank statement minimum balances and travel itineraries—is vetted through a 36-point consular compliance check before submission.'
  },
  {
    icon: '📍',
    title: 'Local Dubai Presence',
    desc: 'Located in the heart of Downtown Dubai, our consular specialists understand the specific documentation nuances required from UAE free zone entities, mainland companies, and Golden Residency holders.'
  },
  {
    icon: '✈️',
    title: 'Compliant Travel Itineraries',
    desc: 'We generate embassy-recognized, verifiable round-trip flight reservations and confirmed European hotel accommodation vouchers without forcing you to pay non-refundable ticket costs upfront.'
  },
  {
    icon: '💼',
    title: 'Corporate & Family Portfolios',
    desc: 'Custom-tailored dossiers for multi-generational families, high-net-worth investors, corporate executives, and domestic staff traveling alongside UAE resident sponsors.'
  },
  {
    icon: '💬',
    title: 'Dedicated One-on-One Concierge',
    desc: 'Direct WhatsApp liaison with your assigned case manager. Receive instant real-time updates from appointment reservation through consular biometrics to doorstep passport delivery.'
  }
];

export default function WhyUs() {
  return (
    <section id="why-us" className="why-us-section">
      <div className="container">
        <div className="section-header">
          <span className="badge-yellow">THE DUBAI TRAVEL ADVANTAGE</span>
          <h2>Why UAE Residents Rely on getmeschengen</h2>
          <p>
            Consular appointment calendars in the UAE fill up within minutes, while simple submission discrepancies result in devastating refusals. Our specialized Dubai team turns an agonizing administrative obstacle into a smooth, guaranteed journey.
          </p>
        </div>

        <div className="why-grid">
          {whyUsPoints.map((item, index) => (
            <div className="why-card" key={index}>
              <div className="why-icon-box">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

