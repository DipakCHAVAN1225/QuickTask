
import React, { useState } from 'react';
import { Star, MapPin, Clock, Award, Phone, MessageCircle, ChevronLeft, Calendar, Users } from 'lucide-react';

export default function ProviderBooking({ provider, onBack }) {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [showConfirmation, setShowConfirmation] = useState(false);

  // Use passed provider or default
  const providerData = provider || {
    id: 1,
    name: 'Rajesh Kumar',
    service: 'Plumbing',
    rating: 4.8,
    reviews: 245,
    dp: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rajesh',
    coverImage: '/Static/Ac_Installation_1.jpg',
    location: 'Downtown, Pune',
    price: 500,
    maxPrice: 1000,
    experience: '8 years',
    availability: 'Available today',
    description: 'Professional plumbing expert with 8 years of experience. Specializes in pipe installation, repairs, and maintenance. Quick response time and quality work guaranteed.',
    services: [
      'Pipe Installation',
      'Leak Repair',
      'Drain Cleaning',
      'Faucet Installation'
    ],
    languages: ['Hindi', 'English', 'Marathi'],
    responseTime: '15 mins',
    completionRate: '98%',
    aboutMe: 'I am a certified plumber with extensive experience in residential and commercial plumbing work. Customer satisfaction is my priority.',
    workSamples: [
      { title: 'Pipe Installation', image: '🔧' },
      { title: 'Leak Repair', image: '💧' },
      { title: 'Drain Cleaning', image: '🚰' }
    ],
    availableTimes: ['09:00 AM', '10:00 AM', '11:00 AM', '02:00 PM', '03:00 PM', '04:00 PM'],
    policies: {
      cancellation: 'Free cancellation up to 2 hours before appointment',
      rescheduling: 'You can reschedule anytime',
      guarantee: '100% satisfaction guarantee'
    }
  };

  const handleBooking = () => {
    setShowConfirmation(true);
    // Show confirmation for 2 seconds then go back
    setTimeout(() => {
      setShowConfirmation(false);
      onBack(); // Go back to provider listing/home
    }, 2000);
  };

  const availableDates = Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i);
    return date.toISOString().split('T')[0];
  });

  if (showConfirmation) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <style>{`
          @keyframes scaleIn {
            from {
              transform: scale(0.8);
              opacity: 0;
            }
            to {
              transform: scale(1);
              opacity: 1;
            }
          }
          @keyframes slideOut {
            from {
              transform: scale(1);
              opacity: 1;
            }
            to {
              transform: scale(0.8);
              opacity: 0;
            }
          }
          .animate-scale-in {
            animation: scaleIn 0.4s ease-out;
          }
          .animate-scale-out {
            animation: slideOut 0.4s ease-in forwards;
          }
        `}</style>
        <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 text-center space-y-6 animate-scale-in">
          <div className="text-6xl animate-bounce">✓</div>
          <h2 className="text-2xl font-bold text-gray-900">Booking Confirmed!</h2>
          
          <div className="bg-blue-50 rounded-xl p-6 text-left space-y-4">
            <div>
              <p className="text-sm text-gray-600">Provider</p>
              <p className="text-lg font-semibold text-gray-900">{providerData.name}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Service</p>
              <p className="text-lg font-semibold text-gray-900">{providerData.service}</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600">Date</p>
                <p className="text-lg font-semibold text-gray-900">{selectedDate}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Time</p>
                <p className="text-lg font-semibold text-gray-900">{selectedTime}</p>
              </div>
            </div>
            <div className="border-t border-blue-200 pt-4">
              <p className="text-sm text-gray-600 mb-2">Total Amount</p>
              <p className="text-2xl font-bold text-blue-600">₹{providerData.price * quantity}</p>
            </div>
          </div>

          <p className="text-gray-600 text-sm">Redirecting in 2 seconds...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center gap-4">
          <button
            onClick={onBack}
            className="p-2 hover:bg-gray-100 rounded-lg transition"
          >
            <ChevronLeft size={24} />
          </button>
          <h1 className="text-2xl font-bold">Book Service</h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Side - Provider Details */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Provider Header Card */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              {/* Cover Image */}
              <div className="h-64 bg-gradient-to-r from-blue-400 to-blue-600 relative overflow-hidden">
                <img src={providerData.coverImage} alt={providerData.name} className="w-full h-full object-cover opacity-70" />
              </div>

              {/* Provider Info */}
              <div className="p-8 -mt-16 relative">
                <div className="flex flex-col md:flex-row gap-6">
                  <img
                    src={providerData.dp}
                    alt={providerData.name}
                    className="w-32 h-32 rounded-full border-4 border-white shadow-lg flex-shrink-0"
                  />
                  
                  <div className="flex-grow">
                    <h2 className="text-3xl font-bold text-gray-900">{providerData.name}</h2>
                    <p className="text-lg text-blue-600 font-semibold mt-1">{providerData.service}</p>

                    {/* Rating and Stats */}
                    <div className="flex items-center gap-4 mt-4">
                      <div className="flex items-center gap-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <span className="font-bold text-gray-900">{providerData.rating}</span>
                        <span className="text-gray-600">({providerData.reviews} reviews)</span>
                      </div>
                    </div>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-gray-200">
                      <div>
                        <p className="text-sm text-gray-600">Experience</p>
                        <p className="font-bold text-gray-900">{providerData.experience}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Response Time</p>
                        <p className="font-bold text-gray-900">{providerData.responseTime}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Completion Rate</p>
                        <p className="font-bold text-gray-900">{providerData.completionRate}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* About Section */}
            <div className="bg-white rounded-2xl shadow-md p-8 space-y-4">
              <h3 className="text-xl font-bold text-gray-900">About</h3>
              <p className="text-gray-700 leading-relaxed">{providerData.description}</p>
              <p className="text-gray-600 italic">{providerData.aboutMe}</p>
            </div>

            {/* Services Offered */}
            <div className="bg-white rounded-2xl shadow-md p-8 space-y-4">
              <h3 className="text-xl font-bold text-gray-900">Services Offered</h3>
              <div className="grid grid-cols-2 gap-3">
                {providerData.services.map((service, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                    <span className="text-lg">✓</span>
                    <span className="text-gray-900 font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-white rounded-2xl shadow-md p-8 space-y-4">
              <h3 className="text-xl font-bold text-gray-900">Contact & Location</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <MapPin size={20} className="text-blue-600" />
                  <span className="text-gray-700">{providerData.location}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={20} className="text-blue-600" />
                  <button className="text-blue-600 font-semibold hover:underline">Call Provider</button>
                </div>
                <div className="flex items-center gap-3">
                  <MessageCircle size={20} className="text-blue-600" />
                  <button className="text-blue-600 font-semibold hover:underline">Send Message</button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Booking Form */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-md p-6 sticky top-24 space-y-6">
              
              {/* Price */}
              <div className="border-b border-gray-200 pb-4">
                <p className="text-sm text-gray-600 mb-2">Price per service</p>
                <p className="text-3xl font-bold text-gray-900">₹{providerData.price}</p>
                <p className="text-xs text-gray-500 mt-1">up to ₹{providerData.maxPrice}</p>
              </div>

              {/* Date Selection */}
              <div className="space-y-3">
                <label className="block font-semibold text-gray-900">Select Date</label>
                <select
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500"
                >
                  <option value="">Choose a date</option>
                  {availableDates.map(date => (
                    <option key={date} value={date}>{new Date(date).toLocaleDateString()}</option>
                  ))}
                </select>
              </div>

              {/* Time Selection */}
              {selectedDate && (
                <div className="space-y-3">
                  <label className="block font-semibold text-gray-900">Select Time</label>
                  <div className="grid grid-cols-2 gap-2">
                    {providerData.availableTimes.map(time => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`py-2 px-3 rounded-lg font-medium transition ${
                          selectedTime === time
                            ? 'bg-blue-600 text-white'
                            : 'border-2 border-gray-300 text-gray-700 hover:border-blue-300'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity */}
              {selectedTime && (
                <div className="space-y-3">
                  <label className="block font-semibold text-gray-900">Number of Services</label>
                  <div className="flex items-center gap-4 border-2 border-gray-300 rounded-lg p-3">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="text-xl text-gray-600 hover:text-gray-900 font-bold"
                    >
                      −
                    </button>
                    <span className="flex-grow text-center font-bold text-gray-900">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="text-xl text-gray-600 hover:text-gray-900 font-bold"
                    >
                      +
                    </button>
                  </div>
                </div>
              )}

              {/* Total */}
              {selectedTime && (
                <div className="border-t border-gray-200 pt-4 space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-semibold text-gray-900">₹{providerData.price * quantity}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Platform Fee</span>
                    <span className="font-semibold text-gray-900">₹0</span>
                  </div>
                  <div className="border-t border-gray-200 pt-4 flex justify-between items-center">
                    <span className="font-bold text-gray-900">Total</span>
                    <span className="text-2xl font-bold text-blue-600">₹{providerData.price * quantity}</span>
                  </div>
                </div>
              )}

              {/* Book Button */}
              <button
                onClick={handleBooking}
                disabled={!selectedDate || !selectedTime}
                className={`w-full py-3 px-4 rounded-lg font-bold text-white transition ${
                  selectedDate && selectedTime
                    ? 'bg-blue-600 hover:bg-blue-700 cursor-pointer'
                    : 'bg-gray-400 cursor-not-allowed'
                }`}
              >
                Book Now
              </button>

              {/* Policies */}
              <div className="bg-blue-50 rounded-lg p-4 space-y-2 text-xs text-gray-700">
                <p><strong>✓ {providerData.policies.cancellation}</strong></p>
                <p><strong>✓ {providerData.policies.rescheduling}</strong></p>
                <p><strong>✓ {providerData.policies.guarantee}</strong></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}