import React from 'react';
import { motion } from 'framer-motion';

const BrandIdentityBanner = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&q=80&w=1920" 
          alt="Brand Identity" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/80"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Give Your Brand An <span className="text-gradient">Identity</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            A robust corporate identity, coupled with a meticulously crafted brand identity strategy, forms the cornerstone of a compelling brand image. Our mission is to establish and cultivate this brand image on your behalf, ensuring you secure a prominent foothold in the market.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BrandIdentityBanner;
