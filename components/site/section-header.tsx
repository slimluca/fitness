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
    <div
      className={cn(
        "space-y-3",
        align === "center" && "mx-auto max-w-[44rem] text-center",
        className,
      )}
    >
      {eyebrow ? <Badge>{eyebrow}</Badge> : null}
      <div className="space-y-3">
        <h2 className="font-display text-3xl leading-tight tracking-tight text-white sm:text-[2.6rem] lg:text-[3.2rem]">
          {title}
        </h2>
        {description ? (
          <p className="max-w-[42rem] text-[15px] leading-7 text-white/72 sm:text-lg sm:leading-8">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}
