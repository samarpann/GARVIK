import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const projects = [
  {
    title: "PR Event",
    image: "/images/site_assets/service_pr_events.webp",
    category: "Events"
  },
  {
    title: "Brand Promotion",
    image: "/images/site_assets/service_brand_mgmt.webp",
    category: "Strategy"
  },
  {
    title: "Udaan",
    image: "/images/site_assets/hero_product_roadshow.webp",
    category: "Campaign"
  },
  {
    title: "Ad Films",
    image: "/images/site_assets/service_ad_film.webp",
    category: "Production"
  },
  {
    title: "Product Road Show",
    image: "/images/site_assets/service_product_roadshow.webp",
    category: "Events"
  },
  {
    title: "Digital Marketing",
    image: "/images/site_assets/service_digital_marketing.webp",
    category: "Digital"
  },
  {
    title: "Business Conference",
    image: "/images/site_assets/service_business_conf.webp",
    category: "Events"
  }
];

const CarouselSection = () => {
  const targetRef = useRef(null);
  
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 mb-12 flex justify-between items-end">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">Our Featured <span className="text-primary">Work</span></h2>
          <p className="text-gray-600 max-w-lg">Showcasing our excellence across various domains of marketing and branding.</p>
        </div>
      </div>

      <div className="flex overflow-x-auto pb-10 hide-scrollbar gap-6 px-4 md:px-[10vw]">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -10 }}
            className="flex-shrink-0 w-[280px] md:w-[380px] relative rounded-3xl overflow-hidden aspect-[4/3] group shadow-lg"
          >
            <img 
              src={project.image} 
              alt={project.title} 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <span className="text-primary text-sm font-bold uppercase tracking-[3px] mb-2 block">{project.category}</span>
              <h3 className="text-2xl md:text-3xl font-bold text-white">{project.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </section>
  );
};

export default CarouselSection;
