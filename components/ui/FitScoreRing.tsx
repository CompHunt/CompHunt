import { cn } from "@/lib/utils";

export function FitScoreRing({
  score,
  size = 48,
  strokeWidth = 4,
  className,
}: {
  score: number;
  size?: number;
  strokeWidth?: number;
  className?: string;
}) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (Math.max(0, Math.min(score, 100)) / 100) * circumference;

  const colorClass =
    score >= 80
      ? "text-emerald-500"
      : score >= 60
        ? "text-brand-500"
        : score >= 40
          ? "text-amber-500"
          : "text-slate-400";

  return (
    <div className={cn("relative inline-flex items-center justify-center", className)} style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          strokeWidth={strokeWidth}
          className="stroke-slate-100 dark:stroke-slate-800"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className={cn("transition-all duration-700 ease-out", colorClass)}
          stroke="currentColor"
        />
      </svg>
      <span className="absolute text-xs font-semibold text-slate-700 dark:text-slate-200">{score}%</span>
    </div>
  );
}
