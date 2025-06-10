import Image from "next/image";

export default function Header({ page, subtitle }) {
  return (
    <header className="relative w-full h-[300px] sm:h-[350px] md:h-[400px]">
      {/* Background Image */}
      <Image
        src="/images/gym.jpg" // Replace with your actual image path
        alt="Header Background"
        fill
        className="object-cover object-center z-0"
        priority
      />

      {/* Soft Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-20 px-4 text-center">
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-2">
          {page ?? ""}
        </h1>
        <p className="max-w-xl text-xs sm:text-sm md:text-base text-gray-200">
          {subtitle ?? ""}
        </p>
      </div>
    </header>
  );
}
