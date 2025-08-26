import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Tourist from UK",
      rating: 5,
      text: "Had a puncture while exploring Dharamshala. Found Himalayan Tyres and they fixed it in 20 minutes! Excellent service and very reasonable prices. Highly recommended!",
      date: "2 weeks ago"
    },
    {
      name: "Ravi Mehta",
      location: "Local Resident",
      rating: 5,
      text: "Been coming here for 5 years. Raj and his team are honest, quick, and reliable. They've never overcharged me and always explain what needs to be done.",
      date: "1 month ago"
    },
    {
      name: "David Chen",
      location: "Adventure Tourist",
      rating: 5,
      text: "Motorcycle tyre burst during our mountain trip. They provided emergency service at 9 PM! Professional work and saved our vacation. Thank you!",
      date: "3 weeks ago"
    },
    {
      name: "Priya Sharma",
      location: "Dharamshala Local",
      rating: 5,
      text: "Best tyre shop in Dharamshala! Quick service, fair prices, and they stand behind their work. The staff is friendly and knowledgeable.",
      date: "2 months ago"
    },
    {
      name: "Michael Brown",
      location: "Tourist from Canada",
      rating: 5,
      text: "Excellent service! Wheel balancing was done perfectly and they even checked all tyres for free. Will definitely recommend to other travelers.",
      date: "1 week ago"
    },
    {
      name: "Amit Kumar",
      location: "Local Business Owner",
      rating: 5,
      text: "They service all our company vehicles. Professional, reliable, and cost-effective. Never had any issues with their work quality.",
      date: "2 weeks ago"
    }
  ];

  const stats = [
    { number: "10,000+", label: "Happy Customers" },
    { number: "15+", label: "Years Experience" },
    { number: "99.9%", label: "Success Rate" },
    { number: "24/7", label: "Emergency Support" }
  ];

  return (
    <div className="py-16">
      {/* Header */}
      <section className="bg-gradient-to-r from-yellow-400 to-orange-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Customer Reviews
          </h1>
          <p className="text-xl text-yellow-100 max-w-3xl mx-auto">
            See what our satisfied customers say about our tyre services
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-700 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600">Real experiences from real customers</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <Quote className="h-8 w-8 text-blue-600 mr-3" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">"{testimonial.text}"</p>
                
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.location}</div>
                  <div className="text-xs text-gray-400 mt-1">{testimonial.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rating Summary */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Overall Rating</h2>
            <div className="flex items-center justify-center mb-4">
              <span className="text-6xl font-bold text-yellow-500 mr-4">4.9</span>
              <div>
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600">Based on 500+ reviews</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Rating Breakdown</h3>
            <div className="space-y-3">
              {[
                { stars: 5, percentage: 92 },
                { stars: 4, percentage: 7 },
                { stars: 3, percentage: 1 },
                { stars: 2, percentage: 0 },
                { stars: 1, percentage: 0 }
              ].map((rating, index) => (
                <div key={index} className="flex items-center">
                  <span className="w-12 text-sm text-gray-600">{rating.stars} star</span>
                  <div className="flex-1 mx-4 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-yellow-400 h-2 rounded-full"
                      style={{ width: `${rating.percentage}%` }}
                    ></div>
                  </div>
                  <span className="w-12 text-sm text-gray-600 text-right">{rating.percentage}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Experience Our Service?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of satisfied customers who trust us with their tyre needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-400 text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors">
              Book Appointment
            </button>
            <a 
              href="tel:+91-9876543210"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition-colors"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;