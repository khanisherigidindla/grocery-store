import axios from "axios";
import React, { useEffect, useState } from "react";
import { cartUrl, imageUrl } from "../repo/api_path";
import useAuthStore from "../store/useAuthStore";
import Checkout from "./Checkout";

const ShowCart = () => {
  const [cartDetail, setCartDetail] = useState(null);
  const [loading, setLoading] = useState(true);

  const {setCartCount}= useAuthStore()

  const cartHandler = async () => {
    const userToken = localStorage.getItem("userToken");

    try {
      const res = await axios.get(`${cartUrl}/details`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });

      setCartDetail(res.data.cart);
      setCartCount(res.data.cart.items.length ||0)
      setLoading(false);

    } catch (error) {
      console.error(error.response?.data || error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    cartHandler();
  }, []);

  const deleteHandler=async(productId)=>{
    const userToken = localStorage.getItem("userToken")
    try {
        const res = await axios.delete(`${cartUrl}/delete/${productId}`,{
            headers:{
                Authorization:`Bearer ${userToken}`
            }
        });
        console.log(res.data)
        alert("product deleted")
        cartHandler()
    } catch (error) {
        alert(error.message)
    }
  }

  if (loading) return <h3>Loading cart...</h3>;
  if (!cartDetail || cartDetail.items.length === 0)
    return <div className="cartEmpty">Your cart is empty</div>;

  return (
    <div className="modern-cart-container">
      <div className="cart-header">
        <h1 className="cart-main-title">🛒 My Cart</h1>
      </div>

  {cartDetail.items.map((item) => {
  if (!item.product) return null;

  return (
    <div className="cart-product-card" key={item._id}>
      <div className="cart-product-image">
        <img
          src={`${imageUrl}${item.product.image}`}
          alt={item.product.name}
        />
      </div>

      <div className="cart-product-details">
        <h3 className="product-name">{item.product.name}</h3>
        <div className="price-quantity">
          <span>Rs {item.product.price}</span>
          <span>× {item.quantity}</span>
          <span className="total-price">Rs {item.product.price * item.quantity}</span>
        </div>
      </div>
      
      <button className="delete-cart-item"
      onClick={()=>deleteHandler(item.product._id)}
      >🗑️</button>
    </div>
  );
})}
    <Checkout />
    </div>
  );
};

export default ShowCart;
