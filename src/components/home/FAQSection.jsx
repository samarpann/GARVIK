import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "What are animation videos? How can they help me?",
    answer: "Animation videos are computer-generated 2D or 3D motion-graphic videos that help deliver brand essence and product descriptions."
  },
  {
    question: "What content should I post on social media?",
    answer: "Content should be relevant to your audience, including product updates, educational content, and customer testimonials."
  },
  {
    question: "Is Print Media still relevant in the digital age?",
    answer: "Yes, Print Media is effective for reaching specific demographics and complements digital marketing efforts."
  },
  {
    question: "How long does it take to complete an animated video?",
    answer: "Typically between 4 and 6 weeks, depending on project complexity."
  },
  {
    question: "Why is Brand Management important for businesses?",
    answer: "It leads to increased brand recognition, customer loyalty, and competitive advantage."
  },
  {
    question: "What are some key Digital Marketing strategies?",
    answer: "Strategies include SEO, SEM, content marketing, email marketing, and social media marketing."
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
