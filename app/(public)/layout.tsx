"use client";

import Header from "@/shared/components/ui/Header";
import { useAuthStore } from "../store/authStore";
import Loading from "@/shared/components/ui/Loading";

export default function Layout({ children }: { children: React.ReactNode }) {
  const isHydrated = useAuthStore((s) => s.isHydrated);

  if (!isHydrated) {
    return <Loading />;
  }

  return (
    <>
      <Header />
      <main className="">{children}</main>
    </>
  );
}
