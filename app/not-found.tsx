import { Compass } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-md flex-col items-center justify-center px-4 text-center">
      <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-3xl bg-brand-50 text-brand-500 dark:bg-brand-500/10 dark:text-brand-300">
        <Compass className="h-8 w-8" />
      </div>
      <h1 className="text-2xl font-semibold text-slate-900 dark:text-slate-50">Page not found</h1>
      <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
        The opportunity or page you're looking for doesn't exist or may have moved.
      </p>
      <ButtonLink href="/opportunities" className="mt-6">
        Browse Opportunities
      </ButtonLink>
    </div>
  );
}
