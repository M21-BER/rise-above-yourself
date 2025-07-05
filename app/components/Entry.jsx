import React from "react";
import ScrollButton from "./ScrollButton";
import Image from "next/image";

const Entry = async (params) => {
  const { id, title, img } = await params;
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={img === "default" ? "/images/asset10.jpg" : img}
          alt="Functional Training Hero"
          fill
          className="w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center text-white">
        {title === "default" ? (
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-wide max-w-4xl leading-tight drop-shadow-md">
            Building the Next Generation of{" "}
            <span className="text-[#D00A02]">Legends</span>
          </h1>
        ) : (
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-wide max-w-4xl leading-tight drop-shadow-md">
            {title}
          </h1>
        )}

        <ScrollButton id={id} />
      </div>
    </section>
  );
};

export default Entry;
