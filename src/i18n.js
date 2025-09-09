import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationKo from "./locales/ko/translation.json";
import translationEn from "./locales/en/translation.json";

i18n.use(initReactI18next).init({
  resources: {
    ko: {
      translation: translationKo,
    },
    en: {
      translation: translationEn,
    },
  },
  lng: "ko",
  fallbackLng: "ko",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
