import React from 'react';
import { ArrowRight, Wrench, RefreshCcw, DollarSign } from 'lucide-react';

const ServicesPage = () => {
  return (
    <>
      <div className="page-wrapper">
        <div className="container">
          <div className="page-header">
            <h1 className="page-title">
              OUR <span className="text-accent">SERVICES</span>
            </h1>
            <p className="page-subtitle">
              Whether you're looking to upgrade, cash in on your old device, or get a professional repair, Phone Doctor Phagwara provides seamless, transparent, and premium services.
            </p>
          </div>

          {/* Buy Sell Exchange Section */}
          <div className="mb-16">
            <h2 className="text-center text-3xl font-bold font-heading mb-8">BUY. SELL. EXCHANGE.</h2>
            <div className="grid-3">
              
              <div className="glass-panel service-card">
                <div className="service-icon-wrap">
                  <DollarSign size={32} color="#fff" />
                </div>
                <h3 className="service-card-title">Sell Your Phone</h3>
                <p className="service-card-desc">
                  Get the best market value for your old device instantly. We offer secure data wiping and immediate payment.
                </p>
                <button className="btn-link">
                  GET A QUOTE <ArrowRight size={16} />
                </button>
              </div>

              <div className="glass-panel service-card" style={{ borderColor: 'rgba(227,6,19,0.3)', background: 'linear-gradient(145deg, rgba(227,6,19,0.05), transparent)' }}>
                <div className="service-icon-wrap accent">
                  <RefreshCcw size={32} />
                </div>
                <h3 className="service-card-title">Exchange & Upgrade</h3>
                <p className="service-card-desc">
                  Trade in your current phone and apply its value towards any new or certified pre-owned device in our store.
                </p>
                <button className="btn-solid">
                  UPGRADE NOW
                </button>
              </div>

              <div className="glass-panel service-card">
                <div className="service-icon-wrap">
                  <span style={{ fontSize: '1.5rem' }}>📱</span>
                </div>
                <h3 className="service-card-title">Buy Pre-Owned</h3>
                <p className="service-card-desc">
                  Purchase fully certified, tested, and warranty-backed pre-owned smartphones at unbeatable prices.
                </p>
                <button className="btn-link">
                  VIEW INVENTORY <ArrowRight size={16} />
                </button>
              </div>

            </div>
          </div>

          {/* Repair Section */}
          <div className="glass-panel p-8 relative overflow-hidden" style={{ marginTop: '80px' }}>
            <div style={{ position: 'absolute', right: '-10%', bottom: '-20%', width: '300px', height: '300px', background: 'rgba(227,6,19,0.1)', borderRadius: '50%', filter: 'blur(60px)' }}></div>
            
            <div className="flex-responsive gap-12 items-center relative z-10">
              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-4 font-heading flex-row items-center gap-2">
                  <Wrench size={32} className="text-accent" /> EXPERT REPAIR
                </h2>
                <p className="text-secondary mb-6" style={{ lineHeight: '1.6' }}>
                  Screen shattered? Battery draining fast? Water damage? Our certified expert technicians handle repairs for all major brands using original parts.
                </p>
                <ul className="flex-col gap-2 mb-8" style={{ listStyle: 'none', padding: 0 }}>
                  <li className="flex-row items-center gap-2 text-sm text-secondary">
                    <span style={{ width: '6px', height: '6px', background: 'var(--color-accent)', borderRadius: '50%' }}></span> Broken Screen Replacement
                  </li>
                  <li className="flex-row items-center gap-2 text-sm text-secondary">
                    <span style={{ width: '6px', height: '6px', background: 'var(--color-accent)', borderRadius: '50%' }}></span> Battery Replacement
                  </li>
                  <li className="flex-row items-center gap-2 text-sm text-secondary">
                    <span style={{ width: '6px', height: '6px', background: 'var(--color-accent)', borderRadius: '50%' }}></span> Camera & Lens Repair
                  </li>
                  <li className="flex-row items-center gap-2 text-sm text-secondary">
                    <span style={{ width: '6px', height: '6px', background: 'var(--color-accent)', borderRadius: '50%' }}></span> Software Troubleshooting
                  </li>
                </ul>
                <button className="btn-mockup-outline" style={{ display: 'inline-flex' }}>
                  BOOK REPAIR APPOINTMENT
                </button>
              </div>
              
              <div className="flex-1 w-full flex-row justify-center">
                <div style={{ width: '100%', maxWidth: '350px', height: '250px', background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontSize: '4rem', opacity: 0.5 }}>🛠️</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default ServicesPage;
