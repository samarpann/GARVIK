import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Video, Film, Camera, Clapperboard, Send, Search, Layout, Database } from 'lucide-react';

const AdFilms = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is the typical process for creating an ad film?",
      answer: "The process begins with research and conceptualization, followed by scriptwriting and storyboarding. Then comes pre-production (casting, locations), the actual shoot, and finally post-production (editing, sound design, color grading)."
    },
    {
      question: "How long does it take to produce an ad film from concept to final delivery?",
      answer: "A standard ad film production can take anywhere from 2 to 6 weeks, depending on the complexity of the shoot, the number of locations, and the required post-production effects."
    },
    {
      question: "What is the importance of storytelling in ad films?",
      answer: "Storytelling creates an emotional connection with the audience. It makes the brand more relatable and helps the message stick in the viewer's mind much longer than simple product features would."
    },
    {
      question: "How can I measure the success of an ad film campaign?",
      answer: "Success can be measured through view counts, completion rates, brand recall studies, and specific conversion metrics if the film is part of a digital sales funnel."
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/services/ad_films_hero.webp" 
            alt="Ad Films Production" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold text-white"
          >
            Ad Films
          </motion.h1>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <img 
                src="/images/services/ad_films_secondary.jpg" 
                alt="Ad Film Creative Process" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Evoking Emotions, <span className="text-primary">Validating Claims</span></h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Ad films serve as a powerful tool to validate marketers’ claims by evoking the right emotions and desired consumer behaviors. Garvik India ensures that our ad films establish an immediate connection with the audience, making your product the undeniable hero of the story.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    <Clapperboard size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-xl mb-2">Product-Centric Creativity</h4>
                    <p className="text-gray-600">We prioritize the product as the hero, ensuring that creative elements enhance rather than overshadow your brand message.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    <Camera size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-xl mb-2">Big Idea Renditions</h4>
                    <p className="text-gray-600">Once we find a compelling idea worth backing, our creative team explores multiple renditions to find the perfect fit for your objectives.</p>
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
            <h2 className="text-4xl md:text-5xl font-bold">Film Production Insights</h2>
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

      {/* Service Highlights Section (Reused from Brand Mgmt for consistency) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-10 rounded-3xl bg-gray-50 text-center hover:shadow-xl transition-all border border-gray-100 group">
              <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center mx-auto mb-8 shadow-sm group-hover:scale-110 transition-transform">
                <Search size={40} className="text-gray-900" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Targeted Research</h3>
              <p className="text-gray-600 leading-relaxed">
                We dive deep into consumer behavior to find the "Big Idea" that will resonate with your specific audience.
              </p>
            </div>

            <div className="p-10 rounded-3xl bg-gray-50 text-center hover:shadow-xl transition-all border border-gray-100 group">
              <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center mx-auto mb-8 shadow-sm group-hover:scale-110 transition-transform">
                <Layout size={40} className="text-gray-900" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Creative Renditions</h3>
              <p className="text-gray-600 leading-relaxed">
                Our creative team crafts multiple visual stories, ensuring the product remains the central hero.
              </p>
            </div>

            <div className="p-10 rounded-3xl bg-gray-50 text-center hover:shadow-xl transition-all border border-gray-100 group">
              <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center mx-auto mb-8 shadow-sm group-hover:scale-110 transition-transform">
                <Database size={40} className="text-gray-900" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Impactful Delivery</h3>
              <p className="text-gray-600 leading-relaxed">
                High-quality production and post-production that delivers a professional and lasting impression.
              </p>
            </div>
          </div>

          <div className="mt-32 text-center">
            <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-12">
              Let's Create Your <span className="text-primary">Next Big Hit</span> Together
            </h2>
            <button className="bg-gray-900 text-white px-12 py-5 rounded-full font-bold text-xl hover:bg-gray-800 transition-all flex items-center gap-3 mx-auto">
              Start Production <Send size={24} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdFilms;
