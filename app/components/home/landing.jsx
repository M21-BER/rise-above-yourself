"use client";
import React, { useEffect, useRef, useState } from "react";

function Landing() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoSrc, setVideoSrc] = useState("/videos/main.webm"); // default src
  const videoRef = useRef(null);

  useEffect(() => {
    // Optional: network-based video selection
    const connection =
      navigator.connection ||
      navigator.mozConnection ||
      navigator.webkitConnection;
    const downlink = connection?.downlink || 10;

    if (downlink < 2) {
      setVideoSrc("https://media.kidusmarkos.com/vid/main.webm");
    } else {
      setVideoSrc("https://media.kidusmarkos.com/vid/main.webm");
    }
  }, []);

  // Optional: start from 3s
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 3;
    }
  }, [videoSrc]);

  return (
    <div className="w-full h-screen bg-black flex items-center justify-center overflow-hidden">
      <video
        ref={videoRef}
        src={videoSrc}
        className={`w-full h-full max-w-full max-h-full object-cover transition-opacity duration-1000 ${
          videoLoaded ? "opacity-100" : "opacity-0"
        }`}
        autoPlay
        loop
        muted
        playsInline
        onCanPlay={() => setVideoLoaded(true)}
      />
    </div>
  );
}

export default Landing;
