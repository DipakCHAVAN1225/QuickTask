

// // // frontend/src/components/Navbar.jsx
// // import { useState } from 'react';
// // import { Link, useNavigate } from "react-router-dom";
// // import { LogOut, Settings, Heart, History, ChevronDown, User } from 'lucide-react';
// // import { useAuth } from '../auth/useAuth';

// // export default function Navbar() {
// //   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
// //   const navigate = useNavigate();
  
// //   // Get user from auth hook
// //   const { user, logout, loading } = useAuth();

// //   const handleLogout = () => {
// //     logout();
// //     setIsDropdownOpen(false);
// //     navigate('/');
// //   };

// //   // If still loading, show a minimal navbar
// //   if (loading) {
// //     return (
// //       <header className="bg-white shadow-sm sticky top-0 z-30">
// //         <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
// //           <Link to="/" className="text-xl font-extrabold text-indigo-600">
// //             Quick<span className="text-gray-900">Task</span>
// //           </Link>
// //         </div>
// //       </header>
// //     );
// //   }

// //   // If user is logged in and is a provider
// //   if (user && user.role === 'provider') {
// //     return (
// //       <header className="bg-white shadow-sm sticky top-0 z-30">
// //         <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          
// //           {/* Logo */}
// //           <Link to="/provider-dashboard" className="text-xl font-extrabold text-indigo-600">
// //             Quick<span className="text-gray-900">Task</span>
// //           </Link>

// //           {/* Provider Navigation */}
// //           <nav className="hidden md:flex gap-8 text-sm text-gray-600 flex-grow ml-8">
// //             <Link to="/provider-dashboard" className="hover:text-indigo-600 font-medium">Dashboard</Link>
// //             <Link to="/provider-bookings" className="hover:text-indigo-600">Bookings</Link>
// //             <Link to="/provider-earnings" className="hover:text-indigo-600">Earnings</Link>
// //             <Link to="/provider-profile" className="hover:text-indigo-600">Profile</Link>
// //           </nav>

// //           {/* Provider Profile Dropdown */}
// //           <div className="relative">
// //             <button
// //               onClick={() => setIsDropdownOpen(!isDropdownOpen)}
// //               className="flex items-center gap-3 hover:bg-gray-100 px-3 py-2 rounded-lg transition"
// //             >
// //               <img
// //                 src={user.dp || `https://api.dicebear.com/7.x/avataaars/svg?seed=${user.id || 'default'}`}
// //                 alt={user.businessName || user.name}
// //                 className="w-9 h-9 rounded-full border-2 border-indigo-600"
// //               />
// //               <span className="hidden sm:inline text-sm font-medium text-gray-900">
// //                 {user.businessName || user.name}
// //               </span>
// //               <ChevronDown 
// //                 size={18} 
// //                 className={`w-4 h-4 transition ${isDropdownOpen ? 'rotate-180' : ''}`} 
// //               />
// //             </button>

// //             {/* Dropdown Menu */}
// //             {isDropdownOpen && (
// //               <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200">
// //                 {/* Header */}
// //                 <div className="p-4 border-b border-gray-200">
// //                   <p className="text-sm font-semibold text-gray-900">
// //                     {user.businessName || user.name}
// //                   </p>
// //                   <p className="text-xs text-gray-500">{user.email}</p>
// //                   <p className="text-xs text-gray-400 mt-1">
// //                     {user.serviceType && `Service: ${user.serviceType}`}
// //                   </p>
// //                 </div>

// //                 {/* Menu Items */}
// //                 <div className="py-2">
// //                   <Link
// //                     to="/provider-profile"
// //                     onClick={() => setIsDropdownOpen(false)}
// //                     className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
// //                   >
// //                     <Settings size={16} />
// //                     Settings
// //                   </Link>
// //                   <Link
// //                     to="/provider-earnings"
// //                     onClick={() => setIsDropdownOpen(false)}
// //                     className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
// //                   >
// //                     <Heart size={16} />
// //                     Earnings
// //                   </Link>
// //                 </div>

// //                 {/* Logout */}
// //                 <div className="border-t border-gray-200 p-2">
// //                   <button
// //                     onClick={handleLogout}
// //                     className="w-full flex items-center gap-3 px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded"
// //                   >
// //                     <LogOut size={16} />
// //                     Logout
// //                   </button>
// //                 </div>
// //               </div>
// //             )}
// //           </div>
// //         </div>
// //       </header>
// //     );
// //   }

// //   // If user is logged in (customer/user)
// //   if (user && user.role === 'user') {
// //     return (
// //       <header className="bg-white shadow-sm sticky top-0 z-30">
// //         <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          
// //           {/* Logo + Navigation */}
// //           <div className="flex items-center gap-4">
// //             <Link to="/" className="text-xl font-extrabold text-indigo-600">
// //               Quick<span className="text-gray-900">Task</span>
// //             </Link>

// //             <nav className="hidden md:flex gap-6 ml-6 text-sm text-gray-600">
// //               <Link to="/" className="hover:text-indigo-600">Home</Link>
// //               <a className="hover:text-indigo-600 cursor-pointer" href="#services">Services</a>
// //               <Link to="/providers" className="hover:text-indigo-600">Find Provider</Link>
// //               <a className="hover:text-indigo-600 cursor-pointer" href="#how">How it works</a>
// //             </nav>
// //           </div>

// //           {/* Customer Actions */}
// //           <div className="flex items-center gap-4">
// //             {/* Bookings */}
// //             <Link
// //               to="/my-bookings"
// //               className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-100"
// //             >
// //               <History size={16} />
// //               My Bookings
// //             </Link>

// //             {/* Profile Dropdown */}
// //             <div className="relative">
// //               <button
// //                 onClick={() => setIsDropdownOpen(!isDropdownOpen)}
// //                 className="flex items-center gap-3 hover:bg-gray-100 px-3 py-2 rounded-lg transition"
// //               >
// //                 <img
// //                   src={user.dp || `https://api.dicebear.com/7.x/avataaars/svg?seed=${user.id || 'default'}`}
// //                   alt={user.name}
// //                   className="w-9 h-9 rounded-full border-2 border-indigo-600"
// //                 />
// //                 <span className="hidden sm:inline text-sm font-medium text-gray-900">
// //                   {user.name}
// //                 </span>
// //                 <ChevronDown 
// //                   size={18} 
// //                   className={`w-4 h-4 transition ${isDropdownOpen ? 'rotate-180' : ''}`} 
// //                 />
// //               </button>

// //               {/* Dropdown Menu */}
// //               {isDropdownOpen && (
// //                 <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200">
// //                   {/* Header */}
// //                   <div className="p-4 border-b border-gray-200">
// //                     <p className="text-sm font-semibold text-gray-900">{user.name}</p>
// //                     <p className="text-xs text-gray-500">{user.email}</p>
// //                   </div>

// //                   {/* Menu Items */}
// //                   <div className="py-2">
// //                     <Link
// //                       to="/my-bookings"
// //                       onClick={() => setIsDropdownOpen(false)}
// //                       className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
// //                     >
// //                       <History size={16} />
// //                       My Bookings
// //                     </Link>
// //                     <Link
// //                       to="/my-profile"
// //                       onClick={() => setIsDropdownOpen(false)}
// //                       className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
// //                     >
// //                       <Settings size={16} />
// //                       Profile Settings
// //                     </Link>
// //                   </div>

// //                   {/* Logout */}
// //                   <div className="border-t border-gray-200 p-2">
// //                     <button
// //                       onClick={handleLogout}
// //                       className="w-full flex items-center gap-3 px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded"
// //                     >
// //                       <LogOut size={16} />
// //                       Logout
// //                     </button>
// //                   </div>
// //                 </div>
// //               )}
// //             </div>
// //           </div>
// //         </div>
// //       </header>
// //     );
// //   }

// //   // Default navbar (not logged in)
// //   return (
// //     <header className="bg-white shadow-sm sticky top-0 z-30">
// //       <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
// //         {/* Logo + Navigation */}
// //         <div className="flex items-center gap-4">
// //           <Link to="/" className="text-xl font-extrabold text-indigo-600">
// //             Quick<span className="text-gray-900">Task</span>
// //           </Link>

// //           <nav className="hidden md:flex gap-6 ml-6 text-sm text-gray-600">
// //             <a className="hover:text-indigo-600 cursor-pointer" href="#services">Services</a>
// //             <a className="hover:text-indigo-600 cursor-pointer" href="#providers">Provider</a>
// //             <a className="hover:text-indigo-600 cursor-pointer" href="#how">How it works</a>
// //             <a className="hover:text-indigo-600 cursor-pointer" href="#testimonials">Testimonials</a>
// //           </nav>
// //         </div>

// //         {/* Buttons */}
// //         <div className="flex items-center gap-4">
// //           {/* Login Button */}
// //           <Link
// //             to="/login"
// //             className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-100 border border-gray-300"
// //           >
// //             <User size={18} />
// //             Login
// //           </Link>

// //           {/* Register Button */}
// //           <Link 
// //             to="/register"
// //             className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg shadow text-sm font-medium"
// //           >
// //             Sign Up
// //           </Link>
// //         </div>
// //       </div>
// //     </header>
// //   );
// // }

// import { useState } from 'react';
// import {Bell, DollarSign, Calendar, Clock, CheckCircle, XCircle, LogOut, Menu, X } from 'lucide-react';
// import {Settings,  History, ChevronDown, User} from 'lucide-react';

// export default function NavbarPreview() {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [userRole, setUserRole] = useState('none'); // 'none', 'user', 'provider'



// const [activeTab, setActiveTab] = useState('overview');
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [requests, setRequests] = useState([
//     { id: 1, user: 'John Smith', service: 'House Cleaning', time: '2:00 PM Today', status: 'pending', rating: 4.5 },
//     { id: 2, user: 'Sarah Johnson', service: 'Plumbing Repair', time: '4:30 PM Today', status: 'pending', rating: 4.8 },
//     { id: 3, user: 'Mike Davis', service: 'House Cleaning', time: '10:00 AM Tomorrow', status: 'pending', rating: 4.2 },
//   ]);

//   const [bookings] = useState([
//     { id: 101, user: 'Emma Wilson', service: 'Gardening', date: 'Dec 12, 2025', time: '10:00 AM', status: 'confirmed', amount: '$85' },
//     { id: 102, user: 'Robert Brown', service: 'House Cleaning', date: 'Dec 13, 2025', time: '2:00 PM', status: 'confirmed', amount: '$120' },
//     { id: 103, user: 'Lisa Anderson', service: 'Plumbing', date: 'Dec 15, 2025', time: '9:00 AM', status: 'completed', amount: '$150' },
//   ]);

//   const handleAccept = (id) => {
//     setRequests(requests.filter(req => req.id !== id));
//   };

//   const handleReject = (id) => {
//     setRequests(requests.filter(req => req.id !== id));
//   };

//   const stats = {
//     totalEarnings: '$2,450',
//     monthEarnings: '$890',
//     completedJobs: 24,
//     averageRating: 4.6,
//   };

//   const user = { name: 'John Provider', role: 'provider' };

//   if (!user || user.role !== 'provider') {
//     return <div className="p-6 text-center text-red-600 font-bold">Access Denied - Provider Only</div>;
//   }



//   const mockUser = {
//     name: 'John Doe',
//     email: 'john@example.com',
//     businessName: 'Premium Services Co.',
//     serviceType: 'Cleaning & Maintenance',
//     id: '123'
//   };

//   // Login Page
//   // if (userRole === 'none') {
//   //   return (
//   //     <div className="w-full bg-gradient-to-br from-indigo-50 to-purple-50 min-h-screen">
//   //       {/* Navbar - Not logged in */}
//   //       <header className="fixed top-0 left-0 right-0 bg-white backdrop-blur-lg bg-opacity-95 shadow-xl z-50 border-b border-gray-100">
//   //         <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
//   //           <div className="text-2xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
//   //             Quick<span className="text-gray-900">Task</span>
//   //           </div>

//   //           <nav className="hidden lg:flex gap-10 ml-8 text-sm font-medium">
//   //             <a className="text-gray-700 hover:text-indigo-600 transition cursor-pointer">Services</a>
//   //             <a className="text-gray-700 hover:text-indigo-600 transition cursor-pointer">Provider</a>
//   //             <a className="text-gray-700 hover:text-indigo-600 transition cursor-pointer">How it works</a>
//   //             <a className="text-gray-700 hover:text-indigo-600 transition cursor-pointer">Testimonials</a>
//   //           </nav>

//   //           <div className="flex items-center gap-4">
//   //             <button className="hidden lg:inline-flex items-center gap-2 px-6 py-2 rounded-full text-sm text-indigo-600 hover:bg-indigo-50 border border-indigo-200 transition font-semibold">
//   //               <User size={18} />
//   //               Login
//   //             </button>

//   //             <button className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-2 rounded-full shadow-lg shadow-indigo-500/30 transition duration-300 font-semibold text-sm">
//   //               <Calendar size={18} />
//   //               Book Now
//   //             </button>

//   //             <button className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition">
//   //               <Menu size={24} />
//   //             </button>
//   //           </div>
//   //         </div>
//   //       </header>

//   //       {/* Login Page Content */}
//   //       <div className="pt-24 px-6 pb-12">
//   //         <div className="max-w-md mx-auto">
//   //           <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
//   //             <h1 className="text-3xl font-bold text-gray-900 mb-2 text-center">Welcome Back</h1>
//   //             <p className="text-center text-gray-600 mb-8">Choose your account type to login</p>

//   //             {/* Customer Login Button */}
//   //             <button
//   //               onClick={() => setUserRole('user')}
//   //               className="w-full bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white px-6 py-4 rounded-xl shadow-lg shadow-indigo-500/30 transition duration-300 font-semibold text-lg mb-4 flex items-center justify-center gap-3"
//   //             >
//   //               <User size={24} />
//   //               Login as Customer
//   //             </button>

//   //             {/* Provider Login Button */}
//   //             <button
//   //               onClick={() => setUserRole('provider')}
//   //               className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-6 py-4 rounded-xl shadow-lg shadow-purple-500/30 transition duration-300 font-semibold text-lg flex items-center justify-center gap-3"
//   //             >
//   //               <Settings size={24} />
//   //               Login as Provider
//   //             </button>

//   //             <div className="mt-8 pt-8 border-t border-gray-200">
//   //               <p className="text-center text-gray-600 text-sm">Don't have an account? <span className="text-indigo-600 font-semibold cursor-pointer hover:text-indigo-700">Sign up</span></p>
//   //             </div>
//   //           </div>

//   //           {/* Info Cards */}
//   //           <div className="grid md:grid-cols-2 gap-4 mt-8">
//   //             <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
//   //               <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
//   //                 <Calendar className="text-indigo-600" size={24} />
//   //               </div>
//   //               <h3 className="font-bold text-gray-900 mb-2">For Customers</h3>
//   //               <p className="text-sm text-gray-600">Book services, track bookings, and manage your account.</p>
//   //             </div>

//   //             <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
//   //               <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
//   //                 <Settings className="text-purple-600" size={24} />
//   //               </div>
//   //               <h3 className="font-bold text-gray-900 mb-2">For Providers</h3>
//   //               <p className="text-sm text-gray-600">Manage bookings, track earnings, and grow your business.</p>
//   //             </div>
//   //           </div>
//   //         </div>
//   //       </div>
//   //     </div>
//   //   );
//   // }

//   // Customer Dashboard
//   if (userRole === 'user') {
//     return (
//       <div className="w-full bg-gray-50 min-h-screen">
//         {/* Navbar - Customer */}
//         <header className="fixed top-0 left-0 right-0 bg-white backdrop-blur-lg bg-opacity-95 shadow-xl z-50 border-b border-gray-100">
//           <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
//             <div className="text-2xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
//               Quick<span className="text-gray-900">Task</span>
//             </div>

//             <nav className="hidden lg:flex gap-10 ml-8 text-sm font-medium">
//               <a className="text-gray-700 hover:text-indigo-600 transition cursor-pointer">Home</a>
//               <a className="text-gray-700 hover:text-indigo-600 transition cursor-pointer">Services</a>
//               <a className="text-gray-700 hover:text-indigo-600 transition cursor-pointer">Find Provider</a>
//               <a className="text-gray-700 hover:text-indigo-600 transition cursor-pointer">How it works</a>
//             </nav>

//             <div className="flex items-center gap-4">
//               <button className="hidden lg:inline-flex items-center gap-2 px-5 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-100 transition font-medium">
//                 <History size={18} />
//                 My Bookings
//               </button>

//               <button className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-2 rounded-full shadow-lg shadow-indigo-500/30 transition duration-300 font-semibold text-sm">
//                 <Calendar size={18} />
//                 Book Now
//               </button>

//               <div className="relative">
//                 <button
//                   onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//                   className="flex items-center gap-3 hover:bg-gray-100 px-4 py-2 rounded-full transition duration-200"
//                 >
//                   <img
//                     src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${mockUser.id}`}
//                     alt={mockUser.name}
//                     className="w-10 h-10 rounded-full border-2 border-indigo-600 shadow-sm"
//                   />
//                   <span className="hidden sm:inline text-sm font-semibold text-gray-900">
//                     {mockUser.name}
//                   </span>
//                   <ChevronDown 
//                     size={16} 
//                     className={`transition duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} 
//                   />
//                 </button>

//                 {isDropdownOpen && (
//                   <div className="absolute right-0 mt-3 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
//                     <div className="p-5 border-b border-gray-100 bg-gradient-to-r from-indigo-50 to-purple-50">
//                       <p className="text-sm font-bold text-gray-900">{mockUser.name}</p>
//                       <p className="text-xs text-gray-600 mt-1">{mockUser.email}</p>
//                     </div>

//                     <div className="py-3">
//                       <button className="w-full flex items-center gap-3 px-5 py-3 text-sm text-gray-700 hover:bg-indigo-50 transition">
//                         <History size={16} className="text-indigo-600" />
//                         My Bookings
//                       </button>
//                       <button className="w-full flex items-center gap-3 px-5 py-3 text-sm text-gray-700 hover:bg-indigo-50 transition">
//                         <Settings size={16} className="text-indigo-600" />
//                         Profile Settings
//                       </button>
//                     </div>

//                     <div className="border-t border-gray-100 p-2">
//                       <button
//                         onClick={() => {
//                           setUserRole('none');
//                           setIsDropdownOpen(false);
//                         }}
//                         className="w-full flex items-center gap-3 px-5 py-3 text-sm text-red-600 hover:bg-red-50 rounded-lg transition font-medium"
//                       >
//                         <LogOut size={16} />
//                         Logout
//                       </button>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </header>

//         {/* Customer Dashboard Content */}
//         <div className="pt-20 px-6">
//           <div className="max-w-6xl mx-auto mt-10">
//             <div className="mb-8">
//               <h1 className="text-4xl font-bold text-gray-900 mb-2">Customer Dashboard</h1>
//               <p className="text-gray-600">Welcome back, {mockUser.name}!</p>
//             </div>

//             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//               <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition">
//                 <div className="flex items-center justify-between mb-4">
//                   <h3 className="text-lg font-bold text-gray-900">My Bookings</h3>
//                   <Calendar className="text-indigo-600" size={24} />
//                 </div>
//                 <p className="text-3xl font-extrabold text-indigo-600 mb-2">5</p>
//                 <p className="text-gray-600 text-sm">Active this month</p>
//               </div>

//               <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition">
//                 <div className="flex items-center justify-between mb-4">
//                   <h3 className="text-lg font-bold text-gray-900">Total Spent</h3>
//                   <Calendar className="text-purple-600" size={24} />
//                 </div>
//                 <p className="text-3xl font-extrabold text-purple-600 mb-2">$450</p>
//                 <p className="text-gray-600 text-sm">All services</p>
//               </div>

//               <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition">
//                 <div className="flex items-center justify-between mb-4">
//                   <h3 className="text-lg font-bold text-gray-900">Providers</h3>
//                   <Settings className="text-pink-600" size={24} />
//                 </div>
//                 <p className="text-3xl font-extrabold text-pink-600 mb-2">3</p>
//                 <p className="text-gray-600 text-sm">Saved favorites</p>
//               </div>

//               <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition">
//                 <div className="flex items-center justify-between mb-4">
//                   <h3 className="text-lg font-bold text-gray-900">Last Booking</h3>
//                   <History className="text-green-600" size={24} />
//                 </div>
//                 <p className="text-xl font-semibold text-gray-900 mb-2">Cleaning</p>
//                 <p className="text-gray-600 text-sm">2 days ago</p>
//               </div>
//             </div>

//             <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
//               <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Activity</h2>
//               <div className="space-y-4">
//                 <div className="flex items-center justify-between pb-4 border-b border-gray-200">
//                   <div>
//                     <p className="font-semibold text-gray-900">Home Cleaning</p>
//                     <p className="text-sm text-gray-600">Completed • Premium Services Co.</p>
//                   </div>
//                   <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold">Done</span>
//                 </div>
//                 <div className="flex items-center justify-between pb-4 border-b border-gray-200">
//                   <div>
//                     <p className="font-semibold text-gray-900">Plumbing Repair</p>
//                     <p className="text-sm text-gray-600">In Progress • Expert Plumbers</p>
//                   </div>
//                   <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">Active</span>
//                 </div>
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <p className="font-semibold text-gray-900">Painting Service</p>
//                     <p className="text-sm text-gray-600">Scheduled • Paint Masters</p>
//                   </div>
//                   <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-semibold">Pending</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//     return (
//       <div className="flex h-screen bg-gray-100">
//         {/* Sidebar */}
//         <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-gradient-to-b from-blue-600 to-blue-800 text-white transform transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:static`}>
//           <div className="p-6">
//             <h1 className="text-2xl font-bold mb-8">ServicePro</h1>
//             <nav className="space-y-4">
//               <button onClick={() => { setActiveTab('overview'); setSidebarOpen(false); }} className={`w-full text-left px-4 py-2 rounded transition ${activeTab === 'overview' ? 'bg-blue-500' : 'hover:bg-blue-700'}`}>
//                 📊 Overview
//               </button>
//               <button onClick={() => { setActiveTab('requests'); setSidebarOpen(false); }} className={`w-full text-left px-4 py-2 rounded transition ${activeTab === 'requests' ? 'bg-blue-500' : 'hover:bg-blue-700'}`}>
//                 📋 Requests
//               </button>
//               <button onClick={() => { setActiveTab('bookings'); setSidebarOpen(false); }} className={`w-full text-left px-4 py-2 rounded transition ${activeTab === 'bookings' ? 'bg-blue-500' : 'hover:bg-blue-700'}`}>
//                 📅 Bookings
//               </button>
//               <button onClick={() => { setActiveTab('earnings'); setSidebarOpen(false); }} className={`w-full text-left px-4 py-2 rounded transition ${activeTab === 'earnings' ? 'bg-blue-500' : 'hover:bg-blue-700'}`}>
//                 💰 Earnings
//               </button>
//               <button onClick={() => { setActiveTab('profile'); setSidebarOpen(false); }} className={`w-full text-left px-4 py-2 rounded transition ${activeTab === 'profile' ? 'bg-blue-500' : 'hover:bg-blue-700'}`}>
//                 ⚙️ Settings
//               </button>
//             </nav>
//           </div>
//           <div className="absolute bottom-6 left-6 right-6">
//             <button className="w-full bg-red-500 hover:bg-red-600 px-4 py-2 rounded flex items-center justify-center gap-2 transition" onClick={() => {
//                           setUserRole('none') }}>
//               <LogOut size={18} /> Logout
//             </button>
//           </div>
//         </div>
  
//         {/* Main Content */}
//         <div className="flex-1 flex flex-col">
//           {/* Header */}
//           <div className="bg-white shadow">
//             <div className="flex items-center justify-between p-6">
//               <button onClick={() => setSidebarOpen(!sidebarOpen)} className="lg:hidden">
//                 {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
//               </button>
//               <h2 className="text-2xl font-bold text-gray-800">Provider Dashboard</h2>
//               <div className="flex items-center gap-4">
//                 <Bell className="text-gray-600 cursor-pointer hover:text-blue-600" />
//                 <div className="w-10 h-10 rounded-full bg-gray-300"></div>
//               </div>
//             </div>
//           </div>
  
//           {/* Content Area */}
//           <div className="flex-1 overflow-auto p-6">
//             {/* Overview Tab */}
//             {activeTab === 'overview' && (
//               <div>
//                 <h3 className="text-3xl font-bold text-gray-800 mb-8">Welcome, Provider!</h3>
                
//                 {/* Stats Cards */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//                   <div className="bg-white rounded-lg shadow p-6 border-l-4 border-blue-500">
//                     <div className="flex items-center justify-between">
//                       <div>
//                         <p className="text-gray-600 text-sm">Total Earnings</p>
//                         <p className="text-3xl font-bold text-blue-600 mt-2">{stats.totalEarnings}</p>
//                       </div>
//                       <DollarSign className="text-blue-500" size={32} />
//                     </div>
//                   </div>
  
//                   <div className="bg-white rounded-lg shadow p-6 border-l-4 border-green-500">
//                     <div className="flex items-center justify-between">
//                       <div>
//                         <p className="text-gray-600 text-sm">This Month</p>
//                         <p className="text-3xl font-bold text-green-600 mt-2">{stats.monthEarnings}</p>
//                       </div>
//                       <Calendar className="text-green-500" size={32} />
//                     </div>
//                   </div>
  
//                   <div className="bg-white rounded-lg shadow p-6 border-l-4 border-purple-500">
//                     <div className="flex items-center justify-between">
//                       <div>
//                         <p className="text-gray-600 text-sm">Completed Jobs</p>
//                         <p className="text-3xl font-bold text-purple-600 mt-2">{stats.completedJobs}</p>
//                       </div>
//                       <CheckCircle className="text-purple-500" size={32} />
//                     </div>
//                   </div>
  
//                   <div className="bg-white rounded-lg shadow p-6 border-l-4 border-yellow-500">
//                     <div className="flex items-center justify-between">
//                       <div>
//                         <p className="text-gray-600 text-sm">Rating</p>
//                         <p className="text-3xl font-bold text-yellow-600 mt-2">⭐ {stats.averageRating}</p>
//                       </div>
//                       <Bell className="text-yellow-500" size={32} />
//                     </div>
//                   </div>
//                 </div>
  
//                 {/* Quick Actions */}
//                 <div className="bg-white rounded-lg shadow p-6 mb-8">
//                   <h4 className="text-xl font-bold text-gray-800 mb-4">Quick Stats</h4>
//                   <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                     <div className="text-center p-4 bg-blue-50 rounded-lg">
//                       <p className="text-gray-600">Pending Requests</p>
//                       <p className="text-4xl font-bold text-blue-600 mt-2">{requests.length}</p>
//                     </div>
//                     <div className="text-center p-4 bg-green-50 rounded-lg">
//                       <p className="text-gray-600">Confirmed Bookings</p>
//                       <p className="text-4xl font-bold text-green-600 mt-2">2</p>
//                     </div>
//                     <div className="text-center p-4 bg-orange-50 rounded-lg">
//                       <p className="text-gray-600">Upcoming Jobs</p>
//                       <p className="text-4xl font-bold text-orange-600 mt-2">3</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}
  
//             {/* Requests Tab */}
//             {activeTab === 'requests' && (
//               <div>
//                 <h3 className="text-2xl font-bold text-gray-800 mb-6">Service Requests</h3>
//                 <div className="space-y-4">
//                   {requests.length > 0 ? (
//                     requests.map(req => (
//                       <div key={req.id} className="bg-white rounded-lg shadow p-6">
//                         <div className="flex items-start justify-between mb-4">
//                           <div>
//                             <h4 className="text-lg font-bold text-gray-800">{req.service}</h4>
//                             <p className="text-gray-600">From: <span className="font-semibold">{req.user}</span></p>
//                             <p className="text-gray-600 flex items-center gap-2 mt-2">
//                               <Clock size={16} /> {req.time}
//                             </p>
//                             <p className="text-yellow-500 mt-2">Rating: ⭐ {req.rating}</p>
//                           </div>
//                           <div className="flex gap-3">
//                             <button onClick={() => handleAccept(req.id)} className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-semibold flex items-center gap-2 transition">
//                               <CheckCircle size={18} /> Accept
//                             </button>
//                             <button onClick={() => handleReject(req.id)} className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg font-semibold flex items-center gap-2 transition">
//                               <XCircle size={18} /> Reject
//                             </button>
//                           </div>
//                         </div>
//                       </div>
//                     ))
//                   ) : (
//                     <div className="bg-white rounded-lg shadow p-12 text-center">
//                       <p className="text-gray-500 text-lg">No pending requests</p>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             )}
  
//             {/* Bookings Tab */}
//             {activeTab === 'bookings' && (
//               <div>
//                 <h3 className="text-2xl font-bold text-gray-800 mb-6">Your Bookings</h3>
//                 <div className="bg-white rounded-lg shadow overflow-hidden">
//                   <table className="w-full">
//                     <thead className="bg-gray-100 border-b">
//                       <tr>
//                         <th className="px-6 py-4 text-left text-gray-700 font-semibold">Service</th>
//                         <th className="px-6 py-4 text-left text-gray-700 font-semibold">Customer</th>
//                         <th className="px-6 py-4 text-left text-gray-700 font-semibold">Date & Time</th>
//                         <th className="px-6 py-4 text-left text-gray-700 font-semibold">Amount</th>
//                         <th className="px-6 py-4 text-left text-gray-700 font-semibold">Status</th>
//                       </tr>
//                     </thead>
//                     <tbody className="divide-y">
//                       {bookings.map(booking => (
//                         <tr key={booking.id} className="hover:bg-gray-50">
//                           <td className="px-6 py-4 font-semibold text-gray-800">{booking.service}</td>
//                           <td className="px-6 py-4 text-gray-700">{booking.user}</td>
//                           <td className="px-6 py-4 text-gray-700">{booking.date} at {booking.time}</td>
//                           <td className="px-6 py-4 font-semibold text-green-600">{booking.amount}</td>
//                           <td className="px-6 py-4">
//                             <span className={`px-3 py-1 rounded-full text-sm font-semibold ${booking.status === 'confirmed' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>
//                               {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
//                             </span>
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             )}
  
//             {/* Earnings Tab */}
//             {activeTab === 'earnings' && (
//               <div>
//                 <h3 className="text-2xl font-bold text-gray-800 mb-6">Earnings</h3>
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//                   <div className="bg-white rounded-lg shadow p-6">
//                     <h4 className="text-xl font-bold text-gray-800 mb-4">Earnings Summary</h4>
//                     <div className="space-y-4">
//                       <div className="flex justify-between py-3 border-b">
//                         <span className="text-gray-700">Total Earnings (All Time)</span>
//                         <span className="font-bold text-lg text-blue-600">$2,450</span>
//                       </div>
//                       <div className="flex justify-between py-3 border-b">
//                         <span className="text-gray-700">This Month</span>
//                         <span className="font-bold text-lg text-green-600">$890</span>
//                       </div>
//                       <div className="flex justify-between py-3 border-b">
//                         <span className="text-gray-700">This Week</span>
//                         <span className="font-bold text-lg text-purple-600">$320</span>
//                       </div>
//                       <div className="flex justify-between py-3">
//                         <span className="text-gray-700">Pending Payment</span>
//                         <span className="font-bold text-lg text-orange-600">$150</span>
//                       </div>
//                     </div>
//                   </div>
  
//                   <div className="bg-white rounded-lg shadow p-6">
//                     <h4 className="text-xl font-bold text-gray-800 mb-4">Payment Methods</h4>
//                     <div className="space-y-4">
//                       <div className="p-4 border rounded-lg flex items-center justify-between">
//                         <div>
//                           <p className="font-semibold text-gray-800">Bank Account</p>
//                           <p className="text-sm text-gray-600">•••• 5678</p>
//                         </div>
//                         <span className="text-green-600 font-semibold">Active</span>
//                       </div>
//                       <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition">
//                         Add Payment Method
//                       </button>
//                       <button className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 rounded-lg font-semibold transition">
//                         Withdraw Earnings
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}
  
//             {/* Profile/Settings Tab */}
//             {activeTab === 'profile' && (
//               <div>
//                 <h3 className="text-2xl font-bold text-gray-800 mb-6">Account Settings</h3>
//                 <div className="bg-white rounded-lg shadow p-8 max-w-2xl">
//                   <div className="mb-8">
//                     <h4 className="text-xl font-bold text-gray-800 mb-6">Profile Information</h4>
//                     <div className="space-y-4">
//                       <input type="text" placeholder="Full Name" defaultValue="John Provider" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" />
//                       <input type="email" placeholder="Email" defaultValue="john@example.com" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" />
//                       <input type="tel" placeholder="Phone" defaultValue="+1 234 567 8900" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" />
//                       <textarea placeholder="About You" defaultValue="Professional service provider with 5+ years of experience" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" rows="4"></textarea>
//                     </div>
//                   </div>
  
//                   <div className="mb-8">
//                     <h4 className="text-xl font-bold text-gray-800 mb-6">Services</h4>
//                     <div className="space-y-3">
//                       <label className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
//                         <input type="checkbox" defaultChecked className="w-5 h-5" />
//                         <span className="text-gray-700">House Cleaning</span>
//                       </label>
//                       <label className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
//                         <input type="checkbox" defaultChecked className="w-5 h-5" />
//                         <span className="text-gray-700">Plumbing Repair</span>
//                       </label>
//                       <label className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
//                         <input type="checkbox" className="w-5 h-5" />
//                         <span className="text-gray-700">Gardening</span>
//                       </label>
//                     </div>
//                   </div>
  
//                   <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition">
//                     Save Changes
//                   </button>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     );
// }


import { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from "react-router-dom";
import { LogOut, Settings, Calendar, History, ChevronDown, User, Menu, X } from 'lucide-react';
import { useAuth } from '../auth/useAuth';

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  
  // Get user from your auth hook
  const { user, logout, loading } = useAuth();

  const handleLogout = () => {
    logout();
    setIsDropdownOpen(false);
    navigate('/login');
  };

  // If still loading, show a minimal navbar
  if (loading) {
    return (
      <header className="fixed top-0 left-0 right-0 bg-white backdrop-blur-lg bg-opacity-95 shadow-xl z-50 border-b border-gray-100 h-16">
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          <Link to="/" className="text-2xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Quick<span className="text-gray-900">Task</span>
          </Link>
        </div>
      </header>
    );
  }

  // If user is logged in as a provider
  if (user && user.role === 'provider') {
    return (
      <header className="fixed top-0 left-0 right-0 bg-white backdrop-blur-lg bg-opacity-95 shadow-xl z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/provider-dashboard" className="text-2xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Quick<span className="text-gray-900">Task</span>
          </Link>

          {/* Provider Navigation */}
          <nav className="hidden lg:flex gap-10 text-sm font-medium">
            <Link to="/provider-dashboard" className="text-gray-700 hover:text-indigo-600 transition">Dashboard</Link>
            <Link to="/provider-bookings" className="text-gray-700 hover:text-indigo-600 transition">Bookings</Link>
            <Link to="/provider-earnings" className="text-gray-700 hover:text-indigo-600 transition">Earnings</Link>
            <Link to="/provider-profile" className="text-gray-700 hover:text-indigo-600 transition">Profile</Link>
          </nav>

          {/* Provider Profile Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-3 hover:bg-gray-100 px-4 py-2 rounded-full transition duration-200"
            >
              <img
                src={user.dp || `https://api.dicebear.com/7.x/avataaars/svg?seed=${user.id || 'default'}`}
                alt={user.businessName || user.name}
                className="w-10 h-10 rounded-full border-2 border-indigo-600 shadow-sm"
              />
              <span className="hidden sm:inline text-sm font-semibold text-gray-900">
                {user.businessName || user.name}
              </span>
              <ChevronDown 
                size={16} 
                className={`transition duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} 
              />
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-3 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
                {/* Header */}
                <div className="p-5 border-b border-gray-100 bg-gradient-to-r from-indigo-50 to-purple-50">
                  <p className="text-sm font-bold text-gray-900">
                    {user.businessName || user.name}
                  </p>
                  <p className="text-xs text-gray-600 mt-1">{user.email}</p>
                  {user.serviceType && <p className="text-xs text-indigo-600 mt-2 font-medium">Service: {user.serviceType}</p>}
                </div>

                {/* Menu Items */}
                <div className="py-3">
                  <Link
                    to="/provider-profile"
                    onClick={() => setIsDropdownOpen(false)}
                    className="flex items-center gap-3 px-5 py-3 text-sm text-gray-700 hover:bg-indigo-50 transition"
                  >
                    <Settings size={16} className="text-indigo-600" />
                    Settings
                  </Link>
                  <Link
                    to="/provider-earnings"
                    onClick={() => setIsDropdownOpen(false)}
                    className="flex items-center gap-3 px-5 py-3 text-sm text-gray-700 hover:bg-indigo-50 transition"
                  >
                    <Calendar size={16} className="text-indigo-600" />
                    Earnings
                  </Link>
                </div>

                {/* Logout */}
                <div className="border-t border-gray-100 p-2">
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 px-5 py-3 text-sm text-red-600 hover:bg-red-50 rounded-lg transition font-medium"
                  >
                    <LogOut size={16} />
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>
    );
  }

  // If user is logged in as a customer
  if (user && user.role === 'user') {
    return (
      <header className="fixed top-0 left-0 right-0 bg-white backdrop-blur-lg bg-opacity-95 shadow-xl z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          
          {/* Logo + Navigation */}
          <div className="flex items-center gap-4">
            <Link to="/" className="text-2xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Quick<span className="text-gray-900">Task</span>
            </Link>

            <nav className="hidden lg:flex gap-10 ml-8 text-sm font-medium">
              <Link to="/" className="text-gray-700 hover:text-indigo-600 transition">Home</Link>
              <a href="#providers" className="text-gray-700 hover:text-indigo-600 transition cursor-pointer">Services</a>
              <Link to="/providers" className="text-gray-700 hover:text-indigo-600 transition">Find Provider</Link>
              <a href="#how" className="text-gray-700 hover:text-indigo-600 transition cursor-pointer">How it works</a>
            </nav>
          </div>

          {/* Customer Actions */}
          <div className="flex items-center gap-4">
            {/* Bookings */}
            <Link
              to="/my-bookings"
              className="hidden lg:inline-flex items-center gap-2 px-5 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-100 transition font-medium"
            >
              <History size={18} />
              My Bookings
            </Link>

            {/* Book Now Button */}
            <Link
              to="/book"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-2 rounded-full shadow-lg shadow-indigo-500/30 transition duration-300 font-semibold text-sm"
            >
              <Calendar size={18} />
              Book Now
            </Link>

            {/* Profile Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-3 hover:bg-gray-100 px-4 py-2 rounded-full transition duration-200"
              >
                <img
                  src={user.dp || `https://api.dicebear.com/7.x/avataaars/svg?seed=${user.id || 'default'}`}
                  alt={user.name}
                  className="w-10 h-10 rounded-full border-2 border-indigo-600 shadow-sm"
                />
                <span className="hidden sm:inline text-sm font-semibold text-gray-900">
                  {user.name}
                </span>
                <ChevronDown 
                  size={16} 
                  className={`transition duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} 
                />
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute right-0 mt-3 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
                  {/* Header */}
                  <div className="p-5 border-b border-gray-100 bg-gradient-to-r from-indigo-50 to-purple-50">
                    <p className="text-sm font-bold text-gray-900">{user.name}</p>
                    <p className="text-xs text-gray-600 mt-1">{user.email}</p>
                  </div>

                  {/* Menu Items */}
                  <div className="py-3">
                    <Link
                      to="/my-bookings"
                      onClick={() => setIsDropdownOpen(false)}
                      className="flex items-center gap-3 px-5 py-3 text-sm text-gray-700 hover:bg-indigo-50 transition"
                    >
                      <History size={16} className="text-indigo-600" />
                      My Bookings
                    </Link>
                    <Link
                      to="/my-profile"
                      onClick={() => setIsDropdownOpen(false)}
                      className="flex items-center gap-3 px-5 py-3 text-sm text-gray-700 hover:bg-indigo-50 transition"
                    >
                      <Settings size={16} className="text-indigo-600" />
                      Profile Settings
                    </Link>
                  </div>

                  {/* Logout */}
                  <div className="border-t border-gray-100 p-2">
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center gap-3 px-5 py-3 text-sm text-red-600 hover:bg-red-50 rounded-lg transition font-medium"
                    >
                      <LogOut size={16} />
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    );
  }

  // Default navbar (not logged in) - shows your login/signup page
  return (
    <header className="fixed top-0 left-0 right-0 bg-white backdrop-blur-lg bg-opacity-95 shadow-xl z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo + Navigation */}
        <div className="flex items-center gap-4">
          <Link to="/" className="text-2xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Quick<span className="text-gray-900">Task</span>
          </Link>

          {/* <nav className="hidden lg:flex gap-10 ml-8 text-sm font-medium">
            <a href="#services" className="text-gray-700 hover:text-indigo-600 transition cursor-pointer">Services</a>
            <a href="#providers" className="text-gray-700 hover:text-indigo-600 transition cursor-pointer">Provider</a>
            <a href="#how" className="text-gray-700 hover:text-indigo-600 transition cursor-pointer">How it works</a>
            <a href="" className="text-gray-700 hover:text-indigo-600 transition cursor-pointer"><NavLink to="/testimonials">testimonials</NavLink></a>
          </nav> */}
          <nav className="hidden lg:flex gap-10 ml-8 text-sm font-medium">
  <NavLink
    to="/Services"
    className="text-gray-700 hover:text-indigo-600 transition cursor-pointer"
  >
    Services
  </NavLink>

  <NavLink
    to="/providers"
    className="text-gray-700 hover:text-indigo-600 transition cursor-pointer"
  >
    Provider
  </NavLink>

  <NavLink
    to="/HowItWorks"
    className="text-gray-700 hover:text-indigo-600 transition cursor-pointer"
  >
    How it works
  </NavLink>

  <NavLink
    to="/testimonials"
    className="text-gray-700 hover:text-indigo-600 transition cursor-pointer"
  >
    Testimonials
  </NavLink>
</nav>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-4">
          {/* Login Button */}
          <Link
            to="/login"
            className="hidden lg:inline-flex items-center gap-2 px-6 py-2 rounded-full text-sm text-indigo-600 hover:bg-indigo-50 border border-indigo-200 transition font-semibold"
          >
            <User size={18} />
            Login
          </Link>

          {/* Book Now Button */}
          <Link 
            to="/login"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-2 rounded-full shadow-lg shadow-indigo-500/30 transition duration-300 font-semibold text-sm"
          >
            <Calendar size={18} />
            Book Now
          </Link>
        </div>
      </div>
    </header>
  );
}