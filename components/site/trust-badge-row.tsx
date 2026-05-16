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
    <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
      {items.map((item) => {
        const Icon = iconMap[item.icon];
        return (
          <div
            key={item.label}
            className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/78"
          >
            <Icon className="h-4 w-4 text-[color:var(--brand-gold)]" />
            <span>{item.label}</span>
          </div>
        );
      })}
    </div>
  );
}
