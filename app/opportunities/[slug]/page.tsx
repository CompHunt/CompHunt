import { notFound } from "next/navigation";
import { getOpportunityBySlug, getSimilarOpportunities } from "@/data/opportunities";
import { OpportunityDetail } from "@/components/opportunities/OpportunityDetail";

export default function OpportunityDetailPage({ params }: { params: { slug: string } }) {
  const opportunity = getOpportunityBySlug(params.slug);

  if (!opportunity) {
    notFound();
  }

  const similar = getSimilarOpportunities(opportunity);

  return <OpportunityDetail opportunity={opportunity} similar={similar} />;
}
