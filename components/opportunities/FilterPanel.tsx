"use client";

import { RotateCcw } from "lucide-react";
import { CATEGORIES, COST_TIERS, DIFFICULTIES, Category, CostTier, Difficulty } from "@/lib/types";
import { cn } from "@/lib/utils";

export const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

export interface Filters {
  category: Category | "All";
  country: string | "All";
  difficulty: Difficulty | "All";
  cost: CostTier | "All";
  grade: number | "All";
  deadlineWithin: "Any" | "7" | "30" | "90";
  opensMonth: "Any" | string;
  freeOnly: boolean;
  noEssay: boolean;
  onlineOnly: boolean;
  beginnerFriendly: boolean;
}

export const DEFAULT_FILTERS: Filters = {
  category: "All",
  country: "All",
  difficulty: "All",
  cost: "All",
  grade: "All",
  deadlineWithin: "Any",
  opensMonth: "Any",
  freeOnly: false,
  noEssay: false,
  onlineOnly: false,
  beginnerFriendly: false,
};

export function getOpensMonth(timeline: { label: string; date: string }[] | undefined): number | null {
  const label = timeline?.[0]?.date;
  if (!label) return null;
  const idx = MONTH_NAMES.findIndex((m) => label.includes(m));
  return idx === -1 ? null : idx + 1;
}

function Select({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: { value: string; label: string }[];
  onChange: (value: string) => void;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-xs font-medium text-slate-500 dark:text-slate-400">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:focus:ring-brand-500/20"
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </label>
  );
}

const SMART_FILTERS: { key: keyof Filters; label: string }[] = [
  { key: "freeOnly", label: "Free" },
  { key: "noEssay", label: "No essays" },
  { key: "onlineOnly", label: "Online" },
  { key: "beginnerFriendly", label: "Beginner friendly" },
];

export function FilterPanel({
  filters,
  onChange,
  countries,
  grades,
}: {
  filters: Filters;
  onChange: (filters: Filters) => void;
  countries: string[];
  grades: number[];
}) {
  const isDefault = JSON.stringify(filters) === JSON.stringify(DEFAULT_FILTERS);

  return (
    <div className="rounded-3xl border border-slate-100 bg-white p-5 shadow-soft dark:border-slate-800 dark:bg-slate-900">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">Filters</h3>
        {!isDefault && (
          <button
            type="button"
            onClick={() => onChange(DEFAULT_FILTERS)}
            className="inline-flex items-center gap-1 text-xs font-medium text-slate-400 hover:text-brand-600 dark:hover:text-brand-300"
          >
            <RotateCcw className="h-3 w-3" />
            Reset
          </button>
        )}
      </div>

      <div className="grid grid-cols-2 gap-3 lg:grid-cols-1">
        <Select
          label="Category"
          value={filters.category}
          onChange={(category) => onChange({ ...filters, category: category as Category | "All" })}
          options={[{ value: "All", label: "All categories" }, ...CATEGORIES.map((c) => ({ value: c, label: c }))]}
        />
        <Select
          label="Country"
          value={filters.country}
          onChange={(country) => onChange({ ...filters, country })}
          options={[{ value: "All", label: "All countries" }, ...countries.map((c) => ({ value: c, label: c }))]}
        />
        <Select
          label="Difficulty"
          value={filters.difficulty}
          onChange={(difficulty) => onChange({ ...filters, difficulty: difficulty as Difficulty | "All" })}
          options={[{ value: "All", label: "Any difficulty" }, ...DIFFICULTIES.map((d) => ({ value: d, label: d }))]}
        />
        <Select
          label="Cost"
          value={filters.cost}
          onChange={(cost) => onChange({ ...filters, cost: cost as CostTier | "All" })}
          options={[{ value: "All", label: "Any cost" }, ...COST_TIERS.map((c) => ({ value: c, label: c }))]}
        />
        <Select
          label="Grade"
          value={String(filters.grade)}
          onChange={(grade) => onChange({ ...filters, grade: grade === "All" ? "All" : Number(grade) })}
          options={[
            { value: "All", label: "Any grade" },
            ...grades.map((g) => ({ value: String(g), label: `Grade ${g}` })),
          ]}
        />
        <Select
          label="Deadline"
          value={filters.deadlineWithin}
          onChange={(deadlineWithin) => onChange({ ...filters, deadlineWithin: deadlineWithin as Filters["deadlineWithin"] })}
          options={[
            { value: "Any", label: "Any time" },
            { value: "7", label: "Next 7 days" },
            { value: "30", label: "Next 30 days" },
            { value: "90", label: "Next 3 months" },
          ]}
        />
        <Select
          label="Opens in"
          value={filters.opensMonth}
          onChange={(opensMonth) => onChange({ ...filters, opensMonth })}
          options={[
            { value: "Any", label: "Any month" },
            ...MONTH_NAMES.map((m, i) => ({ value: String(i + 1), label: m })),
          ]}
        />
      </div>

      <div className="mt-5 border-t border-slate-100 pt-4 dark:border-slate-800">
        <span className="mb-2.5 block text-xs font-medium text-slate-500 dark:text-slate-400">Smart filters</span>
        <div className="flex flex-wrap gap-2">
          {SMART_FILTERS.map(({ key, label }) => {
            const active = Boolean(filters[key]);
            return (
              <button
                key={key}
                type="button"
                onClick={() => onChange({ ...filters, [key]: !active })}
                className={cn(
                  "rounded-full border px-3 py-1.5 text-xs font-medium transition-colors",
                  active
                    ? "border-brand-500 bg-brand-50 text-brand-700 dark:border-brand-400 dark:bg-brand-500/10 dark:text-brand-300"
                    : "border-slate-200 text-slate-500 hover:border-brand-200 dark:border-slate-700 dark:text-slate-400"
                )}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
