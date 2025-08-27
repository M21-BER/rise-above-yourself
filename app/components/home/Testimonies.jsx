"use client";

import { Quote, Star } from "lucide-react";
import React, { useEffect, useState } from "react";

const reviews = [
  {
    id: 1,
    name: "ru.e",
    reviewsCount: 8,
    photosCount: 1,
    rating: 5,
    date: "3 weeks ago",
    isNew: true,
    text: "Amazing gym, great trainers. They push you to do your best and are so kind friendly vibes. Super sleek and modern gym. Love working out here!",
  },
  {
    id: 2,
    name: "Nebyou Dawit Molalegn",
    reviewsCount: 2,
    rating: 5,
    date: "a month ago",
    text: "The space is clean, well-organized, and equipped with everything. The trainers are knowledgeable and attentive, pushing you while keeping form a top priority. Classes are varied, high-energy, and cater to all levels. Whether you’re training for performance or just trying to get in shape, this gym strikes the right balance between challenge and community. Highly recommended for anyone looking for results beyond just lifting weights.",
  },
  {
    id: 3,
    name: "Serdious Moges",
    reviewsCount: 1,
    rating: 5,
    date: "a month ago",
    text: "This gym is great! The trainers are super welcoming and offer great group or solo classes. Highly recommend!",
  },
  {
    id: 4,
    name: "Phebe Melaku",
    reviewsCount: 3,
    rating: 5,
    date: "3 weeks ago",
    isNew: true,
    text: "Best trainer in town!!!",
  },
];

// Convert "3 weeks ago" / "a month ago" -> actual date
function parseRelativeDate(relative) {
  const today = new Date();
  let date = new Date(today);

  if (/(\d+)\s+days? ago/.test(relative)) {
    const days = parseInt(relative);
    date.setDate(today.getDate() - days);
  } else if (/(\d+)\s+weeks? ago/.test(relative)) {
    const weeks = parseInt(relative);
    date.setDate(today.getDate() - weeks * 7);
  } else if (
    /(\d+)\s+months? ago/.test(relative) ||
    relative.includes("a month")
  ) {
    const months = relative.includes("a month") ? 1 : parseInt(relative);
    date.setMonth(today.getMonth() - months);
  }

  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function Testimonies() {
  const [index, setIndex] = useState(0);

  // Auto-slide every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const current = reviews[index];

  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8 transition-all duration-500 ease-in-out">
        {/* Quote Icon */}
        <div className="flex-shrink-0 text-neutral-300">
          <Quote size={120} className="hidden md:block" />
        </div>

        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <blockquote className="text-gray-700 italic text-lg sm:text-xl leading-relaxed">
            “{current.text}”
          </blockquote>

          {/* Rating Stars */}
          <div className="flex justify-center md:justify-start mt-4">
            {Array.from({ length: current.rating }).map((_, i) => (
              <Star
                key={i}
                size={20}
                className="fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>

          {/* Author */}
          <cite className="block text-gray-500 text-sm mt-3 not-italic">
            – {current.name}, {parseRelativeDate(current.date)}
          </cite>
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-6 gap-2">
        {reviews.map((review, i) => (
          <button
            key={review.id}
            onClick={() => setIndex(i)}
            className={` w-8 h-1 rounded-full transition-colors ${
              i === index ? "bg-red-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

export default Testimonies;
