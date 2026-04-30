import '../../index.css';
import { notFound } from 'next/navigation';

import { getDictionary } from '../../i18n/get-dictionary';
import { isRtlLocale, isValidLocale, locales } from '../../i18n/config';

const sharedKeywords = [
  'Kerim',
  'Kerim portfolio',
  'full stack developer',
  'frontend developer',
  'web developer',
  'freelance developer',
  'app developer',
  'application development',
  'server development',
  'backend development',
  'bot development',
  'telegram bot developer',
  'SaaS development',
  'SaaS developer',
  'custom software development',
  'portfolio website',
  'React developer',
  'Next.js developer',
  'JavaScript developer',
  'Node.js developer',
  'Three.js portfolio',
  'UI developer',
  'web applications',
  'app development',
  'website development',
  'Mostaql developer',
  'Logica Studious LLC',
];

const localizedKeywords = {
  en: ['software developer', 'full stack web developer', 'custom websites', 'web app developer', 'server-side development', 'bot developer'],
  ar: ['مطور ويب', 'مطور برمجيات', 'مطور فل ستاك', 'مستقل', 'تصميم مواقع', 'تطوير التطبيقات', 'تطوير الخوادم', 'تطوير البوتات', 'تطوير SaaS'],
  tr: ['web gelistirici', 'yazilim gelistirici', 'full stack gelistirici', 'freelance gelistirici', 'uygulama gelistirme', 'sunucu gelistirme', 'bot gelistirme', 'saas gelistirme'],
  fr: ['developpeur web', 'developpeur full stack', 'developpeur freelance', 'applications web', 'developpement applicatif', 'developpement serveur', 'developpement de bots', 'developpement saas'],
  ru: ['веб-разработчик', 'фулстек разработчик', 'разработка сайтов', 'веб-приложения', 'разработка приложений', 'серверная разработка', 'разработка ботов', 'saas разработка'],
  es: ['desarrollador web', 'desarrollador full stack', 'desarrollador freelance', 'aplicaciones web', 'desarrollo de aplicaciones', 'desarrollo de servidores', 'desarrollo de bots', 'desarrollo saas'],
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '');

function withSiteUrl(path = '') {
  if (!siteUrl) {
    return undefined;
  }

  return `${siteUrl}${path}`;
}

function buildStructuredData({ lang, metadata }) {
  const person = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Kerim',
    jobTitle: 'Full Stack Developer',
    description: metadata.description,
    knowsLanguage: locales,
    knowsAbout: [...sharedKeywords, ...(localizedKeywords[lang] ?? [])],
  };

  const professionalService = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Kerim Development Services',
    description: metadata.description,
    areaServed: 'Worldwide',
    availableLanguage: locales,
    serviceType: [
      'Web development',
      'Full stack development',
      'App development',
      'Server development',
      'Bot development',
      'SaaS development',
    ],
    knowsAbout: [...sharedKeywords, ...(localizedKeywords[lang] ?? [])],
  };

  if (siteUrl) {
    person.url = withSiteUrl(`/${lang}`);
    professionalService.url = withSiteUrl(`/${lang}`);
  }

  return [person, professionalService];
}

const faviconMetadata = {
  icon: [
    { url: '/favicon_io/favicon.ico' },
    { url: '/favicon_io/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    { url: '/favicon_io/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
  ],
  apple: [{ url: '/favicon_io/apple-touch-icon.png', sizes: '180x180' }],
  other: [
    { rel: 'android-chrome-192x192', url: '/favicon_io/android-chrome-192x192.png' },
    { rel: 'android-chrome-512x512', url: '/favicon_io/android-chrome-512x512.png' },
  ],
};

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }) {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    return {};
  }

  const dictionary = await getDictionary(lang);

  return {
    ...dictionary.metadata,
    keywords: [...sharedKeywords, ...(localizedKeywords[lang] ?? [])],
    icons: faviconMetadata,
    manifest: '/favicon_io/site.webmanifest',
    category: 'technology',
  };
}

export default async function RootLayout({ children, params }) {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    notFound();
  }

  const dictionary = await getDictionary(lang);
  const structuredData = buildStructuredData({
    lang,
    metadata: dictionary.metadata,
  });

  return (
    <html lang={lang} dir={isRtlLocale(lang) ? 'rtl' : 'ltr'}>
      <body>
        {structuredData.map((item) => (
          <script
            key={item['@type']}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
          />
        ))}
        {children}
      </body>
    </html>
  );
}