import { BookingState } from "./types";

const MONTH_NAMES = [
  "Jan","Feb","Mar","Apr","Maj","Jun",
  "Jul","Aug","Sep","Okt","Nov","Dec",
];

interface BookingSummaryProps {
  state: BookingState;
  onGoToStep: (step: 1 | 2 | 3) => void;
  onConfirm: () => void;
  confirming: boolean;
}

export default function BookingSummary({
  state,
  onGoToStep,
  onConfirm,
  confirming,
}: BookingSummaryProps) {
  const { service, vehicle, date, time } = state;

  const formattedDate = date
    ? `${date.getDate()} ${MONTH_NAMES[date.getMonth()]}, ${time ?? ""}`
    : null;

  const canConfirm = !!service && !!vehicle && !!date && !!time;

  return (
    <aside className="lg:col-span-4">
      <div
        className="sticky top-28 border-t-4 p-6 md:p-8 space-y-6"
        style={{
          background: "var(--color-surface-container)",
          borderColor: "var(--color-primary)",
        }}
      >
        <h3
          className="text-2xl font-semibold uppercase border-b pb-4"
          style={{
            fontFamily: "var(--font-headline)",
            color: "var(--color-on-surface)",
            borderColor: "var(--color-surface-container-highest)",
          }}
        >
          Sammanfattning
        </h3>

        <div className="space-y-5">
          {/* Service */}
          <div className="flex justify-between items-start">
            <div>
              <span
                className="block text-xs font-semibold uppercase tracking-wider mb-1"
                style={{
                  fontFamily: "var(--font-body)",
                  color: "var(--color-secondary)",
                }}
              >
                Vald tjänst
              </span>
              <span
                className="text-lg font-semibold uppercase"
                style={{
                  fontFamily: "var(--font-headline)",
                  color: service
                    ? "var(--color-on-surface)"
                    : "var(--color-surface-container-highest)",
                }}
              >
                {service?.title ?? "—"}
              </span>
            </div>
            {service && (
              <button
                onClick={() => onGoToStep(1)}
                className="material-symbols-outlined text-xl cursor-pointer hover:opacity-70"
                style={{ color: "var(--color-primary)" }}
              >
                edit
              </button>
            )}
          </div>

          {/* Vehicle */}
          <div className="flex justify-between items-start">
            <div>
              <span
                className="block text-xs font-semibold uppercase tracking-wider mb-1"
                style={{
                  fontFamily: "var(--font-body)",
                  color: "var(--color-secondary)",
                }}
              >
                Fordon
              </span>
              <span
                className="text-lg font-semibold uppercase"
                style={{
                  fontFamily: "var(--font-headline)",
                  color: vehicle
                    ? "var(--color-on-surface)"
                    : "var(--color-surface-container-highest)",
                }}
              >
                {vehicle?.regNumber ?? "—"}
              </span>
              {vehicle && (
                <span
                  className="block text-sm mt-0.5"
                  style={{
                    fontFamily: "var(--font-body)",
                    color: "var(--color-secondary)",
                  }}
                >
                  {vehicle.model} · {vehicle.year}
                </span>
              )}
            </div>
            {vehicle && (
              <button
                onClick={() => onGoToStep(2)}
                className="material-symbols-outlined text-xl cursor-pointer hover:opacity-70"
                style={{ color: "var(--color-primary)" }}
              >
                edit
              </button>
            )}
          </div>

          {/* Date & Time */}
          <div className="flex justify-between items-start">
            <div>
              <span
                className="block text-xs font-semibold uppercase tracking-wider mb-1"
                style={{
                  fontFamily: "var(--font-body)",
                  color: "var(--color-secondary)",
                }}
              >
                Datum &amp; Tid
              </span>
              <span
                className="text-lg font-semibold uppercase"
                style={{
                  fontFamily: "var(--font-headline)",
                  color: formattedDate
                    ? "var(--color-on-surface)"
                    : "var(--color-surface-container-highest)",
                }}
              >
                {formattedDate ?? "—"}
              </span>
            </div>
            {formattedDate && (
              <button
                onClick={() => onGoToStep(3)}
                className="material-symbols-outlined text-xl cursor-pointer hover:opacity-70"
                style={{ color: "var(--color-primary)" }}
              >
                edit
              </button>
            )}
          </div>
        </div>

        {/* Total + CTA */}
        <div
          className="pt-5 border-t space-y-4"
          style={{ borderColor: "var(--color-surface-container-highest)" }}
        >
          <div className="flex justify-between items-center">
            <span
              className="text-lg font-semibold uppercase"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              Totalt
            </span>
            <span
              className="text-2xl font-bold"
              style={{
                fontFamily: "var(--font-headline)",
                color: "var(--color-on-surface)",
              }}
            >
              {service ? service.price : "—"}
            </span>
          </div>

          <button
            onClick={onConfirm}
            disabled={!canConfirm || confirming}
            className="w-full py-4 text-base font-bold uppercase tracking-wider transition-all hover:shadow-lg active:translate-y-0.5 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
            style={{
              fontFamily: "var(--font-headline)",
              background: "var(--color-primary-container)",
              color: "var(--color-on-primary)",
            }}
          >
            {confirming ? "Bokar..." : "Bekräfta Bokning"}
          </button>

          <p
            className="text-center text-sm"
            style={{
              fontFamily: "var(--font-body)",
              color: "var(--color-secondary)",
            }}
          >
            Ingen förbetalning krävs. Betala på plats i verkstaden.
          </p>
        </div>

        {/* Workshop image */}
        <div className="relative h-40 overflow-hidden border">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC54WIlPrjnZyJum7nC_BueT2h5ohRbjZiO5nbt5HVfW_h135heV10NbkuD2VAtYqIbn8zKB1l027VS7g5KrRkGK6gIpbncZ6iQrE-9DtV7uMFzcOAadbQ0Eh1vqGOE81kJxFb9uL6NWfWItH4K8yjqCceooI4P6E7Ni0S17xO-Ymyi4rT10O0GNABm3MAhm6y-Bx2Mq3HK5019nhtDD7Lq1mqpOEwqB0eYbjyWtOYeNFhEUKpNW7fy0vCH7tI2zJ2aF8as90L-rCvL"
            alt="Verkstad"
            className="w-full h-full object-cover"
            style={{ borderColor: "var(--color-surface-container-highest)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
            <span
              className="text-white text-sm font-semibold uppercase"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              Deltavägen 11B, Göteborg
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
}
