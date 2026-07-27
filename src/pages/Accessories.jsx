import React from 'react';

const accessories = [
  { id: 1, category: 'Audio', name: 'AirPods Pro (2nd Gen)', brand: 'Apple', price: '₹24,900', img: '🎧' },
  { id: 2, category: 'Wearables', name: 'Apple Watch Series 9', brand: 'Apple', price: '₹41,900', img: '⌚' },
  { id: 3, category: 'Power', name: '20W USB-C Power Adapter', brand: 'Apple', price: '₹1,900', img: '🔌' },
  { id: 4, category: 'Audio', name: 'Galaxy Buds2 Pro', brand: 'Samsung', price: '₹15,999', img: '🎧' },
  { id: 5, category: 'Wearables', name: 'Galaxy Watch6', brand: 'Samsung', price: '₹29,999', img: '⌚' },
  { id: 6, category: 'Protection', name: 'Silicone Case with MagSafe', brand: 'Apple', price: '₹4,900', img: '🛡️' },
];

const Accessories = () => {
  return (
    <>
      <div className="page-wrapper">
        <div className="container">
          <div className="page-header">
            <h1 className="page-title">
              PREMIUM <span className="text-accent">ACCESSORIES</span>
            </h1>
            <p className="page-subtitle">Genuine accessories for every need.</p>
            
            <div className="flex-row justify-center gap-4 mt-8" style={{ flexWrap: 'wrap' }}>
              <button className="btn-filter active">All</button>
              <button className="btn-filter">Audio</button>
              <button className="btn-filter">Wearables</button>
              <button className="btn-filter">Power & Cables</button>
              <button className="btn-filter">Protection</button>
            </div>
          </div>

          <div className="grid-4">
            {accessories.map((item) => (
              <div key={item.id} className="mockup-card p-6 flex-col justify-between" style={{ cursor: 'pointer' }}>
                <div className="product-image-box mb-6">
                  <span style={{ fontSize: '4rem', transition: 'transform 0.3s' }}>{item.img}</span>
                </div>
                <div className="flex-col flex-1">
                  <span style={{ fontSize: '0.65rem', color: 'var(--color-accent)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>{item.category}</span>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '4px' }}>{item.name}</h3>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '16px' }}>{item.brand}</p>
                  
                  <div className="flex-row justify-between items-center mt-auto" style={{ paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                    <span style={{ fontWeight: 700, fontSize: '0.875rem' }}>{item.price}</span>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-secondary)' }}>BUY NOW</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Accessories;
