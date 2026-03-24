import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Calendar, User, Clock } from "lucide-react";
import DOMPurify from "dompurify";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { getAllPosts } from "@/services/blogService";
import { slugify } from "@/utils/slugify";
import BackToBlog from "@/components/BackToBlog";
import BlogActions from "@/components/BlogActions";

export default function BlogDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        // Fetch all posts and find the one matching the slug
        const allPosts = await getAllPosts();
        const foundPost = allPosts.find((p: any) => {
          // Check if post has a slug field, otherwise generate slug from title
          const postSlug = p.slug || (p.title ? slugify(p.title) : '');
          return postSlug === slug;
        });

        if (foundPost) {
          setPost(foundPost);
        } else {
          // Fallback: try to fetch by ID if slug doesn't match (for backward compatibility)
          // This handles old links that might still use IDs
          try {
            const res = await fetch(`https://api.officekithr.com/api/blogs/${slug}`);
            if (res.ok) {
              const data = await res.json();
              setPost(data);
            }
          } catch (err) {
            console.error("Failed to fetch by slug or ID:", err);
          }
        }
      } catch (err) {
        console.error("Error fetching post:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center text-gray-500">
        Loading blog...
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex justify-center items-center text-red-500">
        Blog not found
      </div>
    );
  }

  const formatDateTime = (value?: string) => {
    if (!value) return "";
    const date = new Date(value);
    return date.toLocaleString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
    });
  };

  // Sanitize HTML to prevent XSS
  const sanitizedContent = DOMPurify.sanitize(post.content || "");
  const cleanedContent = sanitizedContent
    .replace(/<p>(\s|&nbsp;|<br\s*\/?>)*<\/p>/gi, "")
    .replace(/(?:<br\s*\/?>\s*){3,}/gi, "<br /><br />")
    .trim();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <article className="pt-24 pb-24">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Back Link */}
          <BackToBlog className="mb-10 mt-2" />

          {/* Header */}
          <header className="mb-8">
            <div className="mb-4">
              <span className="inline-block px-3 py-1 text-xs font-semibold text-indigo-600 bg-indigo-100 rounded-full">
                Blogs
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Author, Date, Read Time */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span className="font-medium">{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>
                  {new Date(post.date || post.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{formatDateTime(post.createdAt || post.updatedAt)}</span>
              </div>
              <span className="text-gray-500">5 min read</span>
            </div>

            {/* Action Buttons */}
            <BlogActions title={post.title} />
            <div className="h-px bg-border/80 my-8" />
          </header>

          {/* Featured Image */}
          <div className="aspect-video rounded-xl mb-10 overflow-hidden shadow-lg">
            <img
              src={post.image || "https://via.placeholder.com/1200x600?text=Blog+Image"}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Blog Content - Preserve Editor Styles */}
          <div
            className="blog-content mb-16"
            dangerouslySetInnerHTML={{ __html: cleanedContent }}
          />

          {/* CTA Section */}
         <div className="bg-gradient-subtle rounded-lg p-8 mt-12 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Transform Your HR with OfficeKit
            </h3>
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