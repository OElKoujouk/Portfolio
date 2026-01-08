import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const COOKIE_NAME = "portfolio-locale";
const DEFAULT_LOCALE = "fr";
const SUPPORTED_LOCALES = ["fr", "en"] as const;

/**
 * Content Security Policy pour la sécurité du site
 * Permet les scripts inline pour les composants React et les ressources tierces nécessaires
 */
const CSP_HEADER = `
    default-src 'self';
    script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.google.com https://www.gstatic.com;
    style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
    img-src 'self' data: blob: https://picsum.photos https://images.unsplash.com https://img.youtube.com;
    font-src 'self' https://fonts.gstatic.com;
    connect-src 'self' https://www.google.com https://vitals.vercel-insights.com;
    frame-src https://www.google.com https://www.youtube.com;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    upgrade-insecure-requests;
`.replace(/\s{2,}/g, " ").trim();

export function proxy(request: NextRequest) {
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

    // Si on a déjà un cookie valide, on ajoute juste les headers de sécurité
    if (cookieLocale && SUPPORTED_LOCALES.includes(cookieLocale as "fr" | "en")) {
        const response = NextResponse.next();
        response.headers.set("Content-Security-Policy", CSP_HEADER);
        response.headers.set("X-Content-Type-Options", "nosniff");
        response.headers.set("X-Frame-Options", "DENY");
        response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
        return response;
    }

    // 2. Sinon, on détecte la langue du navigateur
    const acceptLanguage = request.headers.get("accept-language") || "";
    let detectedLocale = DEFAULT_LOCALE;

    if (acceptLanguage.toLowerCase().startsWith("en")) {
        detectedLocale = "en";
    }

    // 3. On définit le cookie pour les prochaines requêtes + headers de sécurité
    const response = NextResponse.next();
    response.cookies.set(COOKIE_NAME, detectedLocale, {
        path: "/",
        maxAge: 60 * 60 * 24 * 365, // 1 an
        sameSite: "lax",
    });
    response.headers.set("Content-Security-Policy", CSP_HEADER);
    response.headers.set("X-Content-Type-Options", "nosniff");
    response.headers.set("X-Frame-Options", "DENY");
    response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");

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
