import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("space-y-4", align === "center" && "mx-auto max-w-3xl text-center", className)}>
      {eyebrow ? <Badge>{eyebrow}</Badge> : null}
      <div className="space-y-3">
        <h2 className="font-display text-4xl tracking-tight text-white sm:text-5xl">
          {title}
        </h2>
        {description ? (
          <p className="max-w-2xl text-base leading-7 text-white/72 sm:text-lg">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}
