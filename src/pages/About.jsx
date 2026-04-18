import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Award, TrendingUp, Users, Quote } from 'lucide-react';

const coreSupport = [
  { area: "Brand Strategy & Identity", help: "Logo Design, Tagline, Positioning, Brand Voice, Vision Shaping" },
  { area: "Creative & Advertising", help: "TVCs, Digital Ads, Print, Outdoor Campaigns, Radio Spots, Packaging, Brochures" },
  { area: "Digital & Performance Marketing", help: "Social Media, SEO, PPC, E-mails, WhatsApp Marketing, Influencer Integration" },
  { area: "PR & Reputation Building", help: "Media Coverage, Launch Events, Celebrity Jury Meets, Editorial Features" },
  { area: "BTL & On-ground Activation", help: "Roadshows, Product Launches, Exhibitions, Sampling Activities" },
  { area: "Networking & Ecosystem Building", help: "Business Conclaves, Panel Discussions, Felicitation Events, Start-up Showcases" }
];

const sectors = [
  "Retail & FMCG", "Healthcare & Wellness", "Real Estate & Architecture", "Education & EdTech", 
  "Manufacturing & Technology", "Hospitality & Lifestyle", "Agriculture & Environment", "Fashion, Art & Culture"
];

const About = () => {
  return (
    <div className="pt-32 pb-24 bg-white selection:bg-primary selection:text-white">
      {/* Introduction */}
      <section className="container mx-auto px-4 md:px-6 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center"
        >
          <span className="text-primary font-bold uppercase tracking-widest text-sm mb-6 block">Our Story</span>
          <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight text-gray-900">
            Lighting the Torch for <br />
            <span className="text-gradient">Tomorrow’s Entrepreneurs</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-12">
            In a world where dreams are often fragile, entrepreneurship stands as a beacon of courage. Fueling that fire requires more than just ambition — it demands the power of a voice that amplifies one’s presence.
          </p>
        </motion.div>
      </section>

      {/* The Birth of an Idea */}
      <section className="py-24 bg-gray-50 border-y border-gray-100 mb-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-5xl font-bold mb-8 text-gray-900">The Birth of an <span className="text-primary">Idea (2017)</span></h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  2017 was a landmark year for the Indian economy. Start-up India was on a rise, and a new wave of young founders was ready to disrupt everything. Yet, most faced a common struggle — how to take an idea and present it powerfully.
                </p>
                <p>
                  Into that gap stepped Garvik India — a company that did not want to be another vendor, but rather a <span className="text-primary font-bold">"complete growth partner"</span>. Our purpose? To give every entrepreneur a launchpad built on strategy, creativity, and affordability.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="grid grid-cols-1 gap-6">
                <div className="p-10 rounded-[2rem] bg-white shadow-xl shadow-primary/5 border border-primary/10">
                  <BookOpen className="w-10 h-10 text-primary mb-6" />
                  <h4 className="text-2xl font-bold text-gray-900 mb-4 italic">"One Company — Infinite Possibilities"</h4>
                  <p className="text-gray-500">
                    Instead of scattering budgets across multiple agencies, founders discovered that Garvik India’s unique structure covered all key pillars of growth under a single umbrella.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Support Table */}
      <section className="container mx-auto px-4 md:px-6 mb-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Core Support Area</h2>
          <p className="text-gray-500">How we help entrepreneurs achieve success across every touchpoint.</p>
        </div>
        
        <div className="overflow-hidden rounded-[2.5rem] border border-gray-100 shadow-2xl">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-900 text-white">
              <tr>
                <th className="p-8 text-lg font-bold">Core Support Area</th>
                <th className="p-8 text-lg font-bold">How It Helps Entrepreneurs</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {coreSupport.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50/50 transition-colors">
                  <td className="p-8 font-bold text-gray-900 bg-gray-50/30 w-1/3">{item.area}</td>
                  <td className="p-8 text-gray-600">{item.help}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Impact & Sectors */}
      <section className="py-24 bg-white mb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">The Ripple Effect of <span className="text-gradient">Impact</span></h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">From 2017 to 2024, our influence has touched entrepreneurs from diverse sectors.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {sectors.map((sector, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="p-6 rounded-2xl bg-gray-50 border border-gray-100 text-center font-bold text-gray-700 hover:text-primary hover:border-primary/20 hover:shadow-lg transition-all"
              >
                {sector}
              </motion.div>
            ))}
          </div>
          
          <div className="mt-20 text-center max-w-3xl mx-auto">
            <p className="text-gray-600 text-lg leading-relaxed italic">
              "Several of these entrepreneurs credit Garvik India for helping them land their first 1,000 customers, get featured in the media, win awards, attract investors, or scale into new markets."
            </p>
          </div>
        </div>
      </section>

      {/* Road Ahead */}
      <section className="container mx-auto px-4 md:px-6 mb-32">
        <div className="p-12 md:p-20 rounded-[3rem] bg-gray-900 text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">The Road Ahead</h2>
            <p className="text-white/80 text-lg max-w-3xl leading-relaxed mb-10">
              As India steps confidently into a future driven by innovation, Garvik India remains committed to supporting the dreams of entrepreneurs — not as a vendor, but as a growth companion. We are currently expanding our digital backbone to create more platforms where you can learn, connect, and flourish.
            </p>
            <div className="flex items-center gap-4 text-primary font-bold text-xl">
              <TrendingUp size={28} />
              <span>Because when entrepreneurs rise, the nation rises.</span>
            </div>
          </div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -mr-48 -mb-48"></div>
        </div>
      </section>

      {/* Journey Glimpses */}
      <section className="container mx-auto px-4 md:px-6 mb-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Glimpses of Our Journey</h2>
          <p className="text-gray-500">A look into the events, teams, and moments that define Garvik India.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[
            { img: "10.jpeg", title: "Human Capital" },
            { img: "6.jpeg", title: "Strategic Meets" },
            { img: "4.jpeg", title: "Event Lighting" },
            { img: "5.jpeg", title: "Collaborative Spirit" },
            { img: "8.jpeg", title: "Award Ceremonies" },
            { img: "2.jpeg", title: "Cultural Roots" },
            { img: "12.jpeg", title: "Stage presence" },
            { img: "15.jpeg", title: "Public Relations" }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-3xl aspect-square shadow-lg"
            >
              <img 
                src={`/images/${item.img}`} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <span className="text-white font-bold text-lg">{item.title}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Founder's Desk */}
      <section className="container mx-auto px-4 md:px-6 mb-24">
        <div className="bg-gray-50 rounded-[3rem] p-10 md:p-20 flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/3">
            <div className="relative group">
              <div className="aspect-[3/4] rounded-[2rem] overflow-hidden bg-gray-200 shadow-2xl">
                <img src="/images/kamal-saini.png" alt="Kamal Saini" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" />
              </div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-primary/10 rounded-full -z-10 blur-2xl"></div>
            </div>
          </div>
          <div className="lg:w-2/3">
            <Quote className="w-16 h-16 text-primary/20 mb-8" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">From the Founder’s Desk</h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed mb-10 italic">
              <p>“When we started Garvik India in 2017, our dream was simple — to build a place where every entrepreneur, no matter how big or small, felt heard, supported, and empowered.”</p>
              <p>“At Garvik India, we don’t merely create logos, campaigns, or digital posts. We create confidence. We help you stand tall in the marketplace. You may be small today, but your vision is already big enough to change the world.”</p>
            </div>
            <div>
              <h4 className="text-2xl font-bold text-gray-900">Kamal Saini</h4>
              <p className="text-primary font-bold uppercase tracking-widest text-sm">Founder & Growth Partner, Garvik India</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
