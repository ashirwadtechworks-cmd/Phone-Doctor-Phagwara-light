import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
        <Link to="/" className="logo">
          <span className="logo-text">PHONE DOCTOR</span>
          <span className="logo-dot">.</span>
        </Link>
        
        <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          <Link to="/phones" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Phones</Link>
          <Link to="/pre-owned" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Pre-Owned</Link>
          <Link to="/services" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Services</Link>
          <Link to="/accessories" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Accessories</Link>
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
