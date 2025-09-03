import Image from "next/image";
import { ProcessDesc, ProcessTitle } from "../Texts/Text";
import SlideInFromTop from "../SlideInOnScroll";
import FadeInOnScroll from "../FadeInOnScroll";
import UltraCarousel from "../UltraCarousel";
const cars = [
  {
    src: "/images/carousel/car1.jpg",
    caption: "Alone we lift, together we conquer.",
  },
  {
    src: "/images/carousel/car2.jpg",
    caption: "Stronger every rep, sharper every set.",
  },
  {
    src: "/images/carousel/car3.jpg",
    caption: "A team that sweats together, grows together.",
  },
  {
    src: "/images/carousel/car4.jpg",
    caption: "Discipline beats motivation — show up daily.",
  },
  {
    src: "/images/carousel/car5.jpg",
    caption: "Push harder today for a stronger tomorrow.",
  },
  {
    src: "/images/carousel/car6.jpg",
    caption: "One more rep is the difference between good and great.",
  },
  {
    src: "/images/carousel/car7.jpg",
    caption: "Your only competition is who you were yesterday.",
  },
  {
    src: "/images/carousel/car8.jpg",
    caption: "Power is built in silence, revealed in results.",
  },
  {
    src: "/images/carousel/car9.jpg",
    caption: "Great bodies are built by consistent teams.",
  },
  { src: "/images/carousel/car10.jpg", caption: "Sweat now, shine later." },
];

export default function TheProcess() {
  return (
    <div className="w-full  relative bg-white">
      <UltraCarousel
        height={560}
        autoPlay
        autoPlayInterval={5000}
        slides={cars}
      />

      <div className="absolute top-0 bg-red-600 [clip-path:polygon(0_0,100%_0,100%_100%,0_100%)] sm:[clip-path:polygon(0_0,100%_0,93%_100%,0_100%)]  w-[100%] sm:w-[45%] xl:w-[35%]">
        <div className="relative px-10 py-5">
          <FadeInOnScroll>
            <ProcessTitle />
          </FadeInOnScroll>
        </div>
      </div>
    </div>
  );
}
