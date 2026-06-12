import { Link, useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { PageShell } from "@/seo/PageShell";
import { ARTICLE_POSTS } from "@/data/article-posts";
import { DirectAnswerBlock } from "@/components/seo/DirectAnswerBlock";
import { articleSchema, breadcrumbSchema } from "@/seo/schema";
import { absoluteUrl } from "@/seo/site-config";
import { SITE } from "@/seo/site-config";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import NotFound from "@/pages/NotFound";

const ArticlePostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? ARTICLE_POSTS[slug] : undefined;
  if (!post) return <NotFound />;

  return (
    <PageShell
      title={post.title}
      description={post.metaDescription}
      path={post.path}
      type="article"
      schemaNodes={[
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/resources/blogs" },
          { name: post.headline, path: post.path },
        ]),
        articleSchema({
          title: post.headline,
          description: post.metaDescription,
          url: absoluteUrl(post.path),
          image: SITE.ogImage,
          datePublished: post.datePublished,
          author: post.author,
        }),
      ]}
    >
      <div className="min-h-screen bg-background">
        <Navigation />
        <article className="pt-36 pb-16 md:pt-44">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="flex flex-wrap gap-2 text-sm text-muted-foreground mb-4">
              <span className="rounded-full bg-muted px-3 py-1">{post.category}</span>
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" aria-hidden />
                {post.datePublished}
              </span>
              <span>{post.readTime}</span>
              <span>By {post.author}</span>
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-6">{post.headline}</h1>
            <DirectAnswerBlock answer={post.directAnswer} />
            <div className="mt-10 space-y-8">
              {post.sections.map((s) => (
                <section key={s.heading}>
                  <h2 className="text-2xl font-semibold text-foreground mb-3">{s.heading}</h2>
                  <p className="text-muted-foreground leading-relaxed">{s.body}</p>
                </section>
              ))}
            </div>
            <div className="mt-12 p-6 rounded-2xl bg-[#0055ff]/5 border border-[#0055ff]/20 text-center">
              <p className="text-foreground font-medium mb-4">
                See how OfficeKit HR handles this in practice
              </p>
              <Button asChild className="rounded-full bg-[#0055ff]">
                <Link to="/contact">
                  Book a free demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </article>
        <Footer />
      </div>
    </PageShell>
  );
};

export default ArticlePostPage;
