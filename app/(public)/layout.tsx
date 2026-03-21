"use client"

import Header from "@/components/ui/Header";
import { useAuthStore } from "../store/authStore";
import Loading from "@/components/ui/Loading";

export default function Layout({ children }: { children: React.ReactNode }) {
  const isHydrated = useAuthStore((s) => s.isHydrated);

  if (!isHydrated) {
    return <Loading />
  }

  return (
    <>
      <Header />
      <main className="pt-20">{children}</main>
    </>
  );
}
