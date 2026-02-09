import Image from "next/image";
import Link from "next/link";
import { Linkedin, Mail } from "lucide-react";
import omarImage from "../../../public/assets/omar.jpg";
import { SOCIAL_LINKS, CONTACT_INFO } from "@/lib/constants";

interface AuthorBioProps {
  locale?: "fr" | "en";
}

/**
 * Composant Author Bio pour les articles de blog
 * Améliore la crédibilité et le SEO (E-E-A-T)
 */
export function AuthorBio({ locale = "fr" }: AuthorBioProps) {
  const content = {
    fr: {
      title: "À propos de l'auteur",
      name: "Omar El Koujouk",
      role: "Développeur Full-Stack & Expert Salesforce",
      bio: "Expert en développement Salesforce et web Full-Stack (React, Next.js, TypeScript), je transforme vos idées en solutions digitales performantes. Basé à Paris, j'accompagne les entreprises dans leurs projets de transformation digitale et d'intégration CRM.",
      contact: "Besoin d'un développeur ?",
      contactBtn: "Travaillons ensemble"
    },
    en: {
      title: "About the Author",
      name: "Omar El Koujouk",
      role: "Full-Stack Developer & Salesforce Expert",
      bio: "Expert in Salesforce development and Full-Stack web development (React, Next.js, TypeScript), I transform your ideas into high-performance digital solutions. Based in Paris, I support companies in their digital transformation and CRM integration projects.",
      contact: "Need a developer?",
      contactBtn: "Let's work together"
    }
  };

  const t = content[locale];

  return (
    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-secondary/60 to-secondary/40 p-6 md:p-8 backdrop-blur-sm">
      <h3 className="mb-6 text-xl font-bold text-white">{t.title}</h3>

      <div className="flex flex-col gap-6 md:flex-row md:items-start">
        {/* Photo */}
        <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-2xl border-2 border-white/10 md:h-28 md:w-28">
          <Image
            src={omarImage}
            alt={t.name}
            fill
            className="object-cover"
            sizes="112px"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/10 to-accent-purple/10" />
        </div>

        {/* Bio */}
        <div className="flex-1 space-y-4">
          <div>
            <h4 className="text-lg font-bold text-white">{t.name}</h4>
            <p className="text-sm text-accent-blue">{t.role}</p>
          </div>

          <p className="text-sm leading-relaxed text-gray-300">{t.bio}</p>

          {/* Social Links */}
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-white/5 px-3 py-2 text-sm font-medium text-gray-300 transition-all hover:bg-accent-blue/10 hover:text-accent-blue"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </Link>
            <Link
              href={`mailto:${CONTACT_INFO.email}`}
              className="inline-flex items-center gap-2 rounded-lg bg-white/5 px-3 py-2 text-sm font-medium text-gray-300 transition-all hover:bg-accent-blue/10 hover:text-accent-blue"
            >
              <Mail className="h-4 w-4" />
              Email
            </Link>
          </div>

          {/* CTA */}
          <div className="pt-2">
            <p className="mb-3 text-sm font-semibold text-white">{t.contact}</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-blue to-accent-purple px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-accent-blue/30 transition-all hover:scale-105 hover:shadow-xl"
            >
              {t.contactBtn}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
