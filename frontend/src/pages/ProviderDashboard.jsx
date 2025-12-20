

// // import { useAuth } from '../auth/useAuth';
// import { useState } from 'react';
// import {Bell, DollarSign, Calendar, Clock, CheckCircle, XCircle, LogOut, Menu, X } from 'lucide-react';

// export default function ProviderDashboard() {
//   // Mock user authentication - replace with your actual useAuth() hook
  

//   const [activeTab, setActiveTab] = useState('overview');
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

//   return (
//     <div className="flex h-screen bg-gray-100">
//       {/* Sidebar */}
//       <div className={`fixed inset-y-0 left-0 z-50 max-h-11/12 mt-24 w-64 bg-gradient-to-b from-blue-600 to-blue-800 text-white transform transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:static`}>
//         <div className="p-6">
//           <h1 className="text-2xl font-bold mb-8">ServicePro</h1>
//           <nav className="space-y-4">
//             <button onClick={() => { setActiveTab('overview'); setSidebarOpen(false); }} className={`w-full text-left px-4 py-2 rounded transition ${activeTab === 'overview' ? 'bg-blue-500' : 'hover:bg-blue-700'}`}>
//               📊 Overview
//             </button>
//             <button onClick={() => { setActiveTab('requests'); setSidebarOpen(false); }} className={`w-full text-left px-4 py-2 rounded transition ${activeTab === 'requests' ? 'bg-blue-500' : 'hover:bg-blue-700'}`}>
//               📋 Requests
//             </button>
//             <button onClick={() => { setActiveTab('bookings'); setSidebarOpen(false); }} className={`w-full text-left px-4 py-2 rounded transition ${activeTab === 'bookings' ? 'bg-blue-500' : 'hover:bg-blue-700'}`}>
//               📅 Bookings
//             </button>
//             <button onClick={() => { setActiveTab('earnings'); setSidebarOpen(false); }} className={`w-full text-left px-4 py-2 rounded transition ${activeTab === 'earnings' ? 'bg-blue-500' : 'hover:bg-blue-700'}`}>
//               💰 Earnings
//             </button>
//             <button onClick={() => { setActiveTab('profile'); setSidebarOpen(false); }} className={`w-full text-left px-4 py-2 rounded transition ${activeTab === 'profile' ? 'bg-blue-500' : 'hover:bg-blue-700'}`}>
//               ⚙️ Settings
//             </button>
//           </nav>
//         </div>
//         <div className="absolute bottom-6 left-6 right-6">
//           <button className="w-full bg-red-500 hover:bg-red-600 px-4 py-2 rounded flex items-center justify-center gap-2 transition">
//             <LogOut size={18} /> Logout
//           </button>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col">
//         {/* Header */}
//         <div className="bg-white shadow">
//           <div className="flex items-center justify-between p-6">
//             <button onClick={() => setSidebarOpen(!sidebarOpen)} className="lg:hidden">
//               {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//             <h2 className="text-2xl font-bold text-gray-800">Provider Dashboard</h2>
//             <div className="flex items-center gap-4">
//               <Bell className="text-gray-600 cursor-pointer hover:text-blue-600" />
//               <div className="w-10 h-10 rounded-full bg-gray-300"></div>
//             </div>
//           </div>
//         </div>

//         {/* Content Area */}
//         <div className="flex-1 overflow-auto p-6">
//           {/* Overview Tab */}
//           {activeTab === 'overview' && (
//             <div>
//               <h3 className="text-3xl font-bold text-gray-800 mb-8">Welcome, Provider!</h3>
              
//               {/* Stats Cards */}
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//                 <div className="bg-white rounded-lg shadow p-6 border-l-4 border-blue-500">
//                   <div className="flex items-center justify-between">
//                     <div>
//                       <p className="text-gray-600 text-sm">Total Earnings</p>
//                       <p className="text-3xl font-bold text-blue-600 mt-2">{stats.totalEarnings}</p>
//                     </div>
//                     <DollarSign className="text-blue-500" size={32} />
//                   </div>
//                 </div>

//                 <div className="bg-white rounded-lg shadow p-6 border-l-4 border-green-500">
//                   <div className="flex items-center justify-between">
//                     <div>
//                       <p className="text-gray-600 text-sm">This Month</p>
//                       <p className="text-3xl font-bold text-green-600 mt-2">{stats.monthEarnings}</p>
//                     </div>
//                     <Calendar className="text-green-500" size={32} />
//                   </div>
//                 </div>

//                 <div className="bg-white rounded-lg shadow p-6 border-l-4 border-purple-500">
//                   <div className="flex items-center justify-between">
//                     <div>
//                       <p className="text-gray-600 text-sm">Completed Jobs</p>
//                       <p className="text-3xl font-bold text-purple-600 mt-2">{stats.completedJobs}</p>
//                     </div>
//                     <CheckCircle className="text-purple-500" size={32} />
//                   </div>
//                 </div>

//                 <div className="bg-white rounded-lg shadow p-6 border-l-4 border-yellow-500">
//                   <div className="flex items-center justify-between">
//                     <div>
//                       <p className="text-gray-600 text-sm">Rating</p>
//                       <p className="text-3xl font-bold text-yellow-600 mt-2">⭐ {stats.averageRating}</p>
//                     </div>
//                     <Bell className="text-yellow-500" size={32} />
//                   </div>
//                 </div>
//               </div>

//               {/* Quick Actions */}
//               <div className="bg-white rounded-lg shadow p-6 mb-8">
//                 <h4 className="text-xl font-bold text-gray-800 mb-4">Quick Stats</h4>
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                   <div className="text-center p-4 bg-blue-50 rounded-lg">
//                     <p className="text-gray-600">Pending Requests</p>
//                     <p className="text-4xl font-bold text-blue-600 mt-2">{requests.length}</p>
//                   </div>
//                   <div className="text-center p-4 bg-green-50 rounded-lg">
//                     <p className="text-gray-600">Confirmed Bookings</p>
//                     <p className="text-4xl font-bold text-green-600 mt-2">2</p>
//                   </div>
//                   <div className="text-center p-4 bg-orange-50 rounded-lg">
//                     <p className="text-gray-600">Upcoming Jobs</p>
//                     <p className="text-4xl font-bold text-orange-600 mt-2">3</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* Requests Tab */}
//           {activeTab === 'requests' && (
//             <div>
//               <h3 className="text-2xl font-bold text-gray-800 mb-6">Service Requests</h3>
//               <div className="space-y-4">
//                 {requests.length > 0 ? (
//                   requests.map(req => (
//                     <div key={req.id} className="bg-white rounded-lg shadow p-6">
//                       <div className="flex items-start justify-between mb-4">
//                         <div>
//                           <h4 className="text-lg font-bold text-gray-800">{req.service}</h4>
//                           <p className="text-gray-600">From: <span className="font-semibold">{req.user}</span></p>
//                           <p className="text-gray-600 flex items-center gap-2 mt-2">
//                             <Clock size={16} /> {req.time}
//                           </p>
//                           <p className="text-yellow-500 mt-2">Rating: ⭐ {req.rating}</p>
//                         </div>
//                         <div className="flex gap-3">
//                           <button onClick={() => handleAccept(req.id)} className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-semibold flex items-center gap-2 transition">
//                             <CheckCircle size={18} /> Accept
//                           </button>
//                           <button onClick={() => handleReject(req.id)} className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg font-semibold flex items-center gap-2 transition">
//                             <XCircle size={18} /> Reject
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   ))
//                 ) : (
//                   <div className="bg-white rounded-lg shadow p-12 text-center">
//                     <p className="text-gray-500 text-lg">No pending requests</p>
//                   </div>
//                 )}
//               </div>
//             </div>
//           )}

//           {/* Bookings Tab */}
//           {activeTab === 'bookings' && (
//             <div>
//               <h3 className="text-2xl font-bold text-gray-800 mb-6">Your Bookings</h3>
//               <div className="bg-white rounded-lg shadow overflow-hidden">
//                 <table className="w-full">
//                   <thead className="bg-gray-100 border-b">
//                     <tr>
//                       <th className="px-6 py-4 text-left text-gray-700 font-semibold">Service</th>
//                       <th className="px-6 py-4 text-left text-gray-700 font-semibold">Customer</th>
//                       <th className="px-6 py-4 text-left text-gray-700 font-semibold">Date & Time</th>
//                       <th className="px-6 py-4 text-left text-gray-700 font-semibold">Amount</th>
//                       <th className="px-6 py-4 text-left text-gray-700 font-semibold">Status</th>
//                     </tr>
//                   </thead>
//                   <tbody className="divide-y">
//                     {bookings.map(booking => (
//                       <tr key={booking.id} className="hover:bg-gray-50">
//                         <td className="px-6 py-4 font-semibold text-gray-800">{booking.service}</td>
//                         <td className="px-6 py-4 text-gray-700">{booking.user}</td>
//                         <td className="px-6 py-4 text-gray-700">{booking.date} at {booking.time}</td>
//                         <td className="px-6 py-4 font-semibold text-green-600">{booking.amount}</td>
//                         <td className="px-6 py-4">
//                           <span className={`px-3 py-1 rounded-full text-sm font-semibold ${booking.status === 'confirmed' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>
//                             {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
//                           </span>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           )}

//           {/* Earnings Tab */}
//           {activeTab === 'earnings' && (
//             <div>
//               <h3 className="text-2xl font-bold text-gray-800 mb-6">Earnings</h3>
//               <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//                 <div className="bg-white rounded-lg shadow p-6">
//                   <h4 className="text-xl font-bold text-gray-800 mb-4">Earnings Summary</h4>
//                   <div className="space-y-4">
//                     <div className="flex justify-between py-3 border-b">
//                       <span className="text-gray-700">Total Earnings (All Time)</span>
//                       <span className="font-bold text-lg text-blue-600">$2,450</span>
//                     </div>
//                     <div className="flex justify-between py-3 border-b">
//                       <span className="text-gray-700">This Month</span>
//                       <span className="font-bold text-lg text-green-600">$890</span>
//                     </div>
//                     <div className="flex justify-between py-3 border-b">
//                       <span className="text-gray-700">This Week</span>
//                       <span className="font-bold text-lg text-purple-600">$320</span>
//                     </div>
//                     <div className="flex justify-between py-3">
//                       <span className="text-gray-700">Pending Payment</span>
//                       <span className="font-bold text-lg text-orange-600">$150</span>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="bg-white rounded-lg shadow p-6">
//                   <h4 className="text-xl font-bold text-gray-800 mb-4">Payment Methods</h4>
//                   <div className="space-y-4">
//                     <div className="p-4 border rounded-lg flex items-center justify-between">
//                       <div>
//                         <p className="font-semibold text-gray-800">Bank Account</p>
//                         <p className="text-sm text-gray-600">•••• 5678</p>
//                       </div>
//                       <span className="text-green-600 font-semibold">Active</span>
//                     </div>
//                     <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition">
//                       Add Payment Method
//                     </button>
//                     <button className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 rounded-lg font-semibold transition">
//                       Withdraw Earnings
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* Profile/Settings Tab */}
//           {activeTab === 'profile' && (
//             <div>
//               <h3 className="text-2xl font-bold text-gray-800 mb-6">Account Settings</h3>
//               <div className="bg-white rounded-lg shadow p-8 max-w-2xl">
//                 <div className="mb-8">
//                   <h4 className="text-xl font-bold text-gray-800 mb-6">Profile Information</h4>
//                   <div className="space-y-4">
//                     <input type="text" placeholder="Full Name" defaultValue="John Provider" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" />
//                     <input type="email" placeholder="Email" defaultValue="john@example.com" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" />
//                     <input type="tel" placeholder="Phone" defaultValue="+1 234 567 8900" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" />
//                     <textarea placeholder="About You" defaultValue="Professional service provider with 5+ years of experience" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" rows="4"></textarea>
//                   </div>
//                 </div>

//                 <div className="mb-8">
//                   <h4 className="text-xl font-bold text-gray-800 mb-6">Services</h4>
//                   <div className="space-y-3">
//                     <label className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
//                       <input type="checkbox" defaultChecked className="w-5 h-5" />
//                       <span className="text-gray-700">House Cleaning</span>
//                     </label>
//                     <label className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
//                       <input type="checkbox" defaultChecked className="w-5 h-5" />
//                       <span className="text-gray-700">Plumbing Repair</span>
//                     </label>
//                     <label className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
//                       <input type="checkbox" className="w-5 h-5" />
//                       <span className="text-gray-700">Gardening</span>
//                     </label>
//                   </div>
//                 </div>

//                 <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition">
//                   Save Changes
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }
























import { useState, useEffect } from 'react';
import { Bell, DollarSign, Calendar, Clock, CheckCircle, XCircle, LogOut, Menu, X, TrendingUp, Star, Award, Users } from 'lucide-react';

export default function ProviderDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [requests, setRequests] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    totalEarnings: '$0',
    monthEarnings: '$0',
    completedJobs: 0,
    averageRating: 0,
    pendingRequests: 0
  });

  useEffect(() => {
    fetchProviderData();
  }, []);

  const fetchProviderData = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem('token');
      
      // Fetch pending requests
      const requestsRes = await fetch('http://localhost:3000/api/bookings/provider/requests', {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const requestsData = await requestsRes.json();
      const fetchedRequests = requestsData.requests || [];
      setRequests(fetchedRequests);

      // Fetch confirmed bookings
      const bookingsRes = await fetch('http://localhost:3000/api/bookings/provider/bookings', {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const bookingsData = await bookingsRes.json();
      const fetchedBookings = bookingsData.bookings || [];
      setBookings(fetchedBookings);

      // Calculate dynamic stats from fetched data
      const completedBookings = fetchedBookings.filter(b => b.status === 'completed');
      const acceptedBookings = fetchedBookings.filter(b => b.status === 'accepted');
      
      // Total earnings from completed bookings
      const totalEarnings = completedBookings.reduce((sum, booking) => sum + (booking.amount || 0), 0);
      
      // This month's earnings
      const now = new Date();
      const firstDayOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
      const monthBookings = completedBookings.filter(b => {
        const completedDate = new Date(b.completedAt || b.createdAt);
        return completedDate >= firstDayOfMonth;
      });
      const monthEarnings = monthBookings.reduce((sum, booking) => sum + (booking.amount || 0), 0);

      // Calculate average rating (if you have ratings in bookings)
      const ratedBookings = completedBookings.filter(b => b.rating);
      const averageRating = ratedBookings.length > 0
        ? (ratedBookings.reduce((sum, b) => sum + b.rating, 0) / ratedBookings.length).toFixed(1)
        : 0;

      // Update stats with real data
      setStats({
        totalEarnings: `${totalEarnings}`,
        monthEarnings: `${monthEarnings}`,
        completedJobs: completedBookings.length,
        averageRating: averageRating || 4.6, // Default to 4.6 if no ratings yet
        pendingRequests: fetchedRequests.length
      });

    } catch (error) {
      console.error('Error fetching provider data:', error);
      // Set default stats on error
      setStats({
        totalEarnings: '$0',
        monthEarnings: '$0',
        completedJobs: 0,
        averageRating: 0,
        pendingRequests: 0
      });
    } finally {
      setLoading(false);
    }
  };

  const handleAccept = async (bookingId) => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`http://localhost:3000/api/bookings/${bookingId}/accept`, {
        method: 'PUT',
        headers: { 
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        const acceptedRequest = requests.find(r => r._id === bookingId);
        const updatedRequests = requests.filter(req => req._id !== bookingId);
        setRequests(updatedRequests);
        
        if (acceptedRequest) {
          const updatedBookings = [...bookings, { ...acceptedRequest, status: 'accepted' }];
          setBookings(updatedBookings);
          
          // Update stats dynamically when accepting a booking
          setStats(prevStats => ({
            ...prevStats,
            pendingRequests: updatedRequests.length
          }));
        }
        showNotification('Request accepted successfully!', 'success');
      }
    } catch (error) {
      console.error('Error accepting request:', error);
      showNotification('Failed to accept request', 'error');
    }
  };

  const handleReject = async (bookingId) => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`http://localhost:3000/api/bookings/${bookingId}/reject`, {
        method: 'PUT',
        headers: { 
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        const updatedRequests = requests.filter(req => req._id !== bookingId);
        setRequests(updatedRequests);
        
        // Update pending requests count
        setStats(prevStats => ({
          ...prevStats,
          pendingRequests: updatedRequests.length
        }));
        
        showNotification('Request rejected', 'info');
      }
    } catch (error) {
      console.error('Error rejecting request:', error);
      showNotification('Failed to reject request', 'error');
    }
  };

  const showNotification = (message, type) => {
    alert(message);
  };

  const handleCompleteBooking = async (bookingId) => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`http://localhost:3000/api/bookings/${bookingId}/complete`, {
        method: 'PUT',
        headers: { 
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        // Update booking status to completed
        const updatedBookings = bookings.map(booking => 
          booking._id === bookingId 
            ? { ...booking, status: 'completed', completedAt: new Date() }
            : booking
        );
        setBookings(updatedBookings);
        
        // Recalculate stats dynamically
        const completedBookings = updatedBookings.filter(b => b.status === 'completed');
        const totalEarnings = completedBookings.reduce((sum, b) => sum + (b.amount || 0), 0);
        
        const now = new Date();
        const firstDayOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
        const monthBookings = completedBookings.filter(b => {
          const completedDate = new Date(b.completedAt || b.createdAt);
          return completedDate >= firstDayOfMonth;
        });
        const monthEarnings = monthBookings.reduce((sum, b) => sum + (b.amount || 0), 0);
        
        setStats(prevStats => ({
          ...prevStats,
          totalEarnings: `${totalEarnings}`,
          monthEarnings: `${monthEarnings}`,
          completedJobs: completedBookings.length
        }));
        
        showNotification('Booking marked as completed! Earnings updated.', 'success');
      }
    } catch (error) {
      console.error('Error completing booking:', error);
      showNotification('Failed to complete booking', 'error');
    }
  };

  const user = { name: 'John Provider', role: 'provider' };

  if (!user || user.role !== 'provider') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-red-100">
        <div className="text-center p-8 bg-white rounded-2xl shadow-xl">
          <XCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Access Denied</h2>
          <p className="text-gray-600">Provider access only</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className={`fixed inset-y-0 left-0 z-50 w-72 bg-gradient-to-b from-indigo-600 via-indigo-700 to-indigo-900 text-white transform transition-all duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:static shadow-2xl`}>
        <div className="p-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-lg flex items-center justify-center">
              <Award className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-2xl font-bold">ServicePro</h1>
              <p className="text-xs text-indigo-200">Provider Dashboard</p>
            </div>
          </div>

          <nav className="space-y-2">
            {[
              { id: 'overview', icon: '📊', label: 'Overview' },
              { id: 'requests', icon: '📋', label: 'Requests', badge: requests.length },
              { id: 'bookings', icon: '📅', label: 'Bookings' },
              { id: 'earnings', icon: '💰', label: 'Earnings' },
              { id: 'profile', icon: '⚙️', label: 'Settings' }
            ].map(item => (
              <button
                key={item.id}
                onClick={() => { setActiveTab(item.id); setSidebarOpen(false); }}
                className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-200 flex items-center justify-between ${
                  activeTab === item.id 
                    ? 'bg-white text-indigo-700 shadow-lg font-semibold' 
                    : 'hover:bg-white/10 text-white'
                }`}
              >
                <span className="flex items-center gap-3">
                  <span className="text-xl">{item.icon}</span>
                  <span>{item.label}</span>
                </span>
                {item.badge > 0 && (
                  <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                    {item.badge}
                  </span>
                )}
              </button>
            ))}
          </nav>
        </div>

        <div className="absolute bottom-6 left-6 right-6">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 mb-4">
            <div className="flex items-center gap-3 mb-2">
              <img 
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=provider" 
                className="w-12 h-12 rounded-full border-2 border-white"
                alt="Provider"
              />
              <div>
                <p className="font-semibold">{user.name}</p>
                <p className="text-xs text-indigo-200">Professional Provider</p>
              </div>
            </div>
          </div>
          <button className="w-full bg-red-500 hover:bg-red-600 px-4 py-3 rounded-xl flex items-center justify-center gap-2 transition-all duration-200 font-semibold shadow-lg">
            <LogOut size={18} /> Logout
          </button>
        </div>
      </div>

      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="bg-white shadow-sm border-b border-gray-200">
          <div className="flex items-center justify-between p-6">
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setSidebarOpen(!sidebarOpen)} 
                className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition"
              >
                {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">
                  {activeTab === 'overview' && '📊 Dashboard Overview'}
                  {activeTab === 'requests' && '📋 Service Requests'}
                  {activeTab === 'bookings' && '📅 Your Bookings'}
                  {activeTab === 'earnings' && '💰 Earnings'}
                  {activeTab === 'profile' && '⚙️ Settings'}
                </h2>
                <p className="text-sm text-gray-500">Manage your services efficiently</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="relative p-2 hover:bg-gray-100 rounded-lg transition">
                <Bell className="text-gray-600" size={24} />
                {requests.length > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold">
                    {requests.length}
                  </span>
                )}
              </button>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500"></div>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-auto p-6">
          {loading ? (
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-indigo-600 mx-auto"></div>
                <p className="mt-4 text-gray-600 font-medium">Loading your dashboard...</p>
              </div>
            </div>
          ) : (
            <>
              {activeTab === 'overview' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-3xl font-bold text-gray-800">Welcome back, Provider!</h3>
                    <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition font-medium">
                      View Analytics
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-lg p-6 text-white transform hover:scale-105 transition-all duration-200">
                      <div className="flex items-center justify-between mb-4">
                        <DollarSign size={32} className="opacity-80" />
                        <TrendingUp size={20} />
                      </div>
                      <p className="text-sm opacity-90 font-medium">Total Earnings</p>
                      <p className="text-4xl font-bold mt-2">{stats.totalEarnings}</p>
                    </div>

                    <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl shadow-lg p-6 text-white transform hover:scale-105 transition-all duration-200">
                      <div className="flex items-center justify-between mb-4">
                        <Calendar size={32} className="opacity-80" />
                        <TrendingUp size={20} />
                      </div>
                      <p className="text-sm opacity-90 font-medium">This Month</p>
                      <p className="text-4xl font-bold mt-2">{stats.monthEarnings}</p>
                    </div>

                    <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl shadow-lg p-6 text-white transform hover:scale-105 transition-all duration-200">
                      <div className="flex items-center justify-between mb-4">
                        <CheckCircle size={32} className="opacity-80" />
                        <TrendingUp size={20} />
                      </div>
                      <p className="text-sm opacity-90 font-medium">Completed Jobs</p>
                      <p className="text-4xl font-bold mt-2">{stats.completedJobs}</p>
                    </div>

                    <div className="bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl shadow-lg p-6 text-white transform hover:scale-105 transition-all duration-200">
                      <div className="flex items-center justify-between mb-4">
                        <Star size={32} className="opacity-80" />
                        <Award size={20} />
                      </div>
                      <p className="text-sm opacity-90 font-medium">Average Rating</p>
                      <p className="text-4xl font-bold mt-2">⭐ {stats.averageRating}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white rounded-2xl shadow-md p-6 border-l-4 border-blue-500">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-gray-600 font-medium">Pending Requests</p>
                          <p className="text-5xl font-bold text-blue-600 mt-2">{requests.length}</p>
                        </div>
                        <Users className="text-blue-500" size={48} />
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-2xl shadow-md p-6 border-l-4 border-green-500">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-gray-600 font-medium">Confirmed Bookings</p>
                          <p className="text-5xl font-bold text-green-600 mt-2">{bookings.filter(b => b.status === 'accepted').length}</p>
                        </div>
                        <CheckCircle className="text-green-500" size={48} />
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-2xl shadow-md p-6 border-l-4 border-orange-500">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-gray-600 font-medium">Upcoming Jobs</p>
                          <p className="text-5xl font-bold text-orange-600 mt-2">{bookings.length}</p>
                        </div>
                        <Calendar className="text-orange-500" size={48} />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'requests' && (
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800">Service Requests</h3>
                      <p className="text-gray-600 mt-1">Review and respond to booking requests</p>
                    </div>
                    <div className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg font-semibold">
                      {requests.length} Pending
                    </div>
                  </div>

                  <div className="space-y-4">
                    {requests.length > 0 ? (
                      requests.map(req => (
                        <div key={req._id} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-200 p-6 border border-gray-100">
                          <div className="flex items-start justify-between">
                            <div className="flex gap-4 flex-1">
                              <img 
                                src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${req.userId}`}
                                className="w-16 h-16 rounded-full border-2 border-indigo-200"
                                alt="User"
                              />
                              <div className="flex-1">
                                <div className="flex items-start justify-between mb-3">
                                  <div>
                                    <h4 className="text-xl font-bold text-gray-800">{req.serviceType}</h4>
                                    <p className="text-gray-600 mt-1">
                                      Requested by: <span className="font-semibold text-indigo-600">{req.userName}</span>
                                    </p>
                                  </div>
                                  <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-semibold">
                                    Pending
                                  </span>
                                </div>
                                
                                <div className="grid grid-cols-2 gap-4 mb-4">
                                  <div className="flex items-center gap-2 text-gray-700">
                                    <Clock size={18} className="text-indigo-500" />
                                    <span className="font-medium">{new Date(req.scheduledTime).toLocaleString()}</span>
                                  </div>
                                  <div className="flex items-center gap-2 text-gray-700">
                                    <DollarSign size={18} className="text-green-500" />
                                    <span className="font-bold text-green-600">${req.amount}</span>
                                  </div>
                                </div>

                                {req.description && (
                                  <div className="bg-gray-50 rounded-lg p-3 mb-4">
                                    <p className="text-sm text-gray-700"><strong>Details:</strong> {req.description}</p>
                                  </div>
                                )}

                                <div className="flex gap-3">
                                  <button 
                                    onClick={() => handleAccept(req._id)} 
                                    className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-200 shadow-md hover:shadow-lg"
                                  >
                                    <CheckCircle size={20} /> Accept Request
                                  </button>
                                  <button 
                                    onClick={() => handleReject(req._id)} 
                                    className="flex-1 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-6 py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-200 shadow-md hover:shadow-lg"
                                  >
                                    <XCircle size={20} /> Reject
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="bg-white rounded-2xl shadow-md p-16 text-center">
                        <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Bell size={48} className="text-gray-400" />
                        </div>
                        <h4 className="text-2xl font-bold text-gray-800 mb-2">No Pending Requests</h4>
                        <p className="text-gray-500">You are all caught up! New requests will appear here.</p>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {activeTab === 'bookings' && (
                <div>
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-800">Your Bookings</h3>
                    <p className="text-gray-600 mt-1">Manage your confirmed appointments</p>
                  </div>

                  <div className="bg-white rounded-2xl shadow-md overflow-hidden">
                    <table className="w-full">
                      <thead className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white">
                        <tr>
                          <th className="px-6 py-4 text-left font-bold">Service</th>
                          <th className="px-6 py-4 text-left font-bold">Customer</th>
                          <th className="px-6 py-4 text-left font-bold">Date & Time</th>
                          <th className="px-6 py-4 text-left font-bold">Amount</th>
                          <th className="px-6 py-4 text-left font-bold">Status</th>
                          <th className="px-6 py-4 text-left font-bold">Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {bookings.map(booking => (
                          <tr key={booking._id} className="hover:bg-indigo-50 transition-colors">
                            <td className="px-6 py-4 font-bold text-gray-800">{booking.serviceType}</td>
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-2">
                                <img 
                                  src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${booking.userId}`}
                                  className="w-8 h-8 rounded-full"
                                  alt="User"
                                />
                                <span className="text-gray-700 font-medium">{booking.userName}</span>
                              </div>
                            </td>
                            <td className="px-6 py-4 text-gray-700 font-medium">
                              {new Date(booking.scheduledTime).toLocaleString()}
                            </td>
                            <td className="px-6 py-4 font-bold text-green-600 text-lg">
                              ${booking.amount}
                            </td>
                            <td className="px-6 py-4">
                              <span className={`px-4 py-2 rounded-full text-sm font-bold ${
                                booking.status === 'accepted' 
                                  ? 'bg-green-100 text-green-700' 
                                  : booking.status === 'completed'
                                  ? 'bg-blue-100 text-blue-700'
                                  : 'bg-gray-100 text-gray-700'
                              }`}>
                                {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                              </span>
                            </td>
                            <td className="px-6 py-4">
                              {booking.status === 'accepted' && (
                                <button
                                  onClick={() => handleCompleteBooking(booking._id)}
                                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-semibold transition text-sm flex items-center gap-2"
                                >
                                  <CheckCircle size={16} />
                                  Complete
                                </button>
                              )}
                              {booking.status === 'completed' && (
                                <span className="text-green-600 font-semibold text-sm flex items-center gap-2">
                                  <CheckCircle size={16} />
                                  Finished
                                </span>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>

                    {bookings.length === 0 && (
                      <div className="p-16 text-center">
                        <Calendar size={64} className="text-gray-300 mx-auto mb-4" />
                        <p className="text-gray-500 text-lg">No bookings yet</p>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {activeTab === 'earnings' && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Earnings Dashboard</h3>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl shadow-xl p-8 text-white">
                      <h4 className="text-2xl font-bold mb-6">Earnings Summary</h4>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center py-4 border-b border-white/20">
                          <span className="text-lg opacity-90">Total Earnings</span>
                          <span className="font-bold text-3xl">{stats.totalEarnings}</span>
                        </div>
                        <div className="flex justify-between items-center py-4 border-b border-white/20">
                          <span className="text-lg opacity-90">This Month</span>
                          <span className="font-bold text-3xl">{stats.monthEarnings}</span>
                        </div>
                        <div className="flex justify-between items-center py-4 border-b border-white/20">
                          <span className="text-lg opacity-90">This Week</span>
                          <span className="font-bold text-3xl">$320</span>
                        </div>
                        <div className="flex justify-between items-center py-4">
                          <span className="text-lg opacity-90">Pending Payment</span>
                          <span className="font-bold text-3xl text-yellow-300">$150</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-xl p-8">
                      <h4 className="text-2xl font-bold text-gray-800 mb-6">Payment Methods</h4>
                      <div className="space-y-4">
                        <div className="p-5 border-2 border-indigo-200 rounded-xl flex items-center justify-between bg-indigo-50">
                          <div>
                            <p className="font-bold text-gray-800 text-lg">Bank Account</p>
                            <p className="text-sm text-gray-600 mt-1">•••• •••• •••• 5678</p>
                          </div>
                          <span className="px-4 py-2 bg-green-500 text-white rounded-lg font-bold">Active</span>
                        </div>
                        <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-4 rounded-xl font-bold transition-all duration-200 shadow-md hover:shadow-lg">
                          + Add Payment Method
                        </button>
                        <button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-4 rounded-xl font-bold transition-all duration-200 shadow-md hover:shadow-lg">
                          💸 Withdraw Earnings
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'profile' && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Account Settings</h3>
                  <div className="bg-white rounded-2xl shadow-xl p-8 max-w-3xl">
                    <div className="mb-8">
                      <h4 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                        <Users size={24} className="text-indigo-600" />
                        Profile Information
                      </h4>
                      <div className="space-y-5">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                          <input 
                            type="text" 
                            defaultValue="John Provider" 
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-indigo-500 transition"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                          <input 
                            type="email" 
                            defaultValue="john@example.com" 
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-indigo-500 transition"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
                          <input 
                            type="tel" 
                            defaultValue="+1 234 567 8900" 
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-indigo-500 transition"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">About You</label>
                          <textarea 
                            defaultValue="Professional service provider with 5+ years of experience" 
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-indigo-500 transition" 
                            rows="4"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="mb-8">
                      <h4 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                        <Award size={24} className="text-indigo-600" />
                        Services Offered
                      </h4>
                      <div className="space-y-3">
                        {['House Cleaning', 'Plumbing Repair', 'Gardening', 'Electrical Work'].map(service => (
                          <label key={service} className="flex items-center gap-3 p-4 border-2 border-gray-200 rounded-xl cursor-pointer hover:bg-indigo-50 hover:border-indigo-300 transition">
                            <input type="checkbox" defaultChecked={['House Cleaning', 'Plumbing Repair'].includes(service)} className="w-6 h-6 text-indigo-600" />
                            <span className="text-gray-800 font-medium text-lg">{service}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 shadow-lg hover:shadow-xl">
                      Save Changes
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}