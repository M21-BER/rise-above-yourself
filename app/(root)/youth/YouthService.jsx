"use client";
import Image from "next/image";
import useMountedTranslation from "@/hook/useMountedTranslation";
import React, { useMemo } from "react";

function YouthService() {
  const { t, mounted } = useMountedTranslation();

  const services = useMemo(
    () => [
      {
        title: "Technique",
        name: "technique",
        text: "Mastering ball control, passing, dribbling, and shooting helps young players build confidence and play smarter on the field.",
        img: "/images/slider/slider9.jpg",
      },
      {
        title: "Speed",
        name: "speed",
        text: "Speed means moving quickly and efficiently. It helps players reach the ball faster and keep up with the fast pace of the game.",
        img: "/images/slider/slider10.jpg",
      },
      {
        title: "Agility",
        name: "agility",
        text: "Agility is about changing direction quickly and staying balanced, so players can dodge opponents and react to the game with ease.",
        img: "/images/slider/slider8.jpg",
      },
    ],
    [t, mounted]
  );
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
                                   gap-5 xs:gap-6 sm:gap-8 lg:gap-10 xl:gap-12"
    >
      {services.map((service, idx) => (
        <article
          key={idx}
          className="bg-white border border-[rgba(0,0,0,0.1)] text-black rounded-md overflow-hidden shadow-xl
                                    transform hover:-translate-y-1 transition-transform duration-300"
        >
          {/* Responsive image height */}
          <div
            className="relative w-full h-40 xs:h-44 sm:h-56 md:h-64 lg:h-72 xl:h-80"
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 69%, 0% 100%)",
            }}
          >
            <Image
              src={service.img}
              alt={service.title}
              fill
              className="object-cover"
              priority={idx === 1}
            />
          </div>

          <div className="p-4 xs:p-5 sm:p-6 lg:p-8">
            <h3 className="text-base font-jost xs:text-lg sm:text-xl lg:text-2xl font-medium uppercase">
              {t(`youth_page.list.${service.name}.title`)}
            </h3>
            <p className="mt-2 text-xs xs:text-sm sm:text-base lg:text-lg text-black/80 leading-relaxed">
              {t(`youth_page.list.${service.name}.text`)}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}

export default YouthService;
