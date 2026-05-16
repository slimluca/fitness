import type { MediaAsset } from "@/content/types";
import { ProofMedia } from "@/components/site/proof-media";
import { cn } from "@/lib/utils";

type ProofGalleryProps = {
  items: MediaAsset[];
  className?: string;
};

export function ProofGallery({ items, className }: ProofGalleryProps) {
  return (
    <div className={cn("grid gap-6 md:grid-cols-2 xl:grid-cols-3", className)}>
      {items.map((asset, index) => (
        <ProofMedia
          key={asset.id}
          asset={asset}
          priority={index === 0}
          className={cn(
            asset.layout === "feature" ? "md:col-span-2" : "",
            asset.aspect === "portrait" ? "xl:self-start" : "",
          )}
        />
      ))}
    </div>
  );
}
