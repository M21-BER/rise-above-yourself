"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import Logo from "./Logo";

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 1300) {
        setSidebarOpen(false);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { name: "Services", href: "/services" },
    { name: "Functional Training", href: "/ft" },
    { name: "Merch", href: "/merch" },
    { name: "News & Events", href: "/news" },
    { name: "About", href: "/about" },
  ];

  return (
    <>
      <nav className="fixed top-0 w-full bg-black text-white z-50 shadow-md">
        <div className="max-w-[1300px] mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo on left */}
            <Link href="/" className="flex-shrink-0">
              <Logo />
            </Link>

            {/* Desktop Nav on right */}
            <div className="hidden xl:flex items-center space-x-8 font-semibold">
              {/* Links */}
              <div className="flex space-x-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="hover:text-gray-300 uppercase transition text-xs sm:text-sm md:text-base lg:text-base 2xl:text-lg"
                  >
                    {link.name}
                  </Link>
                ))}
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
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setSidebarOpen(false)}
              className="hover:text-gray-300 transition text-sm sm:text-base md:text-lg"
            >
              {link.name}
            </Link>
          ))}
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
