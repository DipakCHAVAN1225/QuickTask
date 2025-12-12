import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';
import { AuthProvider } from '../auth/useAuth';

export default function Header() {
  const { user, logout } = AuthProvider();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const onLogout = async () => {
    await logout();
    navigate('/');
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-600 to-cyan-500 flex items-center justify-center text-white font-bold">Q</div>
            <span className="text-lg font-semibold text-gray-900">QuickTask</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
            <Link to="/services" className="hover:text-indigo-600">Services</Link>
            <Link to="/how" className="hover:text-indigo-600">How it works</Link>
          </nav>

          <div className="flex items-center gap-3">
            {!user ? (
              <>
                <Link to="/login" className="text-sm px-3 py-2 rounded-md hover:bg-gray-100">Log in</Link>
                <Link
                  to="/register"
                  className="px-4 py-2 rounded-md bg-indigo-600 text-white text-sm font-medium shadow hover:bg-indigo-700"
                >
                  Sign up
                </Link>
              </>
            ) : (
              <div className="relative">
                <button
                  onClick={() => setOpen(v => !v)}
                  className="flex items-center gap-3 p-1 rounded-full hover:bg-gray-100 focus:outline-none"
                >
                  <img
                    src={user.avatarUrl || '/static/default-avatar.png'}
                    alt="dp"
                    className="w-10 h-10 rounded-full object-cover border"
                  />
                </button>

                {open && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-md z-50">
                    <div className="px-4 py-3 border-b text-sm">
                      <div className="font-medium text-gray-800">{user.name}</div>
                      <div className="text-xs text-gray-500">{user.email}</div>
                    </div>

                    <div className="py-1">
                      {user.role === 'provider' ? (
                        <>
                          <Link to="/dashboard/provider" className="block px-4 py-2 text-sm hover:bg-gray-50">Provider Dashboard</Link>
                          <Link to="/provider/services" className="block px-4 py-2 text-sm hover:bg-gray-50">My Services</Link>
                        </>
                      ) : (
                        <>
                          <Link to="/dashboard/user" className="block px-4 py-2 text-sm hover:bg-gray-50">My Bookings</Link>
                          <Link to="/profile" className="block px-4 py-2 text-sm hover:bg-gray-50">Profile</Link>
                        </>
                      )}
                      <button onClick={onLogout} className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50">Log out</button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
