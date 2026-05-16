import { NextResponse } from "next/server";

import {
  createCheckoutSession,
  type CheckoutRequest,
} from "@/lib/payments";

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as CheckoutRequest;
    const session = await createCheckoutSession(payload);
    return NextResponse.json(session);
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Checkout could not be created.",
      },
      { status: 500 },
    );
  }
}
