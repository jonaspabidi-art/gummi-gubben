"use client";

import { useState } from "react";
import { Vehicle } from "./types";

interface VehicleStepProps {
  vehicle: Vehicle | null;
  onConfirm: (v: Vehicle) => void;
  onBack: () => void;
  onNext: () => void;
}

export default function VehicleStep({ vehicle, onConfirm, onBack, onNext }: VehicleStepProps) {
  const [fields, setFields] = useState({
    regNumber: vehicle?.regNumber ?? "",
    model: vehicle?.model ?? "",
    name: vehicle?.name ?? "",
    email: vehicle?.email ?? "",
    phone: vehicle?.phone ?? "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const updated = { ...fields, [e.target.name]: e.target.value };
    setFields(updated);
    onConfirm({
      regNumber: updated.regNumber.replace(/\s/g, "").toUpperCase(),
      model: updated.model,
      year: "",
      name: updated.name,
      email: updated.email,
      phone: updated.phone,
    });
  }

  const canProceed =
    fields.regNumber.trim().length >= 2 &&
    fields.name.trim() !== "" &&
    fields.email.includes("@") &&
    fields.phone.trim() !== "";

  const inputBase = "w-full px-4 py-3 text-sm border-2 focus:outline-none transition-colors";
  const inputStyle = {
    fontFamily: "var(--font-body)",
    background: "var(--color-surface-container-lowest)",
    borderColor: "var(--color-inverse-surface)",
    color: "var(--color-on-surface)",
  };
  const focusIn = (e: React.FocusEvent<HTMLInputElement>) =>
    (e.currentTarget.style.borderColor = "var(--color-primary)");
  const focusOut = (e: React.FocusEvent<HTMLInputElement>) =>
    (e.currentTarget.style.borderColor = "var(--color-inverse-surface)");

  return (
    <section>
      <h2
        className="text-2xl md:text-3xl font-semibold uppercase border-l-4 pl-4 mb-8"
        style={{ fontFamily: "var(--font-headline)", borderColor: "var(--color-primary)" }}
      >
        Fordonsspecifikation
      </h2>

      <div className="p-6 md:p-8 mb-6" style={{ background: "var(--color-surface-container)" }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg">
          {/* Reg number */}
          <div className="sm:col-span-2">
            <label className="block text-xs font-semibold uppercase tracking-wider mb-1"
              style={{ fontFamily: "var(--font-body)", color: "var(--color-secondary)" }}>
              Registreringsnummer *
            </label>
            <input
              name="regNumber"
              value={fields.regNumber}
              onChange={(e) =>
                handleChange({ ...e, target: { ...e.target, name: "regNumber", value: e.target.value.toUpperCase() } })
              }
              placeholder="ABC 123"
              maxLength={7}
              className={`${inputBase} font-bold uppercase`}
              style={{ ...inputStyle, fontFamily: "var(--font-headline)" }}
              onFocus={focusIn}
              onBlur={focusOut}
            />
          </div>

          {/* Model – optional */}
          <div className="sm:col-span-2">
            <label className="block text-xs font-semibold uppercase tracking-wider mb-1"
              style={{ fontFamily: "var(--font-body)", color: "var(--color-secondary)" }}>
              Bilmodell <span className="normal-case font-normal">(valfritt)</span>
            </label>
            <input
              name="model"
              value={fields.model}
              onChange={handleChange}
              placeholder="t.ex. Volvo XC60"
              className={inputBase}
              style={inputStyle}
              onFocus={focusIn}
              onBlur={focusOut}
            />
          </div>
        </div>
      </div>

      {/* Contact details */}
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
              value={fields.name}
              onChange={handleChange}
              placeholder="Förnamn Efternamn"
              className={inputBase}
              style={inputStyle}
              onFocus={focusIn}
              onBlur={focusOut}
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
              value={fields.email}
              onChange={handleChange}
              placeholder="namn@mail.se"
              className={inputBase}
              style={inputStyle}
              onFocus={focusIn}
              onBlur={focusOut}
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
              value={fields.phone}
              onChange={handleChange}
              placeholder="070-000 00 00"
              className={inputBase}
              style={inputStyle}
              onFocus={focusIn}
              onBlur={focusOut}
            />
          </div>
        </div>
      </div>

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
