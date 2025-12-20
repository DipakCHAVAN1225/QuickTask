


// // frontend/src/pages/UserDash.jsx
// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useAuth } from '../auth/useAuth';  // ✅ FIXED: Import the hook, not AuthProvider

// export default function UserDash() {
//   const { user, logout } = useAuth();  // ✅ FIXED: Call the hook
//   const [open, setOpen] = useState(false);
//   const navigate = useNavigate();

//   const onLogout = async () => {
//     await logout();
//     navigate('/login');
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header */}
//       <header className="bg-white shadow-sm">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16">
//             <Link to="/" className="flex items-center gap-3">
//               <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-600 to-cyan-500 flex items-center justify-center text-white font-bold">Q</div>
//               <span className="text-lg font-semibold text-gray-900">QuickTask</span>
//             </Link>

//             <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
//               <Link to="/services" className="hover:text-indigo-600">Services</Link>
//               <Link to="/my-bookings" className="hover:text-indigo-600">My Bookings</Link>
//               <Link to="/HowItWorks" className="hover:text-indigo-600">How it works</Link>
//             </nav>

//             <div className="flex items-center gap-3">
//               {!user ? (
//                 <>
//                   <Link to="/login" className="text-sm px-3 py-2 rounded-md hover:bg-gray-100">Log in</Link>
//                   <Link
//                     to="/register"
//                     className="px-4 py-2 rounded-md bg-indigo-600 text-white text-sm font-medium shadow hover:bg-indigo-700"
//                   >
//                     Sign up
//                   </Link>
//                 </>
//               ) : (
//                 <div className="relative">
//                   <button
//                     onClick={() => setOpen(v => !v)}
//                     className="flex items-center gap-3 p-1 rounded-full hover:bg-gray-100 focus:outline-none"
//                   >
//                     <img
//                       src={user.dp || `https://api.dicebear.com/7.x/avataaars/svg?seed=${user.id || 'default'}`}
//                       alt={user.name}
//                       className="w-10 h-10 rounded-full object-cover border-2 border-indigo-600"
//                     />
//                   </button>

//                   {open && (
//                     <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-md z-50">
//                       <div className="px-4 py-3 border-b text-sm">
//                         <div className="font-medium text-gray-800">{user.name}</div>
//                         <div className="text-xs text-gray-500">{user.email}</div>
//                         <div className="text-xs text-indigo-600 mt-1 font-medium">Role: {user.role}</div>
//                       </div>

//                       <div className="py-1">
//                         {user.role === 'provider' ? (
//                           <>
//                             <Link to="/provider-dashboard" className="block px-4 py-2 text-sm hover:bg-gray-50">Provider Dashboard</Link>
//                             <Link to="/provider/services" className="block px-4 py-2 text-sm hover:bg-gray-50">My Services</Link>
//                           </>
//                         ) : (
//                           <>
//                             <Link to="/my-bookings" className="block px-4 py-2 text-sm hover:bg-gray-50">My Bookings</Link>
//                             <Link to="/my-profile" className="block px-4 py-2 text-sm hover:bg-gray-50">Profile</Link>
//                           </>
//                         )}
//                         <button 
//                           onClick={onLogout} 
//                           className="w-full text-left px-4 py-2 text-sm hover:bg-red-50 text-red-600 font-medium"
//                         >
//                           Log out
//                         </button>
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         {user ? (
//           <div className="bg-white rounded-lg shadow p-6">
//             <h2 className="text-2xl font-bold text-gray-900 mb-6">Welcome, {user.name}!</h2>
            
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {/* Profile Card */}
//               <div className="border rounded-lg p-4">
//                 <h3 className="text-lg font-semibold text-gray-800 mb-4">Your Profile</h3>
//                 <div className="space-y-3">
//                   <div>
//                     <label className="text-sm text-gray-600">Name</label>
//                     <p className="text-gray-800 font-medium">{user.name}</p>
//                   </div>
//                   <div>
//                     <label className="text-sm text-gray-600">Email</label>
//                     <p className="text-gray-800 font-medium">{user.email}</p>
//                   </div>
//                   <div>
//                     <label className="text-sm text-gray-600">Role</label>
//                     <p className="text-gray-800 font-medium capitalize">{user.role}</p>
//                   </div>
//                 </div>
//                 <Link 
//                   to="/my-profile" 
//                   className="mt-4 inline-block px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
//                 >
//                   Edit Profile
//                 </Link>
//               </div>

//               {/* Quick Links */}
//               <div className="border rounded-lg p-4">
//                 <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h3>
//                 <div className="space-y-2">
//                   <Link 
//                     to="/my-bookings" 
//                     className="block px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md text-gray-800 transition"
//                   >
//                     📅 View My Bookings
//                   </Link>
//                   <Link 
//                     to="/providers" 
//                     className="block px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md text-gray-800 transition"
//                   >
//                     🔍 Find Service Providers
//                   </Link>
//                   <Link 
//                     to="/" 
//                     className="block px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md text-gray-800 transition"
//                   >
//                     🏠 Back to Home
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ) : (
//           <div className="text-center py-12">
//             <h2 className="text-2xl font-bold text-gray-900 mb-4">Please log in to continue</h2>
//             <Link 
//               to="/login" 
//               className="inline-block px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
//             >
//               Go to Login
//             </Link>
//           </div>
//         )}
//       </main>
//     </div>
//   );
// }































import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/useAuth';
import { Calendar, Users, LogOut, Menu, X, Settings } from 'lucide-react';

export default function UserDash() {
  const { user, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Fetch user data from backend
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setLoading(true);
        setError(null);

        const token = localStorage.getItem('token');
        if (!token) {
          setError('No authentication token found');
          setLoading(false);
          return;
        }

        // Fetch current user data from backend
        const response = await fetch('http://localhost:3000/api/auth/me', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          }
        });

        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }

        const data = await response.json();
        console.log('✅ User data fetched:', data);
        
        // Use backend data or fallback to auth context
        setUserData(data.user || user);
      } catch (err) {
        console.error('❌ Error fetching user data:', err);
        setError(err.message);
        // Fallback to auth context user data
        setUserData(user);
      } finally {
        setLoading(false);
      }
    };

    if (user) {
      fetchUserData();
    }
  }, [user]);

  const onLogout = async () => {
    await logout();
    navigate('/login');
  };

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
          <p className="mt-4 text-gray-600">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  // Not logged in
  if (!user || !userData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-cyan-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Please log in to continue</h2>
          <Link 
            to="/login" 
            className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-medium transition"
          >
            Go to Login
          </Link>
        </div>
      </div>
    );
  }

  // Display name for welcome message
  const displayName = userData.name || 'User';
  const firstName = displayName.split(' ')[0];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-600 to-cyan-500 flex items-center justify-center text-white font-bold text-lg">Q</div>
              <span className="text-lg font-bold text-gray-900 hidden sm:inline">QuickTask</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
              <Link to="/services" className="hover:text-indigo-600 transition font-medium">Browse Services</Link>
              <Link to="/my-bookings" className="hover:text-indigo-600 transition font-medium">My Bookings</Link>
              <Link to="/my-profile" className="hover:text-indigo-600 transition font-medium">Profile</Link>
            </nav>

            {/* User Menu */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>

              <div className="hidden md:flex items-center gap-3 pl-4 border-l border-gray-200">
                <img
                  src={userData.dp || `https://api.dicebear.com/7.x/avataaars/svg?seed=${userData.id || 'default'}`}
                  alt={userData.name}
                  className="w-10 h-10 rounded-full object-cover border-2 border-indigo-600"
                />
                <button
                  onClick={onLogout}
                  className="p-2 hover:bg-red-50 rounded-lg text-red-600 transition"
                  title="Logout"
                >
                  <LogOut size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden pb-4 space-y-2 border-t">
              <Link to="/services" className="block px-4 py-2 hover:bg-gray-100 rounded-lg">Browse Services</Link>
              <Link to="/my-bookings" className="block px-4 py-2 hover:bg-gray-100 rounded-lg">My Bookings</Link>
              <Link to="/my-profile" className="block px-4 py-2 hover:bg-gray-100 rounded-lg">Profile</Link>
              <button
                onClick={onLogout}
                className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg font-medium"
              >
                Logout
              </button>
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Error Message */}
        {error && (
          <div className="mb-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="text-yellow-800 text-sm">⚠️ {error}</p>
          </div>
        )}

        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome back, {firstName}! 👋</h1>
          <p className="text-gray-600 mt-2">Manage your bookings and find the services you need</p>
        </div>

        {/* Quick Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* My Bookings Card */}
          <Link
            to="/my-bookings"
            className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-8 border border-gray-100 hover:border-indigo-200"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-lg bg-indigo-100 flex items-center justify-center">
                <Calendar size={24} className="text-indigo-600" />
              </div>
              <span className="text-sm font-semibold text-indigo-600">View All →</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">My Bookings</h2>
            <p className="text-gray-600">Track your upcoming appointments and service requests</p>
          </Link>

          {/* Browse Services Card */}
          <Link
            to="/services"
            className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-8 border border-gray-100 hover:border-cyan-200"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-lg bg-cyan-100 flex items-center justify-center">
                <Users size={24} className="text-cyan-600" />
              </div>
              <span className="text-sm font-semibold text-cyan-600">Explore →</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Find Services</h2>
            <p className="text-gray-600">Browse and book from our pool of verified providers</p>
          </Link>
        </div>

        {/* Profile Info Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-1">Profile Information</h2>
              <p className="text-gray-600">Keep your account details up to date</p>
            </div>
            <Link
              to="/my-profile"
              className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition font-medium"
            >
              <Settings size={18} />
              Edit Profile
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-gray-100">
            {/* Name */}
            <div>
              <label className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Full Name</label>
              <p className="text-lg text-gray-900 font-medium mt-1">{userData.name || 'Not set'}</p>
            </div>

            {/* Email */}
            <div>
              <label className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Email Address</label>
              <p className="text-lg text-gray-900 font-medium mt-1">{userData.email || 'Not set'}</p>
            </div>

            {/* Account Type */}
            <div>
              <label className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Account Type</label>
              <div className="mt-1">
                <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold capitalize">
                  {userData.role === 'provider' ? 'Service Provider' : 'Service Seeker'}
                </span>
              </div>
            </div>
          </div>

          {/* Phone & Address (if available) */}
          {(userData.phone || userData.address) && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 mt-6 border-t border-gray-100">
              {userData.phone && (
                <div>
                  <label className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Phone</label>
                  <p className="text-lg text-gray-900 font-medium mt-1">{userData.phone}</p>
                </div>
              )}
              {userData.address && (
                <div>
                  <label className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Address</label>
                  <p className="text-lg text-gray-900 font-medium mt-1">{userData.address}</p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Help Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-50 rounded-2xl border border-blue-100 p-6">
            <h3 className="font-bold text-gray-900 mb-2">Need Help?</h3>
            <p className="text-sm text-gray-700 mb-4">Check out our guide on how to use QuickTask</p>
            <Link to="/HowItWorks" className="text-blue-600 font-semibold hover:underline">
              Learn More →
            </Link>
          </div>

          <div className="bg-gray-100 rounded-2xl border border-gray-200 p-6">
            <h3 className="font-bold text-gray-900 mb-2">Account Settings</h3>
            <p className="text-sm text-gray-700 mb-4">Update your profile and preferences</p>
            <Link to="/my-profile" className="text-indigo-600 font-semibold hover:underline">
              Go to Settings →
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}