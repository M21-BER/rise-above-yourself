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
        src="https://drive.google.com/file/d/12UlC8JeJQhVgT7MhItHJ9p0mzS_w2qH7/preview"
        className="absolute top-0 left-0 w-full h-full rounded-lg"
        allow="autoplay"
        onLoad={() => setIsLoaded(true)}
      ></iframe>
    </div>
  );
}
