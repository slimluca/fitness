import { pricingItems } from "@/content/pricing";
import type { PricingItem } from "@/content/types";
import { absoluteUrl } from "@/lib/seo";

export type PaymentMethod =
  | "stripe_placeholder"
  | "local_gateway"
  | "paypal_placeholder"
  | "bank_transfer";

export type CheckoutCustomer = {
  name: string;
  email: string;
  phone: string;
  service: string;
  goals: string;
};

export type CheckoutRequest = {
  packageSlug: string;
  method: PaymentMethod;
  customer: CheckoutCustomer;
  recurring?: boolean;
};

export type CheckoutResult = {
  status: "success" | "failed" | "receipt";
  redirectUrl: string;
  reference: string;
  methodLabel: string;
};

export const paymentMethodLabels: Record<PaymentMethod, string> = {
  stripe_placeholder: "Card Checkout",
  local_gateway: "Local Gateway",
  paypal_placeholder: "PayPal",
  bank_transfer: "Bank Transfer",
};

export function getPackageBySlug(slug: string) {
  return pricingItems.find((item) => item.slug === slug);
}

function reference(prefix: string) {
  return `${prefix}-${Date.now().toString().slice(-8)}`;
}

export async function createCheckoutSession(
  request: CheckoutRequest,
): Promise<CheckoutResult> {
  const pkg = getPackageBySlug(request.packageSlug);

  if (!pkg) {
    throw new Error("Selected package was not found.");
  }

  const ref = reference("FGB");
  const params = new URLSearchParams({
    package: pkg.slug,
    method: request.method,
    reference: ref,
    service: pkg.name,
  });

  if (request.method === "bank_transfer") {
    return {
      status: "receipt",
      redirectUrl: `${absoluteUrl("/checkout")}?status=receipt&${params.toString()}`,
      reference: ref,
      methodLabel: paymentMethodLabels[request.method],
    };
  }

  return {
    status: "success",
    redirectUrl: `${absoluteUrl("/checkout")}?status=success&${params.toString()}`,
    reference: ref,
    methodLabel: paymentMethodLabels[request.method],
  };
}

export function packageMode(pkg: PricingItem) {
  return pkg.type === "subscription" ? "subscription" : "payment";
}
