import React, { useRef } from 'react';
import { ShieldCheck, Target, HeartHandshake } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const WhyChooseUs = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from('.why-header', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    });

    gsap.from('.why-left', {
      scrollTrigger: {
        trigger: '.why-grid',
        start: 'top 70%',
      },
      x: -100,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    });

    gsap.from('.why-right', {
      scrollTrigger: {
        trigger: '.why-grid',
        start: 'top 70%',
      },
      x: 100,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    });

    gsap.from('.why-bottom', {
      scrollTrigger: {
        trigger: '.why-bottom',
        start: 'top 90%',
      },
      scale: 0.9,
      opacity: 0,
      duration: 1,
      ease: 'back.out(1.7)'
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mb-16 mx-auto text-center">
          <div className="why-header">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
              Why <span className="text-cursive ml-2">Garvik India</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              We become part of the launch team of every entrepreneur we support. Our honesty, empathy, and mentorship make us a trusted incubator of entrepreneurial confidence.
            </p>
          </div>
        </div>

        <div className="why-grid grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Section 1 */}
          <div className="why-left p-10 rounded-[2.5rem] bg-sky-50/50 border border-sky-100/50 shadow-lg hover:shadow-2xl hover:border-primary/20 transition-all duration-500 relative group overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10 group-hover:scale-150 transition-transform duration-700"></div>
            <div className="mb-8 p-4 rounded-2xl bg-white shadow-sm inline-block text-primary">
              <Target className="w-8 h-8" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Building Brands from Scratch</h3>
            <div className="space-y-4 text-gray-600 leading-relaxed font-medium">
              <p>
                Whether it is a first-time entrepreneur launching a new FMCG product, a tech founder looking to attract investors, or a boutique fashion label wanting to become a household name — Garvik India's step-by-step approach has helped hundreds of ventures find their voice.
              </p>
              <p>
                Many first-gen entrepreneurs arrive at Garvik India with nothing more than a concept or a dream. What they leave with is a complete brand identity, a compelling launch strategy, and the support system to turn that vision into a business engine.
              </p>
              <p>
                From helping develop the company's name and logo, choosing colours and fonts that reflect the ethos, crafting taglines that resonate emotionally, and conceptualising launch campaigns that spark conversations — Garvik India becomes part of the launch team of every entrepreneur it supports. The result? Businesses don't just start — they make an impact.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="why-right p-10 rounded-[2.5rem] bg-sky-50/50 border border-sky-100/50 shadow-lg hover:shadow-2xl hover:border-primary/20 transition-all duration-500 relative group overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full -z-10 group-hover:scale-150 transition-transform duration-700"></div>
            <div className="mb-8 p-4 rounded-2xl bg-white shadow-sm inline-block text-accent">
              <HeartHandshake className="w-8 h-8" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">True Partnership, Not Transactional Work</h3>
            <div className="space-y-4 text-gray-600 leading-relaxed font-medium">
              <p>
                What differentiates Garvik India in a competitive marketplace is its relationship-driven approach. Here, clients are not treated as "projects" but seen as part of an expanding family of dreamers.
              </p>
              <p>
                The team often meets founders personally, understands their struggles and motivations, brainstorms solutions, guides them on what to avoid—sometimes even advising less expensive options if it benefits the client's long-term sustainability.
              </p>
              <p>
                That kind of honesty, empathy and mentorship has made Garvik India not only a successful business — but also a trusted incubator of entrepreneurial confidence.
              </p>
            </div>
          </div>
        </div>

        <div className="why-bottom mt-20 p-10 rounded-[2.5rem] bg-gradient-to-br from-primary via-primary-light to-accent text-white relative overflow-hidden text-center shadow-2xl">
          <div className="relative z-10 max-w-2xl mx-auto">
            <ShieldCheck className="w-12 h-12 mb-6 mx-auto opacity-80" />
            <h3 className="text-2xl md:text-3xl font-bold mb-4 italic">
              "Honesty, Empathy & Mentorship"
            </h3>
            <p className="text-white/80 text-lg">
              Creating a legacy of trust and entrepreneurial success since 2017.
            </p>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -ml-32 -mb-32"></div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
