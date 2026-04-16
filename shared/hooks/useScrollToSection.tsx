"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export function useScrollToSection() {
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
