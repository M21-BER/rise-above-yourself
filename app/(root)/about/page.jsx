import Image from "next/image";
import Values from "./Values";
import VideoHero from "../../components/VideoHero";

export default function About() {
  return (
    <section className="bg-white pt-24">
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row h-auto lg:h-[60vh] bg-background w-full overflow-hidden">
        {/* Text Content */}
        <div className="relative flex-1 flex flex-col justify-center px-4 sm:px-6 md:px-8 py-6 text-center lg:text-left">
          <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
            R.A.Y ATHLETICS
          </h2>
          <p className="text-white mt-3 sm:mt-4 text-sm sm:text-base md:text-lg max-w-[800px] mx-auto lg:mx-0">
            What began with one-on-one soccer sessions in parks and driveways
            has grown into a full training center built on consistency, purpose,
            and a deep love for the game.
          </p>
        </div>

        {/* Image */}
        <div className="flex-1 relative w-full min-h-[200px] sm:min-h-[300px] md:min-h-[400px] lg:h-full overflow-hidden">
          <Image
            src="/images/asset7.jpg"
            alt="RAY Athletics Logo"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 16% 100%)",
            }}
            priority
          />
        </div>
      </div>
      <Values />
      {/* Founder Section */}
      <div className="bg-white">
        <div className="flex flex-col justify-center items-center py-8 sm:py-10 px-4 text-center">
          <div className="w-12 sm:w-16 h-1 grad"></div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mt-3 mb-2">
            Founded by
          </h1>
          <p className="text-black text-base sm:text-lg md:text-xl">
            Reddiet Berihun
          </p>
        </div>

        {/* Full-Width Image */}
        <div className="relative w-full min-h-[250px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-screen">
          <Image
            src="/images/asset10.jpg"
            alt="Youth soccer training session on green field with players and coach"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>

        {/* Description */}
        <div className="py-6 sm:py-10 px-4 sm:px-6 md:px-12 text-center max-w-6xl mx-auto">
          <p className="text-sm sm:text-base md:text-lg font-medium text-black mt-3 mb-4 leading-relaxed">
            Ray Athletics started with our founder’s passion for soccer. From
            early on, it was more than just a sport; it was his focus, his
            discipline, and the way he connected with others. He began training
            kids in local parks and driveways, doing whatever he could to help
            them move better and play stronger.
          </p>
          <p className="text-sm sm:text-base md:text-lg font-medium text-black mt-3 mb-4 leading-relaxed">
            Over time, those sessions grew into a full training program. What
            started with soccer became a space for youth and adults to train
            with purpose, building strength, consistency, and confidence along
            the way.
          </p>
          <div className="w-20 sm:w-32 h-1 grad m-auto mt-4"></div>
        </div>
      </div>

      <VideoHero
        src="/videos/low.webm"
        poster="/images/asset1.jpg"
        title="R.A.Y ATHLETICS — Concept Reel"
        subtitle="Studio • Workout • 2025"
        ctaText="See Services"
        ctaHref="/services"
      />
    </section>
  );
}
