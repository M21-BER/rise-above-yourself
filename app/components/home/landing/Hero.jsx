// import Brand from "./Brand";

// function Hero() {
//   return (
//     <div
//       className="relative w-full h-screen bg-cover bg-center"
//       style={{ backgroundImage: "url(/images/gym.jpg)" }}
//     >
//       <div className="absolute inset-0 bg-black/80 z-10" />
//       <div className="relative z-20 flex  flex-col justify-center items-center  w-full h-full">
//         <Brand />

//         <button
//           className="bg-gradient-to-r from-red-600 via-red-500 to-red-700
//              hover:from-red-700 hover:via-red-600 hover:to-red-800
//              transition-all duration-300 ease-in-out
//              text-white text-base sm:text-lg md:text-xl font-semibold
//              px-5 sm:px-7 md:px-9 py-2.5 sm:py-3.5 md:py-4
//              rounded-full shadow-xl hover:shadow-2xl"
//         >
//           JOIN THE MOVEMENT
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Hero;

import Image from "next/image";
import Brand from "./Brand";

function Hero() {
  return (
    <div className="relative w-full h-screen">
      {/* Background Image with next/image */}
      <Image
        src="/images/gym.jpg"
        alt="Gym background"
        fill // cover the parent div
        style={{ objectFit: "cover", objectPosition: "center" }}
        priority // loads immediately (hero image)
        // placeholder="blur"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80 z-10" />
      {/* Content */}
      <div className="relative z-20 flex flex-col justify-center items-center w-full h-full px-4">
        <Brand />

        <button
          className="bg-gradient-to-r from-red-600 via-red-500 to-red-700 
             hover:from-red-700 hover:via-red-600 hover:to-red-800
             transition-all duration-300 ease-in-out 
             text-white text-base sm:text-lg md:text-xl font-semibold 
             px-5 sm:px-7 md:px-9 py-2.5 sm:py-3.5 md:py-4 
             rounded-full shadow-xl hover:shadow-2xl mt-8"
        >
          JOIN THE MOVEMENT
        </button>
      </div>
    </div>
  );
}

export default Hero;
