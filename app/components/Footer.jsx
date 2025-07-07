"use client";

import Image from "next/image";
import {
  FaInstagram,
  FaFacebook,
  FaTiktok,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#fff] text-gray-800 px-6 sm:px-8 lg:px-16 py-12 text-sm relative">
      <div className="max-w-7xl mx-auto space-y-12 pl-4 sm:pl-8 md:pl-12">
        {/* Logo */}

        <div className="relative flex items-center justify-center flex-wrap gap-4">
          {/* Left: Logo */}
          <div className="flex justify-start  mb-5 md:mb-0  static md:absolute top-0 left-0">
            <Image
              src="/images/circle-logo.png"
              alt="Ray Athletics Logo"
              width={80}
              height={60}
              className="object-contain"
            />
          </div>

          {/* Center: Social + Quote */}
          <div className="text-center">
            {/* Social Icons */}
            <div className="flex justify-center gap-6 text-2xl mb-2">
              <a
                href="https://www.facebook.com/rayathletics"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-gray-500 hover:text-gray-800 transition"
              >
                <FaFacebook className="text-gray-800 hover:text-red-500 hover:opacity-75 hover:-translate-y-1 transition-transform duration-200" />
              </a>
              <a
                href="https://www.instagram.com/athlete_whispererr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-gray-500 hover:text-gray-800 transition"
              >
                <FaInstagram className="text-gray-800 hover:text-red-500 hover:opacity-75 hover:-translate-y-1 transition-transform duration-200" />
              </a>
              <a
                href="https://www.tiktok.com/discover/ray-athletics"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="text-gray-500 hover:text-gray-800 transition-transform duration-200"
              >
                <FaTiktok className="text-gray-800 hover:text-red-500 hover:opacity-75 hover:-translate-y-1 transition-transform duration-200" />
              </a>
            </div>

            {/* Quote */}
            <div className="text-lg font-medium italic text-gray-600 mt-10">
              “A professional coach will grow with you.”
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-gray-600">
          {/* Address */}
          <div>
            <h3 className="text-black font-semibold mb-3 tracking-wide">
              Address
            </h3>
            <p>5649L General Washington Dr.</p>
            <p>Alexandria, Virginia</p>
            <p>Days: Monday – Friday</p>
            <p>Time: 08:00AM – 06:00PM</p>
            <p>Saturday & Sunday: Closed</p>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-black font-semibold mb-3 tracking-wide">
              Help
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="/contact" className="hover:text-gray-900 transition">
                  Looking for info?
                </a>
              </li>
              <li>
                <a href="/news" className="hover:text-gray-900 transition">
                  Get latest news
                </a>
              </li>
              <li>
                <a href="/career" className="hover:text-gray-900 transition">
                  Work with us
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-black font-semibold mb-3 tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="/ft" className="hover:text-gray-900 transition">
                  Functional Training
                </a>
              </li>
              <li>
                <a href="/news" className="hover:text-gray-900 transition">
                  News
                </a>
              </li>
              <li>
                <a href="/merch" className="hover:text-gray-900 transition">
                  Our Products
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-black font-semibold mb-3 tracking-wide">
              Contact
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <FaEnvelope className="text-gray-700" />
                <span>info@rayathletics.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaPhoneAlt className="text-gray-700" />
                <span>+1 (619) 404-7752</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaPhoneAlt className="text-gray-700" />
                <span>+1 (619) 404-7752</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="border-t border-gray-300 pt-4 text-center text-gray-500 text-xs">
          <p>
            &copy; {new Date().getFullYear()} Rise Above Yourself. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
