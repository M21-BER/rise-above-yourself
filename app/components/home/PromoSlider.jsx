"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import SlideInOnScroll from "../SlideInOnScroll";

const data = [
  {
    id: "1",
    image: "/images/promo1.jpg",
    title: "Technical Fitness Soccer Camp",
    desc: "Age 9-15",
    link: "",
  },
  {
    id: "2",
    image: "/images/promo2.jpg",
    title: "Youth Soccer Camp",
    desc: "Age 9+",
    link: "",
  },
];

export default function PromoCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(1);
  const [modalImage, setModalImage] = useState(null);

  // Responsive cards per view
  useEffect(() => {
    const handleResize = () => {
      setCardsPerView(window.innerWidth >= 640 ? 2 : 1);
      setCurrentSlide(0);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = Math.ceil(data.length / cardsPerView);

  const prevSlide = () => setCurrentSlide((prev) => Math.max(prev - 1, 0));
  const nextSlide = () =>
    setCurrentSlide((prev) => Math.min(prev + 1, totalSlides - 1));

  const canPrev = currentSlide > 0;
  const canNext = currentSlide < totalSlides - 1;

  if (!data.length) return null;

  const slideWidthPercent = 100;

  return (
    <div className="w-full flex flex-col items-center py-10">
      {/* Header */}
      <SlideInOnScroll>
        <h1 className="text-4xl font-anton tracking-wide text-red-600 uppercase">
          Latest Updates
        </h1>
      </SlideInOnScroll>

      {/* Carousel */}
      <div className="relative w-full max-w-6xl mt-10 overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentSlide * slideWidthPercent}%)`,
          }}
        >
          {Array.from({ length: totalSlides }).map((_, slideIdx) => {
            const start = slideIdx * cardsPerView;
            const end = start + cardsPerView;
            const slideItems = data.slice(start, end);

            return (
              <div
                key={slideIdx}
                className="flex flex-shrink-0 w-full px-2"
                style={{ width: `${slideWidthPercent}%` }}
              >
                {slideItems.map((item) => (
                  <div key={item.id} className={`flex-1 px-2`}>
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-[rgba(0,0,0,0.1)]">
                      <div
                        className="relative w-full h-72 bg-black flex items-center justify-center cursor-pointer"
                        onClick={() => setModalImage(item.image)}
                      >
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <div className="p-5">
                        <h3 className="text-xl font-semibold text-gray-900">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 mt-2">{item.desc}</p>
                        <a
                          href={item.link}
                          target="_blank"
                          className="inline-block mt-3 text-red-600 font-semibold"
                        >
                          Learn More →
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            );
          })}
        </div>

        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          disabled={!canPrev}
          className={`absolute top-1/2 left-2 -translate-y-1/2 bg-white p-3 rounded-full shadow transition ${
            !canPrev ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100"
          }`}
        >
          <ChevronLeft size={24} className="text-gray-800" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          disabled={!canNext}
          className={`absolute top-1/2 right-2 -translate-y-1/2 bg-white p-3 rounded-full shadow transition ${
            !canNext ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100"
          }`}
        >
          <ChevronRight size={24} className="text-gray-800" />
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="flex space-x-2 mt-6">
        {Array.from({ length: totalSlides }).map((_, idx) => (
          <span
            key={idx}
            className={`h-2 w-2 rounded-full ${
              idx === currentSlide ? "bg-red-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>

      {/* Modal */}
      {modalImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-150">
          <button
            className="absolute top-5 right-5 text-white p-2 rounded-full hover:bg-gray-700"
            onClick={() => setModalImage(null)}
          >
            <X size={32} />
          </button>
          <div className="relative w-full max-w-4xl h-[80vh]">
            <Image
              src={modalImage}
              alt="Full Screen"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}
