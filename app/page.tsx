"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ValueProps from "@/components/ValueProps";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";

export default function Home() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <>
      <Header onBookClick={() => setBookingOpen(true)} />
      <main>
        <Hero onBookClick={() => setBookingOpen(true)} />
        <ValueProps />
        <Pricing onBookClick={() => setBookingOpen(true)} />
        <CTA onBookClick={() => setBookingOpen(true)} />
      </main>
      <Footer />
      <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
    </>
  );
}
