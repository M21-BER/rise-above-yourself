"use client";

import Image from "next/image";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const images = [
  "/images/gym.jpg",
  "/images/gym-image1.jpg",
  "/images/gym-image2.jpg",
  "/images/gym-image3.jpg",
  "/images/gym-image4.jpg",
];

export default function Header() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrev = () =>
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  const goToNext = () =>
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <header className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] overflow-hidden">
      {/* All Images stacked with fade transition */}
      <div className="absolute inset-0 z-0">
        {images.map((img, index) => (
          <Image
            key={index}
            src={img}
            alt={`Slide ${index + 1}`}
            fill
            className={`object-cover object-center absolute transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
            priority={index === currentIndex}
          />
        ))}
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Left Chevron */}
      <button
        onClick={goToPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 text-white p-2 hover:bg-black/30 rounded-full"
        aria-label="Previous"
      >
        <FaChevronLeft size={30} className="cursor-pointer" />
      </button>

      {/* Right Chevron */}
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 text-white p-2 hover:bg-black/30 rounded-full"
        aria-label="Next"
      >
        <FaChevronRight size={30} className="cursor-pointer" />
      </button>
    </header>
  );
}
