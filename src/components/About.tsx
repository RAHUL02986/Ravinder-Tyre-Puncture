import React from 'react';
import { Users, Award, Clock, Heart } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: "Raj Kumar",
      role: "Owner & Master Technician",
      experience: "15 years",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
    },
    {
      name: "Suresh Sharma",
      role: "Senior Mechanic",
      experience: "12 years",
      image: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
    },
    {
      name: "Amit Singh",
      role: "Tyre Specialist",
      experience: "8 years",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
    }
  ];

  return (
    <div className="py-16">
      {/* Header */}
      <section className="bg-gradient-to-r from-green-600 to-blue-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Himalayan Tyres
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Serving Dharamshala with passion, expertise, and commitment to excellence since 2010
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Himalayan Tyres began as a small family business in the heart of Dharamshala, 
                founded by Raj Kumar with a vision to provide reliable, honest, and quick tyre 
                services to both local residents and the thousands of tourists who visit our 
                beautiful mountain town each year.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                What started with just basic puncture repairs has grown into a comprehensive 
                tyre service center, equipped with modern tools and staffed by experienced 
                professionals who understand the unique challenges of mountain driving.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, we're proud to be Dharamshala's most trusted tyre service provider, 
                known for our quick response times, fair pricing, and commitment to getting 
                you back on the road safely.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Our workshop"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Speed</h3>
              <p className="text-gray-600">Quick, efficient service without compromising quality</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality</h3>
              <p className="text-gray-600">Premium materials and workmanship in every service</p>
            </div>
            
            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Care</h3>
              <p className="text-gray-600">Treating every customer like family</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Trust</h3>
              <p className="text-gray-600">Building lasting relationships through honesty</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Expert Team</h2>
            <p className="text-xl text-gray-600">Experienced professionals dedicated to your safety</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center bg-gray-50 rounded-xl p-8">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                <p className="text-gray-600">{member.experience} of experience</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section 
        className="py-20 bg-cover bg-center relative"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 64, 175, 0.8), rgba(30, 64, 175, 0.6)), url('https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
          <p className="text-xl text-blue-100 leading-relaxed mb-8">
            "To provide the fastest, most reliable tyre services in Dharamshala, ensuring 
            that every journey through our beautiful mountains is safe and worry-free. We're 
            committed to excellence, innovation, and building lasting relationships with our 
            community."
          </p>
          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-2xl font-bold text-yellow-300 mb-4">15+ Years of Excellence</h3>
            <p className="text-blue-100">
              Serving over 10,000+ satisfied customers with 99.9% success rate
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;