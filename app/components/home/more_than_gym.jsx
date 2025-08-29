"use client";

import Image from "next/image";
import {
  MoreThanGymTextDesc,
  MoreThanGymTextFooter,
  MoreThanGymTextTitle,
} from "../Texts/Text";
import SlideInOnScroll from "../SlideInOnScroll";
import FadeInOnScroll from "../FadeInOnScroll";

function MoreThanGym() {
  return (
    <div className="flex flex-col items-center justify-center  relative bg-white text-center py-10">
      <SlideInOnScroll>
        <MoreThanGymTextTitle />
      </SlideInOnScroll>
      <div className="my-4 h-1 w-16 bg-red-600"></div>
      <div className="max-w-6xl px-5">
        <FadeInOnScroll>
          <MoreThanGymTextDesc />
        </FadeInOnScroll>
      </div>
      <div className="mt-8 my-10">
        <Image
          src="/images/circle-logo-black.PNG" // Replace with actual logo path
          alt="Ray Athletics Logo"
          width={150}
          height={150}
          className="opacity-50"
        />
      </div>
      <div className="max-w-6xl  px-5">
        <FadeInOnScroll>
          <MoreThanGymTextFooter />
        </FadeInOnScroll>
      </div>
    </div>
  );
}

export default MoreThanGym;
