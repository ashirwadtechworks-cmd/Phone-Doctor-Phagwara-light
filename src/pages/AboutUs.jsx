import React from 'react';

const AboutUs = () => {
  return (
    <>
      <div className="page-wrapper" style={{ backgroundColor: '#f8f9fa', minHeight: '100vh', paddingTop: '100px' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h1 className="page-title-large font-heading font-bold mb-8" style={{ color: '#212121', fontSize: '2.5rem' }}>
            About <span style={{ color: '#42c8b7' }}>Us</span>
          </h1>
          
          <div style={{ background: '#fff', border: '1px solid #e0e0e0', borderRadius: '8px', padding: '40px' }}>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#212121' }}>Phone Doctor Phagwara</h2>
            <p className="text-secondary mb-6" style={{ lineHeight: '1.6', color: '#4a4a4a' }}>
              We are Phagwara's premier destination for luxury smartphones, certified pre-owned devices, and expert repair services. As an Apple Authorised Store, we pride ourselves on delivering 100% genuine products and unparalleled customer service.
            </p>
            <p className="text-secondary mb-6" style={{ lineHeight: '1.6', color: '#4a4a4a' }}>
              With over 149,000 followers on Instagram and a 4.8 Google rating from over 1,000 satisfied customers, our reputation speaks for itself. We believe in transparency, quality, and giving our customers the best value for their devices, whether they are buying, selling, or exchanging.
            </p>
            
            <div className="grid-3 mt-8" style={{ gap: '24px' }}>
              <div className="p-6" style={{ background: '#f8f9fa', border: '1px solid #e0e0e0', borderRadius: '8px', textAlign: 'center' }}>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#42c8b7' }}>10K+</h3>
                <p className="text-sm" style={{ color: '#878787' }}>Happy Customers</p>
              </div>
              <div className="p-6" style={{ background: '#f8f9fa', border: '1px solid #e0e0e0', borderRadius: '8px', textAlign: 'center' }}>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#42c8b7' }}>100%</h3>
                <p className="text-sm" style={{ color: '#878787' }}>Genuine Products</p>
              </div>
              <div className="p-6" style={{ background: '#f8f9fa', border: '1px solid #e0e0e0', borderRadius: '8px', textAlign: 'center' }}>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#42c8b7' }}>Expert</h3>
                <p className="text-sm" style={{ color: '#878787' }}>Technicians</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
