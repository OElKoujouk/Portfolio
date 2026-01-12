"use client";

import { useLanguage } from "@/features/i18n";

export default function SkipLink() {
    const { t } = useLanguage();

    return (
        <a
            href="#main-content"
            className="fixed left-4 top-4 z-[100] -translate-y-[150%] rounded-lg bg-accent-blue px-4 py-2 font-medium text-primary transition-transform focus:translate-y-0"
        >
            {t.skipToContent}
        </a>
    );
}
