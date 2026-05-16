import Image from "next/image";
import Link from "next/link";

import type { BlogPost } from "@/content/types";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

type BlogCardProps = {
  post: BlogPost;
};

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Card className="group overflow-hidden p-0">
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="relative aspect-[16/10] overflow-hidden rounded-t-[28px]">
          <Image
            src={post.featuredImage}
            alt={post.title}
            fill
            sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 100vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
        <div className="space-y-4 p-6">
          <div className="flex items-center justify-between gap-3">
            <Badge variant="muted">{post.category}</Badge>
            <div className="text-right text-xs uppercase tracking-[0.24em] text-white/45">
              <div>{post.readTime}</div>
              <div className="mt-1">{post.date}</div>
            </div>
          </div>
          <div className="space-y-3">
            <h3 className="font-display text-2xl text-white">{post.title}</h3>
            <p className="text-sm leading-6 text-white/68">{post.excerpt}</p>
          </div>
          <p className="text-sm font-semibold text-[color:var(--brand-gold)]">
            Read article
          </p>
        </div>
      </Link>
    </Card>
  );
}
