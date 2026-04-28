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
    title: "Business Conference",
    subtitle: "Crafting Dreams, One Frame at a Time",
    image: "/images/site_assets/hero_business_conf.webp",
  },
  {
    title: "Product Road Show",
    subtitle: "Capturing Culture, Sharing Stories.",
    image: "/images/site_assets/hero_product_roadshow.webp",
  },
  {
    title: "Digital Marketing",
    subtitle: "Where Strategy Meets Clicks",
    image: "/images/site_assets/hero_digital_marketing.webp",
  },
  {
    title: "Corporate Video Ads Production",
    subtitle: "Crafting Visual Brilliance, Shaping Your Story.",
    image: "/images/site_assets/hero_video_ads.webp",
  }
];

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[500px] overflow-hidden">
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
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
                <div className="absolute inset-0 bg-black/20"></div>
              </div>

              {/* Content */}
              <div className="container mx-auto px-4 md:px-6 z-10 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="max-w-4xl mx-auto"
                >
                  <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider uppercase border border-primary/50 rounded-full bg-primary/20 text-white shadow-lg">
                    Welcome To Garvik India 
                  </span>
                  
                  <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-[1.1] text-white tracking-tight drop-shadow-lg">
                    {item.title.split(' ').map((word, i) => (
                      <span key={i} className={word.includes('...') || i > 3 ? 'text-primary-light' : ''}>
                        {word}{' '}
                      </span>
                    ))}
                  </h1>
                  
                  <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
                    {item.subtitle}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link to="/contact" className="btn btn-primary w-full sm:w-auto flex items-center justify-center gap-2 group shadow-xl">
                      Get Started <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link to="/portfolio" className="btn btn-outline w-full sm:w-auto border-white text-white hover:bg-white hover:text-gray-900 border-2 shadow-xl backdrop-blur-sm">
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
        <span className="text-[10px] uppercase tracking-[4px] text-white/70 font-bold drop-shadow-md">Explore</span>
        <div className="w-px h-12 bg-gradient-to-b from-white to-transparent opacity-50"></div>
      </div>
    </section>
  );
};

export default Hero;
