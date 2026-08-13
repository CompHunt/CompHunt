export type Category =
  | "Business"
  | "STEM"
  | "Research"
  | "Writing"
  | "Arts"
  | "Olympiads"
  | "Hackathons"
  | "MUN & Debate"
  | "Leadership"
  | "Summer Programs"
  | "Internships"
  | "Scholarships"
  | "Volunteering";

export const CATEGORIES: Category[] = [
  "Business",
  "STEM",
  "Research",
  "Writing",
  "Arts",
  "Olympiads",
  "Hackathons",
  "MUN & Debate",
  "Leadership",
  "Summer Programs",
  "Internships",
  "Scholarships",
  "Volunteering",
];

export type Difficulty = "Easy" | "Moderate" | "Competitive" | "Elite";

export const DIFFICULTIES: Difficulty[] = ["Easy", "Moderate", "Competitive", "Elite"];

export type CostTier = "Free" | "Under $100" | "$100-$500" | "$500+";

export const COST_TIERS: CostTier[] = ["Free", "Under $100", "$100-$500", "$500+"];

export type LocationType = "Online" | "In-person" | "Both";

export type Interest =
  | "Business"
  | "Economics"
  | "Entrepreneurship"
  | "Engineering"
  | "Programming"
  | "Medicine"
  | "Biology"
  | "Physics"
  | "Chemistry"
  | "Math"
  | "AI"
  | "Writing"
  | "Debate"
  | "MUN"
  | "Environment"
  | "Art"
  | "Music"
  | "Sports"
  | "Finance";

export const INTERESTS: Interest[] = [
  "Business",
  "Economics",
  "Entrepreneurship",
  "Engineering",
  "Programming",
  "Medicine",
  "Biology",
  "Physics",
  "Chemistry",
  "Math",
  "AI",
  "Writing",
  "Debate",
  "MUN",
  "Environment",
  "Art",
  "Music",
  "Sports",
  "Finance",
];

export type OpportunityType =
  | "Competitions"
  | "Scholarships"
  | "Research"
  | "Summer Programs"
  | "Internships"
  | "Volunteering"
  | "Leadership";

export const OPPORTUNITY_TYPES: OpportunityType[] = [
  "Competitions",
  "Scholarships",
  "Research",
  "Summer Programs",
  "Internships",
  "Volunteering",
  "Leadership",
];

export type Budget = "Free only" | "Under $100" | "Any";

export type LocationPreference = "Online" | "In-person" | "Both";

export type TimeAvailability = "2 hours" | "5 hours" | "10+ hours";

export interface ChecklistItem {
  essay: boolean;
  resume: boolean;
  recommendationLetter: boolean;
  transcript: boolean;
  portfolio: boolean;
  interview: boolean;
}

export interface TimelineStep {
  label: string;
  date: string;
}

export interface Opportunity {
  id: string;
  slug: string;
  title: string;
  organizer: string;
  shortDescription: string;
  description: string;
  category: Category;
  opportunityTypes: OpportunityType[];
  tags: Interest[];
  country: string;
  locationType: LocationType;
  cost: CostTier;
  costDetail: string;
  difficulty: Difficulty;
  prestige: 1 | 2 | 3 | 4 | 5;
  acceptanceRate?: string;
  timeCommitment: string;
  hoursPerWeek: string;
  deadline: string;
  deadlineNote?: string;
  gradeLevels: number[];
  eligibility: string[];
  applicationProcess: string[];
  timeline: TimelineStep[];
  benefits: string[];
  skillsDeveloped: string[];
  prize?: string;
  officialWebsite: string;
  applicationTips: string[];
  checklist: ChecklistItem;
  noEssay: boolean;
  beginnerFriendly: boolean;
  featured: boolean;
  similarSlugs: string[];
}

export interface StudentProfile {
  age?: number;
  grade?: number;
  country?: string;
  interests: Interest[];
  careerInterests: string;
  opportunityTypes: OpportunityType[];
  budget?: Budget;
  location?: LocationPreference;
  timeAvailable?: TimeAvailability;
  onboardingComplete: boolean;
}

export const EMPTY_PROFILE: StudentProfile = {
  interests: [],
  careerInterests: "",
  opportunityTypes: [],
  onboardingComplete: false,
};
