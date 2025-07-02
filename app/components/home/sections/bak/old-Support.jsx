import Image from "next/image";

export default function Support() {
  return (
    <section className="relative w-full h-[90vh] lg:h-screen overflow-hidden">
      {/* Background Image */}
      {/* <div className="absolute inset-0 bg-black/30 z-10" /> */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/gym-image4.jpg"
          alt="Training Background"
          fill
          className="object-cover object-center grayscale"
          priority
        />
      </div>

      {/* Card Positioned Bottom Right */}
      <div className="relative z-10 w-full h-full">
        <div className="container mx-auto h-full relative">
          <div
            className={`
              absolute 
              right-4 left-4 sm:right-10 sm:left-auto 
              bottom-6 sm:bottom-10
              bg-white text-black 
              shadow-lg border border-[rgba(0,0,0,0.1)]
              p-5 sm:p-6 md:p-8 lg:p-10 xl:p-12 
            max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl
              transition-all duration-700
            `}
          >
            <h2 className="text-base text-center uppercase font-allerta_stencil  sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold mb-3">
              More than a Gym
            </h2>
            <p className=" text-sm sm:text-sm md:text-base lg:text-lg  2xl:text-xl text-[rgb(51,51,51)] mb-3">
              At R.A.Y Athletics, we respect effort, encourage discipline, and
              focus on growth. Whether you're here to train for sports, stay
              fit, or improve your mindset.
            </p>

            <p className="text-center text-sm sm:text-sm md:text-base lg:text-lg  2xl:text-xl text-[rgb(51,51,51)] mb-5">
              <strong className="text-red-600 italic font-bold">
                You'll find support and accountability here.
              </strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
