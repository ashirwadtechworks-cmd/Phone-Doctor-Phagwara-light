import React from 'react';
import { ShoppingCart } from 'lucide-react';

const products = [
  { id: 1, name: 'iPhone 15 Pro Max', brand: 'Apple', price: '₹1,59,900', img: '📱' },
  { id: 2, name: 'Samsung Galaxy S24 Ultra', brand: 'Samsung', price: '₹1,29,999', img: '📱' },
  { id: 3, name: 'OnePlus 12', brand: 'OnePlus', price: '₹64,999', img: '📱' },
  { id: 4, name: 'iPhone 14', brand: 'Apple', price: '₹69,900', img: '📱' },
  { id: 5, name: 'Nothing Phone (2)', brand: 'Nothing', price: '₹39,999', img: '📱' },
  { id: 6, name: 'Vivo X100 Pro', brand: 'Vivo', price: '₹89,999', img: '📱' },
];

const Phones = () => {
  return (
    <>
      <div className="page-wrapper">
        <div className="container">
          <div className="flex-responsive justify-between items-center mb-12">
            <h1 className="page-title" style={{ marginBottom: 0 }}>
              NEW <span className="text-accent">SMARTPHONES</span>
            </h1>
            <div className="flex-row gap-4 mt-6" style={{ overflowX: 'auto', paddingBottom: '8px' }}>
              <button className="btn-filter active">All Brands</button>
              <button className="btn-filter">Apple</button>
              <button className="btn-filter">Samsung</button>
              <button className="btn-filter">OnePlus</button>
            </div>
          </div>

          <div className="grid-3">
            {products.map((product) => (
              <div key={product.id} className="mockup-card p-6 flex-col relative overflow-hidden" style={{ cursor: 'pointer' }}>
                <div className="absolute z-10" style={{ top: '16px', right: '16px', background: 'rgba(255,255,255,0.1)', padding: '4px 12px', borderRadius: '99px', fontSize: '0.75rem', fontWeight: 500, backdropFilter: 'blur(8px)' }}>
                  {product.brand}
                </div>
                
                <div className="product-image-box mb-6">
                   <span style={{ fontSize: '5rem', opacity: 0.8, transition: 'transform 0.5s' }}>{product.img}</span>
                </div>
                
                <div className="flex-1 flex-col">
                  <h3 className="text-xl font-bold mb-2 font-heading">{product.name}</h3>
                  <div className="flex-row justify-between items-center mt-auto" style={{ paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                    <div>
                      <p className="text-xs text-secondary mb-1">Starting from</p>
                      <p className="text-xl font-bold text-accent">{product.price}</p>
                    </div>
                    <button style={{ background: 'rgba(255,255,255,0.1)', border: 'none', color: '#fff', padding: '12px', borderRadius: '8px', cursor: 'pointer', transition: 'background 0.3s' }}>
                      <ShoppingCart size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Phones;
