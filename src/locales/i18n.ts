import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { ua } from './translations/ua';
import { en } from './translations/en';

import LanguageDetector from 'i18next-browser-languagedetector';
import intervalPlural from 'i18next-intervalplural-postprocessor';

i18n
  .use(LanguageDetector)
  .use(intervalPlural)
  .use(initReactI18next)
  .init({
    resources: {
      en,
      ua,
    },
    fallbackLng: 'en',

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
