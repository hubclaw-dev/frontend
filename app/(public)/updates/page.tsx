import type { Metadata } from "next";
import RecentUpdates from "@/components/RecentUpdates";

export const metadata: Metadata = {
  title: "Recent Updates | Hubclaw",
  description:
    "See the latest changes and improvements to the Hubclaw platform.",
};

export default function UpdatesPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-start pt-20">
      <RecentUpdates />
    </div>
  );
}
