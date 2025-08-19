"use client";

import { LoadingText } from "./components/Texts/Text";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-80 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-4">
        {/* Dots */}
        <div className="flex space-x-2">
          <span className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 bg-red-500 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
          <span className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 bg-red-500 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
          <span className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 bg-red-500 rounded-full animate-bounce"></span>
        </div>

        {/* Text */}
        <LoadingText />
      </div>
    </div>
  );
}
