"use client";

import useMountedTranslation from "@/hook/useMountedTranslation";
import Image from "next/image";
import FadeInOnScroll from "../FadeInOnScroll";
export function LogoTitle() {
  const { t, mounted } = useMountedTranslation();
  if (!mounted) return null;

  return (
    <h2
      className="font-dm_sans text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] tracking-tight leading-tight"
      style={{ maxHeight: "60%" }}
    >
      R.A.Y ATHLETICS
    </h2>
  );
}

export function LogoSubTitle() {
  const { t, mounted } = useMountedTranslation();
  if (!mounted) return null;

  return (
    <h4
      className="font-semibold font-dm_sans text-[9px] sm:text-[10px] md:text-[10px] lg:text-[10px] text-red-600 leading-snug tracking-wide"
      style={{ maxHeight: "40%" }}
    >
      {t("logo_subtitle")}
    </h4>
  );
}

export function HomeYouth() {
  const { t, mounted } = useMountedTranslation();
  if (!mounted) return null;

  return (
    <div className="flex-[8] px-6 sm:px-10">
      <h3
        className="uppercase text-white font-normal font-anton tracking-wide"
        style={{ fontSize: "clamp(0.75rem, 2vw, 1.125rem)", lineHeight: 1.2 }}
      >
        {t("training.youth")}
      </h3>
      <p
        className="text-gray-300"
        style={{
          fontSize: "clamp(0.6rem, 1.5vw, 1rem)",
          marginTop: "0.25rem",
          lineHeight: 1.3,
        }}
      >
        {t("training.youth_description")}
      </p>
    </div>
  );
}

export function HomeGroup() {
  const { t, mounted } = useMountedTranslation();
  if (!mounted) return null;

  return (
    <div className="flex-[8] px-6 sm:pl-20">
      <h3
        className="font-normal font-anton tracking-wide uppercase text-white "
        style={{ fontSize: "clamp(0.75rem, 2vw, 1.125rem)", lineHeight: 1.2 }}
      >
        {t("training.group")}
      </h3>
      <p
        className="text-gray-200"
        style={{
          fontSize: "clamp(0.6rem, 1.5vw, 1rem)",
          marginTop: "0.25rem",
          lineHeight: 1.3,
        }}
      >
        {t("training.group_description")}
      </p>
    </div>
  );
}

export function MoreThanGymTextTitle() {
  const { t, mounted } = useMountedTranslation();
  if (!mounted) return null;

  return (
    <h1 className="text-4xl font-normal font-anton tracking-wide text-red-600 uppercase">
      {t("more_than_gym_section.more_than_gym_title")}
    </h1>
  );
}

export function MoreThanGymTextDesc() {
  const { t, mounted } = useMountedTranslation();
  if (!mounted) return null;

  return (
    <p className="text-lg text-gray-700">
      {t("more_than_gym_section.more_than_gym_desc")}
    </p>
  );
}

export function MoreThanGymTextFooter() {
  const { t, mounted } = useMountedTranslation();
  if (!mounted) return null;

  return (
    <p className="text-lg text-gray-700 max-w-5xl">
      {t("more_than_gym_section.more_than_gym_footer")}
    </p>
  );
}

export function ProcessTitle() {
  const { t, mounted } = useMountedTranslation();
  if (!mounted) return null;

  return (
    <h2
      className="text-white font-anton  leading-tight font-normal tracking-wide"
      style={{ fontSize: "clamp(1.3rem, 4vw, 3rem)" }}
    >
      {t("process_section.title")}
    </h2>
  );
}

export function ProcessDesc() {
  const { t, mounted } = useMountedTranslation();
  if (!mounted) return null;

  return (
    <p
      className="text-white mt-1"
      style={{ fontSize: "clamp(0.75rem, 2vw, 1.25rem)", lineHeight: 1.4 }}
    >
      {t("process_section.desc")}
    </p>
  );
}
export function LocationHeader() {
  const { t, mounted } = useMountedTranslation();
  if (!mounted) return null;

  return (
    <div className="lg:w-1/2 flex flex-col justify-center max-w-xl">
      <h2 className="text-2xl font-dm_sans uppercase text-background sm:text-3xl lg:text-4xl 2xl:text-5xl font-bold mb-4">
        {t("location_page.upcoming")}
      </h2>
      <p className="text-gray-600 mb-6 text-sm sm:text-base lg:text-lg 2xl:text-xl">
        {t("location_page.desc")}
      </p>

      <div className="space-y-4">
        <div>
          <h3 className="font-bold text-background text-sm sm:text-base lg:text-lg">
            {t("location_page.events")}
          </h3>
          <p className="text-gray-700 text-sm sm:text-base lg:text-lg">
            123 Main Street,
          </p>
        </div>
        <div>
          <h3 className="font-bold text-background text-sm sm:text-base lg:text-lg">
            Hours
          </h3>
          <p className="text-gray-700 text-sm sm:text-base lg:text-lg">
            {t("location_page.mon")} - {t("location_page.fri")} 9am - 5pm
          </p>
        </div>
      </div>
    </div>
  );
}
export function AboutHeader() {
  const { t, mounted } = useMountedTranslation();
  if (!mounted) return null;

  return (
    <div className="relative flex-1 flex flex-col justify-center px-4 sm:px-6 md:px-8 py-6 text-center lg:text-left">
      <h2 className="text-white font-normal font-anton tracking-wide text-xl sm:text-2xl md:text-3xl lg:text-4xl   leading-tight">
        {t("about_page.title")}
      </h2>
      <p className="text-white mt-3 sm:mt-4 text-sm sm:text-base md:text-lg max-w-[800px] mx-auto lg:mx-0">
        {t("about_page.desc")}
      </p>
    </div>
  );
}
export function AboutFounder() {
  const { t, mounted } = useMountedTranslation();
  if (!mounted) return null;

  return (
    <>
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-normal font-anton tracking-wide  capitalize text-black mt-3 mb-2">
        {t("about_page.founded")}
      </h1>
      <p className="text-black  uppercase text-base sm:text-lg md:text-xl">
        {t("about_page.founder")}
      </p>
    </>
  );
}
export function AboutParagraph() {
  const { t, mounted } = useMountedTranslation();
  if (!mounted) return null;

  return (
    <>
      <p className="text-sm sm:text-base md:text-lg font-normal text-black mt-3 mb-4 leading-relaxed">
        {t("about_page.par1")}
      </p>
      <p className="text-sm sm:text-base md:text-lg font-normal text-black mt-3 mb-4 leading-relaxed">
        {t("about_page.par2")}
      </p>
    </>
  );
}
export function YouthTitle() {
  const { t, mounted } = useMountedTranslation();
  if (!mounted) return null;

  return (
    <h2 className="font-normal font-anton tracking-wide text-neutral-950 text-xl sm:text-2xl lg:text-3xl  uppercase">
      {t("youth_page.title")}
    </h2>
  );
}
export function YouthList() {
  const { t, mounted } = useMountedTranslation();
  if (!mounted) return null;

  const items = [
    t("youth_page.li1"),
    t("youth_page.li2"),
    t("youth_page.li3"),
    t("youth_page.li4"),
    t("youth_page.li5"),
    t("youth_page.li6"),
  ];

  return (
    <ul className="mt-4 space-y-2 list-none text-black/80">
      {items.map((text, idx) => (
        <FadeInOnScroll key={idx}>
          <li className="flex items-start gap-3 mb-4 sm:gap-4 lg:gap-5">
            <Image
              src="/right.png"
              alt="bullet icon"
              width={20} // default for mobile
              height={20}
              className="flex-shrink-0 mt-1 sm:w-5 sm:h-5 lg:w-6 lg:h-6"
            />
            <span className="mt-0.5 text-sm sm:text-base lg:text-lg">
              {text}
            </span>
          </li>
        </FadeInOnScroll>
      ))}
    </ul>
  );
}

export function YouthBook() {
  const { t, mounted } = useMountedTranslation();
  if (!mounted) return null;

  return (
    <h3 className="mt-6 font-semibold font-dm_sans text-background text-base sm:text-lg italic">
      {t("youth_page.book")}
    </h3>
  );
}
export function YouthDesc() {
  const { t, mounted } = useMountedTranslation();
  if (!mounted) return null;

  return (
    <FadeInOnScroll>
      <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-normal leading-relaxed">
        {t("youth_page.desc")}
      </p>
    </FadeInOnScroll>
  );
}

export function GroupTitle() {
  const { t, mounted } = useMountedTranslation();
  if (!mounted) return null;

  return (
    <h2 className="font-normal font-anton tracking-wide text-neutral-950 text-xl sm:text-2xl lg:text-3xl  uppercase">
      {t("group_page.title")}
    </h2>
  );
}

export function GroupList() {
  const { t, mounted } = useMountedTranslation();
  if (!mounted) return null;

  const items = [
    t("group_page.li1"),
    t("group_page.li2"),
    t("group_page.li3"),
    t("group_page.li4"),
    t("group_page.li5"),
  ];

  return (
    <ul className="mt-4 space-y-2 list-none text-black/80">
      {items.map((text, idx) => (
        <FadeInOnScroll key={idx}>
          <li className="flex items-start gap-3 mb-4 sm:gap-4 lg:gap-5">
            <Image
              src="/right.png"
              alt="bullet icon"
              width={20} // default for mobile
              height={20}
              className="flex-shrink-0 mt-1 sm:w-5 sm:h-5 lg:w-6 lg:h-6"
            />
            <span className="mt-0.5 text-sm sm:text-base lg:text-lg">
              {text}
            </span>
          </li>
        </FadeInOnScroll>
      ))}
    </ul>
  );
}

export function GroupBook() {
  const { t, mounted } = useMountedTranslation();
  if (!mounted) return null;

  return (
    <h3 className="mt-6 font-semibold font-dm_sans text-background text-base sm:text-lg italic">
      {t("group_page.book")}
    </h3>
  );
}
export function GroupDesc() {
  const { t, mounted } = useMountedTranslation();
  if (!mounted)
    return (
      <>
        <div className="w-3/4 h-3 bg-gray-300 rounded-md animate-pulse mt-2 mx-auto"></div>
        <div className="w-3/4 h-3 bg-gray-300 rounded-md animate-pulse mt-2 mx-auto"></div>
        <div className="w-3/4 h-3 bg-gray-300 rounded-md animate-pulse mt-2 mx-auto"></div>
      </>
    );

  return (
    <FadeInOnScroll>
      <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-normal leading-relaxed">
        {t("group_page.desc")}
      </p>
    </FadeInOnScroll>
  );
}
export function NewsTitle() {
  const { t, mounted } = useMountedTranslation();
  if (!mounted)
    return (
      <div className="w-48 h-8 bg-gray-300 rounded-md animate-pulse mt-2 mx-auto"></div>
    );

  return (
    <h2 className="text-3xl font-normal text-black mb-8 text-center">
      {t("news_page.latest_news")}
    </h2>
  );
}
export function NotFoundContent() {
  const { t, mounted } = useMountedTranslation();
  if (!mounted)
    return (
      <>
        <div className="w-64 h-10 bg-gray-300 rounded-md animate-pulse mt-6"></div>
        <div className="w-48 h-6 bg-gray-300 rounded-md animate-pulse mt-2"></div>
      </>
    );

  return (
    <>
      <h1 className="text-4xl font-dm_sans uppercase font-bold text-red-600 mt-6">
        {t("404_page.title")}
      </h1>
      <h2 className="text-lg mt-2">{t("404_page.desc")}</h2>
    </>
  );
}
export function LoadingText() {
  const { t, mounted } = useMountedTranslation();
  if (!mounted) return null;

  return (
    <p className="text-background font-medium text-lg tracking-wide uppercase">
      {t("loading")}
    </p>
  );
}
