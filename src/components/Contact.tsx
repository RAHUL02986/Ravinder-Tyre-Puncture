import React from 'react';
import { MapPin, Phone, Mail, Clock, Car, AlertTriangle } from 'lucide-react';

const Contact = () => {
  return (
    <div className="py-16">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-700 to-green-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Contact & Location
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Visit us in the heart of Dharamshala or call for emergency assistance
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Address</h3>
                    <p className="text-gray-600 mt-1">
                      Shop No. 15, Main Bazaar Road<br />
                      McLeod Ganj, Dharamshala<br />
                      Himachal Pradesh - 176219
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600 mt-1">
                      <a href="tel:+91-9876543210" className="hover:text-green-600">+91-9876543210</a><br />
                      <a href="tel:+91-1892-220456" className="hover:text-green-600">+91-1892-220456</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-100 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600 mt-1">
                      <a href="mailto:info@himalayantyres.com" className="hover:text-yellow-600">
                        info@himalayantyres.com
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Working Hours</h3>
                    <div className="text-gray-600 mt-1">
                      <p>Monday - Saturday: 8:00 AM - 8:00 PM</p>
                      <p>Sunday: 9:00 AM - 6:00 PM</p>
                      <p className="text-red-600 font-medium mt-2">Emergency: 24/7 Available</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Emergency Contact */}
              <div className="mt-12 bg-red-50 p-6 rounded-lg border border-red-200">
                <div className="flex items-center mb-4">
                  <AlertTriangle className="h-6 w-6 text-red-600 mr-3" />
                  <h3 className="text-lg font-semibold text-red-900">Emergency Service</h3>
                </div>
                <p className="text-red-800 mb-4">
                  Stranded with a flat tyre? Need immediate assistance?
                </p>
                <a 
                  href="tel:+91-9876543210"
                  className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors inline-flex items-center"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Call Emergency Line
                </a>
              </div>
            </div>
            
            {/* Map */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Find Us</h2>
              <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center mb-6">
                <div className="text-center text-gray-600">
                  <MapPin className="h-16 w-16 mx-auto mb-4" />
                  <p className="text-lg font-medium">Interactive Map</p>
                  <p className="text-sm">Located on Main Bazaar Road, McLeod Ganj</p>
                </div>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">Directions from Popular Spots:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• From Dalai Lama Temple: 5 minutes walk</li>
                  <li>• From Bus Stand: 10 minutes by car</li>
                  <li>• From Cricket Stadium: 3 minutes drive</li>
                  <li>• From Bhagsu Waterfall: 8 minutes by vehicle</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Notice */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Car className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Drive-In Service</h3>
              </div>
              <p className="text-gray-600">
                No appointment needed for basic puncture repairs. Drive in and we'll get you back on the road quickly.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Phone className="h-8 w-8 text-green-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Mobile Service</h3>
              </div>
              <p className="text-gray-600">
                Can't reach our shop? We offer roadside assistance within 10km radius of Dharamshala.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;