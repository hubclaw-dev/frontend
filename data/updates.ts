export interface Update {
  id: string;
  date: string;
  title: string;
  description: string;
  tag: string;
}

export const updates: Update[] = [
  {
    id: "telegram-auth",
    date: "2026-03-14",
    title: "Telegram Authorization",
    description:
      "Added authorization through Telegram, allowing users to sign in using their Telegram account for a seamless onboarding experience.",
    tag: "auth",
  },
  {
    id: "login-page",
    date: "2026-03-14",
    title: "Login Page",
    description:
      "Introduced the /login route with a dedicated login page where users can authenticate before accessing protected areas of the app.",
    tag: "route",
  },
  {
    id: "public-pages",
    date: "2026-03-14",
    title: "Public Pages",
    description:
      "Added the /public route to serve publicly accessible content that does not require authentication.",
    tag: "route",
  },
];
