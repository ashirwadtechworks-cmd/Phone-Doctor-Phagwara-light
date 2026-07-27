import React from 'react';

const AboutUs = () => {
  return (
    <>
      <div className="page-wrapper">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h1 className="page-title-large font-heading font-bold mb-8">
            ABOUT <span className="text-accent">US</span>
          </h1>
          
          <div className="glass-panel p-8 mb-12">
            <h2 className="text-2xl font-bold mb-4">Phone Doctor Phagwara</h2>
            <p className="text-secondary mb-6" style={{ lineHeight: '1.6' }}>
              We are Phagwara's premier destination for luxury smartphones, certified pre-owned devices, and expert repair services. As an Apple Authorised Store, we pride ourselves on delivering 100% genuine products and unparalleled customer service.
            </p>
            <p className="text-secondary mb-6" style={{ lineHeight: '1.6' }}>
              With over 149,000 followers on Instagram and a 4.8 Google rating from over 1,000 satisfied customers, our reputation speaks for itself. We believe in transparency, quality, and giving our customers the best value for their devices, whether they are buying, selling, or exchanging.
            </p>
            
            <div className="grid-3 mt-8" style={{ gap: '24px' }}>
              <div className="p-6" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}>
                <h3 className="text-xl font-bold text-accent mb-2">10K+</h3>
                <p className="text-sm text-secondary">Happy Customers</p>
              </div>
              <div className="p-6" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}>
                <h3 className="text-xl font-bold text-accent mb-2">100%</h3>
                <p className="text-sm text-secondary">Genuine Products</p>
              </div>
              <div className="p-6" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}>
                <h3 className="text-xl font-bold text-accent mb-2">Expert</h3>
                <p className="text-sm text-secondary">Technicians</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
