import type { ReactNode } from "react";

import { Card } from "@/components/ui/card";

type ContactCardProps = {
  title: string;
  description: string;
  icon: ReactNode;
  children?: ReactNode;
};

export function ContactCard({
  title,
  description,
  icon,
  children,
}: ContactCardProps) {
  return (
    <Card className="flex h-full flex-col gap-4">
      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-black/20 text-[color:var(--brand-gold)]">
        {icon}
      </div>
      <div className="space-y-2.5">
        <h3 className="font-display text-[1.85rem] leading-tight text-white">{title}</h3>
        <p className="text-sm leading-7 text-white/70">{description}</p>
      </div>
      {children ? <div className="mt-auto pt-1">{children}</div> : null}
    </Card>
  );
}
