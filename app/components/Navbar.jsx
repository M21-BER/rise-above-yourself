"use client";
import { useState, useEffect, useMemo, useCallback } from "react";
import Link from "next/link";
import { HiOutlineX } from "react-icons/hi";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import Logo from "./Logo";
import TopBar from "./TopBar";
import { Menu } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";
import useMountedTranslation from "@/hook/useMountedTranslation";

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false); // For mobile dropdown toggle
  const { t, mounted } = useMountedTranslation();

  const services = useMemo(
    () => [
      {
        title: t("training.youth"),
        image: "/images/asset7.jpg",
        description: t("training.youth_description"),
        href: "/youth",
      },
      {
        title: t("training.group"),
        image: "/images/asset5.jpg",
        description: t("training.group_description"),
        href: "/group",
      },
    ],
    [t, mounted]
  );

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
    { name: t("nav.home"), href: "/", title: "home" },
    { name: t("nav.about"), href: "/about", title: "about" },
    { name: t("nav.service"), href: "/services", title: "service" },
    { name: t("nav.shop"), href: "/merch", title: "shop" },
    { name: t("nav.news"), href: "/news", title: "news" },
    { name: t("nav.app"), href: "/#app", title: "app" },
  ];

  const handleBackdrop = useCallback(() => {
    setSidebarOpen(false);
  }, []);
  return (
    <>
      <nav className="fixed top-0 w-full bg-black text-white z-50 shadow-md">
        <TopBar />
        <div className="w-full mx-auto px-6">
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
                href="/location"
                className="px-4 py-1.5 bg-white text-background rounded-full uppercase hover:opacity-50 transition text-xs sm:text-sm md:text-base lg:text-base 2xl:text-lg"
              >
                {mounted && t("location")}
              </Link>
              <Link
                href="/contact"
                className="px-4 py-1.5 bg-red-600 rounded-full uppercase hover:opacity-50 transition text-xs sm:text-sm md:text-base lg:text-base 2xl:text-lg"
              >
                {mounted && t("contact")}
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <div
        className={`fixed overflow-y-auto custom-scroll  top-0 left-0 h-full bg-red-600 text-white z-60 transform transition-transform duration-500 ease-in-out
    ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
    w-4/5 sm:w-3/5 md:w-2/5 lg:w-1/3 xl:w-1/4`}
      >
        {/* Close Button */}
        <div className="p-4 absolute top-0 left-0">
          <LanguageSwitcher />
        </div>

        {/* Sidebar Nav Links */}
        <nav className="flex flex-col p-4 space-y-4  mt-16">
          {navLinks.map((link) => {
            if (link.title === "service") {
              return (
                <div key={link.name} className="flex flex-col mb-3">
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="flex mb-3 items-center justify-between w-full hover:opacity-80 transition text-sm sm:text-base md:text-lg  uppercase focus:outline-none"
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
                          className="hover:opacity-80 mb-3 font-jost uppercase transition text-sm sm:text-base md:text-lg hover:underline"
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
                  className="hover:opacity-80 mb-5 font-jost transition text-sm sm:text-base md:text-lg uppercase"
                >
                  {link.name}
                </Link>
              );
            }
          })}

          <Link
            href="/location"
            className="lg:hidden hover:text-gray-300 mb-5  transition text-sm sm:text-base md:text-lg uppercase underline"
          >
            {mounted && t("location")}
          </Link>
          <Link
            href="/contact"
            className="lg:hidden hover:text-gray-300 mb-5  transition text-sm sm:text-base md:text-lg uppercase underline"
          >
            {mounted && t("contact")}
          </Link>

          <div className="p-4 absolute top-0 right-0">
            <button
              aria-label="Close menu"
              onClick={() => setSidebarOpen(false)}
              className="text-white text-3xl focus:outline-none hover:opacity-50 cursor-pointer rounded-full transition-all duration-200"
            >
              <HiOutlineX />
            </button>
          </div>
        </nav>
      </div>
      {sidebarOpen && (
        <div
          onClick={handleBackdrop}
          className="bg-[rgba(0,0,0,0.6)] top-0 left-0 right-0 bottom-0 w-full h-screen fixed z-30"
        ></div>
      )}
    </>
  );
}
