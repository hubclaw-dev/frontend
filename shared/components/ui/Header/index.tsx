"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/app/store/authStore";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { CTAButton } from "../Button/cta-button";
import Image from "next/image";
import Logo from "@/public/logo.svg";

const NAV_LINKS = [
  { title: "Use Cases", section: "use-cases" },
  { title: "How it works", section: "how-it-works" },
  { title: "Pricing", section: "pricing" },
  { title: "FAQ", section: "faq" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const isHydrated = useAuthStore((state) => state.isHydrated);

  const handleLogin = () => {
    router.push("/login");
    setOpen(false);
  };

  const handleNavClick = (section: string) => {
    router.push(`/?section=${section}`);
    setOpen(false);
  };

  const handleDashboardClick = () => {
    router.push("/dashboard");
  };

  if (!isHydrated) {
    return null;
  }

  return (
    <header className="fixed top-0 left-0 z-50 w-full px-[16px] pt-[8px] md:px-[24px] md:pt-[12px]">
      <div
        className={cn(
          "mx-auto flex max-h-[48px] max-w-[1520px] items-center justify-between overflow-hidden rounded-[12px] px-[16px] py-[9px] shadow-lg backdrop-blur-lg md:max-h-[67px] md:px-[24px] md:py-[12px]",
          open && "rounded-b-none",
        )}
      >
        {/* Logo */}
        <div className="h-[28px] w-[66px] lg:h-[40px] lg:w-[94px]">
          <Link href="/" className="font-bold tracking-tight">
            <Image src={Logo} alt="logo" />
          </Link>
        </div>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-[32px] lg:flex">
          {NAV_LINKS.map((link) => (
            <button
              key={link.title}
              onClick={() => handleNavClick(link.section)}
              className="cursor-pointer text-[16px] leading-[120%] font-medium tracking-[-0.04em]"
            >
              {link.title}
            </button>
          ))}
        </nav>

        {/* TODO: create cursor for every button in globalcss */}
        <div className="flex gap-[12px]">
          {isLoggedIn && (
            <button
              onClick={handleDashboardClick}
              className="max-h-[30px] cursor-pointer rounded-[8px] border border-[1px] border-[#0D8AF226] px-[12px] py-[8px] text-center text-[10px] leading-[100%] font-bold tracking-[-0.02em] text-[#0D8AF2] md:max-h-[43px] md:px-[40px] md:py-[12px] md:text-[14px] lg:rounded-[12px] lg:px-[24px]"
            >
              Dashboard
            </button>
          )}

          {!isLoggedIn && (
            <button className="max-h-[30px] cursor-pointer rounded-[8px] border border-[1px] border-[#0D8AF226] px-[12px] py-[8px] text-center text-[10px] leading-[100%] font-bold tracking-[-0.02em] text-[#0D8AF2] md:max-h-[43px] md:px-[40px] md:py-[12px] md:text-[14px] lg:rounded-[12px] lg:px-[24px]">
              Try for free
            </button>
          )}

          {!isLoggedIn && (
            <button
              onClick={handleLogin}
              className="hidden max-h-[30px] cursor-pointer rounded-[8px] border border-[1px] border-[#0D8AF226] px-[12px] py-[8px] text-center text-[10px] leading-[100%] font-bold tracking-[-0.02em] text-[#0D8AF2] md:max-h-[43px] md:px-[40px] md:py-[12px] md:text-[14px] lg:block lg:rounded-[12px] lg:px-[24px]"
            >
              Login
            </button>
          )}

          {/* Mobile burger */}
          <div className="flex items-center justify-center lg:hidden">
            <button
              className="flex h-[24px] w-[24px] items-center justify-center p-4"
              onClick={() => setOpen(!open)}
            >
              <div className="grid grid-rows-3 gap-[3px]">
                <div className="h-[2px] w-[18px] rounded-[100px] bg-[#333333]"></div>
                <div className="h-[2px] w-[18px] rounded-[100px] bg-[#333333]"></div>
                <div className="h-[2px] w-[18px] rounded-[100px] bg-[#333333]"></div>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="w-full rounded-b-[12px] shadow-lg backdrop-blur-lg lg:hidden">
          <nav className="flex flex-col gap-4 px-[16px] py-[32px]">
            {NAV_LINKS.map((link) => (
              <button
                key={link.title}
                onClick={() => handleNavClick(link.section)}
                className="text-[16px] leading-[120%] font-medium tracking-[-0.04em]"
              >
                {link.title}
              </button>
            ))}
          </nav>

          {!isLoggedIn && (
            <div className="flex w-full justify-center px-[16px] pb-[16px]">
              <CTAButton text="Log in" classNames="text-[10px] w-full" />
            </div>
          )}
        </div>
      )}
    </header>
  );
}
