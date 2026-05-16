import { redirect } from "next/navigation";

export default function HealthDisclaimerRedirectPage() {
  redirect("/terms");
}
