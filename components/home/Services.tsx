import Link from "next/link";

const subServices = [
  {
    icon: "balance",
    title: "Hjulbalansering",
    desc: "Eliminera vibrationer och förläng livslängden på dina däck med vår precisionsbalansering.",
  },
  {
    icon: "sensors",
    title: "TPMS-Service",
    desc: "Vi programmerar och servar dina däcktryckssensorer för maximal säkerhet.",
  },
  {
    icon: "settings_input_component",
    title: "Fälgar",
    desc: "Ett brett urval av högkvalitativa fälgar som ger din bil det där lilla extra.",
  },
];

export default function Services() {
  return (
    <section
      id="tjanster"
      className="py-16 md:py-24 px-4 md:px-[var(--spacing-margin-desktop)] max-w-[var(--spacing-container-max)] mx-auto"
    >
      {/* Section header */}
      <div className="text-center mb-12 md:mb-16">
        <h2
          className="text-4xl md:text-5xl font-bold uppercase"
          style={{
            fontFamily: "var(--font-headline)",
            color: "var(--color-on-surface)",
            letterSpacing: "-0.02em",
          }}
        >
          Våra Tjänster
        </h2>
        <div
          className="w-24 h-1.5 mx-auto mt-4"
          style={{ background: "var(--color-primary)" }}
        />
      </div>

      {/* Bento grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-[var(--spacing-gutter)]">
        {/* Main service – full width on mobile, 8 cols on desktop */}
        <div
          className="md:col-span-8 group relative overflow-hidden border"
          style={{
            height: "clamp(260px, 45vw, 400px)",
            borderColor: "var(--color-surface-container)",
          }}
        >
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGne4OEqcZ51BLeTzWu-WkA8ivbIYW58qERgwYhxHpyr3P6rJFDPt_2mFFUBawACaQeEFns_0FJcFAjkwtQBeU1eBP3apzik3mpiwTZuknX_mp99CX5c80_ZXiqES08E6z1UNVjMZOsfzMxHgqJTus-zADEzg_3UN774p02lS2CUk6zqhgXdN8XI_6J77EP9m1ZSOQSuJe7VLOuWDFwnXn9k2hkD0qJlvQPY_h48Ds4jsjWSgf7nZ0wQq4CRc8ocSsokVQe3GMnGia"
            alt="Däckskifte och service"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 md:p-8 flex flex-col justify-end">
            <h3
              className="text-2xl md:text-3xl font-semibold text-white uppercase mb-2"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              Däckskifte &amp; Service
            </h3>
            <p
              className="text-sm md:text-base text-[var(--color-surface-container-highest)] max-w-md leading-relaxed"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Snabba och säkra däckbyten med den senaste utrustningen. Vi ser
              till att du rullar tryggt på vägarna.
            </p>
          </div>
        </div>

        {/* Däckhotell – red card */}
        <div
          className="md:col-span-4 p-6 md:p-8 flex flex-col justify-between border-b-8 text-white"
          style={{
            background: "var(--color-primary)",
            borderColor: "var(--color-on-primary-fixed)",
          }}
        >
          <div>
            <span
              className="material-symbols-outlined text-5xl mb-4 block"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              hotel
            </span>
            <h3
              className="text-2xl md:text-3xl font-semibold uppercase mb-4"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              Däckhotell
            </h3>
            <p
              className="text-sm md:text-base opacity-90 leading-relaxed"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Låt oss ta hand om dina däck. Vi tvättar, kontrollerar och
              förvarar dem under optimala förhållanden till nästa säsong.
            </p>
          </div>
          <Link
            href="/dackhotell"
            className="mt-8 inline-block border-2 border-white text-center text-sm font-semibold uppercase py-2 px-4 hover:bg-white hover:text-[var(--color-primary)] transition-all"
            style={{ fontFamily: "var(--font-headline)" }}
          >
            Läs Mer
          </Link>
        </div>

        {/* Three sub-service cards */}
        {subServices.map((s) => (
          <div
            key={s.title}
            className="md:col-span-4 border p-6 md:p-8 hover:bg-[var(--color-surface-container-low)] transition-colors"
            style={{
              background: "var(--color-surface-container-lowest)",
              borderColor: "var(--color-surface-container)",
            }}
          >
            <span
              className="material-symbols-outlined text-4xl mb-4 block"
              style={{ color: "var(--color-primary)" }}
            >
              {s.icon}
            </span>
            <h3
              className="text-xl font-semibold uppercase mb-2"
              style={{
                fontFamily: "var(--font-headline)",
                color: "var(--color-on-surface)",
              }}
            >
              {s.title}
            </h3>
            <p
              className="text-sm leading-relaxed"
              style={{
                fontFamily: "var(--font-body)",
                color: "var(--color-secondary)",
              }}
            >
              {s.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
