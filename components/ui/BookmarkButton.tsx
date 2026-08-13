"use client";

import { useState } from "react";
import { Bookmark } from "lucide-react";
import { useAppState } from "@/context/AppStateContext";
import { cn } from "@/lib/utils";

export function BookmarkButton({
  slug,
  size = "md",
  className,
}: {
  slug: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const { isSaved, toggleSaved } = useAppState();
  const [popping, setPopping] = useState(false);
  const saved = isSaved(slug);

  const dims = { sm: "h-8 w-8", md: "h-10 w-10", lg: "h-12 w-12" }[size];
  const iconSize = { sm: "h-4 w-4", md: "h-4 w-4", lg: "h-5 w-5" }[size];

  return (
    <button
      type="button"
      aria-pressed={saved}
      aria-label={saved ? "Remove from saved opportunities" : "Save opportunity"}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleSaved(slug);
        setPopping(true);
        setTimeout(() => setPopping(false), 400);
      }}
      className={cn(
        "inline-flex items-center justify-center rounded-full border transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400",
        saved
          ? "border-brand-200 bg-brand-50 text-brand-600 dark:border-brand-500/30 dark:bg-brand-500/10 dark:text-brand-300"
          : "border-slate-200 bg-white text-slate-400 hover:text-brand-500 hover:border-brand-200 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-500",
        dims,
        className
      )}
    >
      <Bookmark
        className={cn(iconSize, popping && "animate-pop", saved && "fill-current")}
      />
    </button>
  );
}
