import FunctionalTraining from "../components/home/sections/FunctionalTraining";
import Hero from "../components/home/landing/Hero";
import AboutRayEntry from "../components/home/sections/AboutRayEntry";
import Support from "../components/home/sections/Support";
import DownloadApp from "../components/home/sections/Download";

export default function HeroSection() {
  return (
    <>
      <Hero />
      <AboutRayEntry />
      <Support />
      <FunctionalTraining />
      <DownloadApp />
    </>
  );
}
