import React from 'react';
import { Wrench, RotateCcw, Scale, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Wrench className="h-12 w-12" />,
      title: "Puncture Repair",
      description: "Expert repair of all types of punctures using high-quality patches and plugs. Quick diagnosis and permanent fixes.",
      features: ["Tubeless tyre repair", "Tube patching", "Sidewall assessment", "Quality guarantee"],
      price: "Starting ₹50"
    },
    {
      icon: <RotateCcw className="h-12 w-12" />,
      title: "Tyre Replacement",
      description: "Complete tyre replacement service with premium brands. Expert fitting and disposal of old tyres.",
      features: ["Premium tyre brands", "Professional fitting", "Old tyre disposal", "Size consultation"],
      price: "Varies by brand"
    },
    {
      icon: <Scale className="h-12 w-12" />,
      title: "Wheel Balancing",
      description: "Precision wheel balancing to ensure smooth rides and even tyre wear using computerized equipment.",
      features: ["Computerized balancing", "Weight adjustment", "Vibration elimination", "Extended tyre life"],
      price: "₹200 per wheel"
    },
    {
      icon: <Zap className="h-12 w-12" />,
      title: "Emergency Service",
      description: "24/7 emergency roadside assistance for urgent tyre issues. Quick response time guaranteed.",
      features: ["24/7 availability", "Roadside assistance", "Quick response", "On-spot repairs"],
      price: "₹300 + service"
    }
  ];

  return (
    <div className="py-16">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Professional Tyre Services
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Complete tyre solutions for cars, motorcycles, and commercial vehicles
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all">
                <div className="text-blue-700 mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Includes:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-green-600">{service.price}</span>
                  <button className="bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors">
                    Book Service
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Additional Services
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Tyre Rotation</h4>
              <p className="text-gray-600 mb-4">Regular rotation for even wear and extended life</p>
              <p className="text-green-600 font-bold">₹150 for 4 tyres</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Pressure Check</h4>
              <p className="text-gray-600 mb-4">Free pressure monitoring and adjustment</p>
              <p className="text-green-600 font-bold">Complimentary</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Tyre Inspection</h4>
              <p className="text-gray-600 mb-4">Comprehensive safety and wear assessment</p>
              <p className="text-green-600 font-bold">₹100</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Service Process
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Inspection", desc: "Thorough assessment of your tyre condition" },
              { step: "2", title: "Diagnosis", desc: "Identify the best repair or replacement option" },
              { step: "3", title: "Service", desc: "Professional repair using quality materials" },
              { step: "4", title: "Testing", desc: "Final check to ensure perfect performance" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-700 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;