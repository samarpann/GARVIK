import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Megaphone, Smartphone, Video, Users, Briefcase, Rocket, Globe } from 'lucide-react';

const services = [
  {
    title: "PR & Event Management",
    description: "Celebrating achievements and strengthening relationships through high-impact felicitation events.",
    icon: <Users className="w-6 h-6" />,
    color: "from-[#a855f7] to-[#9333ea]",
    image: "/src/assets/images/15.jpeg"
  },
  {
    title: "Brand Promotion",
    description: "Strategically crafted brand narratives that meticulously resonate with your audience.",
    icon: <Rocket className="w-6 h-6" />,
    color: "from-[#ec4899] to-[#db2777]",
    image: "/src/assets/images/3.jpeg"
  },
  {
    title: "Ad Films",
    description: "Compelling visuals and narratives that evoke emotions and desired consumer behaviors.",
    icon: <Video className="w-6 h-6" />,
    color: "from-[#8b5cf6] to-[#7c3aed]",
    image: "/src/assets/images/1.jpeg"
  },
  {
    title: "Digital Marketing",
    description: "Full-stack campaigns including SEO, PPC, and ROI-based lead generation systems.",
    icon: <Smartphone className="w-6 h-6" />,
    color: "from-[#d946ef] to-[#c026d3]",
    image: "/src/assets/images/9.jpeg"
  },
  {
    title: "Product Road Show",
    description: "Immersive demonstrations that form direct connections with potential customers and partners.",
    icon: <Globe className="w-6 h-6" />,
    color: "from-[#7e22ce] to-[#6b21a8]",
    image: "/src/assets/images/12.jpeg"
  },
  {
    title: "Business Conference",
    description: "Bringing industry experts together to exchange knowledge and chart future success.",
    icon: <Briefcase className="w-6 h-6" />,
    color: "from-[#db2777] to-[#be185d]",
    image: "/src/assets/images/14.jpeg"
  }
];

const WhatWeDo = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-gray-50/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              A 360 Integrated <span className="text-gradient">Marketing Powerhouse</span>
            </h2>
            <p className="text-lg text-gray-600">
              What differentiates Garvik India in a competitive marketplace is our relationship-driven approach and holistic growth support.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-[2.5rem] border border-gray-100 hover:border-primary/20 shadow-sm hover:shadow-2xl transition-all duration-500 group overflow-hidden"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className={`absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-lg`}>
                  {item.icon}
                </div>
              </div>
              <div className="p-8">
                <h4 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h4>
                <p className="text-gray-500 leading-relaxed text-sm mb-6">{item.description}</p>
                <div className="flex items-center text-primary font-bold text-xs uppercase tracking-widest group-hover:translate-x-2 transition-transform duration-300">
                  Explore Service <span className="ml-2">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
