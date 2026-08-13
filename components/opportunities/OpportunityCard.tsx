"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, ExternalLink, Globe2, GraduationCap, MapPin } from "lucide-react";
import { Opportunity } from "@/lib/types";
import { Badge } from "@/components/ui/Badge";
import { PrestigeStars } from "@/components/ui/PrestigeStars";
import { DifficultyBadge } from "@/components/ui/DifficultyBadge";
import { DeadlineCountdown } from "@/components/ui/DeadlineCountdown";
import { BookmarkButton } from "@/components/ui/BookmarkButton";
import { FitScoreRing } from "@/components/ui/FitScoreRing";
import { Button, ButtonLink } from "@/components/ui/Button";
import { categoryTone, truncate } from "@/lib/utils";

export function OpportunityCard({
  opportunity,
  fitScore,
}: {
  opportunity: Opportunity;
  fitScore?: number;
}) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="group flex h-full flex-col rounded-3xl border border-slate-100 bg-white p-5 shadow-soft transition-shadow duration-200 hover:shadow-soft-lg dark:border-slate-800 dark:bg-slate-900 sm:p-6"
    >
      <div className="flex items-start justify-between gap-3">
        <Badge tone={categoryTone(opportunity.category)}>{opportunity.category}</Badge>
        <div className="flex items-center gap-2">
          {typeof fitScore === "number" && <FitScoreRing score={fitScore} size={40} strokeWidth={3.5} />}
          <BookmarkButton slug={opportunity.slug} size="sm" />
        </div>
      </div>

      <Link href={`/opportunities/${opportunity.slug}`} className="mt-3 block">
        <h3 className="text-base font-semibold leading-snug text-slate-900 transition-colors group-hover:text-brand-700 dark:text-slate-50 dark:group-hover:text-brand-300">
          {opportunity.title}
        </h3>
        <p className="mt-0.5 text-xs font-medium text-slate-400">{opportunity.organizer}</p>
      </Link>

      <p className="mt-2.5 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
        {truncate(opportunity.shortDescription, 120)}
      </p>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <DifficultyBadge difficulty={opportunity.difficulty} />
        <Badge tone={opportunity.cost === "Free" ? "green" : "neutral"}>{opportunity.cost}</Badge>
        <Badge tone="neutral">
          <Globe2 className="h-3 w-3" /> {opportunity.locationType}
        </Badge>
        <Badge tone="neutral">
          <MapPin className="h-3 w-3" /> {opportunity.country}
        </Badge>
      </div>

      <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
        <PrestigeStars prestige={opportunity.prestige} />
        <span className="inline-flex items-center gap-1">
          <Clock className="h-3.5 w-3.5" /> {opportunity.hoursPerWeek}
        </span>
      </div>

      <p className="mt-3 flex items-start gap-1.5 text-xs text-slate-500 dark:text-slate-400">
        <GraduationCap className="mt-0.5 h-3.5 w-3.5 shrink-0" />
        <span className="line-clamp-1">{opportunity.eligibility[0]}</span>
      </p>

      <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4 dark:border-slate-800">
        <DeadlineCountdown deadline={opportunity.deadline} />
      </div>

      <div className="mt-4 flex items-center gap-2">
        <ButtonLink href={`/opportunities/${opportunity.slug}`} size="sm" className="flex-1">
          View Details
        </ButtonLink>
        <Button
          variant="outline"
          size="sm"
          onClick={(e) => {
            e.preventDefault();
            window.open(opportunity.officialWebsite, "_blank", "noopener,noreferrer");
          }}
          aria-label="Visit official website"
        >
          <ExternalLink className="h-4 w-4" />
        </Button>
      </div>
    </motion.div>
  );
}
