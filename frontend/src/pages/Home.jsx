import { useEffect, useState } from 'react';
import AlertMessage from '../components/AlertMessage';
import LoadingSpinner from '../components/LoadingSpinner';
import { getOrders } from '../services/orderService';
import { getProducts } from '../services/productService';
import { getUsers } from '../services/userService';

function Home({ onNavigate }) {
  const [stats, setStats] = useState({ users: 0, products: 0, orders: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadStats() {
      try {
        setLoading(true);
        const [usersResponse, productsResponse, ordersResponse] = await Promise.all([
          getUsers(),
          getProducts(),
          getOrders(),
        ]);

        setStats({
          users: Array.isArray(usersResponse?.data) ? usersResponse.data.length : 0,
          products: Array.isArray(productsResponse?.data) ? productsResponse.data.length : 0,
          orders: Array.isArray(ordersResponse?.data) ? ordersResponse.data.length : 0,
        });
      } catch (err) {
        setError(err.message || 'Could not load dashboard data');
      } finally {
        setLoading(false);
      }
    }

    loadStats();
  }, []);

  return (
    <div className="space-y-8">
      <div className="relative overflow-hidden rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-12 shadow-lg">
        <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-blue-400/5 blur-3xl" />
        <div className="relative z-10">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-600">Welcome to Nexus</p>
          <h2 className="mt-3 text-4xl font-bold text-gray-900">Enterprise Admin Dashboard</h2>
          <p className="mt-4 max-w-2xl text-base text-gray-600">
            Powerful management platform for users, products, and orders. Built with cutting-edge technology for maximum performance and reliability.
          </p>
        </div>
      </div>

      {error ? <AlertMessage type="error" title="Connection issue" message={error} /> : null}

      {loading ? (
        <LoadingSpinner label="Initializing dashboard..." />
      ) : (
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { label: 'Users', value: stats.users, action: () => onNavigate('users'), color: 'from-blue-500 to-blue-600', icon: '👥' },
            { label: 'Products', value: stats.products, action: () => onNavigate('products'), color: 'from-purple-500 to-purple-600', icon: '📦' },
            { label: 'Orders', value: stats.orders, action: () => onNavigate('orders'), color: 'from-green-500 to-green-600', icon: '🛒' },
          ].map((card) => (
            <button
              key={card.label}
              type="button"
              onClick={card.action}
              className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${card.color} p-8 text-left transition hover:shadow-2xl hover:shadow-gray-400/50 transform hover:-translate-y-2`}
            >
              <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-white/20 group-hover:bg-white/30 transition blur-2xl" />
              <div className="relative z-10">
                <div className="text-3xl mb-2">{card.icon}</div>
                <p className="text-sm font-semibold text-white/90 uppercase tracking-wider">{card.label}</p>
                <p className="mt-4 text-5xl font-bold text-white">{card.value}</p>
                <p className="mt-3 text-sm text-white/80 group-hover:text-white transition">Manage {card.label.toLowerCase()} →</p>
              </div>
            </button>
          ))}
        </div>
      )}

      <div className="grid gap-4 md:grid-cols-2 mt-8">
        <div className="rounded-xl border border-blue-100 bg-white shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900">Quick Features</h3>
          <ul className="mt-4 space-y-2 text-sm text-gray-600">
            <li>✓ Real-time data management</li>
            <li>✓ Advanced filtering & search</li>
            <li>✓ Instant synchronization</li>
            <li>✓ Secure operations</li>
            <li>✓ Multi-user support</li>
            <li>✓ Export data capability</li>
          </ul>
        </div>
        <div className="rounded-xl border border-blue-100 bg-white shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900">System Status</h3>
          <div className="mt-4 space-y-3">
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-600">API Connection</span>
              <span className="text-green-600 font-semibold">● Online</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-600">Database</span>
              <span className="text-green-600 font-semibold">● Connected</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-600">Server</span>
              <span className="text-green-600 font-semibold">● Running</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
