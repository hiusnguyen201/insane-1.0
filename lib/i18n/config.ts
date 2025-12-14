import i18n, { InitOptions } from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import vi from "./locales/vi.json";
import en from "./locales/en.json";

const isClient = typeof window !== "undefined";

const init: InitOptions = {
  resources: {
    vi: {
      translation: vi,
    },
    en: {
      translation: en,
    },
  },
  lng: isClient ? localStorage.getItem("lang") ?? "en" : "en",
  supportedLngs: ["vi", "en"],
  fallbackLng: "en",
  debug: true,
  interpolation: {
    escapeValue: true,
  },
};

i18n.use(LanguageDetector).use(initReactI18next).init(init);

export default i18n;
