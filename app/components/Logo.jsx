import Image from "next/image";

function Logo() {
  return (
    <div className="flex items-center gap-2">
      {/* Responsive Logo Image */}
      <div className="relative w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 max-w-[64px] max-h-[64px]">
        <Image
          src="/images/icon.png"
          alt="rise above yourself brand icon"
          fill
          sizes="(max-width: 640px) 32px,
                 (max-width: 768px) 40px,
                 (max-width: 1024px) 48px,
                 (max-width: 1280px) 56px,
                 64px"
          priority
          style={{ objectFit: "contain" }}
        />
      </div>

      {/* Text (sm and up) */}
      <div className="hidden sm:flex flex-col justify-center leading-tight pl-1">
        <h2
          className="
            font-allerta_stencil 
            text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] 
            tracking-tight
            leading-tight
          "
          style={{ maxHeight: "60%" }}
        >
          R.A.Y ATHLETICS
        </h2>
        <h4
          className="
            italic
            font-extrabold
            text-[9px] sm:text-[10px] md:text-[10px] lg:text-[10px] 
            text-[#D00A02]
            leading-snug
          "
          style={{ maxHeight: "40%" }}
        >
          RISE ABOVE YOURSELF
        </h4>
      </div>
    </div>
  );
}

export default Logo;
