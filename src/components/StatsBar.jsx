import React from 'react';
import { Star, ShieldCheck, Clock, Smile } from 'lucide-react';
import './StatsBar.css';

// Custom simple Instagram Icon since lucide one might differ
const Instagram = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const StatsBar = () => {
  return (
    <section className="stats-bar-section">
      <div className="container">
        <div className="stats-grid glass-panel">
          
          <div className="stat-item">
            <Star size={24} className="stat-icon" />
            <div className="stat-content">
              <span className="stat-value">4.8</span>
              <span className="stat-text">Google Rating<br/>From 1K+ Customers</span>
            </div>
          </div>
          
          <div className="stat-item">
            <Instagram size={24} className="stat-icon instagram-color" />
            <div className="stat-content">
              <span className="stat-value">149K+</span>
              <span className="stat-text">Followers on Instagram<br/>@phone_doctor_phagwara</span>
            </div>
          </div>
          
          <div className="stat-item">
            <Smile size={24} className="stat-icon" />
            <div className="stat-content">
              <span className="stat-value">10K+</span>
              <span className="stat-text">Happy Customers<br/>Trusted by Thousands</span>
            </div>
          </div>
          
          <div className="stat-item">
            <ShieldCheck size={24} className="stat-icon" />
            <div className="stat-content">
              <span className="stat-value">100%</span>
              <span className="stat-text">Genuine Products<br/>With Warranty</span>
            </div>
          </div>
          
          <div className="stat-item">
            <Clock size={24} className="stat-icon" />
            <div className="stat-content">
              <span className="stat-value">10AM - 8PM</span>
              <span className="stat-text">Store Timing<br/>Open All Days</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StatsBar;
