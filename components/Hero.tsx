import Image from "next/image";
import Link from "next/link";
import { Download } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-br from-secondary/80 to-primary px-6 py-12 shadow-2xl shadow-black/30">
      <div className="grid gap-8 md:grid-cols-[auto,260px] md:items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-accent-blue">Développeur Full-Stack & Salesforce</p>
          <h1 className="mt-4 text-3xl font-semibold text-white md:text-4xl">Omar El Koujouk</h1>
          <p className="mt-4 w-full text-base text-gray-300">
            Spécialisé en Next.js, React et intégrations Salesforce. Je conçois des expériences numériques performantes pour
            les entreprises ambitieuses.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/projets"
              className="rounded-full bg-accent-blue/80 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-primary transition hover:bg-accent-blue"
            >
              Mes projets
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:border-white/60"
            >
              Me contacter
            </Link>
            <a
              href="/assets/CV-Omar.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500/80 via-accent-blue to-indigo-500 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-primary shadow-xl shadow-cyan-500/25 transition hover:-translate-y-1 hover:shadow-cyan-400/40"
            >
              <Download className="h-4 w-4" />
              Télécharger mon CV
            </a>
          </div>
        </div>
        <div className="justify-self-center">
          <div className="relative h-48 w-48 overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:h-56 md:w-56">
            <Image src="/assets/omar.jpg" alt="Portrait d'Omar" fill sizes="160px" className="object-cover" priority />
          </div>
        </div>
      </div>
    </section>
  );
}
