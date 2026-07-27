import React from 'react';
import { ShieldCheck, Zap, Award, Wrench } from 'lucide-react';
import Hero from '../components/Hero';
import QuickActions from '../components/QuickActions';
import ShopByCategory from '../components/ShopByCategory';
import TopBrands from '../components/TopBrands';
import StatsBar from '../components/StatsBar';

const Home = () => {
  return (
    <>
      <Hero />
      
      {/* WHY CHOOSE US SECTION */}
      <section style={{ padding: '120px 0', background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 className="brands-title" style={{ fontSize: '2.5rem', marginBottom: '16px' }}>WHY CHOOSE <span className="text-accent">US</span></h2>
            <p className="text-secondary text-lg" style={{ maxWidth: '600px', margin: '0 auto' }}>Experience the ultimate in mobile retail with Phagwara's most trusted smartphone destination.</p>
          </div>
          
          <div className="grid-4" style={{ gap: '32px' }}>
            <div className="mockup-card" style={{ padding: '40px 32px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ background: 'rgba(227,6,19,0.1)', padding: '24px', borderRadius: '50%', marginBottom: '24px', color: 'var(--color-accent)' }}>
                <ShieldCheck size={40} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>100% Genuine</h3>
              <p className="text-secondary text-sm">We only deal in authentic products with official warranties. No fakes, no compromises.</p>
            </div>
            
            <div className="mockup-card" style={{ padding: '40px 32px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ background: 'rgba(255,255,255,0.05)', padding: '24px', borderRadius: '50%', marginBottom: '24px', color: '#fff' }}>
                <Award size={40} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>Certified Pre-Owned</h3>
              <p className="text-secondary text-sm">Every pre-owned device goes through our rigorous 50-point quality check.</p>
            </div>
            
            <div className="mockup-card" style={{ padding: '40px 32px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ background: 'rgba(255,255,255,0.05)', padding: '24px', borderRadius: '50%', marginBottom: '24px', color: '#fff' }}>
                <Wrench size={40} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>Expert Repair</h3>
              <p className="text-secondary text-sm">Our certified technicians use only genuine parts for all smartphone repairs.</p>
            </div>
            
            <div className="mockup-card" style={{ padding: '40px 32px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ background: 'rgba(255,255,255,0.05)', padding: '24px', borderRadius: '50%', marginBottom: '24px', color: '#fff' }}>
                <Zap size={40} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>Instant Exchange</h3>
              <p className="text-secondary text-sm">Get the best market value for your old device instantly when upgrading.</p>
            </div>
          </div>
        </div>
      </section>

      <QuickActions />
      <ShopByCategory />
      <TopBrands />
      <StatsBar />
    </>
  );
};

export default Home;
