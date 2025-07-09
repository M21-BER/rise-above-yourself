// "use client";

// import Image from "next/image";
// import React, { useEffect, useRef, useState } from "react";
// import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

// const slides = [
//   { image: "/images/slider/slider1.jpg" },
//   { image: "/images/slider/slider2.jpg" },
//   { image: "/images/slider/slider3.jpg" },
//   { image: "/images/slider/slider4.jpg" },
//   { image: "/images/slider/slider5.jpg" },
//   { image: "/images/slider/slider6.jpg" },
//   { image: "/images/slider/slider7.jpg" },
// ];

// const Galleries = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [fade, setFade] = useState(false);
//   const intervalRef = useRef;

//   const clearSliderInterval = () => {
//     if (intervalRef.current) {
//       clearInterval(intervalRef.current);
//       intervalRef.current = null;
//     }
//   };

//   const startSliderInterval = () => {
//     clearSliderInterval();
//     intervalRef.current = setInterval(() => {
//       handleSlideChange("next");
//     }, 5000); // 5 sec
//   };

//   const handleSlideChange = (direction) => {
//     setFade(true);
//     setTimeout(() => {
//       setCurrentIndex((prev) => {
//         if (direction === "next") return (prev + 1) % slides.length;
//         return prev === 0 ? slides.length - 1 : prev - 1;
//       });
//       setFade(false);
//     }, 300);
//   };

//   const handleClick = (direction) => {
//     clearSliderInterval(); // stop auto-slide
//     handleSlideChange(direction);
//     startSliderInterval(); // restart auto-slide
//   };

//   useEffect(() => {
//     startSliderInterval();
//     return clearSliderInterval;
//   }, []);

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-1 min-h-screen text-white">
//       {/* Image Slider */}
//       <div className="relative min-h-[300px] md:min-h-screen w-full overflow-hidden">
//         <Image
//           key={slides[currentIndex].image}
//           src={slides[currentIndex].image}
//           alt="Gallery Slide"
//           fill
//           className={`object-cover w-full h-full transition-opacity duration-500 ${
//             fade ? "opacity-0" : "opacity-100"
//           }`}
//           priority
//         />

//         {/* Overlay Controls */}
//         <div className="absolute inset-0 flex justify-between items-center px-4 z-10">
//           <button
//             onClick={() => handleClick("prev")}
//             className="bg-black/50 hover:bg-black/70 p-2 rounded-full transition"
//           >
//             <FiChevronLeft size={28} />
//           </button>
//           <button
//             onClick={() => handleClick("next")}
//             className="bg-black/50 hover:bg-black/70 p-2 rounded-full transition"
//           >
//             <FiChevronRight size={28} />
//           </button>
//         </div>

//         {/* Indicators */}
//         <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
//           {slides.map((_, idx) => (
//             <div
//               key={idx}
//               className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                 currentIndex === idx ? "bg-white" : "bg-white/40"
//               }`}
//             ></div>
//           ))}
//         </div>
//       </div>

//       {/* Text Section */}
//       <div className="p-8 md:p-16 flex items-center bg-background">
//         <div className="max-w-md">
//           <div className="w-20 h-1 mb-6 rounded grad"></div>
//           <h2 className="font-bold text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-4">
//             Gallery
//           </h2>
//           <p className="text-sm sm:text-sm md:text-base lg:text-lg leading-relaxed 2xl:text-xl text-gray-300 mb-6">
//             Our gallery captures the relentless spirit of movement and mastery.
//             From sweat to stillness, every frame tells a story of growth and
//             grit. Explore the moments where trainers rise above limits and
//             redefine strength.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Galleries;

"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const slides = [
  { image: "/images/slider/slider1.jpg" },
  { image: "/images/slider/slider2.jpg" },
  { image: "/images/slider/slider3.jpg" },
  { image: "/images/slider/slider4.jpg" },
  { image: "/images/slider/slider5.jpg" },
  { image: "/images/slider/slider6.jpg" },
  { image: "/images/slider/slider7.jpg" },
];

const Galleries = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const intervalRef = useRef(null);

  const clearSliderInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const startSliderInterval = () => {
    clearSliderInterval();
    intervalRef.current = setInterval(() => {
      handleSlideChange("next");
    }, 5000);
  };

  const handleSlideChange = (direction) => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex((prev) =>
        direction === "next"
          ? (prev + 1) % slides.length
          : prev === 0
          ? slides.length - 1
          : prev - 1
      );
      setFade(false);
    }, 300);
  };

  const handleClick = (direction) => {
    clearSliderInterval();
    handleSlideChange(direction);
    startSliderInterval();
  };

  useEffect(() => {
    startSliderInterval();
    return clearSliderInterval;
  }, []);

  return (
    <section className="w-full min-h-screen flex flex-col-reverse lg:flex-row items-stretch bg-black text-white">
      {/* Text Left */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-16 bg-background relative z-20">
        <div className="max-w-xl">
          <span className="block w-16 h-1 grad mb-6 rounded" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Gallery</h2>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed">
            Explore the moments that define transformation — from sweat-soaked
            breakthroughs to team celebrations. Our gallery tells the story of
            resilience, community, and performance in motion.
          </p>
          <p className="text-base md:text-lg text-gray-300 mt-4">
            Every image is a testament to the energy inside Ray Athletics. This
            isn’t just a gym. It’s where the grind meets greatness, and growth
            becomes a lifestyle.
          </p>
        </div>
      </div>

      {/* Image Slider Right */}
      <div className="relative w-full lg:w-1/2 h-[300px] md:h-[500px] lg:h-auto">
        <Image
          key={slides[currentIndex].image}
          src={slides[currentIndex].image}
          alt="Gallery Slide"
          fill
          priority
          className={`object-cover transition-opacity duration-500 ${
            fade ? "opacity-0" : "opacity-100"
          }`}
        />

        {/* Controls */}
        <div className="absolute inset-0 flex justify-between items-center px-4 z-10">
          <button
            onClick={() => handleClick("prev")}
            className="bg-black/40 hover:bg-black/70 p-2 rounded-full transition"
          >
            <FiChevronLeft size={28} />
          </button>
          <button
            onClick={() => handleClick("next")}
            className="bg-black/40 hover:bg-black/70 p-2 rounded-full transition"
          >
            <FiChevronRight size={28} />
          </button>
        </div>

        {/* Indicators */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {slides.map((_, idx) => (
            <div
              key={idx}
              className={`w-3 h-3 rounded-full border transition-all duration-300 ${
                currentIndex === idx ? "bg-white" : "border-white/40"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Galleries;
