import Entry from "../../../components/Entry";
import { notFound } from "next/navigation";
import { FaCheckCircle, FaPhoneAlt } from "react-icons/fa";

const services = [
  {
    title: "Functional / Group Training",
    slug: "functional-training",
    subtitle: "High-impact workouts. Real results. No intimidation.",
    description:
      "Our group training sessions combine strength, conditioning, and mobility to help you feel stronger, move better, and stay consistent. Whether you're a beginner or experienced, our coaches meet you where you are and push you to grow.",
    quote:
      "NO MATTER YOUR STARTING POINT, YOU'LL BE CHALLENGED, SUPPORTED, AND MOTIVATED EVERY STEP OF THE WAY.",
    cta: null,
    img: "/images/slider/slider4.jpg",
    highlights: [
      "Full-body functional training",
      "Focus on core, stability, and real-life movement",
      "Low-equipment, high-performance approach",
      "Modifications for all fitness levels",
      "A supportive, non-judgmental community",
    ],
    scheduleNote: "⏰ Classes available mornings, evenings, and weekends.",
    contact: {
      note: "Ready to start?",
      phone: "+1 (619) 404-7752",
      action: "Book your first session or consultation call today",
    },
  },

  {
    title: "Youth Soccer Training",
    slug: "youth-soccer-training",
    subtitle: "Indoor skills. Outdoor performance. Year-round development.",
    description:
      "Training is split between indoor skill development and outdoor field application, helping kids build strong fundamentals, improve game IQ, and grow their confidence. We work with athletes ages 9–15 of all levels—from beginners to competitive players.",
    quote:
      "NO MATTER THEIR STARTING POINT, EVERY ATHLETE IS WELCOMED WITH PATIENCE, SUPPORT, AND HIGH STANDARDS.",
    cta: null,
    img: "/images/asset2.jpg",
    highlights: [
      "Small group training for more attention",
      "Focus on agility, technique, and discipline",
      "Friendly, high-energy environment",
      "Coaches with collegiate + pro-level experience",
      "Weekly schedule options to fit your routine",
    ],
    contact: {
      note: "Interested in enrolling your child?",
      phone: "+1 (619) 404-7752",
      action: "Book a free consultation call today",
    },
  },
  {
    title: "Soccer Camps & Events",
    slug: "soccer-camps-events",
    subtitle: "Pop-Ups & Community Training",
    description:
      "We occasionally host soccer camps and special events focused on skill development and team-building...",
    quote: "WE ANNOUNCE ALL UPCOMING CAMPS ON OUR SOCIAL MEDIA AND WEBSITE...",
    img: "/images/asset1.jpg",
    highlights: [],
  },
  {
    title: "Personal Training",
    slug: "personal-training",
    subtitle: "One-on-one coaching. Custom goals.",
    description:
      "You'll work directly with a certified coach who creates a plan that matches your goals, your pace, and your schedule.",
    quote:
      "WHETHER YOU'RE NEW TO TRAINING OR LOOKING TO LEVEL UP, YOU'LL GET CONSISTENT SUPPORT AND GUIDANCE...",
    cta: null,
    img: "/images/asset10.jpg",
    highlights: [
      "Personalized fitness and nutrition guidance",
      "Goal-specific programming (weight loss, strength, athletic performance, recovery, etc.)",
      "Flexible scheduling",
      "Progress tracking + accountability",
      "Safe, supportive training environment",
    ],
    idealFor: [
      "Busy adults",
      "Parents returning to fitness",
      "Athletes recovering or advancing",
      "Anyone needing structure and motivation",
    ],
    contact: {
      note: "Ready to start?",
      phone: "+1 (619) 404-7752",
      action: "Book your first session or consultation call today",
    },
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

          {/* Content */}
          <div className="bg-[#121212] border border-[#D00A02] rounded-2xl shadow-xl p-6 sm:p-10 text-left space-y-6">
            {/* Description */}
            <p className="text-base md:text-lg leading-relaxed text-gray-50 tracking-wide">
              {service.description}
            </p>

            {/* Highlights */}
            {service?.highlights?.length > 0 && (
              <ul className="list-disc pl-6 text-gray-200 space-y-2">
                {service.highlights.map((point, idx) => (
                  <li key={idx} className="text-base md:text-lg">
                    {point}
                  </li>
                ))}
              </ul>
            )}

            {/* Ideal For */}
            {service?.idealFor?.length > 0 && (
              <div className="mt-6">
                <h3 className="font-semibold text-lg text-white mb-2 uppercase tracking-wide">
                  Ideal For:
                </h3>
                <ul className="list-none space-y-2 text-gray-300">
                  {service.idealFor.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-base md:text-lg"
                    >
                      <FaCheckCircle className="text-gray-50 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Quote */}
            {service.quote && (
              <blockquote className="border-l-4 border-red-600 pl-4 italic text-gray-300 font-semibold text-base md:text-lg">
                {service.quote}
              </blockquote>
            )}

            {/* Schedule Note */}
            {service?.scheduleNote && (
              <p className="text-red-400 font-medium text-base md:text-lg">
                {service.scheduleNote}
              </p>
            )}

            {/* Contact Section */}
            {service?.contact && (
              <section className="mt-10 max-w-md mx-auto p-6 shadow-lg text-center space-y-4">
                <p className="text-gray-300 text-lg font-medium">
                  {service.contact.note}
                </p>
                <a
                  href={`tel:${service.contact.phone.replace(/\D/g, "")}`}
                  className="inline-flex items-center justify-center gap-3 grad hover:opacity-90 transition-colors text-white font-bold text-xl rounded-full px-5 py-3 shadow-md shadow-red-800/50"
                  aria-label={`Call ${service.contact.phone}`}
                >
                  <FaPhoneAlt className="w-6 h-6" />
                  <span>{service.contact.phone}</span>
                </a>

                <p className="text-gray-400 italic text-sm">
                  {service.contact.action}
                </p>
              </section>
            )}

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
