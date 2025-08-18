"use client";
import Image from "next/image";
import useMountedTranslation from "@/hook/useMountedTranslation";
import React, { useMemo } from "react";

function GroupService() {
  const { t, mounted } = useMountedTranslation();

  const services = useMemo(
    () => [
      {
        title: "Strength",
        name: "strength",
        text: "We build real muscle. Not just to lift more, but to move better, support your joints, and handle everyday life with less strain.",
        img: "/images/slider/slider13.jpg",
      },
      {
        title: "Mobility",
        name: "mobility",
        text: "Mobility means being able to reach, bend, twist, and move without pain. We train for better range, smoother movement, and long-term joint health.",
        img: "/images/slider/slider12.jpg",
      },
      {
        title: "Balance",
        name: "balance",
        text: "Balance helps you stay in control. Whether you’re walking, lifting, or changing direction, it helps you move through your day with confidence.",
        img: "/images/slider/slider5.jpg",
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
            <h3 className="text-base font-cinzel xs:text-lg sm:text-xl lg:text-2xl font-extrabold uppercase">
              {t(`group_page.list.${service.name}.title`)}
            </h3>
            <p className="mt-2 text-xs xs:text-sm sm:text-base lg:text-lg text-black/80 leading-relaxed">
              {t(`group_page.list.${service.name}.text`)}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}

export default GroupService;
