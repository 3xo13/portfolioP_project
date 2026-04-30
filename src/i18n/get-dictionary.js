import { defaultLocale } from './config';

const dictionaries = {
  en: () => import('../dictionaries/en').then((module) => module.default),
  ar: () => import('../dictionaries/ar').then((module) => module.default),
  tr: () => import('../dictionaries/tr').then((module) => module.default),
  fr: () => import('../dictionaries/fr').then((module) => module.default),
  ru: () => import('../dictionaries/ru').then((module) => module.default),
  es: () => import('../dictionaries/es').then((module) => module.default),
};

export async function getDictionary(locale) {
  const loadDictionary = dictionaries[locale] ?? dictionaries[defaultLocale];

  return loadDictionary();
}