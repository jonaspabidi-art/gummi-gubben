export default function ValueProps() {
  return (
    <section
      className="py-24 px-[var(--spacing-margin-desktop)] mx-auto w-full"
      style={{ maxWidth: "var(--spacing-container-max)" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-[var(--spacing-gutter)]">
        {/* Main card */}
        <div
          className="md:col-span-8 p-12 border flex flex-col justify-between"
          style={{
            background: "var(--color-surface-container)",
            borderColor: "var(--color-outline-variant)",
          }}
        >
          <div>
            <h2
              className="text-3xl font-semibold uppercase mb-6"
              style={{
                fontFamily: "var(--font-headline)",
                color: "var(--color-primary)",
              }}
            >
              Varför välja vårt däckhotell?
            </h2>
            <p
              className="text-lg mb-12 leading-relaxed"
              style={{
                fontFamily: "var(--font-body)",
                color: "var(--color-on-surface-variant)",
              }}
            >
              Vi erbjuder mer än bara förvaring. Dina däck behandlas med samma
              omsorg som en premiumbil. Genom att förvara hos oss förlänger du
              livslängden på dina däck och säkerställer optimal prestanda vid
              varje säsongsbyte.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <span
                className="material-symbols-outlined text-4xl flex-shrink-0"
                style={{ color: "var(--color-primary)" }}
              >
                cleaning_services
              </span>
              <div>
                <h3
                  className="text-xl font-semibold uppercase mb-1"
                  style={{ fontFamily: "var(--font-headline)" }}
                >
                  Professionell Tvätt
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    fontFamily: "var(--font-body)",
                    color: "var(--color-secondary)",
                  }}
                >
                  Vi tar bort vägsalt, bromsdamm och smuts som annars kan fräta
                  på fälgarna.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <span
                className="material-symbols-outlined text-4xl flex-shrink-0"
                style={{ color: "var(--color-primary)" }}
              >
                verified_user
              </span>
              <div>
                <h3
                  className="text-xl font-semibold uppercase mb-1"
                  style={{ fontFamily: "var(--font-headline)" }}
                >
                  Full Försäkring
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    fontFamily: "var(--font-body)",
                    color: "var(--color-secondary)",
                  }}
                >
                  Dina däck är fullt försäkrade mot stöld och brand under hela
                  förvaringstiden.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Safety check card */}
        <div
          className="md:col-span-4 p-12 border relative overflow-hidden"
          style={{
            background: "var(--color-inverse-surface)",
            borderColor: "var(--color-primary)",
            color: "var(--color-surface)",
          }}
        >
          <div className="tire-pattern-overlay absolute inset-0" />
          <div className="relative z-10">
            <span
              className="material-symbols-outlined text-6xl mb-6 block"
              style={{ color: "var(--color-primary)" }}
            >
              health_metrics
            </span>
            <h3
              className="text-2xl font-semibold uppercase mb-4"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              Säkerhetskontroll
            </h3>
            <p
              className="text-base mb-6 leading-relaxed"
              style={{
                fontFamily: "var(--font-body)",
                color: "var(--color-surface-variant)",
              }}
            >
              Vi mönsterdjupstestar och kontrollerar däckens kondition. Om de
              behöver bytas meddelar vi dig i god tid före nästa säsong.
            </p>
            <ul className="space-y-3">
              {[
                "Mönsterdjupsmätning",
                "Lufttryckskontroll",
                "Slitageanalys",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm">
                  <span
                    className="material-symbols-outlined text-lg"
                    style={{ color: "var(--color-primary)" }}
                  >
                    check_circle
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Full-width workshop image */}
        <div className="md:col-span-12 h-[400px] relative">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8i85hi7dEvcic3onR6J90viS-8jw50YJmeE0uf8trapHDprndYKDNW79heEIWdaFWUBWr0XYX3kWRV3WpZbcmcuHCoIsZkXa-yTLdPdRM797v6Mjql8nFU9p8GXPzl-aoVeuC8Erp6rQufK1IpZzhMHl_ILIHx-SgzmqJa4diJNVIsrIgfAs0BwuU31IwoBqBtCmqPc5l7vU5UlB6Gbi9U1f2Rf-t7arAmnlYyNVYNFBVabifiGqy2nNYh04-sw-AmoKh9xeHbB0G"
            alt="Verkstad"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-12">
            <p
              className="text-white text-2xl font-semibold uppercase max-w-xl"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              Optimala förhållanden: Mörkt, svalt och torrt för maximal
              hållbarhet.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
