import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const carouselItems = [
  {
    title: "We empower visions of Business leaders...",
    subtitle: "A 360 Integrated Marketing & Advertising Partner driving business outcomes via creative, media & influencer marketing.",
    image: "/src/assets/images/12.jpeg",
  },
  {
    title: "Give Your Brand An Identity",
    subtitle: "A robust corporate identity, coupled with a meticulously crafted brand identity strategy, forms the cornerstone of a compelling brand image.",
    image: "/src/assets/images/3.jpeg",
  },
  {
    title: "Performance Digital Marketing",
    subtitle: "ROI-based lead generation systems and targeted campaigns that stand out in the chaos of the internet.",
    image: "/src/assets/images/9.jpeg",
  },
  {
    title: "Leading PR & Event Excellence",
    subtitle: "Celebrated PR/Felicitation events that strengthen relationships and enhance your professional reputation.",
    image: "/src/assets/images/15.jpeg",
  },
  {
    title: "Integrated Brand Management",
    subtitle: "Meticulously crafted facet of your brand to resonate with your audience through strategic thinking.",
    image: "/src/assets/images/14.jpeg",
  }
];

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden">
      <Swiper
        spaceBetween={0}
        effect={'fade'}
        speed={1000}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={true}
        modules={[Autoplay, EffectFade, Pagination, Navigation]}
        className="h-full w-full"
      >
        {carouselItems.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full flex items-center justify-center">
              {/* Background Image with Overlay */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px]"></div>
              </div>

              {/* Content */}
              <div className="container mx-auto px-4 md:px-6 z-10 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="max-w-4xl mx-auto"
                >
                  <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider uppercase border border-primary/30 rounded-full bg-primary/10 text-primary">
                    Strategic Advertising Agency
                  </span>
                  
                  <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-[1.1] text-gray-900 tracking-tight">
                    {item.title.split(' ').map((word, i) => (
                      <span key={i} className={word.includes('...') || i > 3 ? 'text-gradient' : ''}>
                        {word}{' '}
                      </span>
                    ))}
                  </h1>
                  
                  <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                    {item.subtitle}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link to="/contact" className="btn btn-primary w-full sm:w-auto flex items-center justify-center gap-2 group">
                      Get Started <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link to="/portfolio" className="btn btn-outline w-full sm:w-auto border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white border-2">
                      View Our Work
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <span className="text-[10px] uppercase tracking-[4px] text-gray-400 font-bold">Explore</span>
        <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
