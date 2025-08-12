import AppShowcase from "../components/AppShowcase";
import Landing from "../components/home/landing";
import MoreThanGym from "../components/home/more_than_gym";
import TheProcess from "../components/home/the_process";
import Testimonies from "../components/home/Testimonies";

export default function HeroSection() {
  return (
    <>
      <Landing />
      <MoreThanGym />
      <TheProcess />
      <Testimonies />
      <AppShowcase />
    </>
  );
}
