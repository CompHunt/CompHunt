import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Tone =
  | "brand"
  | "neutral"
  | "green"
  | "amber"
  | "red"
  | "purple"
  | "orange"
  | "indigo"
  | "pink"
  | "fuchsia"
  | "cyan"
  | "teal"
  | "lime"
  | "rose";

const toneClasses: Record<Tone, string> = {
  brand: "bg-brand-50 text-brand-700 dark:bg-brand-500/10 dark:text-brand-300",
  neutral: "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300",
  green: "bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300",
  amber: "bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-300",
  red: "bg-red-50 text-red-700 dark:bg-red-500/10 dark:text-red-300",
  purple: "bg-violet-50 text-violet-700 dark:bg-violet-500/10 dark:text-violet-300",
  orange: "bg-orange-50 text-orange-700 dark:bg-orange-500/10 dark:text-orange-300",
  indigo: "bg-indigo-50 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300",
  pink: "bg-pink-50 text-pink-700 dark:bg-pink-500/10 dark:text-pink-300",
  fuchsia: "bg-fuchsia-50 text-fuchsia-700 dark:bg-fuchsia-500/10 dark:text-fuchsia-300",
  cyan: "bg-cyan-50 text-cyan-700 dark:bg-cyan-500/10 dark:text-cyan-300",
  teal: "bg-teal-50 text-teal-700 dark:bg-teal-500/10 dark:text-teal-300",
  lime: "bg-lime-50 text-lime-700 dark:bg-lime-500/10 dark:text-lime-300",
  rose: "bg-rose-50 text-rose-700 dark:bg-rose-500/10 dark:text-rose-300",
};

export function Badge({
  children,
  tone = "neutral",
  className,
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium whitespace-nowrap",
        toneClasses[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
