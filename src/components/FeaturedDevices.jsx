import React from 'react';
import { Link } from 'react-router-dom';

const deviceProducts = [
  {
    id: 'phone-sony-1',
    name: 'Nova X5 Pro Smartphone',
    price: 34999,
    category: 'Phones',
    label: 'Best Seller',
    image:
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 'laptop-zenbook-1',
    name: 'UltraBook Z Series Laptop',
    price: 74999,
    category: 'Laptops',
    label: 'Premium',
    image:
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 'tablet-pro-1',
    name: 'Infinity Tab Pro 12',
    price: 42999,
    category: 'Tablets',
    label: 'New Launch',
    image:
      'https://images.unsplash.com/photo-1510552776732-7197a6bd0c42?auto=format&fit=crop&w=700&q=80',
  },
];

const FeaturedDevices = () => {
  return (
    <section className="featuredSection">
      <div className="featuredHeader">
        <span className="smallBadge">Electronics</span>
        <h2>Tech picks for your next upgrade</h2>
        <p>
          Shop curated phones, laptops and accessories built for speed, style and
          everyday performance.
        </p>
      </div>

      <div className="featuredGrid">
        {deviceProducts.map((item) => (
          <article className="featuredCard" key={item.id}>
            <div className="featuredCardImage">
              <img src={item.image} alt={item.name} />
            </div>
            <div className="featuredCardBody">
              <span className="productTag">{item.label}</span>
              <h3>{item.name}</h3>
              <p className="categoryLabel">{item.category}</p>
              <div className="priceRow">
                <strong>₹{item.price.toLocaleString()}</strong>
                <Link to="/electronics" className="secondaryButton">
                  Explore
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default FeaturedDevices;
