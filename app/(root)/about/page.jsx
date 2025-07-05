import Entry from "@/app/components/Entry";
import FounderSection from "./Founder";
import MissionSlider from "./MissionSlider";

export default function About() {
  return (
    <section className="bg-background text-white">
      <Entry id="about" title="Reddiet" img="/images/asset3.jpg" />
      <div id="about">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 py-12 ">
          <FounderSection />
        </div>
        <MissionSlider />
      </div>
    </section>
  );
}
