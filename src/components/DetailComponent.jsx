import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { productUrl, imageUrl, cartUrl } from "../repo/api_path";
import useAuthStore from "../store/useAuthStore";

const DetailComponent = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const { isLoggedIn, incrementCart } = useAuthStore();

  // ==========================
  // Fetch Single Product
  // ==========================
  const singleHandler = async () => {
    try {
      const res = await axios.get(`${productUrl}/${id}`);
      setProduct(res.data.record);
    } catch (error) {
      console.log(error.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    singleHandler();
  }, [id]);

  // ==========================
  // Add To Cart
  // ==========================
  const addToCartHandler = async () => {
    try {
      if (!isLoggedIn) {
        alert("Please login first");
        return;
      }

      const token = localStorage.getItem("userToken");

      const res = await axios.post(
        `${cartUrl}/add-to-cart`,
        {
          productId: product._id,
          quantity: 1,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert(res.data.message);

      // ✅ Update cart count in navbar
      incrementCart(1);

    } catch (error) {
      console.log(error.response?.data || error.message);
      alert(error.response?.data?.msg || "Something went wrong");
    }
  };

  // ==========================
  // UI
  // ==========================
  if (loading) return <h2>Loading...</h2>;

  if (!product) return <h2>Product not found</h2>;

  return (
    <div className="product-detail-container">
      <div className="detail-grid">
        <div className="detail-image-section">
          <div className="image-showcase">
            <img
              className="main-product-image"
              src={`${imageUrl}${product.image}`}
              alt={product.name}
            />
          </div>
        </div>

        <div className="detail-content">
          <h1 className="product-title">{product.name}</h1>

          <div className="price-highlight">
            <span className="current-price">Rs {product.price}</span>
          </div>

          <div className="product-description">
            <h3>Description</h3>
            <p>{product.desc}</p>
          </div>

          <div className="action-buttons">
            <button
              className="add-cart-primary"
              onClick={addToCartHandler}
            >
              🛒 Add to Cart
            </button>

            <button className="wishlist-secondary">
              ⭐ Save for Later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailComponent;
