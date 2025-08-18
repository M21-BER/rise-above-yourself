"use client";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function useMountedTranslation() {
  const { t, i18n } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return { t, mounted, i18n };
}
