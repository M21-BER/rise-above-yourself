"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const slides = [
  {
    title: "OUR MISSION",
    content: (
      <>
        To empower people to take control of their bodies through intentional
        movement that
        <span className="text-[#D00A02] font-semibold italic">
          {" "}
          builds strength, control, and confidence starting with what they
          already have.
        </span>
      </>
    ),
    image: "/images/gym.jpg",
    sub: "If you can move, you can train. If you can train, you can perform.",
  },
  {
    title: "OUR VALUES",
    content: (
      <>
        We believe everyone is capable of more when they commit to consistent,
        intentional practice rooted in movement and purpose.
      </>
    ),
    image: "/images/asset10.jpg",
    sub: "Discipline > Motivation. Show up daily.",
  },
  {
    title: "OUR BELIEF",
    content: (
      <>
        Strength isn’t built overnight — it comes through consistency,
        discipline, and passion.
      </>
    ),
    image: "/images/gym-image2.jpg",
    sub: "Your effort today builds your strength tomorrow.",
  },
];

export default function MissionSection() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const { title, content, image, sub } = slides[index];

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover grayscale"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </motion.div>
      </AnimatePresence>

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center text-white">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black uppercase font-display tracking-wider mb-4">
          {title}
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-200 max-w-3xl mb-6 leading-relaxed">
          {content}
        </p>
        <p className="italic text-gray-400 text-xs sm:text-sm md:text-base max-w-xl">
          “{sub}”
        </p>
      </div>

      {/* Manual Controls */}
      <div className="absolute inset-0 flex items-center justify-between px-4 z-20">
        <button
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="text-white opacity-30 hover:opacity-100 transition"
        >
          <FaChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
        </button>
        <button
          onClick={nextSlide}
          aria-label="Next Slide"
          className="text-white opacity-30 hover:opacity-100 transition"
        >
          <FaChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
        </button>
      </div>
    </section>
  );
}
