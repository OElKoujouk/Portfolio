"use client";

import Hero from "@/components/home/Hero";
import AboutSection from "@/components/home/AboutSection";
import { Code, Zap, Rocket } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

const skillBadges = ["Next.js", "React", "Salesforce", "Tailwind CSS", "TypeScript", "Prisma + MySQL"];

export default function HomePageClient() {
    const { t } = useLanguage();

    const offerings = [
        {
            title: t.home.offerings[0].title,
            icon: Code,
            description: t.home.offerings[0].description
        },
        {
            title: t.home.offerings[1].title,
            icon: Zap,
            description: t.home.offerings[1].description
        },
        {
            title: t.home.offerings[2].title,
            icon: Rocket,
            description: t.home.offerings[2].description
        }
    ];

    return (
        <div className="space-y-12 md:space-y-16">
            <Hero />

            <section className="card animate-fade-in">
                <div className="flex items-center gap-3 mb-4">
                    <div className="h-1 w-12 bg-gradient-to-r from-accent-blue to-accent-purple rounded-full" />
                    <h2 className="text-2xl font-bold text-white">{t.home.skillsTitle}</h2>
                </div>
                <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                    {t.home.skillsSubtitle}
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                    {skillBadges.map((skill, index) => (
                        <span
                            key={skill}
                            className="badge animate-slide-up"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </section>

            <section className="card space-y-6 animate-fade-in">
                <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                        <div className="h-1 w-12 bg-gradient-to-r from-accent-purple to-accent-pink rounded-full" />
                        <h2 className="text-2xl font-bold text-white">{t.home.whatIDoTitle}</h2>
                    </div>
                    <p className="text-sm text-gray-400 leading-relaxed">
                        {t.home.whatIDoSubtitle}
                    </p>
                </div>
                <div className="grid gap-6 md:grid-cols-3">
                    {offerings.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={item.title}
                                className="card group h-full animate-slide-up"
                                style={{ animationDelay: `${index * 150}ms` }}
                            >
                                <div className="mb-4 inline-flex rounded-xl bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 p-3">
                                    <Icon className="h-5 w-5 text-accent-blue transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3" />
                                </div>
                                <h3 className="text-lg font-bold text-white transition-colors duration-300 group-hover:text-accent-blue">
                                    {item.title}
                                </h3>
                                <p className="mt-3 text-sm leading-relaxed text-gray-300">{item.description}</p>
                            </div>
                        );
                    })}
                </div>
            </section>

            <section className="card space-y-10 lg:p-10 animate-fade-in">
                <header className="w-full text-center space-y-4">
                    <p className="text-xs uppercase tracking-[0.45em] text-accent-blue font-semibold">{t.home.profileLabel}</p>
                    <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                        <span className="text-gradient">{t.home.profileTitle1}</span>
                        <br />
                        <span className="text-white">{t.home.profileTitle2}</span>
                    </h2>
                    <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-gray-300">
                        {t.home.profileDescription}
                    </p>
                </header>
                <div className="mx-auto max-w-6xl">
                    <AboutSection />
                </div>
            </section>
        </div>
    );
}
