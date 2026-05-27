import type { MediaAsset } from "@/content/types";
import { ProofMedia } from "@/components/site/proof-media";
import { cn } from "@/lib/utils";

type ProofGalleryProps = {
  items: MediaAsset[];
  className?: string;
};

export function ProofGallery({ items, className }: ProofGalleryProps) {
  const liveItems = items.filter((asset) => asset.src);

  if (liveItems.length === 0) {
    return null;
  }

  if (liveItems[0]?.layout === "feature" && liveItems.length > 1) {
    const [feature, ...supporting] = liveItems;

    return (
      <div className={cn("balanced-split grid gap-5 lg:grid-cols-[1.05fr_0.95fr]", className)}>
        <ProofMedia asset={feature} priority />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
          {supporting.map((asset) => (
            <ProofMedia key={asset.id} asset={asset} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={cn("grid premium-card-grid gap-5 md:grid-cols-2 xl:grid-cols-3", className)}>
      {liveItems.map((asset, index) => (
        <ProofMedia
          key={asset.id}
          asset={asset}
          priority={index === 0}
          className={cn(
            asset.layout === "feature" ? "md:col-span-2" : "",
          )}
        />
      ))}
    </div>
  );
}
