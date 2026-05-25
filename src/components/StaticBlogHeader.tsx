import { Badge } from "@/components/ui/badge";
import { Calendar, User } from "lucide-react";
import BlogActions from "@/components/BlogActions";
import type { StaticBlogMeta } from "@/data/static-blog-posts";

type StaticBlogHeaderProps = {
  meta: StaticBlogMeta;
  /** Optional override for display date string */
  dateLabel?: string;
};

export function StaticBlogHeader({ meta, dateLabel }: StaticBlogHeaderProps) {
  const displayDate =
    dateLabel ??
    new Date(meta.datePublished).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  return (
    <header className="mb-8">
      <Badge className="mb-4">{meta.category}</Badge>
      <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
        {meta.headline}
      </h1>
      <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-6">
        <div className="flex items-center gap-2">
          <User className="h-4 w-4" aria-hidden />
          <span>{meta.author}</span>
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4" aria-hidden />
          <span>{displayDate}</span>
        </div>
        <span>{meta.readTime}</span>
      </div>
      <BlogActions title={meta.headline} />
    </header>
  );
}
