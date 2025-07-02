import React from "react";

const Support = () => {
  return (
    <section className="relative w-full py-12 px-12 overflow-hidden">
      {/* Background image */}
      <img
        src="/images/gym-image4.jpg"
        className="w-full h-full absolute inset-0 object-cover grayscale"
        alt="Background"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 text-center py-12 md:py-24">
        <h1 className="text-white text-center text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold mb-6">
          More than a Gym
        </h1>

        <p className=" text-sm sm:text-sm md:text-base lg:text-lg  2xl:text-xl text-white mb-3">
          At R.A.Y Athletics, we respect effort, encourage discipline, and focus
          on growth. Whether you're here to train for sports, stay fit, or
          improve your mindset.
        </p>

        <p className="text-center text-sm sm:text-sm md:text-base lg:text-lg  2xl:text-xl text-white mb-5">
          <strong className="text-red-600 italic font-bold">
            You'll find support and accountability here.
          </strong>
        </p>
      </div>
    </section>
  );
};

export default Support;
