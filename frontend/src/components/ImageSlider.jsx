// // import React, { useEffect, useRef } from "react";

// // export default function ImageSlider() {
// //   const sliderRef = useRef(null);

// //   const images = [
// //     "https://images.unsplash.com/photo-1581578017423-3ff2a5d2b74b?w=1600",
// //     "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600",
// //     "https://images.unsplash.com/photo-1597007534195-d4ba16ce3fd8?w=1600",
// //     "https://images.unsplash.com/photo-1581094651180-7a4c2d35cc37?w=1600",
// //     "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=1600",
// //   ];

// //   // AUTO SLIDE
// //   useEffect(() => {
// //     const slider = sliderRef.current;
// //     let scrollAmount = 0;

// //     const interval = setInterval(() => {
// //       if (!slider) return;

// //       scrollAmount += slider.clientWidth;

// //       if (scrollAmount >= slider.scrollWidth) {
// //         scrollAmount = 0;
// //       }

// //       slider.scrollTo({
// //         left: scrollAmount,
// //         behavior: "smooth",
// //       });
// //     }, 4000);

// //     return () => clearInterval(interval);
// //   }, []);

// //   return (
// //     <section className="w-4/5 scroll-smooth ml-40 py-6 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
// //       <div className="overflow-hidden rounded-xl shadow-lg">
// //         {/* SCROLLABLE IMAGE TRACK */}
// //         <div
// //           ref={sliderRef}
// //           className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar"
// //         >
// //           {images.map((img, index) => (
// //             <div
// //               key={index}
// //               className="min-w-full snap-center flex-shrink-0"
// //             >
// //               <img
// //                 src={img}
// //                 className="w-full h-[350px] md:h-[450px] object-cover rounded-xl"
// //                 alt="slider-image"
// //               />
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

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

//   // AUTO SLIDE
//   useEffect(() => {
//     const slider = sliderRef.current;
//     let scrollAmount = 0;

//     const interval = setInterval(() => {
//       if (!slider) return;

//       scrollAmount += slider.clientWidth;

//       // Reset when reaching the end
//       if (scrollAmount >= slider.scrollWidth) {
//         scrollAmount = 0;
//       }

//       slider.scrollTo({
//         left: scrollAmount,
//         behavior: "smooth"
//       });
//     }, 4000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="w-full flex justify-center py-6">
//       <div className="w-4/5 overflow-hidden rounded-xl shadow-lg">
//         <div
//           ref={sliderRef}
//           className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar"
//         >
//           {images.map((img, index) => (
//             <div
//               key={index}
//               className="min-w-full snap-center flex-shrink-0"
//             >
//               <img
//                 src={img}
//                 className="w-full h-[350px] md:h-[450px] object-cover rounded-xl"
//                 alt="slider-img"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import React, { useEffect, useRef } from "react";

export default function ImageSlider() {
  const sliderRef = useRef(null);

  const images = [
    
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600",
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600"
  ];

  // AUTO SLIDER
  useEffect(() => {
    const slider = sliderRef.current;
    let scrollAmount = 0;

    const interval = setInterval(() => {
      if (!slider) return;

      scrollAmount += slider.clientWidth;

      if (scrollAmount >= slider.scrollWidth) {
        scrollAmount = 0;
      }

      slider.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full flex justify-center py-6">
      <div className="w-4/5 overflow-hidden rounded-xl shadow-lg">
        <div
          ref={sliderRef}
          className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar"
        >
          {images.map((img, index) => (
            <div
              key={index}
              className="min-w-full snap-center flex-shrink-0"
            >
              <img
                src={img}
                className="w-full h-[350px] md:h-[450px] object-cover rounded-xl"
                alt="slider"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

