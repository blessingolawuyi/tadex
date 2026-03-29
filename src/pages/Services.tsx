import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const services = [
  {
    id: 'asbestos',
    title: 'Asbestos Abatement',
    description: 'Safe, compliant removal of hazardous asbestos materials from commercial and residential properties.',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    features: [
      'Type 1, 2, and 3 Asbestos Removal',
      'Air Monitoring and Clearance Testing',
      'Safe Disposal and Documentation',
      'Residential and Commercial Services'
    ]
  },
  {
    id: 'lead',
    title: 'Lead Remediation',
    description: 'Expert lead paint and dust removal to ensure a safe environment for occupants and workers.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    features: [
      'Lead Paint Removal and Encapsulation',
      'Lead Dust Decontamination',
      'Soil Remediation',
      'Compliance with Health Canada Guidelines'
    ]
  },
  {
    id: 'mold',
    title: 'Mold Removal',
    description: 'Comprehensive mold inspection, containment, and remediation to restore healthy indoor air quality.',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    features: [
      'Detailed Mold Inspections and Testing',
      'Source Identification and Moisture Control',
      'Safe Containment and Removal',
      'Post-Remediation Verification'
    ]
  },
  {
    id: 'demolition',
    title: 'Selective Demolition',
    description: 'Precision interior and exterior demolition services, preparing sites for renovation or new construction.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    features: [
      'Interior Strip-Outs',
      'Structural Demolition',
      'Hazardous Material Segregation',
      'Waste Management and Recycling'
    ]
  }
];

export default function Services() {
  return (
    <div className="pt-20 md:pt-24">
      {/* Hero Section */}
      <section className="relative py-24 bg-secondary-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary-900 to-secondary-900/80" />
        <div className="relative container mx-auto px-4 max-w-7xl z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Comprehensive environmental consulting and remediation solutions tailored to your specific needs, ensuring safety and compliance.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-16 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="lg:w-1/2">
                  <div className="relative group overflow-hidden rounded-2xl shadow-xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-secondary-900/20 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                </div>
                
                <div className="lg:w-1/2 space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-secondary-900">{service.title}</h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                    <h3 className="text-xl font-semibold text-secondary-900 mb-4">Key Features</h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-4">
                    <Link
                      to="/contact"
                      className="inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-md font-semibold transition-colors"
                    >
                      Request a Quote
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary-900 text-white text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Environmental Consulting?</h2>
          <p className="text-xl text-gray-300 mb-10">
            Contact Tadex Environmental today for expert advice and reliable remediation services.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-md font-semibold text-lg transition-colors"
          >
            Contact Us Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
