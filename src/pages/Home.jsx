import React from 'react';
import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <Services />
      <WhyChooseUs />
    </>
  );
};

export default Home;
