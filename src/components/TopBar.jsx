import React from 'react';

export default function TopBar() {
  return (
    <div className="header-topbar">
      <div className="container header-topbar-content">
        <div className="topbar-left">
          <div className="topbar-item">
            <span>📍</span>
            <span>Downtown Dubai &amp; Business Bay Hub | Licensed UAE Travel Concierge</span>
          </div>
          <div className="topbar-item">
            <span>⏰</span>
            <span>Mon - Sat: 9:00 AM - 8:00 PM GST</span>
          </div>
        </div>
        <div className="topbar-right">
          <div className="topbar-item">
            <span>📞</span>
            <a href="tel:+971501089562">+971 50 108 9562</a>
          </div>
          <div className="topbar-item">
            <span className="badge-yellow">⚡ LIVE SLOTS OPEN</span>
          </div>
        </div>
      </div>
    </div>
  );
}

