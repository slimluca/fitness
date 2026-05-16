import Link from "next/link";

import type { EditorialIdea } from "@/content/types";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { normalizeCommercialHref } from "@/lib/commercial-links";

type EditorialIdeaCardProps = {
  idea: EditorialIdea;
};

export function EditorialIdeaCard({ idea }: EditorialIdeaCardProps) {
  return (
    <Card className="h-full space-y-4">
      <div className="flex items-center justify-between gap-3">
        <Badge variant="muted">{idea.category}</Badge>
        <span className="text-xs uppercase tracking-[0.24em] text-white/45">
          {idea.status}
        </span>
      </div>
      <div className="space-y-3">
        <h3 className="font-display text-3xl text-white">{idea.title}</h3>
        <p className="text-sm leading-7 text-white/72">{idea.description}</p>
      </div>
      <div className="space-y-2 text-xs uppercase tracking-[0.22em] text-white/45">
        <p>Primary keyword: {idea.primaryKeyword}</p>
        <p>Audience: {idea.audience}</p>
        <p>Intent: {idea.intent}</p>
      </div>
      <Link
        href={normalizeCommercialHref(idea.targetHref)}
        className="text-sm font-semibold text-[color:var(--brand-gold)]"
      >
        Related page
      </Link>
    </Card>
  );
}
