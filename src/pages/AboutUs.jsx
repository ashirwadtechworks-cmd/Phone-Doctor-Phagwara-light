import React from 'react';

const AboutUs = () => {
  return (
    <>
      <div className="pt-32 pb-16 min-h-screen bg-pure text-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 font-heading">
            ABOUT <span className="text-accent">US</span>
          </h1>
          
          <div className="glass-panel p-8 md:p-12 mb-12">
            <h2 className="text-2xl font-bold mb-4">Phone Doctor Phagwara</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              We are Phagwara's premier destination for luxury smartphones, certified pre-owned devices, and expert repair services. As an Apple Authorised Store, we pride ourselves on delivering 100% genuine products and unparalleled customer service.
            </p>
            <p className="text-gray-400 mb-6 leading-relaxed">
              With over 149,000 followers on Instagram and a 4.8 Google rating from over 1,000 satisfied customers, our reputation speaks for itself. We believe in transparency, quality, and giving our customers the best value for their devices, whether they are buying, selling, or exchanging.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              <div className="border border-white/10 rounded-lg p-6 bg-white/5">
                <h3 className="text-xl font-bold text-accent mb-2">10K+</h3>
                <p className="text-sm text-gray-400">Happy Customers</p>
              </div>
              <div className="border border-white/10 rounded-lg p-6 bg-white/5">
                <h3 className="text-xl font-bold text-accent mb-2">100%</h3>
                <p className="text-sm text-gray-400">Genuine Products</p>
              </div>
              <div className="border border-white/10 rounded-lg p-6 bg-white/5">
                <h3 className="text-xl font-bold text-accent mb-2">Expert</h3>
                <p className="text-sm text-gray-400">Technicians</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
