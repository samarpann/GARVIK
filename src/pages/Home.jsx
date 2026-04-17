import React from 'react';
import Hero from '../components/home/Hero';
import AgencyValues from '../components/home/AgencyValues';
import WhatWeDo from '../components/home/WhatWeDo';
import WhyChooseUs from '../components/home/WhyChooseUs';
import CarouselSection from '../components/home/CarouselSection';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <AgencyValues />
      <WhatWeDo />
      <WhyChooseUs />
      <CarouselSection />
      
      {/* Stats Section */}
      <section className="py-20 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="text-4xl md:text-5xl font-bold text-primary mb-2">100+</h3>
              <p className="text-gray-500 uppercase tracking-widest text-xs font-bold">Happy Clients</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl md:text-5xl font-bold text-primary mb-2">500+</h3>
              <p className="text-gray-500 uppercase tracking-widest text-xs font-bold">Campaigns</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl md:text-5xl font-bold text-primary mb-2">15+</h3>
              <p className="text-gray-500 uppercase tracking-widest text-xs font-bold">Industry Awards</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl md:text-5xl font-bold text-primary mb-2">1000+</h3>
              <p className="text-gray-500 uppercase tracking-widest text-xs font-bold">Content Pieces</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-primary-dark via-primary to-primary-light p-8 md:p-16 text-center shadow-2xl">
            <div className="absolute inset-0 bg-white/5"></div>
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Scale Your Business?</h2>
              <p className="text-white/90 text-lg mb-10 font-medium">
                Join hands with India's fastest growing advertising agency and let's create something extraordinary together.
              </p>
              <Link to="/contact" className="btn bg-white text-primary hover:bg-gray-100 px-10 py-4 text-lg font-bold inline-flex items-center gap-2 group shadow-xl">
                Contact Us Now <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
