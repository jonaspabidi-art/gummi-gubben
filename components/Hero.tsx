interface HeroProps {
  onBookClick: () => void;
}

export default function Hero({ onBookClick }: HeroProps) {
  return (
    <section
      className="relative flex items-center overflow-hidden"
      style={{
        height: "614px",
        backgroundColor: "var(--color-inverse-surface)",
      }}
    >
      {/* Background image */}
      <div className="absolute inset-0 opacity-40">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuB88mOErgVWLYL_zzqvaGmh59IlDFt23cT6lKmllLahycNE3m9L57avpEk3Z2ZN9uWxCDbu3UrWxMO6yDd6-DPLaV737rH6JWxeXrc4fgKnWJfROdBV8Pw0g3Xss-Y1-D9nMjTAYwgqLo03tTZEpFqlsA7Se0FDmziS6OtJYdSAAJsyG8wvcDYNTM-keu-Uju9IRphXZjwSgtzLGmJSuNvLmILIHxWZsI-nuYzsQEY6X7yHEgjVQtq6uMre6ONfRVNkrWaGemKRDUQj"
          alt="Professionell däckförvaring"
          className="w-full h-full object-cover"
        />
      </div>

      <div
        className="relative z-10 w-full mx-auto px-[var(--spacing-margin-desktop)]"
        style={{ maxWidth: "var(--spacing-container-max)" }}
      >
        <div
          className="max-w-2xl p-12 border-l-8"
          style={{
            background: "rgba(249,249,249,0.9)",
            backdropFilter: "blur(4px)",
            borderColor: "var(--color-primary)",
          }}
        >
          <h1
            className="text-5xl font-bold uppercase mb-4 leading-tight tracking-tight"
            style={{
              fontFamily: "var(--font-headline)",
              color: "var(--color-on-surface)",
              letterSpacing: "-0.02em",
            }}
          >
            Däckhotell i Världsklass
          </h1>
          <p
            className="text-lg mb-8 leading-relaxed"
            style={{
              fontFamily: "var(--font-body)",
              color: "var(--color-on-surface-variant)",
            }}
          >
            Sluta släpa på tunga, smutsiga däck. Låt proffsen på Gummigubben ta
            hand om dina hjul under säsongsvilan.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={onBookClick}
              className="px-8 py-4 text-sm uppercase tracking-widest font-semibold hover:shadow-lg transition-all cursor-pointer"
              style={{
                fontFamily: "var(--font-headline)",
                background: "var(--color-primary-container)",
                color: "var(--color-on-primary)",
              }}
            >
              Boka Plats Nu
            </button>
            <button
              className="border-2 px-8 py-4 text-sm uppercase tracking-widest font-semibold transition-all cursor-pointer hover:opacity-80"
              style={{
                fontFamily: "var(--font-headline)",
                borderColor: "var(--color-on-surface)",
                color: "var(--color-on-surface)",
              }}
            >
              Se Prislista
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
