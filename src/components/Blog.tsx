import React from 'react';
import { Calendar, User, ArrowRight, Mountain, AlertTriangle, Wrench } from 'lucide-react';

const Blog = () => {
  const articles = [
    {
      id: 1,
      title: "Essential Tyre Safety Tips for Mountain Driving in Himachal",
      excerpt: "Driving in the mountains requires special attention to tyre condition and pressure. Learn how to prepare your tyres for safe mountain journeys.",
      category: "Safety",
      author: "Raj Kumar",
      date: "March 15, 2024",
      readTime: "5 min read",
      image: "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      icon: <Mountain className="h-6 w-6" />
    },
    {
      id: 2,
      title: "How to Check Tyre Pressure and Why It Matters",
      excerpt: "Proper tyre pressure is crucial for safety, fuel efficiency, and tyre longevity. Here's a complete guide to maintaining optimal pressure.",
      category: "Maintenance",
      author: "Suresh Sharma", 
      date: "March 10, 2024",
      readTime: "4 min read",
      image: "https://images.pexels.com/photos/279949/pexels-photo-279949.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      icon: <Wrench className="h-6 w-6" />
    },
    {
      id: 3,
      title: "Monsoon Tyre Care: Preparing for Wet Roads",
      excerpt: "The monsoon season brings unique challenges for tyre safety. Learn how to maintain grip and prevent hydroplaning on wet mountain roads.",
      category: "Seasonal",
      author: "Amit Singh",
      date: "March 5, 2024",
      readTime: "6 min read",
      image: "https://images.pexels.com/photos/1118448/pexels-photo-1118448.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      icon: <AlertTriangle className="h-6 w-6" />
    },
    {
      id: 4,
      title: "Signs It's Time to Replace Your Tyres",
      excerpt: "Knowing when to replace tyres can save your life. Here are the key indicators that your tyres need immediate replacement.",
      category: "Maintenance",
      author: "Raj Kumar",
      date: "February 28, 2024",
      readTime: "4 min read",
      image: "https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      icon: <AlertTriangle className="h-6 w-6" />
    },
    {
      id: 5,
      title: "Winter Driving Tips for Dharamshala Roads",
      excerpt: "Winter conditions in Dharamshala can be challenging. Learn how to prepare your tyres for cold weather and potentially icy conditions.",
      category: "Seasonal",
      author: "Suresh Sharma",
      date: "February 20, 2024",
      readTime: "5 min read",
      image: "https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      icon: <Mountain className="h-6 w-6" />
    },
    {
      id: 6,
      title: "DIY Tyre Maintenance: What You Can Do at Home",
      excerpt: "Simple maintenance tasks you can perform yourself to extend tyre life and ensure safety between professional services.",
      category: "DIY",
      author: "Amit Singh",
      date: "February 15, 2024",
      readTime: "7 min read",
      image: "https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      icon: <Wrench className="h-6 w-6" />
    }
  ];

  const categories = [
    { name: "All", count: 6 },
    { name: "Safety", count: 1 },
    { name: "Maintenance", count: 2 },
    { name: "Seasonal", count: 2 },
    { name: "DIY", count: 1 }
  ];

  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredArticles = selectedCategory === "All" 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  return (
    <div className="py-16">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-700 to-green-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Tyre Care Tips & News
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Expert advice and insights to keep you safe on Dharamshala's roads
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
              <ul className="space-y-2">
                {categories.map((category, index) => (
                  <li key={index}>
                    <button
                      onClick={() => setSelectedCategory(category.name)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors flex justify-between items-center ${
                        selectedCategory === category.name
                          ? 'bg-blue-100 text-blue-700'
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      <span>{category.name}</span>
                      <span className="text-sm bg-gray-200 px-2 py-1 rounded-full">
                        {category.count}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>

              {/* Emergency Contact */}
              <div className="mt-8 bg-red-50 border border-red-200 rounded-lg p-4">
                <h4 className="font-semibold text-red-900 mb-2">Need Help Now?</h4>
                <p className="text-red-800 text-sm mb-3">
                  Emergency tyre assistance available 24/7
                </p>
                <a 
                  href="tel:+91-9876543210"
                  className="bg-red-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-red-700 transition-colors block text-center"
                >
                  Call Emergency Line
                </a>
              </div>
            </div>
          </div>

          {/* Articles Grid */}
          <div className="lg:col-span-3">
            <div className="grid md:grid-cols-2 gap-8">
              {filteredArticles.map((article) => (
                <article key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <img 
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                  
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                        article.category === 'Safety' ? 'bg-red-100 text-red-800' :
                        article.category === 'Maintenance' ? 'bg-blue-100 text-blue-800' :
                        article.category === 'Seasonal' ? 'bg-green-100 text-green-800' :
                        'bg-purple-100 text-purple-800'
                      }`}>
                        {article.icon}
                        <span className="ml-1">{article.category}</span>
                      </span>
                    </div>
                    
                    <h2 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                      {article.title}
                    </h2>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {article.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {article.date}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{article.readTime}</span>
                      <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center transition-colors">
                        Read More
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Stay Updated with Tyre Safety Tips
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Get the latest maintenance tips and safety advice delivered to your inbox
          </p>
          
          <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors">
              Subscribe
            </button>
          </div>
          
          <p className="text-sm text-gray-500 mt-4">
            No spam, unsubscribe anytime. We respect your privacy.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Blog;