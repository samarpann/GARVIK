import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "What industries does Garvik India specialize in?",
    answer: "We cover a diverse range of sectors including Retail & FMCG, Healthcare, Real Estate, Education, Manufacturing, and Hospitality. Our 360° approach allows us to adapt to any industry's unique needs."
  },
  {
    question: "How long does it take to see results from digital marketing?",
    answer: "While some results like social engagement can be immediate, SEO and organic growth typically take 3-6 months. Our ROI-based performance marketing aims for faster conversions through targeted campaigns."
  },
  {
    question: "Do you offer customized packages for startups?",
    answer: "Absolutely. We pride ourselves on being a growth partner for entrepreneurs. We offer tiered services and even advise on cost-effective options to ensure long-term sustainability for new ventures."
  },
  {
    question: "What makes Garvik India different from other agencies?",
    answer: "Our relationship-driven approach. We don't just execute projects; we become part of your launch team. Our founder-led mentorship and integrated model (creative, digital, PR, BTL) provide a power-packed growth engine under one roof."
  }
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-500">Everything you need to know about working with Garvik India.</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-100 rounded-2xl overflow-hidden hover:border-primary/20 transition-colors shadow-sm">
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left bg-white transition-colors"
                aria-expanded={activeIndex === index}
              >
                <span className="font-bold text-gray-900 pr-8">{faq.question}</span>
                <span className="text-primary flex-shrink-0">
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
                    <div className="px-6 pb-6 text-gray-600 leading-relaxed bg-white">
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
  );
};

export default FAQSection;
