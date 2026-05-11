"use client";

import { useState, useEffect } from "react";
import { getSupabase, type Booking, type BookingTier } from "@/lib/supabase";

interface BookingModalProps {
  open: boolean;
  onClose: () => void;
}

const tiers: { value: BookingTier; label: string; price: string }[] = [
  { value: "personbil", label: "Personbil", price: "995:-" },
  { value: "suv", label: "SUV / Crossover", price: "1.295:-" },
  { value: "transport", label: "Husbilar / Transport", price: "1.495:-" },
];

const initialForm: Omit<Booking, "id" | "created_at"> = {
  name: "",
  email: "",
  phone: "",
  tier: "personbil",
  preferred_date: "",
  reg_number: "",
  notes: "",
};

type Status = "idle" | "loading" | "success" | "error";

export default function BookingModal({ open, onClose }: BookingModalProps) {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  // Lock body scroll when modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const { error } = await getSupabase().from("bookings").insert([form]);

    if (error) {
      setStatus("error");
      setErrorMsg(error.message);
    } else {
      setStatus("success");
      setForm(initialForm);
    }
  }

  function handleClose() {
    setStatus("idle");
    setErrorMsg("");
    onClose();
  }

  const inputClass =
    "w-full px-4 py-3 border-2 text-sm focus:outline-none transition-colors";
  const inputStyle = {
    fontFamily: "var(--font-body)",
    borderColor: "var(--color-on-surface)",
    background: "var(--color-surface-container-lowest)",
    color: "var(--color-on-surface)",
  };
  const focusStyle = {
    "--focus-border": "var(--color-primary)",
  } as React.CSSProperties;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div
        className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto border-t-4"
        style={{
          background: "var(--color-surface)",
          borderColor: "var(--color-primary)",
        }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-8 py-6 border-b"
          style={{ borderColor: "var(--color-outline-variant)" }}
        >
          <h2
            className="text-2xl font-bold uppercase"
            style={{
              fontFamily: "var(--font-headline)",
              color: "var(--color-on-surface)",
            }}
          >
            Boka Däckhotell
          </h2>
          <button
            onClick={handleClose}
            className="w-9 h-9 flex items-center justify-center hover:opacity-70 transition-opacity cursor-pointer"
            aria-label="Stäng"
          >
            <span
              className="material-symbols-outlined"
              style={{ color: "var(--color-on-surface)" }}
            >
              close
            </span>
          </button>
        </div>

        {/* Body */}
        <div className="px-8 py-6">
          {status === "success" ? (
            <div className="text-center py-10">
              <span
                className="material-symbols-outlined text-6xl mb-4 block"
                style={{ color: "var(--color-primary)" }}
              >
                check_circle
              </span>
              <h3
                className="text-2xl font-bold uppercase mb-2"
                style={{ fontFamily: "var(--font-headline)" }}
              >
                Bokning mottagen!
              </h3>
              <p
                className="text-sm mb-8"
                style={{
                  fontFamily: "var(--font-body)",
                  color: "var(--color-secondary)",
                }}
              >
                Vi bekräftar din bokning via e-post inom kort.
              </p>
              <button
                onClick={handleClose}
                className="px-8 py-3 text-sm font-semibold uppercase tracking-wider transition-all hover:brightness-110 cursor-pointer"
                style={{
                  fontFamily: "var(--font-headline)",
                  background: "var(--color-primary-container)",
                  color: "var(--color-on-primary)",
                }}
              >
                Stäng
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Tier selector */}
              <div>
                <label
                  className="block text-xs font-semibold uppercase tracking-wider mb-2"
                  style={{
                    fontFamily: "var(--font-body)",
                    color: "var(--color-on-surface-variant)",
                  }}
                >
                  Fordonstyp
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {tiers.map((t) => (
                    <button
                      key={t.value}
                      type="button"
                      onClick={() =>
                        setForm((prev) => ({ ...prev, tier: t.value }))
                      }
                      className="py-3 px-2 border-2 text-center transition-all cursor-pointer"
                      style={{
                        fontFamily: "var(--font-headline)",
                        borderColor:
                          form.tier === t.value
                            ? "var(--color-primary)"
                            : "var(--color-outline-variant)",
                        background:
                          form.tier === t.value
                            ? "var(--color-primary-container)"
                            : "var(--color-surface)",
                        color:
                          form.tier === t.value
                            ? "var(--color-on-primary)"
                            : "var(--color-on-surface)",
                      }}
                    >
                      <div className="text-xs font-bold uppercase leading-tight">
                        {t.label}
                      </div>
                      <div
                        className="text-xs mt-1"
                        style={{
                          color:
                            form.tier === t.value
                              ? "var(--color-on-primary-container)"
                              : "var(--color-secondary)",
                        }}
                      >
                        {t.price}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Name */}
              <div>
                <label
                  className="block text-xs font-semibold uppercase tracking-wider mb-2"
                  style={{
                    fontFamily: "var(--font-body)",
                    color: "var(--color-on-surface-variant)",
                  }}
                >
                  Namn *
                </label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Förnamn Efternamn"
                  className={inputClass}
                  style={{ ...inputStyle, ...focusStyle }}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                {/* Email */}
                <div>
                  <label
                    className="block text-xs font-semibold uppercase tracking-wider mb-2"
                    style={{
                      fontFamily: "var(--font-body)",
                      color: "var(--color-on-surface-variant)",
                    }}
                  >
                    E-post *
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="namn@mail.se"
                    className={inputClass}
                    style={inputStyle}
                  />
                </div>
                {/* Phone */}
                <div>
                  <label
                    className="block text-xs font-semibold uppercase tracking-wider mb-2"
                    style={{
                      fontFamily: "var(--font-body)",
                      color: "var(--color-on-surface-variant)",
                    }}
                  >
                    Telefon *
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    placeholder="070-000 00 00"
                    className={inputClass}
                    style={inputStyle}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {/* Reg number */}
                <div>
                  <label
                    className="block text-xs font-semibold uppercase tracking-wider mb-2"
                    style={{
                      fontFamily: "var(--font-body)",
                      color: "var(--color-on-surface-variant)",
                    }}
                  >
                    Registreringsnummer *
                  </label>
                  <input
                    name="reg_number"
                    value={form.reg_number}
                    onChange={handleChange}
                    required
                    placeholder="ABC 123"
                    className={`${inputClass} uppercase`}
                    style={inputStyle}
                  />
                </div>
                {/* Date */}
                <div>
                  <label
                    className="block text-xs font-semibold uppercase tracking-wider mb-2"
                    style={{
                      fontFamily: "var(--font-body)",
                      color: "var(--color-on-surface-variant)",
                    }}
                  >
                    Önskat datum *
                  </label>
                  <input
                    name="preferred_date"
                    type="date"
                    value={form.preferred_date}
                    onChange={handleChange}
                    required
                    min={new Date().toISOString().split("T")[0]}
                    className={inputClass}
                    style={inputStyle}
                  />
                </div>
              </div>

              {/* Notes */}
              <div>
                <label
                  className="block text-xs font-semibold uppercase tracking-wider mb-2"
                  style={{
                    fontFamily: "var(--font-body)",
                    color: "var(--color-on-surface-variant)",
                  }}
                >
                  Övrigt (valfritt)
                </label>
                <textarea
                  name="notes"
                  value={form.notes}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Specialönskemål, tillval, frågor..."
                  className={inputClass}
                  style={{ ...inputStyle, resize: "vertical" }}
                />
              </div>

              {status === "error" && (
                <p
                  className="text-sm"
                  style={{
                    fontFamily: "var(--font-body)",
                    color: "var(--color-error)",
                  }}
                >
                  {errorMsg || "Något gick fel. Försök igen."}
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full py-4 text-sm font-semibold uppercase tracking-widest transition-all hover:brightness-110 disabled:opacity-60 cursor-pointer"
                style={{
                  fontFamily: "var(--font-headline)",
                  background: "var(--color-primary-container)",
                  color: "var(--color-on-primary)",
                }}
              >
                {status === "loading" ? "Skickar..." : "Bekräfta Bokning"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
