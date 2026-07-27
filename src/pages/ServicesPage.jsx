import React from 'react';
import { ArrowRight, Wrench, RefreshCcw, DollarSign } from 'lucide-react';

const ServicesPage = () => {
  return (
    <>
      <div className="pt-32 pb-16 min-h-screen bg-pure text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
              OUR <span className="text-accent">SERVICES</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Whether you're looking to upgrade, cash in on your old device, or get a professional repair, Phone Doctor Phagwara provides seamless, transparent, and premium services.
            </p>
          </div>

          {/* Buy Sell Exchange Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8 font-heading text-center">BUY. SELL. EXCHANGE.</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              <div className="glass-panel p-8 text-center hover:border-white/20 transition-colors">
                <div className="w-16 h-16 mx-auto bg-white/5 rounded-full flex items-center justify-center mb-6">
                  <DollarSign size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Sell Your Phone</h3>
                <p className="text-gray-400 text-sm mb-6">
                  Get the best market value for your old device instantly. We offer secure data wiping and immediate payment.
                </p>
                <button className="text-accent font-bold text-sm flex items-center justify-center gap-2 mx-auto hover:text-white transition-colors">
                  GET A QUOTE <ArrowRight size={16} />
                </button>
              </div>

              <div className="glass-panel p-8 text-center border-accent/30 relative overflow-hidden">
                <div className="absolute inset-0 bg-accent/5 pointer-events-none"></div>
                <div className="w-16 h-16 mx-auto bg-accent/20 rounded-full flex items-center justify-center mb-6">
                  <RefreshCcw size={32} className="text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-4">Exchange & Upgrade</h3>
                <p className="text-gray-400 text-sm mb-6">
                  Trade in your current phone and apply its value towards any new or certified pre-owned device in our store.
                </p>
                <button className="bg-accent text-white px-6 py-2 rounded-lg font-bold text-sm hover:bg-red-700 transition-colors">
                  UPGRADE NOW
                </button>
              </div>

              <div className="glass-panel p-8 text-center hover:border-white/20 transition-colors">
                <div className="w-16 h-16 mx-auto bg-white/5 rounded-full flex items-center justify-center mb-6">
                  <span className="text-3xl">📱</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Buy Pre-Owned</h3>
                <p className="text-gray-400 text-sm mb-6">
                  Purchase fully certified, tested, and warranty-backed pre-owned smartphones at unbeatable prices.
                </p>
                <button className="text-accent font-bold text-sm flex items-center justify-center gap-2 mx-auto hover:text-white transition-colors">
                  VIEW INVENTORY <ArrowRight size={16} />
                </button>
              </div>

            </div>
          </div>

          {/* Repair Section */}
          <div className="glass-panel p-8 md:p-12 relative overflow-hidden">
            <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
            
            <div className="flex flex-col md:flex-row items-center gap-12 relative z-10">
              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-4 font-heading flex items-center gap-4">
                  <Wrench size={32} className="text-accent" /> EXPERT REPAIR
                </h2>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Screen shattered? Battery draining fast? Water damage? Our certified expert technicians handle repairs for all major brands using original parts.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-sm"><span className="w-1.5 h-1.5 bg-accent rounded-full"></span> Broken Screen Replacement</li>
                  <li className="flex items-center gap-3 text-sm"><span className="w-1.5 h-1.5 bg-accent rounded-full"></span> Battery Replacement</li>
                  <li className="flex items-center gap-3 text-sm"><span className="w-1.5 h-1.5 bg-accent rounded-full"></span> Camera & Lens Repair</li>
                  <li className="flex items-center gap-3 text-sm"><span className="w-1.5 h-1.5 bg-accent rounded-full"></span> Software Troubleshooting</li>
                </ul>
                <button className="btn-mockup-outline">
                  BOOK REPAIR APPOINTMENT
                </button>
              </div>
              
              <div className="flex-1 w-full flex justify-center">
                <div className="w-full max-w-sm h-64 bg-black/50 border border-white/10 rounded-2xl flex items-center justify-center shadow-2xl">
                  <span className="text-6xl opacity-50">🛠️</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default ServicesPage;
