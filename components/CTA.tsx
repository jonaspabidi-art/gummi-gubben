interface CTAProps {
  onBookClick: () => void;
}

export default function CTA({ onBookClick }: CTAProps) {
  return (
    <section
      className="py-24 px-[var(--spacing-margin-desktop)] text-center"
      style={{
        background: "var(--color-primary)",
        color: "var(--color-on-primary)",
      }}
    >
      <div className="max-w-3xl mx-auto">
        <h2
          className="text-5xl font-bold uppercase mb-6 tracking-tight"
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
          <button
            onClick={onBookClick}
            className="px-12 py-5 text-sm font-semibold uppercase tracking-widest transition-all shadow-xl hover:brightness-110 cursor-pointer"
            style={{
              fontFamily: "var(--font-headline)",
              background: "var(--color-on-surface)",
              color: "var(--color-surface)",
            }}
          >
            Boka Online
          </button>
          <a
            href="tel:031-517764"
            className="inline-flex items-center justify-center gap-3 border-2 px-12 py-5 text-sm font-semibold uppercase tracking-widest transition-all hover:opacity-80"
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
