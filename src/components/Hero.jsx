import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Smartphone, RefreshCw, Wrench } from 'lucide-react';
import './Hero.css';
import heroImg from '../assets/hero_smartphones.jpg';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-gradient"></div>
      
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge animate-fade-in">
            <span className="pulse-dot"></span>
            Premium Experience
          </div>
          
          <h1 className="hero-title animate-fade-in delay-1">
            Your Trusted <br />
            <span className="text-gradient">Smartphone</span> <br />
            Destination.
          </h1>
          
          <p className="hero-subtitle animate-fade-in delay-2">
            Buy. Sell. Exchange. Repair.
            <br />
            Premium smartphones and genuine accessories from all leading brands.
          </p>
          
          <div className="hero-buttons animate-fade-in delay-3">
            <Link to="/phones" className="btn btn-primary">
              <Smartphone size={20} className="btn-icon" />
              Shop Phones
            </Link>
            <Link to="/services" className="btn btn-outline btn-glass">
              <RefreshCw size={20} className="btn-icon" />
              Sell / Exchange
            </Link>
            <Link to="/services" className="btn btn-outline btn-glass">
              <Wrench size={20} className="btn-icon" />
              Book Repair
            </Link>
          </div>
        </div>
        
        <div className="hero-image-wrapper animate-fade-in delay-2">
          <div className="hero-image-glow"></div>
          <img 
            src={heroImg} 
            alt="Premium Smartphones" 
            className="hero-image animate-float"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
