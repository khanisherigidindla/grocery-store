import React from 'react';
import useAuthStore from '../store/useAuthStore';
import { Link } from 'react-router-dom';

const fashionItems = [
  {
    id: 'f1',
    name: 'Premium Cotton T-Shirt',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop',
    desc: 'Comfort fit, breathable cotton, available in multiple colors.',
  },
  {
    id: 'f2',
    name: 'Slim Fit Jeans',
    price: 2499,
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=500&fit=crop',
    desc: 'Stretch denim for all-day comfort, classic blue wash.',
  },
  {
    id: 'f3',
    name: 'Leather Casual Jacket',
    price: 5999,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=500&fit=crop',
    desc: 'Genuine leather, timeless design, perfect for layering.',
  },
  {
    id: 'f4',
    name: 'Sneakers Pro',
    price: 3499,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=500&fit=crop',
    desc: 'Lightweight cushioning, breathable mesh upper.',
  },
  {
    id: 'f5',
    name: 'Summer Maxi Dress',
    price: 1899,
    image: 'https://images.unsplash.com/photo-1488403181802-75973c4d4f47?w=400&h=500&fit=crop',
    desc: 'Flowy chiffon, floral print, perfect for vacations.',
  },
  {
    id: 'f6',
    name: 'Wool Blend Sweater',
    price: 2799,
    image: 'https://images.unsplash.com/photo-1529139577556-36e1b4a6f03f?w=400&h=500&fit=crop',
    desc: 'Soft merino wool blend, crew neck, versatile style.',
  },
];

const FashionProducts = () => {
  const { incrementCart, user } = useAuthStore();

  const addToCart = () => {
    if (user) {
      incrementCart(1);
      alert('Fashion item added to cart!');
    } else {
      alert('Please login to add to cart.');
    }
  };

  return (
    <div className="containerSection">
      <div className="itemTitle">
        <h2>Fashion Collection <span>Latest Trends</span></h2>
      </div>
      <div className="productSection">
        {fashionItems.map((item) => (
          <section className="proSection" key={item.id}>
            <Link to={`/product/${item.id}`}>
              <div className="proImage">
                <img src={item.image} alt={item.name} />
              </div>
            </Link>
            <div className="proName">{item.name}</div>
            <div className="proSub">
              <select className="proSelect">
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
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

export default FashionProducts;

