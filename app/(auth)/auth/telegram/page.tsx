"use client"

import { useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { useAuthStore } from "../../../store/authStore"

export default function AuthTelegramPage() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const setUser = useAuthStore((state) => state.setUser)
  const hasHydrated = useAuthStore((s) => s.hasHydrated)


  useEffect(() => {
    const user = {
      id: searchParams.get("id"),
      first_name: searchParams.get("first_name"),
      last_name: searchParams.get("last_name"),
      username: searchParams.get("username"),
      photo_url: searchParams.get("photo_url"),
    }

    if (!user.id) return

    setUser(user)

    router.push("/")
  }, [searchParams, router, setUser])

  if (!hasHydrated) return <div>Loading...</div>

  return (
    <div>
      <h1 className="text-red">Telegram auth...</h1>

      WE ARE HERE
    </div>
  )
}