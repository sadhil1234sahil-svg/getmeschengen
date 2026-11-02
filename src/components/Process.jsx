import React from 'react';

const steps = [
  {
    num: '01',
    label: 'Initial Assessment',
    title: 'Profile Audit & Strategy',
    desc: 'We evaluate your nationality, travel history, UAE residency duration, and intended European destinations to select the most favorable consular pathway.'
  },
  {
    num: '02',
    label: 'Slot Procurement',
    title: 'Appointment Reservation',
    desc: 'Our automated system secures your priority submission slot at VFS Global, BLS, or TLScontact in Dubai or Abu Dhabi matching your vacation timeline.'
  },
  {
    num: '03',
    label: 'Documentation',
    title: 'Airtight Dossier Assembly',
    desc: 'Our team drafts your cover letters, verifies bank statements and NOCs, formats itinerary vouchers, and issues your €30,000 compliant health policy.'
  },
  {
    num: '04',
    label: 'Center Attendance',
    title: 'Biometrics & Submission',
    desc: 'You walk into your scheduled appointment in Dubai with a pre-organized, numbered folder. Staff collect your biometrics and take your dossier with zero friction.'
  },
  {
    num: '05',
    label: 'Ready to Fly',
    title: 'Passport Doorstep Return',
    desc: 'We monitor your application daily. Once cleared by the European consulate, your stamped passport is safely delivered to your doorstep in Dubai.'
  }
];

export default function Process() {
  return (
    <section id="process" className="process-section">
      <div className="container">
        <div className="section-header">
          <span className="badge-yellow">5 SIMPLE STEPS</span>
          <h2>The Journey to Your European Clearance</h2>
          <p>
            We take the complexity and guesswork out of European travel approvals. Here is how our transparent 5-step roadmap works for Dubai and UAE residents.
          </p>
        </div>

        <div className="process-timeline">
          {steps.map((step, idx) => (
            <div className="process-step" key={idx}>
              <div className="step-bubble">{step.num}</div>
              <div className="step-label">{step.label}</div>
              <h4>{step.title}</h4>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
          <a href="#contact-booking" className="btn-accent-yellow">
            Start Step 1: Request Free Assessment ➔
          </a>
        </div>
      </div>
    </section>
  );
}

