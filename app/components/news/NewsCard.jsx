import Image from "next/image";
import Link from "next/link";

export default function NewsCard({ news }) {
  return (
    <Link
      href={`/news/${news.id}`}
      className="group block rounded-2xl overflow-hidden bg-black shadow-lg hover:shadow-2xl transition duration-300 border border-[rgba(255,255,255,0.1)]"
    >
      {/* Image with overlay and hover zoom */}
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={news.image}
          alt={news.title}
          fill
          className="object-cover transform group-hover:scale-105 transition duration-300"
        />
        <div className="absolute top-3 left-3 bg-black/70 text-white text-xs px-3 py-1 rounded-full">
          {news.date}
        </div>
      </div>

      {/* Text Content */}
      <div className="p-5">
        <h3 className="text-xl font-semibold text-white group-hover:text-red-500 transition duration-200">
          {news.title}
        </h3>
        <p className="text-gray-300 text-sm mt-2">{news.excerpt}</p>
      </div>
    </Link>
  );
}
