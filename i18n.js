// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en.json";
import es from "./locales/es.json";
import am from "./locales/am.json";

// Initialize with default language (server-safe)
i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    es: { translation: es },
    am: { translation: am },
  },
  lng: "en", // always "en" at SSR
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
