import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Star, Award, ShieldCheck, Handshake, Send, Search, Layout, Database } from 'lucide-react';

const CelebrityEndorsement = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How do you select the right celebrity for a brand?",
      answer: "We conduct deep audience analysis, aligning a celebrity's public persona, demographic appeal, and credibility with your brand's core values and objectives. This ensures that the partnership feels authentic and achieves maximum impact."
    },
    {
      question: "What are the key benefits of celebrity endorsement?",
      answer: "Immediate brand credibility, wider demographic reach, higher memory recall, and significantly boosted conversion rates. By associating with a trusted and popular figure, your brand gains instant trust in the consumer's eyes."
    },
    {
      question: "How do you manage the legal and contractual side?",
      answer: "Garvik India handles the entire lifecycle of the partnership, including contract negotiations, usage rights (digital, print, broadcast), legal compliance, and scheduling, so you don't have to worry about legal complexities."
    },
    {
      question: "What tiers of celebrities do you work with?",
      answer: "We have an extensive network that spans top-tier Bollywood and regional movie stars, national sports icons, micro & macro digital influencers, and recognized industry leaders, allowing us to build a strategy for any budget."
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/site_assets/service_business_conf.webp" 
            alt="Celebrity Endorsement" 
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
            Celebrity Endorsement
          </motion.h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mt-6">
            Elevate your brand presence and build immediate consumer trust through powerful, star-studded endorsements.
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <img 
                src="/images/site_assets/service_pr_events.webp" 
                alt="Celebrity Endorsement Process" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Strategic Partnerships, <span className="text-primary">Exponential Trust</span></h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                A strong endorsement can skyrocket your brand’s market positioning. At Garvik India, we bridge the gap between your brand and leading public figures, curating authentic collaborations that resonate deeply with your target demographics.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    <Handshake size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-xl mb-2">Authentic Matchmaking</h4>
                    <p className="text-gray-600">We analyze the core values of both your brand and the celebrity to ensure a natural, organic alignment that customers believe in.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-xl mb-2">360° Management</h4>
                    <p className="text-gray-600">From initial outreach to contract sign-off, photo-shoot coordination, and post-campaign analysis, we manage every step flawlessly.</p>
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
            <h2 className="text-4xl md:text-5xl font-bold">Endorsement Insights</h2>
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
                <Search size={40} className="text-gray-900" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Precision Selection</h3>
              <p className="text-gray-600 leading-relaxed">
                Data-backed metrics to determine which celebrity is most trusted by your target consumer base.
              </p>
            </div>

            <div className="p-10 rounded-3xl bg-sky-50/50 text-center hover:shadow-xl transition-all border border-gray-100 group">
              <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center mx-auto mb-8 shadow-sm group-hover:scale-110 transition-transform">
                <Layout size={40} className="text-gray-900" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Stunning Campaigns</h3>
              <p className="text-gray-600 leading-relaxed">
                Creative print, video, and social campaigns that fully leverage the star power of your ambassador.
              </p>
            </div>

            <div className="p-10 rounded-3xl bg-sky-50/50 text-center hover:shadow-xl transition-all border border-gray-100 group">
              <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center mx-auto mb-8 shadow-sm group-hover:scale-110 transition-transform">
                <Award size={40} className="text-gray-900" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Proven Results</h3>
              <p className="text-gray-600 leading-relaxed">
                Measurable tracking to show brand lift, visibility increases, and positive impact on conversion metrics.
              </p>
            </div>
          </div>

          <div className="mt-32 text-center">
            <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-12">
              Let's Bring A <span className="text-primary">Superstar</span> To Your Brand
            </h2>
            <button className="bg-gray-900 text-white px-12 py-5 rounded-full font-bold text-xl hover:bg-gray-800 transition-all flex items-center gap-3 mx-auto">
              Get Started Now <Send size={24} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CelebrityEndorsement;
