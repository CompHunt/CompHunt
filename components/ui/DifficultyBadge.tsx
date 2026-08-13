import { Difficulty } from "@/lib/types";
import { Badge } from "@/components/ui/Badge";

const difficultyTone: Record<Difficulty, "green" | "brand" | "amber" | "red"> = {
  Easy: "green",
  Moderate: "brand",
  Competitive: "amber",
  Elite: "red",
};

export function DifficultyBadge({ difficulty }: { difficulty: Difficulty }) {
  return <Badge tone={difficultyTone[difficulty]}>{difficulty}</Badge>;
}
