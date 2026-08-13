"use client";

import { motion } from "framer-motion";
import { Target, Star, Gauge, Clock, ListChecks, SlidersHorizontal, Bookmark, Timer } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Fit Score",
    description: "Every opportunity shows a 0–100% match based on your interests, budget, and time.",
  },
  {
    icon: Star,
    title: "Prestige Rating",
    description: "A quick 1–5 star signal for how selective and respected a program really is.",
  },
  {
    icon: Gauge,
    title: "Difficulty Rating",
    description: "Easy, Moderate, Competitive, or Elite — know what you're getting into before you apply.",
  },
  {
    icon: Clock,
    title: "Time Commitment",
    description: "See real weekly hour estimates so you can plan around school and other activities.",
  },
  {
    icon: ListChecks,
    title: "Application Checklist",
    description: "Essay, resume, recommendation letters, transcript — know exactly what's required.",
  },
  {
    icon: SlidersHorizontal,
    title: "Smart Filters",
    description: "Filter by free, no-essay, online, beginner-friendly, grade, and country in one tap.",
  },
  {
    icon: Bookmark,
    title: "Save for later",
    description: "Bookmark anything that catches your eye and find it again on your dashboard.",
  },
  {
    icon: Timer,
    title: "Deadline Tracker",
    description: "Live countdowns so nothing slips through the cracks during application season.",
  },
];

const ICON_TONES = [
  "bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-300",
  "bg-pink-50 text-pink-600 dark:bg-pink-500/10 dark:text-pink-300",
  "bg-teal-50 text-teal-600 dark:bg-teal-500/10 dark:text-teal-300",
  "bg-orange-50 text-orange-600 dark:bg-orange-500/10 dark:text-orange-300",
  "bg-violet-50 text-violet-600 dark:bg-violet-500/10 dark:text-violet-300",
  "bg-cyan-50 text-cyan-600 dark:bg-cyan-500/10 dark:text-cyan-300",
  "bg-rose-50 text-rose-600 dark:bg-rose-500/10 dark:text-rose-300",
  "bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-300",
];

export function WhyStudentsLoveIt() {
  return (
    <section className="px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl dark:text-slate-50">
            Why students love it
          </h2>
          <p className="mt-3 text-base text-slate-500 dark:text-slate-400">
            Built to feel less like a database and more like a guide.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.06 }}
              className="rounded-3xl border border-slate-100 bg-white p-6 shadow-soft transition-shadow hover:shadow-soft-lg dark:border-slate-800 dark:bg-slate-900"
            >
              <div
                className={`flex h-11 w-11 items-center justify-center rounded-2xl ${ICON_TONES[i % ICON_TONES.length]}`}
              >
                <feature.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-sm font-semibold text-slate-900 dark:text-slate-50">{feature.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
