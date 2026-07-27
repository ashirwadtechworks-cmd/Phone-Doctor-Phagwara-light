import React, { useState } from 'react';

const accessories = [
  { id: 1, category: 'Audio', name: 'AirPods Pro (2nd Gen)', brand: 'Apple', price: '₹24,900', img: '🎧' },
  { id: 2, category: 'Wearables', name: 'Apple Watch Series 9', brand: 'Apple', price: '₹41,900', img: '⌚' },
  { id: 3, category: 'Power', name: '20W USB-C Power Adapter', brand: 'Apple', price: '₹1,900', img: '🔌' },
  { id: 4, category: 'Audio', name: 'Galaxy Buds2 Pro', brand: 'Samsung', price: '₹15,999', img: '🎧' },
  { id: 5, category: 'Wearables', name: 'Galaxy Watch6', brand: 'Samsung', price: '₹29,999', img: '⌚' },
  { id: 6, category: 'Protection', name: 'Silicone Case with MagSafe', brand: 'Apple', price: '₹4,900', img: '🛡️' },
];

const Accessories = () => {
  const [filter, setFilter] = useState('All');

  const filteredAccessories = accessories.filter(item => {
    if (filter === 'All') return true;
    if (filter === 'Power & Cables' && item.category === 'Power') return true;
    return item.category === filter;
  });

  return (
    <>
      <div className="page-wrapper" style={{ backgroundColor: '#f8f9fa', minHeight: '100vh', paddingTop: '100px' }}>
        <div className="container">
          <div className="page-header" style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h1 className="page-title" style={{ fontSize: '24px', fontWeight: 'bold', color: '#212121', marginBottom: '8px' }}>
              Premium <span style={{ color: '#42c8b7' }}>Accessories</span>
            </h1>
            <p className="page-subtitle" style={{ color: '#4a4a4a', fontSize: '1rem' }}>Genuine accessories for every need.</p>
            
            <div className="flex-row justify-center gap-4 mt-8" style={{ flexWrap: 'wrap' }}>
              {['All', 'Audio', 'Wearables', 'Power & Cables', 'Protection'].map(cat => (
                <button 
                  key={cat}
                  style={{ 
                    padding: '8px 16px', 
                    borderRadius: '20px', 
                    border: filter === cat ? '1px solid #42c8b7' : '1px solid #e0e0e0', 
                    background: filter === cat ? '#42c8b7' : '#fff', 
                    color: filter === cat ? '#fff' : '#4a4a4a', 
                    cursor: 'pointer' 
                  }}
                  onClick={() => setFilter(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid-4" style={{ gap: '24px' }}>
            {filteredAccessories.map((item) => (
              <div key={item.id} className="p-6 flex-col justify-between" style={{ cursor: 'pointer', background: '#fff', borderRadius: '8px', border: '1px solid #e0e0e0', transition: 'box-shadow 0.3s' }} onMouseOver={(e) => e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)'} onMouseOut={(e) => e.currentTarget.style.boxShadow = 'none'}>
                <div className="product-image-box mb-6" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '160px', background: '#f8f9fa', borderRadius: '4px' }}>
                  <span style={{ fontSize: '4rem', transition: 'transform 0.3s' }}>{item.img}</span>
                </div>
                <div className="flex-col flex-1">
                  <span style={{ fontSize: '0.65rem', color: '#42c8b7', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>{item.category}</span>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '4px', color: '#212121' }}>{item.name}</h3>
                  <p style={{ fontSize: '0.75rem', color: '#878787', marginBottom: '16px' }}>{item.brand}</p>
                  
                  <div className="flex-row justify-between items-center mt-auto" style={{ paddingTop: '16px', borderTop: '1px solid #e0e0e0' }}>
                    <span style={{ fontWeight: 700, fontSize: '0.875rem', color: '#212121' }}>{item.price}</span>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#42c8b7' }}>BUY NOW</span>
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
