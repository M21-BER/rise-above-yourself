"use client";
import { useState } from "react";
import Header from "../../components/Header";
import { FaChild, FaUsers } from "react-icons/fa";
import { GiWeightLiftingUp } from "react-icons/gi";
import { MdPerson } from "react-icons/md";
import CheckItem from "@/app/components/CheckItem";

const services = [
  {
    title: "Adult Functional Training",
    subtitle: "Strength & mobility for all adults",
    icon: GiWeightLiftingUp,
    content:
      "This program focuses on improving strength, mobility, and endurance through functional movement patterns tailored for adults of all levels.",
    list: [
      "Train to own your body.",
      "This group-based program focuses on bodyweight mastery, strength, mobility, and endurance.",
      "You'll learn how to move better, feel stronger, and build discipline through high-intensity, full-body workouts.",
      "Functional strength & conditioning",
      "Core & mobility training",
      "Endurance + explosiveness",
      "For all levels — we scale with you",
      "Who it's for: Adults of all fitness levels who want real results and a community to push them.",
    ],
  },
  {
    title: "Youth Athlete Development (Ages 9–15)",
    subtitle: "Building foundational athletic skills",
    icon: FaChild,
    content:
      "A foundational program for young athletes focusing on agility, coordination, strength, and sportsmanship in a supportive environment.",
    list: [
      "Discipline. Confidence. Movement.",
      "We help young athletes build a strong foundation through age-appropriate functional training.",
      "It's not just about getting stronger — it's about building focus, self-control, and pride through movement.",
      "Bodyweight training",
      "Speed, agility & coordination",
      "Mental toughness & discipline",
      "Positive, structured environment",
      "Who it's for: Youth with or without sports backgrounds, ready to grow in strength and mindset.",
    ],
  },
  {
    title: "Pop-Ups & Community Training",
    subtitle: "Group workouts & fitness events",
    icon: FaUsers,
    content:
      "Seasonal group workouts hosted in the community for fun, fitness, and connection. Open to all skill levels.",
    list: [
      "We bring the energy to you.",
      "We host outdoor bootcamps, school sessions, and community pop-ups throughout the DMV area.",
      "These sessions are perfect for schools, youth programs, teams, or organizations who want to bring fitness into their space.",
      "Group-based movement workshops",
      "Performance + mindset coaching",
      "Great for schools, rec centers, nonprofits",
      "Who it's for: Community partners looking to host an engaging, movement-based session.",
      "Ready to Train?",
      "Whether you're building your foundation or breaking plateaus, Ray Athletics is here to push you forward.",
      "We don't just train athletes — we build them.",
    ],
  },
  {
    title: "1-on-1 Training",
    subtitle: "Personalized coaching & progress",
    icon: MdPerson,
    content:
      "Personalized training sessions tailored to individual goals, mobility needs, and performance tracking.",
    list: [
      "Customized coaching. Zero distractions.",
      "For those looking for personalized attention, we offer private sessions built around your specific goals.",
      "Whether you're recovering from injury, training for a sport, or just starting out — we meet you where you are.",
      "Customized programming",
      "Technique corrections",
      "Mobility & injury prevention",
      "Goal-specific training blocks",
      "Who it's for: Adults or youth who want hands-on, focused support.",
    ],
  },
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      <Header page="Services" />

      {/* Container with wide spacing and vertical padding */}
      <div className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-20 py-10">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar - 20% */}
          <div className="w-full md:w-2/5 flex flex-col gap-4 border-r-2 border-red-500 pr-4">
            {services.map(({ title, subtitle, icon: Icon }, index) => {
              const isActive = index === activeIndex;
              return (
                <div
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`cursor-pointer w-full flex items-start gap-3 p-4 rounded-lg shadow-md transition duration-200 ${
                    isActive
                      ? "red_grad_bg text-white"
                      : "bg-zinc-950 border border-[rgba(255,255,255,0.1)] text-white hover:shadow-lg"
                  }`}
                >
                  <Icon
                    className={`text-2xl mt-1 ${
                      isActive ? "text-white" : "text-red-500"
                    }`}
                  />
                  <div className="flex-1">
                    <h3 className="text-sm sm:text-base md:text-lg font-semibold">
                      {title}
                    </h3>
                    <p
                      className={`text-xs sm:text-sm ${
                        isActive ? " text-white" : "text-gray-400"
                      }`}
                    >
                      {subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Content - 80% */}
          <div className="w-full md:w-4/5 p-2 sm:p-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-white">
              {services[activeIndex].title}
            </h2>
            <div>
              {services[activeIndex].list.map((item, key) => {
                return (
                  <div key={key}>
                    <CheckItem
                      text={item}
                      addon="text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl mb-3"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
