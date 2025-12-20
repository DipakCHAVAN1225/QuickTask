

// // import React, { useState } from 'react';
// // import { Star, MapPin, Search, Clock, Award } from 'lucide-react';
// // import ProviderBooking from './ProviderBooking'; // Import the booking component

// // export default function ProviderListing() {
// //   const [searchTerm, setSearchTerm] = useState('');
// //   const [selectedCategory, setSelectedCategory] = useState('all');
// //   const [selectedProvider, setSelectedProvider] = useState(null); // Add this state

// //   // Sample provider data with DP images
// //   const providers = [
// //     {
// //       id: 1,
// //       name: 'Rajesh Kumar',
// //       service: 'Plumbing',
// //       rating: 4.8,
// //       reviews: 245,
// //       dp: '/Static/Rajesh Kumar.jpg',
// //       location: 'Downtown',
// //       price: 500,
// //       maxPrice: 1000,
// //       experience: '8 years',
// //       availability: 'Available today',
// //       coverImage: '/Static/Ac_Installation_1.jpg',
// //       description: 'Professional plumbing expert with 8 years of experience.',
// //       services: ['Pipe Installation', 'Leak Repair', 'Drain Cleaning', 'Faucet Installation'],
// //       responseTime: '15 mins',
// //       completionRate: '98%',
// //       aboutMe: 'I am a certified plumber with extensive experience in residential and commercial plumbing work.',
// //       availableTimes: ['09:00 AM', '10:00 AM', '11:00 AM', '02:00 PM', '03:00 PM', '04:00 PM'],
// //       policies: {
// //         cancellation: 'Free cancellation up to 2 hours before appointment',
// //         rescheduling: 'You can reschedule anytime',
// //         guarantee: '100% satisfaction guarantee'
// //       }
// //     },
// //     {
// //       id: 2,
// //       name: 'Priya Singh',
// //       service: 'House Cleaning',
// //       rating: 4.9,
// //       reviews: 312,
// //       dp: '/Static/Priya_Singh.jpg',
// //       location: 'Suburbs',
// //       price: 300,
// //       maxPrice: 600,
// //       experience: '6 years',
// //       availability: 'Available today',
// //       coverImage: '/Static/Ac_Installation_1.jpg',
// //       description: 'Professional house cleaning expert with 6 years of experience.',
// //       services: ['House Cleaning', 'Deep Cleaning', 'Carpet Cleaning', 'Window Cleaning'],
// //       responseTime: '10 mins',
// //       completionRate: '99%',
// //       aboutMe: 'Dedicated cleaning professional with attention to detail.',
// //       availableTimes: ['09:00 AM', '10:00 AM', '11:00 AM', '02:00 PM', '03:00 PM', '04:00 PM'],
// //       policies: {
// //         cancellation: 'Free cancellation up to 2 hours before appointment',
// //         rescheduling: 'You can reschedule anytime',
// //         guarantee: '100% satisfaction guarantee'
// //       }
// //     },
// //     {
// //       id: 3,
// //       name: 'Amit Patel',
// //       service: 'Electrical',
// //       rating: 4.7,
// //       reviews: 198,
// //       dp: '/static/Amit_patel.jpg',
// //       location: 'Downtown',
// //       price: 600,
// //       maxPrice: 1200,
// //       experience: '10 years',
// //       availability: 'Available tomorrow',
// //       coverImage: '/Static/Ac_Installation_1.jpg',
// //       description: 'Experienced electrical technician with 10 years of expertise.',
// //       services: ['Wiring', 'Installation', 'Repair', 'Maintenance'],
// //       responseTime: '20 mins',
// //       completionRate: '97%',
// //       aboutMe: 'Certified electrician committed to quality and safety.',
// //       availableTimes: ['09:00 AM', '10:00 AM', '11:00 AM', '02:00 PM', '03:00 PM', '04:00 PM'],
// //       policies: {
// //         cancellation: 'Free cancellation up to 2 hours before appointment',
// //         rescheduling: 'You can reschedule anytime',
// //         guarantee: '100% satisfaction guarantee'
// //       }
// //     },
// //     {
// //       id: 4,
// //       name: 'Deepak Sharma',
// //       service: 'Carpentry',
// //       rating: 4.6,
// //       reviews: 156,
// //       dp: '/static/Deepak_sharma.jpg',
// //       location: 'North Area',
// //       price: 700,
// //       maxPrice: 1500,
// //       experience: '12 years',
// //       availability: 'Available today',
// //       coverImage: '/Static/Ac_Installation_1.jpg',
// //       description: 'Master carpenter with 12 years of woodworking experience.',
// //       services: ['Custom Furniture', 'Repairs', 'Installation', 'Design'],
// //       responseTime: '25 mins',
// //       completionRate: '96%',
// //       aboutMe: 'Skilled craftsman delivering quality woodwork solutions.',
// //       availableTimes: ['09:00 AM', '10:00 AM', '11:00 AM', '02:00 PM', '03:00 PM', '04:00 PM'],
// //       policies: {
// //         cancellation: 'Free cancellation up to 2 hours before appointment',
// //         rescheduling: 'You can reschedule anytime',
// //         guarantee: '100% satisfaction guarantee'
// //       }
// //     },
// //     {
// //       id: 5,
// //       name: 'Neha Gupta',
// //       service: 'Beauty & Salon',
// //       rating: 4.9,
// //       reviews: 428,
// //       dp: '/static/neha_gupta.jpg',
// //       location: 'Central Mall',
// //       price: 400,
// //       maxPrice: 800,
// //       experience: '5 years',
// //       availability: 'Available today',
// //       coverImage: '/Static/Ac_Installation_1.jpg',
// //       description: 'Professional beauty expert with 5 years of experience.',
// //       services: ['Hair Cut', 'Facial', 'Manicure', 'Pedicure'],
// //       responseTime: '12 mins',
// //       completionRate: '99%',
// //       aboutMe: 'Beauty specialist dedicated to making you look and feel great.',
// //       availableTimes: ['09:00 AM', '10:00 AM', '11:00 AM', '02:00 PM', '03:00 PM', '04:00 PM'],
// //       policies: {
// //         cancellation: 'Free cancellation up to 2 hours before appointment',
// //         rescheduling: 'You can reschedule anytime',
// //         guarantee: '100% satisfaction guarantee'
// //       }
// //     },
// //     // Add more providers as needed...
// //   ];

// //   const categories = [
// //     { name: 'All Services', value: 'all' },
// //     { name: 'Plumbing', value: 'Plumbing' },
// //     { name: 'Cleaning', value: 'House Cleaning' },
// //     { name: 'Electrical', value: 'Electrical' },
// //     { name: 'Beauty', value: 'Beauty & Salon' },
// //     { name: 'AC Repair', value: 'AC Repair' },
// //     { name: 'Carpentry', value: 'Carpentry' },
// //   ];

// //   const filteredProviders = providers.filter(provider => {
// //     const matchesSearch = provider.service.toLowerCase().includes(searchTerm.toLowerCase());
// //     const matchesCategory = selectedCategory === 'all' || provider.service === selectedCategory;
// //     return matchesSearch && matchesCategory;
// //   });

// //   // Show booking page if provider selected
// //   if (selectedProvider) {
// //     return <ProviderBooking provider={selectedProvider} onBack={() => setSelectedProvider(null)} />;
// //   }

// //   return (
// //     <div className="min-h-screen min-w-screen overflow-x-hidden bg-gradient-to-br from-gray-50 to-gray-100">
// //       {/* Header */}
// //       <div className="bg-white shadow-md sticky top-0 z-40">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
// //           <h1 className="text-3xl font-bold text-gray-900 mb-6">Service Providers</h1>
          
// //           {/* Search Bar */}
// //           <div className="relative mb-6">
// //             <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
// //             <input
// //               type="text"
// //               placeholder="Search by service name..."
// //               value={searchTerm}
// //               onChange={(e) => setSearchTerm(e.target.value)}
// //               className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// //             />
// //           </div>

// //           {/* Category Filter */}
// //           <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
// //             {categories.map(cat => (
// //               <button
// //                 key={cat.value}
// //                 onClick={() => setSelectedCategory(cat.value)}
// //                 className={`px-4 py-2 rounded-full whitespace-nowrap font-medium transition duration-200 ${
// //                   selectedCategory === cat.value
// //                     ? 'bg-blue-500 text-white shadow-md'
// //                     : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
// //                 }`}
// //               >
// //                 {cat.name}
// //               </button>
// //             ))}
// //           </div>
// //         </div>
// //       </div>

// //       {/* Main Content */}
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
// //         <p className="text-gray-600 mb-8 text-lg font-medium">
// //           Showing {filteredProviders.length} provider{filteredProviders.length !== 1 ? 's' : ''}
// //         </p>

// //         {filteredProviders.length > 0 ? (
// //           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
// //             {filteredProviders.map(provider => (
// //               <div
// //                 key={provider.id}
// //                 className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden flex flex-col h-full"
// //               >
// //                 {/* Provider Image Background */}
// //                 <div className="relative h-32 bg-gradient-to-r from-blue-400 to-blue-600">
// //                   {/* DP Image */}
// //                   <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
// //                     <img
// //                       src={provider.dp}
// //                       alt={provider.name}
// //                       className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
// //                     />
// //                   </div>
// //                 </div>

// //                 {/* Provider Details */}
// //                 <div className="p-5 pt-20 flex-grow flex flex-col">
// //                   {/* Name and Service */}
// //                   <h3 className="text-lg font-bold text-gray-900 text-center">{provider.name}</h3>
// //                   <p className="text-sm text-blue-600 font-semibold text-center mb-4">{provider.service}</p>

// //                   {/* Rating */}
// //                   <div className="flex items-center justify-center gap-1 mb-4">
// //                     <div className="flex items-center">
// //                       {[...Array(5)].map((_, i) => (
// //                         <Star
// //                           key={i}
// //                           size={14}
// //                           className={i < Math.floor(provider.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
// //                         />
// //                       ))}
// //                     </div>
// //                     <span className="font-bold text-gray-800 text-sm">{provider.rating}</span>
// //                     <span className="text-xs text-gray-500">({provider.reviews})</span>
// //                   </div>

// //                   {/* Info Grid */}
// //                   <div className="space-y-3 text-xs mb-4">
// //                     <div className="flex items-center gap-2 text-gray-700">
// //                       <MapPin size={14} className="text-blue-500 flex-shrink-0" />
// //                       <span className="truncate">{provider.location}</span>
// //                     </div>
                    
// //                     <div className="flex items-center gap-2 text-gray-700">
// //                       <Award size={14} className="text-green-500 flex-shrink-0" />
// //                       <span>{provider.experience}</span>
// //                     </div>
                    
// //                     <div className="flex items-center gap-2 text-gray-700">
// //                       <Clock size={14} className="text-orange-500 flex-shrink-0" />
// //                       <span className="truncate">{provider.availability}</span>
// //                     </div>

// //                     <div className="pt-2 border-t border-gray-200">
// //                       <p className="font-bold text-gray-900 text-center">₹{provider.price}</p>
// //                     </div>
// //                   </div>

// //                   {/* Action Button */}
// //                   <button 
// //                     onClick={() => setSelectedProvider(provider)} // THIS IS THE KEY LINE
// //                     className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-2.5 px-4 rounded-lg transition duration-200 mt-auto"
// //                   >
// //                     Book Now
// //                   </button>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         ) : (
// //           <div className="text-center py-12">
// //             <p className="text-gray-500 text-lg">No providers found. Try adjusting your search.</p>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }

// import React, { useState, useEffect } from 'react';
// import { Star, MapPin, Clock, Briefcase, ChevronRight, Search, Filter } from 'lucide-react';

// export default function ProviderListing({ onSelectProvider, onBack }) {
//   const [providers, setProviders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filterService, setFilterService] = useState('all');

//   useEffect(() => {
//     fetchProviders();
//   }, []);

//   const fetchProviders = async () => {
//     try {
//       setLoading(true);
//       setError('');
      
//       const response = await fetch('http://localhost:3000/api/providers');
      
//       if (!response.ok) {
//         throw new Error('Failed to fetch providers');
//       }
      
//       const data = await response.json();
      
//       if (data.success && data.providers) {
//         setProviders(data.providers);
//       } else {
//         setProviders([]);
//         setError('No providers found');
//       }
//     } catch (err) {
//       console.error('Error fetching providers:', err);
//       setError(err.message || 'Failed to load providers');
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Filter providers based on search and service type
//   const filteredProviders = providers.filter(provider => {
//     const matchesSearch = provider.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                          provider.service.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesFilter = filterService === 'all' || provider.service === filterService;
//     return matchesSearch && matchesFilter;
//   });

//   // Get unique services for filter dropdown
//   const uniqueServices = ['all', ...new Set(providers.map(p => p.service))];

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <div className="text-center">
//           <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
//           <p className="mt-4 text-gray-600">Loading providers...</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header */}
//       <div className="bg-white shadow-sm sticky top-0 z-40">
//         <div className="max-w-6xl mx-auto px-4 py-4 flex items-center gap-4">
//           {onBack && (
//             <button
//               onClick={onBack}
//               className="p-2 hover:bg-gray-100 rounded-lg transition"
//             >
//               ← Back
//             </button>
//           )}
//           <div>
//             <h1 className="text-2xl font-bold">Service Providers</h1>
//             <p className="text-sm text-gray-600">{filteredProviders.length} providers available</p>
//           </div>
//         </div>
//       </div>

//       <div className="max-w-6xl mx-auto px-4 py-8">
//         {/* Search and Filter Section */}
//         <div className="mb-8 space-y-4">
//           {/* Search Bar */}
//           <div className="relative">
//             <Search className="absolute left-4 top-3 text-gray-400" size={20} />
//             <input
//               type="text"
//               placeholder="Search providers by name or service..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
//             />
//           </div>

//           {/* Filter by Service */}
//           <div className="flex items-center gap-4">
//             <Filter size={20} className="text-gray-600" />
//             <select
//               value={filterService}
//               onChange={(e) => setFilterService(e.target.value)}
//               className="px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
//             >
//               {uniqueServices.map(service => (
//                 <option key={service} value={service}>
//                   {service === 'all' ? 'All Services' : service}
//                 </option>
//               ))}
//             </select>
//           </div>
//         </div>

//         {/* Error Message */}
//         {error && providers.length === 0 && (
//           <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
//             <p className="text-red-600 font-semibold">{error}</p>
//             <button
//               onClick={fetchProviders}
//               className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
//             >
//               Try Again
//             </button>
//           </div>
//         )}

//         {/* Providers Grid */}
//         {filteredProviders.length > 0 ? (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {filteredProviders.map(provider => (
//               <div
//                 key={provider.id}
//                 className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition cursor-pointer"
//                 onClick={() => onSelectProvider(provider)}
//               >
//                 {/* Cover Image */}
//                 <div className="h-40 bg-gradient-to-r from-blue-400 to-blue-600 relative overflow-hidden">
//                   <img
//                     src={provider.dp || `https://api.dicebear.com/7.x/avataaars/svg?seed=${provider.name}`}
//                     alt={provider.name}
//                     className="w-full h-full object-cover opacity-70"
//                   />
//                 </div>

//                 {/* Provider Info */}
//                 <div className="p-6 space-y-4">
//                   {/* Name and Service */}
//                   <div>
//                     <h3 className="text-xl font-bold text-gray-900">{provider.name}</h3>
//                     <p className="text-blue-600 font-semibold text-sm">{provider.service}</p>
//                   </div>

//                   {/* Rating */}
//                   <div className="flex items-center gap-2">
//                     <div className="flex">
//                       {[...Array(5)].map((_, i) => (
//                         <Star
//                           key={i}
//                           size={16}
//                           className={`${
//                             i < Math.floor(provider.rating)
//                               ? 'fill-yellow-400 text-yellow-400'
//                               : 'text-gray-300'
//                           }`}
//                         />
//                       ))}
//                     </div>
//                     <span className="text-sm font-semibold text-gray-900">
//                       {provider.rating.toFixed(1)}
//                     </span>
//                     <span className="text-xs text-gray-600">({provider.reviews} reviews)</span>
//                   </div>

//                   {/* Details */}
//                   <div className="space-y-2 text-sm">
//                     {/* Location */}
//                     <div className="flex items-center gap-2 text-gray-700">
//                       <MapPin size={16} className="text-blue-600 flex-shrink-0" />
//                       <span className="truncate">{provider.location}</span>
//                     </div>

//                     {/* Experience */}
//                     <div className="flex items-center gap-2 text-gray-700">
//                       <Briefcase size={16} className="text-blue-600 flex-shrink-0" />
//                       <span>{provider.experience}</span>
//                     </div>

//                     {/* Price */}
//                     <div className="flex items-center gap-2 text-gray-700">
//                       <span className="font-semibold">₹{provider.price}</span>
//                       <span className="text-xs text-gray-600">/ service</span>
//                     </div>
//                   </div>

//                   {/* Services */}
//                   {provider.services && provider.services.length > 0 && (
//                     <div className="flex flex-wrap gap-2">
//                       {provider.services.slice(0, 2).map((service, idx) => (
//                         <span
//                           key={idx}
//                           className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
//                         >
//                           {service}
//                         </span>
//                       ))}
//                       {provider.services.length > 2 && (
//                         <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
//                           +{provider.services.length - 2} more
//                         </span>
//                       )}
//                     </div>
//                   )}

//                   {/* Booking Button */}
//                   <button
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       onSelectProvider(provider);
//                     }}
//                     className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-2"
//                   >
//                     Book Now
//                     <ChevronRight size={18} />
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <div className="text-center py-12">
//             <p className="text-gray-600 text-lg">
//               {providers.length === 0 ? 'No providers available' : 'No providers match your search'}
//             </p>
//             {providers.length === 0 && (
//               <button
//                 onClick={fetchProviders}
//                 className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
//               >
//                 Refresh
//               </button>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }





import React, { useState, useEffect } from 'react';
import { Star, MapPin, Briefcase, ChevronRight, Search, Filter } from 'lucide-react';

export default function ProviderListing({ onSelectProvider, onBack }) {
  const [providers, setProviders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterService, setFilterService] = useState('all');
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      const userData = JSON.parse(user);
      setUserRole(userData.role);
    }
    fetchProviders();
  }, []);

  const fetchProviders = async () => {
    try {
      setLoading(true);
      setError('');
      
      const response = await fetch('http://localhost:3000/api/providers');
      
      if (!response.ok) {
        throw new Error('Failed to fetch providers');
      }
      
      const data = await response.json();
      
      if (data.success && data.providers) {
        setProviders(data.providers);
      } else {
        setProviders([]);
        setError('No providers found');
      }
    } catch (err) {
      console.error('Error fetching providers:', err);
      setError(err.message || 'Failed to load providers');
    } finally {
      setLoading(false);
    }
  };

  const filteredProviders = providers.filter(provider => {
    const matchesSearch = provider.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         provider.service.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterService === 'all' || provider.service === filterService;
    return matchesSearch && matchesFilter;
  });

  const uniqueServices = ['all', ...new Set(providers.map(p => p.service))];
  const isProvider = userRole === 'provider';

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          <p className="mt-4 text-gray-600">Loading providers...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center gap-4">
          {onBack && (
            <button
              onClick={onBack}
              className="p-2 hover:bg-gray-100 rounded-lg transition"
            >
              ← Back
            </button>
          )}
          <div>
            <h1 className="text-2xl font-bold">Service Providers</h1>
            <p className="text-sm text-gray-600">{filteredProviders.length} providers available</p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {isProvider && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8 flex items-center gap-3">
            <span className="text-2xl">ℹ️</span>
            <div>
              <p className="font-semibold text-blue-900">You are a Service Provider</p>
              <p className="text-blue-700 text-sm">Service providers cannot book other providers. Please login as a customer to book services.</p>
            </div>
          </div>
        )}

        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-4 top-3 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search providers by name or service..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="flex items-center gap-4">
            <Filter size={20} className="text-gray-600" />
            <select
              value={filterService}
              onChange={(e) => setFilterService(e.target.value)}
              className="px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            >
              {uniqueServices.map(service => (
                <option key={service} value={service}>
                  {service === 'all' ? 'All Services' : service}
                </option>
              ))}
            </select>
          </div>
        </div>

        {error && providers.length === 0 && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
            <p className="text-red-600 font-semibold">{error}</p>
            <button
              onClick={fetchProviders}
              className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Try Again
            </button>
          </div>
        )}

        {filteredProviders.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProviders.map(provider => (
              <div
                key={provider.id}
                className={`bg-white rounded-2xl shadow-md overflow-hidden ${
                  !isProvider ? 'hover:shadow-lg transition cursor-pointer' : 'opacity-75'
                }`}
                onClick={() => !isProvider && onSelectProvider(provider)}
              >
                <div className="h-40 bg-gradient-to-r from-blue-400 to-blue-600 relative overflow-hidden">
                  <img
                    src={provider.dp || `https://api.dicebear.com/7.x/avataaars/svg?seed=${provider.name}`}
                    alt={provider.name}
                    className="w-full h-full object-cover opacity-70"
                  />
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{provider.name}</h3>
                    <p className="text-blue-600 font-semibold text-sm">{provider.service}</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={i < Math.floor(provider.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
                        />
                      ))}
                    </div>
                    <span className="text-sm font-semibold text-gray-900">
                      {provider.rating.toFixed(1)}
                    </span>
                    <span className="text-xs text-gray-600">({provider.reviews} reviews)</span>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-gray-700">
                      <MapPin size={16} className="text-blue-600 flex-shrink-0" />
                      <span className="truncate">{provider.location}</span>
                    </div>

                    <div className="flex items-center gap-2 text-gray-700">
                      <Briefcase size={16} className="text-blue-600 flex-shrink-0" />
                      <span>{provider.experience}</span>
                    </div>

                    <div className="flex items-center gap-2 text-gray-700">
                      <span className="font-semibold">₹{provider.price}</span>
                      <span className="text-xs text-gray-600">/ service</span>
                    </div>
                  </div>

                  {provider.services && provider.services.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {provider.services.slice(0, 2).map((service, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
                        >
                          {service}
                        </span>
                      ))}
                      {provider.services.length > 2 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                          +{provider.services.length - 2} more
                        </span>
                      )}
                    </div>
                  )}

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      if (!isProvider) {
                        onSelectProvider(provider);
                      }
                    }}
                    disabled={isProvider}
                    className={`w-full py-2 rounded-lg font-semibold flex items-center justify-center gap-2 transition ${
                      isProvider
                        ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                    }`}
                  >
                    {isProvider ? 'Providers Cannot Book' : 'Book Now'}
                    {!isProvider && <ChevronRight size={18} />}
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              {providers.length === 0 ? 'No providers available' : 'No providers match your search'}
            </p>
            {providers.length === 0 && (
              <button
                onClick={fetchProviders}
                className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Refresh
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}