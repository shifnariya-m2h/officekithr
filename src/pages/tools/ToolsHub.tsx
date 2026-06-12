import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { PageShell } from "@/seo/PageShell";
import { TOOL_PAGES } from "@/data/tools-config";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calculator } from "lucide-react";

const ToolsHub = () => (
  <PageShell
    title="Free HR & Payroll Tools | OfficeKit HR"
    description="Free PF/ESI calculator, UAE gratuity calculator, HRMS ROI calculator, and WPS file checker for India and GCC HR teams."
    path="/tools"
  >
    <div className="min-h-screen bg-background">
      <Navigation />
      <section className="pt-36 pb-16 md:pt-44">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Free HR &amp; payroll tools
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Calculators and validators for India statutory payroll and UAE WPS
            compliance — powered by OfficeKit HR expertise.
          </p>
        </div>
      </section>
      <section className="pb-20">
        <div className="container mx-auto px-4 max-w-4xl grid sm:grid-cols-2 gap-6">
          {Object.values(TOOL_PAGES).map((tool) => (
            <article
              key={tool.slug}
              className="rounded-2xl border bg-card p-6 hover:border-[#0055ff]/40 transition-colors"
            >
              <Calculator className="h-8 w-8 text-[#0055ff] mb-4" aria-hidden />
              <h2 className="text-xl font-semibold text-foreground mb-2">
                {tool.h1}
              </h2>
              <p className="text-sm text-muted-foreground mb-4">{tool.intro}</p>
              <Button asChild variant="outline" className="rounded-full">
                <Link to={tool.path}>
                  Open tool
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </article>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  </PageShell>
);

export default ToolsHub;
