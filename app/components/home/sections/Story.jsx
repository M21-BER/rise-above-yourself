import Image from "next/image";
import Link from "next/link";

export default function Story() {
  return (
    <section className="relative w-full h-[90vh]  lg:h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/gym.jpg"
          alt="Training Background"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full h-full">
        <div className="container mx-auto h-full flex flex-col justify-end sm:justify-start">
          <div
            className={`
              text-black 
              bg-white shadow-lg
              mx-5
              p-5 sm:p-6 md:p-8 lg:p-10 xl:p-12 
              border border-[rgba(0,0,0,0.1)]
              transition-all duration-700
              max-w-sm sm:max-w-md md:max-w-lg 
              mb-6 sm:mt-10 sm:mb-0
            `}
          >
            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold mb-3">
              RISE ABOVE YOURSELF
            </h2>

            <p className="text-sm sm:text-sm md:text-base lg:text-lg  2xl:text-xl text-[rgb(51,51,51)] mb-2">
              It's not about beating others.{" "}
              <strong className="text-red-600">
                {" "}
                It's about rising above who ou were yesterday.
              </strong>
            </p>
            <p className="text-sm sm:text-sm md:text-base lg:text-lg  2xl:text-xl text-[rgb(51,51,51)] mb-5">
              We are here to push past doubt, silence, excuses and shatter
              limits
            </p>
            <Link
              href="/about"
              className="text-sm sm:text-sm md:text-base lg:text-lg  2xl:text-xl text-black underline font-semibold  hover:opacity-60 transition-all delay-75"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
