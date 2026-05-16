import type { BlogPost } from "@/content/types";
import { BlogCard } from "@/components/site/blog-card";

type RelatedPostsProps = {
  posts: BlogPost[];
};

export function RelatedPosts({ posts }: RelatedPostsProps) {
  if (posts.length === 0) {
    return null;
  }

  const gridClass =
    posts.length <= 2
      ? "grid grid-equal premium-card-grid gap-5 md:grid-cols-2"
      : "grid grid-equal premium-card-grid gap-5 md:grid-cols-2 xl:grid-cols-3";

  return (
    <div className={gridClass}>
      {posts.map((post) => (
        <BlogCard key={post.slug} post={post} />
      ))}
    </div>
  );
}
