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
      <div className="page-wrapper" style={{ backgroundColor: '#f8f9fa', minHeight: '100vh', paddingTop: '100px' }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          <h1 className="page-title-large font-heading font-bold mb-12 text-center" style={{ color: '#212121', fontSize: '2.5rem' }}>
            Contact <span style={{ color: '#42c8b7' }}>Us</span>
          </h1>
          
          <div className="grid-2">
            
            {/* Contact Info */}
            <div style={{ background: '#fff', border: '1px solid #e0e0e0', borderRadius: '8px', padding: '32px' }}>
              <h2 className="text-2xl font-bold mb-6" style={{ color: '#212121' }}>Get in Touch</h2>
              <p className="text-secondary mb-8" style={{ lineHeight: '1.6', color: '#878787' }}>
                Have a question about a repair, want to check stock for a specific device, or ready to sell your phone? Reach out to us directly or visit our store in Phagwara.
              </p>
              
              <div className="flex-col gap-6">
                <a href="https://wa.me/919216222123" target="_blank" rel="noopener noreferrer" className="flex-row items-start gap-4" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div style={{ background: '#e6f8f5', padding: '12px', borderRadius: '50%', color: '#42c8b7' }}>
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold" style={{ color: '#212121' }}>Phone / WhatsApp</h4>
                    <p className="text-secondary mt-1" style={{ color: '#4a4a4a' }}>+91 92162 22123</p>
                  </div>
                </a>
                
                <a href="https://maps.google.com/?q=Phagwara,+Punjab" target="_blank" rel="noopener noreferrer" className="flex-row items-start gap-4" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div style={{ background: '#e6f8f5', padding: '12px', borderRadius: '50%', color: '#42c8b7' }}>
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold" style={{ color: '#212121' }}>Store Address</h4>
                    <p className="text-secondary mt-1" style={{ color: '#4a4a4a' }}>Phagwara, Punjab<br/>(Apple Authorised Store)</p>
                  </div>
                </a>
                
                <a href="https://instagram.com/phone_doctor_phagwara" target="_blank" rel="noopener noreferrer" className="flex-row items-start gap-4" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div style={{ background: '#e6f8f5', padding: '12px', borderRadius: '50%', color: '#42c8b7' }}>
                    <Instagram size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold" style={{ color: '#212121' }}>Instagram</h4>
                    <p className="text-secondary mt-1" style={{ color: '#4a4a4a' }}>@phone_doctor_phagwara</p>
                  </div>
                </a>
              </div>
            </div>
            
            {/* Contact Form */}
            <div style={{ background: '#fff', border: '1px solid #e0e0e0', borderRadius: '8px', padding: '32px' }}>
              <h2 className="text-2xl font-bold mb-6" style={{ color: '#212121' }}>Send a Message</h2>
              <form className="flex-col gap-4" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label" style={{ color: '#4a4a4a' }}>Name</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required style={{ width: '100%', padding: '12px', borderRadius: '4px', border: '1px solid #e0e0e0', background: '#f8f9fa', color: '#212121', outline: 'none' }} placeholder="Your Name" />
                </div>
                <div className="form-group">
                  <label className="form-label" style={{ color: '#4a4a4a' }}>Phone Number</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required style={{ width: '100%', padding: '12px', borderRadius: '4px', border: '1px solid #e0e0e0', background: '#f8f9fa', color: '#212121', outline: 'none' }} placeholder="Your Phone Number" />
                </div>
                <div className="form-group">
                  <label className="form-label" style={{ color: '#4a4a4a' }}>Inquiry Type</label>
                  <select name="type" value={formData.type} onChange={handleChange} style={{ width: '100%', padding: '12px', borderRadius: '4px', border: '1px solid #e0e0e0', background: '#f8f9fa', color: '#212121', outline: 'none' }}>
                    <option>Buy a Phone</option>
                    <option>Sell a Phone</option>
                    <option>Repair Service</option>
                    <option>Other Inquiry</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label" style={{ color: '#4a4a4a' }}>Message</label>
                  <textarea rows="4" name="message" value={formData.message} onChange={handleChange} required style={{ width: '100%', padding: '12px', borderRadius: '4px', border: '1px solid #e0e0e0', background: '#f8f9fa', color: '#212121', outline: 'none', resize: 'vertical' }} placeholder="How can we help you?"></textarea>
                </div>
                <button type="submit" className="btn-solid" style={{ width: '100%', marginTop: '16px', padding: '12px', background: '#42c8b7', color: '#fff', border: 'none', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' }}>
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
