export const locales = ['en', 'ar', 'tr', 'fr', 'ru', 'es'];
export const defaultLocale = 'en';
export const rtlLocales = ['ar'];

export function isValidLocale(locale) {
  return locales.includes(locale);
}

export function isRtlLocale(locale) {
  return rtlLocales.includes(locale);
}

export function detectLocale(acceptLanguageHeader = '') {
  const requestedLanguages = acceptLanguageHeader
    .split(',')
    .map((entry) => {
      const [languageTag, qualityPart] = entry.trim().split(';q=');

      return {
        locale: languageTag?.toLowerCase().split('-')[0],
        quality: qualityPart ? Number(qualityPart) : 1,
      };
    })
    .filter((entry) => entry.locale)
    .sort((left, right) => right.quality - left.quality);

  for (const entry of requestedLanguages) {
    if (isValidLocale(entry.locale)) {
      return entry.locale;
    }
  }

  return defaultLocale;
}