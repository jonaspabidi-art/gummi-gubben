const hours = [
  { day: "Måndag – Torsdag", time: "07:00 – 17:00" },
  { day: "Fredag", time: "07:00 – 16:00" },
  { day: "Lördag", time: "10:00 – 14:00" },
  { day: "Söndag", time: null },
];

const closedDays = [
  "3-6/4 2026 – Påsk",
  "1/5 2026 – 1:a Maj",
  "14/5 2026 – Kr. Himmelf.",
  "6/6 2026 – Nationaldagen",
];

export default function Info() {
  return (
    <section
      id="kontakt"
      className="py-16 md:py-24 px-4 md:px-[var(--spacing-margin-desktop)] max-w-[var(--spacing-container-max)] mx-auto"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
        {/* Map + contact */}
        <div>
          <h2
            className="text-4xl md:text-5xl font-bold uppercase mb-8"
            style={{
              fontFamily: "var(--font-headline)",
              color: "var(--color-on-surface)",
              letterSpacing: "-0.02em",
            }}
          >
            Hitta till oss
          </h2>

          {/* Map */}
          <div
            className="h-[260px] md:h-[350px] w-full border overflow-hidden relative"
            style={{ borderColor: "var(--color-surface-container)" }}
          >
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{ background: "var(--color-surface-container-high)" }}
            >
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4frV-ZDwqkKoNWrM7g9JM-2pIOr9K6kA_jXH_HmAPZKvQAN37ZitgSNQ6EyoMSaSeDJOTncEYw9n616aupXR9nbeR3GoSiuN-TAfJiuAUB87bEhrqF8NHx4lWWc1SJnYM3bjuzcGKBc4ChBzCgqa-Mxl0w73GmUm4LHsLYRR7d9KjO35dZV4sd2V2Zs94YXx0iwQbdKRaLIa1KCbLgafG3vLXqNLNRCag32CrGXfBBblUBHglvOz2JAVa69MbaBXP8tdpmKuGn_o6"
                alt="Karta"
                className="w-full h-full object-cover opacity-50"
              />
              <div
                className="absolute z-10 p-4 shadow-xl border-t-4"
                style={{
                  background: "white",
                  borderColor: "var(--color-primary)",
                }}
              >
                <p
                  className="text-base font-semibold uppercase"
                  style={{
                    fontFamily: "var(--font-headline)",
                    color: "var(--color-on-surface)",
                  }}
                >
                  Gummigubben Tire Service
                </p>
                <p
                  className="text-sm mt-1"
                  style={{
                    fontFamily: "var(--font-body)",
                    color: "var(--color-secondary)",
                  }}
                >
                  Deltavägen 11B, 417 30 Göteborg
                </p>
                <a
                  href="https://maps.google.com/?q=Deltav%C3%A4gen+11B+Gothenburg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold uppercase mt-2 block hover:underline"
                  style={{
                    fontFamily: "var(--font-body)",
                    color: "var(--color-primary)",
                  }}
                >
                  Öppna i Google Maps
                </a>
              </div>
            </div>
          </div>

          {/* Contact details */}
          <div className="mt-6 flex flex-col sm:flex-row gap-6 sm:gap-8">
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-wider mb-1"
                style={{
                  fontFamily: "var(--font-body)",
                  color: "var(--color-secondary)",
                }}
              >
                Telefon
              </p>
              <a
                href="tel:031-517764"
                className="text-xl font-semibold uppercase hover:text-[var(--color-primary)] transition-colors"
                style={{
                  fontFamily: "var(--font-headline)",
                  color: "var(--color-on-surface)",
                }}
              >
                031-51 77 64
              </a>
            </div>
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-wider mb-1"
                style={{
                  fontFamily: "var(--font-body)",
                  color: "var(--color-secondary)",
                }}
              >
                E-post
              </p>
              <a
                href="mailto:info@gummigubben.se"
                className="text-xl font-semibold uppercase hover:text-[var(--color-primary)] transition-colors break-all"
                style={{
                  fontFamily: "var(--font-headline)",
                  color: "var(--color-on-surface)",
                }}
              >
                info@gummigubben.se
              </a>
            </div>
          </div>
        </div>

        {/* Opening hours */}
        <div
          className="p-8 md:p-12 border-l-8 text-white"
          style={{
            background: "var(--color-inverse-surface)",
            borderColor: "var(--color-primary)",
          }}
        >
          <h2
            className="text-4xl md:text-5xl font-bold uppercase mb-8"
            style={{
              fontFamily: "var(--font-headline)",
              letterSpacing: "-0.02em",
            }}
          >
            Öppettider
          </h2>

          <div
            className="space-y-4 border-b pb-8 mb-8"
            style={{ borderColor: "rgba(255,255,255,0.1)" }}
          >
            {hours.map(({ day, time }) => (
              <div key={day} className="flex justify-between items-center">
                <span
                  className="text-base md:text-xl font-semibold uppercase"
                  style={{ fontFamily: "var(--font-headline)" }}
                >
                  {day}
                </span>
                {time ? (
                  <span
                    className="text-base md:text-xl font-semibold uppercase"
                    style={{
                      fontFamily: "var(--font-headline)",
                      color: "var(--color-primary-fixed-dim)",
                    }}
                  >
                    {time}
                  </span>
                ) : (
                  <span
                    className="text-base md:text-xl font-semibold uppercase opacity-50"
                    style={{ fontFamily: "var(--font-headline)" }}
                  >
                    Stängt
                  </span>
                )}
              </div>
            ))}
          </div>

          <div
            className="p-4 border mb-8"
            style={{
              background: "rgba(158,0,31,0.2)",
              borderColor: "rgba(158,0,31,0.3)",
            }}
          >
            <p
              className="text-xs font-semibold uppercase tracking-wider mb-1"
              style={{
                fontFamily: "var(--font-body)",
                color: "var(--color-primary-fixed-dim)",
              }}
            >
              Verkstaden Lunch
            </p>
            <p
              className="text-sm"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Verkstaden har lunchstängt vardagar 12:00 – 13:00
            </p>
          </div>

          <div>
            <h3
              className="text-xs font-semibold uppercase tracking-wider mb-4"
              style={{
                fontFamily: "var(--font-body)",
                color: "var(--color-secondary-fixed)",
              }}
            >
              Kommande stängda dagar
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm opacity-70">
              {closedDays.map((d) => (
                <li key={d} style={{ fontFamily: "var(--font-body)" }}>
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
