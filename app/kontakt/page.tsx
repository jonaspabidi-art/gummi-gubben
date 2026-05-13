"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import SiteFooter from "@/components/SiteFooter";
import { getSupabase } from "@/lib/supabase";
import ScrollReveal from "@/components/ScrollReveal";

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const SUBJECTS = [
  "Bokningsförfrågan",
  "Däckhotell",
  "Prisuppgifter",
  "Övrigt",
];

export default function KontaktPage() {
  const [form, setForm] = useState<ContactForm>({
    name: "",
    email: "",
    subject: "Bokningsförfrågan",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return;
    setSubmitting(true);
    setError("");

    try {
      const { error: sbError } = await getSupabase()
        .from("contact_messages")
        .insert([
          {
            name: form.name,
            email: form.email,
            subject: form.subject,
            message: form.message,
          },
        ]);
      if (sbError) throw sbError;
      setSubmitted(true);
    } catch (err: unknown) {
      setError(
        err instanceof Error ? err.message : "Något gick fel. Försök igen."
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <Header activePage="kontakt" />

      <main
        className="min-h-screen"
        style={{ background: "var(--color-surface)" }}
      >
        {/* Hero */}
        <section
          className="py-14 md:py-20"
          style={{ background: "var(--color-inverse-surface)" }}
        >
          <div className="max-w-[var(--spacing-container-max)] mx-auto px-4 md:px-[var(--spacing-margin-desktop)]">
            <h1
              className="text-4xl md:text-6xl font-bold uppercase mb-4"
              style={{
                fontFamily: "var(--font-headline)",
                color: "var(--color-on-primary)",
                letterSpacing: "-0.02em",
              }}
            >
              Kontakt &amp; Information
            </h1>
            <p
              className="text-base md:text-lg max-w-2xl"
              style={{
                fontFamily: "var(--font-body)",
                color: "var(--color-secondary-fixed)",
                lineHeight: "1.6",
              }}
            >
              Vi finns i hjärtat av Göteborg. Välkommen förbi med din bil för
              professionell däckservice och teknisk expertis.
            </p>
          </div>
        </section>

        {/* Main grid */}
        <section className="max-w-[var(--spacing-container-max)] mx-auto px-4 md:px-[var(--spacing-margin-desktop)] py-10 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-[var(--spacing-gutter)]">
            {/* Left column: contact + hours */}
            <ScrollReveal className="lg:col-span-5 flex flex-col gap-[var(--spacing-gutter)]">
              {/* Direct contact card */}
              <div
                className="p-6 md:p-8 border-2"
                style={{
                  background: "var(--color-surface-container-lowest)",
                  borderColor: "var(--color-inverse-surface)",
                }}
              >
                <h2
                  className="text-xl font-bold uppercase mb-6 pb-2 border-b"
                  style={{
                    fontFamily: "var(--font-headline)",
                    color: "var(--color-primary)",
                    borderColor: "var(--color-surface-container-highest)",
                  }}
                >
                  Direktkontakt
                </h2>
                <div className="flex flex-col gap-5">
                  <a
                    href="tel:031517764"
                    className="flex items-center gap-4 group"
                  >
                    <div
                      className="p-3 flex-shrink-0 flex items-center justify-center"
                      style={{ background: "var(--color-primary-container)" }}
                    >
                      <span
                        className="material-symbols-outlined"
                        style={{ color: "var(--color-on-primary)" }}
                      >
                        phone_in_talk
                      </span>
                    </div>
                    <div>
                      <p
                        className="text-xs font-semibold uppercase mb-0.5"
                        style={{
                          fontFamily: "var(--font-body)",
                          color: "var(--color-secondary)",
                        }}
                      >
                        Ring oss
                      </p>
                      <span
                        className="text-lg font-bold group-hover:text-[var(--color-primary)] transition-colors"
                        style={{
                          fontFamily: "var(--font-headline)",
                          color: "var(--color-inverse-surface)",
                        }}
                      >
                        031-51 77 64
                      </span>
                    </div>
                  </a>

                  <a
                    href="mailto:info@gummigubben.se"
                    className="flex items-center gap-4 group"
                  >
                    <div
                      className="p-3 flex-shrink-0 flex items-center justify-center"
                      style={{ background: "var(--color-inverse-surface)" }}
                    >
                      <span
                        className="material-symbols-outlined"
                        style={{ color: "var(--color-on-primary)" }}
                      >
                        mail
                      </span>
                    </div>
                    <div>
                      <p
                        className="text-xs font-semibold uppercase mb-0.5"
                        style={{
                          fontFamily: "var(--font-body)",
                          color: "var(--color-secondary)",
                        }}
                      >
                        E-post
                      </p>
                      <span
                        className="text-base font-bold group-hover:text-[var(--color-primary)] transition-colors break-all"
                        style={{
                          fontFamily: "var(--font-headline)",
                          color: "var(--color-inverse-surface)",
                        }}
                      >
                        info@gummigubben.se
                      </span>
                    </div>
                  </a>

                  <a
                    href="https://maps.google.com/?q=Deltavägen+11B+Gothenburg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group"
                  >
                    <div
                      className="p-3 flex-shrink-0 flex items-center justify-center"
                      style={{ background: "var(--color-surface-container)" }}
                    >
                      <span
                        className="material-symbols-outlined"
                        style={{ color: "var(--color-inverse-surface)" }}
                      >
                        location_on
                      </span>
                    </div>
                    <div>
                      <p
                        className="text-xs font-semibold uppercase mb-0.5"
                        style={{
                          fontFamily: "var(--font-body)",
                          color: "var(--color-secondary)",
                        }}
                      >
                        Adress
                      </p>
                      <span
                        className="text-base font-bold group-hover:text-[var(--color-primary)] transition-colors"
                        style={{
                          fontFamily: "var(--font-headline)",
                          color: "var(--color-inverse-surface)",
                        }}
                      >
                        Deltavägen 11B, 417 30 Göteborg
                      </span>
                    </div>
                  </a>
                </div>
              </div>

              {/* Opening hours card */}
              <div
                className="p-6 md:p-8"
                style={{ background: "var(--color-surface-container)" }}
              >
                <h2
                  className="text-xl font-bold uppercase mb-6 flex items-center gap-2"
                  style={{
                    fontFamily: "var(--font-headline)",
                    color: "var(--color-inverse-surface)",
                  }}
                >
                  <span className="material-symbols-outlined">schedule</span>
                  Öppettider
                </h2>
                <div
                  className="flex flex-col gap-3 text-sm"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {[
                    { day: "Måndag – Torsdag", time: "07:30 – 16:30", open: true },
                    { day: "Fredag", time: "07:30 – 15:30", open: true },
                    { day: "Lördag", time: "Stängt", open: false },
                    { day: "Söndag", time: "Stängt", open: false },
                  ].map(({ day, time, open }) => (
                    <div
                      key={day}
                      className="flex justify-between items-center border-b pb-3"
                      style={{
                        borderColor: "var(--color-surface-container-highest)",
                        opacity: open ? 1 : 0.55,
                      }}
                    >
                      <span className="font-semibold">{day}</span>
                      <span
                        className="font-bold"
                        style={{
                          color: open
                            ? "var(--color-primary)"
                            : "var(--color-secondary)",
                        }}
                      >
                        {time}
                      </span>
                    </div>
                  ))}
                </div>
                <div
                  className="mt-6 p-4 border-l-4 text-sm leading-relaxed"
                  style={{
                    background: "var(--color-surface-container-low)",
                    borderColor: "var(--color-primary)",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  <span className="font-bold uppercase block mb-1">
                    Säsongsändring:
                  </span>
                  Under däckbytarsäsongen (April &amp; Oktober) har vi utökade
                  öppettider även under lördagar.
                </div>
              </div>
            </ScrollReveal>

            {/* Right column: form + map */}
            <ScrollReveal delay={150} className="lg:col-span-7 flex flex-col gap-[var(--spacing-gutter)]">
              {/* Contact form */}
              <div
                className="p-6 md:p-8 border"
                style={{
                  background: "var(--color-surface-container-lowest)",
                  borderColor: "var(--color-surface-container-highest)",
                }}
              >
                <h2
                  className="text-xl font-bold uppercase mb-6"
                  style={{
                    fontFamily: "var(--font-headline)",
                    color: "var(--color-inverse-surface)",
                  }}
                >
                  Skicka ett meddelande
                </h2>

                {submitted ? (
                  <div className="flex flex-col items-center text-center py-10 gap-4">
                    <span
                      className="material-symbols-outlined text-6xl"
                      style={{
                        color: "var(--color-primary)",
                        fontVariationSettings: "'FILL' 1",
                      }}
                    >
                      check_circle
                    </span>
                    <h3
                      className="text-2xl font-bold uppercase"
                      style={{ fontFamily: "var(--font-headline)" }}
                    >
                      Meddelande skickat!
                    </h3>
                    <p
                      className="text-sm max-w-sm"
                      style={{
                        fontFamily: "var(--font-body)",
                        color: "var(--color-secondary)",
                      }}
                    >
                      Tack {form.name}! Vi återkommer till{" "}
                      <strong>{form.email}</strong> så snart vi kan.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setForm({
                          name: "",
                          email: "",
                          subject: "Bokningsförfrågan",
                          message: "",
                        });
                      }}
                      className="mt-2 text-sm font-semibold uppercase underline underline-offset-4"
                      style={{
                        fontFamily: "var(--font-body)",
                        color: "var(--color-primary)",
                      }}
                    >
                      Skicka ett till
                    </button>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                  >
                    {/* Name */}
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="name"
                        className="text-xs font-semibold uppercase"
                        style={{
                          fontFamily: "var(--font-body)",
                          color: "var(--color-on-surface)",
                        }}
                      >
                        Namn <span style={{ color: "var(--color-primary)" }}>*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Ditt fullständiga namn"
                        className="border-2 p-3 text-sm outline-none transition-colors"
                        style={{
                          background: "white",
                          borderColor: "var(--color-inverse-surface)",
                          fontFamily: "var(--font-body)",
                        }}
                        onFocus={(e) =>
                          (e.currentTarget.style.borderColor =
                            "var(--color-primary)")
                        }
                        onBlur={(e) =>
                          (e.currentTarget.style.borderColor =
                            "var(--color-inverse-surface)")
                        }
                      />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="email"
                        className="text-xs font-semibold uppercase"
                        style={{
                          fontFamily: "var(--font-body)",
                          color: "var(--color-on-surface)",
                        }}
                      >
                        E-post <span style={{ color: "var(--color-primary)" }}>*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Din e-postadress"
                        className="border-2 p-3 text-sm outline-none transition-colors"
                        style={{
                          background: "white",
                          borderColor: "var(--color-inverse-surface)",
                          fontFamily: "var(--font-body)",
                        }}
                        onFocus={(e) =>
                          (e.currentTarget.style.borderColor =
                            "var(--color-primary)")
                        }
                        onBlur={(e) =>
                          (e.currentTarget.style.borderColor =
                            "var(--color-inverse-surface)")
                        }
                      />
                    </div>

                    {/* Subject */}
                    <div className="flex flex-col gap-2 sm:col-span-2">
                      <label
                        htmlFor="subject"
                        className="text-xs font-semibold uppercase"
                        style={{
                          fontFamily: "var(--font-body)",
                          color: "var(--color-on-surface)",
                        }}
                      >
                        Ärende
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        className="border-2 p-3 text-sm outline-none transition-colors"
                        style={{
                          background: "white",
                          borderColor: "var(--color-inverse-surface)",
                          fontFamily: "var(--font-body)",
                        }}
                        onFocus={(e) =>
                          (e.currentTarget.style.borderColor =
                            "var(--color-primary)")
                        }
                        onBlur={(e) =>
                          (e.currentTarget.style.borderColor =
                            "var(--color-inverse-surface)")
                        }
                      >
                        {SUBJECTS.map((s) => (
                          <option key={s}>{s}</option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-2 sm:col-span-2">
                      <label
                        htmlFor="message"
                        className="text-xs font-semibold uppercase"
                        style={{
                          fontFamily: "var(--font-body)",
                          color: "var(--color-on-surface)",
                        }}
                      >
                        Meddelande <span style={{ color: "var(--color-primary)" }}>*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Beskriv hur vi kan hjälpa dig…"
                        className="border-2 p-3 text-sm outline-none transition-colors resize-none"
                        style={{
                          background: "white",
                          borderColor: "var(--color-inverse-surface)",
                          fontFamily: "var(--font-body)",
                        }}
                        onFocus={(e) =>
                          (e.currentTarget.style.borderColor =
                            "var(--color-primary)")
                        }
                        onBlur={(e) =>
                          (e.currentTarget.style.borderColor =
                            "var(--color-inverse-surface)")
                        }
                      />
                    </div>

                    {/* Error */}
                    {error && (
                      <p
                        className="sm:col-span-2 text-sm"
                        style={{
                          color: "var(--color-error)",
                          fontFamily: "var(--font-body)",
                        }}
                      >
                        {error}
                      </p>
                    )}

                    {/* Submit */}
                    <div className="sm:col-span-2 flex justify-end">
                      <button
                        type="submit"
                        disabled={submitting}
                        className="px-10 py-3 text-sm font-bold uppercase tracking-wider transition-all hover:brightness-110 active:scale-95 disabled:opacity-60"
                        style={{
                          fontFamily: "var(--font-headline)",
                          background: submitting
                            ? "var(--color-secondary)"
                            : "var(--color-primary)",
                          color: "var(--color-on-primary)",
                        }}
                      >
                        {submitting ? "Skickar…" : "Skicka förfrågan"}
                      </button>
                    </div>
                  </form>
                )}
              </div>

              {/* Map */}
              <div
                className="relative overflow-hidden border-2"
                style={{ borderColor: "var(--color-inverse-surface)" }}
              >
                <div className="w-full aspect-video md:aspect-[16/7]">
                  <iframe
                    title="Gummigubben karta"
                    src="https://maps.google.com/maps?q=Deltav%C3%A4gen+11B,+417+30+G%C3%B6teborg,+Sweden&output=embed"
                    className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <a
                  href="https://maps.google.com/?q=Deltavägen+11B+Gothenburg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 left-4 p-4 shadow-xl hover:brightness-110 transition-all"
                  style={{ background: "var(--color-inverse-surface)" }}
                >
                  <p
                    className="text-base font-bold uppercase mb-1"
                    style={{
                      fontFamily: "var(--font-headline)",
                      color: "var(--color-on-primary)",
                    }}
                  >
                    Hitta hit
                  </p>
                  <p
                    className="text-sm"
                    style={{
                      fontFamily: "var(--font-body)",
                      color: "var(--color-secondary-fixed)",
                    }}
                  >
                    Deltavägen 11B, 417 30 Göteborg
                  </p>
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* CTA section */}
        <section
          className="py-14 md:py-16 border-t-2"
          style={{
            background: "var(--color-surface-container-high)",
            borderColor: "var(--color-surface-container-highest)",
          }}
        >
          <div className="max-w-[var(--spacing-container-max)] mx-auto px-4 md:px-[var(--spacing-margin-desktop)] text-center">
            <h2
              className="text-3xl md:text-4xl font-bold uppercase mb-8"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              Redo att boka?
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/boka"
                className="px-10 py-4 text-sm font-bold uppercase tracking-wider hover:-translate-y-1 transition-transform text-center"
                style={{
                  fontFamily: "var(--font-headline)",
                  background: "var(--color-primary)",
                  color: "var(--color-on-primary)",
                }}
              >
                Boka däckbyte online
              </Link>
              <Link
                href="/boka?service=dackhotell"
                className="px-10 py-4 text-sm font-bold uppercase tracking-wider hover:-translate-y-1 transition-transform text-center"
                style={{
                  fontFamily: "var(--font-headline)",
                  background: "var(--color-inverse-surface)",
                  color: "var(--color-on-primary)",
                }}
              >
                Se vår prislista
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
