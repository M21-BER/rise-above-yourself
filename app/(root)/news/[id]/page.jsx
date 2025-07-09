import { notFound } from "next/navigation";

const newsItems = [
  {
    id: "2",
    title: "Ray Athletics Launches with a New Vision for Fitness",
    content:
      "Ray Athletics is redefining personal performance with a smart, motivational, and athlete-first approach. Watch our launch series to learn more.",
    image: "/images/slider/slider5.jpg",
    date: "2025-07-09",
  },
  // Add more news here
];

export default async function NewsDetailPage({ params }) {
  const { id } = await params;
  const newsItem = newsItems.find((item) => item.id === id);

  if (!newsItem) return notFound();

  return (
    <main className="max-w-6xl mx-auto px-4 md:px-8 text-white py-32">
      <div className="mb-12">
        <img
          src={newsItem.image}
          alt={newsItem.title}
          className="w-full rounded-xl object-cover max-h-[450px] shadow-lg"
        />
      </div>

      <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
        {newsItem.title}
      </h1>
      <p className="text-sm text-gray-200 mb-10">{newsItem.date}</p>

      <section className="prose prose-invert prose-lg max-w-none">
        <p>
          In the heart of a vibrant coastal town, where the salty breeze carries
          ambition and grit, Ray Athletics opens its doors as more than just a
          gym — it’s a movement. Built for those chasing transformation,
          confidence, and high-performance living, Ray combines functional
          fitness, youth development, and personal coaching to create a space
          where everyone feels empowered. Whether it’s James rediscovering his
          athleticism in group training, Mia gaining confidence through our
          youth soccer program, or Emily rebuilding strength after injury with
          personalized support, every story at Ray starts with a single promise:
          you belong here.
        </p>
        <p>
          As we launch Ray Athletics, we invite our community to join a culture
          where results meet resilience and encouragement meets expertise. From
          summer soccer camps filled with laughter and teamwork, to one-on-one
          coaching designed to unlock your full potential, our mission is simple
          — meet you where you are, and push you where you want to be. No matter
          your age, background, or fitness level, now is your moment. The
          journey starts today — and we're here for every step of it.
        </p>
      </section>

      {/* YouTube Videos */}
      <h2 className="text-2xl md:text-3xl font-bold mt-20 mb-6 text-white">
        Watch the Launch Series 🎥
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Video 1 */}
        <a
          href="https://www.youtube.com/watch?v=oLp9z52zTEg"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black rounded-2xl overflow-hidden shadow hover:shadow-xl transition duration-300 border border-[rgba(255,255,255,0.1)]"
        >
          <div className="relative h-48 w-full overflow-hidden">
            <img
              src="https://img.youtube.com/vi/oLp9z52zTEg/hqdefault.jpg"
              alt="Ray Athletics: Our Mission"
              className="w-full h-full object-cover transform hover:scale-105 transition duration-300"
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold text-white">
              Ray Athletics: Our Mission
            </h3>
            <p className="text-white text-sm mt-1">
              Why we built Ray and how we're changing athlete development.
            </p>
          </div>
        </a>

        {/* Video 2 */}
        <a
          href="https://www.youtube.com/watch?v=2VXFf-2zp94"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black rounded-2xl overflow-hidden shadow hover:shadow-xl transition duration-300 border border-[rgba(255,255,255,0.1)]"
        >
          <div className="relative h-48 w-full overflow-hidden">
            <img
              src="https://img.youtube.com/vi/2VXFf-2zp94/hqdefault.jpg"
              alt="Inside Ray's Performance Tracker"
              className="w-full h-full object-cover transform hover:scale-105 transition duration-300"
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold text-white">
              Inside Ray's Performance Tracker
            </h3>
            <p className="text-white text-sm mt-1">
              How we help you stay consistent, motivated, and accountable.
            </p>
          </div>
        </a>
      </div>
    </main>
  );
}
