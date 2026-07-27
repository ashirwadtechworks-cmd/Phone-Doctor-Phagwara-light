import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Wrench } from 'lucide-react';
import heroImg from '../assets/light_theme_hero.jpg';

const Hero = () => {
  return (
    <section style={{ backgroundColor: '#f8f9fa', padding: '60px 0', borderBottom: '1px solid #e0e0e0', marginTop: '72px' }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '32px' }}>
        
        <div style={{ flex: '1 1 400px', maxWidth: '600px' }}>
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#212121', lineHeight: '1.2', marginBottom: '16px' }}>
            Buy Refurbished <br />
            <span style={{ color: '#42C8B7' }}>Mobile Phones</span>
          </h1>
          
          <p style={{ fontSize: '1.125rem', color: '#4a4a4a', marginBottom: '32px' }}>
            Get the best quality refurbished smartphones at the lowest prices. 
            Enjoy a 6-month warranty and 15-day refund policy.
          </p>
          
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Link to="/pre-owned" className="btn-solid" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 24px', fontSize: '1rem' }}>
              BUY NOW <ArrowRight size={18} />
            </Link>
            <Link to="/services" className="btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 24px', fontSize: '1rem', borderColor: '#42c8b7', color: '#42c8b7', backgroundColor: 'transparent' }}>
              SELL YOUR PHONE
            </Link>
          </div>
        </div>
        
        <div style={{ flex: '1 1 400px', display: 'flex', justifyContent: 'center' }}>
          <img src={heroImg} alt="Refurbished Phones" style={{ maxWidth: '100%', height: 'auto', maxHeight: '400px', objectFit: 'contain' }} />
        </div>
        
      </div>
    </section>
  );
};

export default Hero;
