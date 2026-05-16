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
        "space-y-4",
        align === "center" && "mx-auto max-w-[44rem] text-center",
        className,
      )}
    >
      {eyebrow ? <Badge>{eyebrow}</Badge> : null}
      <div className="space-y-4">
        <h2 className="font-display text-[2.15rem] leading-[0.98] tracking-tight text-white sm:text-[2.75rem] lg:text-[3.1rem]">
          {title}
        </h2>
        {description ? (
          <p
            className={cn(
              "max-w-[40rem] text-[15px] leading-7 text-white/72 sm:text-[1.02rem] sm:leading-8",
              align === "center" && "mx-auto",
            )}
          >
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}
