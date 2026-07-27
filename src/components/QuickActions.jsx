import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, RefreshCcw, ArrowLeftRight, Wrench } from 'lucide-react';
import './QuickActions.css';

const QuickActions = () => {
  return (
    <div className="container" style={{ marginTop: '-40px', position: 'relative', zIndex: 20 }}>
      <div className="quick-actions-grid">
        <Link to="/phones" className="quick-action-card mockup-card">
          <div className="qa-icon-wrapper">
            <ShoppingBag size={24} className="text-primary" />
          </div>
          <div className="qa-content">
            <h3 className="qa-title">BUY</h3>
            <p className="qa-desc">Wide range of smartphones</p>
          </div>
        </Link>
        
        <Link to="/services" className="quick-action-card mockup-card">
          <div className="qa-icon-wrapper">
            <RefreshCcw size={24} className="text-primary" />
          </div>
          <div className="qa-content">
            <h3 className="qa-title">SELL</h3>
            <p className="qa-desc">Get the best price for your device</p>
          </div>
        </Link>
        
        <Link to="/services" className="quick-action-card mockup-card">
          <div className="qa-icon-wrapper text-accent">
            <ArrowLeftRight size={24} />
          </div>
          <div className="qa-content">
            <h3 className="qa-title">EXCHANGE</h3>
            <p className="qa-desc">Upgrade with easy exchange</p>
          </div>
        </Link>
        
        <Link to="/services" className="quick-action-card mockup-card">
          <div className="qa-icon-wrapper">
            <Wrench size={24} className="text-primary" />
          </div>
          <div className="qa-content">
            <h3 className="qa-title">REPAIR</h3>
            <p className="qa-desc">Professional repair services</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default QuickActions;
