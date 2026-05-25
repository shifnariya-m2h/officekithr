import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { PageShell } from "@/seo/PageShell";
import { SeoHeroBanner } from "@/components/seo/SeoHeroBanner";
import { DirectAnswerBlock } from "@/components/seo/DirectAnswerBlock";
import { COMPARISONS } from "@/data/comparisons";

const CompareHub = () => (
  <PageShell
    title="Compare HRMS Software | OfficeKit HR"
    description="Compare OfficeKit HR with other HRMS vendors. Factual alternative guides for India and GCC buyers."
    path="/compare"
  >
    <div className="min-h-screen bg-background">
      <Navigation />

      <SeoHeroBanner
        eyebrow="Software comparisons"
        title="HRMS comparisons"
        subtitle="Neutral comparison pages to help you evaluate OfficeKit HR against other platforms."
      />

      <main className="container mx-auto px-4 max-w-4xl py-12 md:py-16">
        <DirectAnswerBlock
          answer="OfficeKit HR comparison pages summarize factual differences between OfficeKit and other HRMS vendors—covering payroll (India and GCC), WPS, attendance, AI automation, and deployment—so HR and IT leaders can shortlist vendors without marketing fluff."
          definition={{
            term: "HRMS comparison",
            meaning:
              "Side-by-side evaluation of human resource management systems on features, regional compliance, and fit for your workforce size.",
          }}
        />

        <ul className="mt-12 space-y-4 list-none p-0">
          {Object.values(COMPARISONS).map((page) => (
            <li key={page.path}>
              <Link
                to={page.path}
                className="block rounded-xl border border-border p-6 hover:bg-muted/50 transition-colors bg-card"
              >
                <h2 className="text-xl font-semibold text-foreground mb-2">
                  {page.h1}
                </h2>
                <p className="text-muted-foreground">{page.intro.slice(0, 160)}…</p>
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </div>
  </PageShell>
);

export default CompareHub;
