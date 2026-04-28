import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Atom, Star } from 'lucide-react';

const steps = [
  {
    title: "Understand Client's need",
    icon: <Lightbulb className="w-8 h-8 text-primary" />
  },
  {
    title: "Design and Development",
    icon: <Atom className="w-8 h-8 text-primary" />
  },
  {
    title: "Going Live",
    icon: <Star className="w-8 h-8 text-primary" />
  }
];

const WorkProcess = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Blob Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-primary via-primary-dark to-accent opacity-90 rounded-full blur-2xl -z-10" style={{ borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%', animation: 'blob-spin 15s linear infinite' }}></div>
            
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl z-10 border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" 
                alt="Working Professional" 
                className="w-full h-auto object-cover aspect-[4/5]"
              />
            </div>
            
            <style dangerouslySetInnerHTML={{__html: `
              @keyframes blob-spin {
                0% { transform: translate(-50%, -50%) rotate(0deg); }
                100% { transform: translate(-50%, -50%) rotate(360deg); }
              }
            `}} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex items-center gap-6 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(157,80,187,0.15)] transition-all duration-300 border border-gray-50"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  {step.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">{step.title}</h3>
              </motion.div>
            ))}
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
