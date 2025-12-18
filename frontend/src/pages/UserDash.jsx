


// frontend/src/pages/UserDash.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/useAuth';  // ✅ FIXED: Import the hook, not AuthProvider

export default function UserDash() {
  const { user, logout } = useAuth();  // ✅ FIXED: Call the hook
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const onLogout = async () => {
    await logout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-600 to-cyan-500 flex items-center justify-center text-white font-bold">Q</div>
              <span className="text-lg font-semibold text-gray-900">QuickTask</span>
            </Link>

            <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
              <Link to="/services" className="hover:text-indigo-600">Services</Link>
              <Link to="/my-bookings" className="hover:text-indigo-600">My Bookings</Link>
              <Link to="/HowItWorks" className="hover:text-indigo-600">How it works</Link>
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
                      src={user.dp || `https://api.dicebear.com/7.x/avataaars/svg?seed=${user.id || 'default'}`}
                      alt={user.name}
                      className="w-10 h-10 rounded-full object-cover border-2 border-indigo-600"
                    />
                  </button>

                  {open && (
                    <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-md z-50">
                      <div className="px-4 py-3 border-b text-sm">
                        <div className="font-medium text-gray-800">{user.name}</div>
                        <div className="text-xs text-gray-500">{user.email}</div>
                        <div className="text-xs text-indigo-600 mt-1 font-medium">Role: {user.role}</div>
                      </div>

                      <div className="py-1">
                        {user.role === 'provider' ? (
                          <>
                            <Link to="/provider-dashboard" className="block px-4 py-2 text-sm hover:bg-gray-50">Provider Dashboard</Link>
                            <Link to="/provider/services" className="block px-4 py-2 text-sm hover:bg-gray-50">My Services</Link>
                          </>
                        ) : (
                          <>
                            <Link to="/my-bookings" className="block px-4 py-2 text-sm hover:bg-gray-50">My Bookings</Link>
                            <Link to="/my-profile" className="block px-4 py-2 text-sm hover:bg-gray-50">Profile</Link>
                          </>
                        )}
                        <button 
                          onClick={onLogout} 
                          className="w-full text-left px-4 py-2 text-sm hover:bg-red-50 text-red-600 font-medium"
                        >
                          Log out
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {user ? (
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Welcome, {user.name}!</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Profile Card */}
              <div className="border rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Your Profile</h3>
                <div className="space-y-3">
                  <div>
                    <label className="text-sm text-gray-600">Name</label>
                    <p className="text-gray-800 font-medium">{user.name}</p>
                  </div>
                  <div>
                    <label className="text-sm text-gray-600">Email</label>
                    <p className="text-gray-800 font-medium">{user.email}</p>
                  </div>
                  <div>
                    <label className="text-sm text-gray-600">Role</label>
                    <p className="text-gray-800 font-medium capitalize">{user.role}</p>
                  </div>
                </div>
                <Link 
                  to="/my-profile" 
                  className="mt-4 inline-block px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                >
                  Edit Profile
                </Link>
              </div>

              {/* Quick Links */}
              <div className="border rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h3>
                <div className="space-y-2">
                  <Link 
                    to="/my-bookings" 
                    className="block px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md text-gray-800 transition"
                  >
                    📅 View My Bookings
                  </Link>
                  <Link 
                    to="/providers" 
                    className="block px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md text-gray-800 transition"
                  >
                    🔍 Find Service Providers
                  </Link>
                  <Link 
                    to="/" 
                    className="block px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md text-gray-800 transition"
                  >
                    🏠 Back to Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Please log in to continue</h2>
            <Link 
              to="/login" 
              className="inline-block px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            >
              Go to Login
            </Link>
          </div>
        )}
      </main>
    </div>
  );
}