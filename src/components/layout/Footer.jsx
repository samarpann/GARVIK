import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Share2, Globe, MessageCircle } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Social Icons SVGs (Brand icons removed in Lucide v1.0)
  const SimpleLinkedIn = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
  );

  const SimpleInstagram = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
  );

  const SimpleTwitter = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
  );

  const SimpleFacebook = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
  );

  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="text-2xl font-bold tracking-tighter text-gray-900">
              GARVIK<span className="text-primary">INDIA</span>
            </Link>
            <p className="text-gray-600 max-w-xs leading-relaxed">
              We empower visions of Business leaders. A 360 Integrated Marketing & Advertising Partner driving business outcomes via creative, media & influencer marketing.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-gray-200/50 rounded-full hover:bg-primary/10 transition-colors">
                <div className="text-gray-600 hover:text-primary">
                  <SimpleLinkedIn />
                </div>
              </a>
              <a href="#" className="p-2 bg-gray-200/50 rounded-full hover:bg-primary/10 transition-colors">
                <div className="text-gray-600 hover:text-primary">
                  <SimpleInstagram />
                </div>
              </a>
              <a href="#" className="p-2 bg-gray-200/50 rounded-full hover:bg-primary/10 transition-colors">
                <div className="text-gray-600 hover:text-primary">
                  <SimpleTwitter />
                </div>
              </a>
              <a href="#" className="p-2 bg-gray-200/50 rounded-full hover:bg-primary/10 transition-colors">
                <div className="text-gray-600 hover:text-primary">
                  <SimpleFacebook />
                </div>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gray-900 font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-gray-600 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/philosophy" className="text-gray-600 hover:text-primary transition-colors">Philosophy</Link></li>
              <li><Link to="/services" className="text-gray-600 hover:text-primary transition-colors">Our Services</Link></li>
              <li><Link to="/portfolio" className="text-gray-600 hover:text-primary transition-colors">Portfolio</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-gray-900 font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-4">
              <li className="text-gray-600 hover:text-primary cursor-pointer">Digital Marketing</li>
              <li className="text-gray-600 hover:text-primary cursor-pointer">Brand Promotion</li>
              <li className="text-gray-600 hover:text-primary cursor-pointer">PR & Events</li>
              <li className="text-gray-600 hover:text-primary cursor-pointer">Ad Films</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-gray-900 font-bold text-lg mb-6">Contact Us</h4>
            <div className="flex items-start space-x-3 text-gray-600">
              <MapPin size={24} className="text-primary flex-shrink-0" />
              <span>B-64, Sec-65, Noida (India)</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-600">
              <Mail size={20} className="text-primary" />
              <a href="mailto:info@garvikadvertising.com" className="hover:text-primary transition-colors font-medium">info@garvikadvertising.com</a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-gray-500">
          <p>© {currentYear} Garvik India. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
