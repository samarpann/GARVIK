import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const reasons = [
  {
    title: "Expertise & Experience",
    description: "Years of industry knowledge translated into effective marketing strategies."
  },
  {
    title: "Creativity & Innovation",
    description: "Breaking the mold with fresh ideas that capture consumer attention."
  },
  {
    title: "Result-Oriented Approach",
    description: "Focusing on tangible business outcomes and ROI for our partners."
  },
  {
    title: "Targeted Reach",
    description: "Precise audience targeting to ensure your message reaches the right people."
  },
  {
    title: "Cost Effective",
    description: "Optimized spends that deliver maximum impact without wasting resources."
  },
  {
    title: "Seamless Customer Support",
    description: "Dedicated account management and transparent communication throughout."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-gray-50 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 rounded-xl bg-white border border-gray-100 hover:border-primary transition-colors shadow-sm"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">{reason.title}</h4>
                  <p className="text-sm text-gray-500">{reason.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">Why Partner With <span className="text-gradient">Garvik India?</span></h2>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                We don't just provide services; we build long-term relationships based on trust, performance, and mutual growth. Our approach is tailored to your unique business needs.
              </p>
              <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent border border-primary/20">
                <blockquote className="text-xl italic text-gray-700">
                  "Advertising is for a day, but Branding is for a lifetime. We help you build that legacy."
                </blockquote>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
