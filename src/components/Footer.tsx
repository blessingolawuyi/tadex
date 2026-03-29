import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-secondary-900 text-gray-300 py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="mb-6 inline-block bg-white p-3 rounded-xl shadow-sm">
              <img 
                src="/logo.png" 
                alt="Tadex Environmental Logo" 
                className="h-16 w-auto object-contain" 
                onError={(e) => { e.currentTarget.src = 'https://placehold.co/200x80/ffffff/22c55e?text=Tadex+Logo' }}
              />
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Extinct and Distinct Delivery and Workmanship. Over 10 years of experience providing top-tier environmental consulting and remediation services globally.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-primary-500 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary-500 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary-500 transition-colors">Our Services</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary-500 transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services#asbestos" className="hover:text-primary-500 transition-colors">Asbestos Abatement</Link>
              </li>
              <li>
                <Link to="/services#lead" className="hover:text-primary-500 transition-colors">Lead Remediation</Link>
              </li>
              <li>
                <Link to="/services#mold" className="hover:text-primary-500 transition-colors">Mold Removal</Link>
              </li>
              <li>
                <Link to="/services#demolition" className="hover:text-primary-500 transition-colors">Selective Demolition</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Serving Canada, USA, Nigeria, and Ghana</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0" />
                <a href="tel:+17808800035" className="text-sm hover:text-primary-500 transition-colors">+1 780-880-0035</a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0" />
                <a href="mailto:info@tadexenvironmental.com" className="text-sm hover:text-primary-500 transition-colors">info@tadexenvironmental.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Tadex Environmental Corporation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
