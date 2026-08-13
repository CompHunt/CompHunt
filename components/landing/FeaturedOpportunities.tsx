import { ArrowRight } from "lucide-react";
import { opportunities } from "@/data/opportunities";
import { OpportunityCard } from "@/components/opportunities/OpportunityCard";
import { ButtonLink } from "@/components/ui/Button";

export function FeaturedOpportunities() {
  const featured = opportunities.filter((o) => o.featured).slice(0, 6);

  return (
    <section className="bg-slate-50/60 px-4 py-20 sm:px-6 sm:py-28 lg:px-8 dark:bg-slate-900/30">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl dark:text-slate-50">
              Featured opportunities
            </h2>
            <p className="mt-3 max-w-xl text-base text-slate-500 dark:text-slate-400">
              A sample of the elite, real programs already in CompHunt.
            </p>
          </div>
          <ButtonLink href="/opportunities" variant="outline">
            View all 253
            <ArrowRight className="h-4 w-4" />
          </ButtonLink>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((opportunity) => (
            <OpportunityCard key={opportunity.id} opportunity={opportunity} />
          ))}
        </div>
      </div>
    </section>
  );
}
