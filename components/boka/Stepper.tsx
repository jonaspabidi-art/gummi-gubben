interface StepperProps {
  currentStep: 1 | 2 | 3;
}

const steps = [
  { num: 1, label: "Tjänst" },
  { num: 2, label: "Fordon" },
  { num: 3, label: "Tid" },
];

export default function Stepper({ currentStep }: StepperProps) {
  return (
    <div className="flex items-center mb-10 md:mb-12 gap-3 md:gap-4">
      {steps.map((step, i) => {
        const done = currentStep > step.num;
        const active = currentStep === step.num;
        return (
          <div key={step.num} className="flex items-center gap-3 md:gap-4">
            <div className="flex items-center gap-2">
              <span
                className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center font-bold text-sm transition-all"
                style={{
                  fontFamily: "var(--font-headline)",
                  background: done || active
                    ? "var(--color-primary-container)"
                    : "transparent",
                  color: done || active
                    ? "var(--color-on-primary)"
                    : "var(--color-outline)",
                  border: done || active
                    ? "none"
                    : "2px solid var(--color-outline)",
                }}
              >
                {done ? (
                  <span className="material-symbols-outlined text-base">check</span>
                ) : (
                  step.num
                )}
              </span>
              <span
                className="hidden md:block text-sm font-semibold uppercase tracking-wider"
                style={{
                  fontFamily: "var(--font-headline)",
                  color: active
                    ? "var(--color-primary)"
                    : done
                    ? "var(--color-on-surface)"
                    : "var(--color-secondary)",
                }}
              >
                {step.label}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div
                className="h-0.5 w-8 md:w-12 transition-all"
                style={{
                  background: currentStep > step.num
                    ? "var(--color-primary)"
                    : "var(--color-surface-container-highest)",
                }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
