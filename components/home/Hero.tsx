"use client";

import Image from "next/image";
import omarImage from "@/public/assets/omar.jpg";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="group relative overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-br from-secondary/80 via-secondary/60 to-primary px-6 py-12 shadow-2xl shadow-black/30 transition-all duration-700 hover:border-accent-blue/30">
      {/* Effets de lumière animés */}
      <div className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
        <div className="absolute top-0 left-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-blue/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-64 w-64 translate-x-1/2 translate-y-1/2 rounded-full bg-accent-purple/20 blur-3xl" />
      </div>

      <div className="relative z-10 grid gap-8 md:grid-cols-[auto,260px] md:items-center">
        <div className="space-y-6 animate-fade-in">
          <p className="text-xs uppercase tracking-[0.4em] text-accent-blue font-medium">{t.hero.role}</p>
          <h1 className="text-3xl font-bold text-white md:text-5xl lg:text-6xl leading-tight">
            <span className="text-gradient">Omar El Koujouk</span>
          </h1>
          <p className="mt-4 w-full text-base md:text-lg text-gray-300 leading-relaxed max-w-2xl">
            {t.hero.intro}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/projets"
              className="group/btn relative overflow-hidden rounded-full bg-gradient-to-r from-accent-blue via-accent-blue/90 to-accent-purple px-6 py-3 text-sm font-semibold uppercase tracking-wide text-primary shadow-lg shadow-accent-blue/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-accent-blue/50 shine-effect"
            >
              <span className="relative z-10">{t.hero.projectsBtn}</span>
            </Link>
            <Link
              href="/contact"
              className="rounded-full border-2 border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white backdrop-blur-sm transition-all duration-300 hover:border-accent-blue/60 hover:bg-accent-blue/10 hover:text-accent-blue hover:shadow-lg hover:shadow-accent-blue/20"
            >
              {t.hero.contactBtn}
            </Link>

          </div>
        </div>
        <div className="justify-self-center animate-slide-left">
          <div className="relative h-48 w-48 overflow-hidden rounded-3xl border-2 border-white/10 bg-gradient-to-br from-white/10 to-white/5 shadow-2xl transition-all duration-500 md:h-64 md:w-64 group-hover:border-accent-blue/40 group-hover:shadow-[0_0_30px_rgba(0,217,255,0.3)]">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/20 via-transparent to-accent-purple/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <Image
              src={omarImage}
              alt={t.hero.portraitAlt}
              fill
              placeholder="blur"
              sizes="(max-width: 768px) 192px, 256px"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
