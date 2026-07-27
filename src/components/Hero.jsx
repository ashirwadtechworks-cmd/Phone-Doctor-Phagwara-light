import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ShieldCheck, Award, Zap, ThumbsUp, Wrench, Smartphone, ArrowRight } from 'lucide-react';
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
          <h1 className="hero-title animate-fade-in">
            YOUR TRUSTED<br />
            <span className="text-gradient-red">SMARTPHONE</span><br />
            DESTINATION
          </h1>
          
          <h3 className="hero-subtitle animate-fade-in delay-1">
            Buy. Sell. Exchange. Repair.
          </h3>
          
          <p className="hero-desc animate-fade-in delay-2">
            Premium smartphones, certified pre-owned devices and genuine accessories from all leading brands.
          </p>
          
          <div className="hero-buttons animate-fade-in delay-3">
            <Link to="/phones" className="btn btn-primary btn-animated">
              SHOP PHONES <ArrowRight size={16} className="btn-icon-animate" />
            </Link>
            <Link to="/services" className="btn btn-outline btn-animated">
              SELL YOUR PHONE
            </Link>
            <Link to="/services" className="btn btn-outline btn-animated">
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
        
        <div className="hero-visual animate-fade-in delay-2 animate-float-slow">
          <div className="hero-rings">
            <div className="ring ring-1"></div>
            <div className="ring ring-2"></div>
            <div className="ring ring-3"></div>
          </div>
          <div className="hero-image-wrapper">
            <img src={heroImg} alt="Premium Smartphones" className="hero-image3d" />
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;
