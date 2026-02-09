import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  name: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  currentPage: string;
}

/**
 * Composant Breadcrumbs avec Schema.org intégré
 * Améliore la navigation et le SEO
 */
export function Breadcrumbs({ items, currentPage }: BreadcrumbsProps) {
  // Générer le JSON-LD Schema.org pour les Breadcrumbs
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Accueil",
        "item": "https://omar-elkoujouk.fr"
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": item.name,
        "item": item.href ? `https://omar-elkoujouk.fr${item.href}` : undefined
      })),
      {
        "@type": "ListItem",
        "position": items.length + 2,
        "name": currentPage
      }
    ]
  };

  return (
    <>
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* UI Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex items-center gap-2 text-sm text-gray-400">
          <li>
            <Link
              href="/"
              className="flex items-center gap-1 hover:text-accent-blue transition-colors"
              aria-label="Accueil"
            >
              <Home className="h-4 w-4" />
            </Link>
          </li>
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <ChevronRight className="h-4 w-4 text-white/20" />
              {item.href ? (
                <Link
                  href={item.href as any}
                  className="hover:text-accent-blue transition-colors"
                >
                  {item.name}
                </Link>
              ) : (
                <span>{item.name}</span>
              )}
            </li>
          ))}
          <li className="flex items-center gap-2">
            <ChevronRight className="h-4 w-4 text-white/20" />
            <span className="text-white font-medium">{currentPage}</span>
          </li>
        </ol>
      </nav>
    </>
  );
}
