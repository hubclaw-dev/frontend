"use client";

import Hero from "@/components/ui/Landing/HeroSection";
import SkillsSection from "@/components/ui/Landing/SkillsSection";
import PainSection from "@/components/ui/Landing/PainSection";
import HowItWorks from "@/components/ui/Landing/HowItWorks";
import PricingSection from "@/components/ui/Landing/Pricing";
import TestimonialsSection from "@/components/ui/Landing/Testimonials";
import FooterCTA from "@/components/ui/Landing/Footer";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";

function ScrollHandler() {
  const searchParams = useSearchParams();
  const section = searchParams.get("section");

  useEffect(() => {
    if (section) {
      const el = document.getElementById(section);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, [section]);

  return null;
}

export default function Home() {
  return (
    <div className="max-h-screen">
      <Hero />
      <SkillsSection id="benefits" />
      <PainSection />
      <HowItWorks />
      <PricingSection id="pricing" />
      <TestimonialsSection />
      <FooterCTA />

      <Suspense fallback={<div className="h-10" />}>
        <ScrollHandler />
      </Suspense>
    </div>
  );
}
