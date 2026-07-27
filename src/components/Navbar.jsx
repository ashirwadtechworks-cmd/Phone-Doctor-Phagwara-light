import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
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
        <a href="#" className="logo">
          <span className="logo-text">PHONE DOCTOR</span>
          <span className="logo-dot">.</span>
        </a>
        
        <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          <a href="#phones" className="nav-link">Phones</a>
          <a href="#pre-owned" className="nav-link">Pre-Owned</a>
          <a href="#services" className="nav-link">Services</a>
          <a href="#accessories" className="nav-link">Accessories</a>
        </div>
        
        <div className="nav-actions">
          <a href="#contact" className="btn btn-primary nav-contact-btn">Contact Us</a>
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
