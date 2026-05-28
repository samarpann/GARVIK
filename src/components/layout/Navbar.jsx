import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Navbar = () => {
  const navRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useGSAP(() => {
    if (navRef.current) {
      gsap.fromTo(navRef.current, 
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: 'power4.out', delay: 0.2 }
      );
    }
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Philosophy', path: '/philosophy' },
    { 
      title: 'Services', 
      path: '/services',
      dropdown: [
        { title: 'Integrated Brand Mgmt', path: '/integrated-brand-mgmt' },
        { title: 'Broadcast Advertising', path: '/broadcast-advertising' },
        { title: 'Print Media', path: '/print-media' },
        { title: 'Ad Films', path: '/ad-films' },
        { title: 'PR /Felicitation Events', path: '/pr-events' },
        { title: 'Business Conferences', path: '/business-conferences' },
        { title: 'Product Road Show', path: '/product-road-show' },
        { title: 'Digital Marketing', path: '/digital-marketing' },
        { title: 'Creative Design & Content', path: '/creative-design-content' },
        { title: 'Celebrity Endorsement', path: '/celebrity-endorsement' },
        { title: 'Celebrity Enrollment', path: '/celebrity-enrollment' },
        { title: 'AI Videos', path: '/ai-videos' },
      ]
    },
    { title: 'Portfolio', path: '/portfolio' },
    { title: 'Contact', path: '/contact' },
  ];

  return (
    <nav ref={navRef} className={`fixed w-full z-[100] transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-lg border-b border-gray-100 py-3 shadow-sm' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 group">
            <img 
              src="/images/site_assets/logo.png" 
              alt="Garvik India" 
              className="h-14 w-auto group-hover:scale-110 transition-transform" 
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            <span className="hidden text-xl font-bold text-primary tracking-tighter">
              GARVIK<span className="text-accent">INDIA</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div 
                key={link.title} 
                className="relative group"
                onMouseEnter={() => link.dropdown && setServicesOpen(true)}
                onMouseLeave={() => link.dropdown && setServicesOpen(false)}
              >
                <div className="flex items-center gap-1 cursor-pointer">
                  <Link
                    to={link.path}
                    className={`text-sm font-bold transition-colors hover:text-primary ${scrolled ? 'text-gray-900' : 'text-white'}`}
                  >
                    {link.title}
                  </Link>
                  {link.dropdown && <ChevronDown size={14} className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''} ${scrolled ? 'text-gray-900' : 'text-white'}`} />}
                </div>

                {link.dropdown && (
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute left-0 mt-2 w-64 bg-white shadow-2xl rounded-xl py-4 border border-gray-100 z-[60]"
                      >
                        {link.dropdown.map((sub) => (
                          <Link
                            key={sub.title}
                            to={sub.path}
                            className="block px-6 py-2.5 text-sm font-bold text-gray-900 hover:bg-primary hover:text-white transition-colors"
                          >
                            {sub.title}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
            <Link to="/contact" className="btn btn-primary px-5 py-2 text-sm font-bold">
              Get Started
            </Link>
          </div>

          {/* Mobile Nav Toggle */}
          <button
            className={`md:hidden ${scrolled || location.pathname !== '/' ? 'text-gray-900' : 'text-white'}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 shadow-lg max-h-[80vh] overflow-y-auto"
          >
            <div className="flex flex-col p-4 space-y-4">
              {navLinks.map((link) => (
                <div key={link.title}>
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-lg font-bold flex items-center justify-between ${location.pathname === link.path ? 'text-primary' : 'text-gray-900'}`}
                  >
                    {link.title}
                  </Link>
                  {link.dropdown && (
                    <div className="pl-4 mt-2 space-y-2 border-l-2 border-gray-100">
                      {link.dropdown.map((sub) => (
                        <Link
                          key={sub.title}
                          to={sub.path}
                          onClick={() => setIsOpen(false)}
                          className="block text-sm font-bold text-gray-600 hover:text-primary transition-colors"
                        >
                          {sub.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link to="/contact" onClick={() => setIsOpen(false)} className="btn btn-primary text-center font-bold">
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
