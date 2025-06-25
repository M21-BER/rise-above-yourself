import SliderHeader from "./components/SliderHeader";
import FounderSection from "./components/Founder";
import MissionSlider from "./components/MissionSlider";
import Header from "@/app/components/Header";

export default function About() {
  return (
    <section className="bg-black text-white">
      {/* Header Section */}
      {/* <SliderHeader /> */}
      <Header />
      <div className="container my-5 mx-auto px-4 py-12 flex justify-center flex-col md:flex-row items-start md:items-center gap-6 md:gap-10">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white">
          ABOUT US
        </h2>

        {/* Divider */}
        <div className="hidden md:block h-16 border-l border-white/40" />

        {/* Text */}
        <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl">
          R.A.Y Athletics is a performance-focused training facility built from
          the ground up{" "}
          <strong className="font-semibold text-[#D00A02]">
            to serve a bigger purpose than getting in shape
          </strong>
          .
        </p>
      </div>

      {/* About Content Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 py-12 ">
        <FounderSection />
        <MissionSlider />
      </div>
    </section>
  );
}
