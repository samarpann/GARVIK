import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Quote } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/pagination';

const clientLogos = [
  '/images/clients/x5xxxc.webp',
  '/images/clients/x1.webp',
  '/images/clients/x3.webp',
  '/images/clients/x4.webp',
  '/images/clients/x5.webp',
  '/images/clients/x6.webp',
  '/images/clients/x7.webp',
  '/images/clients/x8.webp',
  '/images/clients/x9.webp',
  '/images/clients/x10.webp'
];

const testimonials = [
  {
    name: "Abhishek Jamwal",
    text: "Transitioning to digital media posed a challenge of obtaining high-quality content for my online classes. Garvik India came to the rescue, and their professionalism significantly enhanced my sessions, providing brilliant content for online training."
  },
  {
    name: "Isha Rana",
    text: "Working with Garvik India on brand content and photography has been a remarkable experience in our industry. Their creativity and unwavering professionalism are a rare find, especially when seeking top-quality content. Best Brand Management Company."
  },
  {
    name: "Shruti Pragya",
    text: "Garvik India assisted us in creating influencer-based short videos for specific regions. Their quick turnaround time and excellent communication made the entire process a breeze. We were more than satisfied with the impressive results. It's safe to say that they are the top-notch choice for short film production!"
  },
  {
    name: "Rohan Mehra",
    text: "As a Korean brand looking to promote our skincare products to an audience influenced by Korean culture, we turned to Garvik India for short videos. They understood our requirements perfectly, handpicking creators with a deep connection to Korean culture. Without a doubt, they are a leading short video production company, delivering outstanding product exposure and sales results. Keep up the fantastic work!"
  },
  {
    name: "Himanshu Bhardwaj",
    text: "Our experience with Garvik India was truly outstanding. They flawlessly streamlined the entire process, and their innovative approach to short video production was exceptional. Collaborating with them was an effortless and stress-free journey. Thanks a lot!"
  }
];

const ClientsSection = () => {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Happy <span className="text-gradient">Clients</span></h2>
            <p className="text-lg text-gray-600">
              Don't just take our word for it. Here is what some of our esteemed partners have to say about their experience working with Garvik India.
            </p>
          </motion.div>
        </div>

        {/* Testimonials Slider */}
        <div className="relative max-w-5xl mx-auto">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 }
            }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true, dynamicBullets: true }}
            modules={[Autoplay, Pagination]}
            className="pb-16 px-4"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index} className="h-auto">
                <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-lg border border-gray-100 h-full flex flex-col hover:-translate-y-2 transition-transform duration-300 relative group">
                  <Quote className="w-12 h-12 text-primary/10 absolute top-8 right-8 group-hover:text-primary/20 transition-colors" />
                  <div className="flex-grow">
                    <p className="text-gray-600 text-lg leading-relaxed italic relative z-10 mb-8">
                      "{testimonial.text}"
                    </p>
                  </div>
                  <div className="mt-auto pt-6 border-t border-gray-100 flex items-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-xl mr-4 shadow-md">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                      <div className="text-primary text-sm font-medium">Verified Partner</div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      
      {/* Decorative blobs */}
      <div className="absolute top-40 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -ml-32"></div>
      <div className="absolute bottom-20 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -mr-32"></div>
    </section>
  );
};

export default ClientsSection;
