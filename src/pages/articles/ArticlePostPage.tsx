import { Link, useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { PageShell } from "@/seo/PageShell";
import { ARTICLE_POSTS } from "@/data/article-posts";
import { DirectAnswerBlock } from "@/components/seo/DirectAnswerBlock";
import { GeoFaqSection } from "@/components/geo/GeoFaqSection";
import { articleSchema, breadcrumbSchema } from "@/seo/schema";
import { absoluteUrl } from "@/seo/site-config";
import { SITE } from "@/seo/site-config";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import NotFound from "@/pages/NotFound";

function ArticleBody({ text }: { text: string }) {
  return (
    <div className="space-y-4 text-muted-foreground leading-relaxed">
      {text.split("\n\n").map((paragraph) => (
        <p key={paragraph.slice(0, 48)}>{paragraph}</p>
      ))}
    </div>
  );
}

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
      noindex={post.draft}
      faqs={post.faqs}
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
            {post.draft && (
              <p
                className="mb-6 rounded-lg border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-900"
                role="status"
              >
                Draft preview — not indexed. Resolve author proof slot and customer quote before publishing.
              </p>
            )}
            <div className="flex flex-wrap gap-2 text-sm text-muted-foreground mb-4">
              <span className="rounded-full bg-muted px-3 py-1">{post.category}</span>
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" aria-hidden />
                {post.datePublished}
              </span>
              <span>{post.readTime}</span>
              <span>By {post.author}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 leading-tight">
              {post.headline}
            </h1>
            <DirectAnswerBlock answer={post.directAnswer} />
            {post.intro && (
              <div className="mt-8">
                <ArticleBody text={post.intro} />
              </div>
            )}
            <div className="mt-10 space-y-10">
              {post.sections.map((s) => (
                <section key={s.heading}>
                  <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-4">
                    {s.heading}
                  </h2>
                  <ArticleBody text={s.body} />
                </section>
              ))}
            </div>

            {post.faqs && post.faqs.length > 0 && (
              <div className="mt-14">
                <GeoFaqSection
                  faqs={post.faqs}
                  heading="Frequently asked questions"
                  id="article-faq"
                />
              </div>
            )}

            <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#0055ff]/5 border border-[#0055ff]/20">
              <p className="text-foreground font-medium mb-2 text-center">
                Running teams in both India and the GCC on duct tape and two logins?
              </p>
              <p className="text-muted-foreground text-sm text-center mb-5">
                See your exact monthly cost in two minutes, or talk to us about a two-week switch.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button asChild className="rounded-full bg-[#0055ff]">
                  <Link to="/pricing">
                    View pricing
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="rounded-full">
                  <Link to="/contact">
                    Book a demo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <p className="text-xs text-muted-foreground text-center mt-4">
                Related:{" "}
                <Link to="/compare/keka-alternative" className="text-[#0055ff] hover:underline">
                  Keka alternative
                </Link>
                {" · "}
                <Link to="/officekit-vs-greythr" className="text-[#0055ff] hover:underline">
                  OfficeKit vs greytHR
                </Link>
                {" · "}
                <Link to="/guides/hrms-buyer-guide-gcc-2026" className="text-[#0055ff] hover:underline">
                  GCC HRMS buyer guide
                </Link>
              </p>
            </div>
          </div>
        </article>
        <Footer />
      </div>
    </PageShell>
  );
};

export default ArticlePostPage;
