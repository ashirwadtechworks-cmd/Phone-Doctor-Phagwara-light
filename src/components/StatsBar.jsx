import React, { useEffect, useRef } from 'react';
import { Star, ShieldCheck, Smile, Award } from 'lucide-react';

const InstagramIcon = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);
import { motion, useInView, useAnimation, animate } from 'framer-motion';

// Framer Motion Animated Counter
const AnimatedCounter = ({ endValue, duration = 2, suffix = "", prefix = "", decimal = false }) => {
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView && nodeRef.current) {
      const controls = animate(0, endValue, {
        duration: duration,
        ease: "easeOut",
        onUpdate(value) {
          if (nodeRef.current) {
            nodeRef.current.textContent = prefix + (decimal ? value.toFixed(1) : Math.floor(value)) + suffix;
          }
        },
      });
      return () => controls.stop();
    }
  }, [endValue, duration, isInView, suffix, prefix, decimal]);

  return (
    <span ref={nodeRef} className="stat-value" style={{ fontSize: '3rem', fontWeight: 700, fontFamily: 'var(--font-heading)', color: '#fff', letterSpacing: '-1px' }}>
      {prefix}0{suffix}
    </span>
  );
};

const StatsBar = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section className="stats-bar-section" style={{ padding: '120px 0', position: 'relative' }}>
      
      {/* Cinematic Red Spotlight Behind Stats */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '100%', maxWidth: '800px', height: '300px', background: 'radial-gradient(ellipse, rgba(227, 6, 19, 0.15) 0%, transparent 70%)', filter: 'blur(60px)', zIndex: 0, pointerEvents: 'none' }}></div>
      
      <div className="container relative z-10">
        <motion.div 
          className="stats-grid mockup-card" 
          style={{ padding: '60px 40px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '40px', background: 'rgba(10, 10, 10, 0.8)' }}
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          
          <motion.div variants={itemVariants} className="stat-item" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <div style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.02))', border: '1px solid rgba(255,255,255,0.05)', padding: '20px', borderRadius: '50%', marginBottom: '20px', color: '#fff' }}>
              <InstagramIcon size={32} />
            </div>
            <AnimatedCounter endValue={149} suffix="K+" />
            <span style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginTop: '8px', textTransform: 'uppercase', letterSpacing: '1px' }}>Instagram Community</span>
          </motion.div>
          
          <motion.div variants={itemVariants} className="stat-item" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <div style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.02))', border: '1px solid rgba(255,255,255,0.05)', padding: '20px', borderRadius: '50%', marginBottom: '20px', color: '#fff' }}>
              <Star size={32} />
            </div>
            <AnimatedCounter endValue={4.8} suffix="★" decimal={true} />
            <span style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginTop: '8px', textTransform: 'uppercase', letterSpacing: '1px' }}>Google Rating</span>
          </motion.div>
          
          <motion.div variants={itemVariants} className="stat-item" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <div style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.02))', border: '1px solid rgba(255,255,255,0.05)', padding: '20px', borderRadius: '50%', marginBottom: '20px', color: '#fff' }}>
              <Smile size={32} />
            </div>
            <AnimatedCounter endValue={10} suffix="K+" />
            <span style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginTop: '8px', textTransform: 'uppercase', letterSpacing: '1px' }}>Happy Customers</span>
          </motion.div>
          
          <motion.div variants={itemVariants} className="stat-item" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <div style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.02))', border: '1px solid rgba(255,255,255,0.05)', padding: '20px', borderRadius: '50%', marginBottom: '20px', color: '#fff' }}>
              <ShieldCheck size={32} />
            </div>
            <AnimatedCounter endValue={100} suffix="%" />
            <span style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginTop: '8px', textTransform: 'uppercase', letterSpacing: '1px' }}>Genuine Products</span>
          </motion.div>
          
          <motion.div variants={itemVariants} className="stat-item" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <div style={{ background: 'linear-gradient(135deg, rgba(227,6,19,0.2), rgba(227,6,19,0.05))', border: '1px solid rgba(227,6,19,0.3)', padding: '20px', borderRadius: '50%', marginBottom: '20px', color: 'var(--color-accent)' }}>
              <Award size={32} />
            </div>
            <AnimatedCounter endValue={100} suffix="%" />
            <span style={{ color: 'var(--color-accent)', fontSize: '0.875rem', marginTop: '8px', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600 }}>Certified Pre-Owned</span>
          </motion.div>
          
        </motion.div>
      </div>
    </section>
  );
};

export default StatsBar;
