import React from 'react';
import { motion } from 'framer-motion';

const clientLogos = Array.from({ length: 21 }, (_, i) => `/images/client-image/logos 2/${i + 1}.png`);

const LogoMarquee = ({ reverse = false, speed = 40 }) => {
  return (
    <div className="relative w-full overflow-hidden bg-white py-12 border-y border-gray-100">
      <div className="flex w-full">
        <motion.div
          animate={{
            x: reverse ? ["-50%", "0%"] : ["0%", "-50%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: speed,
              ease: "linear",
            },
          }}
          className="flex flex-none gap-16 items-center px-8"
        >
          {[...clientLogos, ...clientLogos].map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-40 md:w-64 h-28 flex items-center justify-center transition-all duration-500 hover:scale-110"
            >
              <img
                src={logo}
                alt={`Client Logo ${index}`}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
      
      {/* Gradient Overlays for smooth edges */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
    </div>
  );
};

export default LogoMarquee;
