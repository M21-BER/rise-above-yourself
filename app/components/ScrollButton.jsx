"use client";
import React from "react";
import { FaChevronDown } from "react-icons/fa";

const ScrollButton = ({ id }) => {
  const scrollToNext = () => {
    const nextSection = document.getElementById(id);
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <button
        onClick={scrollToNext}
        aria-label="Scroll to next section"
        className="mt-10 w-16 h-16 rounded-full border-2 border-white flex items-center justify-center cursor-pointer animate-blink"
        style={{ borderWidth: 1, borderColor: "rgba(255,255,255,0.3)" }}
      >
        <FaChevronDown className="w-8 h-8 text-white opacity-60 cursor-pointer " />
      </button>

      <style jsx>{`
        @keyframes blink {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }
        .animate-blink {
          animation: blink 3s infinite;
        }
      `}</style>
    </>
  );
};

export default ScrollButton;
