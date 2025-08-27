"use client";
import { useState } from "react";
import Image from "next/image";

export default function DriveVideo() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-lg overflow-hidden shadow-2xl">
      {/* Placeholder image until iframe loads */}
      {!isLoaded && (
        <Image
          src="/images/slider/slider16.jpg" // your placeholder image
          alt="Video loading..."
          fill
          className="object-cover"
          priority
        />
      )}

      <iframe
        src="https://player.vimeo.com/video/1113543324?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
        width="400"
        height="300"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
        className="absolute top-0 left-0 w-full h-full rounded-lg"
        referrerPolicy="strict-origin-when-cross-origin"
        title="MDC_9556"
        onLoad={() => setIsLoaded(true)}
      ></iframe>
    </div>
  );
}
