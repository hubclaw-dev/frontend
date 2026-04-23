"use client";

import { TryFreeHeroSection } from "./components/try-free-hero";
import { SeeInActionSection } from "./components/see-in-action";
import { LearnTheRest } from "./components/learn-the-rest";
import { ThreeSteps } from "./components/three-steps";
import { FaqBlock } from "./components/faq-block";
import { FreeTrialBlock } from "./components/free-trials-block";
import { Footer } from "./components/footer";
import TestimonialSlider from "./components/reviews";
import { PricesBlock } from "./components/prices-block";
import { ScrollToSection } from "./components/scroll-component";
import { Suspense } from "react";

export function LandingPage() {
  return (
    <div className="max-h-screen w-full overflow-x-hidden overscroll-x-none">
      <Suspense fallback={null}>
        <ScrollToSection />
      </Suspense>

      <TryFreeHeroSection id="hero" />
      <SeeInActionSection id="use-cases" />
      <LearnTheRest id="how-it-works" />
      <ThreeSteps />
      <PricesBlock id="pricing" />
      <FaqBlock id="faq" />
      <TestimonialSlider />
      <FreeTrialBlock />
      <Footer />
    </div>
  );
}
