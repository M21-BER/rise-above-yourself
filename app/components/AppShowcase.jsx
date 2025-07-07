"use client";

import Image from "next/image";
import React from "react";

const AppShowcase = () => {
  return (
    <section className="bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-evenly p-6 md:px-12 gap-16">
        {/* App Mockups */}
        <div className="flex justify-center">
          <Image
            src="/images/app.png"
            alt="App mockup 2"
            width={200}
            height={250}
            className="rounded-xl shadow-2xl object-contain bg-black"
          />
        </div>

        {/* Text and links */}
        <div className="flex-1 max-w-lg text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-wide border border-white/20 px-4 py-2 text-center rounded-t-lg">
            Mobile App
          </h1>

          <p className="text-gray-300 text-lg mb-4">
            The best way to get our product on the go.
          </p>

          <p className="text-2xl font-semibold mb-8">Download R.A.Y App.</p>

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
      </div>
    </section>
  );
};

export default AppShowcase;
