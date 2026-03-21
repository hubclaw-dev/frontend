"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Home,
  Rocket,
  CreditCard,
  Settings,
  MoreHorizontal,
  Menu,
} from "lucide-react";
import { cn } from "@/lib/utils";
// import { TelegramUser } from "@/app/store/authStore";

interface SidebarProps {
  className?: string;
  user: any;
}

export function Sidebar({ className, user }: SidebarProps) {
  const { uid, displayName: first_name, photoURL: photo_url, email } = user;
  const [open, setOpen] = useState(false);

  const NavContent = () => (
    <>
      <div className="border-b border-zinc-800 p-6 text-2xl font-bold">
        HubClaw
      </div>

      <nav className="flex-1 space-y-2 p-4">
        <Link href="/dashboard" onClick={() => setOpen(false)}>
          <Button variant="ghost" className="w-full justify-start">
            <Home className="mr-2 h-4 w-4" />
            Dashboard
          </Button>
        </Link>
        <Link href="" onClick={() => setOpen(false)}>
          <Button variant="ghost" className="w-full justify-start">
            <Rocket className="mr-2 h-4 w-4" />
            Deploy
          </Button>
        </Link>
      </nav>

      <div className="space-y-4 border-t border-zinc-800 p-4">
        <Button variant="ghost" className="w-full justify-start">
          <CreditCard className="mr-2 h-4 w-4" />
          Billing
        </Button>
        <Button variant="ghost" className="w-full justify-start">
          <Settings className="mr-2 h-4 w-4" />
          Account settings
        </Button>
      </div>

      <div className="grid">
        <div className="flex items-center gap-3 border-t border-zinc-800 p-4">
          <Avatar className="h-10 w-10">
            {photo_url && (
              <AvatarImage
                src={photo_url}
                alt={first_name || undefined}
                className="object-cover"
              />
            )}
            <AvatarFallback className="bg-zinc-700 text-white">
              A
            </AvatarFallback>
          </Avatar>

          <div className="flex-1">
            {first_name ? (
              <p className="text-sm font-medium">{first_name}</p>
            ) : (
              <p className="text-xs font-medium">{email}</p>
            )}
          </div>
          <Button variant="ghost" size="icon">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>
        {/* <div className="p-4">{id}</div>

        <div className="p-4">{last_name}</div>

        <div className="p-4">{username}</div>

        <div className="p-4">{auth_date}</div> */}

        {/* <div className="p-4">{hash}</div> */}
      </div>
    </>
  );

  return (
    <>
      {/* Мобильная версия — бургер */}
      <div className={cn("lg:hidden", className)}>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="fixed top-4 left-4 z-50"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="w-72 border-r border-zinc-800 bg-zinc-950 p-0"
          >
            <div className="flex h-full flex-col text-white">
              <NavContent />
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Десктопная версия — всегда видимая слева */}
      <div
        className={cn(
          "fixed top-0 left-0 hidden h-screen flex-col border-r border-zinc-800 bg-zinc-950 text-white lg:flex lg:w-64",
          className,
        )}
      >
        <NavContent />
      </div>
    </>
  );
}
