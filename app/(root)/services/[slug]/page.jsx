import Entry from "@/app/components/Entry";
import { notFound } from "next/navigation";

const services = [
  {
    title: "Functional Training",
    slug: "functional-training",
    subtitle: "Strength & Mobility",
    description:
      "Focuses on building strength, stability, and mobility that directly improves the way you move...",
    quote:
      "NO EXPERIENCE NEEDED. JUST SHOW UP, BE READY TO WORK, AND WE'LL GUIDE YOU EVERY STEP OF THE WAY.",
    cta: "BOOK YOUR FIRST SESSION",
    img: "/images/asset11.jpg",
  },
  {
    title: "Youth Soccer Training",
    slug: "youth-soccer-training",
    subtitle: "Building Foundational Athletic Skills",
    description:
      "Our youth soccer training is built to help young players get stronger, faster, and more confident...",
    quote:
      "NO MATTER THEIR STARTING POINT, EVERY ATHLETE IS WELCOMED WITH PATIENCE, SUPPORT, AND HIGH STANDARDS.",
    cta: "ENROLL NOW",
    img: "/images/asset2.jpg",
  },
  {
    title: "Soccer Camps & Events",
    slug: "soccer-camps-events",
    subtitle: "Pop-Ups & Community Training",
    description:
      "We occasionally host soccer camps and special events focused on skill development and team-building...",
    quote: "WE ANNOUNCE ALL UPCOMING CAMPS ON OUR SOCIAL MEDIA AND WEBSITE...",
    img: "/images/asset1.jpg",
  },
  {
    title: "Personal Training",
    slug: "personal-training",
    subtitle: "Personalized Coaching",
    description: "Our personal training is focused on you and your goals...",
    quote:
      "WHETHER YOU'RE NEW TO TRAINING OR LOOKING TO LEVEL UP, YOU'LL GET CONSISTENT SUPPORT AND GUIDANCE...",
    cta: "START PRIVATE TRAINING",
    img: "/images/asset13.jpg",
  },
];

export default async function ServicePage({ params }) {
  const { slug } = await params;

  const service = services.find((s) => s.slug === slug);

  if (!service) return notFound();

  return (
    <div>
      <Entry id={service.title} title={service.title} img={service.img} />

      <section
        className="w-full px-4 py-20 bg-[#0a0a0a] text-white"
        id={service.title}
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Divider */}
          <div className="w-24 h-1 mb-8 mx-auto rounded bg-gradient-to-r from-[#D00A02] via-[#d62e1e] to-[#D00A02]" />

          {/* Subtitle */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-wider text-white drop-shadow-md mb-10">
            {service.subtitle}
          </h2>

          {/* Content Box */}
          <div className="bg-[#121212] border border-[#D00A02] rounded-2xl shadow-xl p-6 sm:p-10 text-left">
            <p className="text-base md:text-lg leading-relaxed mb-6 text-gray-50 tracking-wide">
              {service.description}
            </p>

            <p className="text-base md:text-lg leading-relaxed text-gray-300">
              <span className="block italic font-semibold text-gray-300 border-l-4 border-white  pl-4">
                {service.quote}
              </span>
            </p>

            {/* CTA Button */}
            {service?.cta && (
              <div className="mt-10 text-center">
                <button className="px-6 py-3 grad text-white font-semibold rounded-full shadow-lg transition duration-300 uppercase tracking-wide">
                  {service.cta}
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
