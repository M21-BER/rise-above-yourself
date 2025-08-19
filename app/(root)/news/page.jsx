import { NewsTitle } from "@/app/components/Texts/Text";
import NewsGrid from "../../components/news/NewsGrid";

export default function Home() {
  return (
    <section className="min-h-screen bg-white text-background py-32 px-6 md:px-20">
      <NewsTitle />
      <NewsGrid />
    </section>
  );
}
