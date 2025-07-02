"use client";
import React from "react";
import { FaChevronDown } from "react-icons/fa";

const Functional = () => {
  // Scroll handler
  const scrollToNext = () => {
    const nextSection = document.getElementById("next-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image or Video */}
      <div className="absolute inset-0">
        <img
          src="/images/gym-image3.jpg"
          alt="Functional Training Hero"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center text-white">
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-wide max-w-4xl leading-tight drop-shadow-md">
          Building the Next Generation of{" "}
          <span className="text-[#D00A02]">Legends</span>
        </h1>

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
      </div>
    </section>
  );
};

export default Functional;
