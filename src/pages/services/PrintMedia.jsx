import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Printer, Zap, Settings, ShieldCheck, Leaf, Clock, Send } from 'lucide-react';

const PrintMedia = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What exactly is print media?",
      answer: "Print media refers to physical formats such as newspapers, magazines, brochures, and flyers that provide a tangible way to communicate with audiences away from digital screens."
    },
    {
      question: "What are the advantages of print media over digital advertising?",
      answer: "Print offers tangibility, established credibility, high reader engagement, and a longer lifespan. It also allows for highly targeted local reach through physical distribution."
    },
    {
      question: "How do you measure the effectiveness of print media?",
      answer: "We track performance through coupon redemptions, dedicated QR codes, website traffic spikes during distribution, and customer surveys."
    },
    {
      question: "What are some common challenges in print media?",
      answer: "Key challenges include higher production and distribution costs compared to digital, and the inability to update content once it has been printed."
    }
  ];

  const features = [
    {
      title: "Unparalleled Expertise",
      description: "Legacy of experience in design, material selection, and high-quality production.",
      icon: <Settings className="w-6 h-6 text-primary" />
    },
    {
      title: "Cutting-Edge Technology",
      description: "Utilizing state-of-the-art printing presses and premium finishing equipment.",
      icon: <Zap className="w-6 h-6 text-primary" />
    },
    {
      title: "Quality Assurance",
      description: "Stringent control processes ensuring color accuracy and premium finishing.",
      icon: <ShieldCheck className="w-6 h-6 text-primary" />
    },
    {
      title: "Eco-Friendly Practices",
      description: "Committed to sustainability using eco-friendly inks and responsibly sourced paper.",
      icon: <Leaf className="w-6 h-6 text-primary" />
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/services/print_media_hero.jpg" 
            alt="Print Media" 
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
            Print Media
          </motion.h1>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <img 
                src="/images/services/print_media_secondary.jpg" 
                alt="Print Media Production" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Tangible Excellence in a <span className="text-primary">Digital World</span></h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                In an era dominated by pixels, the power of print remains unmatched for building credibility and leaving a lasting physical impression. Our print media solutions combine traditional craftsmanship with modern efficiency.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">{feature.title}</h4>
                      <p className="text-sm text-gray-500">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
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
            <h2 className="text-4xl md:text-5xl font-bold">Print Media Insights</h2>
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

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-4 mb-8">
            <Clock className="text-primary w-8 h-8" />
            <h2 className="text-3xl font-bold text-gray-900">Need it Fast? Timely Delivery Guaranteed.</h2>
          </div>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            From business cards to large scale outdoor banners, we deliver quality on time, every time.
          </p>
          <button className="bg-gray-900 text-white px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all flex items-center gap-2 mx-auto">
            Get Started Now <Send size={20} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default PrintMedia;
