export default function Footer() {
  return (
    <footer
      className="border-t-4"
      style={{
        background: "var(--color-inverse-surface)",
        color: "var(--color-on-secondary)",
        borderColor: "var(--color-primary)",
      }}
    >
      <div
        className="flex flex-col md:flex-row justify-between items-center p-[var(--spacing-margin-desktop)] w-full mx-auto gap-8"
        style={{ maxWidth: "var(--spacing-container-max)" }}
      >
        <div className="flex flex-col gap-2">
          <div
            className="text-xl font-bold uppercase"
            style={{
              fontFamily: "var(--font-headline)",
              color: "var(--color-on-primary-fixed)",
            }}
          >
            Gummigubben
          </div>
          <p
            className="text-sm max-w-sm"
            style={{
              fontFamily: "var(--font-body)",
              color: "var(--color-secondary-fixed)",
            }}
          >
            © 2024 Gummigubben Tire Service. Deltavägen 11B, 417 30 Göteborg.
          </p>
        </div>

        <div className="flex flex-wrap gap-8">
          {[
            "Integritetspolicy",
            "Användarvillkor",
            "Däckskötsel",
            "Prislista",
          ].map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm transition-colors hover:opacity-80"
              style={{
                fontFamily: "var(--font-body)",
                color: "var(--color-secondary-fixed)",
              }}
            >
              {link}
            </a>
          ))}
        </div>

        <div className="flex gap-4">
          <div
            className="w-10 h-10 rounded-full border flex items-center justify-center cursor-pointer hover:opacity-80 transition-colors"
            style={{ borderColor: "var(--color-secondary-fixed)" }}
          >
            <span
              className="material-symbols-outlined text-sm"
              style={{ color: "var(--color-secondary-fixed)" }}
            >
              share
            </span>
          </div>
          <div
            className="w-10 h-10 rounded-full border flex items-center justify-center cursor-pointer hover:opacity-80 transition-colors"
            style={{ borderColor: "var(--color-secondary-fixed)" }}
          >
            <span
              className="material-symbols-outlined text-sm"
              style={{ color: "var(--color-secondary-fixed)" }}
            >
              location_on
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
