import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Briefcase, Lightbulb, Users, BarChart3, Send, Search, Layout, Database } from 'lucide-react';

const Conferences = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is the primary purpose of a business conference?",
      answer: "The main goal is to share expertise, gain insights into industry trends, and facilitate professional growth through networking and knowledge exchange."
    },
    {
      question: "How can I maximize the value I get from attending a conference?",
      answer: "We recommend researching the agenda in advance, actively participating in networking sessions, taking detailed notes, and following up with your new contacts immediately after the event."
    },
    {
      question: "What are some common themes at these conferences?",
      answer: "Key themes typically include leadership, marketing strategies, emerging technologies, entrepreneurship, finance, and sustainability."
    },
    {
      question: "Virtual vs. In-Person: Which format is better?",
      answer: "Virtual conferences offer accessibility and lower costs, while in-person events provide a more immersive experience with higher-quality face-to-face networking and collaboration opportunities."
    }
  ];

  const valueProps = [
    {
      title: "Knowledge Pursuit",
      description: "Delve into industry trends, emerging technologies, and best practices with experts.",
      icon: <Lightbulb className="w-6 h-6 text-primary" />
    },
    {
      title: "Networking Hub",
      description: "Connect with collaborators, clients, and mentors to forge new partnerships.",
      icon: <Users className="w-6 h-6 text-primary" />
    },
    {
      title: "Innovation Center",
      description: "A marketplace for new ideas, products, and services for startups and established firms.",
      icon: <BarChart3 className="w-6 h-6 text-primary" />
    },
    {
      title: "Professional Growth",
      description: "Enhance your leadership skills and industry-specific knowledge through specialized workshops.",
      icon: <Briefcase className="w-6 h-6 text-primary" />
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/services/conferences_hero.jpg" 
            alt="Business Conferences" 
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
            Business Conferences
          </motion.h1>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <img 
                src="/images/services/conferences_secondary.jpg" 
                alt="Conference Hall" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Catalysts for <span className="text-primary">Innovation</span> & Growth</h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Our business conferences serve as vital platforms for sharing expertise and charting courses for future success. We bring together industry leaders and professionals to exchange insights that ignite passion and drive results.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {valueProps.map((prop, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center">
                      {prop.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">{prop.title}</h4>
                      <p className="text-sm text-gray-500">{prop.description}</p>
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
            <h2 className="text-4xl md:text-5xl font-bold">Conference Insights</h2>
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
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-10 rounded-3xl bg-white text-center shadow-sm hover:shadow-xl transition-all border border-gray-100 group">
              <div className="w-20 h-20 rounded-2xl bg-primary/5 flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform">
                <Search size={40} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Strategic Research</h3>
              <p className="text-gray-600">Identifying key topics and speakers that will deliver the highest value to your attendees.</p>
            </div>
            <div className="p-10 rounded-3xl bg-white text-center shadow-sm hover:shadow-xl transition-all border border-gray-100 group">
              <div className="w-20 h-20 rounded-2xl bg-primary/5 flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform">
                <Layout size={40} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Seamless Build</h3>
              <p className="text-gray-600">Expert coordination of logistics, technology, and design for a professional experience.</p>
            </div>
            <div className="p-10 rounded-3xl bg-white text-center shadow-sm hover:shadow-xl transition-all border border-gray-100 group">
              <div className="w-20 h-20 rounded-2xl bg-primary/5 flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform">
                <Database size={40} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Scalable Impact</h3>
              <p className="text-gray-600">Ensuring your conference message resonates long after the closing ceremony.</p>
            </div>
          </div>

          <div className="mt-32 text-center">
            <h2 className="text-4xl md:text-7xl font-bold text-gray-900 mb-12 italic">
              "Where Visionaries Meet"
            </h2>
            <button className="bg-primary text-white px-12 py-5 rounded-full font-bold text-xl hover:shadow-2xl transition-all flex items-center gap-3 mx-auto">
              Organize Your Conference <Send size={24} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Conferences;
