interface HomeHeroProps {
  onBookClick: () => void;
}

export default function HomeHero({ onBookClick }: HomeHeroProps) {
  return (
    <section className="relative min-h-[500px] md:min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMctxfdm60rU6en6vMfsWY_AVvgBMS381km5x6CGSZkvnahiMVZpChYjDap6N-EWwaHvTCR88oBC87OAnHyYRXgjwEJuDap_W6Ti4WIXpFMQLgtMN06McQNt6FgyEuJhmD2oRpUZFhtzKttHdxMa6vUJKPjGc9uPFpF0uwwmZf0s1NtMIEZb77l4gDiJIuGnPvYj63kx2TiJbHYtkDmhRbfZ-C9Y1m-C-sJd7UstmJvtk_YBKqzhC3TgkXdo6n3PzrHCFlyk0MEnbJ"
          alt="Däck"
          className="w-full h-full object-cover grayscale brightness-50"
        />
      </div>

      <div className="relative z-10 text-center px-4 md:px-[var(--spacing-margin-mobile)] w-full max-w-3xl mx-auto">
        <h1
          className="text-4xl md:text-6xl font-bold text-white mb-6 md:mb-8 tracking-wide drop-shadow-lg uppercase"
          style={{ fontFamily: "var(--font-headline)", letterSpacing: "-0.01em" }}
        >
          Välkommen till Gummigubben!
        </h1>

        <div
          className="p-6 md:p-8 border-t-4 mx-auto"
          style={{
            background: "rgba(0,0,0,0.80)",
            backdropFilter: "blur(4px)",
            borderColor: "var(--color-primary)",
          }}
        >
          <p
            className="text-base md:text-lg text-white mb-6 leading-relaxed"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Vi är din expert på däck och fälg i Göteborg. Professionell service
            med personlig touch sedan 1994.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={onBookClick}
              className="w-full sm:w-auto px-8 md:px-12 py-4 text-sm md:text-base font-bold uppercase tracking-wider hover:brightness-125 transition-all cursor-pointer"
              style={{
                fontFamily: "var(--font-headline)",
                background: "var(--color-primary-container)",
                color: "var(--color-on-primary)",
              }}
            >
              Boka Din Tid Nu
            </button>
            <a
              href="mailto:info@gummigubben.se"
              className="flex items-center gap-2 text-white hover:text-[var(--color-primary-fixed-dim)] transition-colors text-sm font-semibold"
              style={{ fontFamily: "var(--font-body)" }}
            >
              <span className="material-symbols-outlined text-lg">mail</span>
              info@gummigubben.se
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
