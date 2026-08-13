import { Opportunity, StudentProfile } from "@/lib/types";

const WEIGHTS = {
  interests: 40,
  opportunityType: 20,
  budget: 15,
  location: 15,
  grade: 10,
};

function scoreInterests(profile: StudentProfile, opportunity: Opportunity): number {
  if (profile.interests.length === 0) return WEIGHTS.interests * 0.6;
  const matches = opportunity.tags.filter((tag) => profile.interests.includes(tag)).length;
  if (matches === 0) return WEIGHTS.interests * 0.15;
  const ratio = Math.min(matches / Math.min(profile.interests.length, 3), 1);
  return WEIGHTS.interests * ratio;
}

function scoreOpportunityType(profile: StudentProfile, opportunity: Opportunity): number {
  if (profile.opportunityTypes.length === 0) return WEIGHTS.opportunityType * 0.7;
  const hasMatch = opportunity.opportunityTypes.some((type) => profile.opportunityTypes.includes(type));
  return hasMatch ? WEIGHTS.opportunityType : WEIGHTS.opportunityType * 0.1;
}

function scoreBudget(profile: StudentProfile, opportunity: Opportunity): number {
  if (!profile.budget || profile.budget === "Any") return WEIGHTS.budget;
  if (profile.budget === "Free only") {
    return opportunity.cost === "Free" ? WEIGHTS.budget : WEIGHTS.budget * 0.1;
  }
  if (profile.budget === "Under $100") {
    return opportunity.cost === "Free" || opportunity.cost === "Under $100"
      ? WEIGHTS.budget
      : WEIGHTS.budget * 0.2;
  }
  return WEIGHTS.budget * 0.5;
}

function scoreLocation(profile: StudentProfile, opportunity: Opportunity): number {
  if (!profile.location || profile.location === "Both") return WEIGHTS.location;
  if (opportunity.locationType === "Both") return WEIGHTS.location;
  return profile.location === opportunity.locationType ? WEIGHTS.location : WEIGHTS.location * 0.25;
}

function scoreGrade(profile: StudentProfile, opportunity: Opportunity): number {
  if (!profile.grade) return WEIGHTS.grade;
  return opportunity.gradeLevels.includes(profile.grade) ? WEIGHTS.grade : WEIGHTS.grade * 0.3;
}

export function computeFitScore(profile: StudentProfile, opportunity: Opportunity): number {
  const total =
    scoreInterests(profile, opportunity) +
    scoreOpportunityType(profile, opportunity) +
    scoreBudget(profile, opportunity) +
    scoreLocation(profile, opportunity) +
    scoreGrade(profile, opportunity);
  return Math.round(Math.min(total, 100));
}

export function getRecommendations(
  profile: StudentProfile,
  opportunities: Opportunity[],
  limit?: number
): (Opportunity & { fitScore: number })[] {
  const scored = opportunities.map((o) => ({ ...o, fitScore: computeFitScore(profile, o) }));
  scored.sort((a, b) => b.fitScore - a.fitScore || b.prestige - a.prestige);
  return limit ? scored.slice(0, limit) : scored;
}
