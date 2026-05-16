import Link from "next/link";

import { Hero } from "@/components/site/hero";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="page-section py-10">
      <Hero
        eyebrow="404"
        title="This page is not part of the private training path"
        description="The page you're looking for could not be found. Return to the homepage, review personal training, or go straight to consultation."
        image="/training-session.jpeg"
        actions={
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/">Go Home</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact?intent=consultation">Book Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="ghost">
              <Link href="/personal-training">Personal Training</Link>
            </Button>
          </div>
        }
      />
    </div>
  );
}
