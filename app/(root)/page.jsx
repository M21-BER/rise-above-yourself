import FunctionalTraining from "../components/home/sections/FunctionalTraining";
import Hero from "../components/home/landing/Hero";
import AboutRayEntry from "../components/home/sections/AboutRayEntry";
// import Support from "../components/home/sections/Support";
import DownloadApp from "../components/home/sections/Download";
import FunctionalShowcase from "../components/home/sections/FunctionalShowcase";
import AppShowcase from "../components/AppShowcase";
import Carousel from "../components/home/sections/Carousel";
import Support from "../components/home/sections/we-love-to-travel";

export default function HeroSection() {
  return (
    <>
      <Hero />
      <FunctionalShowcase />
      <Support />
      {/* <Carousel /> */}
      {/* <AboutRayEntry /> */}
      <FunctionalTraining />
      {/* <AboutRayEntry />
       */}
      {/* <FunctionalTraining /> */}
      {/* <DownloadApp /> */}
      <AppShowcase />
    </>
  );
}
