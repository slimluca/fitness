import type { PricingItem } from "@/content/types";
import { Card } from "@/components/ui/card";
import { formatCurrency } from "@/lib/utils";

type CheckoutSummaryProps = {
  item: PricingItem;
};

export function CheckoutSummary({ item }: CheckoutSummaryProps) {
  return (
    <Card className="space-y-5">
      <div>
        <p className="text-xs uppercase tracking-[0.26em] text-[color:var(--brand-gold)]">
          Order summary
        </p>
        <h3 className="mt-3 font-display text-3xl text-white">{item.name}</h3>
      </div>
      <p className="text-sm leading-6 text-white/72">{item.description}</p>
      <div className="rounded-3xl border border-white/10 bg-black/20 p-5">
        <p className="font-display text-4xl text-white">{formatCurrency(item.amount)}</p>
        <p className="mt-1 text-sm text-white/55">{item.unit}</p>
      </div>
      <ul className="space-y-3 text-sm text-white/72">
        {item.features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
    </Card>
  );
}
