import FounderSection from "./components/Founder";
import MissionSlider from "./components/MissionSlider";
import Header from "@/app/components/Header";

export default function About() {
  return (
    <section className="bg-background text-white">
      <Header
        subtitle="R.A.Y Athletics is a performance-focused training facility built from the
      ground up to serve a bigger purpose than getting in shape."
      />

      {/* About Content Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 py-12 ">
        <FounderSection />
      </div>
      <MissionSlider />
    </section>
  );
}
