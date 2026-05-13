"use client";

import { useState } from "react";
import { Vehicle } from "./types";

const MOCK_VEHICLES: Record<string, Pick<Vehicle, "model" | "year">> = {
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
  const [lookupResult, setLookupResult] = useState<Pick<Vehicle, "model" | "year"> | null>(
    vehicle ? { model: vehicle.model, year: vehicle.year } : null
  );
  const [contact, setContact] = useState({
    name: vehicle?.name ?? "",
    email: vehicle?.email ?? "",
    phone: vehicle?.phone ?? "",
  });
  const [lookupStatus, setLookupStatus] = useState<"idle" | "loading" | "done">(
    vehicle ? "done" : "idle"
  );

  function handleLookup() {
    const key = reg.replace(/\s/g, "").toUpperCase();
    if (!key) return;
    setLookupStatus("loading");
    setTimeout(() => {
      const found = MOCK_VEHICLES[key] ?? { model: "Okänt fordon", year: "-" };
      setLookupResult(found);
      setLookupStatus("done");
      // Merge into parent state immediately so summary updates
      onConfirm({ regNumber: key, ...found, ...contact });
    }, 500);
  }

  function handleContactChange(e: React.ChangeEvent<HTMLInputElement>) {
    const updated = { ...contact, [e.target.name]: e.target.value };
    setContact(updated);
    if (lookupResult) {
      onConfirm({
        regNumber: reg.replace(/\s/g, "").toUpperCase(),
        ...lookupResult,
        ...updated,
      });
    }
  }

  const canProceed =
    lookupStatus === "done" &&
    contact.name.trim() !== "" &&
    contact.email.includes("@") &&
    contact.phone.trim() !== "";

  const inputBase =
    "w-full px-4 py-3 text-sm border-2 focus:outline-none transition-colors";
  const inputStyle = {
    fontFamily: "var(--font-body)",
    background: "var(--color-surface-container-lowest)",
    borderColor: "var(--color-inverse-surface)",
    color: "var(--color-on-surface)",
  };

  return (
    <section>
      <h2
        className="text-2xl md:text-3xl font-semibold uppercase border-l-4 pl-4 mb-8"
        style={{
          fontFamily: "var(--font-headline)",
          borderColor: "var(--color-primary)",
        }}
      >
        Fordonsspecifikation
      </h2>

      {/* Reg number lookup */}
      <div className="p-6 md:p-8 mb-6" style={{ background: "var(--color-surface-container)" }}>
        <label
          className="block text-base font-semibold uppercase mb-2"
          style={{ fontFamily: "var(--font-headline)" }}
        >
          Registreringsnummer
        </label>
        <div className="flex gap-2 max-w-md">
          <input
            value={reg}
            onChange={(e) => {
              setReg(e.target.value.toUpperCase());
              setLookupStatus("idle");
              setLookupResult(null);
            }}
            onKeyDown={(e) => e.key === "Enter" && handleLookup()}
            placeholder="ABC 123"
            maxLength={7}
            className={`${inputBase} font-bold uppercase`}
            style={{ ...inputStyle, fontFamily: "var(--font-headline)" }}
            onFocus={(e) => (e.currentTarget.style.borderColor = "var(--color-primary)")}
            onBlur={(e) => (e.currentTarget.style.borderColor = "var(--color-inverse-surface)")}
          />
          <button
            onClick={handleLookup}
            disabled={!reg.trim() || lookupStatus === "loading"}
            className="px-6 py-3 text-sm font-semibold uppercase whitespace-nowrap transition-colors disabled:opacity-50 cursor-pointer hover:brightness-110"
            style={{
              fontFamily: "var(--font-headline)",
              background: "var(--color-inverse-surface)",
              color: "var(--color-on-primary)",
            }}
          >
            {lookupStatus === "loading" ? "..." : "Hämta"}
          </button>
        </div>
        <p className="mt-2 text-xs italic" style={{ fontFamily: "var(--font-body)", color: "var(--color-secondary)" }}>
          Vi hämtar fordonsuppgifter automatiskt för rätt däckdimensioner.
        </p>

        {lookupStatus === "done" && lookupResult && (
          <div
            className="mt-5 p-4 flex items-center gap-4 border-l-4 max-w-md"
            style={{ background: "var(--color-surface-container-lowest)", borderColor: "var(--color-primary)" }}
          >
            <span className="material-symbols-outlined text-3xl" style={{ color: "var(--color-primary)" }}>
              directions_car
            </span>
            <div>
              <p className="text-lg font-bold uppercase" style={{ fontFamily: "var(--font-headline)" }}>
                {reg.replace(/\s/g, "").toUpperCase()}
              </p>
              <p className="text-sm" style={{ fontFamily: "var(--font-body)", color: "var(--color-secondary)" }}>
                {lookupResult.model} · {lookupResult.year}
              </p>
            </div>
            <span
              className="material-symbols-outlined ml-auto"
              style={{ color: "var(--color-primary)", fontVariationSettings: "'FILL' 1" }}
            >
              check_circle
            </span>
          </div>
        )}
      </div>

      {/* Contact details — shown after reg lookup */}
      {lookupStatus === "done" && (
        <div className="p-6 md:p-8" style={{ background: "var(--color-surface-container)" }}>
          <h3
            className="text-base font-semibold uppercase mb-6 border-l-4 pl-3"
            style={{ fontFamily: "var(--font-headline)", borderColor: "var(--color-primary)" }}
          >
            Kontaktuppgifter
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg">
            <div className="sm:col-span-2">
              <label className="block text-xs font-semibold uppercase tracking-wider mb-1"
                style={{ fontFamily: "var(--font-body)", color: "var(--color-secondary)" }}>
                Namn *
              </label>
              <input
                name="name"
                value={contact.name}
                onChange={handleContactChange}
                placeholder="Förnamn Efternamn"
                className={inputBase}
                style={inputStyle}
                onFocus={(e) => (e.currentTarget.style.borderColor = "var(--color-primary)")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "var(--color-inverse-surface)")}
              />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider mb-1"
                style={{ fontFamily: "var(--font-body)", color: "var(--color-secondary)" }}>
                E-post *
              </label>
              <input
                name="email"
                type="email"
                value={contact.email}
                onChange={handleContactChange}
                placeholder="namn@mail.se"
                className={inputBase}
                style={inputStyle}
                onFocus={(e) => (e.currentTarget.style.borderColor = "var(--color-primary)")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "var(--color-inverse-surface)")}
              />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider mb-1"
                style={{ fontFamily: "var(--font-body)", color: "var(--color-secondary)" }}>
                Telefon *
              </label>
              <input
                name="phone"
                type="tel"
                value={contact.phone}
                onChange={handleContactChange}
                placeholder="070-000 00 00"
                className={inputBase}
                style={inputStyle}
                onFocus={(e) => (e.currentTarget.style.borderColor = "var(--color-primary)")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "var(--color-inverse-surface)")}
              />
            </div>
          </div>
        </div>
      )}

      <div className="mt-8 flex justify-between">
        <button
          onClick={onBack}
          className="px-6 py-3 text-sm font-semibold uppercase tracking-wider border-2 transition-all hover:opacity-70 cursor-pointer"
          style={{ fontFamily: "var(--font-headline)", borderColor: "var(--color-on-surface)", color: "var(--color-on-surface)" }}
        >
          ← Tillbaka
        </button>
        <button
          onClick={onNext}
          disabled={!canProceed}
          className="px-8 py-3 text-sm font-semibold uppercase tracking-wider transition-all disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer hover:brightness-110"
          style={{ fontFamily: "var(--font-headline)", background: "var(--color-primary-container)", color: "var(--color-on-primary)" }}
        >
          Nästa: Välj tid →
        </button>
      </div>
    </section>
  );
}
