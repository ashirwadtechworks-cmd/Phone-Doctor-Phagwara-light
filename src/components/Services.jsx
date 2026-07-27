import React from 'react';
import { Link } from 'react-router-dom';
import { RefreshCw, Smartphone, DollarSign, Wrench, Battery, Cpu, Droplet, ShieldCheck, Zap } from 'lucide-react';
import './Services.css';

const Services = () => {
  return (
    <section className="services-section section-padding" id="services">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Premium <span className="text-gradient">Services</span></h2>
          <p className="section-desc">Everything your device needs under one roof.</p>
        </div>

        <div className="trade-cards">
          <div className="trade-card glass-panel">
            <div className="trade-icon-wrapper">
              <Smartphone size={32} className="trade-icon" />
            </div>
            <h3>Buy Device</h3>
            <p>Get the latest premium smartphones at unbeatable prices.</p>
            <Link to="/phones" className="btn btn-outline btn-glass mt-4">Browse</Link>
          </div>
          
          <div className="trade-card glass-panel highlight">
            <div className="trade-icon-wrapper highlight-icon">
              <DollarSign size={32} className="trade-icon" />
            </div>
            <h3>Sell Device</h3>
            <p>Get the best instant cash value for your old smartphone.</p>
            <Link to="/services" className="btn btn-primary mt-4">Get Quote</Link>
          </div>
          
          <div className="trade-card glass-panel">
            <div className="trade-icon-wrapper">
              <RefreshCw size={32} className="trade-icon" />
            </div>
            <h3>Exchange Device</h3>
            <p>Upgrade to a new phone easily with our hassle-free exchange.</p>
            <Link to="/services" className="btn btn-outline btn-glass mt-4">Exchange</Link>
          </div>
        </div>

        <div className="repair-section mt-100">
          <div className="repair-content">
            <h3 className="repair-title">Expert Repair Center</h3>
            <p className="repair-desc">Original parts. Expert technicians. Fast turnaround.</p>
            
            <div className="repair-grid">
              <div className="repair-item">
                <Smartphone size={24} className="text-accent" />
                <span>Screen Replacement</span>
              </div>
              <div className="repair-item">
                <Battery size={24} className="text-accent" />
                <span>Battery Replacement</span>
              </div>
              <div className="repair-item">
                <Wrench size={24} className="text-accent" />
                <span>Charging Port</span>
              </div>
              <div className="repair-item">
                <Cpu size={24} className="text-accent" />
                <span>Software Issues</span>
              </div>
              <div className="repair-item">
                <Droplet size={24} className="text-accent" />
                <span>Water Damage</span>
              </div>
              <div className="repair-item">
                <ShieldCheck size={24} className="text-accent" />
                <span>Diagnostics</span>
              </div>
            </div>
            
            <Link to="/services" className="btn btn-primary mt-8">Book a Repair</Link>
          </div>
          
          <div className="repair-visual glass">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h4>Diagnosis</h4>
                <p>Free complete device checkup.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h4>Quote</h4>
                <p>Transparent pricing with no hidden fees.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot pulse"></div>
              <div className="timeline-content">
                <h4>Repair</h4>
                <p>Fast repair with genuine parts.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot pending"></div>
              <div className="timeline-content">
                <h4>Delivery</h4>
                <p>Your device is ready to use.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
