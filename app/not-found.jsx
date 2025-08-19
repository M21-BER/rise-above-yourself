import Image from "next/image";
import { NotFoundContent } from "./components/Texts/Text";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center w-full pt-20 h-screen bg-white text-black">
      {/* 404 Image */}
      <div className="relative w-80 h-80">
        <Image
          src="/images/space.png" // put your image inside /public folder
          alt="404 Not Found"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Text */}
      <NotFoundContent />
    </div>
  );
}
