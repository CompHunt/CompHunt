"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, Sparkles } from "lucide-react";
import { useAppState } from "@/context/AppStateContext";
import {
  Budget,
  Interest,
  INTERESTS,
  LocationPreference,
  OpportunityType,
  OPPORTUNITY_TYPES,
  TimeAvailability,
} from "@/lib/types";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const COUNTRIES = [
  "United States",
  "Canada",
  "United Kingdom",
  "India",
  "Australia",
  "Singapore",
  "United Arab Emirates",
  "Nigeria",
  "Other / International",
];

const AGES = [13, 14, 15, 16, 17, 18];
const GRADES = [8, 9, 10, 11, 12];
const BUDGETS: Budget[] = ["Free only", "Under $100", "Any"];
const LOCATIONS: LocationPreference[] = ["Online", "In-person", "Both"];
const TIMES: TimeAvailability[] = ["2 hours", "5 hours", "10+ hours"];

interface Draft {
  age?: number;
  grade?: number;
  country?: string;
  interests: Interest[];
  careerInterests: string;
  opportunityTypes: OpportunityType[];
  budget?: Budget;
  location?: LocationPreference;
  timeAvailable?: TimeAvailability;
}

const STEP_TITLES = [
  "How old are you?",
  "What grade are you in?",
  "Where are you located?",
  "What are you into?",
  "Any career interests?",
  "What kinds of opportunities interest you?",
  "What's your budget?",
  "Online or in-person?",
  "How much time can you give it?",
];

const TOTAL_STEPS = STEP_TITLES.length;

function OptionGrid<T extends string | number>({
  options,
  selected,
  onSelect,
  columns = 3,
}: {
  options: T[];
  selected: T | undefined;
  onSelect: (value: T) => void;
  columns?: number;
}) {
  return (
    <div className={cn("grid gap-3", columns === 3 ? "grid-cols-3" : "grid-cols-2 sm:grid-cols-3")}>
      {options.map((opt) => (
        <button
          key={opt}
          type="button"
          onClick={() => onSelect(opt)}
          className={cn(
            "rounded-2xl border px-4 py-4 text-sm font-medium transition-all duration-150",
            selected === opt
              ? "border-brand-500 bg-brand-50 text-brand-700 shadow-soft dark:border-brand-400 dark:bg-brand-500/10 dark:text-brand-300"
              : "border-slate-200 text-slate-600 hover:border-brand-200 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
          )}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

function MultiSelectGrid<T extends string>({
  options,
  selected,
  onToggle,
}: {
  options: T[];
  selected: T[];
  onToggle: (value: T) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2.5">
      {options.map((opt) => {
        const active = selected.includes(opt);
        return (
          <button
            key={opt}
            type="button"
            onClick={() => onToggle(opt)}
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-150",
              active
                ? "border-brand-500 bg-brand-gradient text-white shadow-soft"
                : "border-slate-200 text-slate-600 hover:border-brand-200 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
            )}
          >
            {active && <Check className="h-3.5 w-3.5" />}
            {opt}
          </button>
        );
      })}
    </div>
  );
}

export default function OnboardingPage() {
  const router = useRouter();
  const { updateProfile, completeOnboarding } = useAppState();
  const [step, setStep] = useState(0);
  const [draft, setDraft] = useState<Draft>({
    interests: [],
    careerInterests: "",
    opportunityTypes: [],
  });

  function finish(finalDraft: Draft) {
    updateProfile(finalDraft);
    completeOnboarding();
    router.push("/opportunities");
  }

  function goNext() {
    if (step === TOTAL_STEPS - 1) {
      finish(draft);
    } else {
      setStep((s) => s + 1);
    }
  }

  function goBack() {
    setStep((s) => Math.max(0, s - 1));
  }

  function toggleInterest(interest: Interest) {
    setDraft((d) => ({
      ...d,
      interests: d.interests.includes(interest)
        ? d.interests.filter((i) => i !== interest)
        : [...d.interests, interest],
    }));
  }

  function toggleOpportunityType(type: OpportunityType) {
    setDraft((d) => ({
      ...d,
      opportunityTypes: d.opportunityTypes.includes(type)
        ? d.opportunityTypes.filter((t) => t !== type)
        : [...d.opportunityTypes, type],
    }));
  }

  const progress = ((step + 1) / TOTAL_STEPS) * 100;

  return (
    <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-2xl flex-col justify-center px-4 py-12 sm:px-6">
      <div className="mb-8 flex items-center gap-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-gradient text-white shadow-soft">
          <Sparkles className="h-4 w-4" />
        </span>
        <div className="flex-1">
          <div className="flex items-center justify-between text-xs font-medium text-slate-400">
            <span>
              Step {step + 1} of {TOTAL_STEPS}
            </span>
            <button
              type="button"
              onClick={() => router.push("/opportunities")}
              className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
            >
              Skip quiz entirely
            </button>
          </div>
          <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
            <motion.div
              className="h-full rounded-full bg-brand-gradient"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -16 }}
          transition={{ duration: 0.25 }}
          className="rounded-3xl border border-slate-100 bg-white p-7 shadow-soft sm:p-9 dark:border-slate-800 dark:bg-slate-900"
        >
          <h1 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-50">
            {STEP_TITLES[step]}
          </h1>

          <div className="mt-6">
            {step === 0 && (
              <OptionGrid options={AGES} selected={draft.age} onSelect={(age) => setDraft((d) => ({ ...d, age }))} />
            )}

            {step === 1 && (
              <OptionGrid
                options={GRADES}
                selected={draft.grade}
                onSelect={(grade) => setDraft((d) => ({ ...d, grade }))}
              />
            )}

            {step === 2 && (
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {COUNTRIES.map((country) => (
                  <button
                    key={country}
                    type="button"
                    onClick={() => setDraft((d) => ({ ...d, country }))}
                    className={cn(
                      "rounded-2xl border px-4 py-3 text-sm font-medium transition-all duration-150",
                      draft.country === country
                        ? "border-brand-500 bg-brand-50 text-brand-700 shadow-soft dark:border-brand-400 dark:bg-brand-500/10 dark:text-brand-300"
                        : "border-slate-200 text-slate-600 hover:border-brand-200 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
                    )}
                  >
                    {country}
                  </button>
                ))}
              </div>
            )}

            {step === 3 && (
              <>
                <p className="mb-4 text-sm text-slate-500 dark:text-slate-400">Pick as many as you like.</p>
                <MultiSelectGrid options={INTERESTS} selected={draft.interests} onToggle={toggleInterest} />
              </>
            )}

            {step === 4 && (
              <>
                <p className="mb-4 text-sm text-slate-500 dark:text-slate-400">
                  Optional — tell us if you have a career direction in mind.
                </p>
                <textarea
                  value={draft.careerInterests}
                  onChange={(e) => setDraft((d) => ({ ...d, careerInterests: e.target.value }))}
                  placeholder="e.g. Software engineering, medicine, investment banking, environmental policy…"
                  rows={4}
                  className="w-full resize-none rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:focus:ring-brand-500/20"
                />
              </>
            )}

            {step === 5 && (
              <>
                <p className="mb-4 text-sm text-slate-500 dark:text-slate-400">Pick as many as you like.</p>
                <MultiSelectGrid
                  options={OPPORTUNITY_TYPES}
                  selected={draft.opportunityTypes}
                  onToggle={toggleOpportunityType}
                />
              </>
            )}

            {step === 6 && (
              <OptionGrid
                options={BUDGETS}
                selected={draft.budget}
                onSelect={(budget) => setDraft((d) => ({ ...d, budget }))}
              />
            )}

            {step === 7 && (
              <OptionGrid
                options={LOCATIONS}
                selected={draft.location}
                onSelect={(location) => setDraft((d) => ({ ...d, location }))}
              />
            )}

            {step === 8 && (
              <OptionGrid
                options={TIMES}
                selected={draft.timeAvailable}
                onSelect={(timeAvailable) => setDraft((d) => ({ ...d, timeAvailable }))}
              />
            )}
          </div>

          <div className="mt-9 flex items-center justify-between">
            <button
              type="button"
              onClick={goBack}
              disabled={step === 0}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-400 transition-colors hover:text-slate-600 disabled:opacity-0 dark:hover:text-slate-300"
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </button>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={goNext}
                className="text-sm font-medium text-slate-400 transition-colors hover:text-slate-600 dark:hover:text-slate-300"
              >
                Skip
              </button>
              <Button onClick={goNext} size="md">
                {step === TOTAL_STEPS - 1 ? "See my matches" : "Continue"}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
