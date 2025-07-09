"use client";
import { useState } from "react";
import NewsCard from "./NewsCard";
import { newsContent } from "./newsContent";

export default function NewsGrid() {
  const [page, setPage] = useState(1);
  const perPage = 6;
  const totalPages = Math.ceil(newsContent.length / perPage);

  const newsToShow = newsContent.slice((page - 1) * perPage, page * perPage);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsToShow.map((news) => (
          <NewsCard key={news.id} news={news} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-10 space-x-2">
        {Array.from({ length: totalPages }).map((_, idx) => {
          const num = idx + 1;
          return (
            <button
              key={num}
              onClick={() => setPage(num)}
              className={`px-4 py-2 rounded-full ${
                num === page
                  ? "bg-red-600 text-white font-bold"
                  : "bg-white text-black hover:bg-gray-400"
              }`}
            >
              {num}
            </button>
          );
        })}
      </div>
    </>
  );
}
