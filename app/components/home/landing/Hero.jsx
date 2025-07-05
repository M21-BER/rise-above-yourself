"use client";
import React, { useState, useEffect, useRef } from "react";
import Brand from "./Brand";
import Link from "next/link";
import Image from "next/image";

function Hero() {
  const [showVideo, setShowVideo] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoSrc, setVideoSrc] = useState(null);
  const timerRef = useRef(null);

  useEffect(() => {
    // Determine network speed and select video quality
    const connection =
      navigator.connection ||
      navigator.mozConnection ||
      navigator.webkitConnection;
    const downlink = connection?.downlink || 10; // default to 10 Mbps if not available

    // Simple threshold, adjust as needed
    if (downlink < 2) {
      setVideoSrc("/videos/low.webm"); // low quality video
    } else {
      setVideoSrc("/videos/low.webm"); // high quality video
    }

    // Start 5-second splash timer
    timerRef.current = setTimeout(() => {
      setShowVideo(true);
    }, 5000);

    return () => clearTimeout(timerRef.current);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden mt-10 bg-black">
      {/* Show fallback image if video not loaded and 5 seconds passed */}
      {showVideo && !videoLoaded && (
        <Image
          src="/images/asset10.jpg"
          alt="Fallback background"
          fill
          className="object-cover"
          priority
        />
      )}

      {/* Video - only render when showVideo is true and videoSrc is set */}
      {showVideo && videoSrc && (
        <video
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            videoLoaded ? "opacity-100" : "opacity-0"
          }`}
          src={videoSrc}
          type="video/webm"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          onCanPlay={() => setVideoLoaded(true)}
          onError={() => setVideoLoaded(false)}
        >
          Your browser does not support the video tag.
        </video>
      )}

      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-black transition-opacity duration-1000 z-10 ${
          showVideo && videoLoaded ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* Content */}
      <div className="relative z-20 flex flex-col justify-center items-center w-full h-full px-4 text-center text-white">
        <Brand />

        {/* Show button only after splash */}
        {showVideo && (
          <Link
            href="/about"
            className="grad transition-all duration-300 ease-in-out 
               text-white text-base sm:text-lg md:text-xl font-semibold 
               px-5 sm:px-7 md:px-9 py-2.5 sm:py-3.5 md:py-4 
               rounded-full shadow-xl hover:shadow-2xl mt-8 inline-block"
          >
            JOIN THE MOVEMENT
          </Link>
        )}
      </div>
    </div>
  );
}

export default Hero;
