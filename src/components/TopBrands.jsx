import React from 'react';
import { Apple } from 'lucide-react';
import './TopBrands.css';

const TopBrands = () => {
  const brands = [
    { name: 'SAMSUNG', label: 'Samsung' },
    { name: 'ONEPLUS', label: 'OnePlus', icon: '1+' },
    { name: 'vivo', label: 'Vivo' },
    { name: 'oppo', label: 'OPPO' },
    { name: 'mi', label: 'Xiaomi' },
    { name: 'POCO', label: 'POCO', isYellow: true },
    { name: 'Infinix', label: 'Infinix' },
    { name: 'realme', label: 'Realme', isYellow: true },
    { name: 'motorola', label: 'Motorola' },
    { name: 'TECNO', label: 'Tecno' },
    { name: 'iQOO', label: 'iQOO' },
  ];

  return (
    <section className="top-brands-section">
      <div className="container">
        <h4 className="brands-title">TOP <span className="text-accent">BRANDS</span></h4>
        
        <div className="brands-scroll-container">
          <div className="brands-track">
            
            <div className="brand-item">
              <div className="brand-logo"><Apple size={28} /></div>
              <span className="brand-label">Apple</span>
            </div>
            
            {brands.map((brand, idx) => (
              <div key={idx} className="brand-item">
                <div className="brand-logo">
                  {brand.icon ? (
                    <span className="font-bold text-xl">{brand.icon}</span>
                  ) : (
                    <span className={`font-bold ${brand.isYellow ? 'text-yellow-400' : ''}`} style={{ fontSize: '1.2rem', textTransform: brand.name === 'mi' ? 'lowercase' : 'none' }}>
                      {brand.name}
                    </span>
                  )}
                </div>
                <span className="brand-label">{brand.label}</span>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
};

export default TopBrands;
