"use client";

import { useState } from "react";
import { TIME_SLOTS } from "./types";

const DAY_LABELS = ["Må", "Ti", "On", "To", "Fr", "Lö", "Sö"];
const WEEKENDS = [6, 0]; // Sat=6, Sun=0 in JS — we use Mon=0..Sun=6 mapping below

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfWeek(year: number, month: number) {
  // Monday=0 … Sunday=6
  const day = new Date(year, month, 1).getDay();
  return day === 0 ? 6 : day - 1;
}

function isWeekend(year: number, month: number, day: number) {
  const d = new Date(year, month, day).getDay();
  return d === 0 || d === 6;
}

function isPast(year: number, month: number, day: number) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return new Date(year, month, day) < today;
}

const MONTH_NAMES = [
  "Januari","Februari","Mars","April","Maj","Juni",
  "Juli","Augusti","September","Oktober","November","December",
];

interface CalendarStepProps {
  date: Date | null;
  time: string | null;
  onSelectDate: (d: Date) => void;
  onSelectTime: (t: string) => void;
  onBack: () => void;
  onNext: () => void;
}

export default function CalendarStep({
  date,
  time,
  onSelectDate,
  onSelectTime,
  onBack,
  onNext,
}: CalendarStepProps) {
  const today = new Date();
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());

  function prevMonth() {
    if (viewMonth === 0) { setViewMonth(11); setViewYear(y => y - 1); }
    else setViewMonth(m => m - 1);
  }

  function nextMonth() {
    if (viewMonth === 11) { setViewMonth(0); setViewYear(y => y + 1); }
    else setViewMonth(m => m + 1);
  }

  const daysInMonth = getDaysInMonth(viewYear, viewMonth);
  const firstDow = getFirstDayOfWeek(viewYear, viewMonth);
  const blanks = Array(firstDow).fill(null);
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  const selectedDay = date
    ? date.getDate() === undefined ? null
      : date.getFullYear() === viewYear && date.getMonth() === viewMonth
      ? date.getDate()
      : null
    : null;

  const formattedDate = date
    ? `${date.getDate()} ${MONTH_NAMES[date.getMonth()]}`
    : null;

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
        Välj tid
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {/* Calendar */}
        <div
          className="border p-5 md:p-6"
          style={{
            background: "var(--color-surface-container-lowest)",
            borderColor: "var(--color-surface-container-highest)",
          }}
        >
          {/* Month nav */}
          <div className="flex justify-between items-center mb-6">
            <span
              className="text-lg font-semibold uppercase"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              {MONTH_NAMES[viewMonth]} {viewYear}
            </span>
            <div className="flex gap-2">
              <button
                onClick={prevMonth}
                className="material-symbols-outlined border p-1 hover:bg-[var(--color-surface-container)] transition-colors"
                style={{ borderColor: "var(--color-surface-container-highest)" }}
              >
                chevron_left
              </button>
              <button
                onClick={nextMonth}
                className="material-symbols-outlined border p-1 hover:bg-[var(--color-surface-container)] transition-colors"
                style={{ borderColor: "var(--color-surface-container-highest)" }}
              >
                chevron_right
              </button>
            </div>
          </div>

          {/* Day labels */}
          <div className="grid grid-cols-7 gap-1 text-center mb-2">
            {DAY_LABELS.map((d) => (
              <div
                key={d}
                className="text-xs font-bold uppercase py-1"
                style={{
                  fontFamily: "var(--font-body)",
                  color: "var(--color-secondary)",
                }}
              >
                {d}
              </div>
            ))}
          </div>

          {/* Day grid */}
          <div className="grid grid-cols-7 gap-1">
            {blanks.map((_, i) => <div key={`b${i}`} />)}
            {days.map((day) => {
              const disabled = isPast(viewYear, viewMonth, day) || isWeekend(viewYear, viewMonth, day);
              const isSelected = selectedDay === day;
              return (
                <button
                  key={day}
                  disabled={disabled}
                  onClick={() => onSelectDate(new Date(viewYear, viewMonth, day))}
                  className="aspect-square flex items-center justify-center text-sm font-semibold transition-all"
                  style={{
                    fontFamily: "var(--font-body)",
                    background: isSelected
                      ? "var(--color-primary-container)"
                      : "transparent",
                    color: isSelected
                      ? "var(--color-on-primary)"
                      : disabled
                      ? "var(--color-surface-container-highest)"
                      : "var(--color-on-surface)",
                    cursor: disabled ? "not-allowed" : "pointer",
                  }}
                  onMouseEnter={(e) => {
                    if (!disabled && !isSelected)
                      e.currentTarget.style.background = "var(--color-surface-container)";
                  }}
                  onMouseLeave={(e) => {
                    if (!disabled && !isSelected)
                      e.currentTarget.style.background = "transparent";
                  }}
                >
                  {day}
                </button>
              );
            })}
          </div>
        </div>

        {/* Time slots */}
        <div className="space-y-4">
          <span
            className="block text-base font-semibold uppercase mb-4"
            style={{
              fontFamily: "var(--font-headline)",
              color: "var(--color-on-surface)",
            }}
          >
            {formattedDate
              ? `Tillgängliga tider – ${formattedDate}`
              : "Välj ett datum för att se tider"}
          </span>

          {date ? (
            <>
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                {TIME_SLOTS.map((slot) => {
                  const isSelected = time === slot;
                  return (
                    <button
                      key={slot}
                      onClick={() => onSelectTime(slot)}
                      className="border-2 py-3 text-base font-semibold transition-all cursor-pointer"
                      style={{
                        fontFamily: "var(--font-headline)",
                        borderColor: isSelected
                          ? "var(--color-primary)"
                          : "var(--color-inverse-surface)",
                        background: isSelected
                          ? "var(--color-primary-container)"
                          : "transparent",
                        color: isSelected
                          ? "var(--color-on-primary)"
                          : "var(--color-on-surface)",
                      }}
                    >
                      {slot}
                    </button>
                  );
                })}
              </div>

              <div
                className="mt-4 flex items-center gap-3 p-4"
                style={{ background: "var(--color-secondary-fixed)" }}
              >
                <span
                  className="material-symbols-outlined text-lg"
                  style={{ color: "var(--color-on-secondary-fixed)" }}
                >
                  info
                </span>
                <span
                  className="text-sm font-semibold"
                  style={{
                    fontFamily: "var(--font-body)",
                    color: "var(--color-on-secondary-fixed)",
                  }}
                >
                  Arbetet beräknas ta ca 30–45 minuter.
                </span>
              </div>
            </>
          ) : (
            <div
              className="h-40 flex items-center justify-center border-2 border-dashed"
              style={{ borderColor: "var(--color-outline-variant)" }}
            >
              <span
                className="text-sm"
                style={{
                  fontFamily: "var(--font-body)",
                  color: "var(--color-secondary)",
                }}
              >
                Välj ett datum i kalendern
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
          disabled={!date || !time}
          className="px-8 py-3 text-sm font-semibold uppercase tracking-wider transition-all disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer hover:brightness-110"
          style={{
            fontFamily: "var(--font-headline)",
            background: "var(--color-primary-container)",
            color: "var(--color-on-primary)",
          }}
        >
          Granska bokning →
        </button>
      </div>
    </section>
  );
}
