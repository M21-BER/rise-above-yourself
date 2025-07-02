// "use client";

// import { useState } from "react";
// import Link from "next/link";

// const newsItems = [
//   {
//     id: "1",
//     title: "Global Economy on the Rise",
//     summary: "Economies around the world are showing signs of recovery...",
//     content:
//       "In-depth analysis of the global economy's recent upswing, challenges, and future outlook.",
//     image:
//       "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
//   },
//   {
//     id: "2",
//     title: "New Technology in Renewable Energy",
//     summary: "Breakthroughs in solar panel efficiency have been announced...",
//     content:
//       "Solar energy technologies have advanced rapidly, making renewable energy more accessible than ever.",
//     image:
//       "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
//   },
//   {
//     id: "3",
//     title: "Health Benefits of Meditation",
//     summary:
//       "Studies confirm meditation can reduce stress and improve focus...",
//     content:
//       "Meditation has become mainstream with scientific backing its mental and physical health benefits.",
//     image:
//       "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80",
//   },
//   {
//     id: "4",
//     title: "SpaceX Launches New Rocket",
//     summary: "SpaceX has successfully launched its newest reusable rocket...",
//     content:
//       "The rocket launch marks a new milestone in space exploration with greater cost efficiency.",
//     image:
//       "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=800&q=80",
//   },
//   {
//     id: "5",
//     title: "Wildlife Conservation Success",
//     summary: "Efforts to save endangered species show promising results...",
//     content:
//       "Several endangered animals have seen population increases thanks to global conservation efforts.",
//     image:
//       "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=80",
//   },
//   {
//     id: "6",
//     title: "Advancements in AI Technology",
//     summary: "Artificial intelligence systems are becoming more intuitive...",
//     content:
//       "AI technology is evolving rapidly, impacting industries from healthcare to automotive.",
//     image:
//       "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=800&q=80",
//   },
//   {
//     id: "7",
//     title: "Global Climate Agreements",
//     summary: "New climate accords aim to reduce carbon emissions globally...",
//     content:
//       "Countries have agreed to stricter climate change mitigation targets over the next decade.",
//     image:
//       "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=800&q=80",
//   },
//   {
//     id: "8",
//     title: "Breakthrough in Cancer Research",
//     summary: "Scientists have discovered a new treatment pathway...",
//     content:
//       "A novel approach in cancer therapy shows promise in early trials, offering hope to patients.",
//     image:
//       "https://images.unsplash.com/photo-1581093588401-c92bfecde0f0?auto=format&fit=crop&w=800&q=80",
//   },
//   {
//     id: "9",
//     title: "Education in the Digital Age",
//     summary: "E-learning platforms transform access to education worldwide...",
//     content:
//       "Digital tools and platforms are breaking barriers to quality education globally.",
//     image:
//       "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
//   },
//   {
//     id: "10",
//     title: "Urban Farming Trends",
//     summary: "Cities adopt urban farms to promote sustainable living...",
//     content:
//       "Urban agriculture is gaining momentum, providing fresh produce in metropolitan areas.",
//     image:
//       "https://images.unsplash.com/photo-1542831371-d531d36971e6?auto=format&fit=crop&w=800&q=80",
//   },
// ];

// const PAGE_SIZE = 5;

// export default function NewsPage() {
//   const [page, setPage] = useState(1);

//   const startIndex = (page - 1) * PAGE_SIZE;
//   const currentItems = newsItems.slice(startIndex, startIndex + PAGE_SIZE);
//   const totalPages = Math.ceil(newsItems.length / PAGE_SIZE);

//   return (
//     <main className="max-w-7xl mx-auto p-6">
//       <h1 className="text-4xl font-bold mb-8 text-center">Latest News</h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
//         {currentItems.map(({ id, title, summary, image }) => (
//           <Link
//             key={id}
//             href={`/news/${id}`}
//             className="block rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
//           >
//             <img
//               src={image}
//               alt={title}
//               className="w-full h-48 object-cover"
//               loading="lazy"
//             />
//             <div className="p-4 bg-white">
//               <h2 className="text-xl font-semibold mb-2">{title}</h2>
//               <p className="text-gray-600">{summary}</p>
//             </div>
//           </Link>
//         ))}
//       </div>

//       {/* Pagination */}
//       <div className="flex justify-center items-center space-x-4 mt-12">
//         <button
//           className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
//           onClick={() => setPage((p) => Math.max(1, p - 1))}
//           disabled={page === 1}
//         >
//           Previous
//         </button>
//         <span>
//           Page {page} of {totalPages}
//         </span>
//         <button
//           className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
//           onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
//           disabled={page === totalPages}
//         >
//           Next
//         </button>
//       </div>
//     </main>
//   );
// }

import React from "react";

const News = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-[#0a0a0a] px-4 text-center">
      <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 tracking-wide">
        No News for Now
      </p>
      <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-md">
        Stay tuned — exciting updates and stories will be shared here soon.
      </p>
    </div>
  );
};

export default News;
