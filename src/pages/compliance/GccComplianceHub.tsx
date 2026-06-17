import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { PageShell } from "@/seo/PageShell";
import { SeoHeroBanner } from "@/components/seo/SeoHeroBanner";
import { DirectAnswerBlock } from "@/components/seo/DirectAnswerBlock";
import { SeoBreadcrumb } from "@/components/seo/SeoBreadcrumb";
import { PAYROLL_COMPLIANCE } from "@/data/payroll-compliance";
import { breadcrumbSchema } from "@/seo/schema";
import { ArrowRight } from "lucide-react";

const GCC_SLUGS = [
  "uae-payroll-compliance",
  "ksa-payroll-compliance",
  "kuwait-payroll-compliance",
  "qatar-payroll-compliance",
  "oman-payroll-compliance",
  "bahrain-payroll-compliance",
] as const;

const GCC_FAQS = [
  {
    question: "What is GCC payroll compliance?",
    answer:
      "GCC payroll compliance covers statutory salary rules, social insurance, WPS (Wage Protection System) filings, end-of-service benefits, and labour-law reporting for employers in UAE, Saudi Arabia, Kuwait, Qatar, Oman, and Bahrain.",
  },
  {
    question: "Does OfficeKit HR support WPS for UAE payroll?",
    answer:
      "Yes. OfficeKit HR generates UAE WPS/SIF salary files, tracks MOHRE-aligned payroll, and supports mainland and free-zone entities. See our UAE payroll compliance guide and WPS software page for details.",
  },
  {
    question: "How does GOSI work for Saudi Arabia payroll?",
    answer:
      "GOSI (General Organization for Social Insurance) requires employer and employee contributions on eligible Saudi and GCC nationals. OfficeKit HR calculates GOSI, supports Qiwa-aligned workflows, and produces KSA statutory reports.",
  },
  {
    question: "Can one HRMS handle India and GCC payroll together?",
    answer:
      "Yes. OfficeKit HR runs India statutory payroll (PF, ESI, PT, TDS) and GCC country payroll on one platform — ideal for groups with entities in India and the Gulf.",
  },
];

const gccPages = GCC_SLUGS.map((slug) => PAYROLL_COMPLIANCE[slug]).filter(Boolean);

const GccComplianceHub = () => (
  <PageShell
    title="GCC Payroll Compliance Hub | WPS, GOSI, PIFSS — OfficeKit HR"
    description="GCC payroll compliance hub: UAE WPS, Saudi GOSI, Kuwait PIFSS, Qatar WPS, Oman PASI, and Bahrain SIO. Statutory guides and automation with OfficeKit HR."
    path="/gcc-compliance"
    faqs={GCC_FAQS}
    schemaNodes={[
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "GCC Compliance", path: "/gcc-compliance" },
      ]),
    ]}
  >
    <div className="min-h-screen bg-background">
      <Navigation />

      <SeoHeroBanner
        eyebrow="GCC Payroll Compliance"
        title="GCC payroll compliance authority hub"
        subtitle="WPS, GOSI, PIFSS, and statutory payroll requirements across UAE, Saudi Arabia, Kuwait, Qatar, Oman, and Bahrain."
      />

      <div className="container mx-auto px-4 max-w-4xl py-6">
        <SeoBreadcrumb
          items={[
            { name: "Home", path: "/" },
            { name: "Compliance", path: "/compliance" },
            { name: "GCC Compliance", path: "/gcc-compliance" },
          ]}
        />
      </div>

      <section className="container mx-auto px-4 max-w-4xl pb-12 md:pb-16">
        <DirectAnswerBlock
          answer="OfficeKit HR's GCC compliance hub covers WPS payroll (UAE, Qatar), GOSI and ZATCA (Saudi Arabia), PIFSS (Kuwait), PASI (Oman), and SIO/LMRA (Bahrain) — with country guides, statutory checklists, and payroll automation for HR and finance teams operating across the Gulf."
          definition={{
            term: "GCC payroll compliance",
            meaning:
              "Adherence to Gulf Cooperation Council labour laws and social insurance systems governing wages, deductions, filings, and end-of-service benefits in UAE, KSA, Kuwait, Qatar, Oman, and Bahrain.",
          }}
        />

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {gccPages.map((page) => (
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

        <div className="mt-12 rounded-xl border border-border bg-muted/30 p-6 md:p-8">
          <h2 id="page-faq-heading" className="text-2xl font-semibold text-foreground mb-4">
            GCC compliance topics
          </h2>
          <ul className="grid sm:grid-cols-2 gap-3 text-sm">
            <li>
              <Link to="/wps-compliance-software" className="text-primary hover:underline">
                WPS compliance software
              </Link>
            </li>
            <li>
              <Link to="/payroll-software-uae" className="text-primary hover:underline">
                Payroll software UAE
              </Link>
            </li>
            <li>
              <Link to="/solutions/payroll-software-ksa" className="text-primary hover:underline">
                Payroll software KSA
              </Link>
            </li>
            <li>
              <Link to="/solutions/ai-hr-software-gcc" className="text-primary hover:underline">
                AI HR software GCC
              </Link>
            </li>
            <li>
              <Link to="/compliance" className="text-primary hover:underline">
                All compliance guides (India + GCC)
              </Link>
            </li>
            <li>
              <Link to="/pricing" className="text-primary hover:underline">
                HRMS pricing
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <Footer />
    </div>
  </PageShell>
);

export default GccComplianceHub;
