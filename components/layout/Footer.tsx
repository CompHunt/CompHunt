import Link from "next/link";
import { Sparkles } from "lucide-react";

const columns = [
  {
    title: "Explore",
    links: [
      { label: "Discover Opportunities", href: "/opportunities" },
      { label: "Dashboard", href: "/dashboard" },
      { label: "Take the Quiz", href: "/onboarding" },
    ],
  },
  {
    title: "Categories",
    links: [
      { label: "STEM & Research", href: "/opportunities?category=STEM" },
      { label: "Business", href: "/opportunities?category=Business" },
      { label: "Summer Programs", href: "/opportunities?category=Summer+Programs" },
      { label: "Scholarships", href: "/opportunities?category=Scholarships" },
    ],
  },
  {
    title: "About",
    links: [
      { label: "How It Works", href: "/#how-it-works" },
      { label: "FAQ", href: "/#faq" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-slate-50/60 dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <Link href="/" className="flex items-center gap-2 font-semibold text-slate-900 dark:text-slate-50">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand-gradient text-white">
                <Sparkles className="h-4 w-4" />
              </span>
              <span className="text-[15px]">CompHunt</span>
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate-500 dark:text-slate-400">
              Helping students discover the competitions, programs, and scholarships that fit who they are.
            </p>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100">{col.title}</h4>
              <ul className="mt-3 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-500 transition-colors hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-6 text-xs text-slate-400 sm:flex-row dark:border-slate-800">
          <p>© {new Date().getFullYear()} CompHunt. A student project prototype.</p>
          <p>Created by Reyaansh Agarwal</p>
        </div>
      </div>
    </footer>
  );
}
