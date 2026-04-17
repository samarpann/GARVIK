import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Share2, Megaphone, Smartphone } from 'lucide-react';

const services = [
  {
    title: "Branding & Identity",
    description: "Defining your unique brand voice and visual identity that resonates with your target audience.",
    icon: <Palette className="w-6 h-6" />
  },
  {
    title: "Creative Design",
    description: "Visually stunning assets across all platforms, from social media to high-end website experiences.",
    icon: <Palette className="w-6 h-6" />
  },
  {
    title: "Media Planning",
    description: "Strategic placement across diverse channels to maximize reach and ROI for every marketing dollar.",
    icon: <Megaphone className="w-6 h-6" />
  },
  {
    title: "Influencer Marketing",
    description: "Connecting brands with influential voices to build trust and drive authentic engagement.",
    icon: <Users className="w-6 h-6" />
  }
];

const WhatWeDo = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-gray-900">
                Empowering Brands Through <br />
                <span className="text-primary">Creative Excellence</span>
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                Explore our comprehensive suite of integrated marketing solutions designed to elevate your business in the digital landscape.
              </p>
              
              <div className="space-y-6">
                {services.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="mt-1 w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">{item.title}</h4>
                      <p className="text-sm text-gray-500">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-3xl overflow-hidden glass-card p-2 bg-gray-50 border-gray-200"
            >
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" 
                alt="Creative Agency" 
                className="rounded-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent"></div>
              
              {/* Floating Element */}
              <div className="absolute -bottom-6 -right-6 glass-card p-6 border border-primary/10 glow animate-bounce-subtle bg-white shadow-xl">
                <div className="text-3xl font-bold text-gray-900 mb-1">98%</div>
                <div className="text-sm text-gray-500 uppercase tracking-tighter font-bold">Client Satisfaction</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Add this to index.css or common styles
const subComponentsStyles = `
@keyframes bounce-subtle {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
.animate-bounce-subtle {
  animation: bounce-subtle 3s ease-in-out infinite;
}
`;

export default WhatWeDo;
import { CheckCircle2, Users } from 'lucide-react';
