"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { X, Menu } from "lucide-react"
import { useRouter } from "next/navigation"

export default function Header() {
  const [open, setOpen] = useState(false)
  const router = useRouter()

  const handleLogin = () => {
    router.push("/login")
    setOpen(false)
  }

  const navLinks = [
    { title: "Pricing", section: "pricing" },
    { title: "Benefits", section: "benefits" },
  ]

  const handleNavClick = (section: string) => {
    router.push(`/?section=${section}`)
    setOpen(false)
  }

  return (
    <header className="w-full fixed top-0 left-0 z-50
  bg-white/70
  backdrop-blur-sm
  shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <a href="/" className="text-2xl font-bold tracking-tight">
          HubClaw
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link.title}
              onClick={() => handleNavClick(link.section)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.title}
            </button>
          ))}
          <Button onClick={handleLogin} size="sm" className="cursor-pointer">Login</Button>
        </nav>

        {/* Mobile burger */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="p-2 rounded-md hover:bg-gray-100 transition"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white/10 w-full backdrop-blur-sm shadow-sm">
          <nav className="flex flex-col gap-4 px-6 py-4">
            {navLinks.map((link) => (
              <button
                key={link.title}
                onClick={() => handleNavClick(link.section)}
                className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors text-left"
              >
                {link.title}
              </button>
            ))}
            <Button onClick={handleLogin} size="sm" className="w-full mt-2">
              Login
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}