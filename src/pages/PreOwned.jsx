import React from 'react';
import { CheckCircle, Shield, Battery, Settings, Search, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const preOwnedProducts = [
  { id: 1, name: 'iPhone 14 Pro Max', storage: '256GB', condition: 'Like New', price: '₹95,000', battery: '98%', img: '📱' },
  { id: 2, name: 'Samsung S23 Ultra', storage: '256GB', condition: 'Excellent', price: '₹75,000', battery: '95%', img: '📱' },
  { id: 3, name: 'iPhone 13', storage: '128GB', condition: 'Good', price: '₹42,000', battery: '90%', img: '📱' },
  { id: 4, name: 'Google Pixel 7 Pro', storage: '128GB', condition: 'Excellent', price: '₹48,000', battery: '94%', img: '📱' },
];

const PreOwned = () => {
  return (
    <>
      <div className="page-wrapper" style={{ paddingTop: '100px' }}>
        
        {/* Cinematic Header Section */}
        <div className="relative mb-24 overflow-hidden" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
          {/* Deep Red Spotlight */}
          <div className="absolute z-0" style={{ top: '50%', right: '10%', transform: 'translateY(-50%)', width: '800px', height: '800px', background: 'radial-gradient(circle, rgba(227,6,19,0.2) 0%, transparent 70%)', filter: 'blur(60px)' }}></div>
          <div className="absolute z-0" style={{ top: '0', left: '0', width: '100%', height: '100%', background: 'linear-gradient(90deg, #000 0%, transparent 100%)' }}></div>
          
          <div className="container relative z-10">
            <motion.div 
              style={{ maxWidth: '700px' }}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div style={{ display: 'inline-block', padding: '6px 16px', border: '1px solid rgba(227,6,19,0.3)', borderRadius: '100px', marginBottom: '24px', background: 'rgba(227,6,19,0.1)', color: 'var(--color-accent)', fontWeight: 600, fontSize: '0.875rem' }}>
                Premium Certification Program
              </div>
              
              <h1 className="page-title-large font-heading mb-6" style={{ fontSize: '4.5rem', lineHeight: 1 }}>
                CERTIFIED <br/><span className="text-gradient-red">PRE-OWNED</span>
              </h1>
              <p className="text-lg text-secondary mb-10" style={{ fontSize: '1.25rem', lineHeight: 1.6, maxWidth: '500px' }}>
                Like New. Better Price. Rigorously tested devices backed by our 50-point quality guarantee.
              </p>
              
              <div className="grid-2 gap-6" style={{ maxWidth: '600px' }}>
                <motion.div whileHover={{ x: 5 }} className="flex-row items-center gap-4 p-4 mockup-card" style={{ background: 'rgba(255,255,255,0.03)' }}>
                  <CheckCircle size={24} className="text-accent" /> 
                  <div>
                    <h4 style={{ fontSize: '1rem', marginBottom: '4px' }}>50-Point Check</h4>
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Meticulous hardware testing</p>
                  </div>
                </motion.div>
                <motion.div whileHover={{ x: 5 }} className="flex-row items-center gap-4 p-4 mockup-card" style={{ background: 'rgba(255,255,255,0.03)' }}>
                  <Shield size={24} className="text-accent" /> 
                  <div>
                    <h4 style={{ fontSize: '1rem', marginBottom: '4px' }}>Warranty Included</h4>
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Peace of mind guaranteed</p>
                  </div>
                </motion.div>
                <motion.div whileHover={{ x: 5 }} className="flex-row items-center gap-4 p-4 mockup-card" style={{ background: 'rgba(255,255,255,0.03)' }}>
                  <Battery size={24} className="text-accent" /> 
                  <div>
                    <h4 style={{ fontSize: '1rem', marginBottom: '4px' }}>Verified Battery</h4>
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Maximum capacity assured</p>
                  </div>
                </motion.div>
                <motion.div whileHover={{ x: 5 }} className="flex-row items-center gap-4 p-4 mockup-card" style={{ background: 'rgba(255,255,255,0.03)' }}>
                  <Settings size={24} className="text-accent" /> 
                  <div>
                    <h4 style={{ fontSize: '1rem', marginBottom: '4px' }}>Original Parts</h4>
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>No cheap replacements</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="container">
          <div className="flex-responsive justify-between items-center mb-12 gap-6">
            <h2 className="text-3xl font-bold font-heading">Available Devices</h2>
            <div className="relative w-full" style={{ maxWidth: '350px' }}>
              <input 
                type="text" 
                placeholder="Search models..." 
                className="form-input"
                style={{ paddingLeft: '48px', borderRadius: '100px', padding: '16px 48px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
              />
              <Search size={20} className="absolute text-secondary" style={{ left: '20px', top: '16px' }} />
            </div>
          </div>

          <div className="grid-4" style={{ gap: '32px' }}>
            {preOwnedProducts.map((device, idx) => (
              <motion.div 
                key={device.id} 
                className="mockup-card p-6 relative overflow-hidden flex-col"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                style={{ cursor: 'pointer', display: 'flex' }}
              >
                <div className="absolute" style={{ right: '-20px', top: '-20px', width: '120px', height: '120px', background: 'radial-gradient(circle, rgba(227,6,19,0.15) 0%, transparent 70%)', borderRadius: '50%', filter: 'blur(20px)' }}></div>
                
                <div className="flex-row justify-between items-center mb-8 relative z-10 w-full">
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, padding: '6px 12px', borderRadius: '100px', background: device.condition === 'Like New' ? 'rgba(74, 222, 128, 0.15)' : 'rgba(255,255,255,0.1)', color: device.condition === 'Like New' ? '#4ade80' : 'var(--text-secondary)', border: `1px solid ${device.condition === 'Like New' ? 'rgba(74, 222, 128, 0.3)' : 'rgba(255,255,255,0.1)'}` }}>
                    {device.condition}
                  </span>
                  <span className="flex-row items-center gap-2 text-xs font-bold" style={{ background: 'rgba(255,255,255,0.05)', padding: '6px 12px', borderRadius: '100px' }}>
                    <Battery size={14} className="text-accent" /> {device.battery}
                  </span>
                </div>
                
                <div className="product-image-box mb-8" style={{ background: 'transparent', border: 'none', height: '160px', width: '100%' }}>
                  <span style={{ fontSize: '6rem', transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)' }} className="device-img">{device.img}</span>
                </div>
                
                <div className="relative z-10 w-full mt-auto">
                  <h3 className="font-bold text-xl font-heading mb-1">{device.name}</h3>
                  <p className="text-sm text-secondary mb-6">{device.storage}</p>
                  
                  <div className="flex-row justify-between items-center pt-6" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                    <span className="font-bold text-2xl font-heading">{device.price}</span>
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      style={{ background: 'var(--color-accent)', color: '#fff', padding: '10px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    >
                      <ChevronRight size={20} />
                    </motion.button>
                  </div>
                </div>
                
                {/* CSS for hover effect on child */}
                <style>{`
                  .mockup-card:hover .device-img {
                    transform: scale(1.1) translateY(-10px);
                  }
                `}</style>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PreOwned;
