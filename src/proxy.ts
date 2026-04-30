import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import { defaultLocale, detectLocale, locales } from './i18n/config';

function pathnameHasLocale(pathname: string) {
  return locales.some((locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`));
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathnameHasLocale(pathname)) {
    return NextResponse.next();
  }

  const detectedLocale = detectLocale(request.headers.get('accept-language') ?? '') || defaultLocale;
  const redirectUrl = request.nextUrl.clone();

  redirectUrl.pathname = `/${detectedLocale}${pathname}`;

  return NextResponse.redirect(redirectUrl);
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\..*).*)'],
};