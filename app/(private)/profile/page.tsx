"use client";

import { useAuthStore } from "@/app/store/authStore";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import Image from "next/image";

export default function ProfilePage() {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);

  // TODO: create separated function for date formating
  const authDateFormatted = user?.auth_date
    ? new Date(Number(user.auth_date) * 1000).toLocaleString("en-EN", {
        dateStyle: "medium",
        timeStyle: "short",
      })
    : null;

  return (
    <div className="bg-surface flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center">
      {/* Headline */}
      <h1 className="text-4xl font-bold">Profile</h1>

      {/* User info */}
      {user ? (
        <div className="flex w-full max-w-md flex-col items-center gap-3">
          {user.photo_url && (
            <Image
              src={user.photo_url}
              alt={user.first_name || "User"}
              width={96}
              height={96}
              className="rounded-full object-cover"
              unoptimized
            />
          )}

          <div className="space-y-1">
            <p className="text-xl font-medium">
              {user.first_name} {user.last_name}
            </p>
            <p className="text-muted-foreground">@{user.username}</p>
            <p className="text-muted-foreground text-sm">ID: {user.id}</p>
          </div>

          <div className="bg-card mt-4 w-full rounded-lg border p-4 text-left text-sm">
            <h3 className="text-muted-foreground mb-2 font-semibold">
              Telegram Auth Data
            </h3>
            <div className="grid grid-cols-[auto,1fr] gap-x-4 gap-y-1.5">
              <span className="text-muted-foreground">Auth Date:</span>
              <span>{authDateFormatted || "—"}</span>

              <span className="text-muted-foreground">Hash:</span>
              <span className="text-muted-foreground/80 font-mono text-xs break-all">
                {user.hash || "—"}
              </span>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-4">
          <p className="text-muted-foreground">Login required.</p>
          <Spinner className="text-primary h-12 w-12" />
        </div>
      )}

      {/* Logout button */}
      {user && (
        <Button
          variant="destructive"
          size="lg"
          className="mt-6"
          onClick={() => logout()}
        >
          Logout
        </Button>
      )}
    </div>
  );
}
