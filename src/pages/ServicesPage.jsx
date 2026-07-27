import React from 'react';
import { ArrowRight, Wrench, RefreshCcw, DollarSign } from 'lucide-react';

const ServicesPage = () => {
  return (
    <>
      <div className="page-wrapper" style={{ backgroundColor: '#f8f9fa', minHeight: '100vh', paddingTop: '100px' }}>
        <div className="container">
          <div className="page-header" style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h1 className="page-title" style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#212121', marginBottom: '16px' }}>
              Our <span style={{ color: '#42c8b7' }}>Services</span>
            </h1>
            <p className="page-subtitle" style={{ fontSize: '1.125rem', color: '#4a4a4a', maxWidth: '700px', margin: '0 auto' }}>
              Whether you're looking to upgrade, cash in on your old device, or get a professional repair, Phone Doctor Phagwara provides seamless, transparent, and premium services.
            </p>
          </div>

          {/* Buy Sell Exchange Section */}
          <div className="mb-16">
            <h2 className="text-center text-2xl font-bold mb-8" style={{ color: '#212121' }}>BUY. SELL. EXCHANGE.</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
              
              <div style={{ background: '#fff', border: '1px solid #e0e0e0', borderRadius: '8px', padding: '32px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', transition: 'box-shadow 0.3s' }} onMouseOver={(e) => e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)'} onMouseOut={(e) => e.currentTarget.style.boxShadow = 'none'}>
                <div style={{ background: '#e6f8f5', padding: '16px', borderRadius: '50%', color: '#42c8b7', marginBottom: '20px' }}>
                  <DollarSign size={32} />
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#212121', marginBottom: '12px' }}>Sell Your Phone</h3>
                <p style={{ color: '#878787', marginBottom: '24px', fontSize: '0.9rem', lineHeight: '1.5' }}>
                  Get the best market value for your old device instantly. We offer secure data wiping and immediate payment.
                </p>
                <button className="btn-solid" style={{ marginTop: 'auto', background: '#42c8b7', color: '#fff', padding: '12px 24px', borderRadius: '4px', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  GET A QUOTE <ArrowRight size={16} />
                </button>
              </div>

              <div style={{ background: '#fff', border: '1px solid #42c8b7', borderRadius: '8px', padding: '32px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: '#42c8b7' }}></div>
                <div style={{ background: '#e6f8f5', padding: '16px', borderRadius: '50%', color: '#42c8b7', marginBottom: '20px' }}>
                  <RefreshCcw size={32} />
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#212121', marginBottom: '12px' }}>Exchange & Upgrade</h3>
                <p style={{ color: '#878787', marginBottom: '24px', fontSize: '0.9rem', lineHeight: '1.5' }}>
                  Trade in your current phone and apply its value towards any new or certified pre-owned device in our store.
                </p>
                <button className="btn-solid" style={{ marginTop: 'auto', background: '#212121', color: '#fff', padding: '12px 24px', borderRadius: '4px', border: 'none', cursor: 'pointer' }}>
                  UPGRADE NOW
                </button>
              </div>

              <div style={{ background: '#fff', border: '1px solid #e0e0e0', borderRadius: '8px', padding: '32px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', transition: 'box-shadow 0.3s' }} onMouseOver={(e) => e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)'} onMouseOut={(e) => e.currentTarget.style.boxShadow = 'none'}>
                <div style={{ background: '#f8f9fa', padding: '16px', borderRadius: '50%', marginBottom: '20px' }}>
                  <span style={{ fontSize: '2rem' }}>📱</span>
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#212121', marginBottom: '12px' }}>Buy Pre-Owned</h3>
                <p style={{ color: '#878787', marginBottom: '24px', fontSize: '0.9rem', lineHeight: '1.5' }}>
                  Purchase fully certified, tested, and warranty-backed pre-owned smartphones at unbeatable prices.
                </p>
                <button className="btn-solid" style={{ marginTop: 'auto', background: '#42c8b7', color: '#fff', padding: '12px 24px', borderRadius: '4px', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  VIEW INVENTORY <ArrowRight size={16} />
                </button>
              </div>

            </div>
          </div>

          {/* Repair Section */}
          <div style={{ background: '#fff', border: '1px solid #e0e0e0', borderRadius: '8px', padding: '48px', marginTop: '80px', display: 'flex', flexWrap: 'wrap', gap: '40px', alignItems: 'center' }}>
            <div style={{ flex: '1 1 400px' }}>
              <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#212121', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Wrench size={32} color="#42c8b7" /> Expert Repair
              </h2>
              <p style={{ color: '#4a4a4a', marginBottom: '24px', lineHeight: '1.6', fontSize: '1.1rem' }}>
                Screen shattered? Battery draining fast? Water damage? Our certified expert technicians handle repairs for all major brands using original parts.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, marginBottom: '32px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#4a4a4a' }}>
                  <span style={{ width: '8px', height: '8px', background: '#42c8b7', borderRadius: '50%' }}></span> Broken Screen Replacement
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#4a4a4a' }}>
                  <span style={{ width: '8px', height: '8px', background: '#42c8b7', borderRadius: '50%' }}></span> Battery Replacement
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#4a4a4a' }}>
                  <span style={{ width: '8px', height: '8px', background: '#42c8b7', borderRadius: '50%' }}></span> Camera & Lens Repair
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#4a4a4a' }}>
                  <span style={{ width: '8px', height: '8px', background: '#42c8b7', borderRadius: '50%' }}></span> Software Troubleshooting
                </li>
              </ul>
              <button style={{ background: '#fff', border: '1px solid #42c8b7', color: '#42c8b7', padding: '12px 24px', borderRadius: '4px', fontWeight: '600', cursor: 'pointer' }}>
                BOOK REPAIR APPOINTMENT
              </button>
            </div>
            
            <div style={{ flex: '1 1 300px', display: 'flex', justifyContent: 'center' }}>
              <div style={{ width: '100%', maxWidth: '350px', height: '300px', background: '#f8f9fa', border: '1px solid #e0e0e0', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: '5rem' }}>🛠️</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default ServicesPage;
