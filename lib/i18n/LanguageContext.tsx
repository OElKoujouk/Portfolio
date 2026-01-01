"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { translations, Locale } from "./translations";

type TranslationType = typeof translations.fr | typeof translations.en;

interface LanguageContextType {
    locale: Locale;
    setLocale: (locale: Locale) => void;
    t: TranslationType;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [locale, setLocaleState] = useState<Locale>("fr");

    useEffect(() => {
        // Récupérer la langue sauvegardée ou utiliser la préférence du navigateur
        const saved = localStorage.getItem("portfolio-locale") as Locale | null;
        if (saved && (saved === "fr" || saved === "en")) {
            setLocaleState(saved);
        } else {
            // Détecter la langue du navigateur
            const browserLang = navigator.language.toLowerCase();
            if (browserLang.startsWith("en")) {
                setLocaleState("en");
            }
        }
    }, []);

    const setLocale = (newLocale: Locale) => {
        setLocaleState(newLocale);
        localStorage.setItem("portfolio-locale", newLocale);
    };

    const t = translations[locale];

    return (
        <LanguageContext.Provider value={{ locale, setLocale, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
