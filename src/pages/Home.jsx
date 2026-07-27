import React from 'react';
import Hero from '../components/Hero';
import QuickActions from '../components/QuickActions';
import ShopByCategory from '../components/ShopByCategory';
import TopBrands from '../components/TopBrands';
import StatsBar from '../components/StatsBar';

const Home = () => {
  return (
    <>
      <Hero />
      <QuickActions />
      <ShopByCategory />
      <TopBrands />
      <StatsBar />
    </>
  );
};

export default Home;
