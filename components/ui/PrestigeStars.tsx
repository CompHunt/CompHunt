import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export function PrestigeStars({ prestige, className }: { prestige: number; className?: string }) {
  return (
    <div className={cn("flex items-center gap-0.5", className)} title={`Prestige: ${prestige}/5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={cn(
            "h-3.5 w-3.5",
            i < prestige
              ? "fill-amber-400 text-amber-400"
              : "fill-transparent text-slate-300 dark:text-slate-700"
          )}
        />
      ))}
    </div>
  );
}
