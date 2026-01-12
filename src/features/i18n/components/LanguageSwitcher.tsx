"use client";

import { useLanguage } from "../LanguageContext";
import { Locale } from "../translations";
import { cn } from "@/lib/utils";

export default function LanguageSwitcher() {
    const { locale, setLocale } = useLanguage();

    const toggleLocale = () => {
        setLocale(locale === "fr" ? "en" : "fr");
    };

    return (
        <button
            type="button"
            onClick={toggleLocale}
            className={cn(
                "relative flex items-center gap-1 rounded-full border border-white/20 bg-white/5 px-3 py-1.5",
                "text-xs font-semibold uppercase tracking-wider text-gray-300",
                "backdrop-blur-sm transition-all duration-300",
                "hover:border-accent-blue/60 hover:bg-accent-blue/10 hover:text-accent-blue",
                "hover:shadow-lg hover:shadow-accent-blue/20"
            )}
            aria-label={locale === "fr" ? "Switch to English" : "Passer en français"}
        >
            <span
                className={cn(
                    "transition-colors duration-200",
                    locale === "fr" ? "text-accent-blue" : "text-gray-500"
                )}
            >
                FR
            </span>
            <span className="text-gray-500">/</span>
            <span
                className={cn(
                    "transition-colors duration-200",
                    locale === "en" ? "text-accent-blue" : "text-gray-500"
                )}
            >
                EN
            </span>
        </button>
    );
}
