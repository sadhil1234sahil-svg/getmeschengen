import React from 'react';

const supportPillars = [
  {
    icon: '💬',
    title: '24/7 WhatsApp Concierge',
    desc: 'No annoying automated bot loops. Direct access to your dedicated Dubai travel specialist who responds promptly to all questions, day or night.'
  },
  {
    icon: '📅',
    title: 'Free Rescheduling Protection',
    desc: 'Flight delayed or meeting rescheduled? If your travel dates shift, our team immediately readjusts your consular appointment and updates your entire dossier at no added service cost.'
  },
  {
    icon: '🔍',
    title: 'Pre-Submission Mock Screening',
    desc: 'Our former consular officers simulate the exact intake procedure, reviewing paper order, barcode clarity, photograph dimensions, and passport validity.'
  },
  {
    icon: '🛡️',
    title: 'Refusal Recovery Desk',
    desc: 'Received an unexpected refusal in the past? Our legal appeal specialists analyze the refusal grounds, rectify the core concerns, and prepare an unassailable re-application.'
  }
];

export default function ExceptionalSupport() {
  return (
    <section id="support" className="support-section">
      <div className="container">
        <div className="section-header">
          <span className="badge-yellow">WHITE-GLOVE STANDARD</span>
          <h2>Our Exceptional Support Protocol</h2>
          <p>
            We don't just hand you forms and wish you luck. You receive the backing of an elite concierge team from day one until your return flight touches down at Dubai International Airport.
          </p>
        </div>

        <div className="support-grid">
          {supportPillars.map((pillar, idx) => (
            <div className="support-card" key={idx}>
              <div className="support-icon-ring">{pillar.icon}</div>
              <h4>{pillar.title}</h4>
              <p>{pillar.desc}</p>
            </div>
          ))}
        </div>

        {/* Emergency Departure Banner */}
        <div 
          style={{
            background: 'linear-gradient(135deg, var(--color-midnight-blue) 0%, #2b3075 100%)',
            borderRadius: 'var(--radius-xl)',
            padding: '3rem 2.5rem',
            marginTop: '4rem',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '2rem'
          }}
        >
          <div style={{ maxWidth: '650px' }}>
            <span className="badge-yellow" style={{ marginBottom: '0.75rem' }}>
              PEACE OF MIND GUARANTEE
            </span>
            <h3 style={{ fontSize: '1.85rem', color: '#ffffff', marginBottom: '0.5rem' }}>
              Have an Urgent Departure Coming Up?
            </h3>
            <p style={{ color: 'var(--color-warm-stone)', fontSize: '0.95rem', lineHeight: '1.6' }}>
              Our emergency travel desk coordinates expedited consular appointments and fast-track submission lanes in Dubai for urgent corporate, bereavement, or sudden holiday departures.
            </p>
          </div>
          <div>
            <a href="tel:+971501089562" className="btn-accent-yellow">
              <span>Call Emergency Desk: +971 50 108 9562</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

