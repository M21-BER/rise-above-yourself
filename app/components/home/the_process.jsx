"use client";

import Image from "next/image";

export default function TheProcess() {
  return (
    <div className="w-full h-screen relative">
      <Image
        src="/images/asset10.jpg"
        alt="Team Photo"
        fill
        className="object-cover"
      />

      <div className="grad [clip-path:polygon(0_0,100%_0,100%_100%,0_100%)] sm:[clip-path:polygon(0_0,100%_0,93%_100%,0_100%)]  w-[100%] sm:w-[45%] xl:w-[35%]">
        <div className="relative px-10 py-5">
          <h2
            className="text-white leading-tight font-bold"
            style={{
              fontSize: "clamp(1.5rem, 4vw, 3rem)", // scales from 24px to 48px
            }}
          >
            THE PROCESS
          </h2>
          <p
            className="text-white mt-1"
            style={{
              fontSize: "clamp(0.75rem, 2vw, 1.25rem)", // scales from 12px to 20px
              lineHeight: 1.4,
            }}
          >
            Here’s what it looks like day by day.
          </p>
        </div>
      </div>
    </div>
  );
}
