"use client";

import { ElementType, ReactNode, useEffect } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Banknote,
  Calendar,
  CheckCircle2,
  Clock,
  ExternalLink,
  FileText,
  GraduationCap,
  Lightbulb,
  ListChecks,
  Globe2,
  MapPin,
  Sparkles,
  Trophy,
  XCircle,
} from "lucide-react";
import { Opportunity } from "@/lib/types";
import { useAppState } from "@/context/AppStateContext";
import { computeFitScore } from "@/lib/matching";
import { categoryTone, formatDate } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";
import { PrestigeStars } from "@/components/ui/PrestigeStars";
import { DifficultyBadge } from "@/components/ui/DifficultyBadge";
import { DeadlineCountdown } from "@/components/ui/DeadlineCountdown";
import { BookmarkButton } from "@/components/ui/BookmarkButton";
import { FitScoreRing } from "@/components/ui/FitScoreRing";
import { Button, ButtonLink } from "@/components/ui/Button";
import { OpportunityCard } from "@/components/opportunities/OpportunityCard";

const checklistLabels: { key: keyof Opportunity["checklist"]; label: string }[] = [
  { key: "essay", label: "Essay" },
  { key: "resume", label: "Resume" },
  { key: "recommendationLetter", label: "Recommendation Letter" },
  { key: "transcript", label: "Transcript" },
  { key: "portfolio", label: "Portfolio" },
  { key: "interview", label: "Interview" },
];

function Section({
  icon: Icon,
  title,
  children,
}: {
  icon: ElementType;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="rounded-3xl border border-slate-100 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900 sm:p-7">
      <div className="mb-4 flex items-center gap-2.5">
        <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-300">
          <Icon className="h-4 w-4" />
        </span>
        <h2 className="text-base font-semibold text-slate-900 dark:text-slate-50">{title}</h2>
      </div>
      {children}
    </section>
  );
}

export function OpportunityDetail({
  opportunity,
  similar,
}: {
  opportunity: Opportunity;
  similar: Opportunity[];
}) {
  const { profile, addRecentlyViewed } = useAppState();

  useEffect(() => {
    addRecentlyViewed(opportunity.slug);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [opportunity.slug]);

  const hasProfileSignal = profile.interests.length > 0 || profile.opportunityTypes.length > 0;
  const fitScore = computeFitScore(profile, opportunity);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <Link
        href="/opportunities"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
      >
        <ArrowLeft className="h-4 w-4" />
        All opportunities
      </Link>

      <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_320px]">
        <div className="space-y-6">
          <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900 sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <Badge tone={categoryTone(opportunity.category)}>{opportunity.category}</Badge>
              {hasProfileSignal && <FitScoreRing score={fitScore} size={52} strokeWidth={4} />}
            </div>

            <h1 className="mt-4 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl dark:text-slate-50">
              {opportunity.title}
            </h1>
            <p className="mt-1.5 text-sm font-medium text-slate-400">{opportunity.organizer}</p>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              <PrestigeStars prestige={opportunity.prestige} />
              <DifficultyBadge difficulty={opportunity.difficulty} />
              <Badge tone={opportunity.cost === "Free" ? "green" : "neutral"}>{opportunity.cost}</Badge>
              {opportunity.beginnerFriendly && <Badge tone="purple">Beginner friendly</Badge>}
            </div>

            <p className="mt-5 text-base leading-relaxed text-slate-600 dark:text-slate-300">
              {opportunity.shortDescription}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Button
                onClick={() => window.open(opportunity.officialWebsite, "_blank", "noopener,noreferrer")}
              >
                Official Website
                <ExternalLink className="h-4 w-4" />
              </Button>
              <BookmarkButton slug={opportunity.slug} size="lg" />
            </div>
          </div>

          <Section icon={FileText} title="Description">
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{opportunity.description}</p>
          </Section>

          <Section icon={GraduationCap} title="Eligibility">
            <ul className="space-y-2.5">
              {opportunity.eligibility.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                  {item}
                </li>
              ))}
            </ul>
          </Section>

          <Section icon={ListChecks} title="Application Process">
            <ol className="space-y-3">
              {opportunity.applicationProcess.map((step, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-gradient text-xs font-semibold text-white">
                    {i + 1}
                  </span>
                  <span className="pt-0.5">{step}</span>
                </li>
              ))}
            </ol>
          </Section>

          <Section icon={Calendar} title="Timeline">
            <ol className="relative space-y-6 border-l border-slate-100 pl-6 dark:border-slate-800">
              {opportunity.timeline.map((step, i) => (
                <li key={i} className="relative">
                  <span className="absolute -left-[1.65rem] top-0.5 h-3 w-3 rounded-full border-2 border-white bg-brand-500 dark:border-slate-900" />
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">{step.label}</p>
                  <p className="text-xs text-slate-400">{step.date}</p>
                </li>
              ))}
            </ol>
          </Section>

          <div className="grid gap-6 sm:grid-cols-2">
            <Section icon={Sparkles} title="Benefits">
              <ul className="space-y-2.5">
                {opportunity.benefits.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </Section>

            <Section icon={GraduationCap} title="Skills Developed">
              <div className="flex flex-wrap gap-2">
                {opportunity.skillsDeveloped.map((skill) => (
                  <Badge key={skill} tone="brand">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Section>
          </div>

          {opportunity.prize && (
            <div className="flex items-start gap-3 rounded-3xl border border-amber-100 bg-amber-50/60 p-6 dark:border-amber-500/20 dark:bg-amber-500/10">
              <Trophy className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />
              <div>
                <h3 className="text-sm font-semibold text-amber-800 dark:text-amber-300">Prize</h3>
                <p className="mt-1 text-sm text-amber-700 dark:text-amber-200">{opportunity.prize}</p>
              </div>
            </div>
          )}

          <Section icon={ListChecks} title="Application Checklist">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {checklistLabels.map(({ key, label }) => {
                const required = opportunity.checklist[key];
                return (
                  <div
                    key={key}
                    className="flex items-center gap-2 rounded-xl border border-slate-100 px-3 py-2.5 text-sm dark:border-slate-800"
                  >
                    {required ? (
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500" />
                    ) : (
                      <XCircle className="h-4 w-4 shrink-0 text-slate-300 dark:text-slate-700" />
                    )}
                    <span className={required ? "text-slate-700 dark:text-slate-200" : "text-slate-400"}>
                      {label}
                    </span>
                  </div>
                );
              })}
            </div>
          </Section>

          <Section icon={Lightbulb} title="Application Tips">
            <ul className="space-y-2.5">
              {opportunity.applicationTips.map((tip, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300">
                  <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
                  {tip}
                </li>
              ))}
            </ul>
          </Section>
        </div>

        <aside className="space-y-6">
          <div className="sticky top-24 space-y-6">
            <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900">
              <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">Quick facts</h3>
              <dl className="mt-4 space-y-4 text-sm">
                <div className="flex items-center justify-between gap-3">
                  <dt className="flex items-center gap-2 text-slate-400">
                    <Calendar className="h-4 w-4" /> Deadline
                  </dt>
                  <dd className="text-right font-medium text-slate-700 dark:text-slate-200">
                    {formatDate(opportunity.deadline)}
                  </dd>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <dt className="text-slate-400">Countdown</dt>
                  <dd>
                    <DeadlineCountdown deadline={opportunity.deadline} />
                  </dd>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <dt className="flex items-center gap-2 text-slate-400">
                    <Banknote className="h-4 w-4" /> Cost
                  </dt>
                  <dd className="text-right font-medium text-slate-700 dark:text-slate-200">{opportunity.cost}</dd>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <dt className="flex items-center gap-2 text-slate-400">
                    <Globe2 className="h-4 w-4" /> Format
                  </dt>
                  <dd className="text-right font-medium text-slate-700 dark:text-slate-200">
                    {opportunity.locationType}
                  </dd>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <dt className="flex items-center gap-2 text-slate-400">
                    <MapPin className="h-4 w-4" /> Country
                  </dt>
                  <dd className="text-right font-medium text-slate-700 dark:text-slate-200">{opportunity.country}</dd>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <dt className="flex items-center gap-2 text-slate-400">
                    <Clock className="h-4 w-4" /> Time commitment
                  </dt>
                  <dd className="text-right font-medium text-slate-700 dark:text-slate-200">
                    {opportunity.timeCommitment}
                  </dd>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <dt className="text-slate-400">Grade levels</dt>
                  <dd className="text-right font-medium text-slate-700 dark:text-slate-200">
                    {opportunity.gradeLevels.join(", ")}
                  </dd>
                </div>
              </dl>
              <p className="mt-4 rounded-xl bg-slate-50 px-3 py-2 text-xs text-slate-400 dark:bg-slate-800/60">
                {opportunity.costDetail}
              </p>
            </div>
          </div>
        </aside>
      </div>

      {similar.length > 0 && (
        <div className="mt-12">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-50">Similar Opportunities</h2>
          <div className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {similar.map((s) => (
              <OpportunityCard key={s.id} opportunity={s} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
