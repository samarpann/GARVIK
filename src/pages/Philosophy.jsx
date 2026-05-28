import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Gem, Award, CheckCircle2, Mic, Printer, Video, Globe, Palette, Megaphone, Users, Briefcase, Star, Rocket } from 'lucide-react';

const detailedServices = [
  {
    title: "Print Media",
    description: "In the digital age, print remains a powerful medium. We offer business cards, brochures, and posters that exude excellence using cutting-edge technology and eco-friendly practices.",
    icon: <Printer className="w-6 h-6" />
  },
  {
    title: "Ads Films",
    description: "Evoking the right emotions to validate marketer's claims. We maintain product-centric creativity where the product remains the hero.",
    icon: <Video className="w-6 h-6" />
  },
  {
    title: "PR / Felicitation Events",
    description: "Celebratory platforms to acknowledge accomplishments, strengthen relationships, and promote brand visibility through memorable experiences.",
    icon: <Users className="w-6 h-6" />
  },
  {
    title: "Business Conferences",
    description: "Catalysts for innovation and networking, bringing together experts to exchange insights and chart courses for future success.",
    icon: <Briefcase className="w-6 h-6" />
  },
  {
    title: "Product Road Show",
    description: "Immersive reveals that go beyond traditional marketing, allowing real-time interaction and direct engagement with potential customers.",
    icon: <Rocket className="w-6 h-6" />
  },
  {
    title: "Digital Marketing",
    description: "Powering the digital age through SEO, PPC, social media marketing, and ROI-based lead generation systems.",
    icon: <Globe className="w-6 h-6" />
  },
  {
    title: "Creative Design & Content",
    description: "The twin engines of engagement. We craft visual identities and narratives that transcend language barriers and resonate deeply.",
    icon: <Palette className="w-6 h-6" />
  },
  {
    title: "Integrated Brand Management",
    description: "A meticulously crafted ecosystem of perceptions. We ensure every touchpoint communicates a cohesive, compelling brand image.",
    icon: <Gem className="w-6 h-6" />
  },
  {
    title: "Broadcasting Advertising",
    description: "Leveraging the unparalleled reach of TV and Radio to tap into millions of households with targeted, high-impact messaging.",
    icon: <Megaphone className="w-6 h-6" />
  },
  {
    title: "Celebrity Endorsement",
    description: "Strategic partnerships with influential voices to skyrocket brand trust and market positioning.",
    icon: <Star className="w-6 h-6" />
  },
  {
    title: "Celebrity Enrollment",
    description: "Onboarding celebrities for long-term brand associations and exclusive event appearances.",
    icon: <Users className="w-6 h-6" />
  },
  {
    title: "AI Videos",
    description: "Leveraging cutting-edge AI technology to create hyper-realistic video content and personalized brand messages.",
    icon: <Video className="w-6 h-6" />
  }
];

const bgColors = [
  "bg-purple-100",
  "bg-pink-100",
  "bg-blue-100",
  "bg-cyan-100",
  "bg-emerald-100",
  "bg-orange-100",
  "bg-rose-100",
  "bg-indigo-100"
];

const Philosophy = () => {
  return (
    <div className="pt-32 pb-24 bg-white selection:bg-primary selection:text-white">
      {/* Philosophy Header */}
      <section className="container mx-auto px-4 md:px-6 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center"
        >
          <span className="text-primary font-bold uppercase tracking-widest text-sm mb-6 block">Our Philosophy</span>
          <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight text-gray-900">
            Rooted in <span className="text-cursive ml-2">Creativity & Strategic</span> Excellence
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            At Garvik India, we understand that a brand is more than just a logo; it’s an ecosystem of perceptions and experiences. Our comprehensive suite of services are tangible expressions of our commitment to your vision.
          </p>
        </motion.div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-gray-900 py-32 mb-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/images/site_assets/hero_business_conf.webp" alt="Philosophy background" className="w-full h-full object-cover opacity-20 scale-110 blur-sm" />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/90 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mb-8 border border-primary/30">
                <Eye className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-4xl font-bold text-white mb-6">Our Vision</h2>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                To be the primary catalyst for entrepreneurial success in India, transforming fragile dreams into robust, market-leading brands. We envision a future where every visionary has the launchpad they need to create their own destiny rather than waiting for it to arrive.
              </p>
              <div className="flex items-center gap-3 text-primary font-bold italic">
                <Award size={20} />
                <span>Excellence, Innovation & Impact</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mb-8 border border-primary/30">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                To streamline the complex world of marketing into a power-packed growth solution. We mission to empower start-ups and SMEs with strategy, creativity, and technology, providing the powerful voice needed to amplify their presence and disrupt the marketplace.
              </p>
              <div className="flex items-center gap-3 text-primary font-bold italic">
                <CheckCircle2 size={20} />
                <span>Client-Centricity & Growth</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Comprehensive Services Grid */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Tangible Expressions of <span className="text-gradient">Our Values</span></h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">Explore the detailed pillars of our strategic marketing and advertising engine.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {detailedServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`group p-8 rounded-[2rem] ${bgColors[index % bgColors.length]} hover:bg-white border border-transparent hover:border-primary/20 shadow-sm hover:shadow-2xl transition-all duration-500`}
            >
              <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500 group-hover:rotate-6">
                {service.icon}
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h4>
              <p className="text-gray-600 leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* Portfolio CTA */}
      <section className="container mx-auto px-4 md:px-6 mt-32">
        <div className="bg-gradient-to-r from-primary to-primary-light rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 italic">"A brand is more than just a logo"</h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Experience the difference of working with a strategic partner that prioritizes your brand's enduring legacy across the world stage.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary px-10 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all"
            >
              Explore Our Portfolio
            </motion.button>
          </div>
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -ml-32 -mt-32"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-48 -mb-48"></div>
        </div>
      </section>
    </div>
  );
};

export default Philosophy;
