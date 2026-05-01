import React, { useRef } from 'react';
import { Palette, Megaphone, Smartphone, Video, Users, Briefcase, Rocket, Globe } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const services = [
  {
    title: "Integrated Brand Mgmt",
    description: "Craft a compelling brand narrative, align your messaging, and boost recognition.",
    icon: <Briefcase className="w-6 h-6" />,
    color: "from-[#a855f7] to-[#9333ea]",
    image: "/images/site_assets/service_brand_mgmt.webp"
  },
  {
    title: "Broadcast Advertising",
    description: "A dynamic and influential medium through which companies convey messages to a wide audience.",
    icon: <Megaphone className="w-6 h-6" />,
    color: "from-[#ec4899] to-[#db2777]",
    image: "/images/site_assets/service_broadcast.webp"
  },
  {
    title: "Print Media",
    description: "Print designs leave an indelible mark, conveying your message effectively.",
    icon: <Palette className="w-6 h-6" />,
    color: "from-[#8b5cf6] to-[#7c3aed]",
    image: "/images/site_assets/service_print_media.webp"
  },
  {
    title: "Ad Film",
    description: "Storytelling tools, combining visuals to convey messages.",
    icon: <Video className="w-6 h-6" />,
    color: "from-[#d946ef] to-[#c026d3]",
    image: "/images/site_assets/service_ad_film.webp"
  },
  {
    title: "PR Events",
    description: "Meticulously planned gatherings aimed at enhancing an organization’s reputation.",
    icon: <Users className="w-6 h-6" />,
    color: "from-[#7e22ce] to-[#6b21a8]",
    image: "/images/site_assets/service_pr_events.webp"
  },
  {
    title: "Business Conferences",
    description: "Knowledge-sharing platforms where industry experts convene to discuss trends.",
    icon: <Briefcase className="w-6 h-6" />,
    color: "from-[#db2777] to-[#be185d]",
    image: "/images/site_assets/service_business_conf.webp"
  },
  {
    title: "Product Road Show",
    description: "Dynamic marketing events that showcase products directly to potential customers.",
    icon: <Globe className="w-6 h-6" />,
    color: "from-[#a855f7] to-[#9333ea]",
    image: "/images/site_assets/service_product_roadshow.webp"
  },
  {
    title: "Digital Marketing",
    description: "Cornerstone of modern business success with data-driven strategies.",
    icon: <Smartphone className="w-6 h-6" />,
    color: "from-[#ec4899] to-[#db2777]",
    image: "/images/site_assets/service_digital_marketing.webp"
  },
  {
    title: "Creative Design & Content",
    description: "Expert photographers capturing moments, emotions, and memories.",
    icon: <Palette className="w-6 h-6" />,
    color: "from-[#8b5cf6] to-[#7c3aed]",
    image: "/images/site_assets/service_creative_design.webp"
  }
];

const WhatWeDo = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Explicitly set initial state to ensure visibility if JS fails later
    gsap.set('.service-card', { opacity: 0, scale: 0.9, y: 30 });
    gsap.set('.service-header', { opacity: 0, y: 50 });

    gsap.to('.service-card', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 85%',
        toggleActions: 'play none none none'
      },
      scale: 1,
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.1,
      ease: 'power3.out'
    });

    gsap.to('.service-header', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 95%',
        toggleActions: 'play none none none'
      },
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'power3.out'
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 relative overflow-hidden bg-gray-50/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="service-header">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
              A 360° Degree Integrated <br />
              <span className="text-cursive block mt-2">Digital Marketing & Advertising Company</span> 
            </h2>
            <p className="text-lg text-gray-600">
              What differentiates Garvik India in a competitive marketplace is our relationship-driven approach and holistic growth support.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, index) => (
            <div
              key={index}
              className="service-card bg-purple-50/20 rounded-[2.5rem] border border-gray-100 hover:border-primary/20 shadow-sm hover:shadow-2xl transition-all duration-500 group overflow-hidden"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
