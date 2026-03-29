import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="fixed w-full z-50 top-0 transition-all duration-300">
      {/* Top Bar */}
      <div className="bg-secondary-900 text-white py-2 text-sm hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center max-w-7xl">
          <div className="flex space-x-6">
            <a href="tel:+17808800035" className="flex items-center hover:text-primary-500 transition-colors">
              <Phone className="w-4 h-4 mr-2" />
              +1 780-880-0035
            </a>
            <a href="mailto:info@tadexenvironmental.com" className="flex items-center hover:text-primary-500 transition-colors">
              <Mail className="w-4 h-4 mr-2" />
              info@tadexenvironmental.com
            </a>
          </div>
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-2" />
            <span>Serving Canada, USA, Nigeria, Ghana</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className={cn(
          'transition-all duration-300',
          scrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 backdrop-blur-sm py-4 md:py-5'
        )}
      >
        <div className="container mx-auto px-4 flex justify-between items-center max-w-7xl">
          <Link to="/" className="flex items-center">
            <img 
              src="/logo.png" 
              alt="Tadex Environmental Logo" 
              className="h-12 md:h-14 w-auto object-contain" 
              onError={(e) => { e.currentTarget.src = 'https://placehold.co/200x80/transparent/22c55e?text=Tadex+Logo' }}
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  'font-medium transition-colors hover:text-primary-600',
                  location.pathname === link.path ? 'text-primary-600' : 'text-gray-700'
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-primary-600 text-white px-6 py-2.5 rounded-md font-medium hover:bg-primary-700 transition-colors shadow-sm"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-primary-600 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100">
            <div className="flex flex-col px-4 py-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    'block text-lg font-medium transition-colors',
                    location.pathname === link.path ? 'text-primary-600' : 'text-gray-800'
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="inline-block bg-primary-600 text-white px-6 py-3 rounded-md font-medium text-center hover:bg-primary-700 transition-colors mt-4"
                onClick={() => setIsOpen(false)}
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
