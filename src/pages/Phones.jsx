import React from 'react';
import FeaturedProducts from '../components/FeaturedProducts';

const Phones = () => {
  return (
    <div className="page-container" style={{ paddingTop: '100px', minHeight: '100vh' }}>
      <div className="container">
        <h1 className="section-title text-center mb-8">All <span className="text-gradient">Phones</span></h1>
        <p className="section-desc text-center mb-12">Browse our complete collection of the latest brand new smartphones.</p>
        
        {/* We reuse FeaturedProducts for now, but in a real app this would be a full grid with filters */}
        <FeaturedProducts />
      </div>
    </div>
  );
};

export default Phones;
