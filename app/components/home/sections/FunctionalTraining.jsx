import Image from "next/image";
import Link from "next/link";
import React from "react";

const FunctionalTraining = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen text-white">
      {/* Image Section */}
      <div className="relative  min-h-[300px] md:min-h-screen w-full">
        <Image
          src="/images/asset11.jpg"
          alt="functional training"
          fill
          className="object-cover w-full h-full grayscale"
          priority
        />
      </div>

      {/* Text Section */}
      <div className="p-8 md:p-16 flex items-center bg-background">
        <div className="max-w-md">
          {/* Gradient underline */}
          <div className="w-20 h-1 mb-6 rounded grad"></div>

          <h2 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-4">
            Functional Training
          </h2>
          <p className="text-sm sm:text-sm md:text-base lg:text-lg leading-relaxed  2xl:text-xl text-gray-300   mb-6">
            We Specialize in functional bodyweight training - building strength,
            control, and mobility that carry beyond the gym.
            <strong className="text-red-600 italic font-bold">
              {" "}
              Because when you own your body, you own everything.
            </strong>
          </p>
          <Link
            href="/ft"
            className="inline-block grad text-white font-semibold text-xs sm:text-sm md:text-base  tracking-wider py-3 px-6 rounded-full opacity-90 hover:opacity-100 transition hover:underline"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FunctionalTraining;
