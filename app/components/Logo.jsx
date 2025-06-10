// import Image from "next/image";

// function Logo() {
//   return (
//     <div className="flex items-center gap-0">
//       {/* Logo always visible */}
//       <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16">
//         <Image
//           src="/images/icon.png"
//           alt="rise above yourself brand icon"
//           fill
//           sizes="(max-width: 640px) 40px,
//                  (max-width: 768px) 48px,
//                  (max-width: 1024px) 56px,
//                  64px"
//           priority
//           style={{ objectFit: "contain" }}
//         />
//       </div>

//       {/* Text hidden on xs, shows from sm up */}
//       <div className="hidden sm:flex flex-col  leading-none pl-1">
//         <h2 className="font-allerta_stencil text-sm sm:text-base md:text-lg lg:text-xl">
//           R.A.Y ATHLETICS
//         </h2>
//         <h4 className="font-jost  italic text-[10px] sm:text-xs md:text-sm lg:text-base text-[#EF0101]">
//           RISE ABOVE YOURSELF
//         </h4>
//       </div>
//     </div>
//   );
// }

// export default Logo;

import Image from "next/image";

function Logo() {
  return (
    <div className="flex items-center gap-0">
      {/* Logo Image */}
      <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16">
        <Image
          src="/images/icon.png"
          alt="rise above yourself brand icon"
          fill
          sizes="(max-width: 640px) 40px,
                 (max-width: 768px) 48px,
                 (max-width: 1024px) 56px,
                 64px"
          priority
          style={{ objectFit: "contain" }}
        />
      </div>

      {/* Text (sm and up) */}
      <div className="hidden sm:flex flex-col justify-center leading-tight pl-1">
        <h2 className="font-allerta_stencil text-xs sm:text-sm md:text-base lg:text-lg tracking-tight">
          R.A.Y ATHLETICS
        </h2>
        <h4 className="font-jost italic text-[9px] sm:text-[10px] md:text-xs lg:text-sm text-[#EF0101]">
          RISE ABOVE YOURSELF
        </h4>
      </div>
    </div>
  );
}

export default Logo;
