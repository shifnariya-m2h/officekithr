import { useParams, Link } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { Calendar, User, Clock } from "lucide-react";
import DOMPurify from "dompurify";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { getPostBySlug } from "@/services/blogService";
import { PageJsonLd } from "@/components/PageJsonLd";
import { usePageSeo, useSeoContext } from "@/seo/SeoContext";
import { articleSchema, breadcrumbSchema } from "@/seo/schema";
import { absoluteUrl, SITE } from "@/seo/site-config";
import BackToBlog from "@/components/BackToBlog";
import BlogActions from "@/components/BlogActions";

export default function BlogDetail() {
  const { slug } = useParams<{ slug: string }>();
  const { blogManifest } = useSeoContext();
  const [post, setPost] = useState<Record<string, unknown> | null>(null);
  const [loading, setLoading] = useState(true);
  const manifestEntry = slug ? blogManifest[slug] : undefined;

  useEffect(() => {
    if (!slug) return;
    const fetchPost = async () => {
      try {
        const foundPost = await getPostBySlug(slug);
        setPost(foundPost);
      } catch {
        setPost(null);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [slug]);

  const excerpt = useMemo(() => {
    if (!post) return "";
    return (
      post.excerpt ||
      (post.content ? post.content.replace(/<[^>]+>/g, "").slice(0, 160) : "")
    );
  }, [post]);

  const seoConfig = useMemo(() => {
    const path = slug ? `/blog/${slug}` : "/resources/blogs";
    if (loading) {
      if (manifestEntry) return null;
      return {
        path,
        title: "Loading… | OfficeKit HR Blog",
        noindex: true,
      };
    }
    if (!post) {
      return {
        path,
        title: "Blog Not Found | OfficeKit HR",
        description: "The article you requested could not be found.",
        noindex: true,
      };
    }
    return {
      path,
      title: `${post.title} | OfficeKit HR Blog`,
      description: excerpt,
      type: "article" as const,
      ogImage: post.image,
    };
  }, [slug, loading, post, excerpt, manifestEntry]);

  usePageSeo(seoConfig);

  const postUrl = slug ? absoluteUrl(`/blog/${slug}`) : SITE.url;

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="min-h-[50vh] flex justify-center items-center text-muted-foreground pt-24">
          Loading article…
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="min-h-[50vh] flex flex-col justify-center items-center text-muted-foreground pt-24 px-4">
          <p className="text-lg font-medium mb-4">Article not found</p>
          <Link to="/resources/blogs">
            <Button variant="outline">Back to Blog</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const sanitizedContent = DOMPurify.sanitize(post.content || "");
  const cleanedContent = sanitizedContent
    .replace(/<p>(\s|&nbsp;|<br\s*\/?>)*<\/p>/gi, "")
    .replace(/(?:<br\s*\/?>\s*){3,}/gi, "<br /><br />")
    .trim();

  return (
    <div className="min-h-screen bg-background">
      <PageJsonLd
        nodes={[
          articleSchema({
            title: post.title,
            description: excerpt,
            url: postUrl,
            image: post.image || SITE.ogImage,
            datePublished: post.createdAt || post.date,
            dateModified: post.updatedAt,
            author: post.author,
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/resources/blogs" },
            { name: post.title, path: `/blog/${slug}` },
          ]),
        ]}
      />
      <Navigation />
      <article className="pt-24 pb-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <BackToBlog className="mb-10 mt-2" />

          <header className="mb-8">
            <div className="mb-4">
              <span className="inline-block px-3 py-1 text-xs font-semibold text-indigo-600 bg-indigo-100 rounded-full">
                Blogs
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" aria-hidden />
                <span className="font-medium">{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" aria-hidden />
                <span>
                  {new Date(post.date || post.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" aria-hidden />
                <span>
                  {new Date(post.createdAt || post.updatedAt).toLocaleString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
              <span>{post.readTime || "5 min read"}</span>
            </div>

            <BlogActions title={post.title} />
            <div className="h-px bg-border/80 my-8" />
          </header>

          <div className="aspect-video rounded-xl mb-10 overflow-hidden shadow-lg">
            <img
              src={post.image || SITE.ogImage}
              alt={post.title}
              className="w-full h-full object-cover"
              loading="lazy"
              width={1200}
              height={630}
            />
          </div>

          <div
            className="blog-content mb-16"
            dangerouslySetInnerHTML={{ __html: cleanedContent }}
          />

          <div className="bg-gradient-subtle rounded-lg p-8 mt-12 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Transform Your HR with OfficeKit
            </h2>
            <p className="text-muted-foreground mb-6">
              Discover how our AI-powered HRMS helps businesses simplify HR, engage employees,
              and drive growth.
            </p>
            <Link to="/resources/blogs">
              <Button size="lg">Learn More</Button>
            </Link>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
}
