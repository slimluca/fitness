const inquiryRecipient = "fitnessgrandbaie@gmail.com";

type InquiryPayload = Record<string, unknown>;

function textValue(payload: InquiryPayload, key: string) {
  const value = payload[key];

  return typeof value === "string" && value.trim().length > 0
    ? value.trim()
    : "Not provided";
}

function buildInquiryText(payload: InquiryPayload) {
  const lines = [
    "New Fitness by Fabrizio enquiry",
    "",
    `Name: ${textValue(payload, "name")}`,
    `Phone / WhatsApp: ${textValue(payload, "phone")}`,
    `Email: ${textValue(payload, "email")}`,
    `Preferred service: ${textValue(payload, "service")}`,
    `Goal / message: ${textValue(payload, "goals")}`,
    `Preferred schedule: ${textValue(payload, "schedule")}`,
    "",
    "Submission context",
    `Form type: ${textValue(payload, "type")}`,
    `Submitted at: ${textValue(payload, "submittedAt")}`,
    `Current page: ${textValue(payload, "currentPagePath")}`,
    `Initial landing page: ${textValue(payload, "initialLandingPath")}`,
    `UTM source: ${textValue(payload, "initialUtmSource")}`,
    `UTM campaign: ${textValue(payload, "initialUtmCampaign")}`,
    `Referrer: ${textValue(payload, "initialReferrer")}`,
  ];

  return lines.join("\n");
}

function buildInquiryHtml(payload: InquiryPayload) {
  const rows = [
    ["Name", textValue(payload, "name")],
    ["Phone / WhatsApp", textValue(payload, "phone")],
    ["Email", textValue(payload, "email")],
    ["Preferred service", textValue(payload, "service")],
    ["Goal / message", textValue(payload, "goals")],
    ["Preferred schedule", textValue(payload, "schedule")],
    ["Form type", textValue(payload, "type")],
    ["Submitted at", textValue(payload, "submittedAt")],
    ["Current page", textValue(payload, "currentPagePath")],
    ["Initial landing page", textValue(payload, "initialLandingPath")],
    ["UTM source", textValue(payload, "initialUtmSource")],
    ["UTM campaign", textValue(payload, "initialUtmCampaign")],
    ["Referrer", textValue(payload, "initialReferrer")],
  ];

  return `
    <div style="font-family:Arial,sans-serif;color:#111;line-height:1.5">
      <h1 style="font-size:20px;margin:0 0 16px">New Fitness by Fabrizio enquiry</h1>
      <table cellpadding="0" cellspacing="0" style="border-collapse:collapse;width:100%">
        ${rows
          .map(
            ([label, value]) => `
              <tr>
                <td style="border:1px solid #ddd;padding:10px;font-weight:700;width:180px">${label}</td>
                <td style="border:1px solid #ddd;padding:10px">${escapeHtml(value)}</td>
              </tr>
            `,
          )
          .join("")}
      </table>
    </div>
  `;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function sendInquiryEmail(payload: InquiryPayload) {
  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM_EMAIL;

  if (!apiKey || !fromEmail) {
    return {
      ok: false,
      code: "missing_email_config",
    } as const;
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: inquiryRecipient,
      reply_to: textValue(payload, "email"),
      subject: `New enquiry: ${textValue(payload, "service")}`,
      text: buildInquiryText(payload),
      html: buildInquiryHtml(payload),
    }),
  });

  if (!response.ok) {
    return {
      ok: false,
      code: "email_rejected",
    } as const;
  }

  return {
    ok: true,
    recipient: inquiryRecipient,
  } as const;
}

export { inquiryRecipient };
