// "use client";
// import { useState } from "react";
// import Image from "next/image";
// import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

// const topSlides = [
//   {
//     title: "OUR MISSION",
//     content: (
//       <>
//         To empower people to take control of their bodies through intentional
//         movement that{" "}
//         <span className="text-red-700 font-semibold italic">
//           builds strength, control, and confidence starting with what they
//           already have.
//         </span>
//       </>
//     ),
//   },
//   {
//     title: "OUR VALUES",
//     content: (
//       <>
//         We believe everyone is capable of more when they commit to consistent,
//         intentional practice rooted in movement and purpose.
//       </>
//     ),
//   },
//   {
//     title: "OUR BELIEF",
//     content: (
//       <>
//         Strength isn’t built overnight — it comes through consistency,
//         discipline, and passion.
//       </>
//     ),
//   },
// ];

// const bottomSlides = [
//   {
//     text: "EVERYBODY IS AN ATHLETE",
//     sub: "If you can move, you can train. If you can train, you can perform.",
//     image: "/images/gym-image1.jpg",
//   },
//   {
//     text: "MOVE WITH PURPOSE",
//     sub: "Training is more than reps – it's about intention.",
//     image: "/images/gym-image2.jpg",
//   },
//   {
//     text: "CONSISTENCY WINS",
//     sub: "Your effort today builds your strength tomorrow.",
//     image: "/images/gym-image3.jpg",
//   },
// ];

// export default function MissionSlider() {
//   const [topIndex, setTopIndex] = useState(0);
//   const [bottomIndex, setBottomIndex] = useState(0);

//   const prevTop = () =>
//     setTopIndex((prev) => (prev === 0 ? topSlides.length - 1 : prev - 1));
//   const nextTop = () =>
//     setTopIndex((prev) => (prev === topSlides.length - 1 ? 0 : prev + 1));

//   const prevBottom = () =>
//     setBottomIndex((prev) => (prev === 0 ? bottomSlides.length - 1 : prev - 1));
//   const nextBottom = () =>
//     setBottomIndex((prev) => (prev === bottomSlides.length - 1 ? 0 : prev + 1));

//   return (
//     <section className="w-full min-h-screen flex flex-col my-10">
//       {/* Top Text Slider */}
//       <div className="w-full h-[30vh] sm:h-[35vh] bg-white flex items-center justify-center px-6 text-center relative">
//         <div className="max-w-4xl">
//           <h2 className="text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black uppercase font-display">
//             {topSlides[topIndex].title}
//           </h2>
//           <div className="text-black mt-4 text-sm sm:text-base md:text-lg font-medium">
//             {topSlides[topIndex].content}
//           </div>
//         </div>

//         {/* Arrows for Top */}
//         <button
//           onClick={prevTop}
//           aria-label="Previous Top Slide"
//           className="absolute left-3 top-1/2 -translate-y-1/2 z-20 text-black opacity-30 hover:opacity-100 transition-opacity"
//         >
//           <FaChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
//         </button>
//         <button
//           onClick={nextTop}
//           aria-label="Next Top Slide"
//           className="absolute right-3 top-1/2 -translate-y-1/2 z-20 text-black opacity-30 hover:opacity-100 transition-opacity"
//         >
//           <FaChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
//         </button>
//       </div>

//       {/* Bottom Image + Quote Slider */}
//       <div className="w-full h-[70vh] relative overflow-hidden">
//         <Image
//           src={bottomSlides[bottomIndex].image}
//           alt={bottomSlides[bottomIndex].text}
//           fill
//           className="object-cover grayscale transition-opacity duration-700 ease-in-out"
//           priority
//         />
//         <div className="absolute inset-0 bg-black/50 z-10 flex items-center justify-center px-6 text-center flex-col">
//           <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white uppercase font-display">
//             {bottomSlides[bottomIndex].text}
//           </h3>
//           <p className="mt-4 text-white text-sm sm:text-base md:text-lg font-light max-w-2xl italic">
//             “{bottomSlides[bottomIndex].sub}”
//           </p>
//         </div>

//         {/* Arrows for Bottom */}
//         <button
//           onClick={prevBottom}
//           aria-label="Previous Bottom Slide"
//           className="absolute left-3 top-1/2 -translate-y-1/2 z-20 text-white opacity-30 hover:opacity-100 transition-opacity"
//         >
//           <FaChevronLeft className="w-6 h-6 sm:w-10 sm:h-10" />
//         </button>
//         <button
//           onClick={nextBottom}
//           aria-label="Next Bottom Slide"
//           className="absolute right-3 top-1/2 -translate-y-1/2 z-20 text-white opacity-30 hover:opacity-100 transition-opacity"
//         >
//           <FaChevronRight className="w-6 h-6 sm:w-10 sm:h-10" />
//         </button>
//       </div>
//     </section>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const topSlides = [
  {
    title: "OUR MISSION",
    content: (
      <>
        To empower people to take control of their bodies through intentional
        movement that
        <span className="text-red-700 font-semibold italic">
          {" "}
          builds strength, control, and confidence starting with what they
          already have.
        </span>
      </>
    ),
  },
  {
    title: "OUR VALUES",
    content: (
      <>
        We believe everyone is capable of more when they commit to consistent,
        intentional practice rooted in movement and purpose.
      </>
    ),
  },
  {
    title: "OUR BELIEF",
    content: (
      <>
        Strength isn’t built overnight — it comes through consistency,
        discipline, and passion.
      </>
    ),
  },
];

const bottomSlides = [
  {
    text: "EVERYBODY IS AN ATHLETE",
    sub: "If you can move, you can train. If you can train, you can perform.",
    image: "/images/gym-image1.jpg",
  },
  {
    text: "MOVE WITH PURPOSE",
    sub: "Training is more than reps – it's about intention.",
    image: "/images/gym-image2.jpg",
  },
  {
    text: "CONSISTENCY WINS",
    sub: "Your effort today builds your strength tomorrow.",
    image: "/images/gym-image3.jpg",
  },
];

export default function MissionSlider() {
  const [topIndex, setTopIndex] = useState(0);
  const [bottomIndex, setBottomIndex] = useState(0);

  const nextSlide = () => {
    setTopIndex((prev) => (prev + 1) % topSlides.length);
    setBottomIndex((prev) => (prev + 1) % bottomSlides.length);
  };

  const prevSlide = () => {
    setTopIndex((prev) => (prev - 1 + topSlides.length) % topSlides.length);
    setBottomIndex(
      (prev) => (prev - 1 + bottomSlides.length) % bottomSlides.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full min-h-screen flex flex-col my-10">
      {/* Top Text Slider */}
      <div className="w-full h-[30vh] sm:h-[35vh] bg-[#f2f2f2] flex items-center justify-center px-6 text-center relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={topIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <h2 className="text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black uppercase font-display">
              {topSlides[topIndex].title}
            </h2>
            <div className="text-black mt-4 text-sm sm:text-base md:text-lg font-medium">
              {topSlides[topIndex].content}
            </div>
          </motion.div>
        </AnimatePresence>

        <button
          onClick={prevSlide}
          aria-label="Previous Top Slide"
          className="absolute left-3 top-1/2 -translate-y-1/2 z-20 text-black opacity-30 hover:opacity-100 transition-opacity"
        >
          <FaChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
        </button>
        <button
          onClick={nextSlide}
          aria-label="Next Top Slide"
          className="absolute right-3 top-1/2 -translate-y-1/2 z-20 text-black opacity-30 hover:opacity-100 transition-opacity"
        >
          <FaChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
        </button>
      </div>

      {/* Bottom Image + Quote Slider */}
      <div className="w-full h-[70vh] relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={bottomIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0"
          >
            <Image
              src={bottomSlides[bottomIndex].image}
              alt={bottomSlides[bottomIndex].text}
              fill
              className="object-cover grayscale"
              priority
            />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 bg-black/50 z-10 flex items-center justify-center px-6 text-center flex-col">
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white uppercase font-display">
            {bottomSlides[bottomIndex].text}
          </h3>
          <p className="mt-4 text-white text-sm sm:text-base md:text-lg font-light max-w-2xl italic">
            “{bottomSlides[bottomIndex].sub}”
          </p>
        </div>

        <button
          onClick={prevSlide}
          aria-label="Previous Bottom Slide"
          className="absolute left-3 top-1/2 -translate-y-1/2 z-20 text-white opacity-30 hover:opacity-100 transition-opacity"
        >
          <FaChevronLeft className="w-6 h-6 sm:w-10 sm:h-10" />
        </button>
        <button
          onClick={nextSlide}
          aria-label="Next Bottom Slide"
          className="absolute right-3 top-1/2 -translate-y-1/2 z-20 text-white opacity-30 hover:opacity-100 transition-opacity"
        >
          <FaChevronRight className="w-6 h-6 sm:w-10 sm:h-10" />
        </button>
      </div>
    </section>
  );
}
