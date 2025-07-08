import Image from "next/image";
import React from "react";

const Support = () => {
  return (
    <section className="w-full bg-background text-white">
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
          More than a Gym
        </h2>

        <p className=" text-sm sm:text-sm md:text-base lg:text-lg  2xl:text-xl text-white mb-3">
          Ray Athletics is a performance training center founded by athlete and
          coach Rediet Berihun. Built from the ground up, it’s focused on
          functional movement, soccer development, and helping people train with
          discipline and purpose. From youth players to adults, this is where
          real athletes are made.
        </p>
      </div>
    </section>
  );
};

export default Support;
