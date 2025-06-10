"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import Logo from "./Logo";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll to toggle background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-[#000000] bg-opacity-90" : "bg-transparent"
      } text-white`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-10 font-bebas_Neue text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
          {[
            "HOME",
            "STORY",
            "SERVICES",
            "FUNCTIONAL TRAINING",
            "MERCH",
            "EVENTS",
          ].map((text) => (
            <Link
              key={text}
              href={
                text === "HOME"
                  ? "/"
                  : text === "FUNCTIONAL TRAINING"
                  ? "/ft"
                  : `/${text.toLowerCase()}`
              }
              className="border-b-2 border-b-transparent hover:border-b-white transition-all duration-300"
              onClick={() => setMenuOpen(false)}
            >
              {text}
            </Link>
          ))}
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden text-3xl focus:outline-none"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <HiOutlineMenuAlt3 />
        </button>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#0F0F16] text-white transform transition-transform duration-300 z-50 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-4 py-4 border-b border-gray-700">
          <span className="font-bold text-base sm:text-lg md:text-xl">
            Menu
          </span>
          <button
            onClick={() => setMenuOpen(false)}
            className="text-3xl focus:outline-none"
            aria-label="Close menu"
          >
            <HiOutlineX />
          </button>
        </div>
        <nav className="flex flex-col space-y-4 p-4 text-sm sm:text-base md:text-lg lg:text-xl font-bebas_Neue">
          {["HOME", "STORY", "FUNCTIONAL TRAINING", "MERCH", "EVENTS"].map(
            (text) => (
              <Link
                key={text}
                href={
                  text === "HOME"
                    ? "/"
                    : text === "FUNCTIONAL TRAINING"
                    ? "/ft"
                    : `/${text.toLowerCase()}`
                }
                onClick={() => setMenuOpen(false)}
              >
                {text}
              </Link>
            )
          )}
        </nav>
      </div>
    </header>
  );
}
