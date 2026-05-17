import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Cpu, Video, Zap, Film, Send, Search, Layout, Database } from 'lucide-react';

const AIVideos = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What are AI-generated brand videos?",
      answer: "These are visual assets created using advanced machine learning algorithms and synthetic media generators. They can generate life-like virtual human avatars, custom high-quality narrations, and custom backgrounds without needing massive physical production crews or studio shoots."
    },
    {
      question: "What is the turnaround time for an AI video?",
      answer: "While standard video production requires weeks of filming and editing, high-quality AI video content can be conceived, generated, polished, and delivered within 24 to 72 hours."
    },
    {
      question: "Can we translate AI videos into multiple languages?",
      answer: "Absolutely. One of the greatest features of AI videos is instant translation. We can translate a single video avatar into dozens of Indian and international languages with highly accurate lip-syncing and matching voice synthesis."
    },
    {
      question: "Are AI videos safe and commercially licensed?",
      answer: "Yes, 100%. We secure complete intellectual property and commercial copyrights for all AI avatars, voices, templates, and synthesized audio tracks used in your campaigns."
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/site_assets/service_digital_marketing.webp" 
            alt="AI Videos Production" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold text-white leading-tight"
          >
            AI Videos
          </motion.h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mt-6">
            Leverage bleeding-edge artificial intelligence to synthesize hyper-realistic video assets and custom personalized content at scale.
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <img 
                src="/images/site_assets/service_ad_film.webp" 
                alt="AI Video Synthesizing" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Revolutionary Media, <span className="text-primary">Fractional Cost</span></h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                In today's fast-paced digital world, content is king, but high production costs can throttle growth. Our AI Video synthesis solutions allow you to produce beautiful, engaging, and hyper-personalized visual assets in minutes instead of weeks.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    <Cpu size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-xl mb-2">Virtual Brand Spokespersons</h4>
                    <p className="text-gray-600">Create custom AI avatars that perfectly match your brand's target aesthetic, delivering announcements and product walkthroughs effortlessly.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    <Zap size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-xl mb-2">Hyper-Personalized Campaigns</h4>
                    <p className="text-gray-600">Generate thousands of customized video messages, addressing each of your customers by their first name to skyrocket conversion rates.</p>
                  </div>
                </div>
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
            <h2 className="text-4xl md:text-5xl font-bold">AI Video Insights</h2>
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

      {/* Service Highlights Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-10 rounded-3xl bg-sky-50/50 text-center hover:shadow-xl transition-all border border-gray-100 group">
              <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center mx-auto mb-8 shadow-sm group-hover:scale-110 transition-transform">
                <Video size={40} className="text-gray-900" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Scalable Creative</h3>
              <p className="text-gray-600 leading-relaxed">
                Generate high-quality video content variations at speed to dynamic-test dozens of ad styles and messages.
              </p>
            </div>

            <div className="p-10 rounded-3xl bg-sky-50/50 text-center hover:shadow-xl transition-all border border-gray-100 group">
              <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center mx-auto mb-8 shadow-sm group-hover:scale-110 transition-transform">
                <Cpu size={40} className="text-gray-900" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Multilingual Support</h3>
              <p className="text-gray-600 leading-relaxed">
                Launch regionalized campaigns instantly with hyper-realistic translations in over 15 Indian languages.
              </p>
            </div>

            <div className="p-10 rounded-3xl bg-sky-50/50 text-center hover:shadow-xl transition-all border border-gray-100 group">
              <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center mx-auto mb-8 shadow-sm group-hover:scale-110 transition-transform">
                <Film size={40} className="text-gray-900" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Cost-Efficient Synthesis</h3>
              <p className="text-gray-600 leading-relaxed">
                Slash typical commercial filming, equipment hire, post-production, and voiceover costs by over 80%.
              </p>
            </div>
          </div>

          <div className="mt-32 text-center">
            <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-12">
              Step Into The <span className="text-primary">Future of Video</span>
            </h2>
            <button className="bg-gray-900 text-white px-12 py-5 rounded-full font-bold text-xl hover:bg-gray-800 transition-all flex items-center gap-3 mx-auto">
              Synthesize Your Video <Send size={24} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIVideos;
