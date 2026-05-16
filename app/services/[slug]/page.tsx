import { notFound, redirect } from "next/navigation";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function LegacyServiceRedirectPage({ params }: PageProps) {
  const { slug } = await params;

  if (slug === "private-personal-training" || slug === "couple-training" || slug === "house-calls") {
    redirect("/personal-training");
  }

  if (slug === "online-coaching") {
    redirect("/online-coaching");
  }

  notFound();
}
