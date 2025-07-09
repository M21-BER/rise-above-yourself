"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Youth Soccer Training",
    image: "/images/slider/slider2.jpg",
    description:
      "Our youth soccer training is built to help young players get stronger, faster, and more confident...",
    href: "/services/youth-soccer-training",
  },
  {
    title: "Soccer Camps & Events",
    image: "/images/asset1.jpg",
    description:
      "We occasionally host soccer camps and special events focused on skill development and team-building...",
    href: "/services/soccer-camps-events",
  },
  {
    title: "Functional / Group Training",
    image: "/images/slider/slider4.jpg",
    description:
      "Focuses on building strength, stability, and mobility that directly improves the way you move...",
    href: "/services/functional-training",
  },

  {
    title: "Personal Training",
    image: "/images/asset5.jpg",
    description: "Our personal training is focused on you and your goals...",
    href: "/services/personal-training",
  },
];

const FunctionalShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleInteraction = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* Responsive background image */}
      <Image
        src={services[currentIndex].image}
        alt={services[currentIndex].title}
        fill
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Cards */}
      <div className="relative z-10 h-full flex items-end">
        <div className="h-full flex gap-4 overflow-x-auto  pb-10 mx-auto no-scrollbar">
          {services.map((service, index) => {
            const isActive = index === currentIndex;

            return (
              <div
                key={index}
                onMouseEnter={() => handleInteraction(index)}
                onFocus={() => handleInteraction(index)}
                className="flex items-end justify-center flex-shrink-0 min-w-[250px] max-w-xs"
              >
                <div
                  className={`w-full p-6 shadow-lg border-t-2 border-white cursor-pointer transition-colors duration-500 ease-in-out ${
                    isActive
                      ? "bg-white/90 text-black border-white"
                      : "bg-black/40 text-white border-transparent hover:bg-white/90 hover:text-black hover:border-white"
                  }`}
                  tabIndex={0}
                  style={{ minHeight: "220px" }}
                >
                  <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                  <p className="text-sm mb-4">{service.description}</p>
                  <Link
                    href={service.href}
                    title={`Discover ${service.title}`}
                    className={`text-sm font-semibold underline ${
                      isActive
                        ? "text-red-600 hover:text-red-400"
                        : "text-white hover:text-red-400"
                    }`}
                  >
                    Discover {service.title}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FunctionalShowcase;
