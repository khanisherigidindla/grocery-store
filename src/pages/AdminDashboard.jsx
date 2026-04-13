import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useAuthStore from '../store/useAuthStore';
import AddProduct from '../admin/AddProduct';

// Dummy admin data for realism
const adminStats = {
  totalProducts: 1245,
  totalOrders: 856,
  totalRevenue: '$45,230',
  activeUsers: 2345,
  lowStock: 23,
  pendingReviews: 15
};

const recentOrders = [
  { id: '#12345', customer: 'John Doe', items: 5, total: '$89.99', status: 'Delivered', date: '2026-12-10' },
  { id: '#12346', customer: 'Sarah Wilson', items: 12, total: '$145.50', status: 'Shipped', date: '2026-12-09' },
  { id: '#12347', customer: 'Mike Johnson', items: 3, total: '$34.99', status: 'Pending', date: '2026-12-09' },
  { id: '#12348', customer: 'Lisa Brown', items: 8, total: '$78.25', status: 'Delivered', date: '2026-12-08' },
  { id: '#12349', customer: 'David Lee', items: 15, total: '$210.75', status: 'Shipped', date: '2026-12-08' }
];

const lowStockItems = [
  { id: 1, name: 'Organic Apples', stock: 5, threshold: 10 },
  { id: 2, name: 'Fresh Milk 2L', stock: 8, threshold: 20 },
  { id: 3, name: 'Basmati Rice 5kg', stock: 12, threshold: 50 },
  { id: 4, name: 'iPhone 15 Pro', stock: 2, threshold: 5 }
];

const quickActions = [
  { name: 'Add New Product', icon: '➕', path: '/add-product', color: 'from-emerald-500 to-green-500' },
  { name: 'View All Orders', icon: '📦', path: '/orders', color: 'from-blue-500 to-indigo-500' },
  { name: 'Manage Inventory', icon: '📊', path: '/inventory', color: 'from-amber-500 to-orange-500' },
  { name: 'Customer Analytics', icon: '📈', path: '/analytics', color: 'from-purple-500 to-pink-500' },
  { name: 'Update Coupons', icon: '💰', path: '/coupons', color: 'from-green-500 to-emerald-500' },
  { name: 'View Reviews', icon: '⭐', path: '/reviews', color: 'from-yellow-500 to-amber-500' }
];

const AdminDashboard = () => {
  const { isLoggedIn, user } = useAuthStore();
  const [activeTab, setActiveTab] = useState('overview');

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Update stats periodically for demo
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-900 to-gray-800">
        <div className="text-center text-white">
          <h1 className="text-6xl font-bold mb-8 bg-linear-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
            Admin Access Required
          </h1>
          <p className="text-xl mb-8 text-gray-300">Please log in to access the admin dashboard.</p>
          <Link 
            to="/send-otp"
            className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-xl text-xl font-bold transition-all"
          >
            Sign In
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100">
      {/* Admin Header */}
      <header className="bg-white shadow-xl border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-linear-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-2xl">
                <span className="text-2xl">⚙️</span>
              </div>
              <div>
                <h1 className="text-4xl font-bold bg-linear-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                  Admin Dashboard
                </h1>
                <p className="text-gray-600">Welcome back, <span className="font-semibold text-emerald-600">{user}</span></p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="px-6 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-semibold transition-all">
                Quick Export
              </button>
              <div className="w-12 h-12 bg-gray-200 rounded-2xl flex items-center justify-center cursor-pointer hover:bg-gray-300 transition-colors">
                🔔
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">3</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-4 gap-8">
        {/* Sidebar Navigation */}
        <div className="lg:col-span-1 bg-white rounded-3xl shadow-2xl p-8 border border-gray-100 sticky top-32 h-fit">
          <nav className="space-y-4">
            {[
              { label: 'Overview', icon: '📊', tab: 'overview' },
              { label: 'Products', icon: '📦', tab: 'products' },
              { label: 'Orders', icon: '🛒', tab: 'orders' },
              { label: 'Customers', icon: '👥', tab: 'customers' },
              { label: 'Analytics', icon: '📈', tab: 'analytics' },
              { label: 'Inventory', icon: '🏪', tab: 'inventory' },
              { label: 'Settings', icon: '⚙️', tab: 'settings' }
            ].map((item) => (
              <button
                key={item.tab}
                onClick={() => setActiveTab(item.tab)}
                className={`w-full flex items-center space-x-4 p-4 rounded-2xl transition-all group ${
                  activeTab === item.tab
                    ? 'bg-linear-to-r from-emerald-500 to-emerald-600 text-white shadow-xl'
                    : 'hover:bg-emerald-50 border border-gray-100 hover:shadow-lg'
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
          {/* Stats Cards */}
          {activeTab === 'overview' && (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { label: 'Total Products', value: adminStats.totalProducts, change: '+12%', color: 'emerald' },
                  { label: 'Total Orders', value: adminStats.totalOrders, change: '+8%', color: 'blue' },
                  { label: 'Revenue', value: adminStats.totalRevenue, change: '+15%', color: 'green' },
                  { label: 'Active Users', value: adminStats.activeUsers.toLocaleString(), change: '+5%', color: 'purple' }
                ].map((stat, idx) => (
                  <div key={idx} className="group bg-linear-to-br from-white to-gray-50 p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-2 border border-gray-100 transition-all cursor-pointer">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-3 h-12 rounded-xl bg-linear-to-b from-${stat.color}-400 to-${stat.color}-500 shadow-lg`}></div>
                      <div className="text-xs font-semibold text-gray-500 group-hover:text-emerald-600">
                        {stat.change}
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Recent Orders Table */}
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
                <div className="p-8 border-b border-gray-100">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">Recent Orders</h2>
                  <p className="text-gray-600">Latest customer transactions</p>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-8 py-4 text-left text-sm font-bold text-gray-800">Order ID</th>
                        <th className="px-8 py-4 text-left text-sm font-bold text-gray-800">Customer</th>
                        <th className="px-8 py-4 text-left text-sm font-bold text-gray-800">Items</th>
                        <th className="px-8 py-4 text-left text-sm font-bold text-gray-800">Total</th>
                        <th className="px-8 py-4 text-left text-sm font-bold text-gray-800">Status</th>
                        <th className="px-8 py-4 text-left text-sm font-bold text-gray-800">Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentOrders.map((order) => (
                        <tr key={order.id} className="border-t border-gray-100 hover:bg-gray-50 transition-colors">
                          <td className="px-8 py-4 font-mono text-emerald-600">{order.id}</td>
                          <td className="px-8 py-4 font-semibold">{order.customer}</td>
                          <td className="px-8 py-4">{order.items}</td>
                          <td className="px-8 py-4 font-bold text-green-600">${order.total}</td>
                          <td className="px-8 py-4">
                            <span className={`px-4 py-2 rounded-full text-xs font-bold ${
                              order.status === 'Delivered' ? 'bg-emerald-100 text-emerald-800' :
                              order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' :
                              'bg-amber-100 text-amber-800'
                            }`}>
                              {order.status}
                            </span>
                          </td>
                          <td className="px-8 py-4 text-gray-600">{order.date}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Low Stock Alert */}
              <div className="bg-linear-to-r from-rose-50 to-orange-50 p-8 rounded-3xl border border-rose-200">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-rose-500 rounded-2xl flex items-center justify-center text-white text-xl font-bold shadow-lg">⚠️</div>
                  <div>
                    <h3 className="text-2xl font-bold text-rose-800">Low Stock Alert</h3>
                    <p className="text-rose-700">{adminStats.lowStock} items need restocking</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {lowStockItems.map((item) => (
                    <div key={item.id} className="flex items-center justify-between p-4 bg-white rounded-2xl border-l-4 border-rose-400">
                      <div>
                        <p className="font-semibold text-gray-900">{item.name}</p>
                        <p className="text-sm text-gray-600">Threshold: {item.threshold}</p>
                      </div>
                      <div className="text-2xl font-bold text-rose-600">{item.stock}</div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* Quick Actions */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickActions.map((action, idx) => (
              <Link 
                key={idx}
                to={action.path}
                className="group relative p-8 rounded-3xl bg-linear-to-br from-white to-gray-50 hover:from-emerald-50 hover:to-emerald-100 shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 border border-gray-200 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-linear-to-br ${action.color} opacity-0 group-hover:opacity-10 transition-opacity blur-xl`} />
                <div className="relative z-10">
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl ${action.color} flex items-center justify-center text-3xl shadow-2xl group-hover:scale-110 transition-all shadow-emerald-500/50`}>
                    <span>{action.icon}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{action.name}</h3>
                  <p className="text-emerald-600 font-semibold text-center group-hover:translate-x-2 transition-transform">→</p>
                </div>
              </Link>
            ))}
          </div>

          {/* Product Management Overview */}
          {activeTab === 'products' && (
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-gray-800">Product Management</h2>
                <Link to="/add-product" className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-xl font-bold transition-all">
                  + Add New Product
                </Link>
              </div>
              {/* Placeholder for product table/chart */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="p-8 bg-linear-to-br from-emerald-50 to-lime-50 rounded-2xl border border-emerald-200">
                  <h3 className="text-xl font-bold mb-4">Fruits & Vegetables</h3>
                  <p className="text-4xl font-bold text-emerald-600">456</p>
                  <p className="text-sm text-emerald-700 mt-2">+23 today</p>
                </div>
                <div className="p-8 bg-linear-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-200">
                  <h3 className="text-xl font-bold mb-4">Electronics</h3>
                  <p className="text-4xl font-bold text-blue-600">289</p>
                  <p className="text-sm text-blue-700 mt-2">+8 today</p>
                </div>
                <div className="p-8 bg-linear-to-br from-amber-50 to-orange-50 rounded-2xl border border-amber-200">
                  <h3 className="text-xl font-bold mb-4">Groceries</h3>
                  <p className="text-4xl font-bold text-amber-600">500</p>
                  <p className="text-sm text-amber-700 mt-2">+15 today</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

