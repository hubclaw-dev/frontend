import { create } from "zustand"
import { persist } from "zustand/middleware"

interface TelegramUser {
  id: string | null
  first_name: string | null
  last_name: string | null
  username: string | null
  photo_url: string | null
}

interface AuthState {
  user: TelegramUser | null
  isLoggedIn: boolean
  hasHydrated: boolean
  setUser: (user: TelegramUser) => void
  logout: () => void
  setHasHydrated: (state: boolean) => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isLoggedIn: false,
      hasHydrated: false,

      setUser: (user) =>
        set({
          user,
          isLoggedIn: true,
        }),

      logout: () =>
        set({
          user: null,
          isLoggedIn: false,
        }),

      setHasHydrated: (state) =>
        set({
          hasHydrated: state,
        }),
    }),
    {
      name: "auth-storage",

      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true)
      },
    }
  )
)