import Hero from "../components/home/landing/Hero";
import FunctionalTraining from "../components/home/sections/FunctionalTraining";
import Story from "../components/home/sections/Story";
import Support from "../components/home/sections/Support";

export default function HeroSection() {
  return (
    <>
      <Hero />
      <Story />
      <Support />
      <FunctionalTraining />
    </>
  );
}
