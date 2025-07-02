import Image from "next/image";
import Link from "next/link";

export default function FunctionalTraining() {
  return (
    <section className="relative w-full h-[90vh]  lg:h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/gym-image3.jpg"
          alt="Training Background"
          fill
          className="object-cover object-center grayscale"
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
             max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl
              mb-6 sm:mt-10 sm:mb-0
            `}
          >
            <h2 className="text-base text-center uppercase font-allerta_stencil  sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold mb-3">
              Functional Training
            </h2>
            <p className="text-sm sm:text-sm md:text-base lg:text-lg  2xl:text-xl text-[rgb(51,51,51)] mb-5">
              We Specialize in functional bodyweight training - building
              strength, control, and mobility that carry beyond the gym.
              <strong className="text-red-600 italic font-bold">
                {" "}
                Because when you own your body, you own everything.
              </strong>
            </p>

            <div className="flex justify-center">
              <Link
                href="/functional_training"
                className="text-sm px-7 py-2 rounded-full border border-red-600 sm:text-sm md:text-base lg:text-lg 2xl:text-xl text-black  font-semibold hover:opacity-60 transition-all delay-75"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
