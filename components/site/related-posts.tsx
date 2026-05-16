import type { BlogPost } from "@/content/types";
import { BlogCard } from "@/components/site/blog-card";

type RelatedPostsProps = {
  posts: BlogPost[];
};

export function RelatedPosts({ posts }: RelatedPostsProps) {
  if (posts.length === 0) {
    return null;
  }

  return (
    <div className="grid grid-equal gap-6 md:grid-cols-2 xl:grid-cols-3">
      {posts.map((post) => (
        <BlogCard key={post.slug} post={post} />
      ))}
    </div>
  );
}
