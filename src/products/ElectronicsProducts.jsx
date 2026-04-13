import React from 'react';
import useAuthStore from '../store/useAuthStore';

const electronics = [
  {
    id: 's1',
    name: 'Apex Pro 14 Laptop',
    price: 89999,
    image:
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=700&q=80',
    desc: 'Lightweight productivity laptop with long battery life and premium display.',
  },
  {
    id: 's2',
    name: 'Pulse X 5G Smartphone',
    price: 32999,
    image:
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=700&q=80',
    desc: 'Sleek flagship phone with immersive display and fast charging.',
  },
  {
    id: 's3',
    name: 'NovaBook Studio',
    price: 65999,
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=700&q=80',
    desc: 'Powerful workstation for creators with crisp performance and design.',
  },
  {
    id: 's4',
    name: 'BeamFit Wireless Earbuds',
    price: 5999,
    image:
      'https://images.unsplash.com/photo-1526401485004-23bf1f9e1015?auto=format&fit=crop&w=700&q=80',
    desc: 'Balanced sound, adaptive noise reduction and all-day comfort.',
  },
];

const ElectronicsProducts = () => {
  const { incrementCart, user } = useAuthStore();

  const addToCart = () => {
    if (user) {
      incrementCart(1);
      alert('Item added to cart.');
    } else {
      alert('Please login to add electronics to cart.');
    }
  };

  return (
    <div className="featuredSection">
      <div className="featuredHeader">
        <span className="smallBadge">Electronics</span>
        <h2>Latest phones, laptops, and smart accessories</h2>
        <p>
          Discover premium devices with modern styling, fast delivery and trusted
          quality — all in one place.
        </p>
      </div>
      <div className="featuredGrid">
        {electronics.map((item) => (
          <article className="featuredCard" key={item.id}>
            <div className="featuredCardImage">
              <img src={item.image} alt={item.name} />
            </div>
            <div className="featuredCardBody">
              <h3>{item.name}</h3>
              <p>{item.desc}</p>
              <div className="priceRow">
                <strong>₹{item.price.toLocaleString()}</strong>
                <button className="primaryButton" onClick={addToCart}>
                  Add to Cart
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default ElectronicsProducts;
