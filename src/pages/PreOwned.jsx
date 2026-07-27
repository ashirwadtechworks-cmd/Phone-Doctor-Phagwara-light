import React from 'react';
import { CheckCircle, Shield, Battery, Settings, Search } from 'lucide-react';

const preOwnedProducts = [
  { id: 1, name: 'iPhone 13 Pro', storage: '256GB', condition: 'Excellent', price: '₹55,000', battery: '92%' },
  { id: 2, name: 'iPhone 14', storage: '128GB', condition: 'Like New', price: '₹48,000', battery: '98%' },
  { id: 3, name: 'Samsung S23 Ultra', storage: '256GB', condition: 'Good', price: '₹75,000', battery: '90%' },
  { id: 4, name: 'iPhone 12', storage: '128GB', condition: 'Fair', price: '₹32,000', battery: '85%' },
];

const PreOwned = () => {
  return (
    <>
      <div className="page-wrapper" style={{ paddingTop: '80px' }}>
        
        {/* Header Section with Red Gradient */}
        <div className="relative mb-16 overflow-hidden" style={{ background: 'rgba(0,0,0,0.4)', borderTop: '1px solid rgba(227,6,19,0.2)', borderBottom: '1px solid rgba(227,6,19,0.2)', padding: '64px 0' }}>
          <div className="absolute z-0" style={{ inset: 0, background: 'linear-gradient(to right, rgba(227,6,19,0.2), transparent)' }}></div>
          <div className="container relative z-10">
            <div style={{ maxWidth: '700px' }}>
              <h1 className="page-title-large font-heading font-bold mb-4">
                CERTIFIED <span className="text-accent">PRE-OWNED</span>
              </h1>
              <p className="text-lg text-secondary mb-8">
                Like New. Better Price. Rigorously tested devices backed by our quality guarantee.
              </p>
              
              <div className="flex-responsive gap-6">
                <div className="flex-row items-center gap-2 text-sm text-secondary">
                  <CheckCircle size={16} className="text-accent" /> 50-Point Check
                </div>
                <div className="flex-row items-center gap-2 text-sm text-secondary">
                  <Shield size={16} className="text-accent" /> Warranty Included
                </div>
                <div className="flex-row items-center gap-2 text-sm text-secondary">
                  <Battery size={16} className="text-accent" /> Verified Battery
                </div>
                <div className="flex-row items-center gap-2 text-sm text-secondary">
                  <Settings size={16} className="text-accent" /> Original Parts
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="flex-responsive justify-between items-center mb-8 gap-4">
            <h2 className="text-2xl font-bold">Available Devices</h2>
            <div className="relative w-full" style={{ maxWidth: '300px' }}>
              <input 
                type="text" 
                placeholder="Search models..." 
                className="form-input"
                style={{ paddingLeft: '40px', borderRadius: '99px' }}
              />
              <Search size={16} className="absolute text-secondary" style={{ left: '16px', top: '14px' }} />
            </div>
          </div>

          <div className="grid-4">
            {preOwnedProducts.map(device => (
              <div key={device.id} className="mockup-card p-6 relative overflow-hidden" style={{ cursor: 'pointer' }}>
                <div className="absolute" style={{ right: '-16px', top: '-16px', width: '100px', height: '100px', background: 'rgba(227,6,19,0.15)', borderRadius: '50%', filter: 'blur(20px)' }}></div>
                
                <div className="flex-row justify-between items-center mb-6 relative z-10">
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, padding: '4px 8px', borderRadius: '4px', background: 'rgba(255,255,255,0.1)', color: device.condition === 'Like New' ? '#4ade80' : 'var(--text-secondary)' }}>
                    {device.condition}
                  </span>
                  <span className="flex-row items-center gap-2 text-xs text-secondary">
                    <Battery size={12} className="text-accent" /> {device.battery}
                  </span>
                </div>
                
                <div className="product-image-box mb-6" style={{ background: 'transparent', border: 'none', height: '120px' }}>
                  <span style={{ fontSize: '4rem', transition: 'transform 0.3s' }}>📱</span>
                </div>
                
                <div className="relative z-10">
                  <h3 className="font-bold text-lg">{device.name}</h3>
                  <p className="text-sm text-secondary mb-4">{device.storage}</p>
                  
                  <div className="flex-row justify-between items-center pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                    <span className="font-bold text-xl text-primary">{device.price}</span>
                    <span className="text-xs font-bold text-accent">VIEW DETAILS</span>
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

export default PreOwned;
