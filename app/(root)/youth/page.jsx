"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Phone } from "lucide-react";
import VideoPlayer from "../../components/VideoPlayer";
const services = [
  {
    title: "STRENGTH",
    text: "We build real muscle. Not just to lift more, but to move better, support your joints, and handle everyday life with less strain.",
    img: "/images/asset1.jpg",
  },
  {
    title: "MOBILITY",
    text: "Mobility means being able to reach, bend, twist, and move without pain. We train for better range, smoother movement, and long-term joint health.",
    img: "/images/asset2.jpg",
  },
  {
    title: "BALANCE",
    text: "Balance helps you stay in control. Whether you’re walking, lifting, or changing direction, it helps you move through your day with confidence.",
    img: "/images/asset3.jpg",
  },
];
export default function YouthSoccerTraining() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const togglePlayPause = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section className="w-full bg-white pt-20">
      <div className="flex flex-col lg:flex-row items-stretch w-full">
        {/* Left Text Section */}
        <div className="flex-1 flex flex-col justify-center p-6 sm:p-8 lg:p-12">
          <h2 className="font-extrabold text-black text-lg sm:text-xl lg:text-2xl tracking-tight uppercase">
            Youth Soccer training
          </h2>

          <ul className="mt-4 space-y-2 text-sm sm:text-base text-black/80 list-disc list-inside">
            <li>Improve speed and quickness</li>
            <li>Build endurance and stamina</li>
            <li>Enhance ball control and technique</li>
            <li>Develop tactical awareness</li>
            <li>Increase strength and power</li>
            <li>Boost balance and coordination</li>
          </ul>

          <h3 className="mt-6 font-extrabold text-black text-base sm:text-lg uppercase">
            Book Your First Class
          </h3>
          <a
            href="tel:+16194047752"
            className="mt-3 w-fit inline-flex items-center gap-2 grad text-white font-semibold rounded-full px-5 py-3 shadow-lg hover:opacity-90 transition"
          >
            <div className="flex items-center justify-center bg-red-700 rounded-full p-2">
              <Phone className="w-5 h-5" />
            </div>
            <span className="text-sm sm:text-base lg:text-lg">
              +1 (619) 404-7752
            </span>
          </a>
        </div>
        {/* Right Video Section */}
        <VideoPlayer />
      </div>
      <div className="w-full">
        {/* TOP: Black section with responsive padding */}
        <div className="bg-black text-white">
          <div
            className="max-w-screen-2xl mx-auto 
                                px-3 xs:px-4 sm:px-6 lg:px-8
                                pt-8 xs:pt-10 sm:pt-14 lg:pt-20 xl:pt-28
                                pb-16 xs:pb-20 sm:pb-28 lg:pb-40 xl:pb-48"
          >
            <div className="max-w-4xl mx-auto text-center z-20 relative">
              <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-medium leading-relaxed">
                Whether it’s one-on-one or in a small group, every session is
                structured to help you take ownership of your body and build
                lasting habits. The goal isn’t just to work out. It’s to make
                movement part of your lifestyle.
              </p>
              <div className="w-12 sm:w-14 h-1 grad mx-auto mt-3 sm:mt-4"></div>
            </div>
          </div>
        </div>

        {/* CARDS: responsive negative margin for overlap */}
        <div
          className="max-w-screen-2xl mx-auto 
                              px-3 xs:px-4 sm:px-6 lg:px-8
                              -mt-10 xs:-mt-12 sm:-mt-20 lg:-mt-28 xl:-mt-36
                              relative z-10"
        >
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
                  <h3 className="text-base xs:text-lg sm:text-xl lg:text-2xl font-extrabold uppercase">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-xs xs:text-sm sm:text-base lg:text-lg text-black/80 leading-relaxed">
                    {service.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Bottom white section */}
        <div className="bg-white min-h-[30vh] xs:min-h-[35vh] sm:min-h-[40vh]"></div>
      </div>
    </section>
  );
}
