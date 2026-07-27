import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import './ShopByCategory.css';

const ShopByCategory = () => {
  return (
    <section className="shop-category-section">
      <div className="container">
        
        <div className="category-grid">
          
          <Link to="/phones" className="category-card">
            <div className="cat-content">
              <h3 className="cat-title">NEW<br/>SMARTPHONES</h3>
              <p className="cat-desc">Explore Latest<br/>Models</p>
              <div className="cat-arrow">
                <ChevronRight size={16} />
              </div>
            </div>
            <div className="cat-img-placeholder">
              <span className="text-3xl">📱</span>
            </div>
          </Link>
          
          <Link to="/pre-owned" className="category-card cat-red">
            <div className="cat-content">
              <h3 className="cat-title">CERTIFIED<br/>PRE-OWNED</h3>
              <p className="cat-desc">Like New.<br/>Better Price.</p>
              <div className="cat-arrow">
                <ChevronRight size={16} />
              </div>
            </div>
            <div className="cat-img-placeholder">
              <span className="text-3xl">🛡️</span>
            </div>
          </Link>
          
          <Link to="/services" className="category-card">
            <div className="cat-content">
              <h3 className="cat-title">BUY<br/>SELL<br/>EXCHANGE</h3>
              <p className="cat-desc">Best Value<br/>for Your Device</p>
              <div className="cat-arrow">
                <ChevronRight size={16} />
              </div>
            </div>
            <div className="cat-img-placeholder">
              <span className="text-3xl">🔄</span>
            </div>
          </Link>
          
          <Link to="/services" className="category-card">
            <div className="cat-content">
              <h3 className="cat-title">REPAIR<br/>SERVICES</h3>
              <p className="cat-desc">Expert Care for<br/>Your Device</p>
              <div className="cat-arrow">
                <ChevronRight size={16} />
              </div>
            </div>
            <div className="cat-img-placeholder">
              <span className="text-3xl">🔧</span>
            </div>
          </Link>
          
          <Link to="/accessories" className="category-card">
            <div className="cat-content">
              <h3 className="cat-title">PREMIUM<br/>ACCESSORIES</h3>
              <p className="cat-desc">Genuine Accessories<br/>for Every Need</p>
              <div className="cat-arrow">
                <ChevronRight size={16} />
              </div>
            </div>
            <div className="cat-img-placeholder">
              <span className="text-3xl">🎧</span>
            </div>
          </Link>

        </div>
      </div>
    </section>
  );
};

export default ShopByCategory;
