import Link from "next/link";

export default function Offers() {
  return (
    <section
      className="py-16 md:py-24"
      style={{ background: "var(--color-surface-container-low)" }}
    >
      <div className="px-4 md:px-[var(--spacing-margin-desktop)] max-w-[var(--spacing-container-max)] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-12 gap-4">
          <div>
            <h2
              className="text-4xl md:text-5xl font-bold uppercase"
              style={{
                fontFamily: "var(--font-headline)",
                color: "var(--color-on-surface)",
                letterSpacing: "-0.02em",
              }}
            >
              Aktuella Erbjudanden
            </h2>
            <p
              className="text-base md:text-lg mt-2"
              style={{
                fontFamily: "var(--font-body)",
                color: "var(--color-secondary)",
              }}
            >
              Gör ett klipp hos Gummigubben
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--spacing-gutter)]">
          {/* Promo 1 – Däckhotell */}
          <div
            className="border-2 overflow-hidden flex flex-col sm:flex-row shadow-lg"
            style={{
              background: "var(--color-surface-container-lowest)",
              borderColor: "var(--color-primary)",
            }}
          >
            <div
              className="sm:w-1/2 p-8 flex flex-col justify-center items-center text-center text-white"
              style={{ background: "var(--color-primary)" }}
            >
              <h3
                className="text-2xl font-semibold uppercase leading-tight"
                style={{ fontFamily: "var(--font-headline)" }}
              >
                Säsongens
                <br />
                Däckhotell
              </h3>
              <div className="my-5">
                <span
                  className="text-sm font-semibold uppercase block mb-1"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Från
                </span>
                <div
                  className="text-6xl font-bold"
                  style={{ fontFamily: "var(--font-headline)" }}
                >
                  995:-
                </div>
              </div>
              <span
                className="text-xs font-semibold uppercase tracking-widest px-4 py-1"
                style={{
                  background: "white",
                  color: "var(--color-primary)",
                  fontFamily: "var(--font-body)",
                }}
              >
                Bästa Pris
              </span>
            </div>
            <div className="sm:w-1/2 p-6 md:p-8 flex flex-col justify-center">
              <p
                className="text-base mb-4 leading-relaxed"
                style={{
                  fontFamily: "var(--font-body)",
                  color: "var(--color-on-surface)",
                }}
              >
                Inklusive tvätt, kontroll av mönsterdjup och korrekt lufttryck.
              </p>
              <Link
                href="/boka?service=dackhotell"
                className="w-full text-white text-sm font-semibold uppercase py-3 text-center hover:bg-[var(--color-primary)] transition-colors"
                style={{
                  fontFamily: "var(--font-headline)",
                  background: "var(--color-inverse-surface)",
                  display: "block",
                }}
              >
                Boka nu
              </Link>
            </div>
          </div>

          {/* Promo 2 – Sommardäck */}
          <div
            className="border overflow-hidden flex flex-col sm:flex-row"
            style={{
              background: "var(--color-surface-container-lowest)",
              borderColor: "var(--color-surface-container)",
            }}
          >
            <div
              className="sm:w-1/2 p-8 flex flex-col justify-center items-center text-center border-b sm:border-b-0 sm:border-r"
              style={{ borderColor: "var(--color-surface-container)" }}
            >
              <span
                className="material-symbols-outlined text-6xl mb-2"
                style={{ color: "var(--color-primary)" }}
              >
                brightness_7
              </span>
              <h3
                className="text-2xl font-semibold uppercase leading-tight"
                style={{
                  fontFamily: "var(--font-headline)",
                  color: "var(--color-on-surface)",
                }}
              >
                Sommardäck
                <br />
                Special
              </h3>
              <div className="my-5">
                <span
                  className="text-sm font-semibold uppercase block mb-1"
                  style={{
                    fontFamily: "var(--font-body)",
                    color: "var(--color-secondary)",
                  }}
                >
                  Spara upp till
                </span>
                <div
                  className="text-6xl font-bold"
                  style={{
                    fontFamily: "var(--font-headline)",
                    color: "var(--color-primary)",
                  }}
                >
                  20%
                </div>
              </div>
            </div>
            <div className="sm:w-1/2 p-6 md:p-8 flex flex-col justify-center">
              <p
                className="text-base mb-4 leading-relaxed"
                style={{
                  fontFamily: "var(--font-body)",
                  color: "var(--color-secondary)",
                }}
              >
                Gäller utvalda märken som Continental och Michelin vid köp av
                komplett set.
              </p>
              <Link
                href="/boka?service=dackservice"
                className="w-full text-white text-sm font-semibold uppercase py-3 text-center hover:bg-[var(--color-primary)] transition-colors"
                style={{
                  fontFamily: "var(--font-headline)",
                  background: "var(--color-secondary)",
                  display: "block",
                }}
              >
                Visa däck
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
