import FunctionalTraining from "../components/home/sections/FunctionalTraining";
import Hero from "../components/home/landing/Hero";
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
      {/* <FunctionalTraining /> */}
      {/* <AboutRayEntry />
       */}
      <FunctionalTraining />
      <AppShowcase />
    </>
  );
}
