import Image from "next/image";

export default function FounderSection() {
  return (
    <section className="w-full bg-[#f2f2f2] flex flex-col md:flex-row items-stretch">
      {/* Left Text Content */}
      <div className="w-full md:w-1/2 px-6 py-12 md:py-20 text-black">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold uppercase leading-tight font-display text-center font-allerta_stencil">
          FOUNDED BY ATHLETE <br />
          AND TRAINER <span className="text-red-700">REDDIET,</span>
        </h2>
        <p className="mt-6 text-base sm:text-lg md:text-xl text-black text-center">
          Ray was built on years of hands-on experience, studying movement,
          testing methods, and helping people get stronger through real work.
          That foundation shaped{" "}
          <span className="text-red-700 font-bold italic">
            our approach train with intention, stay consistent, and focus on
            total growth.
          </span>
        </p>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/2 relative grayscale">
        <div className="relative w-full h-full min-h-[400px] md:min-h-[500px]">
          <Image
            src="/images/trainer.jpg"
            alt="Rediet Training"
            fill
            className="object-cover object-center opacity-80"
            priority
          />
        </div>
      </div>
    </section>
  );
}
