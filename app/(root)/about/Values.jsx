"use client";

import useMountedTranslation from "@/hook/useMountedTranslation";
import { Handshake, Shield, Smile } from "lucide-react";
import Image from "next/image";
import { useMemo } from "react";

export default function RightSemiCircleOutsideIcons() {
  const { t, mounted } = useMountedTranslation();

  const values = useMemo(
    () => [
      {
        title: "Consistency",
        name: "consistency",
        desc: "We show up — not just when it’s exciting, but especially when it’s not.",
        icon: Handshake,
      },
      {
        title: "Effort",
        name: "effort",
        desc: "You don’t have to be the best. You just have to try — fully, and for real.",
        icon: Shield,
      },
      {
        title: "Respect",
        name: "respect",
        desc: "We treat people, space, and the work with care. That’s non-negotiable.",
        icon: Handshake,
      },
      {
        title: "Responsibility",
        name: "responsibility",
        desc: "You take ownership of your body, your progress, and your energy. Nobody can do that for you.",
        icon: Smile,
      },
      {
        title: "Presence",
        name: "presence",
        desc: "We train hard, but we also enjoy being here. Good people, good energy — that matters too.",
        icon: Smile,
      },
    ],
    [t, mounted] // recompute whenever `t` changes (language switch)
  );
  if (!mounted) return null;

  return (
    <section
      aria-label="Core values"
      className="flex justify-center items-center px-4 py-8 sm:py-12 md:py-16"
    >
      <div className="flex flex-col items-center gap-10 max-w-7xl w-full">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Image
            src="/images/circle-logo-black.PNG"
            alt="Ray Athletics Logo"
            width={200}
            height={200}
            className="object-contain w-36 sm:w-44 md:w-44 lg:w-48 xl:w-52"
            priority
          />
        </div>

        {/* Values Grid */}
        <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, idx) => {
            const IconComponent = value.icon;
            return (
              <article
                key={idx}
                className="flex items-start gap-4 p-6 rounded-xl border border-[rgba(0,0,0,0.1)] shadow-sm bg-white 
                           hover:shadow-lg hover:border-red-700 hover:scale-[1.02] transition-all duration-300"
                tabIndex={0}
                aria-labelledby={`value-title-${idx}`}
              >
                <div
                  className="rounded-full w-12 h-12 flex justify-center items-center bg-red-700 border border-red-900 flex-shrink-0"
                  aria-hidden="true"
                >
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4
                    id={`value-title-${idx}`}
                    className="font-semibold text-lg font-cinzel  uppercase sm:text-xl text-black"
                  >
                    {t(`about_page.list.${value.name}.title`)}
                  </h4>
                  <p className="text-sm sm:text-base text-gray-700 mt-1 leading-relaxed">
                    {t(`about_page.list.${value.name}.desc`)}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
