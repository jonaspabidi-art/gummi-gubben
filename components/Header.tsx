"use client";

import { useState } from "react";

interface HeaderProps {
  onBookClick: () => void;
}

export default function Header({ onBookClick }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className="bg-[var(--color-surface)] border-b-2 border-[var(--color-on-surface)] sticky top-0 z-50"
      style={{ fontFamily: "var(--font-headline)" }}
    >
      <nav className="flex justify-between items-center px-[var(--spacing-margin-desktop)] py-4 w-full max-w-[var(--spacing-container-max)] mx-auto">
        <div className="text-2xl font-bold tracking-wide text-[var(--color-primary)] uppercase">
          Gummigubben
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {["Hem", "Tjänster", "Kontakt"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-sm uppercase tracking-wider text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors font-semibold"
            >
              {item}
            </a>
          ))}
          <a
            href="#"
            className="text-sm uppercase tracking-wider text-[var(--color-primary)] border-b-2 border-[var(--color-primary)] pb-1 font-semibold"
          >
            Däckhotell
          </a>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="tel:031-517764"
            className="hidden lg:flex items-center gap-2 text-sm text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors font-semibold uppercase tracking-wider"
          >
            <span className="material-symbols-outlined text-lg">call</span>
            031-51 77 64
          </a>
          <button
            onClick={onBookClick}
            className="bg-[var(--color-primary-container)] text-[var(--color-on-primary)] px-6 py-2 text-sm uppercase tracking-wider font-semibold hover:brightness-110 transition-all active:scale-95 shadow-sm cursor-pointer"
          >
            Boka Tid
          </button>
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-[var(--color-on-surface)]"
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
          <div className="flex flex-col px-[var(--spacing-margin-mobile)] py-4 gap-4">
            {["Hem", "Tjänster", "Däckhotell", "Kontakt"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm uppercase tracking-wider text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors font-semibold py-2 border-b border-[var(--color-outline-variant)]"
                onClick={() => setMobileOpen(false)}
              >
                {item}
              </a>
            ))}
            <a
              href="tel:031-517764"
              className="flex items-center gap-2 text-sm text-[var(--color-secondary)] font-semibold uppercase tracking-wider py-2"
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
