import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, ArrowRight } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    alert("Thank you for your message! Our team will get back to you shortly.");
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <div className="pt-32 pb-24 bg-white">
      <section className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Info Side */}
          <div className="lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-8 text-gray-900">Let's <span className="text-gradient">Connect</span></h1>
              <p className="text-xl text-gray-600 mb-12">
                Have a vision? Let's turn it into reality. Reach out to us for a personalized marketing strategy.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary/10 transition-colors">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">Email Us</h4>
                    <a href="mailto:info@garvikindia.com" className="text-gray-600 hover:text-primary transition-colors">info@garvikindia.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary/10 transition-colors">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">Our Offices</h4>
                    <p className="text-gray-600">Unit No.36, Town Central Mall,</p>
                    <p className="text-gray-600">Greater Noida (West) - 201308</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Form Side */}
          <div className="lg:w-2/3">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="p-8 md:p-12 rounded-3xl bg-gray-50 border border-gray-100 shadow-xl relative overflow-hidden"
            >
              {/* Decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10 -mr-32 -mt-32"></div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-bold text-gray-700">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-bold text-gray-700">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-bold text-gray-700">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none"
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-bold text-gray-700">Your Message</label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="btn btn-primary w-full py-4 flex items-center justify-center gap-3 text-lg group"
                >
                  Send Message <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="container mx-auto px-4 md:px-6 mt-24">
        <div className="w-full h-96 rounded-3xl bg-gray-50 border border-gray-200 overflow-hidden relative group shadow-inner">
           <img 
              src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1200" 
              className="w-full h-full object-cover opacity-20 grayscale group-hover:opacity-40 transition-opacity" 
              alt="Map Location" 
           />
           <div className="absolute inset-0 flex items-center justify-center">
             <div className="p-6 rounded-2xl glass-card text-center bg-white shadow-xl border-gray-100">
               <MapPin className="w-10 h-10 text-primary mx-auto mb-4" />
               <h3 className="text-xl font-bold mb-2 text-gray-900">Visit Our Office</h3>
               <p className="text-gray-600 font-semibold">Unit No.36, Town Central Mall, Greater Noida (West)</p>
               <button className="mt-4 text-primary flex items-center gap-2 mx-auto font-bold hover:underline">
                 Get Directions <ArrowRight size={16} />
               </button>
             </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
