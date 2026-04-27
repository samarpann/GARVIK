import React from 'react';
import Hero from '../components/home/Hero';
import AgencyValues from '../components/home/AgencyValues';
import WhatWeDo from '../components/home/WhatWeDo';
import WhyChooseUs from '../components/home/WhyChooseUs';
import CarouselSection from '../components/home/CarouselSection';
import FAQSection from '../components/home/FAQSection';
import EnquiryForm from '../components/home/EnquiryForm';
import ClientsSection from '../components/home/ClientsSection';
import { ArrowRight, Trophy, Users, History, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <AgencyValues />
      <WhatWeDo />
      <WhyChooseUs />
      
      {/* Stats Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center mx-auto mb-6 text-primary">
                <Heart size={32} />
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">50+</h3>
              <p className="text-gray-500 uppercase tracking-widest text-[10px] font-bold">Projects Done</p>
            </motion.div>
            
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.1 }}
               className="text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center mx-auto mb-6 text-primary">
                <Users size={32} />
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">20+</h3>
              <p className="text-gray-500 uppercase tracking-widest text-[10px] font-bold">Brands Served</p>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center mx-auto mb-6 text-primary">
                <History size={32} />
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">7+</h3>
              <p className="text-gray-500 uppercase tracking-widest text-[10px] font-bold">Years Experience</p>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.3 }}
               className="text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center mx-auto mb-6 text-primary">
                <Trophy size={32} />
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">15+</h3>
              <p className="text-gray-500 uppercase tracking-widest text-[10px] font-bold">Awards Won</p>
            </motion.div>
          </div>
        </div>
      </section>

      <CarouselSection />
      <ClientsSection />
      <FAQSection />
      
      {/* Blog/Articles Placeholder */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4 text-gradient inline-block">Blog & Articles</h2>
              <p className="text-gray-500 max-w-xl text-lg">Insights, trends, and success stories from the world of branding and digital marketing.</p>
            </div>
            <Link to="/blog" className="text-primary font-bold flex items-center gap-2 hover:translate-x-2 transition-transform h-fit">
              View All Posts <ArrowRight size={20} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 group">
                <div className="aspect-video bg-gray-200 overflow-hidden">
                  <img src={`https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=600&sig=${i}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Blog" />
                </div>
                <div className="p-8">
                  <div className="text-xs font-bold text-primary uppercase mb-4 tracking-widest">Marketing Trends</div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">How to build a brand identity that lasts for decades.</h4>
                  <p className="text-gray-500 text-sm mb-6">Learn the secret step-by-step approach we use at Garvik India...</p>
                  <span className="text-gray-400 text-xs font-medium">April 18, 2026</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <EnquiryForm />
    </div>
  );
};

export default Home;
import { motion } from 'framer-motion';
