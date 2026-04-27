import React from 'react';
import { motion } from 'framer-motion';

const clientLogos = [
  '/images/clients/x5xxxc.webp',
  '/images/clients/x1.webp',
  '/images/clients/x3.webp',
  '/images/clients/x4.webp',
  '/images/clients/x5.webp',
  '/images/clients/x6.webp',
  '/images/clients/x7.webp',
  '/images/clients/x8.webp',
  '/images/clients/x9.webp',
  '/images/clients/x10.webp'
];

const ClientsSection = () => {
  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Happy <span className="text-primary">Clients</span></h2>
        <p className="text-gray-500">Trusted by leading brands across industries.</p>
      </div>
      
      <div className="flex overflow-hidden">
        <motion.div 
          className="flex space-x-12 whitespace-nowrap"
          animate={{ x: [0, -1000] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {[...clientLogos, ...clientLogos].map((logo, index) => (
            <div key={index} className="flex-shrink-0 w-40 h-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
              <img src={logo} alt="Client Logo" className="max-w-full max-h-full object-contain" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsSection;
