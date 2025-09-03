import Image from "next/image";
import Values from "./Values";
import DriveVideo from "@/app/components/DrvieVideo";
import {
  AboutFounder,
  AboutHeader,
  AboutParagraph,
} from "@/app/components/Texts/Text";

export default function About() {
  return (
    <section className="bg-white pt-16">
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row h-auto lg:h-[60vh] bg-background w-full overflow-hidden">
        {/* Text Content */}
        <AboutHeader />
        {/* Image */}
        <div className="flex-1 relative w-full min-h-[200px] sm:min-h-[300px] md:min-h-[400px] lg:h-full overflow-hidden">
          <Image
            src="/images/slider/slider16.jpg"
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
          <AboutFounder />
        </div>
        {/* Full-Width Image */}
        <div className="relative w-full min-h-[250px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-screen">
          <Image
            src="/images/slider/slider2.jpg"
            alt="Youth soccer training session on green field with players and coach"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>

        {/* Description */}
        <div className="py-6 sm:py-10 px-4 sm:px-6 md:px-12 text-center max-w-6xl mx-auto">
          <AboutParagraph />
          <div className="w-20 sm:w-32 h-1 grad m-auto mt-4"></div>
        </div>
      </div>

      <DriveVideo />
    </section>
  );
}
