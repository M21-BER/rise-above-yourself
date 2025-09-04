// // app/components/InTheZone.tsx
// "use client";
// import SlideInOnScroll from "../SlideInOnScroll";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import { Gallery } from "../../components/Texts/Text";

// const cars = [
//   {
//     src: "/images/carousel/car1.jpg",
//     caption: "Alone we lift, together we conquer.",
//   },
//   {
//     src: "/images/carousel/car2.jpg",
//     caption: "Stronger every rep, sharper every set.",
//   },
//   {
//     src: "/images/carousel/car3.jpg",
//     caption: "A team that sweats together, grows together.",
//   },
//   {
//     src: "/images/carousel/car4.jpg",
//     caption: "Discipline beats motivation — show up daily.",
//   },
//   {
//     src: "/images/carousel/car5.jpg",
//     caption: "Push harder today for a stronger tomorrow.",
//   },
//   {
//     src: "/images/carousel/car6.jpg",
//     caption: "One more rep is the difference between good and great.",
//   },
//   {
//     src: "/images/carousel/car7.jpg",
//     caption: "Your only competition is who you were yesterday.",
//   },
//   {
//     src: "/images/carousel/car8.jpg",
//     caption: "Power is built in silence, revealed in results.",
//   },
//   {
//     src: "/images/carousel/car9.jpg",
//     caption: "Great bodies are built by consistent teams.",
//   },
//   { src: "/images/carousel/car10.jpg", caption: "Sweat now, shine later." },
// ];

// export default function InTheZone() {
//   return (
//     <section className="mt-12 flex justify-center flex-col">
//       <div className="py-16 bg-gray-50 text-center">
//         <SlideInOnScroll>
//           <Gallery />
//         </SlideInOnScroll>

//         {/* Swiper Carousel */}
//         <div className="mt-12 flex justify-center">
//           <Swiper
//             effect="coverflow"
//             grabCursor={true}
//             centeredSlides={true}
//             slidesPerView="auto"
//             loop={true}
//             coverflowEffect={{
//               rotate: 0,
//               stretch: 0,
//               depth: 250,
//               modifier: 1.2,
//               slideShadows: false,
//             }}
//             pagination={{ clickable: true }}
//             navigation={true}
//             modules={[EffectCoverflow, Pagination, Navigation]}
//             className="w-full max-w-5xl"
//           >
//             {cars.map((car, index) => (
//               <SwiperSlide
//                 key={index}
//                 className="!w-72 !h-[420px] md:!w-80 md:!h-[480px] rounded-xl shadow-xl overflow-hidden relative"
//               >
//                 {/* Background image */}
//                 <div
//                   className="w-full h-full bg-cover bg-center"
//                   style={{ backgroundImage: `url(${car.src})` }}
//                 />

//                 {/* Caption at bottom */}
//                 <div className="absolute bottom-0 w-full bg-black/60 p-3 text-center">
//                   <p className="text-white text-sm md:text-base font-medium">
//                     {car.caption}
//                   </p>
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       </div>
//     </section>
//   );
// }

// app/components/InTheZone.tsx
"use client";
import SlideInOnScroll from "../SlideInOnScroll";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Gallery } from "../../components/Texts/Text";

const cars = [
  {
    src: "/images/carousel/car1.jpg",
    caption: "Alone we lift, together we conquer.",
  },
  {
    src: "/images/carousel/car2.jpg",
    caption: "Stronger every rep, sharper every set.",
  },
  {
    src: "/images/carousel/car3.jpg",
    caption: "A team that sweats together, grows together.",
  },
  {
    src: "/images/carousel/car4.jpg",
    caption: "Discipline beats motivation — show up daily.",
  },
  {
    src: "/images/carousel/car5.jpg",
    caption: "Push harder today for a stronger tomorrow.",
  },
  {
    src: "/images/carousel/car6.jpg",
    caption: "One more rep is the difference between good and great.",
  },
  {
    src: "/images/carousel/car7.jpg",
    caption: "Your only competition is who you were yesterday.",
  },
  {
    src: "/images/carousel/car8.jpg",
    caption: "Power is built in silence, revealed in results.",
  },
  {
    src: "/images/carousel/car9.jpg",
    caption: "Great bodies are built by consistent teams.",
  },
  { src: "/images/carousel/car10.jpg", caption: "Sweat now, shine later." },
];

export default function InTheZone() {
  return (
    <section className="flex justify-center flex-col">
      <div className="py-16  text-center">
        <SlideInOnScroll>
          <Gallery />
        </SlideInOnScroll>

        {/* Swiper Carousel */}
        <div className="mt-12 flex justify-center">
          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            loop={true}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 250,
              modifier: 1.2,
              slideShadows: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            // modules={[EffectCoverflow, Navigation]}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="w-full max-w-6xl pb-12" // <-- extra bottom padding for gap
          >
            {cars.map((car, index) => (
              <SwiperSlide
                key={index}
                className="
                  !w-56 !h-72   /* small screens */
                  sm:!w-64 sm:!h-80
                  md:!w-72 md:!h-[420px]
                  lg:!w-80 lg:!h-[480px]
                  rounded-xl shadow-xl overflow-hidden relative
                "
              >
                {/* Background image */}
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${car.src})` }}
                />

                {/* Caption at bottom */}
                {/* <div className="absolute bottom-0 w-full bg-black/60 p-3 text-center">
                  <p className="text-white text-xs sm:text-sm md:text-base font-medium">
                    {car.caption}
                  </p>
                </div> */}
              </SwiperSlide>
            ))}

            <style jsx global>{`
              .swiper-button-next,
              .swiper-button-prev {
                color: #fff; /* arrow color */
                background-color: rgba(0, 0, 0, 0.6); /* subtle dark bg */
                border-radius: 50%; /* perfect circle */
                width: 44px;
                height: 44px;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: all 0.3s ease;
              }

              .swiper-button-next:hover,
              .swiper-button-prev:hover {
                background-color: rgba(239, 68, 68, 0.9); /* red-500 hover */
                transform: scale(1.1); /* smooth grow effect */
              }

              /* Make the arrow icons smaller so they fit well inside */
              .swiper-button-next::after,
              .swiper-button-prev::after {
                font-size: 18px;
                font-weight: bold;
              }

              /* Space from edges */
              .swiper-button-next {
                right: 20px;
              }
              .swiper-button-prev {
                left: 20px;
              }

              .swiper-pagination-bullet {
                background: #c19393; /* red-500 */
                opacity: 0.7;
              }

              .swiper-pagination-bullet-active {
                background: #dc2626; /* red-600 */
                opacity: 1;
              }
            `}</style>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
