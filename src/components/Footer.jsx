import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Instagram = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const Facebook = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const Twitter = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
  </svg>
);
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-grid">
          
          <div className="footer-brand">
            <Link to="/" className="mockup-logo mb-4" style={{ display: 'inline-flex', alignItems: 'center', gap: '12px' }}>
              <img src="/favicon.svg" alt="Phone Doctor Logo" style={{ width: '40px', height: '40px' }} />
              <div className="logo-text-stack text-left" style={{ display: 'flex', flexDirection: 'column' }}>
                <span className="logo-title" style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 700, letterSpacing: '1px', lineHeight: 1 }}>PHONE <span className="text-accent">DOCTOR</span></span>
                <span className="logo-subtitle" style={{ fontSize: '0.65rem', letterSpacing: '2px', color: 'var(--text-secondary)', marginTop: '2px' }}>PHAGWARA</span>
              </div>
            </Link>
            <p className="footer-desc mt-4">
              Apple Authorised Store. Buy, Sell, and Repair premium smartphones and accessories.
            </p>
            <div className="social-links mt-4">
              <a href="https://instagram.com/phone_doctor_phagwara" target="_blank" rel="noopener noreferrer" className="social-link"><Instagram size={20} /></a>
              <a href="#" className="social-link"><Facebook size={20} /></a>
              <a href="#" className="social-link"><Twitter size={20} /></a>
            </div>
          </div>

          <div className="footer-links">
            <h4 className="footer-title">Quick Links</h4>
            <ul>
              <li><Link to="/phones">New Phones</Link></li>
              <li><Link to="/pre-owned">Pre-Owned</Link></li>
              <li><Link to="/services">Sell Device</Link></li>
              <li><Link to="/services">Book Repair</Link></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4 className="footer-title">Services</h4>
            <ul>
              <li><Link to="/services">Screen Replacement</Link></li>
              <li><Link to="/services">Battery Replacement</Link></li>
              <li><Link to="/services">Software Issues</Link></li>
              <li><Link to="/accessories">Accessories</Link></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4 className="footer-title">Contact Us</h4>
            <div className="contact-item">
              <MapPin size={20} className="contact-icon" />
              <span>Phagwara, Punjab, India</span>
            </div>
            <div className="contact-item">
              <Phone size={20} className="contact-icon" />
              <span>+91 7009746451</span>
            </div>
            <div className="contact-item">
              <Mail size={20} className="contact-icon" />
              <span>contact@phonedoctor.com</span>
            </div>
            <div className="contact-item mt-4">
              <Clock size={20} className="contact-icon text-accent" />
              <span>Open: 10:00 AM - 8:00 PM</span>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Phone Doctor Phagwara. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
