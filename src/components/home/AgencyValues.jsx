import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Sparkles, Handshake, HeartHandshake, Eye, Rocket } from 'lucide-react';

const values = [
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: "Creative Integrity",
    description: "Bridging the gap between brand identity and consumer perception through bold, honest creativity.",
    color: "from-purple-500 to-indigo-600"
  },
  {
    icon: <HeartHandshake className="w-8 h-8" />,
    title: "True Partnership",
    description: "We don't just execute projects; we become part of your growth story as lifelong companions.",
    color: "from-pink-500 to-rose-600"
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: "Impactful Growth",
    description: "Focusing on tangible business outcomes and scaling visions into market-leading brands.",
    color: "from-blue-500 to-cyan-600"
  }
];

const AgencyValues = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
              Our Core <span className="text-gradient">Principles</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg font-medium">
              Creating a legacy of trust and entrepreneurial success since 2017.
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-10 rounded-[2.5rem] bg-gray-50 hover:bg-white border border-transparent hover:border-primary/20 shadow-sm hover:shadow-2xl transition-all duration-500 group"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-8 text-white shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                {value.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed font-medium">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgencyValues;
