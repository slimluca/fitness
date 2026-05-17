"use client";

import type { FormEvent, ReactNode } from "react";
import { useState } from "react";
import { CheckCircle2, ChevronDown, Clipboard, RotateCcw, Sparkles } from "lucide-react";

import type { ToolDefinition } from "@/content/types";
import { ToolIcon } from "@/components/site/tool-icon";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type ToolInterfaceProps = {
  tool: ToolDefinition;
};

type ToolStat = {
  label: string;
  value: string;
  note?: string;
};

type ToolOutcome = {
  headline: string;
  summary: string;
  stats: ToolStat[];
  meaning: string;
  advice: string;
  note?: string;
  highlights?: string[];
  copyText: string;
};

type ToolWorkspaceProps = {
  tool: ToolDefinition;
  helper: string;
  form: ReactNode;
  outcome: ToolOutcome | null;
};

type FieldProps = {
  label: string;
  hint?: string;
  children: ReactNode;
};

const activityFactors = {
  sedentary: 1.2,
  light: 1.375,
  moderate: 1.55,
  active: 1.725,
  "very-active": 1.9,
} as const;

function roundTo(value: number, step = 1) {
  return Math.round(value / step) * step;
}

function formatNumber(value: number, decimals = 0) {
  return value.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

function formatKcal(value: number) {
  return `${formatNumber(roundTo(value, 10))} kcal`;
}

function formatGrams(value: number) {
  return `${formatNumber(roundTo(value, 1), 1)} g`;
}

function formatLiters(value: number) {
  return `${formatNumber(value, 1)} L`;
}

function formatPercent(value: number) {
  return `${formatNumber(value, 1)}%`;
}

function formatPace(totalSeconds: number) {
  const safeSeconds = Math.max(0, Math.round(totalSeconds));
  const minutes = Math.floor(safeSeconds / 60);
  const seconds = safeSeconds % 60;
  return `${minutes}:${seconds.toString().padStart(2, "0")} / km`;
}

function getKindLabel(kind: ToolDefinition["kind"]) {
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

function Field({ label, hint, children }: FieldProps) {
  return (
    <label className="space-y-2.5">
      <div className="space-y-1.5">
        <span className="block text-sm font-medium text-white/82">{label}</span>
        {hint ? <span className="block text-xs leading-5 text-white/52">{hint}</span> : null}
      </div>
      {children}
    </label>
  );
}

type ToolSelectProps = {
  value: string;
  onChange: (value: string) => void;
  children: ReactNode;
};

function ToolSelect({ value, onChange, children }: ToolSelectProps) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-12 w-full appearance-none rounded-[18px] border border-white/12 bg-white/[0.045] px-4 pr-10 text-[15px] text-white/92 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] outline-none transition focus:border-[color:var(--brand-gold)] focus-visible:ring-2 focus-visible:ring-[color:var(--brand-gold)]/25"
      >
        {children}
      </select>
      <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/50" />
    </div>
  );
}

type ToolCheckboxProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: string;
  description: string;
};

function ToolCheckbox({ checked, onChange, label, description }: ToolCheckboxProps) {
  return (
    <label className="flex items-start gap-3 rounded-[20px] border border-white/10 bg-black/20 p-4 transition hover:border-white/16">
      <input
        type="checkbox"
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
        className="mt-1 h-4 w-4 rounded border-white/20 bg-transparent accent-[color:var(--brand-gold)]"
      />
      <span className="space-y-1">
        <span className="block text-sm font-medium text-white">{label}</span>
        <span className="block text-sm leading-6 text-white/62">{description}</span>
      </span>
    </label>
  );
}

function ToolActions({
  submitLabel,
  onReset,
}: {
  submitLabel: string;
  onReset: () => void;
}) {
  return (
    <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap sm:items-center">
      <Button type="submit" className="w-full sm:w-auto">
        {submitLabel}
      </Button>
      <Button type="button" variant="ghost" onClick={onReset} className="w-full sm:w-auto">
        <RotateCcw className="h-4 w-4" />
        Reset
      </Button>
    </div>
  );
}

function ToolResultPanel({
  toolTitle,
  outcome,
}: {
  toolTitle: string;
  outcome: ToolOutcome | null;
}) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    if (!outcome) {
      return;
    }

    if (typeof navigator === "undefined" || !navigator.clipboard?.writeText) {
      return;
    }

    await navigator.clipboard.writeText(outcome.copyText);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  if (!outcome) {
    return (
      <Card className="flex h-full flex-col gap-5">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-black/20 text-[color:var(--brand-gold)]">
          <Sparkles className="h-5 w-5" />
        </div>
        <div className="space-y-3">
          <Badge variant="muted">Result panel</Badge>
          <h2 className="font-display text-[2.1rem] leading-[0.98] text-white sm:text-[2.55rem]">
            Calculate first, then review the result clearly
          </h2>
          <p className="max-w-[38rem] text-sm leading-7 text-white/72">
            {toolTitle} is designed to stay compact and easy to use. Enter your details,
            run the tool, and this panel will show the result, what it means, and a more
            practical next step.
          </p>
        </div>
        <div className="rounded-[24px] border border-dashed border-white/12 bg-black/10 p-5 text-sm leading-7 text-white/58">
          These tools are for coaching context and self-education. They are useful
          starting points, not a replacement for personalised advice or medical care.
        </div>
      </Card>
    );
  }

  return (
    <Card className="flex h-full flex-col gap-5" aria-live="polite">
      <div className="flex items-start justify-between gap-3">
        <div className="space-y-3">
          <Badge>Result ready</Badge>
          <h2 className="font-display text-[2.1rem] leading-[0.98] text-white sm:text-[2.55rem]">
            {outcome.headline}
          </h2>
        </div>
        <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--brand-gold)]/25 bg-[color:var(--brand-gold)]/10 text-[color:var(--brand-gold)]">
          <CheckCircle2 className="h-5 w-5" />
        </div>
      </div>

      <p className="max-w-[40rem] text-sm leading-7 text-white/72">{outcome.summary}</p>

      {outcome.stats.length ? (
        <div className="metric-grid">
          {outcome.stats.map((stat) => (
            <div
              key={`${stat.label}-${stat.value}`}
              className="flex h-full flex-col rounded-[22px] border border-white/10 bg-black/20 p-4"
            >
              <p className="font-display text-xl leading-tight text-white sm:text-2xl">
                {stat.value}
              </p>
              <p className="mt-2 text-[10px] uppercase leading-5 tracking-[0.14em] text-white/46">
                {stat.label}
              </p>
              {stat.note ? (
                <p className="mt-2 text-xs leading-5 text-white/54">{stat.note}</p>
              ) : null}
            </div>
          ))}
        </div>
      ) : null}

      <div className="space-y-3 rounded-[24px] border border-white/10 bg-black/20 p-5">
        <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--brand-gold)]">
          What this means
        </p>
        <p className="text-sm leading-7 text-white/72">{outcome.meaning}</p>
      </div>

      <div className="space-y-3 rounded-[24px] border border-white/10 bg-white/5 p-5">
        <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--brand-gold)]">
          Practical advice
        </p>
        <p className="text-sm leading-7 text-white/72">{outcome.advice}</p>
      </div>

      {outcome.highlights?.length ? (
        <div className="rounded-[24px] border border-white/10 bg-black/20 p-5">
          <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--brand-gold)]">
            Helpful takeaways
          </p>
          <ul className="mt-3 space-y-2 text-sm leading-7 text-white/72">
            {outcome.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-3">
                <span className="mt-[0.65rem] h-1.5 w-1.5 rounded-full bg-[color:var(--brand-gold)]" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {outcome.note ? (
        <div className="rounded-[24px] border border-dashed border-white/12 bg-black/10 p-4 text-sm leading-7 text-white/56">
          {outcome.note}
        </div>
      ) : null}
      <div className="flex justify-start">
        <Button type="button" variant="ghost" size="sm" onClick={handleCopy}>
          <Clipboard className="h-4 w-4" />
          {copied ? "Copied" : "Copy summary"}
        </Button>
      </div>
    </Card>
  );
}

function ToolWorkspace({ tool, helper, form, outcome }: ToolWorkspaceProps) {
  return (
    <div className="grid gap-5 xl:grid-cols-[0.92fr_1.08fr] xl:items-stretch">
      <Card className="space-y-5">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-black/20 text-[color:var(--brand-gold)]">
              <ToolIcon icon={tool.icon} />
            </div>
            <div className="space-y-1">
              <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--brand-gold)]">
                {getKindLabel(tool.kind)} inputs
              </p>
              <h2 className="font-display text-[2rem] leading-[0.98] text-white sm:text-[2.2rem]">
                Use the tool
              </h2>
            </div>
          </div>
          <Badge variant="muted">{getKindLabel(tool.kind)}</Badge>
        </div>
        <p className="text-sm leading-7 text-white/72">{helper}</p>
        {form}
      </Card>

      <ToolResultPanel toolTitle={tool.title} outcome={outcome} />
    </div>
  );
}

function BmiCalculator({ tool }: ToolInterfaceProps) {
  const [height, setHeight] = useState("170");
  const [weight, setWeight] = useState("70");
  const [outcome, setOutcome] = useState<ToolOutcome | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const heightCm = Number(height);
    const weightKg = Number(weight);
    const bmi = weightKg / (heightCm / 100) ** 2;
    const roundedBmi = Number(bmi.toFixed(1));

    let category = "Healthy range";
    let meaning =
      "This BMI sits in the standard healthy range. For many people, that suggests body weight is not the main issue. Routine quality, strength, sleep, and consistency usually matter more from here.";
    let advice =
      "Use the number as context, not as the whole story. Keep training consistent, prioritise protein, and track a few meaningful metrics instead of focusing on one figure alone.";

    if (roundedBmi < 18.5) {
      category = "Below the usual range";
      meaning =
        "This BMI is lower than the standard healthy range. That can simply mean you are light for your height, but it may also suggest you need a more deliberate strength and nutrition plan.";
      advice =
        "Focus on regular meals, enough protein, and progressive strength training before adding unnecessary fatigue or large amounts of extra cardio.";
    } else if (roundedBmi >= 25 && roundedBmi < 30) {
      category = "Above the usual range";
      meaning =
        "This BMI is above the standard healthy range. It can still be influenced by body composition, but it usually signals that a clearer fat-loss or activity plan could help.";
      advice =
        "Pair this with calorie awareness, strength training, and a realistic step target. The most useful next move is usually better adherence, not extreme restriction.";
    } else if (roundedBmi >= 30) {
      category = "Higher BMI range";
      meaning =
        "This BMI is well above the standard range. It is still only one data point, but it often means structure around food, movement, and consistency will matter a lot.";
      advice =
        "Think sustainable first. Build training and nutrition habits you can keep for months, not a fast short-term fix that is hard to maintain.";
    }

    const summary = `Your estimated BMI is ${roundedBmi}, which sits in the ${category.toLowerCase()}.`;

    setOutcome({
      headline: `BMI ${roundedBmi}`,
      summary,
      stats: [
        { label: "BMI", value: roundedBmi.toFixed(1) },
        { label: "Category", value: category },
      ],
      meaning,
      advice,
      highlights: [
        "BMI is a quick screening tool, not a full assessment.",
        "Muscle mass, body composition, and routine quality still matter.",
        "Progress photos, waist measurements, and strength trends often give better coaching context.",
      ],
      note: "BMI does not distinguish fat mass from lean mass and should never be treated as medical advice.",
      copyText: `${summary} ${advice}`,
    });
  }

  function handleReset() {
    setHeight("170");
    setWeight("70");
    setOutcome(null);
  }

  return (
    <ToolWorkspace
      tool={tool}
      helper="Use metric height and weight to get a quick body-weight context check before reading the interpretation."
      outcome={outcome}
      form={
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Height (cm)">
              <Input
                type="number"
                min="100"
                step="1"
                value={height}
                onChange={(event) => setHeight(event.target.value)}
                required
              />
            </Field>
            <Field label="Weight (kg)">
              <Input
                type="number"
                min="25"
                step="0.1"
                value={weight}
                onChange={(event) => setWeight(event.target.value)}
                required
              />
            </Field>
          </div>
          <ToolActions submitLabel="Calculate BMI" onReset={handleReset} />
        </form>
      }
    />
  );
}

function CalorieCalculator({ tool }: ToolInterfaceProps) {
  const [sex, setSex] = useState("male");
  const [age, setAge] = useState("34");
  const [height, setHeight] = useState("175");
  const [weight, setWeight] = useState("78");
  const [activity, setActivity] = useState<keyof typeof activityFactors>("moderate");
  const [outcome, setOutcome] = useState<ToolOutcome | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const ageValue = Number(age);
    const heightValue = Number(height);
    const weightValue = Number(weight);
    const bmr =
      sex === "male"
        ? 10 * weightValue + 6.25 * heightValue - 5 * ageValue + 5
        : 10 * weightValue + 6.25 * heightValue - 5 * ageValue - 161;
    const maintenance = bmr * activityFactors[activity];
    const fatLoss = maintenance * 0.85;
    const muscleGain = maintenance * 1.1;

    setOutcome({
      headline: formatKcal(maintenance),
      summary: `A practical maintenance starting point is about ${formatKcal(maintenance)} per day.`,
      stats: [
        { label: "BMR", value: formatKcal(bmr) },
        { label: "Maintenance", value: formatKcal(maintenance) },
        { label: "Fat loss target", value: formatKcal(fatLoss) },
        { label: "Muscle gain target", value: formatKcal(muscleGain) },
      ],
      meaning:
        "This result gives you a sensible opening target, not a final answer. Your true maintenance level becomes clearer after one to two weeks of consistent intake and body-weight tracking.",
      advice:
        "Choose the target that matches your goal, keep it steady for at least 10 to 14 days, then adjust based on body-weight trend, energy, training performance, and how sustainable the intake feels.",
      highlights: [
        "Maintenance is your best baseline for decision-making.",
        "Fat-loss targets work better when the deficit is sustainable, not aggressive.",
        "Muscle gain usually works best with a smaller surplus and solid training quality.",
      ],
      note: "Calorie calculators are estimates. Real maintenance should be refined with actual intake, recovery, and progress data.",
      copyText: `Estimated maintenance calories: ${formatKcal(maintenance)}. Fat loss target: ${formatKcal(fatLoss)}. Muscle gain target: ${formatKcal(muscleGain)}.`,
    });
  }

  function handleReset() {
    setSex("male");
    setAge("34");
    setHeight("175");
    setWeight("78");
    setActivity("moderate");
    setOutcome(null);
  }

  return (
    <ToolWorkspace
      tool={tool}
      helper="This estimate uses a common calorie formula and activity multiplier to give you a practical starting target."
      outcome={outcome}
      form={
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Sex">
              <ToolSelect value={sex} onChange={setSex}>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </ToolSelect>
            </Field>
            <Field label="Age">
              <Input
                type="number"
                min="16"
                step="1"
                value={age}
                onChange={(event) => setAge(event.target.value)}
                required
              />
            </Field>
            <Field label="Height (cm)">
              <Input
                type="number"
                min="100"
                step="1"
                value={height}
                onChange={(event) => setHeight(event.target.value)}
                required
              />
            </Field>
            <Field label="Weight (kg)">
              <Input
                type="number"
                min="25"
                step="0.1"
                value={weight}
                onChange={(event) => setWeight(event.target.value)}
                required
              />
            </Field>
          </div>
          <Field label="Activity level">
            <ToolSelect value={activity} onChange={(value) => setActivity(value as keyof typeof activityFactors)}>
              <option value="sedentary">Sedentary</option>
              <option value="light">Lightly active</option>
              <option value="moderate">Moderately active</option>
              <option value="active">Very active</option>
              <option value="very-active">Extremely active</option>
            </ToolSelect>
          </Field>
          <ToolActions submitLabel="Calculate calories" onReset={handleReset} />
        </form>
      }
    />
  );
}

function MacroCalculator({ tool }: ToolInterfaceProps) {
  const [calories, setCalories] = useState("2200");
  const [goal, setGoal] = useState("fat-loss");
  const [outcome, setOutcome] = useState<ToolOutcome | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const caloriesValue = Number(calories);
    const ratios =
      goal === "fat-loss"
        ? { protein: 0.35, carbs: 0.3, fats: 0.35, label: "fat-loss" }
        : goal === "muscle-gain"
          ? { protein: 0.3, carbs: 0.45, fats: 0.25, label: "muscle-gain" }
          : { protein: 0.3, carbs: 0.4, fats: 0.3, label: "balanced" };

    const protein = (caloriesValue * ratios.protein) / 4;
    const carbs = (caloriesValue * ratios.carbs) / 4;
    const fats = (caloriesValue * ratios.fats) / 9;

    setOutcome({
      headline: `${formatGrams(protein)} protein`,
      summary: `For ${formatKcal(caloriesValue)}, a ${ratios.label} split gives you a clear starting macro structure.`,
      stats: [
        { label: "Protein", value: formatGrams(protein) },
        { label: "Carbs", value: formatGrams(carbs) },
        { label: "Fats", value: formatGrams(fats) },
      ],
      meaning:
        "These macros are a practical structure, not a requirement for perfection. They help you organise meals around the goal instead of guessing from day to day.",
      advice:
        "Hit protein first, keep meal timing realistic, and let carbohydrate and fat distribution support your training schedule, appetite, and adherence.",
      highlights: [
        "Macros are most useful when paired with a calorie target you can actually sustain.",
        "Protein helps anchor recovery and satiety.",
        "Carbs and fats can be adjusted later if energy, digestion, or training performance need improving.",
      ],
      note: "Macro splits are still estimates. Fine-tune them from real appetite, performance, and consistency data.",
      copyText: `For ${formatKcal(caloriesValue)}, a starting macro split is ${formatGrams(protein)} protein, ${formatGrams(carbs)} carbs, and ${formatGrams(fats)} fats.`,
    });
  }

  function handleReset() {
    setCalories("2200");
    setGoal("fat-loss");
    setOutcome(null);
  }

  return (
    <ToolWorkspace
      tool={tool}
      helper="Enter a daily calorie target first, then choose the goal that best matches how you want the plan to work."
      outcome={outcome}
      form={
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Calories per day">
              <Input
                type="number"
                min="1200"
                step="10"
                value={calories}
                onChange={(event) => setCalories(event.target.value)}
                required
              />
            </Field>
            <Field label="Goal">
              <ToolSelect value={goal} onChange={setGoal}>
                <option value="fat-loss">Fat loss</option>
                <option value="balanced">Balanced maintenance</option>
                <option value="muscle-gain">Muscle gain</option>
              </ToolSelect>
            </Field>
          </div>
          <ToolActions submitLabel="Calculate macros" onReset={handleReset} />
        </form>
      }
    />
  );
}

function ProteinCalculator({ tool }: ToolInterfaceProps) {
  const [weight, setWeight] = useState("70");
  const [goal, setGoal] = useState("general");
  const [outcome, setOutcome] = useState<ToolOutcome | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const weightValue = Number(weight);
    const factor =
      goal === "fat-loss"
        ? 2
        : goal === "muscle-gain"
          ? 1.8
          : goal === "recovery"
            ? 1.7
            : 1.6;
    const target = weightValue * factor;
    const lower = weightValue * Math.max(1.4, factor - 0.2);
    const upper = weightValue * (factor + 0.2);

    setOutcome({
      headline: formatGrams(target),
      summary: `A practical daily protein target is about ${formatGrams(target)} for this goal.`,
      stats: [
        { label: "Target", value: formatGrams(target) },
        { label: "Suggested range", value: `${formatGrams(lower)} - ${formatGrams(upper)}` },
        { label: "Across 4 meals", value: formatGrams(target / 4) },
      ],
      meaning:
        "This target helps create a clear daily protein floor for recovery, satiety, and body-composition support. It does not need to be hit perfectly every single day to be useful.",
      advice:
        "Make protein easy by anchoring each main meal around one reliable protein source. If appetite is low, simplify the meals instead of relying on willpower later in the day.",
      highlights: [
        "A clear daily minimum is more useful than vague 'eat more protein' advice.",
        "Consistency across the week matters more than a perfect single day.",
        "Pair this with calories and meal structure for the strongest result.",
      ],
      note: "Protein targets can vary with training load, age, and appetite, so treat this as a practical coaching estimate.",
      copyText: `Estimated protein target: ${formatGrams(target)} per day, with a practical range of ${formatGrams(lower)} to ${formatGrams(upper)}.`,
    });
  }

  function handleReset() {
    setWeight("70");
    setGoal("general");
    setOutcome(null);
  }

  return (
    <ToolWorkspace
      tool={tool}
      helper="Choose the goal that best matches the next phase of training and nutrition, then use the target as a steady daily anchor."
      outcome={outcome}
      form={
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Body weight (kg)">
              <Input
                type="number"
                min="25"
                step="0.1"
                value={weight}
                onChange={(event) => setWeight(event.target.value)}
                required
              />
            </Field>
            <Field label="Goal">
              <ToolSelect value={goal} onChange={setGoal}>
                <option value="general">General fitness</option>
                <option value="fat-loss">Fat loss</option>
                <option value="muscle-gain">Muscle gain</option>
                <option value="recovery">Recovery support</option>
              </ToolSelect>
            </Field>
          </div>
          <ToolActions submitLabel="Calculate protein" onReset={handleReset} />
        </form>
      }
    />
  );
}

function WaterIntakeCalculator({ tool }: ToolInterfaceProps) {
  const [weight, setWeight] = useState("70");
  const [activity, setActivity] = useState("moderate");
  const [outcome, setOutcome] = useState<ToolOutcome | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const weightValue = Number(weight);
    const baseline = weightValue * 0.033;
    const addOn =
      activity === "low" ? 0.35 : activity === "moderate" ? 0.7 : 1.0;
    const target = baseline + addOn;

    setOutcome({
      headline: formatLiters(target),
      summary: `A sensible hydration target is about ${formatLiters(target)} per day for this body weight and activity level.`,
      stats: [
        { label: "Baseline target", value: formatLiters(baseline) },
        { label: "Training day target", value: formatLiters(target) },
        { label: "Extra from activity", value: formatLiters(addOn) },
      ],
      meaning:
        "This target helps you set a useful baseline for daily hydration. Warm weather, sweat rate, and session intensity can raise needs beyond the baseline quickly.",
      advice:
        "Keep hydration visible and easy. Start earlier in the day, sip around training instead of catching up late, and pay attention to heat, sweat, and fatigue during harder weeks.",
      highlights: [
        "Hydration needs often climb in warm and humid conditions.",
        "Training days usually need more than rest days.",
        "A steady daily habit works better than occasional catch-up drinking.",
      ],
      note: "This estimate is not medical advice and should be adapted if a doctor has given you specific fluid guidance.",
      copyText: `Suggested hydration target: ${formatLiters(target)} per day, including activity-related intake.`,
    });
  }

  function handleReset() {
    setWeight("70");
    setActivity("moderate");
    setOutcome(null);
  }

  return (
    <ToolWorkspace
      tool={tool}
      helper="Use body weight plus a simple activity adjustment to set a hydration target that is practical enough to follow."
      outcome={outcome}
      form={
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Body weight (kg)">
              <Input
                type="number"
                min="25"
                step="0.1"
                value={weight}
                onChange={(event) => setWeight(event.target.value)}
                required
              />
            </Field>
            <Field label="Activity level">
              <ToolSelect value={activity} onChange={setActivity}>
                <option value="low">Low activity</option>
                <option value="moderate">Moderate activity</option>
                <option value="high">High activity</option>
              </ToolSelect>
            </Field>
          </div>
          <ToolActions submitLabel="Calculate water target" onReset={handleReset} />
        </form>
      }
    />
  );
}

function BodyFatEstimator({ tool }: ToolInterfaceProps) {
  const [sex, setSex] = useState("male");
  const [age, setAge] = useState("34");
  const [height, setHeight] = useState("175");
  const [weight, setWeight] = useState("78");
  const [outcome, setOutcome] = useState<ToolOutcome | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const ageValue = Number(age);
    const heightValue = Number(height);
    const weightValue = Number(weight);
    const bmi = weightValue / (heightValue / 100) ** 2;
    const sexValue = sex === "male" ? 1 : 0;
    const estimate = Math.min(
      55,
      Math.max(5, 1.2 * bmi + 0.23 * ageValue - 10.8 * sexValue - 5.4),
    );
    const rounded = Number(estimate.toFixed(1));

    let category = "Moderate range";

    if (sex === "male") {
      category =
        rounded < 10
          ? "Lean range"
          : rounded < 18
            ? "Athletic range"
            : rounded < 25
              ? "Moderate range"
              : "Higher range";
    } else {
      category =
        rounded < 18
          ? "Lean range"
          : rounded < 25
            ? "Athletic range"
            : rounded < 32
              ? "Moderate range"
              : "Higher range";
    }

    setOutcome({
      headline: formatPercent(rounded),
      summary: `A simple body-fat estimate puts you at about ${formatPercent(rounded)} in the ${category.toLowerCase()}.`,
      stats: [
        { label: "Estimated body fat", value: formatPercent(rounded) },
        { label: "Category", value: category },
        { label: "BMI context", value: bmi.toFixed(1) },
      ],
      meaning:
        "This estimate can help give context, but it should never be treated as a precise measure. Photos, waist data, training performance, and how you actually feel often tell the coaching story better.",
      advice:
        "Use this estimate alongside consistent training, nutrition, and progress tracking. If the goal is body composition change, trend-based decisions matter more than reacting to one number.",
      highlights: [
        "Body-fat estimates are best used as a trend reference, not a verdict.",
        "Visual change, waist measurements, and training quality usually matter more over time.",
        "Private coaching helps translate the estimate into a more useful plan.",
      ],
      note: "This tool uses a simple estimation method and should be treated as guidance only, not a clinical or medical measurement.",
      copyText: `Estimated body-fat percentage: ${formatPercent(rounded)} (${category.toLowerCase()}).`,
    });
  }

  function handleReset() {
    setSex("male");
    setAge("34");
    setHeight("175");
    setWeight("78");
    setOutcome(null);
  }

  return (
    <ToolWorkspace
      tool={tool}
      helper="This estimator stays deliberately simple so it is easy to use, quick to understand, and clearly labelled as an estimate."
      outcome={outcome}
      form={
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Sex">
              <ToolSelect value={sex} onChange={setSex}>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </ToolSelect>
            </Field>
            <Field label="Age">
              <Input
                type="number"
                min="16"
                step="1"
                value={age}
                onChange={(event) => setAge(event.target.value)}
                required
              />
            </Field>
            <Field label="Height (cm)">
              <Input
                type="number"
                min="100"
                step="1"
                value={height}
                onChange={(event) => setHeight(event.target.value)}
                required
              />
            </Field>
            <Field label="Weight (kg)">
              <Input
                type="number"
                min="25"
                step="0.1"
                value={weight}
                onChange={(event) => setWeight(event.target.value)}
                required
              />
            </Field>
          </div>
          <ToolActions submitLabel="Estimate body fat" onReset={handleReset} />
        </form>
      }
    />
  );
}

function OneRepMaxCalculator({ tool }: ToolInterfaceProps) {
  const [weight, setWeight] = useState("80");
  const [reps, setReps] = useState("5");
  const [outcome, setOutcome] = useState<ToolOutcome | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const weightValue = Number(weight);
    const repsValue = Number(reps);
    const oneRepMax = weightValue * (1 + repsValue / 30);

    setOutcome({
      headline: `${formatNumber(oneRepMax, 1)} kg`,
      summary: `Your estimated one-rep max is about ${formatNumber(oneRepMax, 1)} kg based on this working set.`,
      stats: [
        { label: "Estimated 1RM", value: `${formatNumber(oneRepMax, 1)} kg` },
        { label: "90%", value: `${formatNumber(oneRepMax * 0.9, 1)} kg` },
        { label: "80%", value: `${formatNumber(oneRepMax * 0.8, 1)} kg` },
        { label: "70%", value: `${formatNumber(oneRepMax * 0.7, 1)} kg` },
        { label: "60%", value: `${formatNumber(oneRepMax * 0.6, 1)} kg` },
      ],
      meaning:
        "An estimated max is often enough for practical training. It helps you set cleaner loading targets without forcing a true maximal lift every time.",
      advice:
        "Use the estimate to structure training blocks, but let technique quality and recovery still guide the real load you choose on the day.",
      highlights: [
        "Heavier percentages suit lower-rep strength work.",
        "Mid-range percentages are often ideal for volume and skill reinforcement.",
        "Use your best clean set, not a sloppy grinder, for the most useful estimate.",
      ],
      note: "This result is an estimate based on a rep formula, not a substitute for coaching judgement or safe lifting decisions.",
      copyText: `Estimated one-rep max: ${formatNumber(oneRepMax, 1)} kg. Key training loads: 80% = ${formatNumber(oneRepMax * 0.8, 1)} kg, 70% = ${formatNumber(oneRepMax * 0.7, 1)} kg.`,
    });
  }

  function handleReset() {
    setWeight("80");
    setReps("5");
    setOutcome(null);
  }

  return (
    <ToolWorkspace
      tool={tool}
      helper="Enter a solid working set, not a messy all-out attempt. The estimate is best when the set quality is still high."
      outcome={outcome}
      form={
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Weight lifted (kg)">
              <Input
                type="number"
                min="5"
                step="0.5"
                value={weight}
                onChange={(event) => setWeight(event.target.value)}
                required
              />
            </Field>
            <Field label="Repetitions completed">
              <Input
                type="number"
                min="1"
                max="12"
                step="1"
                value={reps}
                onChange={(event) => setReps(event.target.value)}
                required
              />
            </Field>
          </div>
          <ToolActions submitLabel="Estimate one-rep max" onReset={handleReset} />
        </form>
      }
    />
  );
}

function IdealWeightRangeCalculator({ tool }: ToolInterfaceProps) {
  const [height, setHeight] = useState("170");
  const [outcome, setOutcome] = useState<ToolOutcome | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const heightMeters = Number(height) / 100;
    const lower = 18.5 * heightMeters * heightMeters;
    const upper = 24.9 * heightMeters * heightMeters;
    const midpoint = (lower + upper) / 2;

    setOutcome({
      headline: `${formatNumber(lower, 1)} - ${formatNumber(upper, 1)} kg`,
      summary: `A simple height-based reference range is about ${formatNumber(lower, 1)} to ${formatNumber(upper, 1)} kg.`,
      stats: [
        { label: "Lower end", value: `${formatNumber(lower, 1)} kg` },
        { label: "Midpoint", value: `${formatNumber(midpoint, 1)} kg` },
        { label: "Upper end", value: `${formatNumber(upper, 1)} kg` },
      ],
      meaning:
        "This range is only a broad reference built from height. It does not account for frame, muscle mass, training history, or body-composition preferences.",
      advice:
        "Use the range gently. If you train seriously or have specific physique goals, a better target often comes from performance, measurements, confidence, and adherence instead of one ideal number.",
      highlights: [
        "A useful weight target should still fit your training, recovery, and lifestyle.",
        "Muscle mass can make a broad range feel less meaningful on its own.",
        "Long-term progress is usually easier when the target is practical, not extreme.",
      ],
      note: "This tool offers a general reference range only and should not be treated as medical advice.",
      copyText: `Estimated height-based weight range: ${formatNumber(lower, 1)} to ${formatNumber(upper, 1)} kg.`,
    });
  }

  function handleReset() {
    setHeight("170");
    setOutcome(null);
  }

  return (
    <ToolWorkspace
      tool={tool}
      helper="Enter height in centimetres to see a broad reference range. The output is intentionally simple and not presented as a strict target."
      outcome={outcome}
      form={
        <form onSubmit={handleSubmit} className="space-y-5">
          <Field label="Height (cm)">
            <Input
              type="number"
              min="100"
              step="1"
              value={height}
              onChange={(event) => setHeight(event.target.value)}
              required
            />
          </Field>
          <ToolActions submitLabel="Show range" onReset={handleReset} />
        </form>
      }
    />
  );
}

function PaceAndCardioZoneCalculator({ tool }: ToolInterfaceProps) {
  const [age, setAge] = useState("34");
  const [restingHeartRate, setRestingHeartRate] = useState("60");
  const [paceMinutes, setPaceMinutes] = useState("6");
  const [paceSeconds, setPaceSeconds] = useState("0");
  const [outcome, setOutcome] = useState<ToolOutcome | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const ageValue = Number(age);
    const resting = restingHeartRate ? Number(restingHeartRate) : null;
    const maxHr = Math.round(208 - 0.7 * ageValue);
    const reserve = resting ? maxHr - resting : null;

    const buildZone = (low: number, high: number) => `${Math.round(low)}-${Math.round(high)} bpm`;

    const zone1 = resting && reserve
      ? buildZone(resting + reserve * 0.5, resting + reserve * 0.6)
      : buildZone(maxHr * 0.5, maxHr * 0.6);
    const zone2 = resting && reserve
      ? buildZone(resting + reserve * 0.6, resting + reserve * 0.7)
      : buildZone(maxHr * 0.6, maxHr * 0.7);
    const zone3 = resting && reserve
      ? buildZone(resting + reserve * 0.7, resting + reserve * 0.8)
      : buildZone(maxHr * 0.7, maxHr * 0.8);
    const zone4 = resting && reserve
      ? buildZone(resting + reserve * 0.8, resting + reserve * 0.9)
      : buildZone(maxHr * 0.8, maxHr * 0.9);
    const zone5 = resting && reserve
      ? buildZone(resting + reserve * 0.9, maxHr)
      : buildZone(maxHr * 0.9, maxHr);

    const hasPace = paceMinutes !== "" || paceSeconds !== "";
    const paceSecondsValue = Number(paceMinutes || 0) * 60 + Number(paceSeconds || 0);
    const easyPace = hasPace ? `${formatPace(paceSecondsValue + 45)} - ${formatPace(paceSecondsValue + 90)}` : "Optional";
    const steadyPace = hasPace ? `${formatPace(paceSecondsValue + 20)} - ${formatPace(paceSecondsValue + 40)}` : "Optional";
    const tempoPace = hasPace ? `${formatPace(Math.max(0, paceSecondsValue - 5))} - ${formatPace(paceSecondsValue + 15)}` : "Optional";

    setOutcome({
      headline: `${maxHr} bpm max HR`,
      summary: `Your estimated max heart rate is about ${maxHr} bpm, with Zone 2 around ${zone2}.`,
      stats: [
        { label: "Estimated max HR", value: `${maxHr} bpm` },
        { label: "Zone 2", value: zone2 },
        { label: "Zone 4", value: zone4 },
        { label: "Easy pace", value: easyPace },
      ],
      meaning:
        "These ranges help turn cardio work into something more structured. Zone 2 is usually the most useful starting point for base conditioning, while higher zones are better reserved for more deliberate harder work.",
      advice:
        "Keep most conditioning easier than you think, especially if strength, fat loss, or recovery still matter. Use hard cardio intentionally instead of letting every session drift there.",
      highlights: [
        `Zone 1: ${zone1} for very easy recovery work`,
        `Zone 2: ${zone2} for aerobic base and repeatable conditioning`,
        `Zone 3: ${zone3} for steady efforts that feel controlled`,
        `Zone 4: ${zone4} for hard intervals and threshold-style work`,
        `Zone 5: ${zone5} for short, very hard efforts`,
        `Steady pace guide: ${steadyPace}`,
        `Tempo pace guide: ${tempoPace}`,
      ],
      note: "Heart-rate zones and pace ranges are estimates only. Adjust them with real effort, recovery, and actual performance.",
      copyText: `Estimated max HR: ${maxHr} bpm. Zone 2: ${zone2}. Easy pace guide: ${easyPace}.`,
    });
  }

  function handleReset() {
    setAge("34");
    setRestingHeartRate("60");
    setPaceMinutes("6");
    setPaceSeconds("0");
    setOutcome(null);
  }

  return (
    <ToolWorkspace
      tool={tool}
      helper="Age is enough to estimate heart-rate zones. Resting heart rate and current pace are optional if you want a more practical conditioning picture."
      outcome={outcome}
      form={
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Age">
              <Input
                type="number"
                min="16"
                step="1"
                value={age}
                onChange={(event) => setAge(event.target.value)}
                required
              />
            </Field>
            <Field label="Resting heart rate (optional)" hint="Leave blank if unknown">
              <Input
                type="number"
                min="35"
                max="110"
                step="1"
                value={restingHeartRate}
                onChange={(event) => setRestingHeartRate(event.target.value)}
              />
            </Field>
            <Field label="Current pace minutes / km" hint="Optional">
              <div className="grid grid-cols-2 gap-4">
                <Input
                  type="number"
                  min="0"
                  step="1"
                  value={paceMinutes}
                  onChange={(event) => setPaceMinutes(event.target.value)}
                />
                <Input
                  type="number"
                  min="0"
                  max="59"
                  step="1"
                  value={paceSeconds}
                  onChange={(event) => setPaceSeconds(event.target.value)}
                />
              </div>
            </Field>
          </div>
          <ToolActions submitLabel="Calculate cardio zones" onReset={handleReset} />
        </form>
      }
    />
  );
}

function StepGoalCalculator({ tool }: ToolInterfaceProps) {
  const [currentSteps, setCurrentSteps] = useState("5500");
  const [goal, setGoal] = useState("general");
  const [activityLevel, setActivityLevel] = useState("light");
  const [outcome, setOutcome] = useState<ToolOutcome | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const current = Number(currentSteps);
    const base =
      goal === "fat-loss"
        ? 9500
        : goal === "active"
          ? 11000
          : goal === "habit-reset"
            ? 7000
            : 8000;
    const increment =
      goal === "fat-loss" ? 2500 : goal === "active" ? 2000 : goal === "habit-reset" ? 1000 : 1500;
    const adjustment =
      activityLevel === "sedentary" ? 1000 : activityLevel === "active" ? -500 : 0;
    const target = Math.max(base + adjustment, current + increment);
    const roundedTarget = roundTo(target, 250);
    const weeklyIncrease = current >= roundedTarget ? 0 : Math.max(500, roundTo((roundedTarget - current) / 3, 250));

    setOutcome({
      headline: `${formatNumber(roundedTarget)} steps`,
      summary: `A practical daily target is about ${formatNumber(roundedTarget)} steps based on your current average and goal.`,
      stats: [
        { label: "Current average", value: `${formatNumber(current)} steps` },
        { label: "Suggested target", value: `${formatNumber(roundedTarget)} steps` },
        { label: "Weekly increase", value: weeklyIncrease ? `${formatNumber(weeklyIncrease)} steps` : "Hold steady" },
      ],
      meaning:
        "A useful step target should be high enough to move progress forward but low enough that you can actually repeat it during busy weeks. That is where most people get better long-term results.",
      advice:
        "Build the target gradually, lock in the easiest walking windows first, and use the number to support training rather than create extra burnout.",
      highlights: [
        "Consistency beats occasional huge step days.",
        "A realistic daily minimum often works better than chasing a heroic target.",
        "Walking is one of the easiest ways to support recovery, appetite control, and fat loss adherence.",
      ],
      note: "This target is a practical coaching estimate. Adjust it if recovery, schedule, or training quality start to suffer.",
      copyText: `Suggested daily step target: ${formatNumber(roundedTarget)} steps. Recommended weekly increase: ${weeklyIncrease ? `${formatNumber(weeklyIncrease)} steps` : "hold current level"}.`,
    });
  }

  function handleReset() {
    setCurrentSteps("5500");
    setGoal("general");
    setActivityLevel("light");
    setOutcome(null);
  }

  return (
    <ToolWorkspace
      tool={tool}
      helper="A good step target should feel achievable enough to repeat, especially if fat loss or consistency is the real priority."
      outcome={outcome}
      form={
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Current average daily steps">
              <Input
                type="number"
                min="1000"
                step="100"
                value={currentSteps}
                onChange={(event) => setCurrentSteps(event.target.value)}
                required
              />
            </Field>
            <Field label="Main goal">
              <ToolSelect value={goal} onChange={setGoal}>
                <option value="general">General fitness</option>
                <option value="fat-loss">Fat loss</option>
                <option value="active">More active lifestyle</option>
                <option value="habit-reset">Rebuild movement habits</option>
              </ToolSelect>
            </Field>
            <Field label="Current activity level">
              <ToolSelect value={activityLevel} onChange={setActivityLevel}>
                <option value="sedentary">Mostly sedentary</option>
                <option value="light">Lightly active</option>
                <option value="active">Already active</option>
              </ToolSelect>
            </Field>
          </div>
          <ToolActions submitLabel="Set step goal" onReset={handleReset} />
        </form>
      }
    />
  );
}

function WorkoutSplitPlanner({ tool }: ToolInterfaceProps) {
  const [experience, setExperience] = useState("beginner");
  const [days, setDays] = useState("3");
  const [goal, setGoal] = useState("general");
  const [outcome, setOutcome] = useState<ToolOutcome | null>(null);

  function buildSplit(daysPerWeek: number, level: string, targetGoal: string) {
    if (daysPerWeek <= 2) {
      return {
        title: "2-day full-body split",
        sessions: ["Full Body A", "Full Body B"],
        focus: "prioritise full-body work and repetition quality",
      };
    }

    if (daysPerWeek === 3) {
      if (level === "beginner" || targetGoal === "general" || targetGoal === "fat-loss") {
        return {
          title: "3-day full-body split",
          sessions: ["Full Body A", "Full Body B", "Full Body C"],
          focus: "build movement quality and repeat the basics often",
        };
      }

      if (targetGoal === "strength") {
        return {
          title: "3-day strength split",
          sessions: ["Full Body Strength", "Upper Accessory", "Lower + Core"],
          focus: "keep the main lifts structured and manageable",
        };
      }

      return {
        title: "3-day upper/lower/full-body split",
        sessions: ["Upper", "Lower", "Full Body Pump"],
        focus: "balance growth work with enough recovery",
      };
    }

    if (daysPerWeek === 4) {
      if (targetGoal === "muscle") {
        return {
          title: "4-day upper/lower split",
          sessions: ["Upper 1", "Lower 1", "Upper 2", "Lower 2"],
          focus: "repeat movement patterns with enough weekly volume",
        };
      }

      if (targetGoal === "strength") {
        return {
          title: "4-day strength split",
          sessions: ["Upper Strength", "Lower Strength", "Upper Volume", "Lower Volume"],
          focus: "separate heavy work from volume so recovery stays cleaner",
        };
      }

      return {
        title: "4-day mixed split",
        sessions: ["Upper", "Lower", "Full Body", "Conditioning + Core"],
        focus: "keep progress balanced across strength, movement, and adherence",
      };
    }

    if (daysPerWeek === 5) {
      if (targetGoal === "muscle") {
        return {
          title: "5-day push/pull/legs split",
          sessions: ["Push", "Pull", "Legs", "Upper", "Lower"],
          focus: "drive volume while keeping each session focused",
        };
      }

      if (targetGoal === "strength") {
        return {
          title: "5-day strength-focused split",
          sessions: ["Lower Strength", "Upper Strength", "Posterior Chain", "Push", "Pull"],
          focus: "put the highest-quality energy into the main strength lifts",
        };
      }

      return {
        title: "5-day hybrid split",
        sessions: ["Upper", "Lower", "Push", "Pull", "Conditioning + Core"],
        focus: "keep training frequent without losing overall balance",
      };
    }

    if (targetGoal === "muscle") {
      return {
        title: "6-day push/pull/legs repeat split",
        sessions: ["Push", "Pull", "Legs", "Push", "Pull", "Legs"],
        focus: "drive volume only if recovery, sleep, and schedule are strong enough",
      };
    }

    return {
      title: "6-day upper/lower repeat split",
      sessions: ["Upper", "Lower", "Upper", "Lower", "Upper", "Lower"],
      focus: "use the extra frequency carefully so quality does not drop",
    };
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const daysValue = Number(days);
    const split = buildSplit(daysValue, experience, goal);

    setOutcome({
      headline: split.title,
      summary: `A ${daysValue}-day schedule fits best with a ${split.title.toLowerCase()} for this goal and experience level.`,
      stats: [
        { label: "Days per week", value: `${daysValue}` },
        { label: "Experience", value: experience === "beginner" ? "Beginner" : "Intermediate" },
        { label: "Primary focus", value: split.focus },
      ],
      meaning:
        "The best split is the one you can repeat consistently without turning recovery into a problem. This structure gives you a practical weekly rhythm instead of a random mix of sessions.",
      advice:
        "Keep the split simple for at least four to six weeks before changing it. Most people do better by improving the quality of a workable plan than by chasing a new split too early.",
      highlights: split.sessions.map((session, index) => `Day ${index + 1}: ${session}`),
      note: "This planner suggests a practical weekly structure, not a full bespoke programme. Personal coaching refines exercise selection, volume, and progression.",
      copyText: `Suggested split: ${split.title}. Weekly layout: ${split.sessions.join(", ")}.`,
    });
  }

  function handleReset() {
    setExperience("beginner");
    setDays("3");
    setGoal("general");
    setOutcome(null);
  }

  return (
    <ToolWorkspace
      tool={tool}
      helper="Choose your real training frequency, not the version of you that exists only on a perfect week. That keeps the split far more useful."
      outcome={outcome}
      form={
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid gap-4 lg:grid-cols-3">
            <Field label="Experience">
              <ToolSelect value={experience} onChange={setExperience}>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
              </ToolSelect>
            </Field>
            <Field label="Days per week">
              <ToolSelect value={days} onChange={setDays}>
                <option value="2">2 days</option>
                <option value="3">3 days</option>
                <option value="4">4 days</option>
                <option value="5">5 days</option>
                <option value="6">6 days</option>
              </ToolSelect>
            </Field>
            <Field label="Goal">
              <ToolSelect value={goal} onChange={setGoal}>
                <option value="general">General fitness</option>
                <option value="fat-loss">Fat loss</option>
                <option value="strength">Strength</option>
                <option value="muscle">Muscle building</option>
              </ToolSelect>
            </Field>
          </div>
          <ToolActions submitLabel="Build split" onReset={handleReset} />
        </form>
      }
    />
  );
}

function MealPlanningChecklist({ tool }: ToolInterfaceProps) {
  const [goal, setGoal] = useState("fat-loss");
  const [proteinEachMeal, setProteinEachMeal] = useState(false);
  const [produceTwiceDaily, setProduceTwiceDaily] = useState(false);
  const [hydrationTarget, setHydrationTarget] = useState(false);
  const [plannedSnacks, setPlannedSnacks] = useState(false);
  const [weeklyPrep, setWeeklyPrep] = useState(false);
  const [mealTiming, setMealTiming] = useState(false);
  const [outcome, setOutcome] = useState<ToolOutcome | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const checks = [
      { done: proteinEachMeal, label: "Protein is planned into your main meals" },
      { done: produceTwiceDaily, label: "Fruit or vegetables are built into the day" },
      { done: hydrationTarget, label: "Hydration has a clear target" },
      { done: plannedSnacks, label: "Snacks are intentional rather than reactive" },
      { done: weeklyPrep, label: "Some form of weekly prep exists" },
      { done: mealTiming, label: "Meal timing fits work and training" },
    ];
    const completed = checks.filter((item) => item.done);
    const missing = checks.filter((item) => !item.done);
    const score = completed.length;
    const goalLabel =
      goal === "fat-loss" ? "fat loss" : goal === "muscle-gain" ? "muscle gain" : "maintenance";

    let meaning =
      "The checklist is there to show which nutrition basics are actually in place. Stronger nutrition progress usually comes from tightening the weakest habits first rather than doing everything at once.";
    let advice =
      "Choose the one or two missing items that would make your eating week feel easier, then lock those in before layering extra complexity on top.";

    if (score >= 5) {
      meaning =
        "Most of the core habits are already in place. That usually means progress is more likely to come from refinement and consistency than from a complete nutrition overhaul.";
      advice =
        "Keep the structure simple and repeatable. Once these habits feel automatic, use calorie or macro adjustments only if the goal still needs more precision.";
    } else if (score <= 2) {
      advice =
        "Start with the easiest high-value habit: protein planning, hydration, or intentional snacks. Early wins matter more than a perfect plan on paper.";
    }

    setOutcome({
      headline: `${score} of 6 habits in place`,
      summary: `For a ${goalLabel} phase, you currently have ${score} of 6 core meal-planning habits covered.`,
      stats: [
        { label: "Checklist score", value: `${score} / 6` },
        { label: "Primary goal", value: goalLabel },
        {
          label: "Next focus",
          value: missing[0]?.label ?? "Refine what is already working",
        },
      ],
      meaning,
      advice,
      highlights:
        missing.length > 0
          ? missing.map((item) => `Tighten this next: ${item.label}`)
          : [
              "You can now refine calories, macros, or meal timing with more confidence.",
              "The biggest win now is keeping the structure consistent during busier weeks.",
            ],
      note: "This checklist is designed to improve nutrition consistency, not to create rigid food rules.",
      copyText: `Meal-planning checklist score: ${score}/6. Next focus: ${missing[0]?.label ?? "refine current habits"}.`,
    });
  }

  function handleReset() {
    setGoal("fat-loss");
    setProteinEachMeal(false);
    setProduceTwiceDaily(false);
    setHydrationTarget(false);
    setPlannedSnacks(false);
    setWeeklyPrep(false);
    setMealTiming(false);
    setOutcome(null);
  }

  return (
    <ToolWorkspace
      tool={tool}
      helper="Tick the habits that are already present in your current routine. The result is meant to highlight the most useful gap, not to judge the whole plan."
      outcome={outcome}
      form={
        <form onSubmit={handleSubmit} className="space-y-5">
          <Field label="Current nutrition goal">
            <ToolSelect value={goal} onChange={setGoal}>
              <option value="fat-loss">Fat loss</option>
              <option value="maintenance">Maintenance</option>
              <option value="muscle-gain">Muscle gain</option>
            </ToolSelect>
          </Field>
          <div className="grid gap-3">
            <ToolCheckbox
              checked={proteinEachMeal}
              onChange={setProteinEachMeal}
              label="Protein is planned into my main meals"
              description="You already know where the main protein servings will come from."
            />
            <ToolCheckbox
              checked={produceTwiceDaily}
              onChange={setProduceTwiceDaily}
              label="Fruit or vegetables show up daily"
              description="The day includes simple produce habits rather than relying on luck."
            />
            <ToolCheckbox
              checked={hydrationTarget}
              onChange={setHydrationTarget}
              label="Hydration has a clear target"
              description="You know how much fluid you are aiming for on most days."
            />
            <ToolCheckbox
              checked={plannedSnacks}
              onChange={setPlannedSnacks}
              label="Snacks are intentional"
              description="You are not leaving the hardest hunger window to chance."
            />
            <ToolCheckbox
              checked={weeklyPrep}
              onChange={setWeeklyPrep}
              label="Some weekly prep exists"
              description="There is at least a small system for making the week easier."
            />
            <ToolCheckbox
              checked={mealTiming}
              onChange={setMealTiming}
              label="Meal timing fits work and training"
              description="The plan reflects your actual schedule, not an idealised one."
            />
          </div>
          <ToolActions submitLabel="Review checklist" onReset={handleReset} />
        </form>
      }
    />
  );
}

function ProgressTrackerGuide({ tool }: ToolInterfaceProps) {
  const [goal, setGoal] = useState("fat-loss");
  const [experience, setExperience] = useState("beginner");
  const [reviewCadence, setReviewCadence] = useState("weekly");
  const [outcome, setOutcome] = useState<ToolOutcome | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const metrics =
      goal === "fat-loss"
        ? [
            "Body weight average 2 to 4 times per week",
            "Waist measurement weekly",
            "Progress photos every 2 weeks",
            "Daily steps and workout completion",
          ]
        : goal === "muscle-gain"
          ? [
              "Body weight average 2 to 4 times per week",
              "Main lift performance weekly",
              "Measurements every 2 weeks",
              "Recovery and appetite notes",
            ]
          : [
              "Workout completion weekly",
              "Daily steps",
              "Energy and sleep notes",
              "Strength or cardio markers every 1 to 2 weeks",
            ];

    const weighInFrequency =
      goal === "fat-loss" || goal === "muscle-gain"
        ? "2 to 4 times per week"
        : "1 to 2 times per week";
    const photoFrequency = reviewCadence === "monthly" ? "monthly" : "every 2 weeks";
    const reviewLabel =
      reviewCadence === "weekly"
        ? "weekly"
        : reviewCadence === "biweekly"
          ? "every 2 weeks"
          : "monthly";

    setOutcome({
      headline: `${reviewLabel} review rhythm`,
      summary: `For a ${goal.replace("-", " ")} phase, a ${reviewLabel} review rhythm with a few key metrics is usually enough.`,
      stats: [
        { label: "Review cadence", value: reviewLabel },
        { label: "Weigh-in rhythm", value: weighInFrequency },
        { label: "Photo check-ins", value: photoFrequency },
        { label: "Training stage", value: experience === "beginner" ? "Beginner" : "Intermediate" },
      ],
      meaning:
        "Good progress tracking reduces noise. The goal is to notice trends clearly enough to make calm adjustments instead of reacting emotionally to one workout or one weigh-in.",
      advice:
        "Track fewer metrics, but track them consistently. If the system feels too heavy to keep up during busy weeks, it is already too complicated.",
      highlights: metrics,
      note: "A tracking system should support decision-making, not increase stress. Keep it light enough to maintain over time.",
      copyText: `Suggested progress-tracking system: ${metrics.join("; ")}.`,
    });
  }

  function handleReset() {
    setGoal("fat-loss");
    setExperience("beginner");
    setReviewCadence("weekly");
    setOutcome(null);
  }

  return (
    <ToolWorkspace
      tool={tool}
      helper="Choose the goal that best reflects the current phase, then use the output as a compact tracking system rather than a long admin task."
      outcome={outcome}
      form={
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid gap-4 lg:grid-cols-3">
            <Field label="Primary goal">
              <ToolSelect value={goal} onChange={setGoal}>
                <option value="fat-loss">Fat loss</option>
                <option value="muscle-gain">Muscle gain</option>
                <option value="general-fitness">General fitness</option>
              </ToolSelect>
            </Field>
            <Field label="Training stage">
              <ToolSelect value={experience} onChange={setExperience}>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
              </ToolSelect>
            </Field>
            <Field label="Review cadence">
              <ToolSelect value={reviewCadence} onChange={setReviewCadence}>
                <option value="weekly">Weekly</option>
                <option value="biweekly">Every 2 weeks</option>
                <option value="monthly">Monthly</option>
              </ToolSelect>
            </Field>
          </div>
          <ToolActions submitLabel="Build tracking guide" onReset={handleReset} />
        </form>
      }
    />
  );
}

function renderTool(tool: ToolDefinition) {
  switch (tool.slug) {
    case "bmi-calculator":
      return <BmiCalculator tool={tool} />;
    case "calorie-calculator":
      return <CalorieCalculator tool={tool} />;
    case "macro-calculator":
      return <MacroCalculator tool={tool} />;
    case "protein-calculator":
      return <ProteinCalculator tool={tool} />;
    case "water-intake-calculator":
      return <WaterIntakeCalculator tool={tool} />;
    case "body-fat-estimator":
      return <BodyFatEstimator tool={tool} />;
    case "one-rep-max-calculator":
      return <OneRepMaxCalculator tool={tool} />;
    case "ideal-weight-range-calculator":
      return <IdealWeightRangeCalculator tool={tool} />;
    case "pace-and-cardio-zone-calculator":
      return <PaceAndCardioZoneCalculator tool={tool} />;
    case "step-goal-calculator":
      return <StepGoalCalculator tool={tool} />;
    case "workout-split-planner":
      return <WorkoutSplitPlanner tool={tool} />;
    case "meal-planning-checklist":
      return <MealPlanningChecklist tool={tool} />;
    case "progress-tracker-guide":
      return <ProgressTrackerGuide tool={tool} />;
    default:
      return null;
  }
}

export function ToolInterface({ tool }: ToolInterfaceProps) {
  return renderTool(tool);
}
