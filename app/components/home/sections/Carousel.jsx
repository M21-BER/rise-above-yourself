"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    { image: "/images/slider/slider1.jpg" },
    { image: "/images/slider/slider2.jpg" },
    { image: "/images/slider/slider3.jpg" },
    { image: "/images/slider/slider4.jpg" },
    { image: "/images/slider/slider5.jpg" },
    { image: "/images/slider/slider6.jpg" },
    { image: "/images/slider/slider7.jpg" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4000); // 4 seconds per slide

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => setCurrentIndex(index);

  return (
    <main className="bg-white h-full py-12">
      {/* Section Header */}
      {/* <div className="text-center mb-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 uppercase tracking-wide">
          Our Collections
        </h2>
      </div> */}

      {/* Carousel */}
      <div className="w-full relative overflow-hidden">
        {/* Image */}
        <div className="relative h-[300px] sm:h-[400px] md:h-[500px]">
          <Image
            src={slides[currentIndex].image}
            alt={`Slide ${currentIndex + 1}`}
            fill
            className="object-contain transition-opacity duration-500 rounded-xl"
          />
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`h-3 w-3 rounded-full transition-colors ${
                currentIndex === idx ? "bg-gray-800" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

export default Carousel;
