import Image from "next/image";
import { Camera, ImagePlus } from "lucide-react";

import type { MediaAsset } from "@/content/types";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const aspectClasses = {
  landscape: "aspect-[16/10]",
  portrait: "aspect-[4/5]",
  square: "aspect-square",
} as const;

const categoryLabels: Record<MediaAsset["category"], string> = {
  trainer: "Trainer",
  studio: "Private studio",
  equipment: "Equipment",
  session: "Coaching session",
  lifestyle: "Client experience",
  results: "Results proof",
  travel: "House call",
  online: "Online coaching",
  credentials: "Credentials",
};

type ProofMediaProps = {
  asset: MediaAsset;
  className?: string;
  priority?: boolean;
  showMeta?: boolean;
};

export function ProofMedia({
  asset,
  className,
  priority = false,
  showMeta = true,
}: ProofMediaProps) {
  const aspectClass = aspectClasses[asset.aspect ?? "landscape"];
  const status = asset.status ?? (asset.src ? "live" : "reserved");
  const reservedLabel = "Prepared visual";
  const noteLabel = status === "live" ? "Asset brief" : "Replacement brief";

  return (
    <Card className={cn("group overflow-hidden p-0", className)}>
      <div className={cn("relative overflow-hidden", aspectClass)}>
        {asset.src ? (
          <>
            <Image
              src={asset.src}
              alt={asset.alt}
              fill
              priority={priority}
              sizes={
                asset.layout === "feature"
                  ? "(min-width: 1280px) 66vw, (min-width: 768px) 100vw, 100vw"
                  : "(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
              }
              className="object-cover transition duration-700 group-hover:scale-[1.03]"
              style={
                asset.objectPosition
                  ? { objectPosition: asset.objectPosition }
                  : undefined
              }
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(5,5,5,0.82))]" />
          </>
        ) : (
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,215,0,0.14),transparent_36%),linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))]" />
        )}

        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          <Badge variant={status === "live" ? "default" : "muted"}>
            {status === "live" ? "Live Asset" : reservedLabel}
          </Badge>
          <Badge variant="muted">{categoryLabels[asset.category]}</Badge>
        </div>

        {asset.src ? (
          <div className="absolute inset-x-0 bottom-0 space-y-2 p-5">
            <p className="font-display text-3xl leading-tight text-white">
              {asset.title}
            </p>
          </div>
        ) : (
          <div className="absolute inset-0 flex flex-col justify-end p-5">
            <div className="max-w-xs rounded-[24px] border border-white/10 bg-black/30 p-4 backdrop-blur-sm">
              <div className="flex items-center gap-3 text-[color:var(--brand-gold)]">
                <ImagePlus className="h-4 w-4" />
                <span className="text-xs uppercase tracking-[0.22em]">
                  Ready for approved real photography
                </span>
              </div>
              <p className="mt-3 font-display text-2xl leading-tight text-white">
                {asset.title}
              </p>
            </div>
          </div>
        )}
      </div>

      {showMeta ? (
        <div className="space-y-3 p-5">
          <p className="text-sm leading-7 text-white/72">{asset.caption}</p>
          {asset.credit ? (
            <p className="text-xs uppercase tracking-[0.2em] text-white/38">
              Credit: {asset.credit}
            </p>
          ) : null}
          {asset.note ? (
            <div className="rounded-[22px] border border-white/10 bg-black/20 p-4 text-sm leading-7 text-white/58">
              <div className="mb-2 flex items-center gap-2 text-white/40">
                <Camera className="h-4 w-4 text-[color:var(--brand-gold)]" />
                <span className="text-xs uppercase tracking-[0.22em]">
                  {noteLabel}
                </span>
              </div>
              {asset.note}
            </div>
          ) : null}
        </div>
      ) : null}
    </Card>
  );
}
