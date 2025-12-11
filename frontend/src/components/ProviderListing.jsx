// import React, { useState } from 'react';
// import { Star, MapPin, Search, Clock, Award } from 'lucide-react';

// export default function ProviderListing() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState('all');

//   const [selectedProvider, setSelectedProvider] = useState(null);

// if (selectedProvider) {
//   return <ProviderBooking providerId={selectedProvider.id} onBack={() => setSelectedProvider(null)} />;
// }

//   // Sample provider data with DP images
//   const providers = [
//     {
//       id: 1,
//       name: 'Rajesh Kumar',
//       service: 'Plumbing',
//       rating: 4.8,
//       reviews: 245,
//       dp: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rajesh',
//       location: 'Downtown',
//       price: '₹500-1000',
//       experience: '8 years',
//       availability: 'Available today'
//     },
//     {
//       id: 2,
//       name: 'Priya Singh',
//       service: 'House Cleaning',
//       rating: 4.9,
//       reviews: 312,
//       dp: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Priya',
//       location: 'Suburbs',
//       price: '₹300-600',
//       experience: '6 years',
//       availability: 'Available today'
//     },
//     {
//       id: 3,
//       name: 'Amit Patel',
//       service: 'Electrical',
//       rating: 4.7,
//       reviews: 198,
//       dp: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Amit',
//       location: 'Downtown',
//       price: '₹600-1200',
//       experience: '10 years',
//       availability: 'Available tomorrow'
//     },
//     {
//       id: 4,
//       name: 'Deepak Sharma',
//       service: 'Carpentry',
//       rating: 4.6,
//       reviews: 156,
//       dp: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Deepak',
//       location: 'North Area',
//       price: '₹700-1500',
//       experience: '12 years',
//       availability: 'Available today'
//     },
//     {
//       id: 5,
//       name: 'Neha Gupta',
//       service: 'Beauty & Salon',
//       rating: 4.9,
//       reviews: 428,
//       dp: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Neha',
//       location: 'Central Mall',
//       price: '₹400-800',
//       experience: '5 years',
//       availability: 'Available today'
//     },
//     {
//       id: 6,
//       name: 'Vikram Singh',
//       service: 'AC Repair',
//       rating: 4.8,
//       reviews: 267,
//       dp: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Vikram',
//       location: 'Downtown',
//       price: '₹800-1500',
//       experience: '9 years',
//       availability: 'Available today'
//     },
//     {
//       id: 7,
//       name: 'Anjali Verma',
//       service: 'Yoga & Fitness',
//       rating: 4.7,
//       reviews: 189,
//       dp: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Anjali',
//       location: 'Fitness Center',
//       price: '₹200-400',
//       experience: '7 years',
//       availability: 'Available today'
//     },
//     {
//       id: 8,
//       name: 'Suresh Kumar',
//       service: 'Painting',
//       rating: 4.5,
//       reviews: 134,
//       dp: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Suresh',
//       location: 'West Side',
//       price: '₹1000-2000',
//       experience: '15 years',
//       availability: 'Available tomorrow'
//     },
//     {
//       id: 9,
//       name: 'Meera Patel',
//       service: 'House Cleaning',
//       rating: 4.8,
//       reviews: 203,
//       dp: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera',
//       location: 'East Area',
//       price: '₹350-700',
//       experience: '7 years',
//       availability: 'Available today'
//     },
//     {
//       id: 10,
//       name: 'Rohan Desai',
//       service: 'Plumbing',
//       rating: 4.6,
//       reviews: 178,
//       dp: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rohan',
//       location: 'South Area',
//       price: '₹450-950',
//       experience: '9 years',
//       availability: 'Available today'
//     },
//     {
//       id: 11,
//       name: 'Divya Nair',
//       service: 'Beauty & Salon',
//       rating: 4.9,
//       reviews: 392,
//       dp: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Divya',
//       location: 'Fashion Street',
//       price: '₹350-750',
//       experience: '6 years',
//       availability: 'Available today'
//     },
//     {
//       id: 12,
//       name: 'Arjun Rao',
//       service: 'Electrical',
//       rating: 4.7,
//       reviews: 221,
//       dp: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Arjun',
//       location: 'Central Zone',
//       price: '₹550-1150',
//       experience: '11 years',
//       availability: 'Available today'
//     },
//     {
//       id: 13,
//       name: 'Sneha Bansal',
//       service: 'Yoga & Fitness',
//       rating: 4.8,
//       reviews: 267,
//       dp: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sneha',
//       location: 'Gym Plaza',
//       price: '₹250-500',
//       experience: '8 years',
//       availability: 'Available today'
//     },
//     {
//       id: 14,
//       name: 'Harish Kumar',
//       service: 'AC Repair',
//       rating: 4.6,
//       reviews: 145,
//       dp: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Harish',
//       location: 'North Zone',
//       price: '₹750-1400',
//       experience: '8 years',
//       availability: 'Available tomorrow'
//     },
//     {
//       id: 15,
//       name: 'Kavya Singh',
//       service: 'Carpentry',
//       rating: 4.8,
//       reviews: 189,
//       dp: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Kavya',
//       location: 'West Zone',
//       price: '₹650-1300',
//       experience: '10 years',
//       availability: 'Available today'
//     },
//     {
//       id: 16,
//       name: 'Arun Verma',
//       service: 'Painting',
//       rating: 4.7,
//       reviews: 198,
//       dp: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Arun',
//       location: 'Downtown',
//       price: '₹950-1900',
//       experience: '13 years',
//       availability: 'Available today'
//     },
//     {
//       id: 17,
//       name: 'Pooja Mehta',
//       service: 'House Cleaning',
//       rating: 4.9,
//       reviews: 356,
//       dp: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Pooja',
//       location: 'Suburbs',
//       price: '₹320-650',
//       experience: '8 years',
//       availability: 'Available today'
//     }
//   ];

//   const categories = [
//     { name: 'All Services', value: 'all' },
//     { name: 'Plumbing', value: 'Plumbing' },
//     { name: 'Cleaning', value: 'House Cleaning' },
//     { name: 'Electrical', value: 'Electrical' },
//     { name: 'Beauty', value: 'Beauty & Salon' },
//     { name: 'AC Repair', value: 'AC Repair' },
//     { name: 'Carpentry', value: 'Carpentry' },
//     { name: 'Painting', value: 'Painting' },
//     { name: 'Fitness', value: 'Yoga & Fitness' }
//   ];

//   const filteredProviders = providers.filter(provider => {
//     const matchesSearch = provider.service.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesCategory = selectedCategory === 'all' || provider.service === selectedCategory;
//     return matchesSearch && matchesCategory;
//   });

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
//       {/* Header */}
//       <div className="bg-white shadow-md sticky top-0 z-40">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//           <h1 className="text-3xl font-bold text-gray-900 mb-6">Service Providers</h1>
          
//           {/* Search Bar */}
//           <div className="relative mb-6">
//             <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
//             <input
//               type="text"
//               placeholder="Search by service name..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//             />
//           </div>

//           {/* Category Filter */}
//           <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
//             {categories.map(cat => (
//               <button
//                 key={cat.value}
//                 onClick={() => setSelectedCategory(cat.value)}
//                 className={`px-4 py-2 rounded-full whitespace-nowrap font-medium transition duration-200 ${
//                   selectedCategory === cat.value
//                     ? 'bg-blue-500 text-white shadow-md'
//                     : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
//                 }`}
//               >
//                 {cat.name}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         <p className="text-gray-600 mb-8 text-lg font-medium">
//           Showing {filteredProviders.length} provider{filteredProviders.length !== 1 ? 's' : ''}
//         </p>

//         {filteredProviders.length > 0 ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//             {filteredProviders.map(provider => (
//               <div
//                 key={provider.id}
//                 className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden flex flex-col h-full"
//               >
//                 {/* Provider Image Background */}
//                 <div className="relative h-32 bg-gradient-to-r from-blue-400 to-blue-600">
//                   {/* DP Image */}
//                   <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
//                     <img
//                       src={provider.dp}
//                       alt={provider.name}
//                       className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
//                     />
//                   </div>
//                 </div>

//                 {/* Provider Details */}
//                 <div className="p-5 pt-20 flex-grow flex flex-col">
//                   {/* Name and Service */}
//                   <h3 className="text-lg font-bold text-gray-900 text-center">{provider.name}</h3>
//                   <p className="text-sm text-blue-600 font-semibold text-center mb-4">{provider.service}</p>

//                   {/* Rating */}
//                   <div className="flex items-center justify-center gap-1 mb-4">
//                     <div className="flex items-center">
//                       {[...Array(5)].map((_, i) => (
//                         <Star
//                           key={i}
//                           size={14}
//                           className={i < Math.floor(provider.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
//                         />
//                       ))}
//                     </div>
//                     <span className="font-bold text-gray-800 text-sm">{provider.rating}</span>
//                     <span className="text-xs text-gray-500">({provider.reviews})</span>
//                   </div>

//                   {/* Info Grid */}
//                   <div className="space-y-3 text-xs mb-4">
//                     <div className="flex items-center gap-2 text-gray-700">
//                       <MapPin size={14} className="text-blue-500 flex-shrink-0" />
//                       <span className="truncate">{provider.location}</span>
//                     </div>
                    
//                     <div className="flex items-center gap-2 text-gray-700">
//                       <Award size={14} className="text-green-500 flex-shrink-0" />
//                       <span>{provider.experience}</span>
//                     </div>
                    
//                     <div className="flex items-center gap-2 text-gray-700">
//                       <Clock size={14} className="text-orange-500 flex-shrink-0" />
//                       <span className="truncate">{provider.availability}</span>
//                     </div>

//                     <div className="pt-2 border-t border-gray-200">
//                       <p className="font-bold text-gray-900 text-center">{provider.price}</p>
//                     </div>
//                   </div>

//                   {/* Action Button */}
//                 <button 
//                     onClick={() => setSelectedProvider(provider)}
//                             className="w-full bg-blue-500..."
//                                    >
//                                     Book Now
//                                     </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <div className="text-center py-12">
//             <p className="text-gray-500 text-lg">No providers found. Try adjusting your search.</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

import React, { useState } from 'react';
import { Star, MapPin, Search, Clock, Award } from 'lucide-react';
import ProviderBooking from './ProviderBooking'; // Import the booking component

export default function ProviderListing() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProvider, setSelectedProvider] = useState(null); // Add this state

  // Sample provider data with DP images
  const providers = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      service: 'Plumbing',
      rating: 4.8,
      reviews: 245,
      dp: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rajesh',
      location: 'Downtown',
      price: 500,
      maxPrice: 1000,
      experience: '8 years',
      availability: 'Available today',
      coverImage: '/Static/Ac_Installation_1.jpg',
      description: 'Professional plumbing expert with 8 years of experience.',
      services: ['Pipe Installation', 'Leak Repair', 'Drain Cleaning', 'Faucet Installation'],
      responseTime: '15 mins',
      completionRate: '98%',
      aboutMe: 'I am a certified plumber with extensive experience in residential and commercial plumbing work.',
      availableTimes: ['09:00 AM', '10:00 AM', '11:00 AM', '02:00 PM', '03:00 PM', '04:00 PM'],
      policies: {
        cancellation: 'Free cancellation up to 2 hours before appointment',
        rescheduling: 'You can reschedule anytime',
        guarantee: '100% satisfaction guarantee'
      }
    },
    {
      id: 2,
      name: 'Priya Singh',
      service: 'House Cleaning',
      rating: 4.9,
      reviews: 312,
      dp: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Priya',
      location: 'Suburbs',
      price: 300,
      maxPrice: 600,
      experience: '6 years',
      availability: 'Available today',
      coverImage: '/Static/Ac_Installation_1.jpg',
      description: 'Professional house cleaning expert with 6 years of experience.',
      services: ['House Cleaning', 'Deep Cleaning', 'Carpet Cleaning', 'Window Cleaning'],
      responseTime: '10 mins',
      completionRate: '99%',
      aboutMe: 'Dedicated cleaning professional with attention to detail.',
      availableTimes: ['09:00 AM', '10:00 AM', '11:00 AM', '02:00 PM', '03:00 PM', '04:00 PM'],
      policies: {
        cancellation: 'Free cancellation up to 2 hours before appointment',
        rescheduling: 'You can reschedule anytime',
        guarantee: '100% satisfaction guarantee'
      }
    },
    {
      id: 3,
      name: 'Amit Patel',
      service: 'Electrical',
      rating: 4.7,
      reviews: 198,
      dp: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Amit',
      location: 'Downtown',
      price: 600,
      maxPrice: 1200,
      experience: '10 years',
      availability: 'Available tomorrow',
      coverImage: '/Static/Ac_Installation_1.jpg',
      description: 'Experienced electrical technician with 10 years of expertise.',
      services: ['Wiring', 'Installation', 'Repair', 'Maintenance'],
      responseTime: '20 mins',
      completionRate: '97%',
      aboutMe: 'Certified electrician committed to quality and safety.',
      availableTimes: ['09:00 AM', '10:00 AM', '11:00 AM', '02:00 PM', '03:00 PM', '04:00 PM'],
      policies: {
        cancellation: 'Free cancellation up to 2 hours before appointment',
        rescheduling: 'You can reschedule anytime',
        guarantee: '100% satisfaction guarantee'
      }
    },
    {
      id: 4,
      name: 'Deepak Sharma',
      service: 'Carpentry',
      rating: 4.6,
      reviews: 156,
      dp: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Deepak',
      location: 'North Area',
      price: 700,
      maxPrice: 1500,
      experience: '12 years',
      availability: 'Available today',
      coverImage: '/Static/Ac_Installation_1.jpg',
      description: 'Master carpenter with 12 years of woodworking experience.',
      services: ['Custom Furniture', 'Repairs', 'Installation', 'Design'],
      responseTime: '25 mins',
      completionRate: '96%',
      aboutMe: 'Skilled craftsman delivering quality woodwork solutions.',
      availableTimes: ['09:00 AM', '10:00 AM', '11:00 AM', '02:00 PM', '03:00 PM', '04:00 PM'],
      policies: {
        cancellation: 'Free cancellation up to 2 hours before appointment',
        rescheduling: 'You can reschedule anytime',
        guarantee: '100% satisfaction guarantee'
      }
    },
    {
      id: 5,
      name: 'Neha Gupta',
      service: 'Beauty & Salon',
      rating: 4.9,
      reviews: 428,
      dp: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Neha',
      location: 'Central Mall',
      price: 400,
      maxPrice: 800,
      experience: '5 years',
      availability: 'Available today',
      coverImage: '/Static/Ac_Installation_1.jpg',
      description: 'Professional beauty expert with 5 years of experience.',
      services: ['Hair Cut', 'Facial', 'Manicure', 'Pedicure'],
      responseTime: '12 mins',
      completionRate: '99%',
      aboutMe: 'Beauty specialist dedicated to making you look and feel great.',
      availableTimes: ['09:00 AM', '10:00 AM', '11:00 AM', '02:00 PM', '03:00 PM', '04:00 PM'],
      policies: {
        cancellation: 'Free cancellation up to 2 hours before appointment',
        rescheduling: 'You can reschedule anytime',
        guarantee: '100% satisfaction guarantee'
      }
    },
    // Add more providers as needed...
  ];

  const categories = [
    { name: 'All Services', value: 'all' },
    { name: 'Plumbing', value: 'Plumbing' },
    { name: 'Cleaning', value: 'House Cleaning' },
    { name: 'Electrical', value: 'Electrical' },
    { name: 'Beauty', value: 'Beauty & Salon' },
    { name: 'AC Repair', value: 'AC Repair' },
    { name: 'Carpentry', value: 'Carpentry' },
  ];

  const filteredProviders = providers.filter(provider => {
    const matchesSearch = provider.service.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || provider.service === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Show booking page if provider selected
  if (selectedProvider) {
    return <ProviderBooking provider={selectedProvider} onBack={() => setSelectedProvider(null)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="bg-white shadow-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Service Providers</h1>
          
          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search by service name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Category Filter */}
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map(cat => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-4 py-2 rounded-full whitespace-nowrap font-medium transition duration-200 ${
                  selectedCategory === cat.value
                    ? 'bg-blue-500 text-white shadow-md'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <p className="text-gray-600 mb-8 text-lg font-medium">
          Showing {filteredProviders.length} provider{filteredProviders.length !== 1 ? 's' : ''}
        </p>

        {filteredProviders.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProviders.map(provider => (
              <div
                key={provider.id}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden flex flex-col h-full"
              >
                {/* Provider Image Background */}
                <div className="relative h-32 bg-gradient-to-r from-blue-400 to-blue-600">
                  {/* DP Image */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <img
                      src={provider.dp}
                      alt={provider.name}
                      className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
                    />
                  </div>
                </div>

                {/* Provider Details */}
                <div className="p-5 pt-20 flex-grow flex flex-col">
                  {/* Name and Service */}
                  <h3 className="text-lg font-bold text-gray-900 text-center">{provider.name}</h3>
                  <p className="text-sm text-blue-600 font-semibold text-center mb-4">{provider.service}</p>

                  {/* Rating */}
                  <div className="flex items-center justify-center gap-1 mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className={i < Math.floor(provider.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
                        />
                      ))}
                    </div>
                    <span className="font-bold text-gray-800 text-sm">{provider.rating}</span>
                    <span className="text-xs text-gray-500">({provider.reviews})</span>
                  </div>

                  {/* Info Grid */}
                  <div className="space-y-3 text-xs mb-4">
                    <div className="flex items-center gap-2 text-gray-700">
                      <MapPin size={14} className="text-blue-500 flex-shrink-0" />
                      <span className="truncate">{provider.location}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-gray-700">
                      <Award size={14} className="text-green-500 flex-shrink-0" />
                      <span>{provider.experience}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-gray-700">
                      <Clock size={14} className="text-orange-500 flex-shrink-0" />
                      <span className="truncate">{provider.availability}</span>
                    </div>

                    <div className="pt-2 border-t border-gray-200">
                      <p className="font-bold text-gray-900 text-center">₹{provider.price}</p>
                    </div>
                  </div>

                  {/* Action Button */}
                  <button 
                    onClick={() => setSelectedProvider(provider)} // THIS IS THE KEY LINE
                    className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-2.5 px-4 rounded-lg transition duration-200 mt-auto"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No providers found. Try adjusting your search.</p>
          </div>
        )}
      </div>
    </div>
  );
}