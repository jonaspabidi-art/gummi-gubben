"use client";

import { useState } from "react";
import Header from "@/components/Header";
import SiteFooter from "@/components/SiteFooter";
import Stepper from "@/components/boka/Stepper";
import ServiceStep from "@/components/boka/ServiceStep";
import VehicleStep from "@/components/boka/VehicleStep";
import CalendarStep from "@/components/boka/CalendarStep";
import BookingSummary from "@/components/boka/BookingSummary";
import { BookingState, Service, Vehicle } from "@/components/boka/types";
import { getSupabase } from "@/lib/supabase";
import Link from "next/link";

const MONTH_NAMES = [
  "Januari","Februari","Mars","April","Maj","Juni",
  "Juli","Augusti","September","Oktober","November","December",
];

export default function BokaPage() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [booking, setBooking] = useState<BookingState>({
    service: null,
    vehicle: null,
    date: null,
    time: null,
  });
  const [confirming, setConfirming] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const [error, setError] = useState("");

  async function handleConfirm() {
    if (!booking.service || !booking.vehicle || !booking.date || !booking.time) return;
    setConfirming(true);
    setError("");

    const payload = {
      service: booking.service.id,
      service_label: booking.service.title,
      price: booking.service.price,
      reg_number: booking.vehicle.regNumber,
      vehicle_model: booking.vehicle.model,
      vehicle_year: booking.vehicle.year,
      preferred_date: booking.date.toISOString().split("T")[0],
      preferred_time: booking.time,
    };

    try {
      const { error: sbError } = await getSupabase()
        .from("service_bookings")
        .insert([payload]);
      if (sbError) throw sbError;
      setConfirmed(true);
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Något gick fel. Försök igen.");
    } finally {
      setConfirming(false);
    }
  }

  if (confirmed && booking.service && booking.vehicle && booking.date && booking.time) {
    return (
      <>
        <Header activePage="tjanster" onBookClick={() => {}} />
        <main className="min-h-[60vh] flex items-center justify-center px-4 py-16">
          <div className="text-center max-w-lg">
            <span
              className="material-symbols-outlined text-7xl mb-6 block"
              style={{ color: "var(--color-primary)", fontVariationSettings: "'FILL' 1" }}
            >
              check_circle
            </span>
            <h1
              className="text-4xl font-bold uppercase mb-4"
              style={{ fontFamily: "var(--font-headline)", letterSpacing: "-0.02em" }}
            >
              Bokning bekräftad!
            </h1>
            <div
              className="border-t-4 p-8 text-left space-y-4 mb-8"
              style={{
                background: "var(--color-surface-container)",
                borderColor: "var(--color-primary)",
              }}
            >
              {[
                ["Tjänst", booking.service.title],
                ["Fordon", `${booking.vehicle.regNumber} · ${booking.vehicle.model}`],
                ["Datum", `${booking.date.getDate()} ${MONTH_NAMES[booking.date.getMonth()]}`],
                ["Tid", booking.time],
                ["Pris", booking.service.price],
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between items-center border-b pb-3"
                  style={{ borderColor: "var(--color-surface-container-highest)" }}>
                  <span className="text-sm font-semibold uppercase"
                    style={{ fontFamily: "var(--font-body)", color: "var(--color-secondary)" }}>
                    {label}
                  </span>
                  <span className="text-base font-bold uppercase"
                    style={{ fontFamily: "var(--font-headline)" }}>
                    {value}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-sm mb-8" style={{ fontFamily: "var(--font-body)", color: "var(--color-secondary)" }}>
              En bekräftelse skickas till din e-post. Betala när du är på plats i verkstaden.
            </p>
            <Link
              href="/"
              className="inline-block px-10 py-4 text-sm font-bold uppercase tracking-wider hover:brightness-110 transition-all"
              style={{
                fontFamily: "var(--font-headline)",
                background: "var(--color-primary-container)",
                color: "var(--color-on-primary)",
              }}
            >
              Tillbaka till startsidan
            </Link>
          </div>
        </main>
        <SiteFooter />
      </>
    );
  }

  return (
    <>
      <Header activePage="tjanster" onBookClick={() => setStep(1)} />
      <main
        className="max-w-[var(--spacing-container-max)] mx-auto px-4 md:px-[var(--spacing-margin-desktop)] py-10 md:py-12"
      >
        <h1
          className="text-4xl md:text-5xl font-bold uppercase mb-8"
          style={{
            fontFamily: "var(--font-headline)",
            color: "var(--color-on-surface)",
            letterSpacing: "-0.02em",
          }}
        >
          Boka din service
        </h1>

        <Stepper currentStep={step} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[var(--spacing-gutter)]">
          {/* Main content */}
          <div className="lg:col-span-8">
            {step === 1 && (
              <ServiceStep
                selected={booking.service}
                onSelect={(s: Service) => setBooking((b) => ({ ...b, service: s }))}
                onNext={() => setStep(2)}
              />
            )}
            {step === 2 && (
              <VehicleStep
                vehicle={booking.vehicle}
                onConfirm={(v: Vehicle) => setBooking((b) => ({ ...b, vehicle: v }))}
                onBack={() => setStep(1)}
                onNext={() => setStep(3)}
              />
            )}
            {step === 3 && (
              <CalendarStep
                date={booking.date}
                time={booking.time}
                onSelectDate={(d: Date) => setBooking((b) => ({ ...b, date: d, time: null }))}
                onSelectTime={(t: string) => setBooking((b) => ({ ...b, time: t }))}
                onBack={() => setStep(2)}
                onNext={handleConfirm}
              />
            )}
            {error && (
              <p className="mt-4 text-sm" style={{ color: "var(--color-error)", fontFamily: "var(--font-body)" }}>
                {error}
              </p>
            )}
          </div>

          {/* Sidebar — hidden on mobile until step 3, always visible on lg */}
          <div className={step === 3 ? "block" : "hidden lg:block"}>
            <BookingSummary
              state={booking}
              onGoToStep={(s) => setStep(s)}
              onConfirm={handleConfirm}
              confirming={confirming}
            />
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
