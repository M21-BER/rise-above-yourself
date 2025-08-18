import Image from "next/image";
import { ProcessDesc, ProcessTitle } from "../Texts/Text";

export default function TheProcess() {
  return (
    <div className="w-full h-screen relative bg-neutral-800">
      <Image
        src="/images/slider/slider5.jpg"
        alt="Team Photo"
        fill
        className="object-cover"
      />

      <div className="bg-red-600 [clip-path:polygon(0_0,100%_0,100%_100%,0_100%)] sm:[clip-path:polygon(0_0,100%_0,93%_100%,0_100%)]  w-[100%] sm:w-[45%] xl:w-[35%]">
        <div className="relative px-10 py-5">
          <ProcessTitle />
          <ProcessDesc />
        </div>
      </div>
    </div>
  );
}
