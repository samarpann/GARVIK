import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Tv, Radio, Mic, BarChart3, Send } from 'lucide-react';

const BroadcastAdvertising = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Broadcast vs. Digital Advertising: What's the difference?",
      answer: "Broadcast advertising (TV/Radio) is designed to reach a mass, diverse audience simultaneously, making it ideal for brand awareness. Digital advertising targets specific demographics based on data and offers more precise measurement of results."
    },
    {
      question: "What determines the cost of broadcast advertising?",
      answer: "Costs vary depending on the platform (TV vs. Radio), the popularity of the time slot (e.g., Prime Time), the channel or station's reach, and the geographic area being covered."
    },
    {
      question: "Radio vs. Television: Which one should I choose?",
      answer: "Radio is cost-effective and excellent for local targeting and repetitive messaging. Television combines visual and auditory elements, making it powerful for emotional storytelling and high-impact brand building."
    },
    {
      question: "How do I measure the effectiveness of a broadcast campaign?",
      answer: "Effectiveness can be tracked through spikes in website traffic during ad airtimes, social media engagement levels, sales data analysis, and the use of dedicated call tracking software or unique promo codes."
    }
  ];

  const benefits = [
    {
      title: "Mass Audience Reach",
      description: "Ability to connect with millions through terrestrial radio, TV, and streaming platforms simultaneously.",
      icon: <Radio className="w-6 h-6 text-primary" />
    },
    {
      title: "Visual & Auditory Impact",
      description: "Television allows for compelling narratives, showcasing products in action and evoking strong emotions.",
      icon: <Tv className="w-6 h-6 text-primary" />
    },
    {
      title: "Targeted Messaging",
      description: "Options to select specific time slots, channels, or programs to align with your target demographics.",
      icon: <Mic className="w-6 h-6 text-primary" />
    },
    {
      title: "Real-time Impact",
      description: "Immediacy of live commercials during major events, news, or sports for maximum engagement.",
      icon: <BarChart3 className="w-6 h-6 text-primary" />
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/services/broadcast_hero.jpg" 
            alt="Broadcast Advertising" 
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
            Broadcast Advertising
          </motion.h1>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <img 
                src="/images/services/broadcast_secondary.jpg" 
                alt="Broadcast Media" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Reach Millions with <span className="text-primary">Impactful</span> Broadcasting</h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Broadcast advertising is a dynamic medium leveraging radio and television to convey messages to a wide and diverse audience. It taps into millions of households simultaneously, offering an unparalleled reach that digital platforms often struggle to match in terms of pure scale and cultural impact.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center">
                      {benefit.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">{benefit.title}</h4>
                      <p className="text-sm text-gray-500">{benefit.description}</p>
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
            <h2 className="text-4xl md:text-5xl font-bold">Broadcasting Insights</h2>
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
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">
            Ready to <span className="text-primary">Broadcast</span> Your Vision?
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Our team of media planners and creative experts are ready to help you dominate the airwaves.
          </p>
          <button className="bg-primary text-white px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all flex items-center gap-2 mx-auto">
            Get a Free Quote <Send size={20} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default BroadcastAdvertising;
