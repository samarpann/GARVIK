import React from 'react';
import { motion } from 'framer-motion';
import { 
  Printer, Video, Users, Briefcase, Globe, Palette, Gem, Megaphone, Star, Rocket
} from 'lucide-react';

const detailedServices = [
  {
    title: "Print Media",
    description: "In the digital age, print remains a powerful medium. We offer business cards, brochures, and posters that exude excellence using cutting-edge technology and eco-friendly practices.",
    icon: <Printer className="w-8 h-8" />,
    color: "from-purple-500 to-purple-600",
    image: "/images/site_assets/service_print_media.webp"
  },
  {
    title: "Ads Films",
    description: "Evoking the right emotions to validate marketer's claims. We maintain product-centric creativity where the product remains the hero.",
    icon: <Video className="w-8 h-8" />,
    color: "from-pink-500 to-pink-600",
    image: "/images/site_assets/service_ad_film.webp" // Professional setting
  },
  {
    title: "PR / Felicitation Events",
    description: "Celebratory platforms to acknowledge accomplishments, strengthen relationships, and promote brand visibility through memorable experiences.",
    icon: <Users className="w-8 h-8" />,
    color: "from-indigo-500 to-indigo-600",
    image: "/images/site_assets/service_pr_events.webp" // Event stage
  },
  {
    title: "Business Conferences",
    description: "Catalysts for innovation and networking, bringing together experts to exchange insights and chart courses for future success.",
    icon: <Briefcase className="w-8 h-8" />,
    color: "from-blue-500 to-blue-600",
    image: "/images/site_assets/service_business_conf.webp" // Corporate networking
  },
  {
    title: "Product Road Show",
    description: "Immersive reveals that go beyond traditional marketing, allowing real-time interaction and direct engagement with potential customers.",
    icon: <Rocket className="w-8 h-8" />,
    color: "from-orange-500 to-orange-600",
    image: "/images/site_assets/service_product_roadshow.webp" // Stage interaction
  },
  {
    title: "Digital Marketing",
    description: "Powering the digital age through SEO, PPC, social media marketing, and ROI-based lead generation systems.",
    icon: <Globe className="w-8 h-8" />,
    color: "from-cyan-500 to-cyan-600",
    image: "/images/site_assets/service_digital_marketing.webp" // Dynamic vibe
  },
  {
    title: "Creative Design & Content",
    description: "The twin engines of engagement. We craft visual identities and narratives that transcend language barriers and resonate deeply.",
    icon: <Palette className="w-8 h-8" />,
    color: "from-red-500 to-red-600",
    image: "/images/site_assets/service_creative_design.webp" // Creative vibe
  },
  {
    title: "Integrated Brand Management",
    description: "A meticulously crafted ecosystem of perceptions. We ensure every touchpoint communicates a cohesive, compelling brand image.",
    icon: <Gem className="w-8 h-8" />,
    color: "from-emerald-500 to-emerald-600",
    image: "/images/site_assets/service_brand_mgmt.webp" // Interaction
  },
  {
    title: "Broadcasting Advertising",
    description: "Leveraging the unparalleled reach of TV and Radio to tap into millions of households with targeted, high-impact messaging.",
    icon: <Megaphone className="w-8 h-8" />,
    color: "from-teal-500 to-teal-600",
    image: "/images/site_assets/service_broadcast.webp" // Traditional/Grand feel
  },
  {
    title: "Celebrity Endorsement",
    description: "Strategic partnerships with influential voices to skyrocket brand trust and market positioning.",
    icon: <Star className="w-8 h-8" />,
    color: "from-yellow-500 to-yellow-600",
    image: "/images/11.jpeg" // High profile
  }
];

const Services = () => {
  return (
    <div className="pt-32 pb-24 bg-white selection:bg-primary selection:text-white">
      {/* Header */}
      <section className="container mx-auto px-4 md:px-6 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl"
        >
          <span className="text-primary font-bold uppercase tracking-widest text-sm mb-6 block">Our Solutions</span>
          <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight text-gray-900">
            Comprehensive <br />
            <span className="text-gradient">Brand Excellence</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
            We offer a comprehensive suite of integrated services tangible expressions of our commitment to your brand's success.
          </p>
        </motion.div>
      </section>

      {/* Detailed Services Grid */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {detailedServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group flex flex-col p-2 rounded-[2.5rem] bg-gray-50 hover:bg-white border border-transparent hover:border-primary/10 shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative h-64 w-full rounded-[2rem] overflow-hidden mb-8">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-60`}></div>
                <div className={`absolute bottom-6 left-6 w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white shadow-xl`}>
                  {service.icon}
                </div>
              </div>
              <div className="px-8 pb-8">
                <h4 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h4>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                <button className="mt-8 text-primary font-bold flex items-center gap-2 group/btn">
                   Register Interest <Rocket size={16} className="group-hover/btn:translate-y-[-2px] group-hover/btn:translate-x-[2px] transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="container mx-auto px-4 md:px-6 mt-32">
        <div className="bg-gray-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
           <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Need a Custom Strategy?</h2>
              <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">Our consultants are ready to brainstorm the perfect launch for your first-gen entrepreneurial dream.</p>
              <button className="btn btn-primary px-12 py-4 text-lg">Talk to an Expert</button>
           </div>
           <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px]"></div>
        </div>
      </section>
    </div>
  );
};

export default Services;
