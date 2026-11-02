/**
 * getmeschengen - Single Page Interactive Scripts
 * Dubai's Premier European Travel Clearance & Consular Concierge
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeaderScroll();
  initMobileNav();
  initQuickEstimator();
  initFaqAccordion();
  initContactForm();
  initSlotTicker();
});

// 1. Header Sticky Effect on Scroll
function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

// 2. Mobile Menu Toggle
function initMobileNav() {
  const toggleBtn = document.querySelector('.mobile-menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (!toggleBtn || !navLinks) return;

  toggleBtn.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-open');
    const isExpanded = navLinks.classList.contains('mobile-open');
    toggleBtn.setAttribute('aria-expanded', isExpanded);
    toggleBtn.innerHTML = isExpanded 
      ? '<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12"/></svg>'
      : '<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"/></svg>';
  });

  // Close when clicking nav items
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('mobile-open');
      toggleBtn.innerHTML = '<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"/></svg>';
    });
  });
}

// 3. Hero Interactive Destination Estimator
function initQuickEstimator() {
  const destSelect = document.getElementById('hero-dest-select');
  const resSelect = document.getElementById('hero-residency-select');
  const slotDateEl = document.getElementById('live-slot-date');
  const centerEl = document.getElementById('live-consular-center');
  const timelineEl = document.getElementById('live-processing-days');

  if (!destSelect || !slotDateEl) return;

  const destinationData = {
    france: {
      slot: 'Next available slot: 3 Business Days',
      center: 'VFS Global, Wafi Mall, Level 3, Dubai',
      days: '9 - 14 Days Average Decision'
    },
    italy: {
      slot: 'Next available slot: 5 Business Days',
      center: 'BLS International / VFS, Oud Metha, Dubai',
      days: '10 - 15 Days Average Decision'
    },
    switzerland: {
      slot: 'Next available slot: 2 Business Days',
      center: 'VFS Global, Wafi Mall, Level 3, Dubai',
      days: '7 - 12 Days Average Decision'
    },
    germany: {
      slot: 'Next available slot: 4 Business Days',
      center: 'VFS Global, Wafi Mall, Level 3, Dubai',
      days: '10 - 16 Days Average Decision'
    },
    spain: {
      slot: 'Next available slot: 3 Business Days',
      center: 'BLS International, Business Bay / Oud Metha, Dubai',
      days: '8 - 14 Days Average Decision'
    },
    greece: {
      slot: 'Next available slot: 2 Business Days',
      center: 'VFS Global, Wafi Mall, Level 3, Dubai',
      days: '6 - 12 Days Average Decision'
    },
    netherlands: {
      slot: 'Next available slot: 4 Business Days',
      center: 'VFS Global, Wafi Mall, Level 3, Dubai',
      days: '10 - 15 Days Average Decision'
    },
    austria: {
      slot: 'Next available slot: 3 Business Days',
      center: 'VFS Global, Wafi Mall, Level 3, Dubai',
      days: '9 - 14 Days Average Decision'
    }
  };

  function updateCard() {
    const selected = destSelect.value;
    const data = destinationData[selected] || destinationData.france;
    
    slotDateEl.textContent = data.slot;
    centerEl.textContent = data.center;
    timelineEl.textContent = data.days;
  }

  destSelect.addEventListener('change', updateCard);
  if (resSelect) {
    resSelect.addEventListener('change', updateCard);
  }
}

// 4. FAQ Accordion
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  if (!faqItems.length) return;

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    questionBtn.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      // Close all other items
      faqItems.forEach(otherItem => {
        otherItem.classList.remove('open');
        const otherAnswer = otherItem.querySelector('.faq-answer');
        if (otherAnswer) otherAnswer.style.maxHeight = null;
      });

      // Toggle clicked item
      if (!isOpen) {
        item.classList.add('open');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      } else {
        item.classList.remove('open');
        answer.style.maxHeight = null;
      }
    });
  });
}

// 5. Contact & Booking Form with Confirmation Modal
function initContactForm() {
  const form = document.getElementById('consultation-booking-form');
  const modal = document.getElementById('confirmation-modal');
  const closeModalBtn = document.getElementById('close-modal-btn');
  const modalReference = document.getElementById('modal-reference-id');

  if (!form || !modal) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Basic Validation Check
    const nameInput = form.querySelector('[name="full_name"]');
    const phoneInput = form.querySelector('[name="phone_number"]');
    const destInput = form.querySelector('[name="destination"]');

    if (!nameInput.value.trim() || !phoneInput.value.trim()) {
      alert('Please fill in your full name and UAE phone number.');
      return;
    }

    // Generate Dubai Booking Reference
    const randomNum = Math.floor(100000 + Math.random() * 900000);
    const refCode = `DXB-SCH-${randomNum}`;

    if (modalReference) {
      modalReference.textContent = refCode;
    }

    // Show Success Modal
    modal.classList.add('active');
    form.reset();
  });

  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', () => {
      modal.classList.remove('active');
    });
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });
}

// 6. Live Slot Notification Ticker
function initSlotTicker() {
  const slotCountEl = document.getElementById('live-open-slots');
  if (!slotCountEl) return;

  // Gentle fluctuation between 11 and 19 slots to simulate live Dubai consular desk queue updates
  let currentCount = 14;
  setInterval(() => {
    const delta = Math.random() > 0.5 ? 1 : -1;
    currentCount = Math.max(9, Math.min(22, currentCount + delta));
    slotCountEl.textContent = `${currentCount} Priority Appointment Slots Open in Dubai`;
  }, 12000);
}

