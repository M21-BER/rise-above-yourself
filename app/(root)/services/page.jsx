"use client";

import { useState } from "react";
import Header from "../../components/Header";
import { FaChild, FaUsers } from "react-icons/fa";
import { GiWeightLiftingUp } from "react-icons/gi";
import { MdPerson } from "react-icons/md";
import { FiChevronDown } from "react-icons/fi";

const services = [
  {
    title: "Functional Training",
    subtitle: "Strength & Mobility",
    icon: GiWeightLiftingUp,
    description:
      "Focuses on building strength, stability, and mobility that directly improves the way you move in real life and in sport. It's about training the body as a connected system, not isolated parts — helping you perform better, move safer, and feel stronger day to day.",
    quote:
      "NO EXPERIENCE NEEDED. JUST SHOW UP, BE READY TO WORK, AND WE'LL GUIDE YOU EVERY STEP OF THE WAY.",
    cta: "BOOK YOUR FIRST SESSION",
  },
  {
    title: "Youth Soccer Training",
    subtitle: "Building Foundational Athletic Skills",
    icon: FaChild,
    description:
      "Our youth soccer training is built to help young players get stronger, faster, and more confident in their game. We focus on overall athletic development including agility, strength, coordination, and speed while creating a space where kids can grow through structure and discipline.",
    quote:
      "NO MATTER THEIR STARTING POINT, EVERY ATHLETE IS WELCOMED WITH PATIENCE, SUPPORT, AND HIGH STANDARDS.",
    cta: "ENROLL NOW",
  },
  {
    title: "Soccer Camps & Events",
    subtitle: "Pop-Ups & Community Training",
    icon: FaUsers,
    description:
      "In addition to regular training, we occasionally host soccer camps and special events focused on skill development, conditioning, and team-building. These are great opportunities for players to train in a high-energy group setting and push themselves alongside others.",
    quote:
      "WE ANNOUNCE ALL UPCOMING CAMPS ON OUR SOCIAL MEDIA AND WEBSITE. BE SURE TO CHECK IN REGULARLY SO YOU DON'T MISS OUT.",
  },
  {
    title: "Personal Training",
    subtitle: "Personalized Coaching",
    icon: MdPerson,
    description:
      "Our personal training is focused on you and your goals. We work together to create a plan that fits your needs and helps you improve safely and effectively.",
    quote:
      "WHETHER YOU'RE NEW TO TRAINING OR LOOKING TO LEVEL UP, YOU'LL GET CONSISTENT SUPPORT AND GUIDANCE EVERY STEP OF THE WAY.",
    cta: "START PRIVATE TRAINING",
  },
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIndex = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="bg-black min-h-screen text-white">
      <Header page="Services" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col gap-6 items-center justify-center">
          {services.map(
            (
              { title, subtitle, icon: Icon, description, quote, cta },
              index
            ) => {
              const isOpen = index === activeIndex;
              return (
                <div
                  key={index}
                  className={`w-full max-w-3xl bg-zinc-900 border border-white/10 rounded-2xl shadow-md overflow-hidden transition-all duration-300 ${
                    isOpen ? "ring-2 ring-[rgba(0,0,0,0.1)]" : ""
                  }`}
                >
                  {/* Card Header */}
                  <button
                    onClick={() => toggleIndex(index)}
                    className={`w-full flex items-center justify-between gap-4 p-5 text-left transition-colors duration-300 ${
                      isOpen ? "bg-[#D00A02]" : "hover:bg-zinc-800"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <Icon
                        className={`text-2xl mt-1 flex-shrink-0 ${
                          isOpen ? "text-white" : "text-[#D00A02]"
                        }`}
                      />
                      <div>
                        <h3 className="text-lg sm:text-xl uppercase font-semibold">
                          {title}
                        </h3>
                        <p
                          className={`text-sm sm:text-base  ${
                            isOpen ? "text-gray-100" : "text-gray-400"
                          }`}
                        >
                          {subtitle}
                        </p>
                      </div>
                    </div>

                    <FiChevronDown
                      className={`text-2xl text-white transition-transform duration-300 ${
                        isOpen ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </button>

                  {/* Expand Content */}
                  <div
                    className={`grid transition-all duration-500 ease-in-out overflow-hidden ${
                      isOpen
                        ? "grid-rows-[1fr] p-6 bg-zinc-950"
                        : "grid-rows-[0fr] p-0"
                    }`}
                  >
                    <div className="overflow-hidden text-center flex flex-col items-center gap-4">
                      <h4 className="text-2xl sm:text-3xl font-bold uppercase">
                        {title}
                      </h4>

                      <p className="text-gray-300 text-sm sm:text-base max-w-2xl">
                        {description}
                      </p>

                      <p className="font-semibold text-sm sm:text-base text-white max-w-xl italic">
                        {quote}
                      </p>

                      {cta && (
                        <button className="mt-4 px-6 py-3 text-sm sm:text-base font-semibold bg-[#D00A02] hover:opacity-80 text-white rounded-full transition">
                          {cta}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
}
