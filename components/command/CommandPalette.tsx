"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Search, CornerDownLeft, Compass, LayoutDashboard, Sparkles } from "lucide-react";
import { opportunities } from "@/data/opportunities";
import { cn } from "@/lib/utils";

export const OPEN_COMMAND_PALETTE_EVENT = "open-command-palette";

interface Suggestion {
  type: "page" | "opportunity";
  label: string;
  sublabel?: string;
  href: string;
}

const staticPages: Suggestion[] = [
  { type: "page", label: "Discover Opportunities", sublabel: "Browse & filter all programs", href: "/opportunities" },
  { type: "page", label: "Dashboard", sublabel: "Saved, recent, and recommended", href: "/dashboard" },
  { type: "page", label: "Take the Quiz", sublabel: "Personalize your recommendations", href: "/onboarding" },
];

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
      if (e.key === "Escape") setOpen(false);
    }
    function handleOpenEvent() {
      setOpen(true);
    }
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener(OPEN_COMMAND_PALETTE_EVENT, handleOpenEvent);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener(OPEN_COMMAND_PALETTE_EVENT, handleOpenEvent);
    };
  }, []);

  useEffect(() => {
    if (open) {
      setQuery("");
      setActiveIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const results = useMemo<Suggestion[]>(() => {
    const q = query.trim().toLowerCase();
    if (!q) return staticPages;

    const matchedPages = staticPages.filter((p) => p.label.toLowerCase().includes(q));
    const matchedOpportunities = opportunities
      .filter(
        (o) =>
          o.title.toLowerCase().includes(q) ||
          o.organizer.toLowerCase().includes(q) ||
          o.category.toLowerCase().includes(q) ||
          o.tags.some((t) => t.toLowerCase().includes(q))
      )
      .slice(0, 8)
      .map<Suggestion>((o) => ({
        type: "opportunity",
        label: o.title,
        sublabel: `${o.category} · ${o.organizer}`,
        href: `/opportunities/${o.slug}`,
      }));

    return [...matchedPages, ...matchedOpportunities];
  }, [query]);

  function navigate(href: string) {
    setOpen(false);
    router.push(href);
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-start justify-center bg-slate-900/40 px-4 pt-24 backdrop-blur-sm dark:bg-black/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setOpen(false)}
        >
          <motion.div
            className="w-full max-w-xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft-lg dark:border-slate-800 dark:bg-slate-900"
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.15 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 border-b border-slate-100 px-4 py-3 dark:border-slate-800">
              <Search className="h-4 w-4 shrink-0 text-slate-400" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setActiveIndex(0);
                }}
                onKeyDown={(e) => {
                  if (e.key === "ArrowDown") {
                    e.preventDefault();
                    setActiveIndex((i) => Math.min(i + 1, results.length - 1));
                  } else if (e.key === "ArrowUp") {
                    e.preventDefault();
                    setActiveIndex((i) => Math.max(i - 1, 0));
                  } else if (e.key === "Enter" && results[activeIndex]) {
                    navigate(results[activeIndex].href);
                  }
                }}
                placeholder="Search opportunities, categories, or pages…"
                className="w-full bg-transparent text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none dark:text-slate-100"
              />
              <kbd className="hidden shrink-0 rounded-md border border-slate-200 bg-slate-50 px-1.5 py-0.5 text-[10px] font-medium text-slate-400 sm:block dark:border-slate-700 dark:bg-slate-800">
                ESC
              </kbd>
            </div>

            <div className="max-h-80 overflow-y-auto p-2">
              {results.length === 0 && (
                <p className="px-3 py-6 text-center text-sm text-slate-400">No matches found.</p>
              )}
              {results.map((r, i) => (
                <button
                  key={`${r.type}-${r.href}`}
                  onClick={() => navigate(r.href)}
                  onMouseEnter={() => setActiveIndex(i)}
                  className={cn(
                    "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-colors",
                    activeIndex === i ? "bg-brand-50 dark:bg-brand-500/10" : "hover:bg-slate-50 dark:hover:bg-slate-800/60"
                  )}
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white text-brand-500 shadow-soft dark:bg-slate-800">
                    {r.type === "page" ? (
                      r.label.includes("Dashboard") ? (
                        <LayoutDashboard className="h-4 w-4" />
                      ) : r.label.includes("Quiz") ? (
                        <Sparkles className="h-4 w-4" />
                      ) : (
                        <Compass className="h-4 w-4" />
                      )
                    ) : (
                      <Search className="h-4 w-4" />
                    )}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-sm font-medium text-slate-800 dark:text-slate-100">
                      {r.label}
                    </span>
                    {r.sublabel && (
                      <span className="block truncate text-xs text-slate-400">{r.sublabel}</span>
                    )}
                  </span>
                  {activeIndex === i && <CornerDownLeft className="h-3.5 w-3.5 shrink-0 text-slate-300" />}
                </button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
