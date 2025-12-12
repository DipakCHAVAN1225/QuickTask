// import React, { useEffect, useRef } from "react";

// export default function ImageSlider() {
//   const sliderRef = useRef(null);

//   const images = [
//     "https://images.unsplash.com/photo-1581578017423-3ff2a5d2b74b?w=1600",
//     "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600",
//     "https://images.unsplash.com/photo-1597007534195-d4ba16ce3fd8?w=1600",
//     "https://images.unsplash.com/photo-1581094651180-7a4c2d35cc37?w=1600",
//     "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=1600",
//   ];

//   useEffect(() => {
//     const slider = sliderRef.current;
//     let scrollAmount = 0;

//     const interval = setInterval(() => {
//       scrollAmount += slider.clientWidth;

//       if (scrollAmount >= slider.scrollWidth) {
//         scrollAmount = 0;
//       }

//       slider.scrollTo({
//         left: scrollAmount,
//         behavior: "smooth",
//       });
//     }, 4000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="w-full py-6 flex justify-center">
//       <div className="relative w-[90%] max-w-4xl overflow-hidden rounded-xl shadow-lg">

//         {/* Image Track */}
//         <div
//           ref={sliderRef}
//           className="flex overflow-x-scroll snap-x snap-mandatory no-scrollbar"
//           style={{
//             scrollbarWidth: "none",
//             msOverflowStyle: "none",
//           }}
//         >
//           {/* Hide chrome scrollbar */}
//           <style>
//             {`
//               .no-scrollbar::-webkit-scrollbar {
//                 display: none;
//               }
//             `}
//           </style>

//           {images.map((img,) => (
//             <div key={1} className="min-w-full snap-center">
//               <img
//                 src={img}
//                 className="w-full h-[350px] md:h-[450px] object-cover"
//                 alt="slide-img"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
