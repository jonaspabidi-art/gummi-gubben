"use client";

import { useState } from "react";
import Header from "@/components/Header";
import HomeHero from "@/components/home/HomeHero";
import Services from "@/components/home/Services";
import Offers from "@/components/home/Offers";
import Info from "@/components/home/Info";
import SiteFooter from "@/components/SiteFooter";
import BookingModal from "@/components/BookingModal";

export default function Home() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <>
      <Header activePage="hem" onBookClick={() => setBookingOpen(true)} />
      <main>
        <HomeHero onBookClick={() => setBookingOpen(true)} />
        <Services />
        <Offers onBookClick={() => setBookingOpen(true)} />
        <Info />
      </main>
      <SiteFooter />
      <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
    </>
  );
}
