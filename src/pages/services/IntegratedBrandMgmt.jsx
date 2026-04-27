import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Plus, Minus, Search, Layout, Database, Send } from 'lucide-react';

const IntegratedBrandMgmt = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is integrated brand management, and why is it important for businesses?",
      answer: "Integrated brand management is the practice of maintaining a consistent brand identity across all marketing channels. It ensures that your message, values, and visual identity are uniform, building trust and recognition with your audience."
    },
    {
      question: "How do you integrate brand management across online and offline marketing channels?",
      answer: "We use a unified brand strategy that dictates design guidelines, messaging tone, and core values for both digital platforms and physical media like print and on-ground events."
    },
    {
      question: "What role does data analytics play in integrated brand management?",
      answer: "Data analytics helps us track brand performance, audience engagement, and market trends, allowing us to refine strategies and ensure the brand remains relevant and effective."
    },
    {
      question: "How can a company ensure that all employees are aligned with the brand's values and messaging?",
      answer: "Through consistent internal communication, brand workshops, and clearly defined brand guidelines that are accessible to everyone in the organization."
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/services/brand_mgmt_hero.jpg" 
            alt="Integrated Brand Management" 
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
            Integrated Brand Management
          </motion.h1>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <img 
                src="/images/services/branding_strategy.jpg" 
                alt="Branding Strategy" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 leading-relaxed">
                Are you effectively conveying the intangible yet crucial aspects of your business to your potential customers? Do your unique qualities stand out to someone who encounters your advertisements, notices your signage, or visits your premises?
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                The process of branding often follows or incorporates positioning strategies, offering similar advantages such as achieving consensus and gaining a deeper understanding of the potential impact of robust branding on both short-term and long-term growth.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Branding combines visual elements and content while maintaining consistency in thought and purpose. Moreover, your brand descriptor should also delineate your specific market niche and arouse curiosity among potential customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Identity Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
            <div className="lg:w-1/2">
              <img 
                src="/images/services/brand_identity.jpg" 
                alt="Brand Identity" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div className="lg:w-1/2">
              <p className="text-gray-900 text-xl font-medium mb-6 leading-relaxed">
                Brand identity is the image that a company establishes within the market and among its clientele. This identity encompasses features, attributes, benefits, performance, quality, service support, and the values inherent to the brand. Think of the brand as a personality, a set of values, and the place it holds in people's minds.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                In essence, brand identity encompasses all the qualities a company aims for its brand to represent. A strong corporate identity, when aligned with a strategically planned brand identity, creates the desired brand image. We specialize in crafting this brand image for you, allowing you to establish a firm foothold in the market.
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
            <h2 className="text-4xl md:text-5xl font-bold">Frequently Asked Questions</h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300">
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

      {/* Service Highlights Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-10 rounded-3xl bg-gray-50 text-center hover:shadow-xl transition-all border border-gray-100 group">
              <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center mx-auto mb-8 shadow-sm group-hover:scale-110 transition-transform">
                <Search size={40} className="text-gray-900" />
              </div>
              <h3 className="text-2xl font-bold text-pink-600 mb-4">Customer Research</h3>
              <p className="text-gray-600 leading-relaxed">
                We dive deep into data, extracting valuable insights and identifying lucrative opportunities for your business
              </p>
            </div>

            <div className="p-10 rounded-3xl bg-gray-50 text-center hover:shadow-xl transition-all border border-gray-100 group">
              <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center mx-auto mb-8 shadow-sm group-hover:scale-110 transition-transform">
                <Layout size={40} className="text-gray-900" />
              </div>
              <h3 className="text-2xl font-bold text-pink-600 mb-4">User-friendly Build</h3>
              <p className="text-gray-600 leading-relaxed">
                Our team expertly designs and develops websites and apps that effectively solve user problems and enhance usability.
              </p>
            </div>

            <div className="p-10 rounded-3xl bg-gray-50 text-center hover:shadow-xl transition-all border border-gray-100 group">
              <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center mx-auto mb-8 shadow-sm group-hover:scale-110 transition-transform">
                <Database size={40} className="text-gray-900" />
              </div>
              <h3 className="text-2xl font-bold text-pink-600 mb-4">Scalable Models</h3>
              <p className="text-gray-600 leading-relaxed">
                We implement Continuous Delivery pipelines to enable fast iteration and ensure your projects can scale seamlessly.
              </p>
            </div>
          </div>

          <div className="mt-32 text-center">
            <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-12">
              Let's Start a <span className="text-pink-600">New Project</span> Together
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

export default IntegratedBrandMgmt;
