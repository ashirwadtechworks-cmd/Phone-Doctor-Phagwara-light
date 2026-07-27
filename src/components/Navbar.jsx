import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { scrollY } = useScroll();
  
  // Transform background based on scroll
  const scrollBg = useTransform(
    scrollY,
    [0, 50],
    ['rgba(0, 0, 0, 0)', 'rgba(10, 10, 10, 0.7)']
  );
  
  const scrollBlur = useTransform(
    scrollY,
    [0, 50],
    ['blur(0px)', 'blur(24px)']
  );
  
  const scrollBorder = useTransform(
    scrollY,
    [0, 50],
    ['1px solid rgba(255, 255, 255, 0)', '1px solid rgba(255, 255, 255, 0.08)']
  );

  const scrollShadow = useTransform(
    scrollY,
    [0, 50],
    ['0 0 0 rgba(0,0,0,0)', '0 10px 40px rgba(0, 0, 0, 0.5)']
  );

  const isHome = location.pathname === '/';
  const background = isHome ? scrollBg : 'rgba(10, 10, 10, 0.8)';
  const backdropFilter = isHome ? scrollBlur : 'blur(24px)';
  const border = isHome ? scrollBorder : '1px solid rgba(255, 255, 255, 0.08)';
  const boxShadow = isHome ? scrollShadow : '0 10px 40px rgba(0, 0, 0, 0.5)';

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
      className="navbar"
      style={{
        background,
        backdropFilter,
        WebkitBackdropFilter: backdropFilter,
        border,
        boxShadow,
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="container nav-container">
        
        {/* LOGO */}
        <Link to="/" className="mockup-logo">
          <div className="logo-icon-box" style={{ background: 'var(--color-accent)', padding: '8px', borderRadius: '8px' }}>
            <Phone size={24} color="white" fill="white" />
          </div>
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

          <button className="mobile-menu-btn" onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

      </div>
    </motion.nav>
  );
};

export default Navbar;
