import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutUsSmall = () => {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" 
                alt="Garvik India Team" 
                className="w-full h-auto object-cover aspect-[4/3]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <div className="text-4xl font-bold mb-1">2017</div>
                <div className="text-sm uppercase tracking-widest font-semibold opacity-90">Established</div>
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl -z-10"></div>
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-accent/10 rounded-full blur-2xl -z-10"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider uppercase border border-primary/30 rounded-full bg-primary/10 text-primary">
              About Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
              A Voice That <span className="text-cursive ml-2">Amplifies Presence</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              In a world where dreams are fragile, entrepreneurship stands as a beacon of courage. Since 2017, Garvik India has been the power scripting success stories behind promising start-ups and SMEs across industries. We are not just a service provider, but a true partner in your entrepreneurial journey.
            </p>
            
            <ul className="space-y-4 mb-10">
              {['True Growth Partner', 'Holistic Marketing Solutions', 'Mentorship & Empathy', 'End-to-End Brand Building'].map((item, index) => (
                <li key={index} className="flex items-center text-gray-700 font-medium">
                  <CheckCircle2 className="w-6 h-6 text-primary mr-3 flex-shrink-0" />
                  <span className="font-cursive text-2xl text-accent/90">{item}</span>
                </li>
              ))}
            </ul>

            <Link to="/about" className="btn btn-primary inline-flex items-center gap-2 group">
              Read Our Story <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSmall;
