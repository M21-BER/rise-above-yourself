import Image from "next/image";

export default function Explanation() {
  return (
    <div className="max-w-6xl mx-auto p-6 flex flex-col md:flex-row-reverse items-center gap-8 py-24 text-white">
      {/* Image Section */}
      <div className="flex-shrink-0 w-full md:w-1/3 rounded-lg overflow-hidden shadow-lg">
        <Image
          src="/images/img3.jpg"
          alt="Rise Above Yourself"
          width={400}
          height={400}
          className="object-cover w-full h-full"
          priority
        />
      </div>

      {/* Text Section */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4 md:w-2/3">
        <h2 className="text-6xl text-[#EF0101] font-extrabold font-allerta_stencil">
          OUR TRAINING
        </h2>

        <p className="text-base sm:text-lg leading-relaxed max-w-prose">
          We specialize in functional bodyweight training — building strength,
          control, and mobility that carry over beyond the gym Because when you
          own your body you own
        </p>
      </div>
    </div>
  );
}
