"use client";

import { useAuthStore } from "@/app/store/authStore";
import { Button } from "@/shared/components/ui/button";
import { ActiveBotsTable } from "@/shared/components/ui/Dashboard/ActiveBotsTable";
import { AnalyticsChart } from "@/shared/components/ui/Dashboard/AnalyticsChart";
import { MetricsCards } from "@/shared/components/ui/Dashboard/MetricsCards/Index";
import { Sidebar } from "@/shared/components/ui/Dashboard/Sidebar";
import { Plus } from "lucide-react";

const userInitial = {
  uid: "1",
  displayName: "Alex",
  photoURL: null,
  email: "test@mail.com",
};

export default function DashboardPage() {
  const userState = useAuthStore((state) => state.user);
  // const user = userState ?? userInitial;
  console.log("userstate :: ", userState);

  return (
    <div className="flex min-h-screen bg-zinc-50">
      <Sidebar user={userState} />

      <div className="flex-1 lg:ml-64">
        <header className="sticky top-0 z-40 border-b bg-zinc-50 px-4 py-4 sm:px-6 sm:py-5 lg:px-8 lg:py-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <h1 className="ml-12 text-2xl font-bold sm:text-3xl lg:ml-0">
              Dashboard / Analytics
            </h1>
            <Button className="w-full bg-black hover:bg-black/90 sm:w-auto">
              <Plus className="mr-2 h-4 w-4" />
              Create new bot
            </Button>
          </div>
        </header>

        <main className="space-y-6 p-4 sm:p-6 lg:space-y-8 lg:p-8">
          <MetricsCards />
          <AnalyticsChart />
          <ActiveBotsTable />
        </main>
      </div>
    </div>
  );
}
