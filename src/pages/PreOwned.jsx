import React, { useState } from 'react';
import { Search, ChevronDown, Check } from 'lucide-react';
import heroImg from '../assets/hero_smartphones_3d.jpg';

const preOwnedProducts = [
  { id: 1, name: 'Apple iPhone 14 Pro Max - Refurbished', ram: '8 GB', storage: '256 GB', condition: 'Superb', price: '₹ 95,000', originalPrice: '₹ 1,39,900', discount: '32% off', img: heroImg, color: '#42C86B' },
  { id: 2, name: 'Samsung Galaxy S23 Ultra 5G - Refurbished', ram: '12 GB', storage: '256 GB', condition: 'Excellent', price: '₹ 75,000', originalPrice: '₹ 1,24,999', discount: '40% off', img: heroImg, color: '#f5a623' },
  { id: 3, name: 'Apple iPhone 13 - Refurbished', ram: '4 GB', storage: '128 GB', condition: 'Good', price: '₹ 42,000', originalPrice: '₹ 59,900', discount: '30% off', img: heroImg, color: '#ff7a00' },
  { id: 4, name: 'Google Pixel 7 Pro 5G - Refurbished', ram: '12 GB', storage: '128 GB', condition: 'Superb', price: '₹ 48,000', originalPrice: '₹ 84,999', discount: '43% off', img: heroImg, color: '#42C86B' },
  { id: 5, name: 'Apple iPhone 12 - Refurbished', ram: '4 GB', storage: '64 GB', condition: 'Fair', price: '₹ 28,000', originalPrice: '₹ 49,900', discount: '44% off', img: heroImg, color: '#ff3b30' },
  { id: 6, name: 'OnePlus 11 5G - Refurbished', ram: '8 GB', storage: '256 GB', condition: 'Excellent', price: '₹ 45,000', originalPrice: '₹ 61,999', discount: '27% off', img: heroImg, color: '#f5a623' },
];

const brands = ['Apple', 'Samsung', 'OnePlus', 'Xiaomi', 'Vivo', 'Google'];
const conditions = ['Superb', 'Excellent', 'Good', 'Fair'];
const storageOptions = ['64 GB', '128 GB', '256 GB', '512 GB'];

const PreOwned = () => {
  return (
    <div className="page-wrapper" style={{ paddingTop: '80px', backgroundColor: '#f8f9fa' }}>
      <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 16px' }}>
        
        {/* Breadcrumb & Header */}
        <div className="flex-col mb-4 pt-4">
          <p className="text-sm mb-4" style={{ color: '#878787', fontSize: '12px' }}>Home &gt; Buy Refurbished Mobile Phones</p>
          <div className="flex-responsive justify-between items-center gap-4">
            <h1 className="font-bold" style={{ fontSize: '24px', color: '#000' }}>Buy Refurbished Mobile Phone</h1>
          </div>
        </div>

        {/* E-commerce Layout: Sidebar + Grid */}
        <div className="flex-responsive items-start" style={{ gap: '24px' }}>
          
          {/* Left Sidebar (Filters) */}
          <div style={{ width: '100%', maxWidth: '280px', flexShrink: 0, background: '#fff', borderRadius: '4px', border: '1px solid #e0e0e0', padding: '16px' }}>
            <div className="flex-row justify-between items-center mb-4" style={{ borderBottom: '1px solid #e0e0e0', paddingBottom: '16px' }}>
              <h3 className="font-bold text-base" style={{ color: '#212121' }}>Filters</h3>
              <button style={{ color: '#42c8b7', fontSize: '14px', fontWeight: '500' }}>CLEAR ALL</button>
            </div>

            {/* Brand Filter */}
            <div style={{ borderBottom: '1px solid #e0e0e0', padding: '16px 0' }}>
              <div className="flex-row justify-between items-center mb-3 cursor-pointer">
                <h4 className="font-medium" style={{ fontSize: '14px', color: '#212121' }}>Brand</h4>
                <ChevronDown size={18} color="#878787" />
              </div>
              <div className="flex-col gap-3">
                {brands.map(brand => (
                  <label key={brand} className="flex-row items-center gap-3 cursor-pointer">
                    <input type="checkbox" style={{ width: '16px', height: '16px', accentColor: '#42c8b7' }} />
                    <span style={{ fontSize: '14px', color: '#4a4a4a' }}>{brand}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Condition Filter */}
            <div style={{ borderBottom: '1px solid #e0e0e0', padding: '16px 0' }}>
              <div className="flex-row justify-between items-center mb-3 cursor-pointer">
                <h4 className="font-medium" style={{ fontSize: '14px', color: '#212121' }}>Condition</h4>
                <ChevronDown size={18} color="#878787" />
              </div>
              <div className="flex-col gap-3">
                {conditions.map(cond => (
                  <label key={cond} className="flex-row items-center gap-3 cursor-pointer">
                    <input type="checkbox" style={{ width: '16px', height: '16px', accentColor: '#42c8b7' }} />
                    <span style={{ fontSize: '14px', color: '#4a4a4a' }}>{cond}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Storage Filter */}
            <div style={{ padding: '16px 0' }}>
              <div className="flex-row justify-between items-center mb-3 cursor-pointer">
                <h4 className="font-medium" style={{ fontSize: '14px', color: '#212121' }}>Internal Storage</h4>
                <ChevronDown size={18} color="#878787" />
              </div>
              <div className="flex-col gap-3">
                {storageOptions.map(storage => (
                  <label key={storage} className="flex-row items-center gap-3 cursor-pointer">
                    <input type="checkbox" style={{ width: '16px', height: '16px', accentColor: '#42c8b7' }} />
                    <span style={{ fontSize: '14px', color: '#4a4a4a' }}>{storage}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content (Product Grid) */}
          <div className="flex-1 w-full">
            
            {/* Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '16px' }}>
              {preOwnedProducts.map((device) => (
                <div 
                  key={device.id} 
                  style={{ 
                    background: '#fff', 
                    borderRadius: '8px', 
                    border: '1px solid #e0e0e0',
                    cursor: 'pointer',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'box-shadow 0.2s',
                  }}
                  onMouseOver={(e) => e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)'}
                  onMouseOut={(e) => e.currentTarget.style.boxShadow = 'none'}
                >
                  
                  {/* Product Image Box */}
                  <div style={{ position: 'relative', width: '100%', height: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '16px' }}>
                    {/* Condition Badge */}
                    <div style={{ position: 'absolute', top: '12px', left: '12px', background: 'rgba(255,255,255,0.9)', padding: '2px 8px', borderRadius: '4px', border: `1px solid ${device.color}`, display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: device.color }}></div>
                      <span style={{ fontSize: '10px', fontWeight: '600', color: device.color }}>{device.condition}</span>
                    </div>
                    
                    <img src={device.img} alt={device.name} style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} />
                  </div>
                  
                  {/* Product Details */}
                  <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <h3 style={{ fontSize: '14px', fontWeight: '500', color: '#212121', marginBottom: '8px', lineHeight: '1.4', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                      {device.name}
                    </h3>
                    <p style={{ fontSize: '12px', color: '#878787', marginBottom: '16px' }}>{device.ram} RAM | {device.storage} Storage</p>
                    
                    <div style={{ marginTop: 'auto' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                        <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#212121' }}>{device.price}</span>
                        <span style={{ fontSize: '12px', color: '#878787', textDecoration: 'line-through' }}>{device.originalPrice}</span>
                        <span style={{ fontSize: '12px', fontWeight: '600', color: '#388e3c' }}>{device.discount}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default PreOwned;
