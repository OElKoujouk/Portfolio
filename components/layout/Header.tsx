"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/i18n";
import { NAV_HREFS } from "@/lib/constants";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();

  const navLinks = [
    { label: t.nav.home, href: NAV_HREFS[0] },
    { label: t.nav.projects, href: NAV_HREFS[1] },
    { label: t.nav.contact, href: NAV_HREFS[2] },
  ];

  useEffect(() => {
    // Close mobile menu on navigation - only if currently open
    if (isOpen) {
      setIsOpen(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-all duration-300",
        scrolled
          ? "border-white/10 bg-primary/95 backdrop-blur-xl shadow-lg shadow-black/20"
          : "border-white/5 bg-primary/90 backdrop-blur-xl"
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="group relative text-lg font-bold uppercase tracking-[0.3em] text-white transition-all duration-300 hover:scale-105"
        >
          <span className="relative">
            <span className="text-gradient">PORTFOLIO</span>
            <span className="absolute inset-0 text-accent-blue blur-sm opacity-0 transition-opacity duration-300 group-hover:opacity-50">
              PORTFOLIO
            </span>
          </span>
        </Link>
        <div className="hidden items-center gap-6 md:flex">
          <nav className="flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "group relative text-sm font-medium uppercase tracking-wide transition-all duration-300",
                  pathname === link.href
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                )}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-gradient-to-r from-accent-blue to-accent-purple animate-slide-right" />
                )}
                {pathname !== link.href && (
                  <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-accent-blue transition-all duration-300 group-hover:w-full" />
                )}
              </Link>
            ))}
          </nav>
          <LanguageSwitcher />
        </div>
        <div className="flex items-center gap-3 md:hidden">
          <LanguageSwitcher />
          <button
            type="button"
            className="relative z-10 rounded-lg p-2 text-white transition-all duration-300 hover:bg-white/10 hover:scale-110"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label="Ouvrir le menu"
          >
            {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <nav
          id="mobile-menu"
          className="border-t border-white/5 bg-gradient-to-b from-primary/95 to-primary backdrop-blur-xl px-6 py-4 shadow-lg md:hidden animate-slide-down"
        >
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "block rounded-lg px-4 py-2 text-sm font-medium uppercase tracking-widest transition-all duration-300",
                    pathname === link.href
                      ? "bg-accent-blue/20 text-white"
                      : "text-gray-400 hover:bg-white/5 hover:text-white"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
