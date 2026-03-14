"use client";

import { API_PROD } from "@/app/consts";
import { useAuthStore } from "@/app/store/authStore";
import { useEffect, useRef, useState } from "react";

export default function Login() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showLoader, setShowLoader] = useState(true);
  const { isLoggedIn, isHydrated } = useAuthStore();
  const [showButton, setShowButton] = useState(true);

  useEffect(() => {
    if (!isHydrated) return;

    if (isLoggedIn) {
      setShowButton(false);
    }

    const script = document.createElement("script");
    script.src = "https://telegram.org/js/telegram-widget.js?23";
    script.setAttribute("data-telegram-login", "testhubcc_bot");
    script.setAttribute("data-size", "large");
    script.setAttribute("data-auth-url", API_PROD);
    script.setAttribute("data-request-access", "write");
    script.async = true;

    if (containerRef.current) {
      containerRef.current.appendChild(script);
      setShowLoader(false);
    }

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
      document
        .querySelectorAll('iframe[src*="telegram.org"], .tgme_widget')
        .forEach((el) => el.remove());
    };
  }, [showButton, showLoader, isHydrated, isLoggedIn]);

  return (
    <div className="bg-surface flex min-h-screen flex-col items-center justify-center px-6">
      {/* Headline */}
      <h1 className="mb-4 text-center text-4xl font-bold md:text-5xl">
        Welcome Back
      </h1>

      {/* Subheadline */}
      <p className="text-muted-foreground mb-8 max-w-md text-center text-lg md:text-xl">
        Sign in to your HubClaw account and start managing your AI agents
        instantly.
      </p>

      {/* Контейнер для кнопки */}
      {showLoader && <div>loading..</div>}
      {showButton && <div ref={containerRef}></div>}
    </div>
  );
}
