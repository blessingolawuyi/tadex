import { CheckCircle2, ShieldCheck, Clock, Users, Building2, Globe2 } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-20 md:pt-24">
      {/* Hero Section */}
      <section className="relative py-24 bg-secondary-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary-900 to-secondary-900/80" />
        <div className="relative container mx-auto px-4 max-w-7xl z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">About Tadex Environmental</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Extinct and Distinct Delivery and Workmanship. We are a fully integrated Canadian environmental consulting company dedicated to safety, compliance, and excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-secondary-900 mb-4">Our Story & Expertise</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  With over 10 years of experience, Tadex Environmental Corporation has established itself as a premier provider of environmental consulting and remediation services. We operate globally, serving clients across Canada, the USA, Nigeria, and Ghana.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-secondary-900 mb-4">Industries We Serve</h3>
                <p className="text-gray-600 mb-6">
                  We provide specialized environmental solutions tailored to the unique needs of diverse sectors, ensuring compliance and safety in every project.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    'Mining', 'Oil & Gas', 'Agricultural', 'Manufacturing',
                    'Healthcare', 'Insurance', 'Construction', 'Commercial Real Estate'
                  ].map((industry, index) => (
                    <div key={index} className="flex items-center space-x-3 bg-gray-50 p-4 rounded-lg border border-gray-100">
                      <Building2 className="w-5 h-5 text-primary-600 flex-shrink-0" />
                      <span className="font-medium text-gray-800">{industry}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-primary-600 rounded-2xl transform translate-x-4 translate-y-4 -z-10 opacity-20" />
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Tadex Environmental Professionals"
                className="rounded-2xl shadow-2xl object-cover w-full h-[600px]"
                referrerPolicy="no-referrer"
              />
              
              {/* Floating Badge */}
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl border border-gray-100 max-w-xs">
                <div className="flex items-center space-x-4 mb-2">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <Globe2 className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary-900">Global Reach</h4>
                    <p className="text-sm text-gray-500">4 Countries Served</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">Why Choose Tadex?</h2>
            <p className="text-lg text-gray-600">
              We combine technical expertise with a commitment to customer satisfaction, delivering results you can trust.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: ShieldCheck,
                title: 'Certified Experts',
                description: 'Our team consists of highly trained, certified professionals who stay up-to-date with the latest environmental regulations and remediation techniques.'
              },
              {
                icon: CheckCircle2,
                title: 'Strict Compliance',
                description: 'We ensure all projects meet or exceed local, provincial, and federal environmental standards, protecting you from liability.'
              },
              {
                icon: Clock,
                title: 'Rapid Response',
                description: 'Environmental emergencies require immediate action. We offer 24/7 rapid response services to mitigate risks quickly and effectively.'
              },
              {
                icon: Users,
                title: 'Client-Centric Approach',
                description: 'We prioritize clear communication, transparent pricing, and tailored solutions to meet the specific needs of each client.'
              },
              {
                icon: Building2,
                title: 'Registered Program Ally',
                description: 'Proudly registered as a Program Ally (PA) under Energy Efficiency Alberta (EEA), demonstrating our commitment to sustainable practices.'
              },
              {
                icon: Globe2,
                title: 'International Experience',
                description: 'Bringing Canadian standards of excellence to projects across North America and Africa, adapting to diverse environmental challenges.'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-primary-50 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-secondary-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
