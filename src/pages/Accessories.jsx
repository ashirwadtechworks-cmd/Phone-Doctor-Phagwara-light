import React from 'react';
import { Headphones, Watch, BatteryCharging, Shield } from 'lucide-react';

const Accessories = () => {
  return (
    <div className="page-container" style={{ paddingTop: '120px', minHeight: '100vh', backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        <h1 className="section-title text-center mb-8">Premium <span className="text-gradient">Accessories</span></h1>
        
        <div className="features-grid" style={{ marginBottom: '60px' }}>
          <div className="feature-card glass">
            <Headphones size={40} className="feature-icon" />
            <h3>Audio</h3>
            <p>AirPods, Galaxy Buds, and premium Bluetooth speakers.</p>
          </div>
          <div className="feature-card glass">
            <Watch size={40} className="feature-icon" />
            <h3>Wearables</h3>
            <p>Apple Watches, Galaxy Watches, and fitness trackers.</p>
          </div>
          <div className="feature-card glass">
            <BatteryCharging size={40} className="feature-icon" />
            <h3>Power</h3>
            <p>Fast chargers, MagSafe, and high-capacity power banks.</p>
          </div>
          <div className="feature-card glass">
            <Shield size={40} className="feature-icon" />
            <h3>Protection</h3>
            <p>Premium cases and high-durability tempered glass.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accessories;
