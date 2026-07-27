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
      <div className="pt-32 pb-16 min-h-screen bg-pure text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <h1 className="text-4xl font-bold font-heading">
              NEW <span className="text-accent">SMARTPHONES</span>
            </h1>
            <div className="flex gap-4 mt-6 md:mt-0 overflow-x-auto pb-2">
              <button className="px-6 py-2 rounded-full border border-accent bg-accent/10 text-white font-medium whitespace-nowrap">All Brands</button>
              <button className="px-6 py-2 rounded-full border border-white/20 hover:border-white/50 text-gray-400 hover:text-white transition-colors whitespace-nowrap">Apple</button>
              <button className="px-6 py-2 rounded-full border border-white/20 hover:border-white/50 text-gray-400 hover:text-white transition-colors whitespace-nowrap">Samsung</button>
              <button className="px-6 py-2 rounded-full border border-white/20 hover:border-white/50 text-gray-400 hover:text-white transition-colors whitespace-nowrap">OnePlus</button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="mockup-card p-6 flex flex-col group relative overflow-hidden">
                <div className="absolute top-4 right-4 bg-white/10 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-md z-10">
                  {product.brand}
                </div>
                
                <div className="h-64 flex items-center justify-center bg-black/40 rounded-xl mb-6 border border-white/5 group-hover:border-accent/30 transition-colors relative">
                   {/* Placeholder for phone image */}
                   <span className="text-8xl opacity-80 group-hover:scale-110 transition-transform duration-500">{product.img}</span>
                </div>
                
                <div className="flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-2 font-heading">{product.name}</h3>
                  <div className="flex justify-between items-end mt-auto pt-4 border-t border-white/10">
                    <div>
                      <p className="text-xs text-gray-400 mb-1">Starting from</p>
                      <p className="text-xl font-bold text-accent">{product.price}</p>
                    </div>
                    <button className="bg-white/10 hover:bg-accent hover:text-white p-3 rounded-lg transition-colors">
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
