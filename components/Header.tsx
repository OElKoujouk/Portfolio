"use client";

import Link from "next/link";
import type { Route } from "next";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "Projets", href: "/projets" },
  { label: "À propos", href: "/apropos" },
  { label: "Contact", href: "/contact" }
] as const satisfies { label: string; href: Route }[];

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-primary/90 backdrop-blur-xl">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold uppercase tracking-[0.3em] text-white">
          <span className="text-accent-blue">PORTFOLIO</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm uppercase tracking-wide transition",
                pathname === link.href ? "text-white" : "text-gray-400 hover:text-white"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <button
          type="button"
          className="text-white md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label="Ouvrir le menu"
        >
          {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      </div>
      {isOpen && (
        <nav id="mobile-menu" className="border-t border-white/5 bg-primary px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "block text-sm uppercase tracking-widest",
                    pathname === link.href ? "text-white" : "text-gray-400"
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
