"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import CheckItem from "../../CheckItem";

const contentData = [
  {
    title: "R.A.Y",
    subtitle: "R.A.Y. = Rise Above Yourself",
    description:
      "This isn’t about competing with others. It’s about beating your own excuses, doubts, and limits. It’s about showing up every day stronger than the day before — physically, mentally, and emotionally.",
    image: "/images/img1.jpg",
    checks: [
      "Crush excuses with consistent discipline",
      "Strengthen yourself mentally and emotionally",
      "Progress each day beyond your past self",
    ],
  },
  {
    title: "Our Space",
    subtitle: "Where discipline becomes a lifestyle",
    description:
      "More than a gym, Ray Athletics is a community. A place where effort is respected, discipline is built, and growth is the only option. Whether you’re training for sport, fitness, or life, you belong here.",
    image: "/images/img2.jpg",
    checks: [
      "Train with purpose in a like-minded community",
      "Build discipline through consistency",
      "Grow mentally, physically, and socially",
    ],
  },
  {
    title: "Our Training",
    subtitle: "Own your body, own your power",
    description:
      "We specialize in functional bodyweight training — building strength, control, and mobility that carry over beyond the gym. Because when you own your body, you own your life.",
    image: "/images/img3.jpg",
    checks: [
      "Master bodyweight control and movement",
      "Build real-world strength and mobility",
      "Train your body and mind, not just your muscles",
    ],
  },
];

export default function RAYMeaning() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % contentData.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + contentData.length) % contentData.length);
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % contentData.length);
  };

  const current = contentData[index];

  return (
    <section className="relative  text-white py-20 px-6 sm:px-10 md:px-20">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 mb-10">
        {/* Text Section */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="space-y-6"
            >
              <h2 className="text-4xl sm:text-5xl font-allerta_stencil font-bold bg-gradient-to-r from-red-600 via-red-400 to-red-600 bg-clip-text text-transparent py-2">
                {current.title}
              </h2>
              <p className="text-lg sm:text-xl font-semibold">
                {current.subtitle}
              </p>
              <p className="text-base sm:text-lg text-gray-300 max-w-prose mx-auto md:mx-0">
                {current.description}
              </p>
              <div className="space-y-3 pt-4">
                {current.checks?.map((check, i) => (
                  <CheckItem key={i} text={check} />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Image Section */}
        <div className="flex-1 w-full">
          <div className="relative w-full h-[360px] md:h-[320px] rounded-sm overflow-hidden shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.image}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={current.image}
                  alt={current.title}
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Chevron Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-6 text-gray-300">
        <button onClick={handlePrev} aria-label="Previous">
          <FaChevronLeft size={30} />
        </button>
        <button onClick={handleNext} aria-label="Next">
          <FaChevronRight size={30} />
        </button>
      </div>
    </section>
  );
}
