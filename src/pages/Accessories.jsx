import React from 'react';

const accessories = [
  { id: 1, category: 'Audio', name: 'AirPods Pro (2nd Gen)', brand: 'Apple', price: '₹24,900', img: '🎧' },
  { id: 2, category: 'Wearables', name: 'Apple Watch Series 9', brand: 'Apple', price: '₹41,900', img: '⌚' },
  { id: 3, category: 'Power', name: '20W USB-C Power Adapter', brand: 'Apple', price: '₹1,900', img: '🔌' },
  { id: 4, category: 'Audio', name: 'Galaxy Buds2 Pro', brand: 'Samsung', price: '₹15,999', img: '🎧' },
  { id: 5, category: 'Wearables', name: 'Galaxy Watch6', brand: 'Samsung', price: '₹29,999', img: '⌚' },
  { id: 6, category: 'Protection', name: 'Silicone Case with MagSafe', brand: 'Apple', price: '₹4,900', img: '🛡️' },
];

const Accessories = () => {
  return (
    <>
      <div className="pt-32 pb-16 min-h-screen bg-pure text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold font-heading mb-4">
              PREMIUM <span className="text-accent">ACCESSORIES</span>
            </h1>
            <p className="text-gray-400">Genuine accessories for every need.</p>
            
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <button className="px-6 py-2 rounded-full border border-accent bg-accent/10 text-white font-medium text-sm">All</button>
              <button className="px-6 py-2 rounded-full border border-white/20 hover:border-white/50 text-gray-400 hover:text-white transition-colors text-sm">Audio</button>
              <button className="px-6 py-2 rounded-full border border-white/20 hover:border-white/50 text-gray-400 hover:text-white transition-colors text-sm">Wearables</button>
              <button className="px-6 py-2 rounded-full border border-white/20 hover:border-white/50 text-gray-400 hover:text-white transition-colors text-sm">Power & Cables</button>
              <button className="px-6 py-2 rounded-full border border-white/20 hover:border-white/50 text-gray-400 hover:text-white transition-colors text-sm">Protection</button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {accessories.map((item) => (
              <div key={item.id} className="mockup-card p-5 group flex flex-col cursor-pointer">
                <div className="bg-white/5 rounded-lg h-48 flex items-center justify-center mb-4 group-hover:bg-white/10 transition-colors">
                  <span className="text-6xl group-hover:scale-110 transition-transform">{item.img}</span>
                </div>
                <div className="flex-1 flex flex-col">
                  <span className="text-xs text-accent font-bold mb-1 uppercase tracking-wider">{item.category}</span>
                  <h3 className="font-bold mb-1 line-clamp-2">{item.name}</h3>
                  <p className="text-xs text-gray-400 mb-4">{item.brand}</p>
                  <div className="mt-auto flex justify-between items-center pt-3 border-t border-white/10">
                    <span className="font-bold">{item.price}</span>
                    <span className="text-xs font-bold text-gray-400 group-hover:text-white transition-colors">BUY NOW</span>
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

export default Accessories;
