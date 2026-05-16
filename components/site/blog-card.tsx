import Image from "next/image";
import Link from "next/link";

import type { BlogPost } from "@/content/types";
import { formatBlogDate } from "@/content";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

type BlogCardProps = {
  post: BlogPost;
};

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Card className="group flex h-full overflow-hidden p-0">
      <Link href={`/blog/${post.slug}`} className="flex h-full min-w-0 flex-col">
        <div className="relative aspect-[16/9] overflow-hidden rounded-t-[22px] sm:rounded-t-[24px]">
          <Image
            src={post.featuredImage}
            alt={post.title}
            fill
            sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 100vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
        <div className="flex h-full flex-col gap-4 p-5">
          <div className="grid min-h-[3.1rem] grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
            <Badge variant="muted">{post.category}</Badge>
            <div className="shrink-0 text-right text-[11px] uppercase leading-5 tracking-[0.18em] text-white/45">
              <div>{post.readTime}</div>
              <div className="mt-1">{formatBlogDate(post.publishAt)}</div>
            </div>
          </div>
          <div className="space-y-3">
            <h3 className="font-display text-[1.55rem] leading-tight text-white sm:text-[1.75rem]">
              {post.title}
            </h3>
            <p className="text-sm leading-6 text-white/68">{post.excerpt}</p>
          </div>
          <p className="mt-auto pt-2 text-sm font-semibold text-[color:var(--brand-gold)]">
            Read article
          </p>
        </div>
      </Link>
    </Card>
  );
}
