import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { PageShell } from "@/seo/PageShell";
import { SeoHeroBanner } from "@/components/seo/SeoHeroBanner";
import { DirectAnswerBlock } from "@/components/seo/DirectAnswerBlock";
import { GEO_LANDINGS, GEO_LANDING_REGIONS } from "@/data/geo-landings";

const REGION_META = {
  india: {
    title: "India",
    description: "HRMS, statutory payroll, and compliance for Indian employers.",
  },
  uae: {
    title: "United Arab Emirates",
    description: "UAE payroll, WPS, and labour-law aligned HR software.",
  },
  gcc: {
    title: "GCC & global regions",
    description:
      "Saudi Arabia, Kuwait, Qatar, Oman, Bahrain, and AI HR for multi-country groups.",
  },
} as const;

function RegionBlock({
  regionKey,
}: {
  regionKey: keyof typeof GEO_LANDING_REGIONS;
}) {
  const meta = REGION_META[regionKey];
  const slugs = GEO_LANDING_REGIONS[regionKey];

  return (
    <section className="space-y-4" aria-labelledby={`region-${regionKey}`}>
      <div>
        <h2
          id={`region-${regionKey}`}
          className="text-xl font-semibold text-foreground"
        >
          {meta.title}
        </h2>
        <p className="text-sm text-muted-foreground mt-1">{meta.description}</p>
      </div>
      <ul className="space-y-3 list-none p-0">
        {slugs.map((slug) => {
          const page = GEO_LANDINGS[slug];
          if (!page) return null;
          return (
            <li key={page.path}>
              <Link
                to={page.path}
                className="block rounded-xl border border-border p-5 hover:bg-muted/50 transition-colors bg-card"
              >
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {page.h1}
                </h3>
                <p className="text-muted-foreground text-sm">{page.subtitle}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

const SolutionsHub = () => (
  <PageShell
    title="HRMS Solutions by Region | OfficeKit HR"
    description="Explore OfficeKit HR solutions for India HRMS, UAE payroll, WPS compliance, and HR software across the GCC."
    path="/solutions"
  >
    <div className="min-h-screen bg-background">
      <Navigation />

      <SeoHeroBanner
        eyebrow="OfficeKit HR Solutions"
        title="HR & payroll solutions"
        subtitle="Regional guides for India, UAE, and GCC — factual pages for HR and finance leaders."
      />

      <main className="container mx-auto px-4 max-w-4xl py-12 md:py-16 space-y-14">
        <DirectAnswerBlock
          answer="OfficeKit HR solution pages explain HRMS, payroll, and compliance software for India and the GCC—including statutory payroll, WPS, attendance, recruitment, and AI-assisted workflows—in plain language for buyers and search engines."
          definition={{
            term: "Regional HR solutions",
            meaning:
              "Product and compliance guides tailored to a country or region’s labor laws, payroll rules, and workforce practices.",
          }}
        />

        <div className="flex flex-wrap gap-3">
          <Link
            to="/"
            className="rounded-full border border-border px-4 py-2 text-sm font-medium hover:bg-muted/60"
          >
            India (home)
          </Link>
          <Link
            to="/ae"
            className="rounded-full border border-border px-4 py-2 text-sm font-medium hover:bg-muted/60"
          >
            UAE (العربية)
          </Link>
          <Link
            to="/hr-software-uae"
            className="rounded-full border border-border px-4 py-2 text-sm font-medium hover:bg-muted/60"
          >
            HR software UAE
          </Link>
          <Link
            to="/hrms-software-india"
            className="rounded-full border border-border px-4 py-2 text-sm font-medium hover:bg-muted/60"
          >
            HRMS India
          </Link>
        </div>

        <RegionBlock regionKey="india" />
        <RegionBlock regionKey="uae" />
        <RegionBlock regionKey="gcc" />
      </main>
      <Footer />
    </div>
  </PageShell>
);

export default SolutionsHub;
