"use client";

import { useRouter } from "next/navigation";
import { useAuthStore } from "../store/authStore";
import { useEffect, useState } from "react";
import Loading from "@/components/ui/Loading";
import { auth } from "@/firebase";
import { useAuth } from "@/hooks/useAuth";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { isLoggedIn, isHydrated } = useAuthStore();
  const { user: userAuth, loading } = useAuth();
  const router = useRouter();
  const [isEmailCheckDone, setIsEmailCheckDone] = useState(false);

  useEffect(() => {
    if (!isHydrated || loading) {
      return;
    }

    if (!isLoggedIn || !userAuth) {
      router.replace("/login");
      return;
    }

    let isMounted = true;

    // TODO: create a hook
    (async () => {
      try {
        await userAuth.reload();
        if (isMounted) {
          if (!auth.currentUser?.emailVerified) {
            router.replace("/verify-email");
          }
          setIsEmailCheckDone(true);
        }
      } catch (err) {
        console.error("error when reloading", err);
        if (isMounted) {
          router.replace("/verify-email");
          setIsEmailCheckDone(true);
        }
      }
    })();

    return () => {
      isMounted = false;
    };
  }, [isHydrated, loading, isLoggedIn, userAuth, router]);

  if (!isHydrated || loading || !isEmailCheckDone) {
    return <Loading />;
  }

  return <>{children}</>;
}
