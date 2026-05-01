import React from 'react';
import { motion } from 'framer-motion';
import { Star, Trophy, Globe, Rocket, Users2 } from 'lucide-react';
import ClientsSection from '../components/home/ClientsSection';

const programs = [
  {
    title: "Brand Management",
    description: "Campaign planning, consumer insights, and overall brand health monitoring.",
    icon: <Globe className="w-8 h-8" />
  },
  {
    title: "Influencer & PR",
    description: "Strategic partnerships and public relations to amplify your brand voice.",
    icon: <Users2 className="w-8 h-8" />
  },
  {
    title: "Digital Capability Program",
    description: "Affiliate marketing, influencer networks, and performance optimization.",
    icon: <Rocket className="w-8 h-8" />
  }
];

const Portfolio = () => {
  return (
    <div className="pt-32 pb-24 bg-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 md:px-6 mb-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">Our <span className="text-cursive ml-2">Programs</span> & Capabilities</h1>
          <p className="text-xl text-gray-600">Transforming strategy into execution with custom solutions for every brand.</p>
        </motion.div>
      </section>

      {/* Programs Grid */}
      <section className="container mx-auto px-4 md:px-6 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-10 rounded-3xl bg-purple-50/50 border border-purple-100/50 hover:border-primary transition-all hover:bg-white hover:shadow-xl"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center mb-8 text-primary">
                {program.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">{program.title}</h3>
              <p className="text-gray-600 leading-relaxed">{program.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Content Stats Highlight */}
      <section className="bg-primary/5 py-24 mb-32 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-5xl font-bold mb-8 text-gray-900">Content That <span className="text-cursive ml-2 text-primary">Drives Results</span></h2>
              <p className="text-xl text-gray-600 mb-8">
                We've produced over <span className="text-primary font-bold text-2xl">1000+ content pieces</span> with high engagement rates across all digital platforms.
              </p>
              <div className="flex items-center gap-6">
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-12 h-12 rounded-full border-2 border-white bg-gray-100 overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="avatar" />
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-500 font-bold uppercase tracking-tight">Trusted by leading marketing heads</p>
              </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <div className="aspect-square rounded-2xl bg-white border border-gray-100 overflow-hidden shadow-lg">
                <img src="/images/site_assets/service_brand_mgmt.webp" className="w-full h-full object-cover" alt="Portfolio 1" />
              </div>
              <div className="aspect-square rounded-2xl bg-white border border-gray-100 overflow-hidden translate-y-8 shadow-lg">
                <img src="/images/site_assets/service_broadcast.webp" className="w-full h-full object-cover" alt="Portfolio 2" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Events */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="flex items-center gap-4 mb-16">
          <div className="h-px flex-grow bg-gray-200"></div>
          <h2 className="text-3xl md:text-4xl font-bold whitespace-nowrap text-gray-900">Awards & <span className="text-cursive ml-2">Events</span></h2>
          <div className="h-px flex-grow bg-gray-200"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="group relative rounded-3xl overflow-hidden aspect-video shadow-lg"
          >
            <img 
               src="/images/site_assets/service_pr_events.webp" 
               alt="Coffee Table Book Launch" 
               className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
            <div className="absolute bottom-0 left-0 p-8">
              <div className="flex items-center gap-2 text-primary mb-2">
                <Star size={18} fill="currentColor" />
                <span className="text-sm font-bold uppercase tracking-wider text-white">Major Event</span>
              </div>
              <h3 className="text-2xl font-bold text-white">Coffee Table Book Launch</h3>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="group relative rounded-3xl overflow-hidden aspect-video shadow-lg"
          >
            <img 
               src="/images/site_assets/service_business_conf.webp" 
               alt="Industry Events" 
               className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
            <div className="absolute bottom-0 left-0 p-8">
              <div className="flex items-center gap-2 text-primary mb-2">
                <Trophy size={18} fill="currentColor" />
                <span className="text-sm font-bold uppercase tracking-wider text-white">Recognition</span>
              </div>
              <h3 className="text-2xl font-bold text-white">Industry Excellence Summit</h3>
            </div>
          </motion.div>
        </div>
      </section>

      <ClientsSection />
    </div>
  );
};

export default Portfolio;
