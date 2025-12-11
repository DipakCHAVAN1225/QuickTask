

// import { useAuth } from '../auth/useAuth';
import { useState } from 'react';
import {Bell, DollarSign, Calendar, Clock, CheckCircle, XCircle, LogOut, Menu, X } from 'lucide-react';

export default function ProviderDashboard() {
  // Mock user authentication - replace with your actual useAuth() hook
  

  const [activeTab, setActiveTab] = useState('overview');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [requests, setRequests] = useState([
    { id: 1, user: 'John Smith', service: 'House Cleaning', time: '2:00 PM Today', status: 'pending', rating: 4.5 },
    { id: 2, user: 'Sarah Johnson', service: 'Plumbing Repair', time: '4:30 PM Today', status: 'pending', rating: 4.8 },
    { id: 3, user: 'Mike Davis', service: 'House Cleaning', time: '10:00 AM Tomorrow', status: 'pending', rating: 4.2 },
  ]);

  const [bookings] = useState([
    { id: 101, user: 'Emma Wilson', service: 'Gardening', date: 'Dec 12, 2025', time: '10:00 AM', status: 'confirmed', amount: '$85' },
    { id: 102, user: 'Robert Brown', service: 'House Cleaning', date: 'Dec 13, 2025', time: '2:00 PM', status: 'confirmed', amount: '$120' },
    { id: 103, user: 'Lisa Anderson', service: 'Plumbing', date: 'Dec 15, 2025', time: '9:00 AM', status: 'completed', amount: '$150' },
  ]);

  const handleAccept = (id) => {
    setRequests(requests.filter(req => req.id !== id));
  };

  const handleReject = (id) => {
    setRequests(requests.filter(req => req.id !== id));
  };

  const stats = {
    totalEarnings: '$2,450',
    monthEarnings: '$890',
    completedJobs: 24,
    averageRating: 4.6,
  };

  const user = { name: 'John Provider', role: 'provider' };

  if (!user || user.role !== 'provider') {
    return <div className="p-6 text-center text-red-600 font-bold">Access Denied - Provider Only</div>;
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-gradient-to-b from-blue-600 to-blue-800 text-white transform transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:static`}>
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-8">ServicePro</h1>
          <nav className="space-y-4">
            <button onClick={() => { setActiveTab('overview'); setSidebarOpen(false); }} className={`w-full text-left px-4 py-2 rounded transition ${activeTab === 'overview' ? 'bg-blue-500' : 'hover:bg-blue-700'}`}>
              📊 Overview
            </button>
            <button onClick={() => { setActiveTab('requests'); setSidebarOpen(false); }} className={`w-full text-left px-4 py-2 rounded transition ${activeTab === 'requests' ? 'bg-blue-500' : 'hover:bg-blue-700'}`}>
              📋 Requests
            </button>
            <button onClick={() => { setActiveTab('bookings'); setSidebarOpen(false); }} className={`w-full text-left px-4 py-2 rounded transition ${activeTab === 'bookings' ? 'bg-blue-500' : 'hover:bg-blue-700'}`}>
              📅 Bookings
            </button>
            <button onClick={() => { setActiveTab('earnings'); setSidebarOpen(false); }} className={`w-full text-left px-4 py-2 rounded transition ${activeTab === 'earnings' ? 'bg-blue-500' : 'hover:bg-blue-700'}`}>
              💰 Earnings
            </button>
            <button onClick={() => { setActiveTab('profile'); setSidebarOpen(false); }} className={`w-full text-left px-4 py-2 rounded transition ${activeTab === 'profile' ? 'bg-blue-500' : 'hover:bg-blue-700'}`}>
              ⚙️ Settings
            </button>
          </nav>
        </div>
        <div className="absolute bottom-6 left-6 right-6">
          <button className="w-full bg-red-500 hover:bg-red-600 px-4 py-2 rounded flex items-center justify-center gap-2 transition">
            <LogOut size={18} /> Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-white shadow">
          <div className="flex items-center justify-between p-6">
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="lg:hidden">
              {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <h2 className="text-2xl font-bold text-gray-800">Provider Dashboard</h2>
            <div className="flex items-center gap-4">
              <Bell className="text-gray-600 cursor-pointer hover:text-blue-600" />
              <div className="w-10 h-10 rounded-full bg-gray-300"></div>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-auto p-6">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-8">Welcome, Provider!</h3>
              
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-white rounded-lg shadow p-6 border-l-4 border-blue-500">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-600 text-sm">Total Earnings</p>
                      <p className="text-3xl font-bold text-blue-600 mt-2">{stats.totalEarnings}</p>
                    </div>
                    <DollarSign className="text-blue-500" size={32} />
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow p-6 border-l-4 border-green-500">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-600 text-sm">This Month</p>
                      <p className="text-3xl font-bold text-green-600 mt-2">{stats.monthEarnings}</p>
                    </div>
                    <Calendar className="text-green-500" size={32} />
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow p-6 border-l-4 border-purple-500">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-600 text-sm">Completed Jobs</p>
                      <p className="text-3xl font-bold text-purple-600 mt-2">{stats.completedJobs}</p>
                    </div>
                    <CheckCircle className="text-purple-500" size={32} />
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow p-6 border-l-4 border-yellow-500">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-600 text-sm">Rating</p>
                      <p className="text-3xl font-bold text-yellow-600 mt-2">⭐ {stats.averageRating}</p>
                    </div>
                    <Bell className="text-yellow-500" size={32} />
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-lg shadow p-6 mb-8">
                <h4 className="text-xl font-bold text-gray-800 mb-4">Quick Stats</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <p className="text-gray-600">Pending Requests</p>
                    <p className="text-4xl font-bold text-blue-600 mt-2">{requests.length}</p>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <p className="text-gray-600">Confirmed Bookings</p>
                    <p className="text-4xl font-bold text-green-600 mt-2">2</p>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <p className="text-gray-600">Upcoming Jobs</p>
                    <p className="text-4xl font-bold text-orange-600 mt-2">3</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Requests Tab */}
          {activeTab === 'requests' && (
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Service Requests</h3>
              <div className="space-y-4">
                {requests.length > 0 ? (
                  requests.map(req => (
                    <div key={req.id} className="bg-white rounded-lg shadow p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h4 className="text-lg font-bold text-gray-800">{req.service}</h4>
                          <p className="text-gray-600">From: <span className="font-semibold">{req.user}</span></p>
                          <p className="text-gray-600 flex items-center gap-2 mt-2">
                            <Clock size={16} /> {req.time}
                          </p>
                          <p className="text-yellow-500 mt-2">Rating: ⭐ {req.rating}</p>
                        </div>
                        <div className="flex gap-3">
                          <button onClick={() => handleAccept(req.id)} className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-semibold flex items-center gap-2 transition">
                            <CheckCircle size={18} /> Accept
                          </button>
                          <button onClick={() => handleReject(req.id)} className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg font-semibold flex items-center gap-2 transition">
                            <XCircle size={18} /> Reject
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="bg-white rounded-lg shadow p-12 text-center">
                    <p className="text-gray-500 text-lg">No pending requests</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Bookings Tab */}
          {activeTab === 'bookings' && (
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Your Bookings</h3>
              <div className="bg-white rounded-lg shadow overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-100 border-b">
                    <tr>
                      <th className="px-6 py-4 text-left text-gray-700 font-semibold">Service</th>
                      <th className="px-6 py-4 text-left text-gray-700 font-semibold">Customer</th>
                      <th className="px-6 py-4 text-left text-gray-700 font-semibold">Date & Time</th>
                      <th className="px-6 py-4 text-left text-gray-700 font-semibold">Amount</th>
                      <th className="px-6 py-4 text-left text-gray-700 font-semibold">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {bookings.map(booking => (
                      <tr key={booking.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-semibold text-gray-800">{booking.service}</td>
                        <td className="px-6 py-4 text-gray-700">{booking.user}</td>
                        <td className="px-6 py-4 text-gray-700">{booking.date} at {booking.time}</td>
                        <td className="px-6 py-4 font-semibold text-green-600">{booking.amount}</td>
                        <td className="px-6 py-4">
                          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${booking.status === 'confirmed' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>
                            {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Earnings Tab */}
          {activeTab === 'earnings' && (
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Earnings</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow p-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-4">Earnings Summary</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between py-3 border-b">
                      <span className="text-gray-700">Total Earnings (All Time)</span>
                      <span className="font-bold text-lg text-blue-600">$2,450</span>
                    </div>
                    <div className="flex justify-between py-3 border-b">
                      <span className="text-gray-700">This Month</span>
                      <span className="font-bold text-lg text-green-600">$890</span>
                    </div>
                    <div className="flex justify-between py-3 border-b">
                      <span className="text-gray-700">This Week</span>
                      <span className="font-bold text-lg text-purple-600">$320</span>
                    </div>
                    <div className="flex justify-between py-3">
                      <span className="text-gray-700">Pending Payment</span>
                      <span className="font-bold text-lg text-orange-600">$150</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow p-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-4">Payment Methods</h4>
                  <div className="space-y-4">
                    <div className="p-4 border rounded-lg flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-gray-800">Bank Account</p>
                        <p className="text-sm text-gray-600">•••• 5678</p>
                      </div>
                      <span className="text-green-600 font-semibold">Active</span>
                    </div>
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition">
                      Add Payment Method
                    </button>
                    <button className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 rounded-lg font-semibold transition">
                      Withdraw Earnings
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Profile/Settings Tab */}
          {activeTab === 'profile' && (
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Account Settings</h3>
              <div className="bg-white rounded-lg shadow p-8 max-w-2xl">
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-gray-800 mb-6">Profile Information</h4>
                  <div className="space-y-4">
                    <input type="text" placeholder="Full Name" defaultValue="John Provider" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" />
                    <input type="email" placeholder="Email" defaultValue="john@example.com" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" />
                    <input type="tel" placeholder="Phone" defaultValue="+1 234 567 8900" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" />
                    <textarea placeholder="About You" defaultValue="Professional service provider with 5+ years of experience" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" rows="4"></textarea>
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="text-xl font-bold text-gray-800 mb-6">Services</h4>
                  <div className="space-y-3">
                    <label className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                      <input type="checkbox" defaultChecked className="w-5 h-5" />
                      <span className="text-gray-700">House Cleaning</span>
                    </label>
                    <label className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                      <input type="checkbox" defaultChecked className="w-5 h-5" />
                      <span className="text-gray-700">Plumbing Repair</span>
                    </label>
                    <label className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                      <input type="checkbox" className="w-5 h-5" />
                      <span className="text-gray-700">Gardening</span>
                    </label>
                  </div>
                </div>

                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition">
                  Save Changes
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}