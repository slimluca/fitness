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
    <Card className="space-y-4">
      <div className="flex items-center gap-3 text-[color:var(--brand-gold)]">{icon}</div>
      <div className="space-y-2">
        <h3 className="font-display text-2xl text-white">{title}</h3>
        <p className="text-sm leading-6 text-white/70">{description}</p>
      </div>
      {children}
    </Card>
  );
}
