import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, CalendarCheck, ShoppingBag } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        
        {/* LOGO */}
        <Link to="/" className="mockup-logo">
          <img src="/favicon.svg" alt="Phone Doctor Logo" style={{ width: '40px', height: '40px', marginRight: '4px' }} />
          <div className="logo-text-stack">
            <span className="logo-title">PHONE <span className="text-accent">DOCTOR</span></span>
            <span className="logo-subtitle">PHAGWARA</span>
          </div>
        </Link>
        
        {/* DESKTOP LINKS */}
        <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-link active" onClick={() => setMobileMenuOpen(false)}>HOME</Link>
          <div className="nav-item-dropdown">
            <Link to="/phones" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
              PHONES <ChevronDown size={14} className="ml-1 opacity-50" />
            </Link>
          </div>
          <Link to="/pre-owned" className="nav-link" onClick={() => setMobileMenuOpen(false)}>PRE-OWNED</Link>
          <Link to="/services" className="nav-link" onClick={() => setMobileMenuOpen(false)}>BUY SELL EXCHANGE</Link>
          <Link to="/services" className="nav-link" onClick={() => setMobileMenuOpen(false)}>REPAIR</Link>
          <Link to="/accessories" className="nav-link" onClick={() => setMobileMenuOpen(false)}>ACCESSORIES</Link>
          <Link to="/about" className="nav-link" onClick={() => setMobileMenuOpen(false)}>ABOUT US</Link>
          <Link to="/contact" className="nav-link" onClick={() => setMobileMenuOpen(false)}>CONTACT</Link>
        </div>
        
        {/* ACTIONS */}
        <div className="nav-actions">
          <div className="nav-contact">
            <Phone size={16} className="text-accent" />
            <span>92162 22123</span>
          </div>
          <Link to="/services" className="btn-mockup-outline nav-btn">
            <CalendarCheck size={16} />
            BOOK REPAIR
          </Link>
          
          <button 
            className="mobile-menu-btn" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} color="#fff" /> : <Menu size={24} color="#fff" />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
