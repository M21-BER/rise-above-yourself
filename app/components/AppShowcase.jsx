"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import useMountedTranslation from "@/hook/useMountedTranslation";

const AppShowcase = () => {
  const { t, mounted } = useMountedTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="app"
      className="bg-background flex flex-col md:flex-row w-full h-auto text-white overflow-hidden py-5"
    >
      {/* Image Container */}
      <div className="flex-1/2 flex justify-center items-center">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div style={{ width: 150, height: 450, position: "relative" }}>
            <Image
              src="/images/dark.png"
              alt="App mockup 2"
              fill
              className="rounded-xl shadow-2xl object-cover h-auto"
              style={{
                objectFit: "contain",
                WebkitBoxReflect:
                  "below -70px linear-gradient(transparent, transparent, #0004)",
                transformOrigin: "center",
                WebkitTransform: "perspective(800px) rotateY(-30deg)",
                transform: "perspective(800px) rotateY(-30deg)",
                transition: "all 2s linear 100ms",
                opacity: 1,
              }}
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div
            style={{
              width: 150,
              height: 450,
              position: "relative",
            }}
          >
            <Image
              src="/images/light.png"
              alt="App mockup 2"
              fill
              className="rounded-xl shadow-2xl object-cover h-auto"
              style={{
                objectFit: "contain",
                WebkitBoxReflect:
                  "below -70px linear-gradient(transparent, transparent, #0004)",
                transformOrigin: "center",
                WebkitTransform: "perspective(800px) rotateY(30deg)",
                transform: "perspective(800px) rotateY(30deg)",
                transition: "all 2s linear 100ms",
                opacity: 1,
              }}
            />
          </div>
        </motion.div>
      </div>

      {/* Text Section */}
      <div className="flex-1/2 text-white p-10">
        <h1 className="text-4xl font-allerta_stencil uppercase md:text-5xl font-medium mb-6 w-full md:w-fit tracking-wide border border-white/20 px-4 py-2 text-center rounded-t-lg">
          {mounted && <span>{t("mobile.title")}</span>}
        </h1>

        <p className="text-gray-300 text-lg mb-4">
          {mounted && <span>{t("mobile.desc")}</span>}
        </p>

        <p className="text-2xl font-jost text-center uppercase md:text-left font-semibold mb-8">
          {mounted && <span>{t("mobile.subtitle")}</span>}
        </p>

        <div className="flex flex-wrap gap-6 justify-center md:justify-start items-center">
          <a
            href="https://play.google.com/store/apps/details?id=com.kidusmarkos.kidusmarkoswoodworksapp"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-105 transition-transform"
          >
            <Image
              src="/images/google_play_store.svg"
              alt="Google Play Store"
              width={161}
              height={50}
            />
          </a>
          <a
            href="https://apps.apple.com/us/app/kidus-markos-woodworks/id6475050919"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-105 transition-transform"
          >
            <Image
              src="/images/ios_app_store.svg"
              alt="Apple App Store"
              width={161}
              height={50}
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
