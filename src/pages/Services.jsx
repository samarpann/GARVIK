import React from 'react';
import { motion } from 'framer-motion';
import { 
  Palette, Smartphone, Megaphone, Search, 
  BarChart3, Video, Tv, Radio, Newspaper, Building2 
} from 'lucide-react';

const coreServices = [
  {
    title: "Branding & Identity",
    description: "Crafting unique identities that leave a lasting impression. Logo design, brand guidelines, and visual storytelling.",
    icon: <Palette className="w-8 h-8" />
  },
  {
    title: "Creative Design",
    description: "Stunning visual content for posters, banners, social media, and modern websites that convert.",
    icon: <Smartphone className="w-8 h-8" />
  },
  {
    title: "Media Planning & Buying",
    description: "Strategic media investment to ensure your ads reach the right audience at the most optimal time.",
    icon: <Megaphone className="w-8 h-8" />
  },
  {
    title: "Digital Marketing",
    description: "Comprehensive digital strategies including SEO, PPC, and Content Marketing for scalable growth.",
    icon: <BarChart3 className="w-8 h-8" />
  }
];

const digitalServices = [
  { title: "SEO", items: ["Keyword Research", "Site Audits", "Consulting", "On-page Optimization"], icon: <Search className="w-6 h-6" /> },
  { title: "Social Media", items: ["Platform Strategy", "Content Calendars", "Community Management"], icon: <Smartphone className="w-6 h-6" /> },
  { title: "Google Ads / PPC", items: ["Search Ads", "Display Network", "Remarketing Campaigns"], icon: <BarChart3 className="w-6 h-6" /> },
  { title: "Content & Video", items: ["Video Production", "Copywriting", "Blog Management"], icon: <Video className="w-6 h-6" /> }
];

const traditionalServices = [
  { title: "TV Advertising", icon: <Tv /> },
  { title: "Newspaper Advertising", icon: <Newspaper /> },
  { title: "Radio Ads", icon: <Radio /> },
  { title: "OOH Advertising", icon: <Building2 /> }
];

const Services = () => {
  return (
    <div className="pt-32 pb-20 bg-white">
      <section className="container mx-auto px-4 md:px-6 mb-24">
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">Our <span className="text-gradient">Core Services</span></h1>
            <p className="text-xl text-gray-600">Comprehensive marketing solutions tailored to your brand's unique needs and aspirations.</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {coreServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:border-primary/40 transition-all hover:bg-white hover:shadow-xl group"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Digital Marketing Deep Dive */}
      <section className="bg-gray-50 py-24 mb-24">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-12 text-center uppercase tracking-widest text-gray-900">Digital Capabilities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {digitalServices.map((service, index) => (
              <div key={index} className="p-8 rounded-2xl bg-white shadow-sm border border-gray-100 font-semibold">
                <div className="text-primary mb-4">{service.icon}</div>
                <h4 className="text-xl font-bold mb-4 text-gray-900">{service.title}</h4>
                <ul className="space-y-2">
                  {service.items.map((item, i) => (
                    <li key={i} className="text-sm text-gray-500 flex items-center gap-2">
                       <span className="w-1.5 h-1.5 bg-primary/40 rounded-full"></span>
                       {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Traditional Media */}
      <section className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Traditional & Modern <span className="text-primary">Media Channels</span></h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {traditionalServices.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="p-8 text-center rounded-2xl border border-gray-100 bg-white flex flex-col items-center justify-center grayscale hover:grayscale-0 transition-all cursor-pointer shadow-sm hover:shadow-md"
            >
              <div className="w-12 h-12 text-primary mb-4 flex items-center justify-center">
                {React.cloneElement(service.icon, { size: 32 })}
              </div>
              <h5 className="font-bold text-gray-600 group-hover:text-primary">{service.title}</h5>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
