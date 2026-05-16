"use client";

import { CreditCard, Landmark, Wallet } from "lucide-react";

import type { PaymentMethod } from "@/lib/payments";
import { cn } from "@/lib/utils";

const items: {
  value: PaymentMethod;
  label: string;
  description: string;
  icon: typeof CreditCard;
}[] = [
  {
    value: "stripe_placeholder",
    label: "Card Checkout",
    description: "Hosted card checkout architecture for one-time or subscription flows.",
    icon: CreditCard,
  },
  {
    value: "local_gateway",
    label: "Local Gateway",
    description: "Mauritius-friendly gateway placeholder for local expansion.",
    icon: Wallet,
  },
  {
    value: "paypal_placeholder",
    label: "PayPal",
    description: "Alternative payment experience placeholder for international clients.",
    icon: Wallet,
  },
  {
    value: "bank_transfer",
    label: "Bank Transfer",
    description: "Manual confirmation flow for larger packages or custom arrangements.",
    icon: Landmark,
  },
];

type PaymentMethodSelectorProps = {
  value: PaymentMethod;
  onChange: (method: PaymentMethod) => void;
};

export function PaymentMethodSelector({
  value,
  onChange,
}: PaymentMethodSelectorProps) {
  return (
    <div className="grid gap-3">
      {items.map((item) => {
        const Icon = item.icon;
        const active = value === item.value;

        return (
          <button
            key={item.value}
            type="button"
            onClick={() => onChange(item.value)}
            className={cn(
              "rounded-3xl border p-4 text-left transition",
              active
                ? "border-[color:var(--brand-gold)] bg-[color:var(--brand-gold)]/10"
                : "border-white/10 bg-white/5 hover:border-white/20",
            )}
          >
            <div className="flex items-start gap-3">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-3">
                <Icon className="h-4 w-4 text-[color:var(--brand-gold)]" />
              </div>
              <div className="space-y-1">
                <p className="font-semibold text-white">{item.label}</p>
                <p className="text-sm leading-6 text-white/65">{item.description}</p>
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
}
