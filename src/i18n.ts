import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import ru from "./services/locales/ru/common.json";
import ro from "./services/locales/ro/common.json";
import en from "./services/locales/en/common.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      ru: { translation: ru },
      ro: { translation: ro },
      en: { translation: en },
    },
    fallbackLng: "ro",
    supportedLngs: ["ru", "ro", "en"],
   
    detection: {
      order: ["path", "localStorage", "navigator"],
      caches: ["localStorage"],
    },

  });




export default i18n;
