import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { PageShell } from "@/seo/PageShell";
import { COMPARISONS } from "@/data/comparisons";

const CompareHub = () => (
  <PageShell
    title="Compare HRMS Software | OfficeKit HR"
    description="Compare OfficeKit HR with other HRMS vendors. Factual alternative guides for India and GCC buyers."
    path="/compare"
  >
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-36 pb-20 container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-foreground mb-4">
          HRMS comparisons
        </h1>
        <p className="text-lg text-muted-foreground mb-12">
          Neutral comparison pages to help you evaluate OfficeKit HR against other platforms.
        </p>
        <ul className="space-y-4 list-none p-0">
          {Object.values(COMPARISONS).map((page) => (
            <li key={page.path}>
              <Link
                to={page.path}
                className="block rounded-xl border border-border p-6 hover:bg-muted/50 transition-colors"
              >
                <h2 className="text-xl font-semibold text-foreground mb-2">
                  {page.h1}
                </h2>
                <p className="text-muted-foreground">{page.intro.slice(0, 140)}…</p>
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
