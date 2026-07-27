import React, { useEffect, useState, useRef } from 'react';
import { Star, ShieldCheck, Instagram, Smile } from 'lucide-react';
import './StatsBar.css';

// Animated Counter component
const AnimatedCounter = ({ endValue, duration = 2000, suffix = "", prefix = "", decimal = false }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (counterRef.current) {
      observer.observe(counterRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    let startTime = null;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function for smooth stop
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentVal = easeOutQuart * endValue;
      
      setCount(currentVal);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [isVisible, endValue, duration]);

  const displayValue = decimal ? count.toFixed(1) : Math.floor(count);

  return (
    <span ref={counterRef} className="stat-value">
      {prefix}{displayValue}{suffix}
    </span>
  );
};

const StatsBar = () => {
  return (
    <section className="stats-bar-section" style={{ padding: '80px 0' }}>
      <div className="container">
        <div className="stats-grid mockup-card" style={{ padding: '40px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '32px' }}>
          
          <div className="stat-item" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '16px', borderRadius: '50%', marginBottom: '16px', color: 'var(--color-accent)' }}>
              <Instagram size={32} />
            </div>
            <AnimatedCounter endValue={149} suffix="K+" />
            <span className="stat-text" style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginTop: '8px' }}>Instagram Community</span>
          </div>
          
          <div className="stat-item" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '16px', borderRadius: '50%', marginBottom: '16px', color: 'var(--color-accent)' }}>
              <Smile size={32} />
            </div>
            <AnimatedCounter endValue={10} suffix="K+" />
            <span className="stat-text" style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginTop: '8px' }}>Happy Customers</span>
          </div>
          
          <div className="stat-item" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '16px', borderRadius: '50%', marginBottom: '16px', color: 'var(--color-accent)' }}>
              <Star size={32} />
            </div>
            <AnimatedCounter endValue={4.8} suffix="★" decimal={true} />
            <span className="stat-text" style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginTop: '8px' }}>Google Rating</span>
          </div>
          
          <div className="stat-item" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '16px', borderRadius: '50%', marginBottom: '16px', color: 'var(--color-accent)' }}>
              <ShieldCheck size={32} />
            </div>
            <AnimatedCounter endValue={100} suffix="%" />
            <span className="stat-text" style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginTop: '8px' }}>Genuine Products</span>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
