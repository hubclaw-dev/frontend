import { useAuthStore } from "../store/authStore";

const isLoggedIn = useAuthStore((state) => state.isLoggedIn)


export default function Layout({children}: {children: React.ReactNode}) {
  if (!isLoggedIn) {
    return <div>Login required</div>
  }

  return <>{children}</>
}