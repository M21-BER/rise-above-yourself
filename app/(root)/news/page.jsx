import NewsGrid from "../../components/news/NewsGrid";

export default function Home() {
  return (
    <section className="min-h-screen bg-background text-white py-32 px-6 md:px-20">
      <h2 className="text-3xl font-bold mb-8 text-center">Latest News</h2>
      <NewsGrid />
    </section>
  );
}
