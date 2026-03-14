"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { X, Menu } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Header() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleLogin = () => {
    router.push("/login");
    setOpen(false);
  };

  const handleDashboard = () => {
    router.push("/profile");
    setOpen(false)
  }

  const navLinks = [
    { title: "Pricing", section: "pricing" },
    { title: "Benefits", section: "benefits" },
  ];

  const handleNavClick = (section: string) => {
    router.push(`/?section=${section}`);
    setOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white/70 shadow-sm backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold tracking-tight">
          HubClaw
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <button
              key={link.title}
              onClick={() => handleNavClick(link.section)}
              className="cursor-pointer text-muted-foreground hover:text-foreground text-sm font-medium transition-colors"
            >
              {link.title}
            </button>
          ))}
          <Button onClick={handleLogin} size="sm" className="cursor-pointer">
            Login
          </Button>
          <Button onClick={handleDashboard} size="sm" className="cursor-pointer">
            Dashboard
          </Button>
        </nav>

        {/* Mobile burger */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="rounded-md p-2 transition hover:bg-gray-100"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="w-full bg-white/10 shadow-sm backdrop-blur-sm md:hidden">
          <nav className="flex flex-col gap-4 px-6 py-4">
            {navLinks.map((link) => (
              <button
                key={link.title}
                onClick={() => handleNavClick(link.section)}
                className="text-muted-foreground hover:text-foreground text-left text-base font-medium transition-colors"
              >
                {link.title}
              </button>
            ))}
            <Button onClick={handleLogin} size="sm" className="mt-2 w-full">
              Login
            </Button>
            <Button onClick={handleDashboard} size="sm" className="mt-2 w-full">
              Dashboard
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
