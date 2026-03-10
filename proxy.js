import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { NextResponse } from "next/server";

const locales = ["en", "bn"];
const defaultLocale = "en";

function getLocale(request) {
  const acceptedLanguage = request.headers.get("accept-language") ?? undefined;
  //   console.log("Accepted Laguages", acceptedLanguage);

  const headers = { "accept-language": acceptedLanguage };

  //   console.log("Headers", headers);
  const languages = new Negotiator({ headers }).languages();

  //   console.log("Languages", languages);

  return match(languages, locales, defaultLocale);
}

export function proxy(request) {
  const pathname = request.nextUrl.pathname;
  //   console.log("Pathname", pathname);

  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}`) && pathname !== `/${locale}`,
  );

  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);

    return NextResponse.redirect(
      new URL(`/${locale}${pathname}`, request.url),
    );
  }
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)",
  ],
};