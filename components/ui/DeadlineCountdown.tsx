"use client";

import { Clock } from "lucide-react";
import { countdownLabel, countdownUrgency, cn } from "@/lib/utils";

const urgencyClasses = {
  urgent: "text-red-600 dark:text-red-400",
  soon: "text-amber-600 dark:text-amber-400",
  normal: "text-slate-500 dark:text-slate-400",
  passed: "text-slate-400 dark:text-slate-600",
};

export function DeadlineCountdown({ deadline, className }: { deadline: string; className?: string }) {
  const urgency = countdownUrgency(deadline);
  return (
    <span className={cn("inline-flex items-center gap-1.5 text-xs font-medium", urgencyClasses[urgency], className)}>
      <Clock className="h-3.5 w-3.5" />
      {countdownLabel(deadline)}
    </span>
  );
}
