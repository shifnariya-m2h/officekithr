import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { PageShell } from "@/seo/PageShell";
import { SeoHeroBanner } from "@/components/seo/SeoHeroBanner";
import { DirectAnswerBlock } from "@/components/seo/DirectAnswerBlock";
import { GEO_LANDINGS } from "@/data/geo-landings";

const SolutionsHub = () => (
  <PageShell
    title="HRMS Solutions by Region | OfficeKit HR"
    description="Explore OfficeKit HR solutions for India HRMS, UAE payroll, WPS compliance, and AI HR software across the GCC."
    path="/solutions"
  >
    <div className="min-h-screen bg-background">
      <Navigation />

      <SeoHeroBanner
        eyebrow="OfficeKit HR Solutions"
        title="HR & payroll solutions"
        subtitle="Factual guides for HR leaders evaluating HRMS, payroll, and compliance software."
      />

      <main className="container mx-auto px-4 max-w-4xl py-12 md:py-16">
        <DirectAnswerBlock
          answer="OfficeKit HR solution pages explain HRMS, payroll, and compliance software for India and the GCC—including statutory payroll, WPS, attendance, recruitment, and AI-assisted workflows—in plain language for buyers and search engines."
          definition={{
            term: "Regional HR solutions",
            meaning:
              "Product and compliance guides tailored to a country or region’s labor laws, payroll rules, and workforce practices.",
          }}
        />

        <ul className="mt-12 space-y-4 list-none p-0">
          {Object.values(GEO_LANDINGS).map((page) => (
            <li key={page.path}>
              <Link
                to={page.path}
                className="block rounded-xl border border-border p-6 hover:bg-muted/50 transition-colors bg-card"
              >
                <h2 className="text-xl font-semibold text-foreground mb-2">
                  {page.h1}
                </h2>
                <p className="text-muted-foreground">{page.subtitle}</p>
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </div>
  </PageShell>
);

export default SolutionsHub;
