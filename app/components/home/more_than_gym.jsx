"use client";

import Image from "next/image";

function MoreThanGym() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center">
      <h1 className="text-4xl font-bold text-red-600 uppercase">
        More than a Gym
      </h1>
      <div className="my-4 h-1 w-16 grad"></div>
      <div className="max-w-6xl px-5">
        <p className="text-lg text-gray-700 ">
          Ray Athletics is a performance training center founded by athlete and
          coach Rediet Berihu. Built from the ground up, it’s focused on
          functional movement, soccer development, and helping people train with
          discipline and purpose.
        </p>
      </div>
      <div className="my-8">
        <Image
          src="/images/circle-logo-black.PNG" // Replace with actual logo path
          alt="Ray Athletics Logo"
          width={150}
          height={150}
          className="opacity-50"
        />
      </div>
      <div className="max-w-6xl px-5">
        <p className="text-lg text-gray-700 max-w-5xl">
          From youth players to adults, this is where real athletes are made.
        </p>
      </div>
    </div>
  );
}

export default MoreThanGym;
