import i18n, { InitOptions } from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import vi from "./locales/vi.json";
import en from "./locales/en.json";

const isClient = typeof window !== "undefined";

const options: InitOptions = {
  resources: {
    vi: { translation: vi },
    en: { translation: en },
  },
  ns: ["translation"],
  defaultNS: "translation",
  lng: isClient ? localStorage.getItem("lang") ?? "en" : "en",
  supportedLngs: ["vi", "en"],
  fallbackLng: "en",
  debug: true,
  interpolation: {
    escapeValue: false,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    ...options,
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

export default i18n;
