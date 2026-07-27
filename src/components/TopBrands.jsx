import React from 'react';
import { Apple, Smartphone } from 'lucide-react';
import './TopBrands.css';

const TopBrands = () => {
  const brands = [
    { name: 'Apple', logo: <Apple size={40} /> },
    { name: 'Samsung', logo: <span style={{ fontWeight: 800, fontSize: '1.5rem', letterSpacing: '-1px' }}>SAMSUNG</span> },
    { name: 'Google Pixel', logo: <span style={{ fontWeight: 700, fontSize: '1.5rem' }}>G</span> },
    { name: 'OnePlus', logo: <span style={{ fontWeight: 800, fontSize: '1.5rem' }}>1+</span> },
    { name: 'Nothing', logo: <span style={{ fontFamily: 'monospace', fontWeight: 700, fontSize: '1.5rem', letterSpacing: '2px' }}>NOTHING</span> },
  ];

  return (
    <section className="top-brands-section" style={{ padding: '80px 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h4 className="brands-title" style={{ fontSize: '1.2rem', marginBottom: '8px' }}>FEATURED <span className="text-accent">BRANDS</span></h4>
          <p className="text-secondary text-sm">We only deal in the highest quality flagship devices.</p>
        </div>
        
        <div className="brands-grid" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', 
          gap: '24px' 
        }}>
          {brands.map((brand, idx) => (
            <div key={idx} className="mockup-card" style={{ 
              padding: '32px 24px', 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              justifyContent: 'center',
              cursor: 'pointer'
            }}>
              <div style={{ marginBottom: '16px', color: 'var(--text-primary)' }}>
                {brand.logo}
              </div>
              <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-secondary)' }}>{brand.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopBrands;
