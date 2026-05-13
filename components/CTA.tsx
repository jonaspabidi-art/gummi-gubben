import Link from "next/link";

export default function CTA() {
  return (
    <section
      className="py-16 md:py-24 px-4 md:px-[var(--spacing-margin-desktop)] text-center"
      style={{
        background: "var(--color-primary)",
        color: "var(--color-on-primary)",
      }}
    >
      <div className="max-w-3xl mx-auto">
        <h2
          className="text-3xl md:text-5xl font-bold uppercase mb-4 md:mb-6 tracking-tight"
          style={{
            fontFamily: "var(--font-headline)",
            letterSpacing: "-0.02em",
          }}
        >
          Spara plats i garaget idag
        </h2>
        <p
          className="text-lg mb-10 leading-relaxed"
          style={{
            fontFamily: "var(--font-body)",
            color: "var(--color-on-primary-container)",
          }}
        >
          Vårt bokningssystem är öppet dygnet runt. Hitta en tid som passar dig
          och checka in dina däck på däckhotellet.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link
            href="/boka?service=dackhotell"
            className="w-full sm:w-auto px-8 md:px-12 py-4 md:py-5 text-sm font-semibold uppercase tracking-widest transition-all shadow-xl hover:brightness-110 text-center"
            style={{
              fontFamily: "var(--font-headline)",
              background: "var(--color-on-surface)",
              color: "var(--color-surface)",
            }}
          >
            Boka Online
          </Link>
          <a
            href="tel:031-517764"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 border-2 px-8 md:px-12 py-4 md:py-5 text-sm font-semibold uppercase tracking-widest transition-all hover:opacity-80"
            style={{
              fontFamily: "var(--font-headline)",
              borderColor: "var(--color-on-primary)",
              color: "var(--color-on-primary)",
            }}
          >
            <span className="material-symbols-outlined">phone_in_talk</span>
            Ring Oss
          </a>
        </div>
      </div>
    </section>
  );
}
