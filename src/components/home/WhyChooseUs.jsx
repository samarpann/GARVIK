import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, HeartPulse, Sparkles, TrendingUp } from 'lucide-react';

const sections = [
  {
    title: "Building Brands from Scratch",
    description: "Many first-gen entrepreneurs arrive at Garvik India with nothing more than a concept or a dream. What they leave with is a complete brand identity, a compelling launch strategy, and the support system to turn that vision into a business engine.",
    icon: <Sparkles className="w-6 h-6 text-primary" />,
    extra: "Whether it is a first-time entrepreneur launching a new FMCG product, or a boutique fashion label wanting to become a household name — Garvik India’s step-by-step approach has helped hundreds of ventures find their voice."
  },
  {
    title: "True Partnership, Not Transactional Work",
    description: "What differentiates Garvik India is its relationship-driven approach. Clients are not treated as 'projects' but seen as part of an expanding family of dreamers.",
    icon: <HeartPulse className="w-6 h-6 text-primary" />,
    extra: "The team often meets founders personally, understands their struggles, brainstorms solutions, and even advises less expensive options if it benefits the client’s long-term sustainability."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
              Why <span className="text-gradient">Garvik India</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We become part of the launch team of every entrepreneur we support. Our honesty, empathy, and mentorship make us a trusted incubator of entrepreneurial confidence.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group p-10 rounded-3xl bg-gray-50 hover:bg-white border border-gray-100 hover:border-primary/20 hover:shadow-2xl transition-all duration-500"
            >
              <div className="mb-6 p-4 rounded-2xl bg-white shadow-sm inline-block group-hover:scale-110 transition-transform">
                {section.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed font-medium">
                {section.description}
              </p>
              <p className="text-gray-500 text-sm leading-relaxed border-t border-gray-200 pt-6">
                {section.extra}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-20 p-10 rounded-[2.5rem] bg-gradient-to-br from-primary via-primary-light to-primary-dark text-white relative overflow-hidden text-center shadow-2xl"
        >
          <div className="relative z-10 max-w-2xl mx-auto">
            <ShieldCheck className="w-12 h-12 mb-6 mx-auto opacity-80" />
            <h3 className="text-2xl md:text-3xl font-bold mb-4 italic">
              "Honesty, Empathy & Mentorship"
            </h3>
            <p className="text-white/80 text-lg">
              Creating a legacy of trust and entrepreneurial success since 2017.
            </p>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
