"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import Logo from "./Logo";
import TopBar from "./TopBar";
import Image from "next/image";

const services = [
  {
    title: "Functional Training",
    image: "/images/asset11.jpg",
    description:
      "Focuses on building strength, stability, and mobility that directly improves the way you move...",
    href: "/services/functional-training",
  },
  {
    title: "Youth Soccer Training",
    image: "/images/asset2.jpg",
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
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Functional Training", href: "/ft" },
    { name: "Merch", href: "/merch" },
    { name: "News & Events", href: "/news" },
    { name: "Career", href: "/career" },
  ];

  return (
    <>
      <nav className="fixed top-0 w-full bg-black text-white z-50 shadow-md">
        <TopBar />
        <div className="max-w-[1300px] mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo on left */}
            <Link href="/" className="flex-shrink-0">
              <Logo />
            </Link>

            {/* Desktop Nav on right */}
            <div className="hidden xl:flex items-center space-x-8 font-semibold">
              {/* Links */}
              <div className="flex space-x-6 relative">
                {navLinks.map((link) => {
                  if (link.name === "Services") {
                    return (
                      <div key={link.name} className="relative group pb-2">
                        <div className="uppercase transition text-xs sm:text-sm md:text-base lg:text-base 2xl:text-lg cursor-pointer">
                          {/* Underline only on text hover */}
                          <span className="hover:opacity-50">{link.name}</span>
                        </div>

                        {/* Dropdown content */}
                        <div
                          className="absolute left-0 top-full mt-0 w-[480px] bg-white text-black rounded shadow-lg
                          opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto
                          transition-opacity duration-300 z-50 p-4 grid grid-cols-2 gap-4 border border-gray-200"
                        >
                          {services.map(
                            ({ title, image, description, href }) => (
                              <Link
                                key={title}
                                href={href}
                                className="flex flex-col bg-gray-50 rounded hover:bg-gray-100 border border-transparent hover:border-[rgba(0,0,0,0.1)] transition p-2 cursor-pointer"
                                onClick={() => setSidebarOpen(false)} // just in case
                              >
                                <Image
                                  src={image}
                                  alt={title}
                                  width={200}
                                  height={100}
                                  className="w-full h-24 object-cover rounded mb-2 grayscale "
                                />
                                <h3 className="font-semibold text-sm mb-1 hover:underline">
                                  {title}
                                </h3>
                                <p className="text-xs text-gray-700 line-clamp-3">
                                  {description}
                                </p>
                              </Link>
                            )
                          )}
                        </div>
                      </div>
                    );
                  } else {
                    return (
                      <Link
                        key={link.name}
                        href={link.href}
                        className="uppercase transition text-xs sm:text-sm md:text-base lg:text-base 2xl:text-lg hover:opacity-50"
                      >
                        {link.name}
                      </Link>
                    );
                  }
                })}
              </div>

              {/* CTA Button */}
              <Link
                href="/contact"
                className="px-4 py-1.5 grad rounded uppercase hover:opacity-50 transition text-xs sm:text-sm md:text-base lg:text-base 2xl:text-lg"
              >
                Contact Us
              </Link>
            </div>

            {/* Hamburger menu on mobile */}
            <div className="xl:hidden">
              <button
                aria-label="Open menu"
                onClick={() => setSidebarOpen(true)}
                className="text-white text-3xl focus:outline-none"
              >
                <HiOutlineMenu />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full bg-black text-white z-60 transform transition-transform duration-500 ease-in-out
        ${sidebarOpen ? "translate-x-0" : "translate-x-full"}
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
        <nav className="flex flex-col p-4 space-y-4 font-semibold mt-12">
          {navLinks.map((link) => {
            if (link.name === "Services") {
              return (
                <div key={link.name} className="flex flex-col">
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="flex items-center justify-between w-full hover:text-gray-300 transition text-sm sm:text-base md:text-lg font-semibold uppercase focus:outline-none"
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
                          className="hover:text-gray-300 transition text-sm sm:text-base md:text-lg hover:underline"
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
                  className="hover:text-gray-300 transition text-sm sm:text-base md:text-lg uppercase"
                >
                  {link.name}
                </Link>
              );
            }
          })}
          <Link
            href="/contact"
            onClick={() => setSidebarOpen(false)}
            className="px-4 py-1.5 border border-white rounded uppercase hover:bg-white hover:text-black transition text-sm sm:text-base md:text-lg"
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </>
  );
}
