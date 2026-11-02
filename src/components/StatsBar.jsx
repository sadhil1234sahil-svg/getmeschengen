import React from 'react';

export default function StatsBar() {
  return (
    <section className="stats-bar" aria-label="Trust Statistics">
      <div className="container">
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-number">14,500<span className="red-plus">+</span></div>
            <div className="stat-label">UAE Travelers Cleared</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">29</div>
            <div className="stat-label">European States Covered</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">99.4<span className="red-plus">%</span></div>
            <div className="stat-label">Consular Clearance Ratio</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">48<span className="red-plus">h</span></div>
            <div className="stat-label">Average Slot Confirmation</div>
          </div>
        </div>
      </div>
    </section>
  );
}

