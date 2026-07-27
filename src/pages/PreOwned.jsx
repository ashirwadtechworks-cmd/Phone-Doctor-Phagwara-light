import React, { useState } from 'react';
import { Search, Shield, Battery, Star, Filter, ChevronRight, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import heroImg from '../assets/hero_smartphones_3d.jpg';

const preOwnedProducts = [
  { id: 1, name: 'Apple iPhone 14 Pro Max', storage: '256GB', condition: 'Superb', price: '₹95,000', originalPrice: '₹1,39,900', battery: '98%', img: heroImg },
  { id: 2, name: 'Samsung Galaxy S23 Ultra', storage: '256GB', condition: 'Excellent', price: '₹75,000', originalPrice: '₹1,24,999', battery: '95%', img: heroImg },
  { id: 3, name: 'Apple iPhone 13', storage: '128GB', condition: 'Good', price: '₹42,000', originalPrice: '₹59,900', battery: '90%', img: heroImg },
  { id: 4, name: 'Google Pixel 7 Pro', storage: '128GB', condition: 'Superb', price: '₹48,000', originalPrice: '₹84,999', battery: '94%', img: heroImg },
  { id: 5, name: 'Apple iPhone 12', storage: '64GB', condition: 'Fair', price: '₹28,000', originalPrice: '₹49,900', battery: '85%', img: heroImg },
  { id: 6, name: 'OnePlus 11 5G', storage: '256GB', condition: 'Excellent', price: '₹45,000', originalPrice: '₹61,999', battery: '92%', img: heroImg },
];

const brands = ['Apple', 'Samsung', 'Google', 'OnePlus', 'Xiaomi', 'Vivo'];
const conditions = ['Superb', 'Excellent', 'Good', 'Fair'];
const storageOptions = ['64 GB', '128 GB', '256 GB', '512 GB'];

const PreOwned = () => {
  const [activeBrand, setActiveBrand] = useState('All');
  
  return (
    <div className="page-wrapper" style={{ paddingTop: '100px', backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container" style={{ maxWidth: '1400px' }}>
        
        {/* Breadcrumb & Header */}
        <div className="flex-col mb-6">
          <p className="text-sm text-secondary mb-4">Home &gt; Buy Refurbished Mobile Phones</p>
          <div className="flex-responsive justify-between items-center gap-4">
            <h1 className="text-3xl font-bold font-heading text-primary">Buy Refurbished Mobile Phones</h1>
            
            <div className="relative w-full" style={{ maxWidth: '400px' }}>
              <input 
                type="text" 
                placeholder="Search for mobiles..." 
                className="form-input"
                style={{ paddingLeft: '40px', borderRadius: '8px', background: 'var(--bg-card)', border: '1px solid var(--border-light)' }}
              />
              <Search size={18} className="absolute text-secondary" style={{ left: '14px', top: '14px' }} />
            </div>
          </div>
        </div>

        {/* E-commerce Layout: Sidebar + Grid */}
        <div className="flex-responsive items-start gap-8">
          
          {/* Left Sidebar (Filters) */}
          <div className="glass-panel p-6" style={{ width: '100%', maxWidth: '280px', flexShrink: 0, background: 'var(--bg-card)' }}>
            <div className="flex-row justify-between items-center mb-6">
              <h3 className="font-bold text-lg text-primary">Filters</h3>
              <button className="text-accent text-sm font-bold">Clear All</button>
            </div>

            {/* Brand Filter */}
            <div className="mb-8">
              <h4 className="font-bold mb-4 text-sm text-primary">BRAND</h4>
              <div className="flex-col gap-3">
                {brands.map(brand => (
                  <label key={brand} className="flex-row items-center gap-3 cursor-pointer">
                    <input type="checkbox" style={{ width: '16px', height: '16px', accentColor: 'var(--color-accent)' }} />
                    <span className="text-sm text-primary">{brand}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Condition Filter */}
            <div className="mb-8">
              <h4 className="font-bold mb-4 text-sm text-primary">CONDITION</h4>
              <div className="flex-col gap-3">
                {conditions.map(cond => (
                  <label key={cond} className="flex-row items-center gap-3 cursor-pointer">
                    <input type="checkbox" style={{ width: '16px', height: '16px', accentColor: 'var(--color-accent)' }} />
                    <span className="text-sm text-primary">{cond}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Storage Filter */}
            <div>
              <h4 className="font-bold mb-4 text-sm text-primary">STORAGE</h4>
              <div className="flex-col gap-3">
                {storageOptions.map(storage => (
                  <label key={storage} className="flex-row items-center gap-3 cursor-pointer">
                    <input type="checkbox" style={{ width: '16px', height: '16px', accentColor: 'var(--color-accent)' }} />
                    <span className="text-sm text-primary">{storage}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content (Product Grid) */}
          <div className="flex-1 w-full">
            
            {/* Banner */}
            <div className="glass-panel mb-8 p-6 flex-responsive justify-between items-center" style={{ background: 'linear-gradient(90deg, #fce4e4 0%, #fff 100%)', border: '1px solid var(--border-accent)' }}>
              <div>
                <h2 className="text-2xl font-bold font-heading mb-2 text-accent">Phone Doctor Assured</h2>
                <p className="text-sm text-secondary">32-point quality check • 6 Months Warranty • 7 Days Replacement</p>
              </div>
              <Shield size={48} className="text-accent opacity-20 mt-4 md:mt-0" />
            </div>

            {/* Grid */}
            <div className="grid-3" style={{ gap: '24px' }}>
              {preOwnedProducts.map((device, idx) => (
                <motion.div 
                  key={device.id} 
                  className="mockup-card relative flex-col"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  style={{ cursor: 'pointer', display: 'flex', background: 'var(--bg-card)' }}
                >
                  
                  {/* Product Image */}
                  <div className="w-full flex justify-center items-center p-6" style={{ height: '220px', background: 'var(--bg-pure)' }}>
                    <img src={device.img} alt={device.name} style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain', mixBlendMode: 'multiply' }} />
                  </div>
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex-row gap-2">
                    <span className="text-xs font-bold" style={{ padding: '4px 8px', borderRadius: '4px', background: 'var(--bg-secondary)', color: 'var(--text-primary)' }}>
                      {device.condition}
                    </span>
                  </div>

                  {/* Product Details */}
                  <div className="p-5 flex-col flex-1 border-t border-light" style={{ borderTop: '1px solid var(--border-light)' }}>
                    <h3 className="font-bold text-lg font-heading mb-1 text-primary" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                      {device.name} - Refurbished
                    </h3>
                    <p className="text-xs text-secondary mb-4">{device.storage} • {device.battery} Battery Health</p>
                    
                    <div className="mt-auto">
                      <div className="flex-row items-baseline gap-2 mb-4">
                        <span className="font-bold text-2xl font-heading text-primary">{device.price}</span>
                        <span className="text-sm text-secondary" style={{ textDecoration: 'line-through' }}>{device.originalPrice}</span>
                      </div>
                      
                      <button className="btn-solid w-full" style={{ padding: '12px', borderRadius: '8px' }}>
                        Buy Now
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default PreOwned;
