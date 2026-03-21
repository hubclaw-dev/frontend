import { create } from "zustand";
import { persist } from "zustand/middleware";
import { User } from "firebase/auth"

interface AuthState {
  user: User | null;
  isLoggedIn: boolean;
  isHydrated: boolean;
  setUser: (user: User | null) => void;
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
          isLoggedIn: !!user?.uid,
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
