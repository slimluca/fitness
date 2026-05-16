import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = (await request.json()) as Record<string, unknown>;

  const webhookUrl = process.env.FORMS_WEBHOOK_URL;
  const webhookToken = process.env.FORMS_WEBHOOK_BEARER_TOKEN;
  const requiredFields = ["name", "phone", "goals", "type"] as const;
  const missingFields = requiredFields.filter((field) => {
    const value = body[field];
    return typeof value !== "string" || value.trim().length === 0;
  });

  if (missingFields.length > 0) {
    return NextResponse.json(
      {
        error: "Missing required enquiry fields.",
        code: "missing_required_fields",
        missingFields,
      },
      { status: 400 },
    );
  }

  if (!webhookUrl) {
    if (process.env.NODE_ENV === "production") {
      return NextResponse.json(
        {
          error:
            "Lead capture is not configured. Set FORMS_WEBHOOK_URL before going live.",
          code: "missing_webhook",
        },
        { status: 503 },
      );
    }

    return NextResponse.json({
      ok: true,
      code: "local_mode_no_webhook",
      warning: "FORMS_WEBHOOK_URL is not configured. Submission was accepted in local mode only.",
    });
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(webhookToken
          ? { Authorization: `Bearer ${webhookToken}` }
          : {}),
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      return NextResponse.json(
        {
          error: "The enquiry webhook rejected the submission.",
          code: "webhook_rejected",
        },
        { status: 502 },
      );
    }
  } catch {
    return NextResponse.json(
      {
        error: "Could not forward enquiry.",
        code: "webhook_forward_failed",
      },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true });
}
