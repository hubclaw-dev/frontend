"use client"

import Hero from "@/components/ui/Landing/HeroSection";
import SkillsSection from "@/components/ui/Landing/SkillsSection";
import PainSection from "@/components/ui/Landing/PainSection";
import HowItWorks from "@/components/ui/Landing/HowItWorks";
import PricingSection from "@/components/ui/Landing/Pricing";
import TestimonialsSection from "@/components/ui/Landing/Testimonials";
import FooterCTA from "@/components/ui/Landing/Footer";
import { useSearchParams } from "next/navigation"
import { useEffect } from "react";

export default function Home() {
      const searchParams = useSearchParams()


  const section = searchParams.get("section")

  useEffect(() => {
    if (section) {
      const el = document.getElementById(section)
      if (el) el.scrollIntoView({ behavior: "smooth" })
    }
  }, [section])

  return (
    <div className="max-h-screen">
      <Hero />
      <SkillsSection id="benefits" />
      <PainSection />
      <HowItWorks />
      <PricingSection id="pricing" />
      <TestimonialsSection />
      <FooterCTA />
    </div>
  );
}
