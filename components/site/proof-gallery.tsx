import type { MediaAsset } from "@/content/types";
import { ProofMedia } from "@/components/site/proof-media";
import { cn } from "@/lib/utils";

type ProofGalleryProps = {
  items: MediaAsset[];
  className?: string;
};

export function ProofGallery({ items, className }: ProofGalleryProps) {
  if (items[0]?.layout === "feature" && items.length > 1) {
    const [feature, ...supporting] = items;

    return (
      <div className={cn("balanced-split grid gap-5 lg:grid-cols-[1.05fr_0.95fr]", className)}>
        <ProofMedia asset={feature} priority className="h-full" />
        <div className="grid h-full gap-5 sm:grid-cols-2 lg:grid-cols-1">
          {supporting.map((asset) => (
            <ProofMedia key={asset.id} asset={asset} className="h-full" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={cn("grid premium-card-grid gap-5 md:grid-cols-2 xl:grid-cols-3", className)}>
      {items.map((asset, index) => (
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
