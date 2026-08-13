"use client";

import { useMemo } from "react";
import { Bookmark, Calendar, Clock, Sparkles } from "lucide-react";
import { opportunities, getOpportunityBySlug } from "@/data/opportunities";
import { useAppState } from "@/context/AppStateContext";
import { getRecommendations } from "@/lib/matching";
import { countdownLabel, countdownUrgency, formatDate } from "@/lib/utils";
import { OpportunityCard } from "@/components/opportunities/OpportunityCard";
import { SkeletonCard } from "@/components/ui/SkeletonCard";
import { EmptyState } from "@/components/ui/EmptyState";
import { ButtonLink } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import Link from "next/link";

function SectionHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-5">
      <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-50">{title}</h2>
      {subtitle && <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{subtitle}</p>}
    </div>
  );
}

export default function DashboardPage() {
  const { profile, savedSlugs, recentlyViewed, hydrated } = useAppState();

  const hasProfileSignal = profile.interests.length > 0 || profile.opportunityTypes.length > 0;

  const savedOpportunities = useMemo(
    () => savedSlugs.map((slug) => getOpportunityBySlug(slug)).filter((o): o is NonNullable<typeof o> => Boolean(o)),
    [savedSlugs]
  );

  const recentOpportunities = useMemo(
    () =>
      recentlyViewed
        .map((entry) => ({ opportunity: getOpportunityBySlug(entry.slug), viewedAt: entry.viewedAt }))
        .filter((e): e is { opportunity: NonNullable<typeof e.opportunity>; viewedAt: number } => Boolean(e.opportunity))
        .slice(0, 8),
    [recentlyViewed]
  );

  const recommended = useMemo(() => getRecommendations(profile, opportunities, 6), [profile]);

  const upcomingDeadlines = useMemo(() => {
    const source = savedOpportunities.length > 0 ? savedOpportunities : recommended;
    return [...source]
      .filter((o) => countdownUrgency(o.deadline) !== "passed")
      .sort((a, b) => new Date(a.deadline).getTime() - new Date(b.deadline).getTime())
      .slice(0, 6);
  }, [savedOpportunities, recommended]);

  if (!hydrated) {
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

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-10">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-50">Your Dashboard</h1>
        <p className="mt-2 text-base text-slate-500 dark:text-slate-400">
          Everything you&apos;ve saved, viewed, and matched — all in one place.
        </p>
      </div>

      <div className="space-y-14">
        <section>
          <SectionHeader
            title="Upcoming Deadlines"
            subtitle={
              savedOpportunities.length > 0
                ? "Based on the opportunities you've saved."
                : "Based on your top recommendations — save opportunities to track their deadlines here."
            }
          />
          {upcomingDeadlines.length === 0 ? (
            <EmptyState
              icon={Calendar}
              title="No upcoming deadlines yet"
              description="Save opportunities you're interested in to start tracking their deadlines."
            />
          ) : (
            <div className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-soft dark:border-slate-800 dark:bg-slate-900">
              <ul className="divide-y divide-slate-100 dark:divide-slate-800">
                {upcomingDeadlines.map((o) => {
                  const urgency = countdownUrgency(o.deadline);
                  return (
                    <li key={o.id}>
                      <Link
                        href={`/opportunities/${o.slug}`}
                        className="flex items-center justify-between gap-4 px-5 py-4 transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/50"
                      >
                        <div className="min-w-0">
                          <p className="truncate text-sm font-medium text-slate-800 dark:text-slate-100">{o.title}</p>
                          <p className="text-xs text-slate-400">{formatDate(o.deadline)}</p>
                        </div>
                        <Badge tone={urgency === "urgent" ? "red" : urgency === "soon" ? "amber" : "neutral"}>
                          <Clock className="h-3 w-3" />
                          {countdownLabel(o.deadline)}
                        </Badge>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </section>

        <section>
          <SectionHeader
            title="Recommended For You"
            subtitle={
              hasProfileSignal
                ? "Matched to your interests, budget, and availability."
                : "Take the quiz to unlock personalized Fit Scores."
            }
          />
          {!hasProfileSignal && (
            <div className="mb-5">
              <ButtonLink href="/onboarding" variant="outline" size="sm">
                <Sparkles className="h-4 w-4" />
                Take the quiz
              </ButtonLink>
            </div>
          )}
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {recommended.map((o) => (
              <OpportunityCard key={o.id} opportunity={o} fitScore={hasProfileSignal ? o.fitScore : undefined} />
            ))}
          </div>
        </section>

        <section>
          <SectionHeader title="Saved Opportunities" subtitle="Everything you've bookmarked." />
          {savedOpportunities.length === 0 ? (
            <EmptyState
              icon={Bookmark}
              title="Nothing saved yet"
              description="Tap the bookmark icon on any opportunity to save it for later."
              action={
                <ButtonLink href="/opportunities" variant="outline" size="sm">
                  Browse opportunities
                </ButtonLink>
              }
            />
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {savedOpportunities.map((o) => (
                <OpportunityCard key={o.id} opportunity={o} />
              ))}
            </div>
          )}
        </section>

        <section>
          <SectionHeader title="Recently Viewed" subtitle="Programs you've looked at recently." />
          {recentOpportunities.length === 0 ? (
            <EmptyState
              icon={Clock}
              title="No recent activity"
              description="Opportunities you view will show up here so you can find them again easily."
            />
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {recentOpportunities.map(({ opportunity }) => (
                <OpportunityCard key={opportunity.id} opportunity={opportunity} />
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
