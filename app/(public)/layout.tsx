import { Header } from "@/shared/components/ui/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="">{children}</main>
    </>
  );
}
