import { Quote } from "lucide-react";
import React from "react";

function Testimonies() {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
        {/* Quote Icon */}
        <div className="flex-shrink-0 text-neutral-300">
          <Quote size={120} className="hidden md:block" />
        </div>

        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <blockquote className="text-gray-700 italic text-lg sm:text-xl leading-relaxed">
            “An underlying component is the mental aspect. It’s about the
            confidence Athletic Republic training gives young women athletes.
            They come out stronger, quicker, more powerful and more confident.”
          </blockquote>

          {/* Decorative Lines */}
          <div className="flex items-center justify-center md:justify-start gap-2 mt-4">
            <span className="block w-8 h-1 grad rounded"></span>
            <span className="block w-6 h-1 bg-gray-300 rounded"></span>
          </div>

          {/* Author */}
          <cite className="block text-gray-500 text-sm mt-3 not-italic">
            – Lisa Lindley, Head Coach Darien Women’s HS Lacrosse
          </cite>
        </div>
      </div>
    </section>
  );
}

export default Testimonies;
