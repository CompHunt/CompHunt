"use client";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Search, SlidersHorizontal, X, Compass } from "lucide-react";
import { opportunities } from "@/data/opportunities";
import { useAppState } from "@/context/AppStateContext";
import { getRecommendations } from "@/lib/matching";
import { daysRemaining } from "@/lib/utils";
import { OpportunityCard } from "@/components/opportunities/OpportunityCard";
import { FilterPanel, Filters, DEFAULT_FILTERS, getOpensMonth } from "@/components/opportunities/FilterPanel";
import { SkeletonCard } from "@/components/ui/SkeletonCard";
import { EmptyState } from "@/components/ui/EmptyState";
import { Category } from "@/lib/types";

const countries = Array.from(new Set(opportunities.map((o) => o.country))).sort();
const grades = Array.from(new Set(opportunities.flatMap((o) => o.gradeLevels))).sort((a, b) => a - b);

function OpportunitiesContent() {
  const searchParams = useSearchParams();
  const { profile, hydrated } = useAppState();
  const [search, setSearch] = useState("");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [filters, setFilters] = useState<Filters>(() => {
    const categoryParam = searchParams.get("category");
    return categoryParam ? { ...DEFAULT_FILTERS, category: categoryParam as Category } : DEFAULT_FILTERS;
  });

  const hasProfileSignal = profile.interests.length > 0 || profile.opportunityTypes.length > 0;

  const results = useMemo(() => {
    const q = search.trim().toLowerCase();

    let filtered = opportunities.filter((o) => {
      if (q) {
        const haystack = `${o.title} ${o.organizer} ${o.category} ${o.tags.join(" ")}`.toLowerCase();
        if (!haystack.includes(q)) return false;
      }
      if (filters.category !== "All" && o.category !== filters.category) return false;
      if (filters.country !== "All" && o.country !== filters.country) return false;
      if (filters.difficulty !== "All" && o.difficulty !== filters.difficulty) return false;
      if (filters.cost !== "All" && o.cost !== filters.cost) return false;
      if (filters.grade !== "All" && !o.gradeLevels.includes(Number(filters.grade))) return false;
      if (filters.deadlineWithin !== "Any") {
        const days = daysRemaining(o.deadline);
        if (days < 0 || days > Number(filters.deadlineWithin)) return false;
      }
      if (filters.opensMonth !== "Any" && getOpensMonth(o.timeline) !== Number(filters.opensMonth)) return false;
      if (filters.freeOnly && o.cost !== "Free") return false;
      if (filters.noEssay && !o.noEssay) return false;
      if (filters.onlineOnly && o.locationType === "In-person") return false;
      if (filters.beginnerFriendly && !o.beginnerFriendly) return false;
      return true;
    });

    const withScores = getRecommendations(profile, filtered);
    return withScores;
  }, [search, filters, profile]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-50">
          Discover Opportunities
        </h1>
        <p className="mt-2 text-base text-slate-500 dark:text-slate-400">
          {hasProfileSignal
            ? "Sorted by how well each opportunity fits your profile."
            : "Browse all opportunities, or take the quiz to get a personalized Fit Score."}
        </p>
      </div>

      <div className="mb-6 flex items-center gap-3">
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name, organizer, or interest…"
            className="w-full rounded-2xl border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm text-slate-800 shadow-soft placeholder:text-slate-400 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:focus:ring-brand-500/20"
          />
        </div>
        <button
          type="button"
          onClick={() => setMobileFiltersOpen(true)}
          className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-600 shadow-soft lg:hidden dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
        >
          <SlidersHorizontal className="h-4 w-4" />
          Filters
        </button>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[260px_1fr]">
        <aside className="hidden lg:block">
          <div className="sticky top-24">
            <FilterPanel filters={filters} onChange={setFilters} countries={countries} grades={grades} />
          </div>
        </aside>

        {mobileFiltersOpen && (
          <div className="fixed inset-0 z-50 flex items-end bg-slate-900/40 lg:hidden" onClick={() => setMobileFiltersOpen(false)}>
            <div
              className="max-h-[85vh] w-full overflow-y-auto rounded-t-3xl bg-slate-50 p-4 dark:bg-slate-950"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">Filters</span>
                <button
                  type="button"
                  onClick={() => setMobileFiltersOpen(false)}
                  className="rounded-full p-1.5 text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <FilterPanel filters={filters} onChange={setFilters} countries={countries} grades={grades} />
            </div>
          </div>
        )}

        <div>
          <p className="mb-4 text-sm text-slate-400">
            {results.length} {results.length === 1 ? "opportunity" : "opportunities"} found
          </p>

          {!hydrated ? (
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <SkeletonCard key={i} />
              ))}
            </div>
          ) : results.length === 0 ? (
            <EmptyState
              icon={Compass}
              title="No opportunities match your filters"
              description="Try loosening a filter or clearing your search to see more programs."
              action={
                <button
                  type="button"
                  onClick={() => {
                    setSearch("");
                    setFilters(DEFAULT_FILTERS);
                  }}
                  className="text-sm font-medium text-brand-600 hover:underline dark:text-brand-300"
                >
                  Clear all filters
                </button>
              }
            />
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {results.map((o) => (
                <OpportunityCard key={o.id} opportunity={o} fitScore={hasProfileSignal ? o.fitScore : undefined} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function OpportunitiesLoadingFallback() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </div>
  );
}

export default function OpportunitiesPage() {
  return (
    <Suspense fallback={<OpportunitiesLoadingFallback />}>
      <OpportunitiesContent />
    </Suspense>
  );
}
