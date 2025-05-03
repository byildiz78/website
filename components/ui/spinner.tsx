import { cn } from "@/lib/utils";

interface SpinnerProps {
  className?: string;
}

export function Spinner({ className }: SpinnerProps) {
  return (
    <div className={cn("fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50", className)}>
      <div className="w-8 h-8 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
    </div>
  );
}