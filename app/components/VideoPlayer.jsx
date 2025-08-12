"use client";

import { useState, useRef, useEffect } from "react";

export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const videoRef = useRef(null);
  const timeoutRef = useRef(null);

  const togglePlayPause = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
    showControlsForAWhile();
  };

  // Show controls for 3 seconds on interaction
  const showControlsForAWhile = () => {
    setShowControls(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setShowControls(false);
    }, 3000);
  };

  // Show controls on hover or focus
  const handleMouseMove = () => {
    showControlsForAWhile();
  };

  const handleVideoClick = () => {
    togglePlayPause();
  };

  // Clean timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div
      className="flex-1 relative max-h-[500px] min-h-[250px] sm:min-h-[300px] lg:min-h-full"
      onMouseMove={handleMouseMove}
      onFocus={showControlsForAWhile}
      tabIndex={0} // make div focusable for keyboard users
      style={{ overflow: "hidden" }} // hide overflow if any
    >
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        src="/videos/training.mp4" // your video path
        preload="metadata"
        onClick={handleVideoClick}
      />

      {/* Controls: play/pause button centered */}
      {showControls && (
        <button
          onClick={togglePlayPause}
          aria-label={isPlaying ? "Pause video" : "Play video"}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[rgba(0,0,0,0.6)] bg-opacity-50 text-white rounded-full p-4 flex items-center justify-center hover:bg-opacity-70 transition"
          style={{ zIndex: 10 }}
        >
          {isPlaying ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {/* Pause icon */}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 9v6m4-6v6"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="currentColor"
              viewBox="0 0 24 24"
              stroke="none"
            >
              {/* Play icon */}
              <path d="M5 3v18l15-9L5 3z" />
            </svg>
          )}
        </button>
      )}
    </div>
  );
}
