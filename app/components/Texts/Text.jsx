"use client";

import useMountedTranslation from "@/hook/useMountedTranslation";
export function LogoTitle() {
  const { t, mounted } = useMountedTranslation();
  if (!mounted) return null;

  return (
    <h2
      className="font-allerta_stencil text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] tracking-tight leading-tight"
      style={{ maxHeight: "60%" }}
    >
      {t("logo_title")}
    </h2>
  );
}

export function LogoSubTitle() {
  const { t, mounted } = useMountedTranslation();
  if (!mounted) return null;

  return (
    <h4
      className="font-bold text-[9px] sm:text-[10px] md:text-[10px] lg:text-[10px] text-red-600 leading-snug"
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
        className="font-bold uppercase text-white font-cinzel"
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
        className="font-bold uppercase text-white font-cinzel"
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
    <h1 className="text-4xl font-bold font-cinzel text-red-600 uppercase">
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
      className="text-white font-cinzel leading-tight font-bold"
      style={{ fontSize: "clamp(1.5rem, 4vw, 3rem)" }}
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
      <h2 className="text-2xl font-cinzel uppercase text-background sm:text-3xl lg:text-4xl 2xl:text-5xl font-bold mb-4">
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
      <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-cinzel  leading-tight">
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
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-cinzel  font-bold text-black mt-3 mb-2">
        {t("about_page.founded")}
      </h1>
      <p className="text-black font-dm_sans uppercase text-base sm:text-lg md:text-xl">
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
      <p className="text-sm sm:text-base md:text-lg font-medium text-black mt-3 mb-4 leading-relaxed">
        {t("about_page.par1")}
      </p>
      <p className="text-sm sm:text-base md:text-lg font-medium text-black mt-3 mb-4 leading-relaxed">
        {t("about_page.par2")}
      </p>
    </>
  );
}
export function YouthTitle() {
  const { t, mounted } = useMountedTranslation();
  if (!mounted) return null;

  return (
    <h2 className="font-extrabold font-cinzel text-black text-lg sm:text-xl lg:text-2xl tracking-tight uppercase">
      {t("youth_page.title")}
    </h2>
  );
}
export function YouthList() {
  const { t, mounted } = useMountedTranslation();
  if (!mounted) return null;

  return (
    <ul className="mt-4 space-y-2 text-sm sm:text-base text-black/80 list-none">
      <li className="flex items-start gap-3 mb-4">
        <span className="w-3 h-3 mt-1 bg-red-600 rounded-full flex-shrink-0"></span>
        {t("youth_page.li1")}
      </li>
      <li className="flex items-start gap-3 mb-4">
        <span className="w-3 h-3 mt-1 bg-red-600 rounded-full flex-shrink-0"></span>
        {t("youth_page.li2")}
      </li>
      <li className="flex items-start gap-3 mb-4">
        <span className="w-3 h-3 mt-1 bg-red-600 rounded-full flex-shrink-0"></span>
        {t("youth_page.li3")}
      </li>
      <li className="flex items-start gap-3 mb-4">
        <span className="w-3 h-3 mt-1 bg-red-600 rounded-full flex-shrink-0"></span>
        {t("youth_page.li4")}
      </li>
      <li className="flex items-start gap-3 mb-4">
        <span className="w-3 h-3 mt-1 bg-red-600 rounded-full flex-shrink-0"></span>
        {t("youth_page.li5")}
      </li>
      <li className="flex items-start gap-3 mb-4">
        <span className="w-3 h-3 mt-1 bg-red-600 rounded-full flex-shrink-0"></span>
        {t("youth_page.li6")}
      </li>
    </ul>
  );
}

export function YouthBook() {
  const { t, mounted } = useMountedTranslation();
  if (!mounted) return null;

  return (
    <h3 className="mt-6 font-bold font-cinzel text-black text-base sm:text-lg uppercase">
      {t("youth_page.book")}
    </h3>
  );
}
export function YouthDesc() {
  const { t, mounted } = useMountedTranslation();
  if (!mounted) return null;

  return (
    <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-medium leading-relaxed">
      {t("youth_page.desc")}
    </p>
  );
}

export function GroupTitle() {
  const { t, mounted } = useMountedTranslation();
  if (!mounted) return null;

  return (
    <h2 className="font-extrabold font-cinzel text-black text-lg sm:text-xl lg:text-2xl tracking-tight uppercase">
      {t("youth_page.title")}
    </h2>
  );
}

export function GroupList() {
  const { t, mounted } = useMountedTranslation();
  if (!mounted) return null;

  return (
    <ul className="mt-4 space-y-2 text-sm sm:text-base text-black/80 list-none">
      <li className="flex items-start gap-3 mb-4">
        <span className="w-3 h-3 mt-1 bg-red-600 rounded-full flex-shrink-0"></span>
        {t("youth_page.li1")}
      </li>
      <li className="flex items-start gap-3 mb-4">
        <span className="w-3 h-3 mt-1 bg-red-600 rounded-full flex-shrink-0"></span>
        {t("youth_page.li2")}
      </li>
      <li className="flex items-start gap-3 mb-4">
        <span className="w-3 h-3 mt-1 bg-red-600 rounded-full flex-shrink-0"></span>
        {t("youth_page.li3")}
      </li>
      <li className="flex items-start gap-3 mb-4">
        <span className="w-3 h-3 mt-1 bg-red-600 rounded-full flex-shrink-0"></span>
        {t("youth_page.li4")}
      </li>
      <li className="flex items-start gap-3 mb-4">
        <span className="w-3 h-3 mt-1 bg-red-600 rounded-full flex-shrink-0"></span>
        {t("youth_page.li5")}
      </li>
    </ul>
  );
}

export function GroupBook() {
  const { t, mounted } = useMountedTranslation();
  if (!mounted) return null;

  return (
    <h3 className="mt-6 font-bold font-cinzel text-black text-base sm:text-lg uppercase">
      {t("youth_page.book")}
    </h3>
  );
}
export function GroupDesc() {
  const { t, mounted } = useMountedTranslation();
  if (!mounted) return null;

  return (
    <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-medium leading-relaxed">
      {t("youth_page.desc")}
    </p>
  );
}
