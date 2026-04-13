import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuthStore from '../store/useAuthStore';

const Settings = () => {
  const { user, isLoggedIn, logout } = useAuthStore();
  const [activeTab, setActiveTab] = useState('profile');

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
              Please Login
            </h2>
            <p className="mt-2 text-center text-gray-600">
              Access settings after signing in
            </p>
          </div>
          <Link to="/send-otp" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700">
            Sign In
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-lime-50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-emerald-600 to-lime-600 bg-clip-text text-transparent mb-4">
            Account Settings
          </h1>
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-lime-500 rounded-full flex items-center justify-center text-3xl shadow-2xl">
              👤
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{user}</p>
              <p className="text-emerald-600 font-semibold">Verified Customer</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50 sticky top-24">
            <nav className="space-y-4">
              {[
                { label: 'Profile', icon: '👤', tab: 'profile' },
                { label: 'Orders', icon: '📦', tab: 'orders' },
                { label: 'Wishlist', icon: '❤️', tab: 'wishlist' },
                { label: 'Addresses', icon: '📍', tab: 'addresses' },
                { label: 'Payment Methods', icon: '💳', tab: 'payments' },
                { label: 'Notifications', icon: '🔔', tab: 'notifications' },
                { label: 'Logout', icon: '🚪', tab: 'logout', destructive: true }
              ].map((item) => (
                <button
                  key={item.tab}
                  onClick={() => {
                    if (item.tab === 'logout') {
                      logout();
                    } else {
                      setActiveTab(item.tab);
                    }
                  }}
                  className={`w-full flex items-center space-x-4 p-4 rounded-2xl transition-all group ${
                    activeTab === item.tab
                      ? 'bg-gradient-to-r from-emerald-500 to-lime-500 text-white shadow-xl'
                      : item.destructive
                      ? 'text-rose-600 hover:bg-rose-50 border border-rose-200 hover:shadow-md'
                      : 'hover:bg-emerald-50 border border-gray-200 hover:shadow-lg hover:text-emerald-600'
                  }`}
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="font-semibold">{item.label}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Profile Tab */}
            {activeTab === 'profile' && (
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-xl border border-white/50">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Profile Information</h2>
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                    <input type="text" defaultValue={user} className="w-full p-4 border border-gray-300 rounded-2xl focus:ring-4 focus:ring-emerald-200 focus:border-emerald-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
                    <input type="tel" placeholder="+91 98765 43210" className="w-full p-4 border border-gray-300 rounded-2xl focus:ring-4 focus:ring-emerald-200 focus:border-emerald-500" />
                  </div>
                </div>
                <div className="flex space-x-4">
                  <button className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white py-4 px-8 rounded-2xl font-bold transition-all shadow-lg hover:shadow-xl">
                    Save Changes
                  </button>
                  <button className="flex-1 border border-gray-300 hover:bg-gray-50 py-4 px-8 rounded-2xl font-semibold transition-all">
                    Cancel
                  </button>
                </div>
              </div>
            )}

            {/* Orders Tab */}
            {activeTab === 'orders' && (
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-xl border border-white/50 max-h-96 overflow-y-auto">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Recent Orders</h2>
                <div className="space-y-4">
                  {[
                    { id: '#ORD-1234', date: 'Dec 12, 2024', items: 3, total: '₹1,250', status: 'Delivered' },
                    { id: '#ORD-1233', date: 'Dec 10, 2024', items: 5, total: '₹2,450', status: 'Delivered' },
                    { id: '#ORD-1232', date: 'Dec 9, 2024', items: 2, total: '₹890', status: 'Cancelled' }
                  ].map((order, idx) => (
                    <div key={idx} className="flex items-center justify-between p-6 bg-gradient-to-r from-gray-50 to-emerald-50 rounded-2xl border-l-4 border-emerald-400 hover:shadow-md transition-all">
                      <div>
                        <p className="font-bold text-lg">{order.id}</p>
                        <p className="text-sm text-gray-600">{order.date} • {order.items} items</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-xl text-emerald-600">₹{order.total}</p>
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                          order.status === 'Delivered' ? 'bg-emerald-100 text-emerald-800' :
                          order.status === 'Cancelled' ? 'bg-rose-100 text-rose-800' : 'bg-amber-100 text-amber-800'
                        }`}>
                          {order.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-8 border-t border-gray-200 text-center">
                  <Link to="/orders" className="text-emerald-600 font-bold hover:underline">View All Orders →</Link>
                </div>
              </div>
            )}

            {/* Wishlist Tab */}
            {activeTab === 'wishlist' && (
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-xl border border-white/50">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Wishlist</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    { name: 'Organic Apples', price: '₹250/kg', image: 'https://images.unsplash.com/photo-1560807707-8cc77767d783?w=300' },
                    { name: 'iPhone 15 Pro', price: '₹89,999', image: 'https://images.unsplash.com/photo-1690903614170-1f4891e81b22?w=300' },
                    { name: 'Fresh Milk', price: '₹65/L', image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=300' }
                  ].map((item, idx) => (
                    <div key={idx} className="group bg-gradient-to-br from-emerald-50 to-lime-50 p-6 rounded-2xl border hover:shadow-xl hover:-translate-y-2 transition-all cursor-pointer">
                      <img src={item.image} alt={item.name} className="w-full h-48 object-cover rounded-xl mb-4 group-hover:scale-105 transition-transform" />
                      <h3 className="font-bold text-lg mb-2">{item.name}</h3>
                      <p className="text-2xl font-bold text-emerald-600 mb-4">{item.price}</p>
                      <div className="flex space-x-2">
                        <button className="flex-1 bg-emerald-500 text-white py-2 px-4 rounded-xl font-semibold hover:bg-emerald-600">Add to Cart</button>
                        <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-xl transition-all">❤️</button>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-center mt-12 text-gray-500 text-lg">No more items in wishlist</p>
              </div>
            )}

            {/* Default Empty State */}
            {(activeTab === 'addresses' || activeTab === 'payments' || activeTab === 'notifications') && (
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-20 shadow-xl border border-white/50 text-center">
                <div className="text-6xl mb-8">🚧</div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Coming Soon</h3>
                <p className="text-xl text-gray-600 mb-8">This feature is under development</p>
                <div className="w-24 h-24 border-4 border-emerald-200 border-t-emerald-500 rounded-full animate-spin mx-auto mb-8"></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;

