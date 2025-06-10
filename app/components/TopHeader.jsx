import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";

export default function Header() {
  return (
    <div className="text-gray-300 py-2 text-[12px] sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 text-left">
        {/* Email & Hours */}
        <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-4">
          <span className="flex items-center gap-1">
            <HiOutlineMail className="text-base sm:text-lg" />
            support@yourdomain.com
          </span>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-2">
          <HiOutlinePhone className="text-base sm:text-lg" />
          <a
            href="tel:+251910967434"
            className="hover:text-white transition-colors"
          >
            Call Us: (+251) 910 967 434
          </a>
        </div>
      </div>
    </div>
  );
}
