import { Card } from "@/components/ui/card";
import type { ProcessStep } from "@/content/types";

type ProcessStepsProps = {
  steps: ProcessStep[];
};

export function ProcessSteps({ steps }: ProcessStepsProps) {
  return (
    <div className="grid gap-4">
      {steps.map((step, index) => (
        <Card key={step.title} className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[color:var(--brand-gold)]/25 bg-[color:var(--brand-gold)]/10 text-sm font-semibold text-[color:var(--brand-gold)]">
              {index + 1}
            </div>
            <h3 className="font-semibold text-white">{step.title}</h3>
          </div>
          <p className="text-sm leading-7 text-white/72">{step.description}</p>
          {step.note ? <p className="text-xs uppercase tracking-[0.22em] text-white/45">{step.note}</p> : null}
        </Card>
      ))}
    </div>
  );
}
