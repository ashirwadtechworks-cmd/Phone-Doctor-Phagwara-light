import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ShieldCheck, Award, Zap, ThumbsUp, Wrench, Smartphone } from 'lucide-react';
import './Hero.css';
import heroImg from '../assets/hero_smartphones.jpg';

const Hero = () => {
  return (
    <section className="hero">
      {/* Background glow effects */}
      <div className="hero-glow-left"></div>
      <div className="hero-glow-right"></div>
      
      <div className="container hero-container">
        
        <div className="hero-content">
          <h1 className="hero-title animate-fade-in">
            YOUR TRUSTED<br />
            <span className="text-accent">SMARTPHONE</span><br />
            DESTINATION
          </h1>
          
          <h3 className="hero-subtitle animate-fade-in delay-1">
            Buy. Sell. Exchange. Repair.
          </h3>
          
          <p className="hero-desc animate-fade-in delay-2">
            Premium smartphones, certified pre-owned devices and genuine accessories from all leading brands.
          </p>
          
          <div className="hero-buttons animate-fade-in delay-3">
            <Link to="/phones" className="btn-mockup-solid">
              SHOP PHONES <ChevronRight size={16} />
            </Link>
            <Link to="/services" className="btn-mockup-outline-large">
              SELL YOUR PHONE
            </Link>
            <Link to="/services" className="btn-mockup-outline-large">
              BOOK REPAIR <Wrench size={16} className="ml-2" />
            </Link>
          </div>
          
          <div className="hero-trust-indicators animate-fade-in delay-3">
            <div className="trust-item">
              <ShieldCheck size={16} className="text-accent" />
              <span>100%<br/>Original Products</span>
            </div>
            <div className="trust-item">
              <Award size={16} className="text-accent" />
              <span>Certified<br/>Pre-Owned</span>
            </div>
            <div className="trust-item">
              <Wrench size={16} className="text-accent" />
              <span>Expert<br/>Technicians</span>
            </div>
            <div className="trust-item">
              <Zap size={16} className="text-accent" />
              <span>Fast & Reliable<br/>Service</span>
            </div>
            <div className="trust-item">
              <ThumbsUp size={16} className="text-accent" />
              <span>Best Price<br/>Guarantee</span>
            </div>
          </div>
        </div>
        
        <div className="hero-visual animate-fade-in delay-2">
          {/* We use a CSS structure to mimic the pedestal and glowing rings */}
          <div className="hero-rings">
            <div className="ring ring-1"></div>
            <div className="ring ring-2"></div>
            <div className="ring ring-3"></div>
          </div>
          <div className="hero-image-wrapper">
            <img src={heroImg} alt="Premium Smartphones" className="hero-image" />
          </div>
          <div className="hero-pedestal">
            <div className="pedestal-top"></div>
            <div className="pedestal-base"></div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;
