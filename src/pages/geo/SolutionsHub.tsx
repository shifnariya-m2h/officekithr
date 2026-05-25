import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { PageShell } from "@/seo/PageShell";
import { GEO_LANDINGS } from "@/data/geo-landings";

const SolutionsHub = () => (
  <PageShell
    title="HRMS Solutions by Region | OfficeKit HR"
    description="Explore OfficeKit HR solutions for India HRMS, UAE payroll, WPS compliance, and AI HR software across the GCC."
    path="/solutions"
  >
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-36 pb-20 container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-foreground mb-4">
          HR & payroll solutions
        </h1>
        <p className="text-lg text-muted-foreground mb-12">
          Factual guides for HR leaders evaluating HRMS, payroll, and compliance software.
        </p>
        <ul className="space-y-4 list-none p-0">
          {Object.values(GEO_LANDINGS).map((page) => (
            <li key={page.path}>
              <Link
                to={page.path}
                className="block rounded-xl border border-border p-6 hover:bg-muted/50 transition-colors"
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
