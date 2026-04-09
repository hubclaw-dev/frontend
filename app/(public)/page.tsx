"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { LandingPage } from "@/modules/landing-page/lading-page";

// TODO: create a hook
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
    <div>
      <LandingPage />
    </div>
  );
}
