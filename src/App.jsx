import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Phones from './pages/Phones';
import PreOwned from './pages/PreOwned';
import ServicesPage from './pages/ServicesPage';
import Accessories from './pages/Accessories';
import './App.css';

// Simple component to scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <div className="app-container">
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/phones" element={<Phones />} />
          <Route path="/pre-owned" element={<PreOwned />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/accessories" element={<Accessories />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
