"use client";

import { FaLinkedin, FaCode, FaMobileAlt, FaCogs } from "react-icons/fa";
import { Mail, Clock, Phone } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { useLanguage } from "@/lib/i18n";

export default function ContactPage() {
  const { t } = useLanguage();

  const availability = [
    { icon: FaCode, label: t.contact.webProjects, color: "text-accent-blue", gradient: "from-accent-blue/20 to-accent-blue/5" },
    { icon: FaMobileAlt, label: t.contact.mobileApps, color: "text-accent-purple", gradient: "from-accent-purple/20 to-accent-purple/5" },
    { icon: FaCogs, label: t.contact.salesforceIntegrations, color: "text-accent-pink", gradient: "from-accent-pink/20 to-accent-pink/5" }
  ];

  return (
    <section className="space-y-12 md:space-y-16">
      <header className="w-full space-y-4 animate-fade-in">
        <p className="text-xs uppercase tracking-[0.4em] text-accent-blue font-semibold">{t.contact.label}</p>
        <h1 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
          <span className="text-gradient">{t.contact.title1}</span>{" "}
          <span className="text-white">{t.contact.title2}</span>
        </h1>
        <div className="flex items-center gap-3 mt-4">
          <Clock className="h-5 w-5 text-accent-blue" />
          <p className="text-base leading-relaxed text-gray-300">{t.contact.responseTime}</p>
        </div>
        <div className="h-1 w-24 bg-gradient-to-r from-accent-blue to-accent-purple rounded-full mt-6" />
      </header>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="animate-slide-up">
          <ContactForm />
        </div>
        <div className="space-y-6 animate-slide-up" style={{ animationDelay: "150ms" }}>
          <div className="card group">
            <div className="flex items-center gap-2 mb-4">
              <Mail className="h-4 w-4 text-accent-blue" />
              <p className="text-sm uppercase tracking-[0.4em] text-accent-blue font-semibold">{t.contact.label}</p>
            </div>
            <div className="mt-4 space-y-3">
              <a
                href="mailto:omar.lbn@outlook.com"
                className="group/link inline-flex items-center gap-3 w-full rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-gray-200 transition-all duration-300 hover:border-accent-blue/60 hover:bg-accent-blue/10 hover:text-accent-blue hover:shadow-lg hover:shadow-accent-blue/20 hover:scale-[1.02]"
              >
                <Mail className="h-4 w-4 transition-transform duration-300 group-hover/link:scale-110" />
                <span>omar.lbn@outlook.com</span>
              </a>
              <a
                href="tel:+33783115973"
                className="group/link inline-flex items-center gap-3 w-full rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-gray-200 transition-all duration-300 hover:border-accent-blue/60 hover:bg-accent-blue/10 hover:text-accent-blue hover:shadow-lg hover:shadow-accent-blue/20 hover:scale-[1.02]"
              >
                <Phone className="h-4 w-4 transition-transform duration-300 group-hover/link:scale-110" />
                <span>+33 7 83 11 59 73</span>
              </a>
              <a
                href="https://www.linkedin.com/in/omar-el-koujouk-2580371a7/"
                target="_blank"
                rel="noreferrer"
                className="group/link inline-flex items-center gap-3 w-full rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-gray-200 transition-all duration-300 hover:border-accent-blue/60 hover:bg-accent-blue/10 hover:text-accent-blue hover:shadow-lg hover:shadow-accent-blue/20 hover:scale-[1.02]"
              >
                <FaLinkedin className="h-4 w-4 transition-transform duration-300 group-hover/link:scale-110" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-4 w-4 rounded-full bg-gradient-to-br from-accent-blue to-accent-purple animate-pulse-slow" />
              <p className="text-sm uppercase tracking-[0.4em] text-accent-blue font-semibold">{t.contact.availableFor}</p>
            </div>
            <ul className="mt-4 space-y-4">
              {availability.map(({ icon: Icon, label, color, gradient }, index) => (
                <li
                  key={label}
                  className="group flex items-center gap-4 rounded-xl border border-white/5 bg-gradient-to-br p-4 transition-all duration-300 hover:border-white/10 hover:shadow-lg"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`rounded-lg bg-gradient-to-br ${gradient} p-3 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                    <Icon className={`h-5 w-5 ${color}`} />
                  </div>
                  <span className="text-gray-200 font-medium transition-colors duration-300 group-hover:text-white">
                    {label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
