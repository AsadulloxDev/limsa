import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from "./Locales/english.json";
import uz from './Locales/uzbekcha.json';
import ru from "./Locales/russian.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      uz: { translation: uz },
      ru: { translation: ru },
    },
    lng: 'uz',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
