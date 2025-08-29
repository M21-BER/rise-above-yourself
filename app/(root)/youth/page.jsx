import { Phone } from "lucide-react";
import VideoPlayer from "../../components/VideoPlayer";
import AppShowcase from "@/app/components/AppShowcase";
import {
  YouthBook,
  YouthDesc,
  YouthList,
  YouthTitle,
} from "@/app/components/Texts/Text";
import YouthService from "./YouthService";
import FadeInOnScroll from "@/app/components/FadeInOnScroll";

export default function YouthSoccerTraining() {
  return (
    <section className="w-full pt-14 sm:pt-20 bg-white">
      <div className="flex flex-col h-screen lg:flex-row items-stretch w-full">
        {/* Left Text Section */}
        <div className="flex-1 flex flex-col justify-center p-6 sm:p-8 lg:p-12">
          <FadeInOnScroll>
            <YouthTitle />
          </FadeInOnScroll>

          <YouthList />

          <YouthBook />
          <a
            href="tel:+16194047752"
            className="mt-3 w-fit inline-flex items-center gap-2 bg-red-600  text-white font-semibold rounded-full px-5 py-3 shadow-lg hover:opacity-90 transition"
          >
            <div className="flex items-center justify-center bg-red-600 rounded-full p-2">
              <Phone className="w-5 h-5" />
            </div>
            <span className="text-sm sm:text-base lg:text-lg">
              +1 (619) 404-7752
            </span>
          </a>
        </div>
        {/* Right Video Section */}
        <VideoPlayer />
      </div>
      <div className="w-full">
        {/* TOP: Black section with responsive padding */}
        <div className="bg-black text-white">
          <div
            className="max-w-screen-2xl mx-auto 
                                px-3 xs:px-4 sm:px-6 lg:px-8
                                pt-8 xs:pt-10 sm:pt-14 lg:pt-20 xl:pt-28
                                pb-16 xs:pb-20 sm:pb-28 lg:pb-40 xl:pb-48"
          >
            <div className="max-w-4xl mx-auto text-center z-20 relative">
              <YouthDesc />
              <div className="w-12 sm:w-14 h-1 bg-red-600  mx-auto mt-3 sm:mt-4"></div>
            </div>
          </div>
        </div>

        {/* CARDS: responsive negative margin for overlap */}
        <div
          className="max-w-screen-2xl mx-auto 
                              px-3 xs:px-4 sm:px-6 lg:px-8
                              -mt-10 xs:-mt-12 sm:-mt-20 lg:-mt-28 xl:-mt-36
                              relative z-10"
        >
          <YouthService />
        </div>

        {/* Bottom white section */}
        <div className="bg-white min-h-[25vh] xs:min-h-[30vh] sm:min-h-[35vh]"></div>
      </div>
      <AppShowcase />
    </section>
  );
}
