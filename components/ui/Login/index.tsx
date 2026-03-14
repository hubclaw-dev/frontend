"use client"

import { API_PROD } from "@/app/consts"
import { useEffect, useRef, useState } from "react"

export default function Login() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [showLoader, setShowLoader] = useState(true)

  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://telegram.org/js/telegram-widget.js?23"
    script.setAttribute("data-telegram-login", "testhubcc_bot")
    script.setAttribute("data-size", "large")
    script.setAttribute(
      "data-auth-url",
      API_PROD
    )
    script.setAttribute("data-request-access", "write")
    script.async = true

    if (containerRef.current) {
      containerRef.current.appendChild(script)
      setShowLoader(false)
    }

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = ""
      }
      document.querySelectorAll('iframe[src*="telegram.org"], .tgme_widget').forEach(el => el.remove())
    }
  }, [showLoader])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-surface">
      
      {/* Headline */}
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
        Welcome Back
      </h1>

      {/* Subheadline */}
      <p className="text-lg md:text-xl text-muted-foreground text-center mb-8 max-w-md">
        Sign in to your HubClaw account and start managing your AI agents instantly.
      </p>

      {/* Контейнер для кнопки */}
      {showLoader && <div>loading..</div>}
      <div ref={containerRef}></div>
    </div>
  )
}