"use client";

import { motion } from "framer-motion";
import { ClipboardList, Sparkles, Rocket } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "Tell us about you",
    description:
      "A quick, skippable quiz about your interests, grade, budget, and how much time you have each week.",
  },
  {
    icon: Sparkles,
    title: "Get matched instantly",
    description:
      "We score every opportunity against your profile with a Fit Score, so the best matches float to the top.",
  },
  {
    icon: Rocket,
    title: "Apply with confidence",
    description:
      "See deadlines, checklists, difficulty, and tips for each program — no more guessing what's required.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl dark:text-slate-50">
            How it works
          </h2>
          <p className="mt-3 text-base text-slate-500 dark:text-slate-400">
            Three simple steps between you and your next big opportunity.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative rounded-3xl border border-slate-100 bg-white p-7 shadow-soft dark:border-slate-800 dark:bg-slate-900"
            >
              <span className="absolute right-6 top-6 text-4xl font-bold text-slate-100 dark:text-slate-800">
                {i + 1}
              </span>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-soft">
                <step.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-slate-900 dark:text-slate-50">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
