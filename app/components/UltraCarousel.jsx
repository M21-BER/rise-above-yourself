"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function UltraCarousel({
  slides,
  height = 520,
  autoPlay = false,
  autoPlayInterval = 4500,
  initialIndex = 0,
  className = "",
  onSlideChange,
  showIndicators = true,
}) {
  const [index, setIndex] = useState(
    Math.max(0, Math.min(initialIndex, Math.max(0, slides.length - 1)))
  );
  const [direction, setDirection] = useState(1); // for slide animation
  const hoverRef = useRef(false);
  const idRef = useRef(null);

  const hasSlides = slides && slides.length > 0;

  const next = useCallback(() => {
    if (!hasSlides) return;
    setDirection(1);
    setIndex((i) => (i + 1) % slides.length);
  }, [slides.length, hasSlides]);

  const prev = useCallback(() => {
    if (!hasSlides) return;
    setDirection(-1);
    setIndex((i) => (i - 1 + slides.length) % slides.length);
  }, [slides.length, hasSlides]);

  const goTo = useCallback(
    (i) => {
      if (!hasSlides) return;
      const target = ((i % slides.length) + slides.length) % slides.length;
      setDirection(target > index ? 1 : -1);
      setIndex(target);
    },
    [slides.length, index, hasSlides]
  );

  useEffect(() => {
    if (onSlideChange) onSlideChange(index);
  }, [index, onSlideChange]);

  // Autoplay
  useEffect(() => {
    const clear = () => {
      if (idRef.current) {
        window.clearInterval(idRef.current);
        idRef.current = null;
      }
    };

    const setup = () => {
      if (autoPlay && !hoverRef.current) {
        clear();
        idRef.current = window.setInterval(() => {
          next();
        }, Math.max(1500, autoPlayInterval));
      }
    };

    setup();
    const onVisibility = () => {
      if (document.hidden) clear();
      else setup();
    };
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      document.removeEventListener("visibilitychange", onVisibility);
      clear();
    };
  }, [autoPlay, autoPlayInterval, next]);

  const handleMouseEnter = () => {
    hoverRef.current = true;
    if (idRef.current) {
      window.clearInterval(idRef.current);
      idRef.current = null;
    }
  };
  const handleMouseLeave = () => {
    hoverRef.current = false;
    if (autoPlay && !idRef.current) {
      idRef.current = window.setInterval(() => {
        next();
      }, Math.max(1500, autoPlayInterval));
    }
  };

  const variants = {
    enter: (dir) => ({ x: dir > 0 ? 80 : -80, opacity: 0.4, scale: 0.98 }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 320, damping: 32 },
        opacity: { duration: 0.4 },
      },
    },
    exit: (dir) => ({
      x: dir < 0 ? 80 : -80,
      opacity: 0.4,
      scale: 0.98,
      transition: { duration: 0.32 },
    }),
  };

  const handleImgDragStart = (e) => e.preventDefault();

  if (!hasSlides)
    return (
      <div
        className={`relative w-full rounded-3xl border border-zinc-200/20 bg-gradient-to-br from-zinc-900 to-zinc-800 text-zinc-200 p-8 shadow-2xl ${className}`}
        style={{ height }}
      >
        <div className="absolute inset-0 grid place-items-center">
          <p className="text-sm opacity-70">No slides provided</p>
        </div>
      </div>
    );

  return (
    <section
      className={`relative w-full overflow-hidden border border-white/10 bg-zinc-900 shadow-2xl ${className}`}
      style={{ height }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-roledescription="carousel"
    >
      {/* background shimmer */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.08),transparent_35%),radial-gradient(circle_at_80%_90%,rgba(255,255,255,0.06),transparent_35%)]" />

      {/* Slides */}
      <div className="absolute inset-0">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={index}
            className="absolute inset-0"
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(_, info) => {
              if (info.offset.x < -60) next();
              else if (info.offset.x > 60) prev();
            }}
          >
            <div className="relative h-full w-full">
              <Image
                src={slides[index].src}
                alt={slides[index].alt ?? `Slide ${index + 1}`}
                fill
                sizes="100vw"
                priority
                className="object-contain select-none"
                onDragStart={handleImgDragStart}
              />

              {/* overlays */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/30 to-transparent" />

              {/* Caption */}
              {slides[index].caption && (
                <div className="absolute bottom-20 left-4 md:left-6 lg:left-8 max-w-[70%] text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 backdrop-blur">
                    <span className="h-1.5 w-1.5 rounded-full bg-white/80" />
                    <span className="text-xs uppercase tracking-wider opacity-90">
                      Highlights
                    </span>
                  </div>
                  <div className="mt-2 text-lg font-medium leading-snug md:text-xl lg:text-2xl">
                    {slides[index].caption}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="absolute bottom-4 left-4 flex items-center gap-2 md:bottom-5 md:left-6 lg:bottom-6 lg:left-8">
        <button
          aria-label="Previous slide"
          className="group h-11 w-11 rounded-full border border-white/20 bg-white/10 backdrop-blur-md shadow-lg transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/50"
          onClick={prev}
        >
          <ChevronLeft className="mx-auto h-6 w-6 text-white drop-shadow group-active:scale-95 transition" />
        </button>
        <button
          aria-label="Next slide"
          className="group h-11 w-11 rounded-full border border-white/20 bg-white/10 backdrop-blur-md shadow-lg transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/50"
          onClick={next}
        >
          <ChevronRight className="mx-auto h-6 w-6 text-white drop-shadow group-active:scale-95 transition" />
        </button>
      </div>

      {/* Indicators */}
      {showIndicators && (
        <div className="absolute right-3 top-1/2 -translate-y-1/2 flex flex-col items-center gap-2 md:right-4 lg:right-6">
          {slides.map((_, i) => {
            const active = i === index;
            return (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => goTo(i)}
                className="group relative"
              >
                <span
                  className={[
                    "block transition-all overflow-hidden rounded-full border border-white/20 backdrop-blur-sm shadow-sm",
                    active
                      ? "h-8 w-2 bg-white/90"
                      : "h-4 w-2 bg-white/30 hover:bg-white/50",
                  ].join(" ")}
                />
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 translate-x-full whitespace-nowrap rounded-full border border-white/20 bg-black/60 px-2 py-0.5 text-[10px] tracking-wider text-white opacity-0 backdrop-blur-sm transition group-hover:opacity-100">
                  {i + 1}
                </span>
              </button>
            );
          })}
        </div>
      )}

      <span className="sr-only" aria-live="polite">
        Slide {index + 1} of {slides.length}
      </span>
    </section>
  );
}
