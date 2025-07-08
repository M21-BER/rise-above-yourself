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
  const intervalRef = useRef;

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
    }, 5000); // 5 sec
  };

  const handleSlideChange = (direction) => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex((prev) => {
        if (direction === "next") return (prev + 1) % slides.length;
        return prev === 0 ? slides.length - 1 : prev - 1;
      });
      setFade(false);
    }, 300);
  };

  const handleClick = (direction) => {
    clearSliderInterval(); // stop auto-slide
    handleSlideChange(direction);
    startSliderInterval(); // restart auto-slide
  };

  useEffect(() => {
    startSliderInterval();
    return clearSliderInterval;
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen text-white">
      {/* Image Slider */}
      <div className="relative min-h-[300px] md:min-h-screen w-full overflow-hidden">
        <Image
          key={slides[currentIndex].image}
          src={slides[currentIndex].image}
          alt="Gallery Slide"
          fill
          className={`object-cover w-full h-full transition-opacity duration-500 ${
            fade ? "opacity-0" : "opacity-100"
          }`}
          priority
        />

        {/* Overlay Controls */}
        <div className="absolute inset-0 flex justify-between items-center px-4 z-10">
          <button
            onClick={() => handleClick("prev")}
            className="bg-black/50 hover:bg-black/70 p-2 rounded-full transition"
          >
            <FiChevronLeft size={28} />
          </button>
          <button
            onClick={() => handleClick("next")}
            className="bg-black/50 hover:bg-black/70 p-2 rounded-full transition"
          >
            <FiChevronRight size={28} />
          </button>
        </div>

        {/* Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {slides.map((_, idx) => (
            <div
              key={idx}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === idx ? "bg-white" : "bg-white/40"
              }`}
            ></div>
          ))}
        </div>
      </div>

      {/* Text Section */}
      <div className="p-8 md:p-16 flex items-center bg-white">
        <div className="max-w-md">
          <div className="w-20 h-1 mb-6 rounded grad"></div>
          <h2 className="font-bold text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-4">
            Galleries
          </h2>
          <p className="text-sm sm:text-sm md:text-base lg:text-lg leading-relaxed 2xl:text-xl text-gray-900 mb-6">
            Our gallery captures the relentless spirit of movement and mastery.
            From sweat to stillness, every frame tells a story of growth and
            grit. Explore the moments where trainers rise above limits and
            redefine strength.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Galleries;
