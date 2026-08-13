"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-radial px-4 pb-20 pt-20 sm:px-6 sm:pb-28 sm:pt-28 lg:px-8">
      <div className="pointer-events-none absolute -top-24 left-1/2 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-brand-gradient opacity-[0.08] blur-3xl" />

      <div className="relative mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-1.5 text-xs font-medium text-slate-600 shadow-soft backdrop-blur dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-300"
        >
          <Sparkles className="h-3.5 w-3.5 text-brand-500" />
          253 real programs, personalized just for you
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="text-balance text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl md:text-6xl dark:text-slate-50"
        >
          Discover opportunities that{" "}
          <span className="bg-brand-gradient bg-clip-text text-transparent">match your interests.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-5 max-w-2xl text-balance text-base leading-relaxed text-slate-500 sm:text-lg dark:text-slate-400"
        >
          Competitions, scholarships, research programs, internships, and more — matched to you, not
          buried in a spreadsheet. Answer a few quick questions and see what fits.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <ButtonLink href="/onboarding" size="lg" className="group">
            Find My Opportunities
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </ButtonLink>
          <ButtonLink href="/opportunities" variant="outline" size="lg">
            Browse All Opportunities
          </ButtonLink>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-6 text-xs text-slate-400"
        >
          Free to use. No account needed to get started.
        </motion.p>
      </div>
    </section>
  );
}
