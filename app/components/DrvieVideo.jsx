"use client";

import { useState } from "react";

export default function RemoteVideo() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Optional loading overlay */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-black text-white">
          Loading video...
        </div>
      )}

      <video
        src="https://media.kidusmarkos.com/vid/sample-about.mp4"
        autoPlay
        muted
        loop
        playsInline
        onLoadedData={() => setIsLoaded(true)}
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>
  );
}
