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
            <h1 className="page-title" style={{ marginBottom: 0, color: '#212121', fontSize: '24px' }}>
              New <span style={{ color: '#42c8b7' }}>Smartphones</span>
            </h1>
            <div className="flex-row gap-4 mt-6" style={{ overflowX: 'auto', paddingBottom: '8px' }}>
              <button style={{ padding: '8px 16px', borderRadius: '20px', border: '1px solid #42c8b7', background: '#42c8b7', color: '#fff', cursor: 'pointer' }}>All Brands</button>
              <button style={{ padding: '8px 16px', borderRadius: '20px', border: '1px solid #e0e0e0', background: '#fff', color: '#4a4a4a', cursor: 'pointer' }}>Apple</button>
              <button style={{ padding: '8px 16px', borderRadius: '20px', border: '1px solid #e0e0e0', background: '#fff', color: '#4a4a4a', cursor: 'pointer' }}>Samsung</button>
              <button style={{ padding: '8px 16px', borderRadius: '20px', border: '1px solid #e0e0e0', background: '#fff', color: '#4a4a4a', cursor: 'pointer' }}>OnePlus</button>
            </div>
          </div>

          <div className="grid-3">
            {products.map((product) => (
              <div key={product.id} className="p-6 flex-col relative overflow-hidden" style={{ cursor: 'pointer', background: '#fff', borderRadius: '8px', border: '1px solid #e0e0e0', transition: 'box-shadow 0.2s' }} onMouseOver={(e) => e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)'} onMouseOut={(e) => e.currentTarget.style.boxShadow = 'none'}>
                <div className="absolute z-10" style={{ top: '16px', right: '16px', background: '#f8f9fa', padding: '4px 12px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 500, color: '#4a4a4a', border: '1px solid #e0e0e0' }}>
                  {product.brand}
                </div>
                
                <div className="product-image-box mb-6" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '160px' }}>
                   <span style={{ fontSize: '5rem', transition: 'transform 0.5s' }}>{product.img}</span>
                </div>
                
                <div className="flex-1 flex-col">
                  <h3 className="text-xl font-bold mb-2 font-heading" style={{ color: '#212121', fontSize: '16px' }}>{product.name}</h3>
                  <div className="flex-row justify-between items-center mt-auto" style={{ paddingTop: '16px', borderTop: '1px solid #e0e0e0' }}>
                    <div>
                      <p className="text-xs text-secondary mb-1" style={{ color: '#878787' }}>Starting from</p>
                      <p className="text-xl font-bold" style={{ color: '#212121' }}>{product.price}</p>
                    </div>
                    <button style={{ background: '#f8f9fa', border: '1px solid #e0e0e0', color: '#212121', padding: '8px', borderRadius: '8px', cursor: 'pointer', transition: 'background 0.3s' }} onMouseOver={(e) => e.currentTarget.style.background = '#e0e0e0'} onMouseOut={(e) => e.currentTarget.style.background = '#f8f9fa'}>
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
