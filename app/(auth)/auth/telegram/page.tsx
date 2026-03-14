"use client";

import { Suspense, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuthStore } from "../../../store/authStore";
import Loading from "@/components/ui/Loading";

export default function AuthTelegramPage() {
  return (
    <Suspense fallback={<Loading />}>
      <AuthTelegramInner />
    </Suspense>
  );
}

function AuthTelegramInner() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const setUser = useAuthStore((state) => state.setUser);

  useEffect(() => {
    const user = {
      id: searchParams.get("id"),
      first_name: searchParams.get("first_name"),
      last_name: searchParams.get("last_name"),
      username: searchParams.get("username"),
      photo_url: searchParams.get("photo_url"),
    };

    if (!user.id) return;

    setUser(user);
    console.log(user);

    router.push("/profile");
  }, [searchParams, router, setUser]);

  return <Loading />;
}
