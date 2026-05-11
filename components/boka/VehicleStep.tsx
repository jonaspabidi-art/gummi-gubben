"use client";

import { useState } from "react";
import { Vehicle } from "./types";

// Mock vehicle lookup — replace with real Transportstyrelsen API if available
const MOCK_VEHICLES: Record<string, Omit<Vehicle, "regNumber">> = {
  "ABC123": { model: "Volvo XC60", year: "2022" },
  "DEF456": { model: "Volkswagen Golf", year: "2020" },
  "GHI789": { model: "Toyota Yaris", year: "2019" },
};

interface VehicleStepProps {
  vehicle: Vehicle | null;
  onConfirm: (v: Vehicle) => void;
  onBack: () => void;
  onNext: () => void;
}

export default function VehicleStep({ vehicle, onConfirm, onBack, onNext }: VehicleStepProps) {
  const [reg, setReg] = useState(vehicle?.regNumber ?? "");
  const [result, setResult] = useState<Vehicle | null>(vehicle);
  const [status, setStatus] = useState<"idle" | "loading" | "found" | "not_found">(
    vehicle ? "found" : "idle"
  );

  function handleLookup() {
    const key = reg.replace(/\s/g, "").toUpperCase();
    setStatus("loading");
    setTimeout(() => {
      const found = MOCK_VEHICLES[key];
      if (found) {
        const v: Vehicle = { regNumber: key, ...found };
        setResult(v);
        onConfirm(v);
        setStatus("found");
      } else {
        // Accept any reg as manual entry
        const v: Vehicle = { regNumber: key, model: "Okänt fordon", year: "-" };
        setResult(v);
        onConfirm(v);
        setStatus("found");
      }
    }, 600);
  }

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
        Fordonsspecifikation
      </h2>

      <div
        className="p-6 md:p-8"
        style={{ background: "var(--color-surface-container)" }}
      >
        <div className="max-w-md">
          <label
            className="block text-base font-semibold uppercase mb-2"
            style={{
              fontFamily: "var(--font-headline)",
              color: "var(--color-on-surface)",
            }}
          >
            Registreringsnummer
          </label>
          <div className="flex gap-2">
            <input
              value={reg}
              onChange={(e) => {
                setReg(e.target.value.toUpperCase());
                setStatus("idle");
              }}
              onKeyDown={(e) => e.key === "Enter" && handleLookup()}
              placeholder="ABC 123"
              maxLength={7}
              className="w-full px-4 py-3 text-base font-bold uppercase focus:outline-none transition-colors"
              style={{
                fontFamily: "var(--font-headline)",
                background: "var(--color-surface-container-lowest)",
                border: "2px solid var(--color-inverse-surface)",
                color: "var(--color-on-surface)",
              }}
              onFocus={(e) =>
                (e.currentTarget.style.borderColor = "var(--color-primary)")
              }
              onBlur={(e) =>
                (e.currentTarget.style.borderColor = "var(--color-inverse-surface)")
              }
            />
            <button
              onClick={handleLookup}
              disabled={!reg.trim() || status === "loading"}
              className="px-6 md:px-8 py-3 text-sm font-semibold uppercase whitespace-nowrap transition-colors disabled:opacity-50 cursor-pointer hover:brightness-110"
              style={{
                fontFamily: "var(--font-headline)",
                background: "var(--color-inverse-surface)",
                color: "var(--color-on-primary)",
              }}
            >
              {status === "loading" ? "..." : "Hämta"}
            </button>
          </div>
          <p
            className="mt-3 text-sm italic"
            style={{
              fontFamily: "var(--font-body)",
              color: "var(--color-secondary)",
            }}
          >
            Vi hämtar fordonsuppgifter automatiskt för att säkerställa rätt
            däckdimensioner.
          </p>

          {/* Result */}
          {status === "found" && result && (
            <div
              className="mt-6 p-4 flex items-center gap-4 border-l-4"
              style={{
                background: "var(--color-surface-container-lowest)",
                borderColor: "var(--color-primary)",
              }}
            >
              <span
                className="material-symbols-outlined text-3xl"
                style={{ color: "var(--color-primary)" }}
              >
                directions_car
              </span>
              <div>
                <p
                  className="text-lg font-bold uppercase"
                  style={{
                    fontFamily: "var(--font-headline)",
                    color: "var(--color-on-surface)",
                  }}
                >
                  {result.regNumber}
                </p>
                <p
                  className="text-sm"
                  style={{
                    fontFamily: "var(--font-body)",
                    color: "var(--color-secondary)",
                  }}
                >
                  {result.model} · {result.year}
                </p>
              </div>
              <span
                className="material-symbols-outlined ml-auto"
                style={{
                  color: "var(--color-primary)",
                  fontVariationSettings: "'FILL' 1",
                }}
              >
                check_circle
              </span>
            </div>
          )}
        </div>
      </div>

      <div className="mt-8 flex justify-between">
        <button
          onClick={onBack}
          className="px-6 py-3 text-sm font-semibold uppercase tracking-wider border-2 transition-all hover:opacity-70 cursor-pointer"
          style={{
            fontFamily: "var(--font-headline)",
            borderColor: "var(--color-on-surface)",
            color: "var(--color-on-surface)",
          }}
        >
          ← Tillbaka
        </button>
        <button
          onClick={onNext}
          disabled={!result}
          className="px-8 py-3 text-sm font-semibold uppercase tracking-wider transition-all disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer hover:brightness-110"
          style={{
            fontFamily: "var(--font-headline)",
            background: "var(--color-primary-container)",
            color: "var(--color-on-primary)",
          }}
        >
          Nästa: Välj tid →
        </button>
      </div>
    </section>
  );
}
