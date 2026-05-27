import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { ToolDefinition } from "@/content/types";
import { ToolIcon } from "@/components/site/tool-icon";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

type ToolCardProps = {
  tool: ToolDefinition;
};

function kindLabel(kind: ToolDefinition["kind"]) {
  switch (kind) {
    case "calculator":
      return "Calculator";
    case "planner":
      return "Planner";
    case "checklist":
      return "Checklist";
    case "guide":
      return "Guide";
    default:
      return "Tool";
  }
}

export function ToolCard({ tool }: ToolCardProps) {
  return (
    <Card className="group overflow-hidden p-0">
      <Link
        href={`/tools/${tool.slug}`}
        className="flex min-w-0 flex-col gap-4 p-5"
      >
        <div className="flex items-start justify-between gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/20 text-[color:var(--brand-gold)]">
            <ToolIcon icon={tool.icon} />
          </div>
          <Badge variant="muted">{kindLabel(tool.kind)}</Badge>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="font-display text-[1.45rem] leading-tight text-white sm:text-[1.62rem]">
            {tool.title}
          </h3>
          <p className="text-sm leading-7 text-white/70">{tool.summary}</p>
        </div>

        <div className="flex items-center justify-between gap-3 pt-3 text-sm font-semibold text-[color:var(--brand-gold)]">
          <span>Open tool</span>
          <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </div>
      </Link>
    </Card>
  );
}
