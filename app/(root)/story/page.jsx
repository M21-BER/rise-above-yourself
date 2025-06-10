// import Header from "../../components/Header";
// import Mission from "./components/Mission";
// import CheckItem from "../../components/CheckItem";

// export default function About() {
//   return (
//     <section className="bg-black text-white">
//       {/* Header Section */}
//       <Header
//         page="STORY"
//         subtitle="From the field to a lifestyle — where discipline, grit, and growth define the journey."
//       />

//       {/* About Content Section */}
//       <div className="max-w-6xl mx-auto px-6 sm:px-10 py-12">
//         <div className="flex flex-col md:flex-row gap-10 items-center">
//           {/* Text Section */}
//           <div className="flex-1 space-y-6 text-center md:text-left">
//             <h2 className="text-3xl sm:text-4xl font-bold font-allerta_stencil red_grad_text">
//               From Field to Foundation
//             </h2>
//             <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
//               Ray’s journey started on the soccer field — a young athlete driven
//               by a fierce love for the game and an unshakable work ethic. From
//               early morning practices to grinding through challenges, he learned
//               what it really means to push past limits, build discipline, and
//               own his body.
//             </p>
//             <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
//               That dedication didn’t just make him a better athlete — it shaped
//               his mindset and his mission. Ray Athletics is built from that same
//               foundation: the relentless pursuit to Rise Above Yourself.
//             </p>
//             <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
//               It’s about taking the grit, discipline, and lessons learned
//               through sport — and turning them into a way of life for anyone
//               with a body who’s ready to move, grow, and perform.
//             </p>
//           </div>

//           {/* Image Section */}
//           <div className="flex-1 relative w-full aspect-video rounded-sm overflow-hidden shadow-2xl">
//             <video
//               autoPlay
//               muted
//               loop
//               playsInline
//               className="absolute inset-0 w-full h-full object-cover rounded-sm"
//             >
//               <source src="/videos/main.mp4" type="video/mp4" />
//               Your browser does not support the video tag.
//             </video>
//           </div>
//         </div>
//         <div className="mt-16">
//           <h2 className="text-2xl md:text-3xl font-bold font-allerta_stencil text-gray-200 mb-6">
//             MANIFESTO
//           </h2>
//           <div className="text-gray-800 space-y-3">
//             <CheckItem text="You’re not here to coast, You’re here to grow." />
//             <CheckItem text="Not just stronger — Sharper, Faster, Wiser." />
//             <p></p>
//             <CheckItem text="Every rep is a reminder:" />
//             <ul className="pl-3 sm:pl-10 list-inside space-y-1">
//               {/* <ul className="pl-10  list-inside space-y-1"> */}
//               <CheckItem text="You don’t train to look good. You train to be ready." />
//               <CheckItem text="For the next game." />
//               <CheckItem text="The next test." />
//               <CheckItem text="The next test." />
//               <CheckItem text="The next hard thing in life." />
//               <CheckItem
//                 text="This isn’t a hobby, This is who you become."
//                 addon="font-semibold"
//               />
//               <CheckItem
//                 text="Train for something bigger."
//                 addon="font-semibold"
//               />
//             </ul>
//           </div>
//         </div>

//         <Mission />
//       </div>
//     </section>
//   );
// }

import Header from "../../components/Header";
import Mission from "./components/Mission";
import CheckItem from "../../components/CheckItem";

export default function About() {
  return (
    <section className="bg-black text-white">
      {/* Header Section */}
      <Header
        page="STORY"
        subtitle="From the field to a lifestyle — where discipline, grit, and growth define the journey."
      />

      {/* About Content Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 py-12">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          {/* Text Section */}
          <div className="flex-1 space-y-6 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold font-allerta_stencil red_grad_text">
              From Field to Foundation
            </h2>
            <p className="text-sm sm:text-base md:text-[17px] text-gray-300 leading-relaxed">
              Ray’s journey started on the soccer field — a young athlete driven
              by a fierce love for the game and an unshakable work ethic. From
              early morning practices to grinding through challenges, he learned
              what it really means to push past limits, build discipline, and
              own his body.
            </p>
            <p className="text-sm sm:text-base md:text-[17px] text-gray-300 leading-relaxed">
              That dedication didn’t just make him a better athlete — it shaped
              his mindset and his mission. Ray Athletics is built from that same
              foundation: the relentless pursuit to Rise Above Yourself.
            </p>
            <p className="text-sm sm:text-base md:text-[17px] text-gray-300 leading-relaxed">
              It’s about taking the grit, discipline, and lessons learned
              through sport — and turning them into a way of life for anyone
              with a body who’s ready to move, grow, and perform.
            </p>
          </div>

          {/* Video Section */}
          <div className="flex-1 relative w-full aspect-video rounded-md overflow-hidden shadow-2xl">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover rounded-md"
            >
              <source src="/videos/main.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Manifesto */}
        <div className="mt-16">
          <h2 className="text-xl sm:text-2xl font-bold font-allerta_stencil text-gray-200 mb-6">
            MANIFESTO
          </h2>
          <div className="text-gray-800 space-y-3">
            <CheckItem text="You’re not here to coast, You’re here to grow." />
            <CheckItem text="Not just stronger — Sharper, Faster, Wiser." />
            <CheckItem text="Every rep is a reminder:" />
            <ul className="pl-2 sm:pl-5 md:pl-10 list-inside space-y-1">
              <CheckItem text="You don’t train to look good. You train to be ready." />
              <CheckItem text="For the next game." />
              <CheckItem text="The next test." />
              <CheckItem text="The next hard thing in life." />
              <CheckItem
                text="This isn’t a hobby, This is who you become."
                addon="font-semibold"
              />
              <CheckItem
                text="Train for something bigger."
                addon="font-semibold"
              />
            </ul>
          </div>
        </div>

        <Mission />
      </div>
    </section>
  );
}
