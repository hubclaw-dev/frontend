"use client";

import { useRouter } from "next/navigation";
import { useAuthStore } from "../store/authStore";
import { useEffect } from "react";
import Loading from "@/components/ui/Loading";

export default function Layout({ children }: { children: React.ReactNode }) {
  const {isLoggedIn, isHydrated} = useAuthStore();
  const router = useRouter();

  useEffect(() => {

    if (!isHydrated) {
      return;
    }

    if (!isLoggedIn) {
      router.replace("/login");
    }
  }, [isHydrated, isLoggedIn, router]);

  if (!isHydrated) {
    return (
      <Loading />
    );
  }

  if (!isLoggedIn) {
    return null;
  }

  return <>{children}</>;
}
