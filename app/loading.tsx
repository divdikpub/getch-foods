import { LoaderCircle } from "lucide-react";

export default function Loading() {
  return (
    <main className="flex justify-center items-center h-[calc(100vh-4rem)]">
      <LoaderCircle className="animate-spin size-16" />
    </main>
  );
}
