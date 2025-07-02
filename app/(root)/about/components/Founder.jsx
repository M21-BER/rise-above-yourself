import Image from "next/image";

export default function FounderSection() {
  return (
    <section className="w-full min-h-[600px] bg-[#0a0a0a] text-white flex flex-col md:flex-row items-center justify-center">
      {/* Left Text */}
      <div className="w-full md:w-1/2 px-6 py-12 md:px-12 md:py-24 flex flex-col justify-center items-center text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase leading-tight font-display tracking-wide mb-6">
          Founded by Athlete <br />
          and Trainer{" "}
          <span className="text-[#D00A02] italic underline underline-offset-4">
            Reddiet
          </span>
        </h2>

        <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-300 max-w-xl">
          Built on years of hands-on experience, studying movement, testing
          methods, and helping people get stronger through{" "}
          <span className="text-[#D00A02] font-semibold italic">
            consistent real work.
          </span>{" "}
          Our approach is simple — train with intention, stay committed, and
          grow beyond limits.
        </p>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/2 relative">
        <div className="relative w-full h-[400px] md:h-[500px] grayscale hover:grayscale-0 transition duration-500">
          <Image
            src="/images/trainer.jpg"
            alt="Rediet Training"
            fill
            className="object-cover object-center opacity-80 rounded-br-4xl rounded-tl-4xl"
            priority
          />
        </div>
      </div>
    </section>
  );
}
