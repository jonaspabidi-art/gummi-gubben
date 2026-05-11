import { Service, SERVICES } from "./types";

interface ServiceStepProps {
  selected: Service | null;
  onSelect: (s: Service) => void;
  onNext: () => void;
}

export default function ServiceStep({ selected, onSelect, onNext }: ServiceStepProps) {
  return (
    <section>
      <h2
        className="text-2xl md:text-3xl font-semibold uppercase border-l-4 pl-4 mb-8"
        style={{
          fontFamily: "var(--font-headline)",
          borderColor: "var(--color-primary)",
          color: "var(--color-on-surface)",
        }}
      >
        Välj tjänst
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
        {SERVICES.map((s) => {
          const isSelected = selected?.id === s.id;
          return (
            <button
              key={s.id}
              onClick={() => onSelect(s)}
              className="group text-left border-2 p-5 md:p-6 hover:shadow-lg transition-all relative cursor-pointer"
              style={{
                background: "var(--color-surface-container-lowest)",
                borderColor: isSelected
                  ? "var(--color-primary)"
                  : "var(--color-surface-container-highest)",
              }}
            >
              {isSelected && (
                <span
                  className="absolute top-3 right-3 material-symbols-outlined text-xl"
                  style={{
                    color: "var(--color-primary)",
                    fontVariationSettings: "'FILL' 1",
                  }}
                >
                  check_circle
                </span>
              )}
              <span
                className="material-symbols-outlined text-4xl mb-4 block transition-colors"
                style={{
                  color: isSelected
                    ? "var(--color-primary)"
                    : "var(--color-secondary)",
                }}
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
                className="text-sm mb-4 leading-relaxed"
                style={{
                  fontFamily: "var(--font-body)",
                  color: "var(--color-secondary)",
                }}
              >
                {s.description}
              </p>
              <span
                className="text-base font-bold"
                style={{
                  fontFamily: "var(--font-headline)",
                  color: "var(--color-on-surface)",
                }}
              >
                {s.price}
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-8 flex justify-end">
        <button
          onClick={onNext}
          disabled={!selected}
          className="px-8 py-3 text-sm font-semibold uppercase tracking-wider transition-all disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer hover:brightness-110"
          style={{
            fontFamily: "var(--font-headline)",
            background: "var(--color-primary-container)",
            color: "var(--color-on-primary)",
          }}
        >
          Nästa: Fordon →
        </button>
      </div>
    </section>
  );
}
