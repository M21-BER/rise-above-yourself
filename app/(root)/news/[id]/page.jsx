import { notFound } from "next/navigation";

const newsItems = [
  // same array as above, or import from a common file
  {
    id: "1",
    title: "Global Economy on the Rise",
    content:
      "In-depth analysis of the global economy's recent upswing, challenges, and future outlook.",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "2",
    title: "New Technology in Renewable Energy",
    content:
      "Solar energy technologies have advanced rapidly, making renewable energy more accessible than ever.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
  },
  // ... rest of the news
];

export default function NewsDetailPage({ params }) {
  const newsItem = newsItems.find((item) => item.id === params.id);

  if (!newsItem) return notFound();

  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">{newsItem.title}</h1>
      <img
        src={newsItem.image}
        alt={newsItem.title}
        className="w-full h-72 object-cover rounded-lg mb-6"
      />
      <p className="text-lg text-gray-800">{newsItem.content}</p>
    </main>
  );
}
