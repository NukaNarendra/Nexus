const links = [
  { id: 'home', label: 'Dashboard' },
  { id: 'users', label: 'Users' },
  { id: 'products', label: 'Products' },
  { id: 'orders', label: 'Orders' },
];

function Navbar({ activeView, onNavigate }) {
  return (
    <nav className="sticky top-0 z-50 border-b border-blue-100 bg-white/95 backdrop-blur-xl shadow-sm">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-5 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
            <span className="text-white font-bold text-lg">N</span>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-blue-600">Nexus</p>
            <h1 className="text-lg font-bold text-gray-900">Admin Portal</h1>
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          {links.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => onNavigate(link.id)}
              className={`relative px-4 py-2.5 text-sm font-semibold rounded-lg transition-all duration-300 ${
                activeView === link.id
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/30'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
