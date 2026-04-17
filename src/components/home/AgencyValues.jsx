import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lightbulb, Users } from 'lucide-react';

const values = [
  {
    icon: <Shield className="w-8 h-8 text-primary-light" />,
    title: "Professional",
    description: "We maintain the highest standards of integrity and dedication in every campaign we execute."
  },
  {
    icon: <Lightbulb className="w-8 h-8 text-primary-light" />,
    title: "Creative Insight",
    description: "Bridging the gap between brand identity and consumer perception through data-driven creativity."
  },
  {
    icon: <Users className="w-8 h-8 text-primary-light" />,
    title: "Teamwork",
    description: "Collaborative approach combining diverse expertise to achieve extraordinary results for our partners."
  }
];

const AgencyValues = () => {
  return (
    <section className="py-24 bg-gray-50/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">Our Agency Values</h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="glass-card hover:bg-white border hover:border-primary/40 shadow-sm"
            >
              <div className="w-16 h-16 rounded-xl bg-primary/5 flex items-center justify-center mb-6">
                {value.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">
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
