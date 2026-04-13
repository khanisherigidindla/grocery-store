import React, { useEffect, useState } from "react";
import axios from "axios";
import { cartUrl, imageUrl } from "../repo/api_path";

const Invoice = () => {
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchCart = async () => {
    const token = localStorage.getItem("userToken");

    try {
      const res = await axios.get(`${cartUrl}/details`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setCart(res.data.cart);
      setLoading(false);
    } catch (error) {
      console.error(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  if (loading) return <h3>Loading invoice...</h3>;
  if (!cart || cart.items.length === 0)
    return <h3>No items for checkout</h3>;

  // 🧮 Calculations
  const subTotal = cart.items.reduce((acc, item) => {
    if (!item.product) return acc;
    return acc + item.product.price * item.quantity;
  }, 0);

  const tax = Math.round(subTotal * 0.05); // 5% GST
  const deliveryCharge = subTotal > 500 ? 0 : 40;
  const finalAmount = subTotal + tax + deliveryCharge;

  return (
    <div className="invoiceContainer max-w-4xl mx-auto mt-12 p-12 bg-white/90 backdrop-blur-xl shadow-2xl rounded-3xl border border-emerald-200">
      <div className="text-center mb-12">
        <div className="w-32 h-32 bg-gradient-to-br from-emerald-500 to-lime-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
          <span className="text-5xl text-white font-bold">✅</span>
        </div>
        <h1 className="text-5xl font-bold bg-gradient-to-r from-emerald-600 to-lime-600 bg-clip-text text-transparent mb-4">
          Order Placed Successfully!
        </h1>
        <p className="text-2xl text-emerald-600 font-semibold">Your order has been confirmed</p>
        <p className="text-lg text-gray-600 mt-2">Order ID: #ORD-123456</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-12">
        {/* Order Items */}
        <div>
          <h3 className="text-2xl font-bold mb-6 text-gray-900">Order Items</h3>
          {cart.items.slice(0, 3).map((item) => {
            if (!item.product) return null;
            return (
              <div key={item._id} className="flex items-center space-x-6 p-6 bg-gradient-to-r from-gray-50 to-emerald-50 rounded-2xl mb-4 shadow-sm border-l-4 border-emerald-400">
                <img
                  src={`${imageUrl}${item.product.image}`}
                  alt={item.product.name}
                  className="w-20 h-20 object-cover rounded-xl shadow-md"
                />
                <div className="flex-1">
                  <h4 className="font-bold text-lg">{item.product.name}</h4>
                  <p className="text-gray-600">Qty: {item.quantity} | Vendor: Khanish Grocery</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-xl text-emerald-600">
                    ₹{(item.product.price * item.quantity).toLocaleString()}
                  </p>
                </div>
              </div>
            );
          })}
          {cart.items.length > 3 && (
            <p className="text-center py-4 text-gray-500">+{cart.items.length - 3} more items</p>
          )}
        </div>

        {/* Summary */}
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-emerald-50 to-lime-50 p-8 rounded-2xl border border-emerald-200">
            <h3 className="text-2xl font-bold mb-6 text-emerald-800">Payment Summary</h3>
            <div className="space-y-3 text-lg">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>₹{subTotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>GST (5%):</span>
                <span>₹{tax.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Fee:</span>
                <span>₹{deliveryCharge.toLocaleString()}</span>
              </div>
              <hr className="border-emerald-200 my-4" />
              <div className="flex justify-between text-2xl font-bold text-emerald-700">
                <span>Total:</span>
                <span>₹{finalAmount.toLocaleString()}</span>
              </div>
              <div className="pt-4 border-t border-emerald-200">
                <p className="text-emerald-600 font-semibold text-lg">✅ Payment Successful via PayU</p>
                <p className="text-sm text-gray-600 mt-1">Transaction ID: TXN123456789</p>
              </div>
            </div>
          </div>

          {/* Delivery Info */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-200">
            <h4 className="font-bold text-xl mb-3 text-blue-800">📦 Delivery Details</h4>
            <div className="space-y-2 text-sm">
              <p><strong>ETA:</strong> 25-35 mins</p>
              <p><strong>Status:</strong> Preparing to ship</p>
              <p className="font-semibold text-emerald-600">Track Order →</p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center space-y-4 pt-12 border-t border-gray-200">
        <p className="text-xl text-gray-600">Thank you for shopping with us! 🌟</p>
        <div className="flex flex-wrap gap-4 justify-center pt-8">
          <Link to="/" className="bg-emerald-500 hover:bg-emerald-600 px-8 py-4 rounded-2xl font-bold text-white shadow-lg hover:shadow-xl transition-all whitespace-nowrap">
            ← Continue Shopping
          </Link>
          <Link to="/orders" className="border border-gray-300 hover:bg-gray-50 px-8 py-4 rounded-2xl font-bold text-gray-800 shadow-lg hover:shadow-xl transition-all whitespace-nowrap">
            View Orders
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
