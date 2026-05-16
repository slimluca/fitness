"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";

import type { PricingItem } from "@/content/types";
import type { PaymentMethod } from "@/lib/payments";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { CheckoutSummary } from "@/components/site/checkout-summary";
import { PaymentMethodSelector } from "@/components/site/payment-method-selector";
import { trackEvent } from "@/lib/tracking";

type CheckoutFlowProps = {
  item: PricingItem;
};

export function CheckoutFlow({ item }: CheckoutFlowProps) {
  const router = useRouter();
  const [method, setMethod] = useState<PaymentMethod>("stripe_placeholder");
  const [recurring, setRecurring] = useState(item.type === "subscription");
  const [pending, startTransition] = useTransition();
  const [error, setError] = useState("");

  async function handleSubmit(formData: FormData) {
    setError("");

    const payload = {
      packageSlug: item.slug,
      method,
      recurring,
      customer: {
        name: String(formData.get("name") ?? ""),
        email: String(formData.get("email") ?? ""),
        phone: String(formData.get("phone") ?? ""),
        service: String(formData.get("service") ?? item.name),
        goals: String(formData.get("goals") ?? ""),
      },
    };

    startTransition(async () => {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        setError("Checkout could not be started. Please message on WhatsApp.");
        trackEvent("payment_failed", { package: item.slug, method });
        return;
      }

      const data = (await response.json()) as { redirectUrl: string };
      trackEvent("payment_start", { package: item.slug, method });
      router.push(data.redirectUrl);
    });
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
      <CheckoutSummary item={item} />
      <form
        action={handleSubmit}
        className="grid gap-6 rounded-[32px] border border-white/10 bg-white/6 p-6"
      >
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.26em] text-[color:var(--brand-gold)]">
            Secure checkout
          </p>
          <h2 className="font-display text-4xl text-white">Complete your booking</h2>
          <p className="text-sm leading-6 text-white/70">
            Select your package, confirm your details, choose a payment method, and proceed to the next step.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm text-white/72">Full name</label>
            <Input name="name" placeholder="Your full name" required />
          </div>
          <div className="space-y-2">
            <label className="text-sm text-white/72">Email</label>
            <Input name="email" type="email" placeholder="you@example.com" required />
          </div>
          <div className="space-y-2">
            <label className="text-sm text-white/72">Phone / WhatsApp</label>
            <Input name="phone" placeholder="+230..." required />
          </div>
          <div className="space-y-2">
            <label className="text-sm text-white/72">Service</label>
            <Input name="service" defaultValue={item.name} />
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-sm text-white/72">Goals or scheduling notes</label>
          <Textarea
            name="goals"
            placeholder="Share your goals, preferred schedule, or anything important before payment."
          />
        </div>
        <div className="flex items-center justify-between rounded-3xl border border-white/10 bg-black/20 px-4 py-4">
          <div>
            <p className="text-sm font-semibold text-white">Recurring billing toggle</p>
            <p className="text-sm text-white/60">
              Keep this on for subscription-style coaching flows.
            </p>
          </div>
          <Switch
            checked={recurring}
            onCheckedChange={setRecurring}
            disabled={item.type === "subscription"}
          />
        </div>
        <PaymentMethodSelector value={method} onChange={setMethod} />
        {error ? <p className="text-sm text-red-300">{error}</p> : null}
        <Button type="submit" disabled={pending}>
          {pending ? "Processing..." : "Confirm Booking & Payment"}
        </Button>
      </form>
    </div>
  );
}
