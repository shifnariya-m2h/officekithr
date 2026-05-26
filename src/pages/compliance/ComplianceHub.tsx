import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { PageShell } from "@/seo/PageShell";
import { SeoHeroBanner } from "@/components/seo/SeoHeroBanner";
import { DirectAnswerBlock } from "@/components/seo/DirectAnswerBlock";
import { PAYROLL_COMPLIANCE } from "@/data/payroll-compliance";
import { ArrowRight } from "lucide-react";

const ComplianceHub = () => (
  <PageShell
    title="Payroll Compliance Guide | India, UAE, KSA, GCC — OfficeKit HR"
    description="Country-specific payroll compliance guides for India, UAE, Saudi Arabia, Kuwait, Qatar, Oman, and Bahrain. Stay compliant with OfficeKit HR."
    path="/compliance"
  >
    <div className="min-h-screen bg-background">
      <Navigation />

      <SeoHeroBanner
        eyebrow="Payroll Compliance"
        title="Country-by-country payroll compliance guides"
        subtitle="Factual, up-to-date compliance briefings for HR and finance teams operating across India and the GCC."
      />

      <main className="container mx-auto px-4 max-w-4xl py-12 md:py-16">
        <DirectAnswerBlock
          answer="OfficeKit HR compliance guides explain payroll regulations, statutory deductions, and filing requirements for India (PF, ESI, PT, TDS), UAE (WPS, MOHRE), Saudi Arabia (GOSI, ZATCA), Kuwait (PIFSS), Qatar (WPS), Oman (PASI), and Bahrain (SIO, LMRA) — written for HR and finance teams managing multi-country payroll."
          definition={{
            term: "Payroll compliance",
            meaning:
              "The process of adhering to government regulations regarding employee salary calculation, tax withholding, social security contributions, and statutory filings in each country of operation.",
          }}
        />

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.values(PAYROLL_COMPLIANCE).map((page) => (
            <Link
              key={page.path}
              to={page.path}
              className="group block rounded-xl border border-border p-6 hover:bg-muted/50 transition-colors bg-card"
            >
              <span className="text-sm font-medium text-primary mb-2 block">
                {page.country}
              </span>
              <h2 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {page.h1}
              </h2>
              <p className="text-sm text-muted-foreground line-clamp-2">
                {page.subtitle}
              </p>
              <span className="inline-flex items-center text-sm font-medium text-primary mt-3">
                Read guide <ArrowRight className="ml-1 h-3 w-3" />
              </span>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  </PageShell>
);

export default ComplianceHub;
