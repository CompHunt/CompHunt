export function SkeletonCard() {
  return (
    <div className="animate-pulse rounded-3xl border border-slate-100 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900">
      <div className="flex items-start justify-between gap-3">
        <div className="h-5 w-2/3 rounded-full bg-slate-100 dark:bg-slate-800" />
        <div className="h-10 w-10 shrink-0 rounded-full bg-slate-100 dark:bg-slate-800" />
      </div>
      <div className="mt-3 h-4 w-full rounded-full bg-slate-100 dark:bg-slate-800" />
      <div className="mt-2 h-4 w-4/5 rounded-full bg-slate-100 dark:bg-slate-800" />
      <div className="mt-5 flex flex-wrap gap-2">
        <div className="h-6 w-16 rounded-full bg-slate-100 dark:bg-slate-800" />
        <div className="h-6 w-20 rounded-full bg-slate-100 dark:bg-slate-800" />
        <div className="h-6 w-14 rounded-full bg-slate-100 dark:bg-slate-800" />
      </div>
      <div className="mt-6 flex items-center justify-between">
        <div className="h-4 w-24 rounded-full bg-slate-100 dark:bg-slate-800" />
        <div className="h-9 w-24 rounded-xl bg-slate-100 dark:bg-slate-800" />
      </div>
    </div>
  );
}
