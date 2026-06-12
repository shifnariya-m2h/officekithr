import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { PageShell } from "@/seo/PageShell";
import { GUIDE_PAGES } from "@/data/guide-pages";
import { BookOpen, ArrowRight } from "lucide-react";

const GuidesHub = () => (
  <PageShell
    title="HR & Payroll Guides | OfficeKit HR"
    description="Buyer guides, migration playbooks, and compliance checklists for India and GCC HR teams."
    path="/guides"
  >
    <div className="min-h-screen bg-background">
      <Navigation />
      <section className="pt-36 pb-16 md:pt-44">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">HR &amp; payroll guides</h1>
          <p className="text-muted-foreground">Buyer guides, migrations, and compliance checklists.</p>
        </div>
      </section>
      <section className="pb-20">
        <div className="container mx-auto px-4 max-w-4xl grid gap-4">
          {Object.values(GUIDE_PAGES).map((g) => (
            <Link
              key={g.slug}
              to={g.path}
              className="flex items-center gap-4 rounded-2xl border bg-card p-6 hover:border-[#0055ff]/40 group"
            >
              <BookOpen className="h-6 w-6 text-[#0055ff] shrink-0" />
              <div className="flex-1 text-left">
                <h2 className="font-semibold text-foreground group-hover:text-[#0055ff]">{g.h1}</h2>
                <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{g.subtitle}</p>
              </div>
              <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:translate-x-1 transition-transform" />
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  </PageShell>
);

export default GuidesHub;
