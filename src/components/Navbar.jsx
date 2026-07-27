import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { scrollY } = useScroll();
  
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    closeMenu();
  }, [location]);

  return (
    <motion.nav 
      className={`navbar ${isScrolled || !isHome ? 'scrolled' : ''} ${isHome && !isScrolled ? 'transparent' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="container nav-container">
        
        {/* LOGO */}
        <Link to="/" className="mockup-logo">
          <img src="/favicon.svg" alt="Phone Doctor Logo" style={{ width: '40px', height: '40px', marginRight: '4px' }} />
          <div className="logo-text-stack">
            <span className="logo-title">PHONE DOCTOR</span>
            <span className="logo-subtitle">PHAGWARA</span>
          </div>
        </Link>

        {/* DESKTOP LINKS */}
        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
            HOME
          </Link>
          <div className="nav-item-dropdown">
            <Link to="/phones" className={`nav-link ${location.pathname === '/phones' ? 'active' : ''}`}>
              PHONES
            </Link>
          </div>
          <Link to="/pre-owned" className={`nav-link ${location.pathname === '/pre-owned' ? 'active' : ''}`}>
            PRE-OWNED
          </Link>
          <Link to="/services" className={`nav-link ${location.pathname === '/services' ? 'active' : ''}`}>
            BUY SELL EXCHANGE
          </Link>
          <Link to="/services" className={`nav-link ${location.pathname === '/services' ? 'active' : ''}`}>
            REPAIR
          </Link>
          <Link to="/accessories" className={`nav-link ${location.pathname === '/accessories' ? 'active' : ''}`}>
            ACCESSORIES
          </Link>
          <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>
            ABOUT US
          </Link>
          <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>
            CONTACT
          </Link>
        </div>

        {/* ACTIONS */}
        <div className="nav-actions">
          <div className="nav-contact">
            <Phone size={16} className="text-accent" />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span>92162</span>
              <span>22123</span>
            </div>
          </div>
          
          <Link to="/services" className="btn-mockup-outline nav-btn" style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)' }}>
            BOOK REPAIR
          </Link>

          <button className="mobile-menu-btn" onClick={toggleMenu} style={{ background: 'transparent', border: 'none', color: 'var(--text-primary)', cursor: 'pointer', padding: '8px' }}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

      </div>
    </motion.nav>
  );
};

export default Navbar;
