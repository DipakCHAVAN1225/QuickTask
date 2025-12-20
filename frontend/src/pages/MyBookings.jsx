import React, { useState } from 'react';
import { Calendar, DollarSign, User, Settings, Menu, X, CheckCircle, Clock, XCircle } from 'lucide-react';

export default function ProviderDashboard() {
  const [activeTab, setActiveTab] = useState('bookings');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Mock data - replace with API calls
  const [bookings] = useState([
    { id: 1, customer: 'John Doe', service: 'AC Repair', date: '2024-12-15', time: '10:00 AM', status: 'pending', amount: 1500 },
    { id: 2, customer: 'Sarah Smith', service: 'Plumbing', date: '2024-12-14', time: '2:00 PM', status: 'completed', amount: 800 },
    { id: 3, customer: 'Mike Johnson', service: 'Electrical Work', date: '2024-12-16', time: '11:30 AM', status: 'confirmed', amount: 1200 },
  ]);

  const [earnings] = useState({
    today: 800,
    thisWeek: 4500,
    thisMonth: 18000,
    total: 125000,
  });

  const [profile, setProfile] = useState({
    name: 'Provider Name',
    email: 'provider@example.com',
    phone: '+91 98765 43210',
    services: ['AC Repair', 'Plumbing', 'Electrical Work'],
    availability: 'Mon-Sat, 9AM-6PM',
  });

  const getStatusColor = (status) => {
    switch(status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'confirmed': return 'bg-blue-100 text-blue-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status) => {
    switch(status) {
      case 'completed': return <CheckCircle className="w-4 h-4" />;
      case 'confirmed': return <CheckCircle className="w-4 h-4" />;
      case 'pending': return <Clock className="w-4 h-4" />;
      case 'cancelled': return <XCircle className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  const renderBookings = () => (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-800">My Bookings</h2>
      <div className="grid gap-4">
        {bookings.map(booking => (
          <div key={booking.id} className="bg-white rounded-lg shadow p-6 border border-gray-200">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-semibold text-lg text-gray-800">{booking.customer}</h3>
                <p className="text-gray-600">{booking.service}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1 ${getStatusColor(booking.status)}`}>
                {getStatusIcon(booking.status)}
                {booking.status}
              </span>
            </div>
            <div className="flex justify-between items-center text-sm text-gray-600">
              <div className="flex gap-4">
                <span>📅 {booking.date}</span>
                <span>🕐 {booking.time}</span>
              </div>
              <span className="font-semibold text-gray-800">₹{booking.amount}</span>
            </div>
            {booking.status === 'pending' && (
              <div className="mt-4 flex gap-2">
                <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 text-sm">
                  Accept
                </button>
                <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 text-sm">
                  Decline
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  const renderEarnings = () => (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-800">Earnings</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
          <p className="text-gray-600 text-sm">Today</p>
          <p className="text-3xl font-bold text-gray-800 mt-2">₹{earnings.today}</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
          <p className="text-gray-600 text-sm">This Week</p>
          <p className="text-3xl font-bold text-gray-800 mt-2">₹{earnings.thisWeek}</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
          <p className="text-gray-600 text-sm">This Month</p>
          <p className="text-3xl font-bold text-gray-800 mt-2">₹{earnings.thisMonth}</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6 border border-gray-200 bg-gradient-to-br from-purple-500 to-purple-600">
          <p className="text-white text-sm">Total Earnings</p>
          <p className="text-3xl font-bold text-white mt-2">₹{earnings.total}</p>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow p-6 border border-gray-200 mt-6">
        <h3 className="font-semibold text-lg mb-4">Recent Transactions</h3>
        {bookings.filter(b => b.status === 'completed').map(booking => (
          <div key={booking.id} className="flex justify-between items-center py-3 border-b last:border-b-0">
            <div>
              <p className="font-medium">{booking.service}</p>
              <p className="text-sm text-gray-600">{booking.date}</p>
            </div>
            <p className="font-semibold text-green-600">+₹{booking.amount}</p>
          </div>
        ))}
      </div>
    </div>
  );

  const renderProfile = () => (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-800">Profile Settings</h2>
      <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
            <input
              type="text"
              value={profile.name}
              onChange={(e) => setProfile({...profile, name: e.target.value})}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input
              type="email"
              value={profile.email}
              onChange={(e) => setProfile({...profile, email: e.target.value})}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
            <input
              type="tel"
              value={profile.phone}
              onChange={(e) => setProfile({...profile, phone: e.target.value})}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Services Offered</label>
            <div className="flex flex-wrap gap-2">
              {profile.services.map((service, idx) => (
                <span key={idx} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                  {service}
                </span>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Availability</label>
            <input
              type="text"
              value={profile.availability}
              onChange={(e) => setProfile({...profile, availability: e.target.value})}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
          <button className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 font-medium">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex h-4/5 bg-gray-100">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transition-transform duration-300`}>
        <div className="p-6 border-b">
          <h1 className="text-2xl font-bold text-purple-600">Provider Portal</h1>
        </div>
        <nav className="p-4 space-y-2">
          <button
            onClick={() => { setActiveTab('bookings'); setSidebarOpen(false); }}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'bookings' ? 'bg-purple-100 text-purple-700' : 'text-gray-700 hover:bg-gray-100'}`}
          >
            <Calendar className="w-5 h-5" />
            <span className="font-medium">Bookings</span>
          </button>
          <button
            onClick={() => { setActiveTab('earnings'); setSidebarOpen(false); }}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'earnings' ? 'bg-purple-100 text-purple-700' : 'text-gray-700 hover:bg-gray-100'}`}
          >
            <DollarSign className="w-5 h-5" />
            <span className="font-medium">Earnings</span>
          </button>
          <button
            onClick={() => { setActiveTab('profile'); setSidebarOpen(false); }}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'profile' ? 'bg-purple-100 text-purple-700' : 'text-gray-700 hover:bg-gray-100'}`}
          >
            <Settings className="w-5 h-5" />
            <span className="font-medium">Profile Settings</span>
          </button>
        </nav>
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="bg-white shadow-sm border-b lg:hidden">
          <div className="flex items-center justify-between p-4">
            <h1 className="text-xl font-bold text-purple-600">Provider Portal</h1>
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2">
              {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        <div className="p-6 lg:p-8">
          {activeTab === 'bookings' && renderBookings()}
          {activeTab === 'earnings' && renderEarnings()}
          {activeTab === 'profile' && renderProfile()}
        </div>
      </div>
    </div>
  );
}