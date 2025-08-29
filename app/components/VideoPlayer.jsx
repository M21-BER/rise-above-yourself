"use client";

import Image from "next/image";
import { useState, useRef, useEffect, useCallback, useMemo, memo } from "react";

function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showControls, setShowControls] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // ✅ track loading state
  const videoRef = useRef(null);
  const timeoutRef = useRef(null);

  // Show controls for 3s
  const showControlsForAWhile = useCallback(() => {
    setShowControls(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setShowControls(false);
    }, 3000);
  }, []);

  // Toggle play/pause
  const togglePlayPause = useCallback(() => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
    showControlsForAWhile();
  }, [showControlsForAWhile]);

  // Toggle mute/unmute
  const toggleMute = useCallback(() => {
    if (!videoRef.current) return;

    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
    showControlsForAWhile();
  }, [showControlsForAWhile]);

  // Autoplay on mount
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true; // force muted autoplay
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.log("Autoplay blocked:", err));
    }
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  // Restart when video ends
  const handleVideoEnd = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      setIsPlaying(true);
    }
  }, []);

  // Memoized icons
  const playIcon = useMemo(
    () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M5 3v18l15-9L5 3z" />
      </svg>
    ),
    []
  );

  const pauseIcon = useMemo(
    () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 9v6m4-6v6"
        />
      </svg>
    ),
    []
  );

  const muteIcon = useMemo(
    () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 9l6 6m0-6l-6 6"
        />
      </svg>
    ),
    []
  );

  const volumeIcon = useMemo(
    () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11 5l-6 6h4v6l6-6h-4V5z"
        />
      </svg>
    ),
    []
  );

  return (
    <div
      className="flex-1 relative h-full min-h-[250px] sm:min-h-[300px] lg:min-h-full"
      onMouseMove={showControlsForAWhile}
      onFocus={showControlsForAWhile}
      tabIndex={0}
      style={{ overflow: "hidden" }}
    >
      {/* ✅ Placeholder image while video loads */}
      {isLoading && (
        <Image
          src="/images/slider/slider8.jpg"
          alt="Loading..."
          fill
          className="absolute inset-0 w-full h-full object-cover z-0"
          priority // optional: makes sure it loads ASAP
        />
      )}

      {/* Video */}
      <video
        ref={videoRef}
        className="w-full h-full object-cover relative z-10"
        src="/videos/training.mp4"
        preload="metadata"
        autoPlay
        muted
        playsInline
        onClick={togglePlayPause}
        onEnded={handleVideoEnd} // restart when ends
        onLoadedData={() => setIsLoading(false)} // ✅ hide placeholder once loaded
      />

      {/* Controls overlay */}
      {showControls && (
        <>
          {/* Play / Pause centered */}
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <button
              onClick={togglePlayPause}
              aria-label={isPlaying ? "Pause video" : "Play video"}
              className="bg-[rgba(0,0,0,0.6)] text-white rounded-full p-4 hover:bg-opacity-70 transition"
            >
              {isPlaying ? pauseIcon : playIcon}
            </button>
          </div>

          {/* Mute / Unmute bottom-left */}
          <div className="absolute bottom-4 left-4 z-20">
            <button
              onClick={toggleMute}
              aria-label={isMuted ? "Unmute video" : "Mute video"}
              className="bg-[rgba(0,0,0,0.6)] text-white rounded-full p-3 hover:bg-opacity-70 transition"
            >
              {isMuted ? muteIcon : volumeIcon}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default memo(VideoPlayer);
