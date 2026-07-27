import React from 'react';
import { CheckCircle, Shield, Battery, Settings, Search } from 'lucide-react';

const preOwnedProducts = [
  { id: 1, name: 'iPhone 13 Pro', storage: '256GB', condition: 'Excellent', price: '₹55,000', battery: '92%' },
  { id: 2, name: 'iPhone 14', storage: '128GB', condition: 'Like New', price: '₹48,000', battery: '98%' },
  { id: 3, name: 'Samsung S23 Ultra', storage: '256GB', condition: 'Good', price: '₹75,000', battery: '90%' },
  { id: 4, name: 'iPhone 12', storage: '128GB', condition: 'Fair', price: '₹32,000', battery: '85%' },
];

const PreOwned = () => {
  return (
    <>
      <div className="pt-32 pb-16 min-h-screen bg-pure text-white">
        
        {/* Header Section with Red Gradient */}
        <div className="relative mb-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-accent/30 to-black pointer-events-none"></div>
          <div className="container mx-auto px-4 py-16 relative z-10 border-y border-accent/20 bg-black/40 backdrop-blur-sm">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 font-heading">
                CERTIFIED <span className="text-accent">PRE-OWNED</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Like New. Better Price. Rigorously tested devices backed by our quality guarantee.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <CheckCircle size={16} className="text-accent" /> 50-Point Check
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Shield size={16} className="text-accent" /> Warranty Included
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Battery size={16} className="text-accent" /> Verified Battery
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Settings size={16} className="text-accent" /> Original Parts
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
            <h2 className="text-2xl font-bold">Available Devices</h2>
            <div className="relative w-full md:w-64">
              <input 
                type="text" 
                placeholder="Search models..." 
                className="w-full bg-white/5 border border-white/10 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-accent"
              />
              <Search size={16} className="absolute left-4 top-2.5 text-gray-400" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {preOwnedProducts.map(device => (
              <div key={device.id} className="mockup-card p-5 relative overflow-hidden group">
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-accent/20 rounded-full blur-xl group-hover:bg-accent/40 transition-colors"></div>
                
                <div className="flex justify-between items-start mb-6 relative z-10">
                  <span className={`text-xs font-bold px-2 py-1 rounded bg-white/10 ${device.condition === 'Like New' ? 'text-green-400' : 'text-gray-300'}`}>
                    {device.condition}
                  </span>
                  <span className="text-xs text-gray-400 flex items-center gap-1">
                    <Battery size={12} className="text-accent" /> {device.battery}
                  </span>
                </div>
                
                <div className="h-32 flex items-center justify-center mb-4 relative z-10">
                  <span className="text-6xl group-hover:scale-110 transition-transform">📱</span>
                </div>
                
                <div className="relative z-10">
                  <h3 className="font-bold text-lg">{device.name}</h3>
                  <p className="text-sm text-gray-400 mb-4">{device.storage}</p>
                  
                  <div className="flex justify-between items-center pt-4 border-t border-white/10">
                    <span className="font-bold text-xl text-white">{device.price}</span>
                    <button className="text-xs font-bold text-accent hover:text-white transition-colors">VIEW DETAILS</button>
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

export default PreOwned;
