"use client"

import { useRouter } from "next/navigation";
import { useAuthStore } from "../store/authStore";
import { useEffect } from "react";

export default function Layout({children}: {children: React.ReactNode}) {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn)
  const router = useRouter()
  
  useEffect(() => {
      if (!isLoggedIn) {
        router.replace("/login")
      }
  }, [isLoggedIn, router])

  return <>{children}</>
}