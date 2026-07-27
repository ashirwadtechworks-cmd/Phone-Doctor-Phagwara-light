import React, { useState } from 'react';
import { Phone, MapPin, Mail } from 'lucide-react';

const Instagram = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    type: 'Buy a Phone',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Hi Phone Doctor,%0A%0AI am ${formData.name}.%0AMy Phone Number: ${formData.phone}%0A%0A*Inquiry*: ${formData.type}%0A*Message*: ${formData.message}`;
    window.open(`https://wa.me/919216222123?text=${text}`, '_blank');
  };

  return (
    <>
      <div className="page-wrapper">
        <div className="container" style={{ maxWidth: '1000px' }}>
          <h1 className="page-title-large font-heading font-bold mb-12 text-center">
            CONTACT <span className="text-accent">US</span>
          </h1>
          
          <div className="grid-2">
            
            {/* Contact Info */}
            <div className="glass-panel p-8">
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <p className="text-secondary mb-8" style={{ lineHeight: '1.6' }}>
                Have a question about a repair, want to check stock for a specific device, or ready to sell your phone? Reach out to us directly or visit our store in Phagwara.
              </p>
              
              <div className="flex-col gap-6">
                <a href="https://wa.me/919216222123" target="_blank" rel="noopener noreferrer" className="flex-row items-start gap-4" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div style={{ background: 'rgba(255,255,255,0.1)', padding: '12px', borderRadius: '50%', color: 'var(--color-accent)' }}>
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold">Phone / WhatsApp</h4>
                    <p className="text-secondary mt-1">+91 92162 22123</p>
                  </div>
                </a>
                
                <a href="https://maps.google.com/?q=Phagwara,+Punjab" target="_blank" rel="noopener noreferrer" className="flex-row items-start gap-4" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div style={{ background: 'rgba(255,255,255,0.1)', padding: '12px', borderRadius: '50%', color: 'var(--color-accent)' }}>
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold">Store Address</h4>
                    <p className="text-secondary mt-1">Phagwara, Punjab<br/>(Apple Authorised Store)</p>
                  </div>
                </a>
                
                <a href="https://instagram.com/phone_doctor_phagwara" target="_blank" rel="noopener noreferrer" className="flex-row items-start gap-4" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div style={{ background: 'rgba(255,255,255,0.1)', padding: '12px', borderRadius: '50%', color: 'var(--color-accent)' }}>
                    <Instagram size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold">Instagram</h4>
                    <p className="text-secondary mt-1">@phone_doctor_phagwara</p>
                  </div>
                </a>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="glass-panel p-8">
              <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
              <form className="flex-col gap-4" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label">Name</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required className="form-input" placeholder="Your Name" />
                </div>
                <div className="form-group">
                  <label className="form-label">Phone Number</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="form-input" placeholder="Your Phone Number" />
                </div>
                <div className="form-group">
                  <label className="form-label">Inquiry Type</label>
                  <select name="type" value={formData.type} onChange={handleChange} className="form-select">
                    <option>Buy a Phone</option>
                    <option>Sell a Phone</option>
                    <option>Repair Service</option>
                    <option>Other Inquiry</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Message</label>
                  <textarea rows="4" name="message" value={formData.message} onChange={handleChange} required className="form-textarea" placeholder="How can we help you?"></textarea>
                </div>
                <button type="submit" className="btn-solid" style={{ width: '100%', marginTop: '16px', padding: '12px' }}>
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
