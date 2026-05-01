import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/common/ScrollToTop';
import WhatsAppButton from './components/common/WhatsAppButton';
import AnimatedBackground from './components/common/AnimatedBackground';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Lazy loading pages for performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Philosophy = lazy(() => import('./pages/Philosophy'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const Contact = lazy(() => import('./pages/Contact'));
const IntegratedBrandMgmt = lazy(() => import('./pages/services/IntegratedBrandMgmt'));
const BroadcastAdvertising = lazy(() => import('./pages/services/BroadcastAdvertising'));
const PrintMedia = lazy(() => import('./pages/services/PrintMedia'));
const AdFilms = lazy(() => import('./pages/services/AdFilms'));
const PREvents = lazy(() => import('./pages/services/PREvents'));
const Conferences = lazy(() => import('./pages/services/Conferences'));
const RoadShow = lazy(() => import('./pages/services/RoadShow'));
const DigitalMarketing = lazy(() => import('./pages/services/DigitalMarketing'));
const CreativeDesign = lazy(() => import('./pages/services/CreativeDesign'));

function App() {
  useEffect(() => {
    // Refresh ScrollTrigger after a short delay to account for dynamic content loading
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <AnimatedBackground />
      <div className="flex flex-col min-h-screen bg-white text-gray-900 selection:bg-primary selection:text-white">
        <Navbar />
        <main className="flex-grow">
          <Suspense fallback={
            <div className="h-screen w-full flex items-center justify-center bg-dark">
              <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            </div>
          }>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/philosophy" element={<Philosophy />} />
              <Route path="/services" element={<Services />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/integrated-brand-mgmt" element={<IntegratedBrandMgmt />} />
              <Route path="/broadcast-advertising" element={<BroadcastAdvertising />} />
              <Route path="/print-media" element={<PrintMedia />} />
              <Route path="/ad-films" element={<AdFilms />} />
              <Route path="/pr-events" element={<PREvents />} />
              <Route path="/business-conferences" element={<Conferences />} />
              <Route path="/product-road-show" element={<RoadShow />} />
              <Route path="/digital-marketing" element={<DigitalMarketing />} />
              <Route path="/creative-design-content" element={<CreativeDesign />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;
