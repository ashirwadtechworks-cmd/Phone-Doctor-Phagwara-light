import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ShieldCheck, Award, Zap, ThumbsUp, Wrench, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import './Hero.css';
import heroImg from '../assets/hero_smartphones_3d.jpg';

const Hero = () => {
  return (
    <section className="hero">
      {/* Background glow effects */}
      <div className="hero-glow-left"></div>
      <div className="hero-glow-right"></div>
      <div className="hero-particles"></div>
      
      <div className="container hero-container">
        
        <div className="hero-content">
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            YOUR TRUSTED<br />
            <span className="text-gradient-red">SMARTPHONE</span><br />
            DESTINATION
          </motion.h1>
          
          <motion.h3 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            Buy. Sell. Exchange. Repair.
          </motion.h3>
          
          <motion.p 
            className="hero-desc"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            Premium smartphones, certified pre-owned devices and genuine accessories from all leading brands.
          </motion.p>
          
          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link to="/phones" className="btn btn-primary btn-animated">
              SHOP PHONES <ArrowRight size={18} className="btn-icon-animate" />
            </Link>
            <Link to="/services" className="btn btn-outline btn-animated">
              SELL YOUR PHONE
            </Link>
            <Link to="/services" className="btn btn-outline btn-animated">
              BOOK REPAIR <Wrench size={16} className="ml-2" />
            </Link>
          </motion.div>
          
          <motion.div 
            className="hero-trust-indicators"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <div className="trust-item">
              <ShieldCheck size={18} className="text-accent" />
              <span>100%<br/>Original</span>
            </div>
            <div className="trust-item">
              <Award size={18} className="text-accent" />
              <span>Certified<br/>Pre-Owned</span>
            </div>
            <div className="trust-item">
              <Wrench size={18} className="text-accent" />
              <span>Expert<br/>Repair</span>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div 
            className="hero-rings"
            animate={{ rotate: 360 }}
            transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          >
            <div className="ring ring-1"></div>
            <div className="ring ring-2"></div>
            <div className="ring ring-3"></div>
          </motion.div>
          
          <motion.div 
            className="hero-image-wrapper"
            animate={{ y: [-15, 15, -15] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          >
            <img src={heroImg} alt="Premium Smartphones" className="hero-image3d" />
          </motion.div>
        </motion.div>
        
      </div>
    </section>
  );
};

export default Hero;
