"use client";
import Image from "next/image";
import { UpcomingEvent } from "../Texts/Text";
import SlideInFromTop from "../SlideInOnScroll";
import Link from "next/link";

const data = [
  {
    id: "1",
    image: "/images/promo1.jpg",
    title: "Technical Fitness Soccer Camp",
    desc: "Age 9-15",
    link: "event-register",
  },
  {
    id: "2",
    image: "/images/promo2.jpg",
    title: "Youth Soccer Camp",
    desc: "Age 9+",
    link: "event-register",
  },
];

export default function PromoCards() {
  return (
    <div className="flex flex-col items-center py-10">
      {/* Title */}
      <SlideInFromTop>
        <UpcomingEvent />
      </SlideInFromTop>

      {/* Subtitle */}
      <p className="text-gray-700 mt-3 text-center max-w-2xl">
        Join our community for these exciting upcoming camps and clinics
      </p>

      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-8 mt-10">
        {data.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300 w-72 h-[26rem] flex flex-col"
          >
            {/* Bigger Image section */}
            <div className="w-full h-56 relative">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Content section */}
            <div className="p-5 flex flex-col justify-between flex-1">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-600 mt-1">{item.desc}</p>
              </div>
              {item.link && (
                <Link
                  href={`/${item.link}`}
                  className="inline-block mt-3 text-red-600 font-semibold hover:underline"
                >
                  Register
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
