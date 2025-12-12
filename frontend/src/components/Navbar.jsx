
// // import { useState } from 'react';
// // import { Link, useNavigate } from "react-router-dom";
// // import { LogOut, Settings, Heart, History, ChevronDown, User } from 'lucide-react';

// // export default function Navbar() {
// //   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
// //   // Get user info from localStorage (simulated authentication)
// //   const userDataString = localStorage.getItem('user');
// //   const user = userDataString ? JSON.parse(userDataString) : null;
  
// //   const navigate = useNavigate();

// //   const handleLogout = () => {
// //     localStorage.removeItem('user');
// //     setIsDropdownOpen(false);
// //     navigate('/');
// //     window.location.reload();
// //   };

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
// //                 src={user.dp || 'https://api.dicebear.com/7.x/avataaars/svg?seed=default'}
// //                 alt={user.name}
// //                 className="w-9 h-9 rounded-full border-2 border-indigo-600"
// //               />
// //               <span className="hidden sm:inline text-sm font-medium text-gray-900">{user.name}</span>
// //               <ChevronDown size={18} className={`w-4 h-4 transition ${isDropdownOpen ? 'rotate-180' : ''}`} />
// //             </button>

// //             {/* Dropdown Menu */}
// //             {isDropdownOpen && (
// //               <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200">
// //                 {/* Header */}
// //                 <div className="p-4 border-b border-gray-200">
// //                   <p className="text-sm font-semibold text-gray-900">{user.name}</p>
// //                   <p className="text-xs text-gray-500">{user.email}</p>
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

// //   // If user is logged in (customer)
// //   if (user && user.role === 'customer') {
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
// //               <a className="hover:text-indigo-600" href="#services">Services</a>
// //               <Link to="/providers" className="hover:text-indigo-600">Find Provider</Link>
// //               <a className="hover:text-indigo-600" href="#how">How it works</a>
// //             </nav>
// //           </div>

// //           {/* Customer Actions */}
// //           <div className="flex items-center gap-4">
// //             {/* Bookings */}
// //             <Link
// //               to="/my-bookings"
// //               className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-100"
// //             >
// //               <History size={10} />
// //               My Bookings
// //             </Link>

// //             {/* Profile Dropdown */}
// //             <div className="relative">
// //               <button
// //                 onClick={() => setIsDropdownOpen(!isDropdownOpen)}
// //                 className="flex items-center gap-3 hover:bg-gray-100 px-3 py-2 rounded-lg transition"
// //               >
// //                 <img
// //                   src={user.dp || 'https://api.dicebear.com/7.x/avataaars/svg?seed=default'}
// //                   alt={user.name}
// //                   className="w-9 h-9 rounded-full border-2 border-indigo-600"
// //                 />
// //                 <span className="hidden sm:inline text-sm font-medium text-gray-900">{user.name}</span>
// //                 <IconChevronDown className={`w-4 h-4 transition ${isDropdownOpen ? 'rotate-180' : ''}`} />
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
// //             <a className="hover:text-indigo-600" href="#services">Services</a>
// //             <a className="hover:text-indigo-600" href="#providers">Provider</a>
// //             <a className="hover:text-indigo-600" href="#how">How it works</a>
// //             <a className="hover:text-indigo-600" href="#testimonials">Testimonials</a>
// //           </nav>
// //         </div>

// //         {/* Buttons */}
// //         <div className="flex items-center gap-4">
// //           {/* Login Dropdown */}
// //           <div>
// //                <Link
// //                     to="/login"
// //                       className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-100 border border-gray-300"
// //                 >
// //                      <User size={18} />
// //                                  Login
// //                 </Link>
// //             </div>


// //           {/* Book Now */}
// //           <Link 
// //             to="/providers"
// //             className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg shadow text-sm font-medium"
// //           >
// //             Book Now
// //           </Link>
// //         </div>
// //       </div>
// //     </header>
// //   );
// // }








// import { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// // Mock user data - replace with actual API calls
// const mockUsers = {
//   'user@example.com': { 
//     id: 1, 
//     name: 'John Doe', 
//     role: 'user', 
//     dp: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John' 
//   },
//   'provider@example.com': { 
//     id: 2, 
//     name: 'Provider Name', 
//     role: 'provider', 
//     dp: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Provider' 
//   }
// };

// export default function Navbar() {
//   const [user, setUser] = useState(null);
//   const [showDropdown, setShowDropdown] = useState(false);
//   const navigate = useNavigate();

//   // Mock login function - replace with actual API
//   const handleLogin = (email) => {
//     const userData = mockUsers[email];
//     if (userData) {
//       setUser(userData);
//       localStorage.setItem('user', JSON.stringify(userData));
      
//       // Redirect based on user role
//       if (userData.role === 'provider') {
//         navigate('/provider-dashboard');
//       } else {
//         navigate('/user-dashboard');
//       }
//     }
//   };

//   // Logout function
//   const handleLogout = () => {
//     setUser(null);
//     localStorage.removeItem('user');
//     setShowDropdown(false);
//     navigate('/');
//   };

//   // Check if user is logged in on mount
//   React.useEffect(() => {
//     const storedUser = localStorage.getItem('user');
//     if (storedUser) {
//       setUser(JSON.parse(storedUser));
//     }
//   }, []);

//   return (
//     <header className="bg-white shadow-sm sticky top-0 z-30">
//       <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
//         {/* Logo + Navigation */}
//         <div className="flex items-center gap-4">
//           <Link to="/" className="text-xl font-extrabold text-indigo-600">
//             Quick<span className="text-gray-900">Task</span>
//           </Link>

//           <nav className="hidden md:flex gap-6 ml-6 text-sm text-gray-600">
//             <a className="hover:text-indigo-600" href="#services">Services</a>
//             <a className="hover:text-indigo-600" href="#provider">Provider</a>
//             <a className="hover:text-indigo-600" href="#how">How it works</a>
//             <a className="hover:text-indigo-600" href="#testimonials">Testimonials</a>
//           </nav>
//         </div>

//         {/* Buttons */}
//         <div className="flex items-center gap-4">
//           {user ? (
//             // User is logged in - show DP and dropdown
//             <div className="relative">
//               <button
//                 onClick={() => setShowDropdown(!showDropdown)}
//                 className="flex items-center gap-2 hover:opacity-80 transition"
//               >
//                 <img 
//                   src={user.dp} 
//                   alt={user.name}
//                   className="w-10 h-10 rounded-full border-2 border-indigo-600"
//                 />
//                 <span className="hidden md:inline text-sm font-medium text-gray-700">
//                   {user.name}
//                 </span>
//               </button>

//               {/* Dropdown Menu */}
//               {showDropdown && (
//                 <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
//                   <div className="px-4 py-2 border-b border-gray-200">
//                     <p className="text-sm font-medium text-gray-900">{user.name}</p>
//                     <p className="text-xs text-gray-500 capitalize">{user.role}</p>
//                   </div>

//                   <Link
//                     to={user.role === 'provider' ? '/provider-dashboard' : '/user-dashboard'}
//                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                     onClick={() => setShowDropdown(false)}
//                   >
//                     {user.role === 'provider' ? 'Provider Dashboard' : 'Dashboard'}
//                   </Link>

//                   <Link
//                     to="/profile"
//                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                     onClick={() => setShowDropdown(false)}
//                   >
//                     Profile
//                   </Link>

//                   <button
//                     onClick={handleLogout}
//                     className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50"
//                   >
//                     Logout
//                   </button>
//                 </div>
//               )}
//             </div>
//           ) : (
//             // User is not logged in - show Sign In and Book Now buttons
//             <>
//               <button
//                 onClick={() => handleLogin('user@example.com')}
//                 className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-white bg-indigo-600 hover:bg-indigo-700 shadow transition"
//               >
//                 Sign In
//               </button>

//               <button
//                 onClick={() => handleLogin('provider@example.com')}
//                 className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-white bg-blue-600 hover:bg-blue-700 shadow transition"
//               >
//                 Book Now
//               </button>
//             </>
//           )}
//         </div>
//       </div>

//       {/* Demo Info */}
//       {!user && (
//         <div className="bg-blue-50 border-t border-blue-200 px-6 py-2 text-sm text-blue-900">
//           <strong>Demo:</strong> Click "Sign In" for user account or "Book Now" for provider account
//         </div>
//       )}
//     </header>
//   );
// }



import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { IconUser, IconLogout } from '../App'; // adjust icon imports as needed

export default function Navbar() {
  const [user, setUser] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  // Check if user is logged in on component mount
  useEffect(() => {
    const storedUser = localStorage.getItem('authUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('authUser');
    setUser(null);
    setShowDropdown(false);
    navigate('/');
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (showDropdown && !e.target.closest('.dropdown-container')) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [showDropdown]);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo + Navigation */}
        <div className="flex items-center gap-4">
          <div className="text-xl font-extrabold text-indigo-600 cursor-pointer" onClick={() => navigate('/')}>
            Quick<span className="text-gray-900">Task</span>
          </div>

          <nav className="hidden md:flex gap-6 ml-6 text-sm text-gray-600">
            <a className="hover:text-indigo-600 transition" href="#services">Services</a>
            <a className="hover:text-indigo-600 transition" href="#provider">Provider</a>
            <a className="hover:text-indigo-600 transition" href="#how">How it works</a>
            <a className="hover:text-indigo-600 transition" href="#testimonials">Testimonials</a>
          </nav>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-4">
          {user ? (
            // User is logged in - show DP and dropdown
            <div className="relative dropdown-container">
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="flex items-center gap-2 hover:opacity-80 transition"
              >
                <img 
                  src={user.dp} 
                  alt={user.name}
                  className="w-10 h-10 rounded-full border-2 border-indigo-600 object-cover"
                />
                <span className="hidden md:inline text-sm font-medium text-gray-700">
                  {user.name}
                </span>
              </button>

              {/* Dropdown Menu */}
              {showDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                  {/* User Info */}
                  <div className="px-4 py-3 border-b border-gray-200">
                    <p className="text-sm font-semibold text-gray-900">{user.name}</p>
                    <p className="text-xs text-gray-500 capitalize mt-1">
                      {user.role === 'provider' ? '👨‍💼 Service Provider' : '👤 Customer'}
                    </p>
                  </div>

                  {/* Dashboard Link - Based on Role */}
                  <button
                    onClick={() => {
                      if (user.role === 'provider') {
                        navigate('/provider-dashboard');
                      } else {
                        navigate('/user-dashboard');
                      }
                      setShowDropdown(false);
                    }}
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition"
                  >
                    {user.role === 'provider' ? '📊 Provider Dashboard' : '📋 My Dashboard'}
                  </button>

                  {/* Profile Link */}
                  <button
                    onClick={() => {
                      navigate('/profile');
                      setShowDropdown(false);
                    }}
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition"
                  >
                    👤 Profile Settings
                  </button>

                  {/* Logout Button */}
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition border-t border-gray-200"
                  >
                    🚪 Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            // User is not logged in - show Sign In and Book Now buttons
            <>
              <button 
                onClick={() => navigate('/login')}
                className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-white bg-indigo-600 hover:bg-indigo-700 shadow transition"
              >
                <IconUser /> Sign In
              </button>

              <button 
                onClick={() => navigate('/providers')}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-white bg-blue-600 hover:bg-blue-700 shadow transition"
              >
                Book Now
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}