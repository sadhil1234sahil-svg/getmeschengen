import React, { useState } from 'react';

const faqs = [
  {
    q: 'How far in advance should UAE residents apply for European travel clearance?',
    a: 'European consulates accept applications up to 6 months prior to your planned departure date. In Dubai, due to high seasonal demand across European summer and winter holidays, we strongly recommend initiating your application at least 6 to 8 weeks in advance to secure optimal appointment dates without expedited premiums.'
  },
  {
    q: 'What should I do if VFS Global or BLS in Dubai shows "No Slots Available"?',
    a: 'Do not panic. Consular appointment slots are released in unpredictable batches, and existing applicants frequently cancel or reschedule. Our automated slot tracking system monitors these portals around the clock, allowing us to lock in newly opened slots within seconds on your behalf.'
  },
  {
    q: 'Can UAE Golden Residency holders enjoy expedited consular processing?',
    a: 'While the European travel regulations are uniform, holding a 10-year UAE Golden Residency significantly strengthens your dossier by demonstrating profound financial stability and long-term residency ties to the UAE. Additionally, several centers in Dubai offer access to premium VIP lounges that streamline the biometric submission process.'
  },
  {
    q: 'What mandatory documents are required from a Dubai employer?',
    a: 'Your employer must provide an original No Objection Certificate (NOC) printed on company letterhead, stamped and signed by an authorized signatory. It must specify your job title, joining date, monthly compensation, approved holiday leave dates, and an explicit statement that you will resume duties in Dubai following your European trip.'
  },
  {
    q: 'Which European country should I select for my submission appointment?',
    a: 'According to European consular rules, you must lodge your submission with the member state that represents your main destination (where you spend the longest duration). If your stays in multiple countries are identical in length, you submit to your first port of entry. Our Dubai specialists will carefully map your multi-city route to identify the exact appropriate consular desk.'
  },
  {
    q: 'Do children and domestic helpers need separate consular appointments in Dubai?',
    a: 'Yes. Every individual applicant, including infants and accompanying domestic personnel, requires an independent appointment slot and distinct dossier. Children under 12 years of age are generally exempt from fingerprint biometrics but must still have their applications submitted by their parents or legal guardians.'
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="faq-section">
      <div className="container">
        <div className="section-header">
          <span className="badge-yellow">CLEAR ANSWERS</span>
          <h2>Frequently Asked Questions</h2>
          <p>
            Everything UAE residents need to know about European travel authorization, consular appointments, and document prerequisites.
          </p>
        </div>

        <div className="faq-container">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div className={`faq-item ${isOpen ? 'open' : ''}`} key={index}>
                <button 
                  className="faq-question" 
                  onClick={() => toggleFaq(index)}
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  <span className="toggle-icon">{isOpen ? '−' : '+'}</span>
                </button>
                <div 
                  className="faq-answer"
                  style={{
                    maxHeight: isOpen ? '500px' : '0px',
                    paddingBottom: isOpen ? '1.5rem' : '0'
                  }}
                >
                  <p>{faq.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

