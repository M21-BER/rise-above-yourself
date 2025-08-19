"use client";

import * as Select from "@radix-ui/react-select";
import clsx from "clsx";
import { useTransition, useEffect, useState } from "react";
import { CheckIcon, LanguagesIcon } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function LocaleSwitcherSelect() {
  const { i18n, t } = useTranslation();
  const [mounted, setMounted] = useState(false);
  const [selectedLang, setSelectedLang] = useState("en");
  const [isPending, startTransition] = useTransition();

  const languages = [
    { value: "en", label: t("languages.en") },
    { value: "es", label: t("languages.es") },
    { value: "am", label: t("languages.am") },
  ];

  // Load saved language from localStorage
  useEffect(() => {
    const savedLang = localStorage.getItem("lang") || "en";
    i18n.changeLanguage(savedLang);
    setSelectedLang(savedLang);
    setMounted(true);
  }, [i18n]);

  const handleChange = (value) => {
    startTransition(() => {
      i18n.changeLanguage(value);
      localStorage.setItem("lang", value);
      setSelectedLang(value);
    });
  };

  if (!mounted) return null;

  return (
    <div className="relative inline-block">
      <Select.Root defaultValue={selectedLang} onValueChange={handleChange}>
        {/* Add 'group' here so children can respond to hover */}
        <Select.Trigger
          aria-label="Select language"
          className={clsx(
            "group rounded-sm flex flex-row gap-3 transition-all hover:opacity-50",
            isPending && "pointer-events-none opacity-60"
          )}
        >
          <Select.Icon>
            {/* Now the icon responds to the parent's hover */}
            <LanguagesIcon className="h-6 w-6 text-white" />
          </Select.Icon>
          {/* <span className="transition-colors group-hover:text-background">
            {languages.find((l) => l.value === selectedLang)?.label}
          </span> */}
        </Select.Trigger>

        <Select.Content
          align="end"
          className="min-w-[8rem] overflow-hidden rounded-sm bg-white py-1 shadow-md"
        >
          <Select.Viewport>
            {languages.map((item) => (
              <Select.Item
                key={item.value}
                value={item.value}
                className="flex cursor-default items-center px-3 py-2 text-base text-black data-[highlighted]:bg-slate-100"
              >
                <Select.ItemText className="flex-1 font-dm_sans text-black">
                  {item.label}
                </Select.ItemText>
                {item.value === selectedLang && (
                  <Select.ItemIndicator>
                    <CheckIcon className="h-5 w-5 text-red-600" />
                  </Select.ItemIndicator>
                )}
              </Select.Item>
            ))}
          </Select.Viewport>
          <Select.Arrow className="fill-white text-white" />
        </Select.Content>
      </Select.Root>
    </div>
  );
}
