import { ShieldCheck, Sparkles, TimerReset, Users } from "lucide-react";

const iconMap = {
  appointment: TimerReset,
  private: ShieldCheck,
  location: Sparkles,
  coaching: Users,
};

type TrustBadgeRowProps = {
  items: { label: string; icon: keyof typeof iconMap }[];
};

export function TrustBadgeRow({ items }: TrustBadgeRowProps) {
  return (
    <div className="compact-card-grid">
      {items.map((item) => {
        const Icon = iconMap[item.icon];
        return (
          <div
            key={item.label}
            className="flex min-w-0 items-center gap-3 rounded-[18px] border border-white/10 bg-white/5 px-4 py-3 text-sm leading-6 text-white/78"
          >
            <Icon className="h-4 w-4 text-[color:var(--brand-gold)]" />
            <span className="min-w-0">{item.label}</span>
          </div>
        );
      })}
    </div>
  );
}
