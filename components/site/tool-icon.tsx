import type { ComponentType } from "react";
import type { LucideProps } from "lucide-react";
import {
  Activity,
  BadgePercent,
  Beef,
  Calculator,
  Droplets,
  Dumbbell,
  Flame,
  HeartPulse,
  LineChart,
  NotebookPen,
  Ruler,
  Scale,
  UtensilsCrossed,
} from "lucide-react";

import type { ToolIconKey } from "@/content/types";
import { cn } from "@/lib/utils";

const iconMap = {
  activity: Activity,
  "badge-percent": BadgePercent,
  beef: Beef,
  calculator: Calculator,
  droplets: Droplets,
  dumbbell: Dumbbell,
  flame: Flame,
  "heart-pulse": HeartPulse,
  "line-chart": LineChart,
  "notebook-pen": NotebookPen,
  ruler: Ruler,
  scale: Scale,
  "utensils-crossed": UtensilsCrossed,
} satisfies Record<ToolIconKey, ComponentType<LucideProps>>;

type ToolIconProps = {
  icon: ToolIconKey;
  className?: string;
};

export function ToolIcon({ icon, className }: ToolIconProps) {
  const Icon = iconMap[icon];

  return <Icon className={cn("h-5 w-5", className)} aria-hidden="true" />;
}
