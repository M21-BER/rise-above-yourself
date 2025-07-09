import { notFound } from "next/navigation";

const newsItems = [
  {
    id: "2",
    title:
      "R.A.Y. Athletics Opens New Performance Gym in Virginia Grand Opening Celebration Coming Soon",
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
        <p className="text-base md:text-lg text-gray-300">
          R.A.Y. Athletics is proud to announce the opening of its new
          performance gym in Virginia. The space is now officially open and
          welcoming youth and adult athletes for structured, intentional
          training rooted in discipline, soccer, and community. Founded by
          athlete and coach Rediet Berihun, R.A.Y. Athletics offers a unique
          training model that blends indoor gym work with outdoor field
          development. Built with a focus on both personal growth and athletic
          performance, the gym provides a home for athletes at every stage.
          Programs include functional group training for adults, one-on-one
          personal coaching, youth soccer development, and field and gym
          integration for total-body performance.
        </p>

        <p className="text-base md:text-lg text-gray-300 mt-4">
          With a grand opening celebration coming soon, R.A.Y. Athletics invites
          the community to come experience a space built on consistency,
          accountability, and culture. Whether you're a parent looking for a
          program that balances structure and skill for your child, or an adult
          looking to recommit to your fitness, this gym was created to meet you
          where you are and help you go further.
        </p>
        <div className="text-base md:text-lg text-gray-300 mt-4 space-y-2">
          <p>For more information, please contact</p>

          <p>
            <span className="text-white">Call or Text</span>{" "}
            <a
              href="tel:+16194047752"
              className="underline text-red-200 hover:text-red-100"
            >
              +1 (619) 404-7752
            </a>
          </p>

          <p>
            <span className="text-white">Instagram:</span>{" "}
            <a
              href="https://instagram.com/rayathletics__"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-red-200 hover:text-red-100"
            >
              @rayathletics__
            </a>
          </p>

          <p className="text-white">Location:</p>
          <p className="text-red-200 hover:text-red-100">
            5649L General Washington Dr.
          </p>
          <p className="text-red-200 hover:text-red-100">
            Alexandria, Virginia
          </p>
        </div>
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
