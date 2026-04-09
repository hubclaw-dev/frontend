import type { Metadata } from "next";
import "./globals.css";
import "../firebase";

export const metadata: Metadata = {
  title: "Hubclaw | AI Agents That Actually Get Things Done",
  description:
    "HubClaw AI agents research, decide, and execute tasks on their own. Just brief your agent in Telegram and it handles the rest — no prompts, no technical setup. Try your agent for free.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
