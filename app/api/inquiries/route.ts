import { NextResponse } from "next/server";

import { inquiryRecipient, sendInquiryEmail } from "@/lib/inquiry-email";

export async function POST(request: Request) {
  const body = (await request.json()) as Record<string, unknown>;

  const webhookUrl = process.env.FORMS_WEBHOOK_URL;
  const webhookToken = process.env.FORMS_WEBHOOK_BEARER_TOKEN;
  const requiredFields = ["name", "phone", "email", "goals", "type"] as const;
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

  const emailResult = await sendInquiryEmail(body);

  if (!emailResult.ok) {
    return NextResponse.json(
      {
        error:
          emailResult.code === "missing_email_config"
            ? "Lead email is not configured. Set RESEND_API_KEY and RESEND_FROM_EMAIL before going live."
            : "Could not send enquiry email.",
        code: emailResult.code,
      },
      { status: 503 },
    );
  }

  if (webhookUrl) {
    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(webhookToken
            ? { Authorization: `Bearer ${webhookToken}` }
            : {}),
        },
        body: JSON.stringify({
          ...body,
          destinationEmail: inquiryRecipient,
        }),
      });

      await response.text();
    } catch {
      // The email has already been delivered; webhook forwarding is optional.
    }
  }

  return NextResponse.json({
    ok: true,
    recipient: emailResult.recipient,
  });
}
