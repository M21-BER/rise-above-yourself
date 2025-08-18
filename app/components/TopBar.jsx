"use client";

import { useEffect, useState } from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const TopBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollingDown = currentScrollY > lastScrollY;

      if (scrollingDown && currentScrollY > 50) {
        setIsVisible(false); // hide
      } else {
        setIsVisible(true); // show
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      id="top-bar"
      className={`hidden md:flex px-6 bg-white text-sm text-gray-700 overflow-hidden transition-all duration-300 ease-in-out ${
        isVisible ? "py-2 max-h-20" : "py-0 max-h-0"
      }`}
    >
      <div className="ml-auto flex space-x-6 items-center">
        <p className="flex items-center gap-2  text-background">
          <FaPhoneAlt className="text-black" />
          +1 (619) 404-7752
        </p>
        <p className="flex items-center gap-2   text-background">
          <FaEnvelope className="text-black" />
          info@rayathletics.com
        </p>
      </div>
    </div>
  );
};

export default TopBar;
