"use client";

import Image from "next/image";
import {
  MoreThanGymTextDesc,
  MoreThanGymTextFooter,
  MoreThanGymTextTitle,
} from "../Texts/Text";

function MoreThanGym() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center">
      <MoreThanGymTextTitle />
      <div className="my-4 h-1 w-16 bg-red-600"></div>
      <div className="max-w-6xl px-5">
        <MoreThanGymTextDesc />
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
        <MoreThanGymTextFooter />
      </div>
    </div>
  );
}

export default MoreThanGym;
