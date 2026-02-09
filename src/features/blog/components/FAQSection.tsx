"use client";

import { useState } from "react";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  items: FAQItem[];
}

/**
 * Section FAQ avec Schema.org intégré
 * Améliore le SEO et l'optimisation pour les moteurs de recherche génératifs (GEO)
 */
export function FAQSection({ items }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Générer le JSON-LD Schema.org pour les FAQs
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* UI FAQ */}
      <section className="mt-12 rounded-2xl border border-white/10 bg-secondary/30 p-6 md:p-8">
        <h2 className="mb-6 text-2xl font-bold text-white">
          Questions fréquentes
        </h2>
        <div className="space-y-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="rounded-lg border border-white/5 bg-primary/30 transition-all hover:border-accent-blue/30"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="flex w-full items-center justify-between p-4 text-left transition-colors"
                aria-expanded={openIndex === index}
              >
                <h3 className="text-lg font-semibold text-white pr-4">
                  {item.question}
                </h3>
                <svg
                  className={`h-5 w-5 flex-shrink-0 text-accent-blue transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="border-t border-white/5 p-4 text-gray-300">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
