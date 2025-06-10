"use client";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-4">
        {/* Spinner */}
        <div className="w-16 h-16 border-4 border-t-transparent border-white rounded-full animate-spin"></div>

        {/* Dots */}
        <div className="flex space-x-2">
          <span className="w-3 h-3 bg-white rounded-full animate-bounce [animation-delay:-0.3s]"></span>
          <span className="w-3 h-3 bg-white rounded-full animate-bounce [animation-delay:-0.15s]"></span>
          <span className="w-3 h-3 bg-white rounded-full animate-bounce"></span>
        </div>

        {/* Text */}
        <p className="text-white font-medium text-lg tracking-wide uppercase">
          Loading...
        </p>
      </div>
    </div>
  );
}
