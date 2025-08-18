import { LocationHeader } from "@/app/components/Texts/Text";
import React from "react";

export default function Location() {
  return (
    <section className="w-full bg-white py-12 px-4 sm:px-6 lg:px-20 flex flex-col lg:flex-row items-start gap-8 pt-32">
      {/* Left Section */}
      <LocationHeader />

      {/* Right Section (Map) */}
      <div className="lg:w-1/2 w-full rounded-lg overflow-hidden shadow-md">
        <div className="w-full aspect-[4/3] md:aspect-[16/9]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2425.275483964913!2d-77.1653009!3d38.797289!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b3050711922f%3A0x54719de7075cc6a5!2sR.A.Y%20ATHLETICS!5e1!3m2!1sen!2set!4v1755424131942!5m2!1sen!2set"
            className="w-full h-full"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
