"use client";
import React, { useRef, useState, useEffect } from "react";

export default function VideoHero({
  src,
  poster = "",
  title = "R.A.Y ATHLETICS",
  subtitle = "Studio • Category • Year",
  ctaText = "View Project",
  ctaHref = "#",
  className = "",
}) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    const p = v.play();
    if (p?.then) {
      p.then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
    }
  }, []);

  function togglePlayback() {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setIsPlaying(true);
    } else {
      v.pause();
      setIsPlaying(false);
    }
  }

  function toggleMute() {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setIsMuted(v.muted);
  }

  return (
    <section
      className={`relative w-full h-screen overflow-hidden bg-black ${className}`}
      aria-label="Video hero"
    >
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-black/20 to-black/60" />

      {/* Centering container */}
      <div className="absolute inset-0 flex items-center justify-center">
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          autoPlay
          loop
          muted
          playsInline
          className="max-w-full max-h-full rounded-lg shadow-2xl transition-transform duration-700 ease-out"
        />
      </div>

      {/* Top-left badge */}
      <div className="absolute top-[clamp(0.5rem,2vw,2rem)] left-[clamp(0.5rem,2vw,2rem)] z-20 flex items-center gap-2 sm:gap-3">
        <div className="px-[clamp(0.4rem,1vw,0.75rem)] py-[clamp(0.2rem,0.5vw,0.4rem)] rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-[clamp(0.55rem,1vw,0.875rem)] uppercase tracking-wider">
          Featured
        </div>
        <div className="hidden sm:block px-2 py-1 rounded-md bg-white/6 text-xs lg:text-sm">
          {subtitle}
        </div>
      </div>

      {/* Bottom-left card */}
      <div className="absolute left-[clamp(0.5rem,2vw,2rem)] bottom-[clamp(0.5rem,2vw,2rem)] z-20 w-[min(90%,720px)]">
        <div className="bg-gradient-to-r from-white/10 via-white/5 to-transparent backdrop-blur-md border border-white/8 rounded-2xl p-[clamp(0.75rem,2vw,1.5rem)] shadow-lg">
          <h1 className="text-white text-[clamp(1.25rem,4vw,2.5rem)] font-semibold tracking-tight">
            {title}
          </h1>
          <p className="mt-2 text-[clamp(0.7rem,1.5vw,1rem)] text-white/70">
            {subtitle}
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-2 sm:gap-3">
            <a
              href={ctaHref}
              className="inline-flex items-center gap-2 px-[clamp(0.75rem,2vw,1rem)] py-[clamp(0.4rem,1vw,0.5rem)] rounded-full bg-white text-black text-[clamp(0.65rem,1.5vw,0.9rem)] font-medium shadow hover:opacity-90 transition"
            >
              {ctaText}
            </a>

            <button
              onClick={toggleMute}
              aria-pressed={!isMuted}
              className="inline-flex items-center justify-center w-[clamp(2rem,5vw,2.5rem)] h-[clamp(2rem,5vw,2.5rem)] rounded-full border border-white/12 bg-white/6"
              title={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 10v4h4l5 4V6L7 10H3z"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19 9l-3 3 3 3"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 10v4h4l5 4V6L7 10H3z"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Play/Pause center button */}
      <div className="absolute inset-0 z-20 flex items-center justify-center sm:justify-end sm:pr-[clamp(1rem,4vw,3rem)] pointer-events-none">
        <div className="pointer-events-auto">
          <button
            onClick={togglePlayback}
            aria-pressed={isPlaying}
            className="flex items-center justify-center w-[clamp(3rem,8vw,6rem)] h-[clamp(3rem,8vw,6rem)] rounded-full bg-white/8 backdrop-blur-md border border-white/10 shadow-xl transition-transform transform hover:scale-105"
            title={isPlaying ? "Pause" : "Play"}
          >
            {!isPlaying ? (
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5 3v18l15-9L5 3z" fill="white" />
              </svg>
            ) : (
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" fill="white" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Vignette */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/40 via-transparent to-transparent" />
    </section>
  );
}
