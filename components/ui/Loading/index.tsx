import { Spinner } from "@/components/ui/spinner";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/70">
      <Spinner className="text-primary h-12 w-12" />
    </div>
  );
}
