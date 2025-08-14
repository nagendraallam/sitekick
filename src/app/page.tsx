"use client";

import Hero from "@/components/homepage/Hero";
import Features from "@/components/homepage/Features";
import Pricing from "@/components/homepage/Pricing";
import ContactUs from "@/components/homepage/ContactUs";
import Head from "next/head";

// Main Page Component
export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <Pricing />
      <ContactUs />
    </div>
  );
}
