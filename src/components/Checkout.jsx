import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Checkout = () => {
  const [selectedPayment, setSelectedPayment] = useState('cod');
  const [address, setAddress] = useState('');

  const placeOrder = () => {
    if (!address) {
      alert('Please enter delivery address');
      return;
    }
    
    const paymentMethod = selectedPayment === 'payu' ? 'PayU (Online)' : 'Cash on Delivery';
    alert(`Order placed successfully!\nPayment: ${paymentMethod}\nAddress: ${address}\nRedirecting to invoice...`);
  };

  return (
    <div className="checkoutContainer p-8 max-w-2xl mx-auto bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50">
      <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-emerald-600 to-lime-600 bg-clip-text text-transparent">
        🛒 Checkout
      </h2>

      {/* Delivery Address */}
      <div className="mb-12 p-6 bg-gradient-to-r from-emerald-50 to-lime-50 rounded-2xl border border-emerald-200">
        <label className="block text-xl font-bold mb-4 text-gray-800">Delivery Address</label>
        <textarea
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Enter complete address with landmark..."
          className="w-full p-6 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-emerald-200 focus:border-emerald-500 resize-vertical min-h-32 text-lg"
          rows="4"
        />
      </div>

      {/* Payment Methods */}
      <div className="mb-12">
        <label className="block text-xl font-bold mb-6 text-gray-800">Payment Method</label>
        <div className="space-y-4">
          <label className="flex items-center p-6 bg-white rounded-2xl border-2 cursor-pointer hover:shadow-md transition-all group">
            <input
              type="radio"
              name="payment"
              value="payu"
              checked={selectedPayment === 'payu'}
              onChange={(e) => setSelectedPayment(e.target.value)}
              className="w-6 h-6 text-emerald-600 border-gray-300 focus:ring-emerald-500"
            />
            <div className="ml-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                  💳
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">PayU (Online Payment)</h3>
                  <p className="text-gray-600">Secure credit/debit card, UPI, net banking</p>
                </div>
              </div>
            </div>
          </label>

          <label className="flex items-center p-6 bg-white rounded-2xl border-2 cursor-pointer hover:shadow-md transition-all group">
            <input
              type="radio"
              name="payment"
              value="cod"
              checked={selectedPayment === 'cod'}
              onChange={(e) => setSelectedPayment(e.target.value)}
              className="w-6 h-6 text-emerald-600 border-gray-300 focus:ring-emerald-500"
            />
            <div className="ml-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-500 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                  💵
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Cash on Delivery</h3>
                  <p className="text-gray-600">Pay cash to delivery person. Available everywhere.</p>
                </div>
              </div>
            </div>
          </label>
        </div>
      </div>

      {/* Summary & Place Order */}
      <div className="bg-gradient-to-r from-emerald-50 to-lime-50 p-8 rounded-2xl border border-emerald-200 mb-8">
        <h3 className="text-2xl font-bold mb-4 text-gray-800">Order Summary</h3>
        <div className="space-y-2 text-lg">
          <div className="flex justify-between">
            <span>Subtotal (3 items):</span>
            <span>₹1,250</span>
          </div>
          <div className="flex justify-between">
            <span>GST (5%):</span>
            <span>₹62</span>
          </div>
          <div className="flex justify-between font-bold text-2xl text-emerald-600">
            <span>Total:</span>
            <span>₹1,312</span>
          </div>
        </div>
      </div>

      <div className="flex space-x-4">
        <Link 
          to="/cart"
          className="flex-1 bg-gray-500 hover:bg-gray-600 text-white py-4 px-8 rounded-2xl text-xl font-bold text-center shadow-lg hover:shadow-xl transition-all flex items-center justify-center"
        >
          ← Back to Cart
        </Link>
        <button
          onClick={placeOrder}
          className="flex-1 bg-gradient-to-r from-emerald-600 to-lime-600 hover:from-emerald-700 hover:to-lime-700 text-white py-4 px-8 rounded-2xl text-xl font-bold shadow-2xl hover:shadow-3xl hover:-translate-y-1 transition-all flex items-center justify-center"
        >
          ✅ Place Order
        </button>
      </div>
    </div>
  );
};

export default Checkout;

