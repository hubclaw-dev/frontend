"use client"

import { useAuthStore } from "@/app/store/authStore"
import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/ui/spinner"
import Image from "next/image"

export default function ProfilePage() {
  const user = useAuthStore((state) => state.user)
  const logout = useAuthStore((state) => state.logout)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-surface text-center gap-6">
      {/* Headline */}
      <h1 className="text-4xl font-bold">Profile</h1>

      {/* User info */}
      {user ? (
        <div className="flex flex-col items-center gap-2">
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
          <p className="text-lg font-medium">{user.first_name} {user.last_name}</p>
          <p className="text-sm text-muted-foreground">@{user.username}</p>
          <p className="text-sm text-muted-foreground">ID: {user.id}</p>
        </div>
      ) : (
        <>
          <p className="text-muted-foreground">Login required.</p>
          <Spinner className="w-12 h-12 text-primary" />
        </>
      )}

      {/* Logout button */}
      {user && (
        <Button
          variant="destructive"
          size="lg"
          className="mt-4"
          onClick={() => logout()}
        >
          Logout
        </Button>
      )}
    </div>
  )
}