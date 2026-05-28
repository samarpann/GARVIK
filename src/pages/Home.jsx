import React, { useRef } from 'react';
import Hero from '../components/home/Hero';
import AgencyValues from '../components/home/AgencyValues';
import WhatWeDo from '../components/home/WhatWeDo';
import WhyChooseUs from '../components/home/WhyChooseUs';
import CarouselSection from '../components/home/CarouselSection';
import FAQSection from '../components/home/FAQSection';
import BrandIdentityBanner from '../components/home/BrandIdentityBanner';
import WorkProcess from '../components/home/WorkProcess';
import EnquiryForm from '../components/home/EnquiryForm';
import ClientsSection from '../components/home/ClientsSection';
import AboutUsSmall from '../components/home/AboutUsSmall';
import { ArrowRight, Trophy, Users, History, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const blogPosts = [
  {
    id: 1,
    title: "How to build a brand identity that lasts for decades.",
    category: "Marketing Trends",
    date: "April 18, 2026",
    excerpt: "Learn the secret step-by-step approach we use at Garvik India...",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=600",
    bgClass: "bg-indigo-100"
  },
  {
    id: 2,
    title: "The power of visual storytelling in digital age.",
    category: "Creative Design",
    date: "May 2, 2026",
    excerpt: "Discover how compelling visuals can transform your brand message...",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=600",
    bgClass: "bg-rose-100"
  },
  {
    id: 3,
    title: "Maximizing ROI with data-driven PR campaigns.",
    category: "Public Relations",
    date: "June 15, 2026",
    excerpt: "Why traditional PR is evolving and how to stay ahead of the curve...",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600",
    bgClass: "bg-amber-100"
  }
];

const Home = () => {
  const statsRef = useRef(null);

  useGSAP(() => {
    gsap.from('.stat-item', {
      scrollTrigger: {
        trigger: statsRef.current,
        start: 'top 85%',
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power2.out'
    });
  }, { scope: statsRef });

  return (
    <div className="overflow-hidden">
      <Hero />
      <AgencyValues />
      <WhatWeDo />
      <WhyChooseUs />
      <AboutUsSmall />
      
      {/* Stats Section */}
      <section ref={statsRef} className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            <div className="stat-item text-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center mx-auto mb-6 text-primary">
                <Heart size={32} />
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">50+</h3>
              <p className="text-gray-500 uppercase tracking-widest text-[10px] font-bold">Projects Done</p>
            </div>
            
            <div className="stat-item text-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center mx-auto mb-6 text-primary">
                <Users size={32} />
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">20+</h3>
              <p className="text-gray-500 uppercase tracking-widest text-[10px] font-bold">Brands Served</p>
            </div>

            <div className="stat-item text-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center mx-auto mb-6 text-primary">
                <History size={32} />
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">7+</h3>
              <p className="text-gray-500 uppercase tracking-widest text-[10px] font-bold">Years Experience</p>
            </div>

            <div className="stat-item text-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center mx-auto mb-6 text-primary">
                <Trophy size={32} />
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">15+</h3>
              <p className="text-gray-500 uppercase tracking-widest text-[10px] font-bold">Awards Won</p>
            </div>
          </div>
        </div>
      </section>

      <CarouselSection />
      <ClientsSection />
      <BrandIdentityBanner />
      <WorkProcess />
      <FAQSection />
      
      {/* Blog/Articles Placeholder */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4 text-cursive inline-block">Blog & Articles</h2>
              <p className="text-gray-500 max-w-xl text-lg">Insights, trends, and success stories from the world of branding and digital marketing.</p>
            </div>
            <Link to="/blog" className="text-primary font-bold flex items-center gap-2 hover:translate-x-2 transition-transform h-fit">
              View All Posts <ArrowRight size={20} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div key={post.id} className={`${post.bgClass} rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-all border border-transparent hover:border-primary/20 group`}>
                <div className="aspect-video bg-gray-200 overflow-hidden">
                  <img src={post.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={post.title} />
                </div>
                <div className="p-8">
                  <div className="text-xs font-bold text-primary uppercase mb-4 tracking-widest">{post.category}</div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">{post.title}</h4>
                  <p className="text-gray-600 text-sm mb-6">{post.excerpt}</p>
                  <span className="text-gray-500 text-xs font-medium">{post.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <EnquiryForm />
    </div>
  );
};

export default Home;
