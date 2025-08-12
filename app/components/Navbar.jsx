"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { HiOutlineMenuAlt4, HiOutlineX } from "react-icons/hi";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import Logo from "./Logo";
import TopBar from "./TopBar";
import Image from "next/image";
import { Menu } from "lucide-react";

const services = [
  {
    title: "Youth Soccer Training",
    image: "/images/asset7.jpg",
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
    image: "/images/slider/slider5.jpg",
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

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false); // For mobile dropdown toggle

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 1300) {
        setSidebarOpen(false);
        setServicesOpen(false); // close mobile dropdown if sidebar closes
      }
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Shop", href: "/merch" },
    { name: "News & Events", href: "/news" },
    { name: "Download Our App", href: "/app" },
  ];

  return (
    <>
      <nav className="fixed top-0 w-full bg-black text-white z-50 shadow-md">
        <TopBar />
        <div className="max-w-[1300px] mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex flex-row gap-5 justify-between w-full lg:justify-start lg:w-fit">
              <button
                aria-label="Open menu"
                onClick={() => setSidebarOpen(true)}
                className="text-white text-3xl focus:outline-none cursor-pointer"
              >
                <Menu className="opacity-80" />
              </button>

              <Link href="/" className="flex-shrink-0">
                <Logo />
              </Link>
            </div>

            {/* Desktop Nav on right */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link
                href="/contact"
                className="
    px-5 py-2 
    border-2 border-white/80 
    rounded-full 
    text-white 
    uppercase 
    text-xs sm:text-sm md:text-base lg:text-base 2xl:text-lg
    outline-none 
    focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2
    hover:opacity-70 hover:scale-105 
    transition 
    duration-300 ease-in-out
    shadow-sm
  "
              >
                Locations
              </Link>
              <Link
                href="/contact"
                className="px-4 py-1.5 grad rounded-full uppercase hover:opacity-50 transition text-xs sm:text-sm md:text-base lg:text-base 2xl:text-lg"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full grad text-white z-60 transform transition-transform duration-500 ease-in-out
    ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
    w-4/5 sm:w-3/5 md:w-2/5 lg:w-1/3 xl:w-1/4`}
      >
        {/* Close Button */}
        <div className="p-4 absolute top-0 left-0">
          <button
            aria-label="Close menu"
            onClick={() => setSidebarOpen(false)}
            className="text-white text-3xl focus:outline-none"
          >
            <HiOutlineX />
          </button>
        </div>

        {/* Sidebar Nav Links */}
        <nav className="flex flex-col p-4 space-y-4 font-semibold mt-16">
          {navLinks.map((link) => {
            if (link.name === "Services") {
              return (
                <div key={link.name} className="flex flex-col mb-3">
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="flex mb-3 items-center justify-between w-full hover:text-gray-300 transition text-sm sm:text-base md:text-lg font-semibold uppercase focus:outline-none"
                    aria-expanded={servicesOpen}
                  >
                    {link.name}
                    {servicesOpen ? (
                      <HiChevronUp className="ml-2 text-lg" />
                    ) : (
                      <HiChevronDown className="ml-2 text-lg" />
                    )}
                  </button>
                  {servicesOpen && (
                    <div className="ml-4 mt-2 flex flex-col space-y-2">
                      {services.map(({ title, href }) => (
                        <Link
                          key={title}
                          href={href}
                          onClick={() => setSidebarOpen(false)}
                          className="hover:text-gray-300 mb-3 transition text-sm sm:text-base md:text-lg hover:underline"
                        >
                          {title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            } else {
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setSidebarOpen(false)}
                  className="hover:text-gray-300 mb-5 transition text-sm sm:text-base md:text-lg uppercase"
                >
                  {link.name}
                </Link>
              );
            }
          })}
          <Link
            href="/contact"
            onClick={() => setSidebarOpen(false)}
            className="px-10 py-1.5 w-max rounded-full uppercase bg-white text-black transition text-sm sm:text-base md:text-lg"
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </>
  );
}
