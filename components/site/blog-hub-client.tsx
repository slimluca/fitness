"use client";

import { Search } from "lucide-react";
import { useState } from "react";

import type { BlogPost } from "@/content/types";
import { BlogCard } from "@/components/site/blog-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type BlogHubClientProps = {
  posts: BlogPost[];
  categories: string[];
};

export function BlogHubClient({ posts, categories }: BlogHubClientProps) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [query, setQuery] = useState("");

  const filteredPosts = posts.filter((post) => {
    const categoryMatch =
      activeCategory === "All" || post.category === activeCategory;
    const queryMatch =
      query.trim().length === 0 ||
      `${post.title} ${post.excerpt} ${post.description} ${post.category} ${post.keywords.join(" ")}`
        .toLowerCase()
        .includes(query.toLowerCase());

    return categoryMatch && queryMatch;
  });

  return (
    <div className="space-y-8">
      <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
          <Input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search articles, topics, and advice..."
            className="pl-11"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {["All", ...categories].map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => <BlogCard key={post.slug} post={post} />)
        ) : (
          <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 text-sm leading-7 text-white/72 md:col-span-2 xl:col-span-3">
            No articles match that search yet. Try another topic or explore one of the category pages above.
          </div>
        )}
      </div>
    </div>
  );
}
