import Link from "next/link";

const pages = [
  { label: "Hem", href: "/" },
  { label: "Tjänster", href: "/#tjanster" },
  { label: "Däckhotell", href: "/dackhotell" },
  { label: "Boka tid", href: "/#" },
];

const info = [
  { label: "Integritetspolicy", href: "#" },
  { label: "Användarvillkor", href: "#" },
  { label: "Däckskötsel", href: "#" },
  { label: "Prislista", href: "#" },
];

export default function SiteFooter() {
  return (
    <footer
      className="border-t-4 mt-16 md:mt-24"
      style={{
        background: "var(--color-inverse-surface)",
        borderColor: "var(--color-primary)",
      }}
    >
      <div
        className="max-w-[var(--spacing-container-max)] mx-auto px-4 md:px-[var(--spacing-margin-desktop)] py-12 md:py-16"
      >
        {/* Top row */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-10 md:mb-12 gap-10 md:gap-12">
          {/* Brand */}
          <div className="max-w-xs">
            <div
              className="text-xl font-bold uppercase mb-4 md:mb-6"
              style={{
                fontFamily: "var(--font-headline)",
                color: "var(--color-on-primary-fixed)",
              }}
            >
              Gummigubben
            </div>
            <p
              className="text-sm leading-relaxed"
              style={{
                fontFamily: "var(--font-body)",
                color: "var(--color-secondary-fixed)",
              }}
            >
              Din pålitliga partner för däck, fälg och däckförvaring i Göteborg
              sedan generationer. Vi kombinerar hantverk med modern teknik.
            </p>
          </div>

          {/* Nav cols */}
          <div className="grid grid-cols-2 gap-10 md:gap-16">
            <nav className="flex flex-col gap-3">
              <span
                className="text-xl font-semibold uppercase mb-2 text-white"
                style={{ fontFamily: "var(--font-headline)" }}
              >
                Sidor
              </span>
              {pages.map((p) => (
                <Link
                  key={p.label}
                  href={p.href}
                  className="text-sm hover:opacity-80 transition-colors"
                  style={{
                    fontFamily: "var(--font-body)",
                    color: "var(--color-secondary-fixed)",
                  }}
                >
                  {p.label}
                </Link>
              ))}
            </nav>
            <nav className="flex flex-col gap-3">
              <span
                className="text-xl font-semibold uppercase mb-2 text-white"
                style={{ fontFamily: "var(--font-headline)" }}
              >
                Info
              </span>
              {info.map((p) => (
                <a
                  key={p.label}
                  href={p.href}
                  className="text-sm hover:opacity-80 transition-colors"
                  style={{
                    fontFamily: "var(--font-body)",
                    color: "var(--color-secondary-fixed)",
                  }}
                >
                  {p.label}
                </a>
              ))}
            </nav>
          </div>

          {/* CTA + socials */}
          <div className="flex flex-col items-start md:items-end gap-6">
            <a
              href="tel:031-517764"
              className="inline-block text-white text-sm font-bold uppercase px-8 md:px-10 py-4 hover:brightness-110 transition-all"
              style={{
                fontFamily: "var(--font-headline)",
                background: "var(--color-primary)",
              }}
            >
              Kontakta Oss
            </a>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center hover:bg-[var(--color-primary)] transition-all"
                style={{ background: "rgba(255,255,255,0.1)" }}
                aria-label="Facebook"
              >
                <span
                  className="material-symbols-outlined text-sm text-white"
                >
                  share
                </span>
              </a>
              <a
                href="https://maps.google.com/?q=Deltav%C3%A4gen+11B+Gothenburg"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center hover:bg-[var(--color-primary)] transition-all"
                style={{ background: "rgba(255,255,255,0.1)" }}
                aria-label="Hitta oss"
              >
                <span className="material-symbols-outlined text-sm text-white">
                  location_on
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm"
          style={{
            borderColor: "rgba(255,255,255,0.1)",
            fontFamily: "var(--font-body)",
            color: "var(--color-secondary-fixed)",
          }}
        >
          <p>© 2024 Gummigubben Tire Service. Deltavägen 11B, 417 30 Göteborg.</p>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">credit_card</span>
            Vi accepterar kort &amp; Klarna
          </div>
        </div>
      </div>
    </footer>
  );
}
