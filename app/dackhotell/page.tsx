"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ValueProps from "@/components/ValueProps";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import SiteFooter from "@/components/SiteFooter";
import BookingModal from "@/components/BookingModal";

export default function Dackhotell() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <>
      <Header activePage="dackhotell" onBookClick={() => setBookingOpen(true)} />
      <main>
        <Hero onBookClick={() => setBookingOpen(true)} />
        <ValueProps />
        <Pricing onBookClick={() => setBookingOpen(true)} />
        <CTA onBookClick={() => setBookingOpen(true)} />
      </main>
      <SiteFooter />
      <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
    </>
  );
}
