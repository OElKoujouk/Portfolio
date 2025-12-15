import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative mt-auto border-t border-white/5 bg-gradient-to-b from-primary via-primary to-secondary/50 py-8">
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
      <div className="container relative mx-auto flex flex-col items-center justify-between gap-4 px-6 text-center text-sm text-gray-400 md:flex-row md:text-left">
        <div className="flex flex-col gap-1">
          <p className="text-white font-medium">
            © {new Date().getFullYear()} <span className="text-gradient">Portfolio</span> — Développeur Full-Stack & Salesforce.
          </p>
          <p className="text-gray-500 text-xs">Basé en Ile-de-France · Disponible en présentiel et distanciel.</p>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/omar-el-koujouk-2580371a7/"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 transition-all duration-300 hover:border-accent-blue/60 hover:bg-accent-blue/10 hover:text-accent-blue hover:shadow-lg hover:shadow-accent-blue/20"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
            <span className="hidden sm:inline">LinkedIn</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
