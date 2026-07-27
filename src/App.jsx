import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <FeaturedProducts />
        <Services />
        <WhyChooseUs />
      </main>
      <Footer />
    </div>
  );
}

export default App;
