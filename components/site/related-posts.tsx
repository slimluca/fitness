import type { BlogPost } from "@/content/types";
import { BlogCard } from "@/components/site/blog-card";

type RelatedPostsProps = {
  posts: BlogPost[];
};

export function RelatedPosts({ posts }: RelatedPostsProps) {
  if (posts.length === 0) {
    return (
      <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 text-sm leading-7 text-white/72">
        More related articles are being prepared to deepen this topic cluster.
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {posts.map((post) => (
        <BlogCard key={post.slug} post={post} />
      ))}
    </div>
  );
}
