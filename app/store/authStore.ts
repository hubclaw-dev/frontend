import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface TelegramUser {
  id: string | null;
  first_name: string | null;
  last_name: string | null;
  username: string | null;
  photo_url: string | null;
  auth_date: string | null;
  hash: string | null;
}

interface AuthState {
  user: TelegramUser | null;
  isLoggedIn: boolean;
  isHydrated: boolean;
  setUser: (user: TelegramUser) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isLoggedIn: false,
      isHydrated: false,

      setUser: (user) =>
        set({
          user,
          isLoggedIn: !!user?.id,
          isHydrated: true,
        }),

      logout: () =>
        set({
          user: null,
          isLoggedIn: false,
          isHydrated: true,
        }),
    }),
    {
      name: "auth-storage",
      onRehydrateStorage: () => {
        console.log("starting hydration...");

        return (state, error) => {
          if (error) {
            console.error("hydration fail Zustand:", error);
            return;
          }

          if (state) {
            console.log("hydration is over, state:", state);
            state.isHydrated = true;
          }
        };
      },
    },
  ),
);
