import type { Metadata } from "next";
import { FaLinkedin, FaCode, FaMobileAlt, FaCogs } from "react-icons/fa";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Discutons de vos projets web, mobiles ou intégrations Salesforce. Réponse sous 24h."
};

const availability = [
  { icon: FaCode, label: "Projets web", color: "text-accent-blue" },
  { icon: FaMobileAlt, label: "Applications mobiles", color: "text-accent-purple" },
  { icon: FaCogs, label: "Intégrations Salesforce", color: "text-accent-pink" }
];

export default function ContactPage() {
  return (
    <section className="space-y-10">
      <header className="w-full">
        <p className="text-xs uppercase tracking-[0.4em] text-accent-blue">Contact</p>
        <h1 className="mt-3 text-3xl font-semibold text-white">Parlons de votre prochain projet</h1>
        <p className="mt-4 text-gray-300">Réponse sous 24h. Je suis disponible pour des missions à distance.</p>
      </header>

      <div className="grid gap-8 lg:grid-cols-2">
        <ContactForm />
        <div className="space-y-6">
          <div className="card">
            <p className="text-sm uppercase tracking-[0.4em] text-accent-blue">Réseau</p>
            <div className="mt-4 flex gap-4">
              <a
                href="https://www.linkedin.com/in/omar-el-koujouk-2580371a7/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-gray-200 transition hover:border-white/60"
              >
                <FaLinkedin /> LinkedIn
              </a>
            </div>
          </div>

          <div className="card">
            <p className="text-sm uppercase tracking-[0.4em] text-accent-blue">Disponible pour</p>
            <ul className="mt-4 space-y-3 text-gray-200">
              {availability.map(({ icon: Icon, label, color }) => (
                <li key={label} className="flex items-center gap-3">
                  <span className={color}>
                    <Icon />
                  </span>
                  {label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
