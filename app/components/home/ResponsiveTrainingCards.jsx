"use client";

import { useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { HomeGroup, HomeYouth } from "../Texts/Text";

export default function ResponsiveTrainingCards() {
  const [isSmall, setIsSmall] = useState(false);

  useEffect(() => {
    function onResize() {
      setIsSmall(window.innerWidth < 640); // sm breakpoint
    }
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // polygon clipPath only if not small screen
  const leftClipPath = !isSmall
    ? "polygon(0 0, 100% 0, 93% 100%, 0 100%)"
    : "none";
  const rightClipPath = !isSmall
    ? "polygon(7% 0, 100% 0, 100% 100%, 0 100%)"
    : "none";

  return (
    <div
      className="flex w-full min-w-[280px] flex-col sm:flex-row
                 overflow-hidden
                 h-auto sm:h-[15%] min-h-[160px] sm:min-h-[80px] max-h-[150px]"
    >
      {/* Left card */}
      <Link
        href="/youth"
        className="flex flex-1 items-center gap-3 cursor-pointer group
                   transition-transform duration-300
                   bg-background px-3 py-6 sm:py-2"
        style={{
          clipPath: leftClipPath,
          transformOrigin: !isSmall ? "left center" : "center",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        <div className="flex-1 flex flex-row justify-between items-start sm:items-center gap-2 w-full">
          <HomeYouth />
          <div className="flex-[2] flex justify-end sm:justify-center">
            <ChevronRight
              className="flex-shrink-0 text-white group-hover:text-gray-200 transition-colors duration-300"
              size={24}
            />
          </div>
        </div>
      </Link>

      {/* Right card */}
      <Link
        href="group"
        className="flex flex-1  items-center gap-3 cursor-pointer group
                   transition-transform duration-300
                   grad px-3 py-6 sm:py-2"
        style={{
          clipPath: rightClipPath,
          transformOrigin: !isSmall ? "right center" : "center",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        <div className="flex-1 flex flex-row justify-between items-start sm:items-center gap-2 w-full">
          <HomeGroup />
          <div className="flex-[2] flex justify-end sm:justify-center">
            <ChevronRight
              className="flex-shrink-0 text-white group-hover:text-gray-200 transition-colors duration-300"
              size={24}
            />
          </div>
        </div>
      </Link>
    </div>
  );
}
