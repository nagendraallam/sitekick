"use client";

import Hero from "@/components/homepage/Hero";
import EasyIntegration from "@/components/homepage/EasyIntegration";
import Features from "@/components/homepage/Features";
import Pricing from "@/components/homepage/Pricing";
import ContactUs from "@/components/homepage/ContactUs";
import Head from "next/head";

// Main Page Component
export default function Home() {
  return (
    <div>
      <Hero />
      <EasyIntegration />
      <Features />
      <Pricing />
      <ContactUs />
    </div>
  );
}
