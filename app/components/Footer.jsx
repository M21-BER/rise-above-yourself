// import {
//   FaInstagram,
//   FaTiktok,
//   FaPhoneAlt,
//   FaMapMarkerAlt,
//   FaFacebook,
// } from "react-icons/fa";

// export default function Footer() {
//   return (
//     <footer className="border-t-2 border-[rgba(255,255,255,0.1)] bg-black text-white py-10 px-6 text-sm">
//       <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 ">
//         {/* Left Column - Contact Info */}
//         <div>
//           <h3 className="font-bold mb-3 text-white">Connect With Us</h3>
//           <ul className="space-y-3 text-gray-400">
//             <li className="flex items-center gap-2">
//               <FaPhoneAlt className="text-[#E30803]" />
//               +1 (619) 404-7752
//             </li>
//             <li className="flex items-start gap-2">
//               <FaMapMarkerAlt className="text-[#E30803] mt-1" />
//               <span>
//                 5649L General Washington Dr. <br />
//                 Alexandria, Virginia
//               </span>
//             </li>
//           </ul>
//         </div>

//         {/* Right Column - Address + Social Icons */}
//         <div className="md:pl-10 md:border-l-2 border-[#E30803] flex flex-col justify-between">
//           {/* Address on Top */}
//           <div>
//             <h3 className="font-bold mb-3 text-white">Address</h3>
//             <p className="text-gray-400">
//               Ray Athletics HQ <br />
//               5649L General Washington Dr. <br />
//               Alexandria, VA 22312 <br />
//               United States
//             </p>
//           </div>

//           {/* Social Icons on Bottom */}
//           <div className="mt-6 flex gap-5 text-lg">
//             <a
//               href="https://www.instagram.com/athlete_whispererr"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:text-white text-gray-400"
//               aria-label="Instagram"
//             >
//               <FaInstagram />
//             </a>
//             <a
//               href="https://www.tiktok.com/discover/ray-athletics"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:text-white text-gray-400"
//               aria-label="TikTok"
//             >
//               <FaTiktok />
//             </a>
//             <a
//               href="https://www.facebook.com/rayathletics"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:text-white text-gray-400"
//               aria-label="Facebook"
//             >
//               <FaFacebook />
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Text */}
//       <div className="border-t border-gray-700 mt-10 pt-4 text-center text-gray-500 text-xs">
//         <p>SITE MAP | PRIVACY POLICY | TERMS OF SERVICE</p>
//         <p className="mt-2">
//           &copy; {new Date().getFullYear()} Rise Above Yourself
//         </p>
//       </div>
//     </footer>
//   );
// }

import { FaInstagram, FaTiktok, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t-2 border-[rgba(255,255,255,0.1)] bg-black text-white py-10 px-6 text-sm">
      {/* Social Icons Centered */}
      <div className="flex justify-center gap-8 text-3xl mb-6">
        <a
          href="https://www.instagram.com/athlete_whispererr"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white text-gray-400"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.tiktok.com/discover/ray-athletics"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white text-gray-400"
          aria-label="TikTok"
        >
          <FaTiktok />
        </a>
        <a
          href="https://www.facebook.com/rayathletics"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white text-gray-400"
          aria-label="Facebook"
        >
          <FaFacebook />
        </a>
      </div>

      {/* Bottom Text */}
      <div className="border-t border-gray-700 pt-4 text-center text-gray-500 text-xs">
        <p>SITE MAP | PRIVACY POLICY | TERMS OF SERVICE</p>
        <p className="mt-2">
          &copy; {new Date().getFullYear()} Rise Above Yourself
        </p>
      </div>
    </footer>
  );
}
