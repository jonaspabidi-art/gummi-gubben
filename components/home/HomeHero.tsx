import Link from "next/link";
import Image from "next/image";

export default function HomeHero() {
  return (
    <section className="relative h-[90vh] min-h-[560px] max-h-[900px] flex items-end overflow-hidden">
      {/* Background image */}
      <Image
        src="/hero.png"
        alt="Gummigubbens däcklager"
        fill
        priority
        className="object-cover"
        style={{ objectPosition: "center center" }}
      />

      {/* Gradient overlay — fades in from bottom-left */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.35) 55%, rgba(0,0,0,0.05) 100%)",
        }}
      />

      {/* Content — pinned to bottom left */}
      <div className="relative z-10 w-full max-w-[var(--spacing-container-max)] mx-auto px-4 md:px-[var(--spacing-margin-desktop)] pb-12 md:pb-20">
        <p
          className="text-xs font-semibold uppercase tracking-[0.15em] md:tracking-[0.2em] mb-3 md:mb-4"
          style={{ fontFamily: "var(--font-body)", color: "var(--color-primary-fixed-dim)" }}
        >
          Däck &amp; Fälg — Göteborg sedan 1994
        </p>

        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase text-white mb-6 md:mb-8 leading-none"
          style={{ fontFamily: "var(--font-headline)", letterSpacing: "-0.02em" }}
        >
          Din däckexpert
          <br />i Göteborg
        </h1>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
          <Link
            href="/boka"
            className="px-8 py-4 text-sm font-bold uppercase tracking-wider transition-all hover:brightness-110 active:scale-95 text-center"
            style={{
              fontFamily: "var(--font-headline)",
              background: "var(--color-primary)",
              color: "var(--color-on-primary)",
            }}
          >
            Boka tid
          </Link>
          <a
            href="tel:031517764"
            className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-white hover:text-[var(--color-primary-fixed-dim)] transition-colors"
            style={{ fontFamily: "var(--font-body)" }}
          >
            <span className="material-symbols-outlined text-base">call</span>
            031-51 77 64
          </a>
        </div>
      </div>
    </section>
  );
}
