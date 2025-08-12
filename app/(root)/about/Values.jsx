// import { Handshake, Shield, Smile } from "lucide-react";
// import Image from "next/image";

// const values = [
//   {
//     title: "Consistency",
//     desc: "We show up — not just when it’s exciting, but especially when it’s not.",
//     icon: Handshake,
//   },
//   {
//     title: "Effort",
//     desc: "You don’t have to be the best. You just have to try — fully, and for real.",
//     icon: Shield,
//   },
//   {
//     title: "Respect",
//     desc: "We treat people, space, and the work with care. That’s non-negotiable.",
//     icon: Handshake,
//   },
//   {
//     title: "Responsibility",
//     desc: "You take ownership of your body, your progress, and your energy. Nobody can do that for you.",
//     icon: Smile,
//   },
//   {
//     title: "Presence",
//     desc: "We train hard, but we also enjoy being here. Good people, good energy — that matters too.",
//     icon: Smile,
//   },
// ];

// export default function RightSemiCircleOutsideIcons() {
//   return (
//     <div className="flex justify-center items-center">
//       <div className="flex gap-5">
//         <div className="">
//           <Image
//             src="/images/circle-logo-black.PNG"
//             alt="Ray Athletics Logo"
//             width={200}
//             height={200}
//             className="object-contain"
//           />
//         </div>
//         <div className="border-l-5 border-red-700 pl-3">
//           {values.map((value, key) => {
//             const IconComponent = value.icon;

//             return (
//               <div key={key} className="flex flex-row">
//                 <div className="rounded-full w-8 h-8 flex justify-center items-center bg-background border border-red-500">
//                   <IconComponent className="w-5 h-5 text-white" />
//                 </div>
//                 <div className="p-1 text-left">
//                   <h4 className="font-semibold text-base text-black">
//                     {value.title}
//                   </h4>
//                   <p className="text-sm text-black  mt-1">{value.desc}</p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { Handshake, Shield, Smile } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const values = [
  {
    title: "Consistency",
    desc: "We show up — not just when it’s exciting, but especially when it’s not.",
    icon: Handshake,
  },
  {
    title: "Effort",
    desc: "You don’t have to be the best. You just have to try — fully, and for real.",
    icon: Shield,
  },
  {
    title: "Respect",
    desc: "We treat people, space, and the work with care. That’s non-negotiable.",
    icon: Handshake,
  },
  {
    title: "Responsibility",
    desc: "You take ownership of your body, your progress, and your energy. Nobody can do that for you.",
    icon: Smile,
  },
  {
    title: "Presence",
    desc: "We train hard, but we also enjoy being here. Good people, good energy — that matters too.",
    icon: Smile,
  },
];

export default function RightSemiCircleOutsideIcons() {
  // Control animation delay on mount
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <section
      aria-label="Core values"
      className="flex justify-center items-center px-4 py-8 sm:py-12 md:py-16"
    >
      <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-12 max-w-7xl w-full">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Image
            src="/images/circle-logo-black.PNG"
            alt="Ray Athletics Logo"
            width={200}
            height={200}
            className="object-contain w-32 sm:w-44 md:w-52 lg:w-60 xl:w-72"
            priority
          />
        </div>

        {/* Values List */}
        <div className="border-l-4 border-red-700 pl-4 sm:pl-6 md:pl-8 w-full max-w-xl">
          {values.map((value, idx) => {
            const IconComponent = value.icon;
            return (
              <article
                key={idx}
                className={`flex items-start gap-4 mb-6 last:mb-0 opacity-0 transform translate-y-6 transition-all duration-700 ease-out
                  ${animate ? "opacity-100 translate-y-0" : ""}
                `}
                style={{ transitionDelay: `${idx * 150}ms` }}
                tabIndex={0}
                aria-labelledby={`value-title-${idx}`}
              >
                <div
                  className="rounded-full w-10 h-10 flex justify-center items-center bg-red-700 border border-red-900 flex-shrink-0"
                  aria-hidden="true"
                >
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4
                    id={`value-title-${idx}`}
                    className="font-semibold text-lg sm:text-xl text-black"
                  >
                    {value.title}
                  </h4>
                  <p className="text-sm sm:text-base text-gray-900 mt-1 leading-relaxed">
                    {value.desc}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
