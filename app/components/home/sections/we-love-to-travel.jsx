import Image from "next/image";
import React from "react";

const Support = () => {
  return (
    <section className="w-full bg-[#s] text-white">
      {/* Full width image with fixed height, no border radius or padding */}
      <div className="relative w-full h-[40vh] md:h-[50vh]">
        <Image
          src="/images/gym-image4.jpg"
          alt="Travel"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Text container below image, centered */}
      <div className="max-w-xl mx-auto text-center px-4 py-8 md:py-12">
        {/* Gradient underline */}
        <div className="w-20 h-1 mb-6 mx-auto rounded grad"></div>

        <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4">
          We love to travel
        </h2>

        <p className="font-light text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
          Iterative approaches to corporate strategy foster collaborative
          thinking to further the overall value proposition.
        </p>
      </div>
    </section>
  );
};

export default Support;
