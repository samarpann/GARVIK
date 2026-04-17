import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-32 pb-24 bg-white">
      {/* Overview Section */}
      <section className="container mx-auto px-4 md:px-6 mb-24">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Who We Are</span>
              <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight text-gray-900">
                About <span className="text-gradient">Garvik India</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                “We are a growing Indian advertising agency focused on consumer insights and long-term brand relationships.”
              </p>
              <p className="text-gray-500 leading-relaxed mb-8">
                At Garvik, we believe that every brand has a story waiting to be told. Our multidisciplinary team combines strategy, creativity, and technology to help businesses reach the right audience and drive sustainable growth.
              </p>
              
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-3xl font-bold text-gray-900 mb-2">5+</h4>
                  <p className="text-sm text-gray-500 uppercase tracking-widest font-bold">Years Experience</p>
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-gray-900 mb-2">100+</h4>
                  <p className="text-sm text-gray-500 uppercase tracking-widest font-bold">Global Partners</p>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden glass-card p-2 bg-gray-50 border-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" 
                  alt="Team Garvik" 
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-gray-50 py-24 mb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-10 rounded-3xl bg-white border border-gray-100 hover:border-primary/30 transition-all shadow-sm group"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center mb-8 group-hover:bg-primary/10 transition-colors">
                <Eye className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold mb-6 text-gray-900">Our Vision</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                We see advertising as a powerful combination of <span className="text-primary font-bold">art + science</span>. Our vision is to redefine the creative landscape by delivering insights that transform brands into market leaders.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-10 rounded-3xl bg-white border border-gray-100 hover:border-primary/30 transition-all shadow-sm group"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center mb-8 group-hover:bg-primary/10 transition-colors">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold mb-6 text-gray-900">Our Mission</h3>
              <ul className="space-y-4 text-gray-600 text-lg">
                <li className="flex items-center gap-3 font-semibold">
                  <div className="w-2 h-2 rounded-full bg-primary/40"></div>
                  Help businesses reach the right audience
                </li>
                <li className="flex items-center gap-3 font-semibold">
                  <div className="w-2 h-2 rounded-full bg-primary/40"></div>
                  Drive growth using strategy & creativity
                </li>
                <li className="flex items-center gap-3 font-semibold">
                  <div className="w-2 h-2 rounded-full bg-primary/40"></div>
                  Leverage technology for measurable impact
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">Our Multidisciplinary <span className="text-gradient">Team</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto">A synergy of brilliant minds working together to solve complex business challenges.</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { role: "Engineers", color: "from-blue-500/5 to-transparent" },
            { role: "Marketers", color: "from-purple-500/5 to-transparent" },
            { role: "Artists", color: "from-pink-500/5 to-transparent" },
            { role: "Strategists", color: "from-orange-500/5 to-transparent" }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`p-12 rounded-3xl bg-gradient-to-b ${item.color} border border-gray-100 text-center hover:border-primary/50 transition-all shadow-sm`}
            >
              <Users className="w-10 h-10 text-primary opacity-50 mx-auto mb-6" />
              <h4 className="text-xl font-bold text-gray-900 uppercase tracking-tighter">{item.role}</h4>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
