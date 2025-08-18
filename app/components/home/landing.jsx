"use client";
import { ChevronRight } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import ResponsiveTrainingCards from "./ResponsiveTrainingCards";

function Landing() {
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
      setVideoSrc("/videos/main.webm"); // low quality video
    } else {
      setVideoSrc("/videos/main.webm"); // high quality video
    }

    // Start 5-second splash timer
    timerRef.current = setTimeout(() => {
      setShowVideo(true);
    }, 2000);

    return () => clearTimeout(timerRef.current);
  }, []);

  const videoRef = useRef(null);

  // Flag to ensure we only set currentTime once
  const hasSetTime = useRef(false);

  const onLoadedMetadata = () => {
    if (videoRef.current && !hasSetTime.current) {
      hasSetTime.current = true;
      // Try setting currentTime to 3 seconds
      videoRef.current.currentTime = 3;
    }
  };

  const onSeeked = () => {
    // After seek is done, play the video
    if (videoRef.current && !videoRef.current.paused) return; // already playing

    videoRef.current.play().catch(() => {
      // autoplay might be blocked, handle if needed
    });
  };
  return (
    <div className="w-full h-screen bg-white pt-14 sm:pt-20 flex flex-col">
      <div className="relative w-full h-[85%] pb-20">
        <video
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            videoLoaded ? "opacity-100" : "opacity-0"
          }`}
          src={videoSrc}
          ref={videoRef}
          type="video/webm"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          onLoadedMetadata={onLoadedMetadata}
          onSeeked={onSeeked}
          onCanPlay={() => setVideoLoaded(true)}
          onError={() => setVideoLoaded(false)}
        >
          Your browser does not support the video tag.
        </video>
      </div>

      <ResponsiveTrainingCards />
    </div>
  );
}

export default Landing;
