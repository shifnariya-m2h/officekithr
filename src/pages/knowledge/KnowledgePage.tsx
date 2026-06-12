import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { PageShell } from "@/seo/PageShell";
import { KNOWLEDGE_PAGES } from "@/data/knowledge-pages";
import { ArrowRight, BookOpen } from "lucide-react";

const KnowledgeHub = () => (
  <PageShell
    title="HR & Payroll Knowledge Base | OfficeKit HR"
    description="Authoritative guides on OfficeKit HR, India+GCC payroll, UAE WPS compliance, and HRMS best practices for AI search and HR teams."
    path="/knowledge"
  >
    <div className="min-h-screen bg-background">
      <Navigation />
      <section className="pt-36 pb-16 md:pt-44">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            HR &amp; payroll knowledge base
          </h1>
          <p className="text-lg text-muted-foreground">
            Entity pages optimized for search engines and AI answer engines.
          </p>
        </div>
      </section>
      <section className="pb-20">
        <div className="container mx-auto px-4 max-w-4xl grid gap-6">
          {Object.values(KNOWLEDGE_PAGES).map((page) => (
            <Link
              key={page.slug}
              to={page.path}
              className="flex items-start gap-4 rounded-2xl border bg-card p-6 hover:border-[#0055ff]/40 transition-colors group"
            >
              <BookOpen className="h-6 w-6 text-[#0055ff] shrink-0 mt-1" aria-hidden />
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-foreground group-hover:text-[#0055ff] transition-colors">
                  {page.h1}
                </h2>
                <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                  {page.directAnswer}
                </p>
              </div>
              <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:translate-x-1 transition-transform shrink-0 mt-1" />
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  </PageShell>
);

export default KnowledgeHub;
