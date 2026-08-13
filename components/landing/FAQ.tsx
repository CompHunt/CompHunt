"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Is CompHunt free to use?",
    answer:
      "Yes. Browsing, filtering, saving opportunities, and getting personalized recommendations are all free.",
  },
  {
    question: "How is the Fit Score calculated?",
    answer:
      "We compare your interests, budget, location preference, grade, and desired opportunity types against each program's profile to produce a 0–100% match score. It updates instantly as you change filters or your profile.",
  },
  {
    question: "Do I need to create an account?",
    answer:
      "No account is required. Your profile and saved opportunities are stored locally in your browser so you can get started immediately.",
  },
  {
    question: "Can I skip the quiz?",
    answer:
      "Absolutely. Every onboarding question has a Skip button, and you can always browse and filter opportunities manually instead.",
  },
  {
    question: "Is this only for U.S. students?",
    answer:
      "No — many opportunities are international or open to students worldwide. You can filter by country to find what's available to you.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl dark:text-slate-50">
            Frequently asked questions
          </h2>
        </div>

        <div className="mt-10 space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-slate-100 bg-white dark:border-slate-800 dark:bg-slate-900"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-medium text-slate-900 dark:text-slate-100">{faq.question}</span>
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 shrink-0 text-slate-400 transition-transform duration-200",
                      isOpen && "rotate-180"
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "grid transition-all duration-200 ease-out",
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-4 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
