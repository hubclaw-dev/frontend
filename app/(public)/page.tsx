"use client"

import Link from "next/link";
import { useAuthStore } from "../store/authStore";

export default function Home() {
    const user = useAuthStore((state) => state.user)
    const isLoggedIn = useAuthStore((state) => state.isLoggedIn)
    const hasHydrated = useAuthStore((s) => s.hasHydrated)


  if (!hasHydrated) {
    return <div>Loading...</div>
  }


  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4 px-10">

      <h1 className="text-4xl font-bold">Hubclaw</h1>
      <p className="text-2xl text-center">AI Agents That Actually Get Things Done</p>
      
      {!isLoggedIn && <Link href="/login"
        className="cursor-pointer rounded-xl bg-red-500 p-2 text-white transition-transform transform active:scale-110"
      >
        Login
      </Link>}

      <div>
        <p>{user?.first_name}</p>
        <p>@{user?.username}</p>
        <p>{user?.id}</p>
        <p>{user?.last_name}</p>
        <p>logged or not {isLoggedIn}</p>
      </div>
      
    </div>
  );
}
