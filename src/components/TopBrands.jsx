import React from 'react';
import { Apple } from 'lucide-react';
import { motion } from 'framer-motion';

const TopBrands = () => {
  const brands = [
    { name: 'Apple', logo: <Apple size={40} />, color: '#ffffff' },
    { name: 'Samsung', logo: <span style={{ fontWeight: 800, fontSize: '1.5rem', letterSpacing: '-1px' }}>SAMSUNG</span>, color: '#1428A0' },
    { name: 'Google Pixel', logo: <span style={{ fontWeight: 700, fontSize: '1.5rem' }}>G</span>, color: '#4285F4' },
    { name: 'OnePlus', logo: <span style={{ fontWeight: 800, fontSize: '1.5rem' }}>1+</span>, color: '#EB0029' },
    { name: 'Nothing', logo: <span style={{ fontFamily: 'monospace', fontWeight: 700, fontSize: '1.5rem', letterSpacing: '2px' }}>NOTHING</span>, color: '#ffffff' },
    { name: 'Vivo', logo: <span style={{ fontWeight: 800, fontSize: '1.5rem', fontStyle: 'italic' }}>vivo</span>, color: '#415FFF' },
    { name: 'Oppo', logo: <span style={{ fontWeight: 800, fontSize: '1.5rem' }}>oppo</span>, color: '#006B4D' },
    { name: 'Xiaomi', logo: <span style={{ fontWeight: 800, fontSize: '1.5rem' }}>mi</span>, color: '#FF6900' },
    { name: 'Realme', logo: <span style={{ fontWeight: 800, fontSize: '1.5rem' }}>realme</span>, color: '#FFC915' },
    { name: 'Motorola', logo: <span style={{ fontWeight: 800, fontSize: '1.5rem' }}>motorola</span>, color: '#001489' },
    { name: 'POCO', logo: <span style={{ fontWeight: 800, fontSize: '1.5rem' }}>POCO</span>, color: '#FFDD00' },
    { name: 'Tecno', logo: <span style={{ fontWeight: 800, fontSize: '1.5rem' }}>TECNO</span>, color: '#0058C9' },
    { name: 'Infinix', logo: <span style={{ fontWeight: 800, fontSize: '1.5rem' }}>Infinix</span>, color: '#00C853' },
    { name: 'Honor', logo: <span style={{ fontWeight: 800, fontSize: '1.5rem' }}>HONOR</span>, color: '#000000', outline: true },
    { name: 'iQOO', logo: <span style={{ fontWeight: 800, fontSize: '1.5rem', fontStyle: 'italic' }}>iQOO</span>, color: '#FF7D00' },
  ];

  // Duplicate the brands array to create a seamless infinite loop
  const marqueeBrands = [...brands, ...brands];

  return (
    <section className="top-brands-section" style={{ padding: '120px 0', position: 'relative', overflow: 'hidden' }}>
      
      {/* Subtle background glow */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '80%', height: '80%', background: 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 60%)', zIndex: 0, pointerEvents: 'none' }}></div>
      
      <div className="container relative z-10">
        <motion.div 
          style={{ textAlign: 'center', marginBottom: '60px' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="brands-title" style={{ fontSize: '2rem', marginBottom: '16px' }}>FEATURED <span className="text-accent">BRANDS</span></h2>
          <p className="text-secondary text-lg" style={{ maxWidth: '600px', margin: '0 auto' }}>Experience the absolute pinnacle of smartphone technology from the world's most innovative companies.</p>
        </motion.div>
      </div>

      <div className="marquee-container relative z-10" style={{ 
        width: '100%', 
        overflow: 'hidden', 
        padding: '20px 0',
        display: 'flex',
        maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
      }}>
        <motion.div 
          style={{ display: 'flex', gap: '24px', paddingLeft: '24px' }}
          animate={{ x: [0, -3060] }} // 15 items * (180px width + 24px gap)
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          }}
        >
          {marqueeBrands.map((brand, idx) => (
            <div 
              key={idx} 
              className="mockup-card brand-card" 
              style={{ 
                minWidth: '180px',
                padding: '32px 24px', 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                justifyContent: 'center',
                cursor: 'pointer',
                '--brand-color': brand.color,
                background: 'var(--bg-card)',
                borderRadius: '16px',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                transition: 'all 0.4s ease'
              }}
            >
              <div className="brand-logo-wrapper" style={{ 
                marginBottom: '16px', 
                color: brand.outline ? '#fff' : 'var(--text-secondary)',
                transition: 'color 0.4s ease'
              }}>
                {brand.logo}
              </div>
              <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-secondary)', transition: 'color 0.4s ease' }} className="brand-name-text">{brand.name}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Add specific CSS block for marquee math if needed */}
      <style>{`
        .marquee-container > div {
          /* Fallback width calculation */
          width: max-content;
        }
      `}</style>
    </section>
  );
};

export default TopBrands;
