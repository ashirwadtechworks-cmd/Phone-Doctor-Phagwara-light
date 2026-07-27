import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import './FeaturedProducts.css';

const categories = ['New Phones', 'Certified Pre-Owned', 'Best Deals', 'Today\'s Offers'];
const brands = ['Apple', 'Samsung', 'Nothing', 'OnePlus', 'Google Pixel'];

const mockProducts = [
  { id: 1, name: 'iPhone 15 Pro Max', price: '₹1,59,900', category: 'New Phones', image: '📱', brand: 'Apple', tag: 'Bestseller' },
  { id: 2, name: 'Samsung Galaxy S24 Ultra', price: '₹1,29,999', category: 'New Phones', image: '📱', brand: 'Samsung' },
  { id: 3, name: 'Nothing Phone (2)', price: '₹44,999', category: 'New Phones', image: '📱', brand: 'Nothing' },
  { id: 4, name: 'iPhone 13 Pro', price: '₹55,000', category: 'Certified Pre-Owned', image: '📱', brand: 'Apple', tag: 'Like New' },
];

const FeaturedProducts = () => {
  const [activeTab, setActiveTab] = useState('New Phones');

  const filteredProducts = mockProducts.filter(p => p.category === activeTab);

  return (
    <section className="featured-section section-padding" id="phones">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured <span className="text-gradient">Smartphones</span></h2>
          <p className="section-desc">Discover our handpicked selection of premium devices.</p>
        </div>

        <div className="brands-carousel">
          <div className="brands-track">
            {[...brands, ...brands, ...brands].map((brand, index) => (
              <div key={index} className="brand-item glass">
                {brand}
              </div>
            ))}
          </div>
        </div>

        <div className="tabs-container">
          {categories.map(cat => (
            <button 
              key={cat} 
              className={`tab-btn ${activeTab === cat ? 'active' : ''}`}
              onClick={() => setActiveTab(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="products-grid">
          {filteredProducts.map(product => (
            <div key={product.id} className="product-card glass-panel">
              {product.tag && <div className="product-tag">{product.tag}</div>}
              <div className="product-img-wrapper">
                <span className="product-placeholder">{product.image}</span>
              </div>
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-brand">{product.brand}</p>
                <div className="product-footer">
                  <span className="product-price">{product.price}</span>
                  <button className="btn-buy">
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
          {filteredProducts.length === 0 && (
            <div className="empty-state glass">
              <p>More products coming soon to this category.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
