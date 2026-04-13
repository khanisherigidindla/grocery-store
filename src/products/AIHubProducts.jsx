import React from 'react';
import useAuthStore from '../store/useAuthStore';
import { Link } from 'react-router-dom';

const aiItems = [
  {
    id: 'ai1',
    name: 'AI Vision Pro',
    price: 129999,
    image: 'https://images.unsplash.com/photo-1689363788476-4f46a0de9c3f?w=400&h=500&fit=crop',
    desc: 'Next-gen AI computer vision system with real-time object recognition.',
  },
  {
    id: 'ai2',
    name: 'Smart Assistant X1',
    price: 49999,
    image: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=400&h=500&fit=crop',
    desc: 'Voice AI companion with natural language processing and home automation.',
  },
  {
    id: 'ai3',
    name: 'CodeGen Pro',
    price: 89999,
    image: 'https://images.unsplash.com/photo-1517433456452-f9633a875f6f?w=400&h=500&fit=crop',
    desc: 'AI-powered coding assistant that writes production-ready code 10x faster.',
  },
  {
    id: 'ai4',
    name: 'DataMind Analytics',
    price: 74999,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=500&fit=crop',
    desc: 'Enterprise AI analytics platform with predictive insights and ML models.',
  },
];

const AIHubProducts = () => {
  const { incrementCart, user } = useAuthStore();

  const addToCart = () => {
    if (user) {
      incrementCart(1);
      alert('AI product added to cart!');
    } else {
      alert('Please login to add to cart.');
    }
  };

  return (
    <div className="containerSection">
      <div className="itemTitle">
        <h2>AI Hub <span>Future Technology</span></h2>
      </div>
      <div className="productSection">
        {aiItems.map((item) => (
          <section className="proSection" key={item.id}>
            <Link to={`/product/${item.id}`}>
              <div className="proImage">
                <img src={item.image} alt={item.name} />
              </div>
            </Link>
            <div className="proName">{item.name}</div>
            <div className="proSub">
              <select className="proSelect">
                <option>Basic</option>
                <option>Pro</option>
                <option>Enterprise</option>
              </select>
              <div className="proPrice">₹{item.price.toLocaleString()}</div>
            </div>
            <button className="proButton" onClick={addToCart}>
              Add to Cart
            </button>
          </section>
        ))}
      </div>
    </div>
  );
};

export default AIHubProducts;

