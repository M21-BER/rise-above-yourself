import Image from "next/image";

export default function FounderSection() {
  return (
    // <section className="w-full min-h-[600px] bg-[#0a0a0a] text-white flex flex-col md:flex-row items-center justify-center">
    //   {/* Left Text */}
    //   <div className="w-full md:w-1/2 px-6 py-12 md:px-12 md:py-24 flex flex-col justify-center items-center text-center">
    //     <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-300 max-w-xl">
    //       R.A.Y Athletics is a performance-based training facility that started
    //       from nothing but a ball, a few cones, and a drive to show up. What
    //       began with one-on-one soccer sessions in parks and driveways has grown
    //       into a full training center built on consistency, purpose, and a deep
    //       love for the game. Our roots are in soccer, but our mission goes
    //       beyond the field. We believe in training people to take full control
    //       of their body and mindset. Whether you're an athlete trying to level
    //       up or someone just getting started, we focus on real movement,
    //       functional strength, and long-term growth. This is not a quick-fix
    //       gym. It's a space where work matters, where effort is respected, and
    //       where community drives progress.
    //     </p>
    //   </div>

    //   {/* Right Image */}
    //   <div className="w-full md:w-1/2 relative">
    //     <div className="relative w-full h-[400px] md:h-[500px] grayscale hover:grayscale-0 transition duration-500">
    //       <Image
    //         src="/images/trainer.jpg"
    //         alt="Rediet Training"
    //         fill
    //         className="object-cover object-center opacity-80 rounded-br-4xl rounded-tl-4xl"
    //         priority
    //       />
    //     </div>
    //   </div>
    // </section>
    <section className="w-full min-h-[600px] bg-[#0a0a0a] text-white flex flex-col md:flex-row items-center justify-center">
      <div className="max-w-4xl mx-auto text-center">
        {/* Decorative Line */}
        <div className="w-20 h-1 mb-6 mx-auto rounded grad"></div>
        {/* Content Box */}
        <div className="bg-[#121212] border border-[#D00A02] rounded-lg shadow-lg p-6 sm:p-10 text-left">
          <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-6 text-gray-300">
            R.A.Y Athletics is a performance-based training facility that
            started from nothing but a ball, a few cones, and a drive to show
            up. What began with one-on-one soccer sessions in parks and
            driveways has grown into a full training center built on
            consistency, purpose, and a deep love for the game. Our roots are in
            soccer, but our mission goes beyond the field. We believe in
            training people to take full control of their body and mindset.
            Whether you're an athlete trying to level up or someone just getting
            started, we focus on real movement, functional strength, and
            long-term growth. This is not a quick-fix gym. It's a space where
            work matters, where effort is respected, and where community drives
            progress.
          </p>
        </div>
      </div>
    </section>
  );
}
