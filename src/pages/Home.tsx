import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ShieldCheck, Clock, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    id: 1,
    title: 'Asbestos Abatement',
    description: 'Safe, compliant removal of hazardous asbestos materials from commercial and residential properties.',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    link: '/services#asbestos',
  },
  {
    id: 2,
    title: 'Lead Remediation',
    description: 'Expert lead paint and dust removal to ensure a safe environment for occupants and workers.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    link: '/services#lead',
  },
  {
    id: 3,
    title: 'Mold Removal',
    description: 'Comprehensive mold inspection, containment, and remediation to restore healthy indoor air quality.',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    link: '/services#mold',
  },
  {
    id: 4,
    title: 'Selective Demolition',
    description: 'Precision interior and exterior demolition services, preparing sites for renovation or new construction.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    link: '/services#demolition',
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="pt-20 md:pt-24">
      {/* Hero Slideshow Section */}
      <section className="relative h-[80vh] min-h-[600px] overflow-hidden bg-secondary-900">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
            />
            <div className="absolute inset-0 bg-black/60" />
            
            <div className="relative h-full container mx-auto px-4 max-w-7xl flex items-center">
              <div className="max-w-3xl text-white">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="inline-flex items-center space-x-2 bg-primary-600/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6"
                >
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  <span>Extinct and Distinct Delivery and Workmanship</span>
                </motion.div>
                
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
                >
                  {slides[currentSlide].title}
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                  className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl"
                >
                  {slides[currentSlide].description}
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.6 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <Link
                    to="/contact"
                    className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-md font-semibold text-lg transition-colors flex items-center justify-center"
                  >
                    Get a Free Quote
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                  <Link
                    to={slides[currentSlide].link}
                    className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-md font-semibold text-lg transition-colors flex items-center justify-center"
                  >
                    Learn More
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-0 right-0 z-10 flex justify-center space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-primary-500 w-8' : 'bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Trust Indicators Section */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mb-4">
                <Award className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-3xl font-bold text-secondary-900 mb-2">10+</h3>
              <p className="text-gray-600 font-medium">Years Experience</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mb-4">
                <ShieldCheck className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-3xl font-bold text-secondary-900 mb-2">A+</h3>
              <p className="text-gray-600 font-medium">BBB Rating</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mb-4">
                <CheckCircle2 className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-3xl font-bold text-secondary-900 mb-2">5.0</h3>
              <p className="text-gray-600 font-medium">Google Reviews</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mb-4">
                <Clock className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-3xl font-bold text-secondary-900 mb-2">24/7</h3>
              <p className="text-gray-600 font-medium">Emergency Response</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1581092335397-9583eb92d232?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Tadex Environmental Team"
                className="rounded-lg shadow-xl"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-sm font-bold text-primary-600 uppercase tracking-wider">About Tadex Environmental</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-secondary-900 leading-tight">
                Fully Integrated Canadian Environmental Consulting
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                With over a decade of experience, Tadex Environmental Corporation is a trusted leader in environmental consulting and remediation. We serve a diverse range of industries across Canada, the USA, Nigeria, and Ghana.
              </p>
              <ul className="space-y-3">
                {[
                  'Registered Program Ally (PA) under Energy Efficiency Alberta (EEA)',
                  'Serving Mining, Oil & Gas, Agricultural, and Manufacturing sectors',
                  'Expertise in Healthcare, Insurance, and Construction industries',
                  'Commitment to safety, compliance, and sustainable practices'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-primary-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                <Link
                  to="/about"
                  className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                >
                  Read Our Full Story
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
