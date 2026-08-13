"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Compass, LayoutDashboard, Menu, Search, Sparkles, X } from "lucide-react";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { ButtonLink } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { OPEN_COMMAND_PALETTE_EVENT } from "@/components/command/CommandPalette";

const navLinks = [
  { href: "/opportunities", label: "Discover", icon: Compass },
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100/80 bg-white/80 backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-950/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 font-semibold text-slate-900 dark:text-slate-50">
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand-gradient text-white shadow-soft">
            <Sparkles className="h-4 w-4" />
          </span>
          <span className="text-[15px]">CompHunt</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href || pathname.startsWith(link.href + "/");
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-sm font-medium transition-colors",
                  active
                    ? "bg-brand-50 text-brand-700 dark:bg-brand-500/10 dark:text-brand-300"
                    : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                )}
              >
                <link.icon className="h-4 w-4" />
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => window.dispatchEvent(new Event(OPEN_COMMAND_PALETTE_EVENT))}
            className="hidden items-center gap-2 rounded-xl border border-slate-200 px-3 py-1.5 text-xs text-slate-400 transition-colors hover:border-brand-200 hover:text-slate-600 sm:flex dark:border-slate-800 dark:hover:border-brand-500/30 dark:hover:text-slate-300"
          >
            <Search className="h-3.5 w-3.5" />
            Search
            <kbd className="rounded border border-slate-200 bg-slate-50 px-1 font-sans dark:border-slate-700 dark:bg-slate-800">
              ⌘K
            </kbd>
          </button>
          <ThemeToggle />
          <ButtonLink href="/onboarding" size="sm" className="hidden sm:inline-flex">
            Get Started
          </ButtonLink>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-slate-500 hover:bg-slate-100 md:hidden dark:text-slate-400 dark:hover:bg-slate-800"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-slate-100 md:hidden dark:border-slate-800"
          >
            <div className="flex flex-col gap-1 px-4 py-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                >
                  <link.icon className="h-4 w-4" />
                  {link.label}
                </Link>
              ))}
              <ButtonLink href="/onboarding" size="sm" className="mt-2" onClick={() => setMobileOpen(false)}>
                Get Started
              </ButtonLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
