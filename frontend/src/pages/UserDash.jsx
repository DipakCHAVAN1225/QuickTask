


// // // frontend/src/pages/UserDash.jsx
// // import React, { useState } from 'react';
// // import { Link, useNavigate } from 'react-router-dom';
// // import { useAuth } from '../auth/useAuth';  // ✅ FIXED: Import the hook, not AuthProvider

// // export default function UserDash() {
// //   const { user, logout } = useAuth();  // ✅ FIXED: Call the hook
// //   const [open, setOpen] = useState(false);
// //   const navigate = useNavigate();

// //   const onLogout = async () => {
// //     await logout();
// //     navigate('/login');
// //   };

// //   return (
// //     <div className="min-h-screen bg-gray-50">
// //       {/* Header */}
// //       <header className="bg-white shadow-sm">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <div className="flex items-center justify-between h-16">
// //             <Link to="/" className="flex items-center gap-3">
// //               <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-600 to-cyan-500 flex items-center justify-center text-white font-bold">Q</div>
// //               <span className="text-lg font-semibold text-gray-900">QuickTask</span>
// //             </Link>

// //             <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
// //               <Link to="/services" className="hover:text-indigo-600">Services</Link>
// //               <Link to="/my-bookings" className="hover:text-indigo-600">My Bookings</Link>
// //               <Link to="/HowItWorks" className="hover:text-indigo-600">How it works</Link>
// //             </nav>

// //             <div className="flex items-center gap-3">
// //               {!user ? (
// //                 <>
// //                   <Link to="/login" className="text-sm px-3 py-2 rounded-md hover:bg-gray-100">Log in</Link>
// //                   <Link
// //                     to="/register"
// //                     className="px-4 py-2 rounded-md bg-indigo-600 text-white text-sm font-medium shadow hover:bg-indigo-700"
// //                   >
// //                     Sign up
// //                   </Link>
// //                 </>
// //               ) : (
// //                 <div className="relative">
// //                   <button
// //                     onClick={() => setOpen(v => !v)}
// //                     className="flex items-center gap-3 p-1 rounded-full hover:bg-gray-100 focus:outline-none"
// //                   >
// //                     <img
// //                       src={user.dp || `https://api.dicebear.com/7.x/avataaars/svg?seed=${user.id || 'default'}`}
// //                       alt={user.name}
// //                       className="w-10 h-10 rounded-full object-cover border-2 border-indigo-600"
// //                     />
// //                   </button>

// //                   {open && (
// //                     <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-md z-50">
// //                       <div className="px-4 py-3 border-b text-sm">
// //                         <div className="font-medium text-gray-800">{user.name}</div>
// //                         <div className="text-xs text-gray-500">{user.email}</div>
// //                         <div className="text-xs text-indigo-600 mt-1 font-medium">Role: {user.role}</div>
// //                       </div>

// //                       <div className="py-1">
// //                         {user.role === 'provider' ? (
// //                           <>
// //                             <Link to="/provider-dashboard" className="block px-4 py-2 text-sm hover:bg-gray-50">Provider Dashboard</Link>
// //                             <Link to="/provider/services" className="block px-4 py-2 text-sm hover:bg-gray-50">My Services</Link>
// //                           </>
// //                         ) : (
// //                           <>
// //                             <Link to="/my-bookings" className="block px-4 py-2 text-sm hover:bg-gray-50">My Bookings</Link>
// //                             <Link to="/my-profile" className="block px-4 py-2 text-sm hover:bg-gray-50">Profile</Link>
// //                           </>
// //                         )}
// //                         <button 
// //                           onClick={onLogout} 
// //                           className="w-full text-left px-4 py-2 text-sm hover:bg-red-50 text-red-600 font-medium"
// //                         >
// //                           Log out
// //                         </button>
// //                       </div>
// //                     </div>
// //                   )}
// //                 </div>
// //               )}
// //             </div>
// //           </div>
// //         </div>
// //       </header>

// //       {/* Main Content */}
// //       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
// //         {user ? (
// //           <div className="bg-white rounded-lg shadow p-6">
// //             <h2 className="text-2xl font-bold text-gray-900 mb-6">Welcome, {user.name}!</h2>
            
// //             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //               {/* Profile Card */}
// //               <div className="border rounded-lg p-4">
// //                 <h3 className="text-lg font-semibold text-gray-800 mb-4">Your Profile</h3>
// //                 <div className="space-y-3">
// //                   <div>
// //                     <label className="text-sm text-gray-600">Name</label>
// //                     <p className="text-gray-800 font-medium">{user.name}</p>
// //                   </div>
// //                   <div>
// //                     <label className="text-sm text-gray-600">Email</label>
// //                     <p className="text-gray-800 font-medium">{user.email}</p>
// //                   </div>
// //                   <div>
// //                     <label className="text-sm text-gray-600">Role</label>
// //                     <p className="text-gray-800 font-medium capitalize">{user.role}</p>
// //                   </div>
// //                 </div>
// //                 <Link 
// //                   to="/my-profile" 
// //                   className="mt-4 inline-block px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
// //                 >
// //                   Edit Profile
// //                 </Link>
// //               </div>

// //               {/* Quick Links */}
// //               <div className="border rounded-lg p-4">
// //                 <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h3>
// //                 <div className="space-y-2">
// //                   <Link 
// //                     to="/my-bookings" 
// //                     className="block px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md text-gray-800 transition"
// //                   >
// //                     📅 View My Bookings
// //                   </Link>
// //                   <Link 
// //                     to="/providers" 
// //                     className="block px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md text-gray-800 transition"
// //                   >
// //                     🔍 Find Service Providers
// //                   </Link>
// //                   <Link 
// //                     to="/" 
// //                     className="block px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md text-gray-800 transition"
// //                   >
// //                     🏠 Back to Home
// //                   </Link>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         ) : (
// //           <div className="text-center py-12">
// //             <h2 className="text-2xl font-bold text-gray-900 mb-4">Please log in to continue</h2>
// //             <Link 
// //               to="/login" 
// //               className="inline-block px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
// //             >
// //               Go to Login
// //             </Link>
// //           </div>
// //         )}
// //       </main>
// //     </div>
// //   );
// // }































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











// import { useState, useEffect } from 'react';
// import { Calendar, Users, LogOut, Menu, X, Settings, Clock, MapPin, CheckCircle, XCircle, AlertCircle, Search, Plus } from 'lucide-react';

// export default function UserDash() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [activeTab, setActiveTab] = useState('dashboard');
//   const [userData, setUserData] = useState(null);
//   const [myRequests, setMyRequests] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const user = { 
//     name: 'Sarah Johnson', 
//     email: 'sarah@example.com', 
//     role: 'user',
//     id: '123'
//   };

//   useEffect(() => {
//     fetchUserData();
//   }, []);

//   const fetchUserData = async () => {
//     setLoading(true);
//     try {
//       const token = localStorage.getItem('token');
      
//       // Fetch user's booking requests
//       const requestsRes = await fetch('http://localhost:3000/api/bookings/user/requests', {
//         headers: { 'Authorization': `Bearer ${token}` }
//       });
//       const requestsData = await requestsRes.json();
//       setMyRequests(requestsData.requests || []);
      
//       setUserData(user);
//     } catch (error) {
//       console.error('Error fetching user data:', error);
//       setUserData(user);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const onLogout = () => {
//     localStorage.removeItem('token');
//     window.location.href = '/login';
//   };

//   const getStatusColor = (status) => {
//     switch(status) {
//       case 'pending': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
//       case 'accepted': return 'bg-green-100 text-green-700 border-green-200';
//       case 'rejected': return 'bg-red-100 text-red-700 border-red-200';
//       case 'completed': return 'bg-blue-100 text-blue-700 border-blue-200';
//       default: return 'bg-gray-100 text-gray-700 border-gray-200';
//     }
//   };

//   const getStatusIcon = (status) => {
//     switch(status) {
//       case 'pending': return <Clock size={18} />;
//       case 'accepted': return <CheckCircle size={18} />;
//       case 'rejected': return <XCircle size={18} />;
//       case 'completed': return <CheckCircle size={18} />;
//       default: return <AlertCircle size={18} />;
//     }
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-cyan-50 flex items-center justify-center">
//         <div className="text-center">
//           <div className="inline-block animate-spin rounded-full h-16 w-16 border-b-4 border-indigo-600"></div>
//           <p className="mt-4 text-gray-600 font-semibold text-lg">Loading your dashboard...</p>
//         </div>
//       </div>
//     );
//   }

//   if (!userData) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-cyan-50 flex items-center justify-center">
//         <div className="text-center bg-white p-12 rounded-3xl shadow-2xl">
//           <h2 className="text-3xl font-bold text-gray-900 mb-4">Please log in to continue</h2>
//           <button className="px-8 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 font-bold text-lg transition shadow-lg">
//             Go to Login
//           </button>
//         </div>
//       </div>
//     );
//   }

//   const firstName = userData.name.split(' ')[0];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50">

  

//       {/* Main Content */}
//       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         {/* Dashboard Tab */}
//         {activeTab === 'dashboard' && (
//           <div className="space-y-8">
//             {/* Welcome Section */}
//             <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl shadow-2xl p-8 text-white">
//               <h1 className="text-4xl font-bold mb-2">Welcome back, {firstName}! 👋</h1>
//               <p className="text-lg opacity-90">Find the perfect service provider for your needs</p>
//             </div>

//             {/* Quick Stats */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//               <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-blue-500 hover:shadow-xl transition-all duration-200">
//                 <div className="flex items-center justify-between mb-4">
//                   <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center">
//                     <Clock className="text-blue-600" size={28} />
//                   </div>
//                   <span className="text-3xl font-bold text-blue-600">
//                     {myRequests.filter(r => r.status === 'pending').length}
//                   </span>
//                 </div>
//                 <h3 className="text-gray-600 font-semibold">Pending Requests</h3>
//                 <p className="text-sm text-gray-500 mt-1">Awaiting provider response</p>
//               </div>

//               <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-green-500 hover:shadow-xl transition-all duration-200">
//                 <div className="flex items-center justify-between mb-4">
//                   <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center">
//                     <CheckCircle className="text-green-600" size={28} />
//                   </div>
//                   <span className="text-3xl font-bold text-green-600">
//                     {myRequests.filter(r => r.status === 'accepted').length}
//                   </span>
//                 </div>
//                 <h3 className="text-gray-600 font-semibold">Confirmed Bookings</h3>
//                 <p className="text-sm text-gray-500 mt-1">Ready to go</p>
//               </div>

//               <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-purple-500 hover:shadow-xl transition-all duration-200">
//                 <div className="flex items-center justify-between mb-4">
//                   <div className="w-14 h-14 rounded-xl bg-purple-100 flex items-center justify-center">
//                     <Calendar className="text-purple-600" size={28} />
//                   </div>
//                   <span className="text-3xl font-bold text-purple-600">
//                     {myRequests.filter(r => r.status === 'completed').length}
//                   </span>
//                 </div>
//                 <h3 className="text-gray-600 font-semibold">Completed Services</h3>
//                 <p className="text-sm text-gray-500 mt-1">Successfully finished</p>
//               </div>
//             </div>

//             {/* Quick Action Cards */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <button
//                 onClick={() => setActiveTab('requests')}
//                 className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 text-left border-2 border-transparent hover:border-indigo-300 group"
//               >
//                 <div className="flex items-center justify-between mb-4">
//                   <div className="w-16 h-16 rounded-2xl bg-indigo-100 flex items-center justify-center group-hover:scale-110 transition-transform">
//                     <Calendar size={32} className="text-indigo-600" />
//                   </div>
//                   <span className="text-indigo-600 font-bold text-lg">View All →</span>
//                 </div>
//                 <h2 className="text-3xl font-bold text-gray-900 mb-2">My Requests</h2>
//                 <p className="text-gray-600 text-lg">Track your service requests and bookings</p>
//               </button>

//               <button
//                 onClick={() => setActiveTab('browse')}
//                 className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 text-left border-2 border-transparent hover:border-cyan-300 group"
//               >
//                 <div className="flex items-center justify-between mb-4">
//                   <div className="w-16 h-16 rounded-2xl bg-cyan-100 flex items-center justify-center group-hover:scale-110 transition-transform">
//                     <Search size={32} className="text-cyan-600" />
//                   </div>
//                   <span className="text-cyan-600 font-bold text-lg">Explore →</span>
//                 </div>
//                 <h2 className="text-3xl font-bold text-gray-900 mb-2">Find Services</h2>
//                 <p className="text-gray-600 text-lg">Browse verified service providers</p>
//               </button>
//             </div>

//             {/* Profile Info */}
//             <div className="bg-white rounded-3xl shadow-lg border-2 border-gray-100 p-8">
//               <div className="flex items-start justify-between mb-6">
//                 <div>
//                   <h2 className="text-3xl font-bold text-gray-900 mb-1">Profile Information</h2>
//                   <p className="text-gray-600">Keep your account details up to date</p>
//                 </div>
//                 <button className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition font-bold shadow-lg">
//                   <Settings size={20} />
//                   Edit Profile
//                 </button>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t-2 border-gray-100">
//                 <div>
//                   <label className="text-sm font-bold text-gray-500 uppercase tracking-wide">Full Name</label>
//                   <p className="text-xl text-gray-900 font-semibold mt-1">{userData.name}</p>
//                 </div>
//                 <div>
//                   <label className="text-sm font-bold text-gray-500 uppercase tracking-wide">Email Address</label>
//                   <p className="text-xl text-gray-900 font-semibold mt-1">{userData.email}</p>
//                 </div>
//                 <div>
//                   <label className="text-sm font-bold text-gray-500 uppercase tracking-wide">Account Type</label>
//                   <div className="mt-1">
//                     <span className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 rounded-xl text-sm font-bold capitalize">
//                       Service Seeker
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* My Requests Tab */}
//         {activeTab === 'requests' && (
//           <div className="space-y-6">
//             <div className="flex items-center justify-between">
//               <div>
//                 <h2 className="text-4xl font-bold text-gray-900">My Service Requests</h2>
//                 <p className="text-gray-600 mt-2 text-lg">Track and manage your booking requests</p>
//               </div>
//               <button
//                 onClick={() => setActiveTab('browse')}
//                 className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:from-indigo-700 hover:to-purple-700 transition font-bold shadow-lg"
//               >
//                 <Plus size={20} />
//                 New Request
//               </button>
//             </div>

//             {/* Filter Tabs */}
//             <div className="flex gap-3 overflow-x-auto pb-2">
//               {['All', 'Pending', 'Accepted', 'Rejected', 'Completed'].map(filter => (
//                 <button
//                   key={filter}
//                   className="px-6 py-2 rounded-xl font-semibold whitespace-nowrap transition-all duration-200 border-2 hover:shadow-md"
//                   style={{
//                     backgroundColor: filter === 'All' ? '#4F46E5' : 'white',
//                     color: filter === 'All' ? 'white' : '#374151',
//                     borderColor: filter === 'All' ? '#4F46E5' : '#E5E7EB'
//                   }}
//                 >
//                   {filter}
//                 </button>
//               ))}
//             </div>

//             {/* Requests List */}
//             <div className="space-y-5">
//               {myRequests.length > 0 ? (
//                 myRequests.map(request => (
//                   <div key={request._id} className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border-2 border-gray-100">
//                     <div className="flex flex-col lg:flex-row gap-6">
//                       {/* Provider Info */}
//                       <div className="flex items-start gap-4 flex-1">
//                         <img
//                           src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${request.providerId}`}
//                           alt="Provider"
//                           className="w-20 h-20 rounded-2xl border-3 border-indigo-200 shadow-md"
//                         />
//                         <div className="flex-1">
//                           <div className="flex items-start justify-between mb-3">
//                             <div>
//                               <h3 className="text-2xl font-bold text-gray-900">{request.serviceType}</h3>
//                               <p className="text-gray-600 mt-1">
//                                 Provider: <span className="font-semibold text-indigo-600">{request.providerName}</span>
//                               </p>
//                             </div>
//                             <span className={`px-4 py-2 rounded-xl text-sm font-bold border-2 flex items-center gap-2 ${getStatusColor(request.status)}`}>
//                               {getStatusIcon(request.status)}
//                               {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
//                             </span>
//                           </div>

//                           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//                             <div className="flex items-center gap-3 text-gray-700 bg-gray-50 rounded-xl p-3">
//                               <Clock size={20} className="text-indigo-500" />
//                               <div>
//                                 <p className="text-xs text-gray-500 font-semibold">Scheduled Time</p>
//                                 <p className="font-bold">{new Date(request.scheduledTime).toLocaleString()}</p>
//                               </div>
//                             </div>
//                             <div className="flex items-center gap-3 text-gray-700 bg-gray-50 rounded-xl p-3">
//                               <span className="text-2xl">💰</span>
//                               <div>
//                                 <p className="text-xs text-gray-500 font-semibold">Service Cost</p>
//                                 <p className="font-bold text-green-600 text-lg">${request.amount}</p>
//                               </div>
//                             </div>
//                           </div>

//                           {request.address && (
//                             <div className="flex items-start gap-3 bg-blue-50 rounded-xl p-4 mb-4">
//                               <MapPin size={20} className="text-blue-600 mt-1" />
//                               <div>
//                                 <p className="text-xs text-blue-600 font-bold uppercase">Service Location</p>
//                                 <p className="text-gray-800 font-medium">{request.address}</p>
//                               </div>
//                             </div>
//                           )}

//                           {request.description && (
//                             <div className="bg-gray-50 rounded-xl p-4">
//                               <p className="text-sm text-gray-600 font-semibold mb-1">Request Details:</p>
//                               <p className="text-gray-800">{request.description}</p>
//                             </div>
//                           )}
//                         </div>
//                       </div>

//                       {/* Action Buttons */}
//                       <div className="flex lg:flex-col gap-3 lg:w-48">
//                         {request.status === 'accepted' && (
//                           <button className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-xl font-bold hover:from-green-600 hover:to-green-700 transition shadow-lg">
//                             Contact Provider
//                           </button>
//                         )}
//                         {request.status === 'pending' && (
//                           <button className="flex-1 bg-gray-200 text-gray-700 px-6 py-3 rounded-xl font-bold hover:bg-gray-300 transition">
//                             Cancel Request
//                           </button>
//                         )}
//                         <button className="flex-1 bg-indigo-100 text-indigo-700 px-6 py-3 rounded-xl font-bold hover:bg-indigo-200 transition">
//                           View Details
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 ))
//               ) : (
//                 <div className="bg-white rounded-3xl shadow-lg p-16 text-center">
//                   <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
//                     <Calendar size={64} className="text-gray-400" />
//                   </div>
//                   <h3 className="text-3xl font-bold text-gray-800 mb-3">No Requests Yet</h3>
//                   <p className="text-gray-500 text-lg mb-6">Start by browsing our service providers</p>
//                   <button
//                     onClick={() => setActiveTab('browse')}
//                     className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:from-indigo-700 hover:to-purple-700 transition font-bold text-lg shadow-lg"
//                   >
//                     Browse Services
//                   </button>
//                 </div>
//               )}
//             </div>
//           </div>
//         )}

//         {/* Browse Services Tab */}
//         {activeTab === 'browse' && (
//           <div className="space-y-6">
//             <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl shadow-2xl p-8 text-white">
//               <h2 className="text-4xl font-bold mb-2">Find Your Perfect Service Provider</h2>
//               <p className="text-lg opacity-90">Browse through our verified professionals</p>
//             </div>

//             <div className="bg-white rounded-3xl shadow-lg p-8">
//               <div className="flex items-center gap-4 mb-6">
//                 <Search className="text-gray-400" size={24} />
//                 <input
//                   type="text"
//                   placeholder="Search for services..."
//                   className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-indigo-500 text-lg"
//                 />
//                 <button className="px-8 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 font-bold transition">
//                   Search
//                 </button>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {['House Cleaning', 'Plumbing', 'Electrical', 'Gardening', 'Painting', 'Carpentry'].map(service => (
//                   <div key={service} className="p-6 border-2 border-gray-200 rounded-2xl hover:border-indigo-400 hover:shadow-xl transition-all duration-200 cursor-pointer group">
//                     <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
//                       <Users className="text-indigo-600" size={32} />
//                     </div>
//                     <h3 className="text-xl font-bold text-gray-900 mb-2">{service}</h3>
//                     <p className="text-gray-600 mb-4">Professional {service.toLowerCase()} services</p>
//                     <button className="w-full bg-indigo-600 text-white py-3 rounded-xl font-bold hover:bg-indigo-700 transition">
//                       View Providers
//                     </button>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         )}
//       </main>
//     </div>
//   );
// }