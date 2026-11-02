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
  const whatsappUrl = "https://wa.me/971501089562?text=Hey%20getmeschengen%20team%2C%20I%20would%20like%20to%20inquire%20about%20booking%20a%20Schengen%20consular%20appointment%20from%20Dubai.";

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

        {/* Emergency Departure Banner with WhatsApp CTA 3 */}
        <div className="emergency-support-banner">
          <div className="emergency-banner-content">
            <span className="badge-yellow" style={{ marginBottom: '0.75rem' }}>
              PEACE OF MIND GUARANTEE
            </span>
            <h3>Have an Urgent Departure Coming Up?</h3>
            <p>
              Our emergency travel desk coordinates expedited consular appointments and fast-track submission lanes in Dubai for urgent corporate, bereavement, or sudden holiday departures.
            </p>
          </div>
          <div className="emergency-cta-group">
            <a 
              href={whatsappUrl}
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-whatsapp"
              aria-label="Direct WhatsApp Emergency Desk"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              <span>Emergency WhatsApp</span>
            </a>
            <a href="tel:+971501089562" className="btn-accent-yellow">
              <span>Call +971 50 108 9562</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
