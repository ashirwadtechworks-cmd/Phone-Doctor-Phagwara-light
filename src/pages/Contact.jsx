import React from 'react';
import { Phone, MapPin, Mail } from 'lucide-react';

const Instagram = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const Contact = () => {
  return (
    <>
      <div className="pt-32 pb-16 min-h-screen bg-pure text-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-12 font-heading text-center">
            CONTACT <span className="text-accent">US</span>
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Contact Info */}
            <div className="glass-panel p-8">
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <p className="text-gray-400 mb-8">
                Have a question about a repair, want to check stock for a specific device, or ready to sell your phone? Reach out to us directly or visit our store in Phagwara.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-full text-accent">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold">Phone / WhatsApp</h4>
                    <p className="text-gray-400 mt-1">+91 92162 22123</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-full text-accent">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold">Store Address</h4>
                    <p className="text-gray-400 mt-1">Phagwara, Punjab<br/>(Apple Authorised Store)</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-full text-accent">
                    <Instagram size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold">Instagram</h4>
                    <p className="text-gray-400 mt-1">@phone_doctor_phagwara</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="glass-panel p-8">
              <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Name</label>
                  <input type="text" className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:border-accent focus:outline-none transition-colors" placeholder="Your Name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Phone Number</label>
                  <input type="tel" className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:border-accent focus:outline-none transition-colors" placeholder="Your Phone Number" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Inquiry Type</label>
                  <select className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:border-accent focus:outline-none transition-colors appearance-none">
                    <option>Buy a Phone</option>
                    <option>Sell a Phone</option>
                    <option>Repair Service</option>
                    <option>Other Inquiry</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Message</label>
                  <textarea rows="4" className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:border-accent focus:outline-none transition-colors" placeholder="How can we help you?"></textarea>
                </div>
                <button type="submit" className="w-full bg-accent hover:bg-red-700 text-white font-bold py-3 px-4 rounded-lg transition-colors mt-4">
                  Send Message
                </button>
              </form>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
