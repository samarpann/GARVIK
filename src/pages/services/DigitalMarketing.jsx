import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Globe, Search, TrendingUp, BarChart3, Send, Database, Layout } from 'lucide-react';

const DigitalMarketing = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is digital marketing, and why is it important for businesses?",
      answer: "Digital marketing encompasses various online strategies and channels to promote products and services. It's essential for achieving global reach, precise targeting, performance measurement, and rapid adaptation to market trends."
    },
    {
      question: "What are the key components of a successful digital marketing strategy?",
      answer: "A successful strategy typically includes SEO (Search Engine Optimization), social media marketing, email marketing, content marketing, PPC (Pay-Per-Click) advertising, and robust data analytics."
    },
    {
      question: "How can I measure the ROI (Return on Investment) of my digital marketing campaigns?",
      answer: "ROI is measured by tracking key performance indicators (KPIs) such as website traffic, conversion rates, customer acquisition cost (CAC), and total revenue generated, then comparing these against the campaign costs."
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/services/digital_marketing_hero.webp" 
            alt="Digital Marketing" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold text-white uppercase tracking-tighter"
          >
            <span className="text-cursive text-white">Digital Marketing</span>
          </motion.h1>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <img 
                src="/images/services/digital_marketing_strategies.webp" 
                alt="Digital Marketing Strategies" 
                className="rounded-2xl shadow-2xl w-full border border-gray-100"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">The Linchpin for <span className="text-cursive ml-2 text-primary">Modern Growth</span></h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Digital marketing is the linchpin for achieving marketing objectives, from reaching new prospects to nurturing relationships and boosting revenue. It has disrupted businesses of all sizes globally, offering a vast array of avenues for connecting with potential clients.
              </p>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                An effective strategy serves as a compass for goals, ensuring clear communication of product benefits and resonant customer engagement. Digital strategies allow for swift adjustments and experimentation to identify exactly what resonates with your audience.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="text-primary mb-2"><TrendingUp size={24} /></div>
                  <h4 className="font-bold text-gray-900">Swift Adjustments</h4>
                  <p className="text-xs text-gray-500">Real-time optimization of campaigns.</p>
                </div>
                <div className="p-4 rounded-xl bg-purple-50/50 border border-purple-100/50">
                  <div className="text-primary mb-2"><Globe size={24} /></div>
                  <h4 className="font-bold text-gray-900">Global Reach</h4>
                  <p className="text-xs text-gray-500">Connect with audiences worldwide.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* specialized areas */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-16">Specialized <span className="text-cursive ml-2">Avenues</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-purple-50/50 p-12 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all text-left group">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all">
                <BarChart3 size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Content Marketing</h3>
              <p className="text-gray-600 leading-relaxed">
                Creating and sharing valuable content like blogs, e-books, and videos to attract and retain a specific audience, building long-term trust and authority.
              </p>
            </div>
            <div className="bg-purple-50/50 p-12 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all text-left group">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all">
                <Search size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO & Search</h3>
              <p className="text-gray-600 leading-relaxed">
                Optimizing your digital presence to ensure you're found by the right people at the right time, driving organic and sustainable growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/images/services/faq_bg.webp" alt="FAQ Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-purple-900/90"></div>
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-white">
          <div className="text-center mb-16">
            <span className="text-yellow-400 font-bold uppercase tracking-widest text-sm mb-4 block">FAQ</span>
            <h2 className="text-4xl md:text-5xl font-bold">Digital Strategy Insights</h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg">
                <button
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-bold text-gray-900 pr-8">{faq.question}</span>
                  <span className="text-gray-900 flex-shrink-0">
                    {activeIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                  </span>
                </button>
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standard Highlights */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-10 rounded-3xl bg-purple-50/50 text-center border border-purple-100/50">
              <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center mx-auto mb-8 shadow-sm">
                <Search size={40} className="text-gray-900" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Customer Research</h3>
              <p className="text-gray-600 leading-relaxed">
                We dive deep into data, extracting valuable insights and identifying lucrative opportunities for your business.
              </p>
            </div>

            <div className="p-10 rounded-3xl bg-purple-50/50 text-center border border-purple-100/50">
              <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center mx-auto mb-8 shadow-sm">
                <Layout size={40} className="text-gray-900" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">User-friendly Build</h3>
              <p className="text-gray-600 leading-relaxed">
                Our team expertly designs and develops websites and apps that effectively solve user problems and enhance usability.
              </p>
            </div>

            <div className="p-10 rounded-3xl bg-purple-50/50 text-center border border-purple-100/50">
              <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center mx-auto mb-8 shadow-sm">
                <Database size={40} className="text-gray-900" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Scalable Models</h3>
              <p className="text-gray-600 leading-relaxed">
                We implement Continuous Delivery pipelines to enable fast iteration and ensure your projects can scale seamlessly.
              </p>
            </div>
          </div>

          <div className="mt-32 text-center">
            <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-12">
              Ready to <span className="text-cursive ml-2">Dominate</span> the Digital Space?
            </h2>
            <button className="bg-gray-900 text-white px-12 py-5 rounded-full font-bold text-xl hover:bg-gray-800 transition-all flex items-center gap-3 mx-auto">
              Get Started <Send size={24} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigitalMarketing;
