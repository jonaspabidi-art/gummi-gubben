"use client";

import { useState } from "react";
import Link from "next/link";

interface NavItem {
  label: string;
  href: string;
  key: string;
}

const navItems: NavItem[] = [
  { label: "Hem", href: "/", key: "hem" },
  { label: "Tjänster", href: "/boka", key: "tjanster" },
  { label: "Däckhotell", href: "/dackhotell", key: "dackhotell" },
  { label: "Kontakt", href: "/#kontakt", key: "kontakt" },
];

interface HeaderProps {
  onBookClick: () => void;
  activePage?: "hem" | "dackhotell" | "tjanster";
}

export default function Header({ onBookClick, activePage = "hem" }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className="bg-[var(--color-surface)] border-b-2 border-[var(--color-on-surface)] sticky top-0 z-50"
      style={{ fontFamily: "var(--font-headline)" }}
    >
      <nav className="flex justify-between items-center px-4 md:px-[var(--spacing-margin-desktop)] py-4 w-full max-w-[var(--spacing-container-max)] mx-auto">
        <Link
          href="/"
          className="text-xl md:text-2xl font-bold tracking-wide text-[var(--color-primary)] uppercase"
        >
          Gummigubben
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = item.key === activePage;
            return (
              <Link
                key={item.key}
                href={item.href}
                className={`text-sm uppercase tracking-wider font-semibold transition-colors ${
                  isActive
                    ? "text-[var(--color-primary)] border-b-2 border-[var(--color-primary)] pb-1"
                    : "text-[var(--color-secondary)] hover:text-[var(--color-primary)]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-3 md:gap-4">
          <a
            href="tel:031-517764"
            className="hidden lg:flex items-center gap-2 text-sm text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors font-semibold uppercase tracking-wider"
          >
            <span className="material-symbols-outlined text-lg">call</span>
            031-51 77 64
          </a>
          <button
            onClick={onBookClick}
            className="bg-[var(--color-primary-container)] text-[var(--color-on-primary)] px-4 md:px-6 py-2 text-xs md:text-sm uppercase tracking-wider font-semibold hover:brightness-110 transition-all active:scale-95 shadow-sm cursor-pointer whitespace-nowrap"
          >
            Boka Tid
          </button>
          {/* Mobile menu button */}
          <button
            className="md:hidden p-1 text-[var(--color-on-surface)]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Öppna meny"
          >
            <span className="material-symbols-outlined">
              {mobileOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[var(--color-outline-variant)] bg-[var(--color-surface)]">
          <div className="flex flex-col px-4 py-4 gap-1">
            {navItems.map((item) => {
              const isActive =
                (item.key === "hem" && activePage === "hem") ||
                (item.key === "dackhotell" && activePage === "dackhotell");
              return (
                <Link
                  key={item.key}
                  href={item.href}
                  className={`text-sm uppercase tracking-wider font-semibold py-3 border-b border-[var(--color-outline-variant)] transition-colors ${
                    isActive
                      ? "text-[var(--color-primary)]"
                      : "text-[var(--color-secondary)] hover:text-[var(--color-primary)]"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
            <a
              href="tel:031-517764"
              className="flex items-center gap-2 text-sm text-[var(--color-secondary)] font-semibold uppercase tracking-wider py-3"
            >
              <span className="material-symbols-outlined text-lg">call</span>
              031-51 77 64
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
