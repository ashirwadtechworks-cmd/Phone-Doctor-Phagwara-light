import React from 'react';
import { ShieldCheck, Battery, RefreshCw } from 'lucide-react';

const PreOwned = () => {
  return (
    <div className="page-container" style={{ paddingTop: '120px', minHeight: '100vh', backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <h1 className="section-title text-center mb-8">Certified <span className="text-gradient">Pre-Owned</span></h1>
        
        <div className="features-grid" style={{ marginBottom: '60px' }}>
          <div className="feature-card glass">
            <ShieldCheck size={40} className="feature-icon" />
            <h3>Fully Inspected</h3>
            <p>Every device passes a rigorous 50-point quality check.</p>
          </div>
          <div className="feature-card glass">
            <Battery size={40} className="feature-icon" />
            <h3>Battery Tested</h3>
            <p>Guaranteed battery health of 85% or higher.</p>
          </div>
          <div className="feature-card glass">
            <RefreshCw size={40} className="feature-icon" />
            <h3>Warranty Included</h3>
            <p>6-month comprehensive warranty on all pre-owned devices.</p>
          </div>
        </div>

        <div className="products-grid">
          {/* Mock Pre-Owned Grid */}
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="product-card glass-panel">
              <div className="product-tag">Like New</div>
              <div className="product-img-wrapper">
                <span className="product-placeholder">📱</span>
              </div>
              <div className="product-info">
                <h3 className="product-name">iPhone 13 Pro</h3>
                <p className="product-brand">Apple</p>
                <div className="product-footer">
                  <span className="product-price">₹55,000</span>
                  <button className="btn-buy">Buy</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PreOwned;
