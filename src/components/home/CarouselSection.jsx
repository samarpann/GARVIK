import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

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
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  useGSAP(() => {
    const section = sectionRef.current;
    const totalWidth = section.scrollWidth;
    const windowWidth = window.innerWidth;
    
    gsap.to(section, {
      x: () => -(totalWidth - windowWidth),
      ease: "none",
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top 10%",
        end: () => `+=${totalWidth}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      }
    });
  }, { scope: triggerRef });

  return (
    <div ref={triggerRef} className="bg-white">
      <div className="relative h-screen flex flex-col justify-center overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-2 text-gray-900">
            Our Featured <span className="text-cursive ml-2">Work</span>
          </h2>
          <p className="text-gray-500 max-w-lg text-base">
            Showcasing our excellence across various domains of marketing and branding.
          </p>
        </div>
        
        <div 
          ref={sectionRef} 
          className="flex gap-8 px-[10vw]"
          style={{ width: "fit-content" }}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[280px] md:w-[450px] h-[50vh] md:h-[60vh] relative rounded-[2rem] overflow-hidden group shadow-xl transition-all duration-500 hover:scale-[1.02]"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <span className="text-primary text-xs font-bold uppercase tracking-[3px] mb-2 block">{project.category}</span>
                <h3 className="text-2xl md:text-3xl font-bold text-white">{project.title}</h3>
                <div className="w-10 h-1 bg-primary mt-3 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarouselSection;
