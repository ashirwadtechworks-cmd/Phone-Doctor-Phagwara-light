import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Phones from './pages/Phones';
import PreOwned from './pages/PreOwned';
import ServicesPage from './pages/ServicesPage';
import Accessories from './pages/Accessories';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import { ThemeProvider } from './context/ThemeContext';
import './App.css';

// Simple component to scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Mouse Glow Effect Component
const MouseGlow = () => {
  const [position, setPosition] = useState({ x: -1000, y: -1000 });
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="mouse-glow-container" style={{ opacity: position.x === -1000 ? 0 : 1 }}>
      <div 
        className="mouse-glow"
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <div className="app-container relative">
        <div className="noise-overlay"></div>
        <MouseGlow />
        <ScrollToTop />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/phones" element={<Phones />} />
            <Route path="/pre-owned" element={<PreOwned />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/accessories" element={<Accessories />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
