import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Category } from "@/lib/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const CATEGORY_TONE: Record<Category, string> = {
  Business: "orange",
  STEM: "brand",
  Research: "indigo",
  Writing: "pink",
  Arts: "fuchsia",
  Olympiads: "purple",
  Hackathons: "cyan",
  "MUN & Debate": "red",
  Leadership: "amber",
  "Summer Programs": "teal",
  Internships: "lime",
  Scholarships: "rose",
  Volunteering: "green",
};

export function categoryTone(category: Category) {
  return (CATEGORY_TONE[category] ?? "brand") as
    | "brand"
    | "orange"
    | "indigo"
    | "pink"
    | "fuchsia"
    | "purple"
    | "cyan"
    | "red"
    | "amber"
    | "teal"
    | "lime"
    | "rose"
    | "green";
}

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function daysRemaining(dateStr: string): number {
  const deadline = new Date(dateStr);
  const now = new Date();
  deadline.setHours(0, 0, 0, 0);
  now.setHours(0, 0, 0, 0);
  const diffMs = deadline.getTime() - now.getTime();
  return Math.ceil(diffMs / (1000 * 60 * 60 * 24));
}

export function countdownLabel(dateStr: string): string {
  const days = daysRemaining(dateStr);
  if (days < 0) return "Deadline passed";
  if (days === 0) return "Due today";
  if (days === 1) return "1 day remaining";
  return `${days} days remaining`;
}

export function countdownUrgency(dateStr: string): "urgent" | "soon" | "normal" | "passed" {
  const days = daysRemaining(dateStr);
  if (days < 0) return "passed";
  if (days <= 7) return "urgent";
  if (days <= 30) return "soon";
  return "normal";
}

export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trimEnd() + "…";
}
