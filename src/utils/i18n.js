import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import detector from "i18next-browser-languagedetector";
import { translationPT, translationEN, translationES } from "../locales";

const localLanguage = localStorage.getItem("i18nextLng") || "pt";

const startI18n = (language = localLanguage) => {
  const resources = {
    pt: {
      translation: translationPT,
    },
    en: {
      translation: translationEN,
    },
    es: {
      translation: translationES,
    },
  };

  i18n
    .use(detector)
    .use(initReactI18next)
    .init({
      resources,
      lng: window.Cypress ? "en" : language,
      fallbackLng: window.Cypress ? "en" : language,
      returnObjects: true,
      interpolation: {
        escapeValue: false,
      },
    });
};

export default startI18n;
