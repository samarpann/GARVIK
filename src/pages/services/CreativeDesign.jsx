import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Palette, PenTool, Lightbulb, Share2, Send, Search, Layout, Database } from 'lucide-react';

const CreativeDesign = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is the difference between graphic design and content creation?",
      answer: "Graphic design focuses on the visual aspects like layout, color, and typography. Content creation involves the production of information—such as text, video, or audio—that engages and educates the audience."
    },
    {
      question: "How do you choose the right design strategy for a project?",
      answer: "We start by understanding the brand's identity, the target audience, and the project's specific goals. This research-driven approach ensures that the design is not just beautiful but also functional and effective."
    },
    {
      question: "What are some essential design principles for effective communication?",
      answer: "Key principles include balance, contrast, emphasis, movement, pattern, rhythm, and unity. These elements help organize the information and guide the viewer's eye to the most important message."
    },
    {
      question: "How can I measure the success of my creative design and content?",
      answer: "Success is measured through engagement metrics (likes, shares, comments), click-through rates, brand sentiment analysis, and the overall impact on conversion and revenue."
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/services/creative_design_hero.webp" 
            alt="Creative Design & Content" 
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
            Creative Design & Content
          </motion.h1>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <img 
                src="/images/services/creative_design_sec_1.webp" 
                alt="Creative Collaboration" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">The Twin Engines of <span className="text-primary">Engagement</span></h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Creative design and content are the twin engines that drive engagement and captivate audiences. We fuse visual storytelling with compelling narratives to create a resonant brand experience that transcends language barriers.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <Palette size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Visual Storytelling</h4>
                    <p className="text-sm text-gray-500">Communicating ideas through images and colors.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <PenTool size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Compelling Content</h4>
                    <p className="text-sm text-gray-500">Narratives that connect brands with people.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src="/images/services/creative_design_sec_2.webp" alt="Creative Mind" className="w-full h-full object-cover blur-sm" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-bold mb-8 italic">"Creativity is the soul of every campaign."</h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              We believe that every piece of design and every line of content should serve a purpose—to inspire, to inform, or to ignite a conversation. Our process ensures that your brand's voice is heard loud and clear.
            </p>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-primary font-bold">
                <Lightbulb size={24} />
                <span>Innovation</span>
              </div>
              <div className="flex items-center gap-2 text-primary font-bold">
                <Share2 size={24} />
                <span>Reach</span>
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
            <h2 className="text-4xl md:text-5xl font-bold">Creative Insights</h2>
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
            <div className="p-10 rounded-3xl bg-gray-50 text-center border border-gray-100">
              <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center mx-auto mb-8 shadow-sm">
                <Search size={40} className="text-gray-900" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Customer Research</h3>
              <p className="text-gray-600 leading-relaxed">We research your target audience's visual and psychological preferences to craft resonant designs.</p>
            </div>
            <div className="p-10 rounded-3xl bg-gray-50 text-center border border-gray-100">
              <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center mx-auto mb-8 shadow-sm">
                <Layout size={40} className="text-gray-900" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">User-friendly Build</h3>
              <p className="text-gray-600 leading-relaxed">Our content is structured for readability and engagement, ensuring your message is easily absorbed.</p>
            </div>
            <div className="p-10 rounded-3xl bg-gray-50 text-center border border-gray-100">
              <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center mx-auto mb-8 shadow-sm">
                <Database size={40} className="text-gray-900" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Scalable Models</h3>
              <p className="text-gray-600 leading-relaxed">We build creative assets that scale across all digital and physical mediums seamlessly.</p>
            </div>
          </div>

          <div className="mt-32 text-center">
            <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-12">
              Let's Create Something <span className="text-primary">Beautiful</span> Together
            </h2>
            <button className="bg-gray-900 text-white px-12 py-5 rounded-full font-bold text-xl hover:bg-gray-800 transition-all flex items-center gap-3 mx-auto">
              Start Your Design <Send size={24} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CreativeDesign;
