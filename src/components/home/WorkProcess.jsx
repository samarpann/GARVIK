import React, { useRef } from 'react';
import { Lightbulb, Atom, Star } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const steps = [
  {
    title: "Understand Client's need",
    icon: <Lightbulb className="w-8 h-8 text-primary" />
  },
  {
    title: "Design and Development",
    icon: <Atom className="w-8 h-8 text-primary" />
  },
  {
    title: "Going Live",
    icon: <Star className="w-8 h-8 text-primary" />
  }
];

const WorkProcess = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from('.process-image', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
      },
      x: -100,
      opacity: 0,
      duration: 1.2,
      ease: 'power4.out'
    });

    gsap.from('.process-step', {
      scrollTrigger: {
        trigger: '.process-steps-container',
        start: 'top 80%',
      },
      x: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.3,
      ease: 'power3.out'
    });

    gsap.to('.process-blob', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1
      },
      rotate: 360,
      scale: 1.2,
      x: 50,
      y: 50
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="process-image relative">
            {/* Blob Background */}
            <div className="process-blob absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-primary via-primary-dark to-accent opacity-90 rounded-full blur-2xl -z-10" style={{ borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%' }}></div>
            
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl z-10 border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" 
                alt="Working Professional" 
                className="w-full h-auto object-cover aspect-[4/5]"
              />
            </div>
          </div>

          <div className="process-steps-container space-y-6">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="process-step bg-purple-50/50 rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex items-center gap-6 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(157,80,187,0.15)] transition-all duration-300 border border-gray-50"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  {step.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">{step.title}</h3>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
