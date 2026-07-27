import React from 'react';
import { ShieldCheck, Award, Zap, ThumbsUp, Star } from 'lucide-react';

const Instagram = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  return (
    <>
      <section className="why-section section-padding">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why <span className="text-gradient">Phone Doctor</span>?</h2>
            <p className="section-desc">We deliver excellence and trust in every interaction.</p>
          </div>

          <div className="features-grid">
            <div className="feature-card glass">
              <ShieldCheck size={40} className="feature-icon" />
              <h3>Original Products</h3>
              <p>100% genuine smartphones and accessories with brand warranty.</p>
            </div>
            
            <div className="feature-card glass">
              <Award size={40} className="feature-icon" />
              <h3>Certified Pre-Owned</h3>
              <p>Rigorously tested devices that look and feel like brand new.</p>
            </div>
            
            <div className="feature-card glass">
              <Zap size={40} className="feature-icon" />
              <h3>Fast Service</h3>
              <p>Quick turnaround times for repairs and deliveries.</p>
            </div>
            
            <div className="feature-card glass">
              <ThumbsUp size={40} className="feature-icon" />
              <h3>Trusted by Customers</h3>
              <p>Thousands of satisfied customers across the region.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="social-proof-section section-padding">
        <div className="container">
          <div className="proof-grid">
            
            <div className="reviews-container glass-panel">
              <div className="google-rating">
                <div className="rating-score">4.9</div>
                <div className="stars">
                  <Star fill="#FFB800" color="#FFB800" size={24} />
                  <Star fill="#FFB800" color="#FFB800" size={24} />
                  <Star fill="#FFB800" color="#FFB800" size={24} />
                  <Star fill="#FFB800" color="#FFB800" size={24} />
                  <Star fill="#FFB800" color="#FFB800" size={24} />
                </div>
                <p>Based on 500+ Google Reviews</p>
              </div>
              
              <div className="testimonial-card">
                <p className="testimonial-text">"Got my iPhone 14 Pro Max screen replaced here. Phenomenal service and totally original parts. Highly recommended!"</p>
                <div className="testimonial-author">- Rahul S.</div>
              </div>
            </div>

            <div className="instagram-container glass-panel">
              <Instagram size={48} className="insta-icon" />
              <h3>Join Our Community</h3>
              <p>Apple Authorised Store | Buy, Sell & Repair</p>
              <p className="mb-4 text-accent font-semibold">149k+ Followers on Instagram</p>
              <a href="https://instagram.com/phone_doctor_phagwara" target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-4">
                <Instagram size={20} className="btn-icon" />
                @phone_doctor_phagwara
              </a>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;
