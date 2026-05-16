import { redirect } from "next/navigation";

export default function BookConsultationRedirectPage() {
  redirect("/contact?intent=consultation");
}
