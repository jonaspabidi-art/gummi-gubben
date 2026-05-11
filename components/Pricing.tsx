interface PricingTier {
  name: string;
  price: string;
  features: string[];
  featured?: boolean;
  buttonLabel: string;
}

const tiers: PricingTier[] = [
  {
    name: "Personbil",
    price: "995:-",
    features: [
      "Tvätt av hjul och fälgar",
      "Förvaring i rätt miljö",
      "Konditionskontroll",
      "Skifte på bilen",
    ],
    buttonLabel: "Boka Personbil",
  },
  {
    name: "SUV / Crossover",
    price: "1.295:-",
    features: [
      "Allt i Personbil-paketet",
      "Hantering av stora hjul",
      "Kontroll av TPMS-sensorer",
      "Prioriterad tidbokning",
    ],
    featured: true,
    buttonLabel: "Boka SUV",
  },
  {
    name: "Husbilar / Transport",
    price: "1.495:-",
    features: [
      "Heavy-duty förvaring",
      "Extra noggrann däckkontroll",
      "Lastindex-validering",
      "Skifte & Momentdragning",
    ],
    buttonLabel: "Boka Transport",
  },
];

interface PricingProps {
  onBookClick: () => void;
}

export default function Pricing({ onBookClick }: PricingProps) {
  return (
    <section
      className="py-24 border-y"
      style={{
        background: "var(--color-surface-container-low)",
        borderColor: "var(--color-outline-variant)",
      }}
    >
      <div
        className="mx-auto px-[var(--spacing-margin-desktop)]"
        style={{ maxWidth: "var(--spacing-container-max)" }}
      >
        <div className="text-center mb-16">
          <h2
            className="text-5xl font-bold uppercase mb-4 tracking-tight"
            style={{
              fontFamily: "var(--font-headline)",
              letterSpacing: "-0.02em",
            }}
          >
            Enkla och tydliga priser
          </h2>
          <p
            className="text-lg"
            style={{
              fontFamily: "var(--font-body)",
              color: "var(--color-secondary)",
            }}
          >
            Allt ingår i säsongspriset. Inga dolda avgifter.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[var(--spacing-gutter)] items-center">
          {tiers.map((tier) =>
            tier.featured ? (
              <div
                key={tier.name}
                className="border-2 p-8 flex flex-col relative shadow-2xl scale-105 z-10"
                style={{
                  background: "var(--color-inverse-surface)",
                  color: "var(--color-surface)",
                  borderColor: "var(--color-primary)",
                }}
              >
                <div
                  className="absolute top-0 right-0 px-4 py-1 text-xs font-semibold uppercase text-white"
                  style={{
                    fontFamily: "var(--font-body)",
                    background: "var(--color-primary)",
                  }}
                >
                  Populärast
                </div>
                <h3
                  className="text-2xl font-semibold uppercase mb-2"
                  style={{ fontFamily: "var(--font-headline)" }}
                >
                  {tier.name}
                </h3>
                <div className="flex items-baseline gap-2 mb-8">
                  <span
                    className="text-4xl font-bold"
                    style={{
                      fontFamily: "var(--font-headline)",
                      color: "var(--color-primary)",
                    }}
                  >
                    {tier.price}
                  </span>
                  <span
                    className="text-sm"
                    style={{ color: "var(--color-surface-variant)" }}
                  >
                    / säsong
                  </span>
                </div>
                <ul className="space-y-4 mb-12 flex-grow">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <span
                        className="material-symbols-outlined text-lg leading-none mt-0.5"
                        style={{ color: "var(--color-primary)" }}
                      >
                        check
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={onBookClick}
                  className="w-full py-3 text-sm font-semibold uppercase tracking-wider transition-all hover:brightness-110 cursor-pointer"
                  style={{
                    fontFamily: "var(--font-headline)",
                    background: "var(--color-primary-container)",
                    color: "var(--color-on-primary)",
                  }}
                >
                  {tier.buttonLabel}
                </button>
              </div>
            ) : (
              <div
                key={tier.name}
                className="border-2 p-8 flex flex-col"
                style={{
                  background: "var(--color-surface)",
                  borderColor: "var(--color-outline-variant)",
                }}
              >
                <h3
                  className="text-2xl font-semibold uppercase mb-2"
                  style={{ fontFamily: "var(--font-headline)" }}
                >
                  {tier.name}
                </h3>
                <div className="flex items-baseline gap-2 mb-8">
                  <span
                    className="text-4xl font-bold"
                    style={{
                      fontFamily: "var(--font-headline)",
                      color: "var(--color-on-surface)",
                    }}
                  >
                    {tier.price}
                  </span>
                  <span
                    className="text-sm"
                    style={{ color: "var(--color-secondary)" }}
                  >
                    / säsong
                  </span>
                </div>
                <ul className="space-y-4 mb-12 flex-grow">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <span
                        className="material-symbols-outlined text-lg leading-none mt-0.5"
                        style={{ color: "var(--color-primary)" }}
                      >
                        check
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={onBookClick}
                  className="w-full border-2 py-3 text-sm font-semibold uppercase tracking-wider transition-all hover:opacity-80 cursor-pointer"
                  style={{
                    fontFamily: "var(--font-headline)",
                    borderColor: "var(--color-on-surface)",
                    color: "var(--color-on-surface)",
                  }}
                >
                  {tier.buttonLabel}
                </button>
              </div>
            )
          )}
        </div>

        <p
          className="mt-12 text-center text-sm italic"
          style={{
            fontFamily: "var(--font-body)",
            color: "var(--color-secondary-fixed-dim)",
          }}
        >
          * Priserna avser en säsong (vinter eller sommar). Alla priser är
          inklusive moms.
        </p>
      </div>
    </section>
  );
}
