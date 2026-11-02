import React, { useState } from 'react';

export default function ContactFormSection({ onBookingSubmitted }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    destination: '',
    travelMonth: 'Next 30 Days',
    residencyStatus: 'Golden Residency',
    notes: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim()) {
      alert('Please fill in your full name and UAE phone number.');
      return;
    }

    const randomNum = Math.floor(100000 + Math.random() * 900000);
    const refCode = `DXB-SCH-${randomNum}`;

    if (onBookingSubmitted) {
      onBookingSubmitted(refCode);
    }

    // Reset form
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      destination: '',
      travelMonth: 'Next 30 Days',
      residencyStatus: 'Golden Residency',
      notes: ''
    });
  };

  return (
    <section id="contact-booking" className="contact-booking-section">
      <div className="container contact-grid">
        {/* Left Contact Info Column */}
        <div className="contact-info-col">
          <span className="badge-stone">DUBAI CENTRAL CONCIERGE DESK</span>
          <h2>Fast-Track Your European Travel Clearance</h2>
          <p className="lead-text">
            Don't let missing appointment dates or paperwork technicalities ground your European holiday. Speak with our Dubai-based consular advisors today and lock in your priority submission slot.
          </p>

          <div className="contact-channels">
            <div className="contact-channel-item">
              <div className="channel-icon-box">📍</div>
              <div className="channel-meta">
                <h4>PHYSICAL OFFICE LOCATION</h4>
                <p>Level 24, Boulevard Plaza Tower 1, Sheikh Mohammed Bin Rashid Boulevard, Downtown Dubai, UAE</p>
              </div>
            </div>

            <div className="contact-channel-item">
              <div className="channel-icon-box">📞</div>
              <div className="channel-meta">
                <h4>DUBAI HOTLINE PHONE</h4>
                <a href="tel:+971501089562">+971 50 108 9562</a>
              </div>
            </div>

            <div className="contact-channel-item">
              <div className="channel-icon-box">💬</div>
              <div className="channel-meta">
                <h4>WHATSAPP DIRECT CONCIERGE</h4>
                <a href="https://wa.me/971501089562" target="_blank" rel="noopener noreferrer">
                  +971 50 108 9562 (Instant Responses)
                </a>
              </div>
            </div>

            <div className="contact-channel-item">
              <div className="channel-icon-box">✉️</div>
              <div className="channel-meta">
                <h4>DIRECT CASE EMAIL</h4>
                <a href="mailto:concierge@getmeschengen.ae">concierge@getmeschengen.ae</a>
              </div>
            </div>
          </div>

          <div className="dubai-hub-card">
            <h5>
              <span>🏢</span> DUBAI SUBMISSION CENTERS WE COVER
            </h5>
            <p>
              Daily liaison and appointment retrieval for <strong>VFS Global (Wafi Mall, Dubai)</strong>, <strong>BLS International (Oud Metha &amp; Business Bay)</strong>, <strong>TLScontact</strong>, and the General Consulates of France, Germany, Italy, Spain, Switzerland, and the Netherlands.
            </p>
          </div>
        </div>

        {/* Right Booking Form Column */}
        <div className="booking-form-card">
          <span className="form-header-badge">PRIORITY INTAKE FORM</span>
          <h3>Reserve Your Dubai Consular Slot</h3>
          <p className="form-desc">
            Complete the form below. An accredited European travel dossier specialist will audit your case and reach out within 2 hours.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="form-grid-2">
              <div className="form-group">
                <label htmlFor="form-full-name">
                  Full Name (As in Passport) <span className="req">*</span>
                </label>
                <input 
                  type="text" 
                  id="form-full-name" 
                  name="fullName" 
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="e.g. Rahul Sharma / Sarah Smith" 
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="form-phone">
                  UAE Mobile / WhatsApp <span className="req">*</span>
                </label>
                <input 
                  type="tel" 
                  id="form-phone" 
                  name="phone" 
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+971 5X XXX XXXX" 
                  required 
                />
              </div>
            </div>

            <div className="form-grid-2">
              <div className="form-group">
                <label htmlFor="form-email">
                  Email Address <span className="req">*</span>
                </label>
                <input 
                  type="email" 
                  id="form-email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@company.com" 
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="form-destination">
                  Primary European Destination <span className="req">*</span>
                </label>
                <select 
                  id="form-destination" 
                  name="destination" 
                  value={formData.destination}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>Select Destination Country</option>
                  <option value="France">France</option>
                  <option value="Italy">Italy</option>
                  <option value="Switzerland">Switzerland</option>
                  <option value="Germany">Germany</option>
                  <option value="Spain">Spain</option>
                  <option value="Greece">Greece</option>
                  <option value="Netherlands">Netherlands</option>
                  <option value="Austria">Austria</option>
                  <option value="Portugal">Portugal</option>
                  <option value="Iceland">Iceland</option>
                  <option value="Czechia">Czech Republic</option>
                  <option value="Multi-Country">Multiple European Countries</option>
                </select>
              </div>
            </div>

            <div className="form-grid-2">
              <div className="form-group">
                <label htmlFor="form-travel-date">Anticipated Travel Month</label>
                <select 
                  id="form-travel-date" 
                  name="travelMonth"
                  value={formData.travelMonth}
                  onChange={handleChange}
                >
                  <option value="Next 30 Days">Immediate (Next 30 Days)</option>
                  <option value="Next 60 Days">Upcoming (Next 60 Days)</option>
                  <option value="Summer Holiday">Summer Holiday Season</option>
                  <option value="Winter Holiday">Winter Skiing / New Year Season</option>
                  <option value="Spring Autumn">Spring / Autumn Tour</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="form-residency">UAE Residency Category</label>
                <select 
                  id="form-residency" 
                  name="residencyStatus"
                  value={formData.residencyStatus}
                  onChange={handleChange}
                >
                  <option value="Golden Residency">UAE Golden Residency (10-Year)</option>
                  <option value="Salaried Employee">Salaried Professional (NOC Available)</option>
                  <option value="Business Owner">Business Owner / Partner / Investor</option>
                  <option value="Family Group">Family Group / Dependents</option>
                  <option value="Freelancer">Freelance Permit Holder</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="form-notes">Trip Details &amp; Specific Requests</label>
              <textarea 
                id="form-notes" 
                name="notes" 
                rows="3" 
                value={formData.notes}
                onChange={handleChange}
                placeholder="Tell us your planned travel cities, family member count, or if you have faced previous appointment delays in Dubai..."
              />
            </div>

            <button type="submit" className="btn-crimson-red" style={{ width: '100%' }}>
              <span>Submit &amp; Secure Consular Priority Assessment</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>

            <div className="form-security-note">
              <span>🔒</span>
              <span>100% Confidential. Your data is protected under UAE Federal Data Protection Law.</span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

