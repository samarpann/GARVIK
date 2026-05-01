import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const AnimatedBackground = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const blobs = container.querySelectorAll('.blob');
    const lines = container.querySelectorAll('.bg-line');

    // Animate Blobs
    blobs.forEach((blob, index) => {
      gsap.to(blob, {
        x: 'random(-50, 50)vw',
        y: 'random(-50, 50)vh',
        scale: 'random(0.8, 1.8)',
        opacity: 'random(0.1, 0.3)',
        duration: `random(10, 20)`,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: index * 1.5
      });
    });

    // Animate Decorative Lines
    lines.forEach((line, index) => {
      gsap.to(line, {
        rotation: 360,
        duration: 30 + index * 10,
        repeat: -1,
        ease: 'none'
      });
      
      gsap.to(line, {
        scale: 1.2,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
    });

    // Follow mouse slightly
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const moveX = (clientX - window.innerWidth / 2) / 40;
      const moveY = (clientY - window.innerHeight / 2) / 40;

      gsap.to('.bg-parallax', {
        x: moveX,
        y: moveY,
        duration: 1.5,
        ease: 'power2.out',
        stagger: 0.05
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Scroll parallax
    const handleScroll = () => {
      const scrollY = window.scrollY;
      gsap.to(blobs, {
        y: (i) => (scrollY * (0.05 + i * 0.02)),
        overwrite: 'auto',
        duration: 0.8,
        ease: 'power1.out'
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-white selection:bg-primary/20">
      {/* Mesh Gradient Blobs */}
      <div className="bg-parallax">
        <div className="blob absolute w-[45vw] h-[45vw] rounded-full bg-primary/10 blur-[120px] top-[-10%] left-[-5%]"></div>
        <div className="blob absolute w-[40vw] h-[40vw] rounded-full bg-accent/10 blur-[120px] bottom-[-10%] right-[-5%]"></div>
        <div className="blob absolute w-[35vw] h-[35vw] rounded-full bg-primary-light/10 blur-[120px] top-[30%] left-[20%]"></div>
        <div className="blob absolute w-[30vw] h-[30vw] rounded-full bg-purple-200/15 blur-[100px] bottom-[15%] left-[5%]"></div>
        <div className="blob absolute w-[25vw] h-[25vw] rounded-full bg-pink-100/10 blur-[100px] top-[10%] right-[10%]"></div>
      </div>

      {/* Decorative Rotating Lines */}
      <div className="bg-line absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vw] border-[1px] border-primary/5 rounded-[40%] opacity-30"></div>
      <div className="bg-line absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] border-[1px] border-accent/5 rounded-[45%] opacity-20"></div>
      <div className="bg-line absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180vw] h-[180vw] border-[1px] border-primary/5 rounded-[38%] opacity-10"></div>
    </div>
  );
};

export default AnimatedBackground;
