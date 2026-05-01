import React from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const EnquiryForm = () => {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -mr-64 -mt-64"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Expert <br /><span className="text-cursive mt-2 block">Consultation</span></h2>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Whether it is a first-time entrepreneur launching a new product or a brand looking to scale, Garvik India becomes part of your launch team. Leave a message and let's start your impact journey.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">True Partnership</h4>
                    <p className="text-sm text-gray-500">Not just transactional work, we treat you like family.</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                    <span className="text-2xl">🧠</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Strategic Mentorship</h4>
                    <p className="text-sm text-gray-500">Guiding you on what to avoid and how to grow sustainably.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-purple-50/50 p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-primary/10 border border-purple-100/50"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Leave a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                    <input type="text" className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                    <input type="email" className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" placeholder="john@example.com" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Phone No</label>
                    <input type="tel" className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" placeholder="+91 00000 00000" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Service Interest</label>
                    <select className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all">
                      <option>Select Service</option>
                      <option>Digital Marketing</option>
                      <option>Brand Identity</option>
                      <option>PR & Events</option>
                      <option>Ad Films</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Your Message</label>
                  <textarea rows="4" className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" placeholder="Tell us about your brand..."></textarea>
                </div>
                
                <button type="submit" className="w-full btn btn-primary flex items-center justify-center gap-2 py-4">
                  Send Enquiry <Send size={18} />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnquiryForm;
