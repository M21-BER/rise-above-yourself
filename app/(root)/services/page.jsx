// "use client";
// import { useState } from "react";
// import Header from "../../components/Header";

// import { FiChevronDown } from "react-icons/fi";
// import { services as servicesData } from "../../components/services";

// export default function Services() {
//   const [openStates, setOpenStates] = useState(servicesData.map(() => true));

//   const toggleIndex = (index) => {
//     setOpenStates((prev) =>
//       prev.map((isOpen, i) => (i === index ? !isOpen : isOpen))
//     );
//   };

//   return (
//     <div className="bg-[#0a0a0a] text-white min-h-screen">
//       <Header page="Services" />

//       <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 space-y-6">
//         {servicesData.map(
//           (
//             { title, subtitle, icon: Icon, description, quote, cta, image },
//             index
//           ) => {
//             const isOpen = openStates[index];

//             return (
//               <div
//                 key={index}
//                 className="bg-[#121212] border border-white/10 rounded-xl overflow-hidden transition-all shadow-md"
//               >
//                 {/* Header */}
//                 <button
//                   onClick={() => toggleIndex(index)}
//                   className={`w-full flex items-center justify-between px-6 py-4 transition-colors ${
//                     isOpen ? "grad" : "hover:bg-[#1c1c1c]"
//                   }`}
//                 >
//                   <div className="flex items-center gap-4">
//                     <Icon
//                       className={`text-2xl ${
//                         isOpen ? "text-white" : "text-[#D00A02]"
//                       }`}
//                     />
//                     <div className="text-left">
//                       <h3 className="text-lg sm:text-xl font-bold uppercase">
//                         {title}
//                       </h3>
//                       <p className="text-sm sm:text-base text-gray-400">
//                         {subtitle}
//                       </p>
//                     </div>
//                   </div>
//                   <FiChevronDown
//                     className={`text-white text-2xl transition-transform duration-300 ${
//                       isOpen ? "rotate-180" : "rotate-0"
//                     }`}
//                   />
//                 </button>

//                 {/* Expandable Content */}
//                 <div
//                   className={`transition-all duration-500 ease-in-out overflow-hidden ${
//                     isOpen ? "max-h-screen" : "max-h-0"
//                   }`}
//                 >
//                   <div className="grid md:grid-cols-2 gap-6 p-6">
//                     {/* Image */}
//                     <div className="w-full h-64 md:h-80 rounded-lg overflow-hidden">
//                       <img
//                         src={image}
//                         alt={title}
//                         className="w-full h-full object-cover rounded-lg"
//                       />
//                     </div>

//                     {/* Text */}
//                     <div className="flex flex-col justify-center gap-4 text-left">
//                       <h4 className="text-xl sm:text-2xl font-bold uppercase">
//                         {title}
//                       </h4>
//                       <p className="text-gray-300 text-sm sm:text-base">
//                         {description}
//                       </p>
//                       <p className="italic font-semibold text-white text-sm sm:text-base">
//                         {quote}
//                       </p>
//                       {cta && (
//                         <div className="flex flex-col md:flex-row items-center md:items-start">
//                           <button className="mt-2 px-5 py-2.5 text-sm font-semibold bg-[#D00A02] hover:opacity-80 text-white rounded-full transition">
//                             {cta}
//                           </button>
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             );
//           }
//         )}
//       </div>
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import Header from "../../components/Header";
import { FiChevronDown } from "react-icons/fi";
import { services as servicesData } from "../../components/services";

export default function Services() {
  const [openStates, setOpenStates] = useState(servicesData.map(() => true));

  const toggleIndex = (index) => {
    setOpenStates((prev) =>
      prev.map((isOpen, i) => (i === index ? !isOpen : isOpen))
    );
  };

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen">
      <Header page="Services" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 space-y-6">
        {servicesData.map(
          (
            { title, subtitle, icon: Icon, description, quote, cta, image },
            index
          ) => {
            const isOpen = openStates[index];

            return (
              <div
                key={index}
                className="bg-[#121212] border border-white/10 rounded-xl overflow-hidden transition-all shadow-md"
              >
                {/* Header */}
                <button
                  onClick={() => toggleIndex(index)}
                  className={`w-full flex items-center justify-between px-6 py-4 transition-colors ${
                    isOpen ? "bg-[#D00A02]" : "hover:bg-[#1c1c1c]"
                  }`}
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4">
                    <Icon
                      className={`text-2xl ${
                        isOpen ? "text-white" : "text-[#D00A02]"
                      }`}
                    />
                    <div className="text-left">
                      <h3 className="text-lg sm:text-xl font-bold uppercase">
                        {title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-400">
                        {subtitle}
                      </p>
                    </div>
                  </div>
                  <FiChevronDown
                    className={`text-white text-2xl transition-transform duration-300 ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>

                {/* Expandable Content */}
                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-[2000px]" : "max-h-0"
                  }`}
                >
                  <div className="grid md:grid-cols-2 gap-6 p-6">
                    {/* Image */}
                    <div className="w-full h-64 md:h-80 rounded-lg overflow-hidden">
                      <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>

                    {/* Text Content */}
                    <div className="flex flex-col justify-center gap-4 text-left">
                      <h4 className="text-xl sm:text-2xl font-bold uppercase">
                        {title}
                      </h4>
                      <p className="text-gray-300 text-sm sm:text-base">
                        {description}
                      </p>
                      <p className="italic font-semibold text-white text-sm sm:text-base">
                        {quote}
                      </p>

                      {cta && (
                        <div className="flex flex-col md:flex-row items-center md:items-start">
                          <button className="self-center md:self-start mt-2 px-5 py-2.5 text-sm font-semibold bg-[#D00A02] hover:opacity-80 text-white rounded-full transition">
                            {cta}
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}
