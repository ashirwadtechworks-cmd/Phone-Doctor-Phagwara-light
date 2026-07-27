import React from 'react';
import { ShieldCheck, Zap, Award, Wrench } from 'lucide-react';
import Hero from '../components/Hero';
import QuickActions from '../components/QuickActions';
import ShopByCategory from '../components/ShopByCategory';
import TopBrands from '../components/TopBrands';
import StatsBar from '../components/StatsBar';
import Phones from './Phones';

const Home = () => {
  return (
    <>
      <Hero />
      
      {/* WHY CHOOSE US SECTION */}
      <section style={{ padding: '80px 0', background: '#ffffff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 className="brands-title" style={{ fontSize: '2rem', marginBottom: '16px', color: '#212121', fontWeight: 'bold' }}>Why Choose <span style={{ color: '#42c8b7' }}>Us</span></h2>
            <p className="text-secondary text-lg" style={{ maxWidth: '600px', margin: '0 auto', color: '#878787' }}>Experience the ultimate in mobile retail with Phagwara's most trusted smartphone destination.</p>
          </div>
          
          <div className="grid-4" style={{ gap: '24px' }}>
            <div style={{ padding: '32px 24px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', background: '#fff', border: '1px solid #e0e0e0', borderRadius: '8px' }}>
              <div style={{ background: '#e6f8f5', padding: '20px', borderRadius: '50%', marginBottom: '20px', color: '#42c8b7' }}>
                <ShieldCheck size={32} />
              </div>
              <h3 style={{ fontSize: '1.125rem', marginBottom: '8px', color: '#212121', fontWeight: 'bold' }}>100% Genuine</h3>
              <p style={{ color: '#878787', fontSize: '0.875rem' }}>We only deal in authentic products with official warranties. No fakes, no compromises.</p>
            </div>
            
            <div style={{ padding: '32px 24px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', background: '#fff', border: '1px solid #e0e0e0', borderRadius: '8px' }}>
              <div style={{ background: '#e6f8f5', padding: '20px', borderRadius: '50%', marginBottom: '20px', color: '#42c8b7' }}>
                <Award size={32} />
              </div>
              <h3 style={{ fontSize: '1.125rem', marginBottom: '8px', color: '#212121', fontWeight: 'bold' }}>Certified Pre-Owned</h3>
              <p style={{ color: '#878787', fontSize: '0.875rem' }}>Every pre-owned device goes through our rigorous 50-point quality check.</p>
            </div>
            
            <div style={{ padding: '32px 24px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', background: '#fff', border: '1px solid #e0e0e0', borderRadius: '8px' }}>
              <div style={{ background: '#e6f8f5', padding: '20px', borderRadius: '50%', marginBottom: '20px', color: '#42c8b7' }}>
                <Wrench size={32} />
              </div>
              <h3 style={{ fontSize: '1.125rem', marginBottom: '8px', color: '#212121', fontWeight: 'bold' }}>Expert Repair</h3>
              <p style={{ color: '#878787', fontSize: '0.875rem' }}>Our certified technicians use only genuine parts for all smartphone repairs.</p>
            </div>
            
            <div style={{ padding: '32px 24px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', background: '#fff', border: '1px solid #e0e0e0', borderRadius: '8px' }}>
              <div style={{ background: '#e6f8f5', padding: '20px', borderRadius: '50%', marginBottom: '20px', color: '#42c8b7' }}>
                <Zap size={32} />
              </div>
              <h3 style={{ fontSize: '1.125rem', marginBottom: '8px', color: '#212121', fontWeight: 'bold' }}>Instant Exchange</h3>
              <p style={{ color: '#878787', fontSize: '0.875rem' }}>Get the best market value for your old device instantly when upgrading.</p>
            </div>
          </div>
        </div>
      </section>

      <QuickActions />
      <ShopByCategory />
      <TopBrands />
      <div style={{ marginTop: '-40px' }}>
        <Phones />
      </div>
      <StatsBar />
    </>
  );
};

export default Home;
