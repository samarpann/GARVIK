import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Target, Users, Zap, Send, Search, Layout, Database } from 'lucide-react';

const RoadShow = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/services/roadshow_hero.webp" 
            alt="Product Road Show" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold text-white"
          >
            Product Road Show
          </motion.h1>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <img 
                src="/images/services/roadshow_sec_1.jpg" 
                alt="Product Launch Event" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">The Grand <span className="text-primary">Reveal</span> That Captivates</h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Whether it’s a cutting-edge tech gadget, a groundbreaking software application, or a revolutionary consumer product, the road show serves as the grand reveal that captivates the audience and leaves them in awe of what is possible.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    <Rocket size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-xl mb-2">Revolutionary Impact</h4>
                    <p className="text-gray-600">We design experiences that showcase your product's innovation, ensuring a lasting impression on potential customers and partners.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    <Target size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-xl mb-2">Personal Connection</h4>
                    <p className="text-gray-600">Attendees are guided through the product’s journey via interactive demos, enabling them to connect with it on a personal level.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Secondary Showcase Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
            <div className="lg:w-1/2">
              <img 
                src="/images/services/roadshow_sec_2.jpg" 
                alt="Product Demonstration" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div className="lg:w-1/2">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Immersive <span className="text-primary">Demos</span> & Hands-on Experience</h3>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                From informative presentations to one-on-one consultations, we ensure your audience understands every nuance of your product. Our demonstrations are not just shows; they are informative journeys.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                We bridge the gap between technical excellence and consumer understanding, making complex products accessible and desirable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-10 rounded-3xl bg-gray-50 text-center border border-gray-100 group">
              <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center mx-auto mb-8 shadow-sm group-hover:scale-110 transition-transform">
                <Search size={40} className="text-gray-900" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Customer Research</h3>
              <p className="text-gray-600 leading-relaxed">
                Identifying the right cities, venues, and audiences to ensure your road show reaches those who matter most.
              </p>
            </div>

            <div className="p-10 rounded-3xl bg-gray-50 text-center border border-gray-100 group">
              <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center mx-auto mb-8 shadow-sm group-hover:scale-110 transition-transform">
                <Layout size={40} className="text-gray-900" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">User-friendly Build</h3>
              <p className="text-gray-600 leading-relaxed">
                Designing demonstration setups that are intuitive, engaging, and facilitate natural product discovery.
              </p>
            </div>

            <div className="p-10 rounded-3xl bg-gray-50 text-center border border-gray-100 group">
              <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center mx-auto mb-8 shadow-sm group-hover:scale-110 transition-transform">
                <Database size={40} className="text-gray-900" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Scalable Models</h3>
              <p className="text-gray-600 leading-relaxed">
                Creating logistics-optimized road show kits that can be easily transported and deployed across multiple locations.
              </p>
            </div>
          </div>

          <div className="mt-32 text-center">
            <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-12">
              Let's Take Your <span className="text-primary">Product on the Road</span>
            </h2>
            <button className="bg-gray-900 text-white px-12 py-5 rounded-full font-bold text-xl hover:bg-gray-800 transition-all flex items-center gap-3 mx-auto">
              Start Your Show <Send size={24} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RoadShow;
