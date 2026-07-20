import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Users, Sparkles, CheckCircle2, Ticket, Send, Search, Layout, Database } from 'lucide-react';

const OutdoorAdvertising = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is the difference between endorsement and enrollment?",
      answer: "While endorsement is generally campaign-specific (like a single commercial or billboard), celebrity enrollment focuses on a deeper, long-term brand relationship, such as an official brand ambassadorship, VIP launch events, and active participation in community-driven events."
    },
    {
      question: "Can mid-sized companies afford celebrity enrollment?",
      answer: "Yes! We specialize in tiered associations. We can hook you up with regional stars, emerging film talent, and top-tier digital content creators who possess incredibly high engagement rates and fit comfortably within growing budgets."
    },
    {
      question: "What events are ideal for celebrity appearances?",
      answer: "New product launches, premium dealer/distributor meets, corporate milestone achievements, national press conferences, and large-scale public activation campaigns are all ideal candidates for celebrity enrollment."
    },
    {
      question: "How do you coordinate their schedule and travel logistics?",
      answer: "We offer end-to-end management, which includes coordinating flights, luxury accommodations, security details, styling/makeup requirements, and scheduling down to the minute so your corporate event proceeds without a hitch."
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/site_assets/service_product_roadshow.webp" 
            alt="Outdoor Advertising" 
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
            Outdoor Advertising
          </motion.h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mt-6">
            Forge long-term partnerships and invite top-tier stars to anchor your premium corporate and public events.
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <img 
                src="/images/site_assets/service_creative_design.webp" 
                alt="Outdoor Advertising Experience" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Long-Term Ambassadorship, <span className="text-primary">Unrivaled Hype</span></h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Nothing builds excitement quite like a personal visit from a beloved celebrity. Garvik India’s Celebrity Enrollment solution assists brands in forging long-lasting relationships and secures high-profile guest stars for critical events.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    <Sparkles size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-xl mb-2">Ambassador Programs</h4>
                    <p className="text-gray-600">Onboard high-profile figures as official faces of your brand to drive trust and consistency over years of growth.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    <Ticket size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-xl mb-2">Event Anchor Appearances</h4>
                    <p className="text-gray-600">Ensure your launches, galas, and national meets are star-studded, captivating, and highly visible across all media channels.</p>
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
            <h2 className="text-4xl md:text-5xl font-bold">Enrollment Insights</h2>
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
                <Users size={40} className="text-gray-900" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Elite Network</h3>
              <p className="text-gray-600 leading-relaxed">
                Direct access to top agents, managers, and celebrities, cutting out middlemen for better rates and faster response times.
              </p>
            </div>

            <div className="p-10 rounded-3xl bg-sky-50/50 text-center hover:shadow-xl transition-all border border-gray-100 group">
              <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center mx-auto mb-8 shadow-sm group-hover:scale-110 transition-transform">
                <CheckCircle2 size={40} className="text-gray-900" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Flawless Planning</h3>
              <p className="text-gray-600 leading-relaxed">
                Meticulous coordination of rider documents, security protocol, itineraries, and brand-safe event scripting.
              </p>
            </div>

            <div className="p-10 rounded-3xl bg-sky-50/50 text-center hover:shadow-xl transition-all border border-gray-100 group">
              <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center mx-auto mb-8 shadow-sm group-hover:scale-110 transition-transform">
                <Sparkles size={40} className="text-gray-900" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Media Amplification</h3>
              <p className="text-gray-600 leading-relaxed">
                Maximize the presence of enrolled stars via specialized PR campaigns, print layouts, and digital promotions.
              </p>
            </div>
          </div>

          <div className="mt-32 text-center">
            <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-12">
              Onboard Stellar Talent <span className="text-primary">Today</span>
            </h2>
            <button className="bg-gray-900 text-white px-12 py-5 rounded-full font-bold text-xl hover:bg-gray-800 transition-all flex items-center gap-3 mx-auto">
              Partner With Us <Send size={24} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OutdoorAdvertising;
