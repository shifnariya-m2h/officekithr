import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Calendar, User, ArrowLeft, Share2, BookmarkPlus } from "lucide-react";
import DOMPurify from "dompurify";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { getAllPosts } from "@/services/blogService";
import { slugify } from "@/utils/slugify";

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
            const res = await fetch(`http://52.66.55.51:5000/api/blogs/${slug}`);
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

  // Sanitize HTML to prevent XSS
  const sanitizedContent = DOMPurify.sanitize(post.content);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <article className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Back Link */}
          <Link
            to="/resources/blogs"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>

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
              <span className="text-gray-500">5 min read</span>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                <Share2 className="h-4 w-4" />
                Share
              </button>
              <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                <BookmarkPlus className="h-4 w-4" />
                Save
              </button>
            </div>
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
            dangerouslySetInnerHTML={{ __html: sanitizedContent }}
            style={{
              // Allow inline styles
              all: "revert",
              fontFamily: "inherit",
              lineHeight: "1.7",
            }}
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