import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FeaturedDevices from '../components/FeaturedDevices';

// Dummy data for realism
const heroSlides = [
  {
    id: 1,
    title: 'Fresh Fruits & Vegetables',
    subtitle: 'Up to 40% OFF on Seasonal Produce',
    image: 'https://images.unsplash.com/photo-1607305387957-569a8e393762?w=1200&h=600&fit=crop',
    cta: 'Shop Now'
  },
  {
    id: 2,
    title: 'Daily Groceries Delivered',
    subtitle: 'Get 20% off first order + Free Delivery',
    image: 'https://images.unsplash.com/photo-1571877225204-67e69ca7b6ce?w=1200&h=600&fit=crop',
    cta: 'Order Now'
  },
  {
    id: 3,
    title: 'Electronics Mega Sale',
    subtitle: 'Best deals on Smartphones & Appliances',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1200&h=600&fit=crop',
    cta: 'Explore Deals'
  }
];

const categories = [
  { id: 1, name: 'Fruits', icon: '🍎', path: '/fruit-products', color: 'from-emerald-500 to-lime-500' },
  { id: 2, name: 'Vegetables', icon: '🥬', path: '/vegetables', color: 'from-green-500 to-emerald-500' },
  { id: 3, name: 'Grains & Staples', icon: '🌾', path: '/food-grains', color: 'from-amber-500 to-orange-500' },
  { id: 4, name: 'Electronics', icon: '📱', path: '/electronics', color: 'from-indigo-500 to-purple-500' },
  { id: 5, name: 'Dairy', icon: '🧀', path: '/all-products', color: 'from-yellow-400 to-amber-500' },
  { id: 6, name: 'Snacks', icon: '🍪', path: '/all-products', color: 'from-pink-500 to-rose-500' }
];

const featuredProducts = [
  { id: 1, name: 'Organic Apples', price: '$2.99/kg', image: 'https://images.unsplash.com/photo-1560807707-8cc77767d783?w=300&h=300&fit=crop', category: 'Fruits' },
  { id: 2, name: 'Fresh Carrots', price: '$1.49/kg', image: 'https://images.unsplash.com/photo-1593443350136-5af3497e0f8f?w=300&h=300&fit=crop', category: 'Vegetables' },
  { id: 3, name: 'Basmati Rice', price: '$4.99/kg', image: 'https://images.unsplash.com/photo-1619196964249-9b8b5e9b782c?w=300&h=300&fit=crop', category: 'Grains' },
  { id: 4, name: 'iPhone 15 Pro', price: '$999', image: 'https://images.unsplash.com/photo-1690903614170-1f4891e81b22?w=300&h=300&fit=crop', category: 'Electronics' },
  { id: 5, name: 'Fresh Milk', price: '$3.49/L', image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=300&h=300&fit=crop', category: 'Dairy' },
  { id: 6, name: 'Potato Chips', price: '$1.99', image: 'https://images.unsplash.com/photo-1588906635324-33bf3ccf9175?w=300&h=300&fit=crop', category: 'Snacks' },
  { id: 7, name: 'Bananas', price: '$0.99/kg', image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c119664?w=300&h=300&fit=crop', category: 'Fruits' },
  { id: 8, name: 'Tomatoes', price: '$2.49/kg', image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=300&h=300&fit=crop', category: 'Vegetables' }
];

const deals = [
  { id: 1, title: 'Combo Deal', desc: 'Buy 2 Get 1 Free on Selected Fruits', discount: '50%', expiry: '2026-12-31' },
  { id: 2, title: 'Fresh Produce', desc: 'All Vegetables 30% OFF', discount: '30%', expiry: '2026-12-25' },
  { id: 3, title: 'Electronics', desc: 'Smartphones from ₹19,999', discount: '25%', expiry: '2026-12-20' }
];

const testimonials = [
  { id: 1, name: 'Sarah K.', text: 'Best grocery delivery service! Fresh produce every time.', rating: 5 },
  { id: 2, name: 'Mike D.', text: 'Great deals and fast delivery. Highly recommended!', rating: 5 },
  { id: 3, name: 'Lisa R.', text: 'Love the variety of organic products. Will order again.', rating: 4.8 },
  { id: 4, name: 'John S.', text: 'Electronics section has amazing prices. Satisfied customer!', rating: 5 }
];

const stats = [
  { label: 'Happy Customers', value: '50K+' },
  { label: 'Products', value: '10K+' },
  { label: 'Cities', value: '100+' },
  { label: 'Delivery', value: '24/7' }
];

const LandingPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [countdown, setCountdown] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Countdown timer logic
    const updateCountdown = () => {
      const now = new Date();
      const target = new Date('2026-12-25T23:59:59');
      const diff = target - now;
      if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        setCountdown(`Offer ends in: ${days}d ${hours}h`);
      }
    };
    updateCountdown();
    const interval = setInterval(updateCountdown, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-linear-to-br from-emerald-50 to-lime-50">
      {/* Hero Banner */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroSlides[currentSlide].image} 
            alt={heroSlides[currentSlide].title}
            className="w-full h-full object-cover brightness-75"
          />
          <div className="absolute inset-0 bg-linear-to-r from-black/40 via-transparent to-black/40" />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 drop-shadow-2xl animate-float">
            {heroSlides[currentSlide].title}
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto drop-shadow-lg">
            {heroSlides[currentSlide].subtitle}
          </p>
          <Link 
            to="/all-products"
            className="bg-linear-to-r from-emerald-500 to-lime-500 text-white px-12 py-6 text-xl font-bold rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:from-emerald-600 hover:to-lime-600"
          >
            {heroSlides[currentSlide].cta} →
          </Link>
        </div>
        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-3 h-3 rounded-full transition-all ${
                idx === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="group">
              <div className="text-4xl md:text-5xl font-bold bg-linear-to-r from-emerald-500 to-lime-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                {stat.value}
              </div>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 bg-linear-to-b from-lime-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-linear-to-r from-emerald-600 to-lime-600 bg-clip-text text-transparent mb-4">
              Shop by Category
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our wide range of fresh produce and essentials
            </p>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((cat) => (
              <Link 
                key={cat.id}
                to={cat.path}
                className="group relative p-8 rounded-3xl bg-white/70 hover:bg-white backdrop-blur-sm shadow-xl hover:shadow-2xl hover:-translate-y-4 hover:scale-105 transition-all duration-500 border border-white/50"
              >
                <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-linear-to-br ${cat.color} flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform`}>
                  <span className="text-3xl">{cat.icon}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2 text-center">{cat.name}</h3>
                <p className="text-emerald-600 font-semibold text-center">Shop Now</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About the Founder */}
      <section className="py-24 bg-white/90">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="smallBadge">Founder</span>
            <h2 className="text-5xl font-bold mt-6 mb-4 text-gray-900">Khanish Erigidindla</h2>
            <p className="text-xl text-gray-600 mb-6">
              Building Hyderabad's trusted grocery and electronics destination since 2026.
              Khanish Shop delivers fresh produce, premium devices, and the same personal touch across every order.
            </p>
            <p className="text-base text-gray-500">
              Address: Banjara Hills, Hyderabad 500032. Customer happiness and local delivery excellence are at the heart of every shopping experience.
            </p>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-2xl bg-emerald-50 p-8">
            <h3 className="text-3xl font-semibold text-gray-900 mb-4">Fresh quality, modern devices</h3>
            <p className="text-gray-600 mb-6">
              We bring together food staples and cutting-edge electronics under one trusted brand, backed by secure login and remembered credentials for your convenience.
            </p>
            <Link to="/send-otp" className="primaryButton inline-block">
              Secure Sign In
            </Link>
          </div>
        </div>
      </section>

      <FeaturedDevices />

      {/* Featured Products */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-linear-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4">
              Featured Products
            </h2>
            <p className="text-xl text-gray-600">Best sellers you can't miss</p>
          </div>
          <div className="productSection">
            {featuredProducts.map((product) => (
              <div key={product.id} className="proSection">
                <div className="proImage">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="proName">{product.name}</div>
                <div className="proSub">
                  <select className="proSelect">
                    <option>1 kg</option>
                    <option>2 kg</option>
                    <option>5 kg</option>
                  </select>
                  <div className="proPrice">${product.price}</div>
                </div>
                <button className="proButton">Add to Cart</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deals Section */}
      <section className="py-24 bg-linear-to-r from-rose-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-linear-to-r from-rose-600 to-orange-600 bg-clip-text text-transparent mb-4">
              Limited Time Deals
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {deals.map((deal) => (
              <div key={deal.id} className="group bg-white/80 backdrop-blur-sm rounded-3xl p-12 text-center shadow-2xl hover:shadow-3xl hover:-translate-y-4 transition-all duration-500 border border-white/50">
                <div className="text-6xl mb-6">🔥</div>
                <h3 className="text-3xl font-bold text-gray-800 mb-4">{deal.title}</h3>
                <p className="text-xl text-gray-600 mb-8">{deal.desc}</p>
                <div className="text-4xl font-bold bg-linear-to-r from-rose-500 to-orange-500 bg-clip-text text-transparent mb-6">
                  {deal.discount} OFF
                </div>
                <div className="text-lg text-gray-500 mb-8">{countdown}</div>
                <button className="w-full bg-linear-to-r from-rose-500 to-orange-500 text-white py-6 px-8 text-xl font-bold rounded-2xl hover:shadow-2xl hover:scale-105 transition-all">
                  Grab Deal Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-emerald-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-linear-to-r from-emerald-600 to-lime-600 bg-clip-text text-transparent mb-4">
              What Our Customers Say
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white/70 backdrop-blur-sm p-10 rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all border border-emerald-100">
                <div className="flex mb-6">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={`text-2xl ${i < Math.floor(testimonial.rating) ? 'text-yellow-400' : 'text-gray-300'}`}>
                      ⭐
                    </span>
                  ))}
                </div>
                <p className="text-lg text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div className="font-bold text-emerald-600">- {testimonial.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-linear-to-br from-emerald-600 to-lime-600">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-5xl font-bold mb-6">Stay Updated</h2>
          <p className="text-2xl mb-12 opacity-90">Subscribe for exclusive deals and fresh offers</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-8 py-6 text-xl rounded-full text-gray-900 focus:outline-none focus:ring-4 focus:ring-white/30"
            />
            <button className="px-12 py-6 bg-white text-emerald-600 text-xl font-bold rounded-full hover:bg-gray-100 hover:scale-105 transition-all whitespace-nowrap">
              Subscribe Now
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-3xl font-bold bg-linear-to-r from-emerald-400 to-lime-400 bg-clip-text text-transparent mb-6">
              Khanish Shop
            </h3>
            <p className="text-gray-400 mb-8">Your trusted partner for fresh groceries and electronics delivery.</p>
            <div className="flex space-x-6">
              <a href="#" className="text-2xl hover:text-emerald-400 transition-colors">📘</a>
              <a href="#" className="text-2xl hover:text-emerald-400 transition-colors">🐦</a>
              <a href="#" className="text-2xl hover:text-emerald-400 transition-colors">📷</a>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-gray-400">
              <li><Link to="/all-products" className="hover:text-white transition-colors">All Products</Link></li>
              <li><Link to="/fruit-products" className="hover:text-white transition-colors">Fruits</Link></li>
              <li><Link to="/vegetables" className="hover:text-white transition-colors">Vegetables</Link></li>
              <li><Link to="/electronics" className="hover:text-white transition-colors">Electronics</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-6">Support</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shipping Info</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-6">Company</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>&copy; 2026 Khanish Grocery & Electronics. All rights reserved.</p>
          <p>Owned by Khanish Erigidindla | Hyderabad 500032</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;

