import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Users, Trophy, Megaphone, Heart, Send, Search, Layout, Database } from 'lucide-react';

const PREvents = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How do you plan a successful PR or Felicitation event?",
      answer: "We focus on compelling content, interactive sessions, and meaningful networking opportunities. Our planning includes everything from theme conceptualization to celebrity management and media coverage."
    },
    {
      question: "How can I ensure high attendee engagement?",
      answer: "We suggest using user-friendly event apps, real-time updates, interactive presentations, and engaging entertainment to keep the audience connected and involved throughout the event."
    },
    {
      question: "What technology do you use for event management?",
      answer: "We utilize advanced event management software, virtual platforms for hybrid events, and high-quality live streaming tools to ensure a seamless experience for both physical and remote attendees."
    },
    {
      question: "How do you measure the success of an event?",
      answer: "Success is tracked through key performance indicators (KPIs) such as total attendance, attendee satisfaction surveys, social media engagement levels, and post-event media reach."
    }
  ];

  const valueProps = [
    {
      title: "Strengthening Relationships",
      description: "Events for customers, partners, and employees foster loyalty, trust, and a deep sense of belonging.",
      icon: <Heart className="w-6 h-6 text-primary" />
    },
    {
      title: "Enhancing Reputation",
      description: "Recognition of contributions reinforces credibility and authority, backed by positive media coverage.",
      icon: <Trophy className="w-6 h-6 text-primary" />
    },
    {
      title: "Brand Visibility",
      description: "A powerful platform to showcase products, services, and core values to a broader, targeted audience.",
      icon: <Megaphone className="w-6 h-6 text-primary" />
    },
    {
      title: "Memorable Experiences",
      description: "Carefully planned presentations and entertainment leave lasting favorable impressions on your guests.",
      icon: <Users className="w-6 h-6 text-primary" />
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/services/pr_events_hero.jpg" 
            alt="PR and Felicitation Events" 
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
            PR / Felicitation Events
          </motion.h1>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <img 
                src="/images/services/pr_events_secondary.jpg" 
                alt="Event Celebration" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Celebrating Success, <span className="text-primary">Building Reputation</span></h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                PR and Felicitation events are powerful tools for acknowledging accomplishments and shaping positive industry perceptions. We create memorable experiences that strengthen relationships and amplify your brand's authority.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {valueProps.map((prop, index) => (
                  <div key={index} className="flex gap-4 p-5 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all border border-gray-100">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
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
            <h2 className="text-4xl md:text-5xl font-bold">Event Management Insights</h2>
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
              <h3 className="text-2xl font-bold text-primary mb-4">Strategic Research</h3>
              <p className="text-gray-600 leading-relaxed">
                We analyze your audience and goals to design an event that resonates and achieves your specific objectives.
              </p>
            </div>

            <div className="p-10 rounded-3xl bg-gray-50 text-center border border-gray-100">
              <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center mx-auto mb-8 shadow-sm">
                <Layout size={40} className="text-gray-900" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Seamless Build</h3>
              <p className="text-gray-600 leading-relaxed">
                From logistics to creative assets, we build every element of the event with precision and attention to detail.
              </p>
            </div>

            <div className="p-10 rounded-3xl bg-gray-50 text-center border border-gray-100">
              <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center mx-auto mb-8 shadow-sm">
                <Database size={40} className="text-gray-900" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Scalable Impact</h3>
              <p className="text-gray-600 leading-relaxed">
                We create events that scale your brand's reputation and provide a lasting foundation for future growth.
              </p>
            </div>
          </div>

          <div className="mt-32 text-center">
            <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-12">
              Let's Make Your <span className="text-primary">Next Event</span> Historic
            </h2>
            <button className="bg-gray-900 text-white px-12 py-5 rounded-full font-bold text-xl hover:bg-gray-800 transition-all flex items-center gap-3 mx-auto">
              Plan Your Event <Send size={24} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PREvents;
