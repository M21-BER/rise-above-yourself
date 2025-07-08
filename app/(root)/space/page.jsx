import Image from "next/image";

export default function Space() {
  return (
    <>
      {/* <div className="bg-transparent h-24 w-full"></div> */}
      <section className="w-full h-screen flex">
        {/* Left side: Vertical rotated header */}
        <div className="w-12 sm:w-16 md:w-20 flex flex-col items-center justify-center bg-transparent space-y-1">
          {"Our Space".split("").map((char, i) =>
            char === " " ? (
              <div key={i} className="h-4"></div> // space between words
            ) : (
              <span
                key={i}
                className="text-gray-50 font-bold uppercase font-allerta_stencil text-xl sm:text-2xl md:text-3xl"
              >
                {char}
              </span>
            )
          )}
        </div>

        {/* Right side: Image + Overlay */}
        <div className="relative flex-1 w-full h-full">
          <Image
            src="/images/slider/slider4.jpg"
            alt="Gym Space"
            fill
            priority
            className="object-cover z-0"
          />

          {/* Overlay content */}
          <div className="absolute inset-0 bg-black/50 z-10 flex items-center justify-end px-4 sm:px-6 md:px-10 !pr-0">
            <div
              tabIndex={0} // Make focusable for mobile tap support
              className="group bg-transparent hover:bg-white focus-within:bg-white transition-all hover:shadow-xl focus-within:shadow-xl duration-75 p-4 sm:p-6 md:p-8 rounded-l-xl w-full max-w-sm sm:max-w-md md:max-w-lg rounded-tr-none rounded-br-none outline-none"
            >
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white group-hover:text-gray-800 group-focus-within:text-gray-800 mb-2 underline transition-colors duration-200">
                Minimal Equipment Maximum Focus
              </h3>
              <p className="text-sm sm:text-base text-white group-hover:text-gray-700 group-focus-within:text-gray-700 transition-colors duration-200">
                We keep it intentional: pull-up bars sleds kettle bells &
                functional tools. No distraction, just what you need to train
                with purpose.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full h-screen flex">
        {/* Left side: Image + Overlay */}
        <div className="relative flex-1 w-full h-full">
          <Image
            src="/images/slider/slider5.jpg"
            alt="Gym Space"
            fill
            priority
            className="object-cover z-0"
          />

          {/* Overlay content */}
          <div className="absolute inset-0 bg-black/50 z-10 flex items-center justify-start px-4 sm:px-6 md:px-10 !pl-0">
            <div
              tabIndex={0} // Make focusable for mobile tap support
              className="group bg-transparent hover:bg-white focus-within:bg-white transition-all hover:shadow-xl focus-within:shadow-xl duration-75 p-4 sm:p-6 md:p-8 rounded-r-xl w-full max-w-sm sm:max-w-md md:max-w-lg rounded-tl-none rounded-bl-none outline-none"
            >
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white group-hover:text-gray-800 group-focus-within:text-gray-800 mb-2 underline transition-colors duration-200">
                Field Training
              </h3>
              <p className="text-sm sm:text-base text-white group-hover:text-gray-700 group-focus-within:text-gray-700 transition-colors duration-200">
                Every month, we take it outside. Our field sessions and soccer
                bootcamps bring athletes together to train in game-like
                environments. Speed, endurance, discipline — all in one.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
