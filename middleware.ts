import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const COOKIE_NAME = "portfolio-locale";
const DEFAULT_LOCALE = "fr";
const SUPPORTED_LOCALES = ["fr", "en"] as const;

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Ignorer les assets et appels API
    if (
        pathname.startsWith("/_next") ||
        pathname.startsWith("/api") ||
        pathname.includes(".")
    ) {
        return NextResponse.next();
    }

    // 1. Lire le cookie existant
    const cookieLocale = request.cookies.get(COOKIE_NAME)?.value;

    // Si on a déjà un cookie valide, on continue (le serveur l'utilisera)
    if (cookieLocale && SUPPORTED_LOCALES.includes(cookieLocale as any)) {
        return NextResponse.next();
    }

    // 2. Sinon, on détecte la langue du navigateur
    const acceptLanguage = request.headers.get("accept-language") || "";
    let detectedLocale = DEFAULT_LOCALE;

    if (acceptLanguage.toLowerCase().startsWith("en")) {
        detectedLocale = "en";
    }

    // 3. On définit le cookie pour les prochaines requêtes
    const response = NextResponse.next();
    response.cookies.set(COOKIE_NAME, detectedLocale, {
        path: "/",
        maxAge: 60 * 60 * 24 * 365, // 1 an
        sameSite: "lax",
    });

    return response;
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        "/((?!api|_next/static|_next/image|favicon.ico).*)",
    ],
};
