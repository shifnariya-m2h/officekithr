import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { PageShell } from "@/seo/PageShell";
import { CASE_STUDIES } from "@/data/case-studies";
import { TESTIMONIALS, AGGREGATE_RATING } from "@/data/testimonials-data";
import { Button } from "@/components/ui/button";
import { ArrowRight, Quote, Star } from "lucide-react";
import { breadcrumbSchema } from "@/seo/schema";
import { PageJsonLd } from "@/components/PageJsonLd";

const Customers = () => {
  return (
    <PageShell
      title="Customer Success Stories | OfficeKit HR"
      description="See how Lulu International Exchange, Thai Group, Midac Electronics and 500+ companies use OfficeKit HR for India and GCC payroll."
      path="/customers"
    >
      <PageJsonLd
        nodes={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Customers", path: "/customers" },
          ]),
        ]}
      />
      <div className="min-h-screen bg-background">
        <Navigation />
        <section className="pt-36 pb-12 md:pt-44 bg-gradient-subtle">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Trusted by 500+ companies
            </h1>
            <p className="text-lg text-muted-foreground">
              HR teams across India and the GCC automate payroll, attendance, and
              compliance with OfficeKit HR.
            </p>
            <div className="flex justify-center gap-1 mt-4" aria-label="4.8 out of 5 stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="ml-2 text-sm text-muted-foreground">
                {AGGREGATE_RATING.ratingValue}/5 from {AGGREGATE_RATING.reviewCount} reviews
              </span>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-5xl space-y-12">
            {CASE_STUDIES.map((cs) => (
              <article
                key={cs.slug}
                className="rounded-2xl border bg-card p-8 md:p-10"
              >
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs font-medium rounded-full bg-muted px-3 py-1">
                    {cs.industry}
                  </span>
                  <span className="text-xs font-medium rounded-full bg-muted px-3 py-1">
                    {cs.region}
                  </span>
                  <span className="text-xs font-medium rounded-full bg-muted px-3 py-1">
                    {cs.employees} employees
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  {cs.company}
                </h2>
                <div className="grid md:grid-cols-3 gap-6 text-sm">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Challenge</h3>
                    <p className="text-muted-foreground">{cs.challenge}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Solution</h3>
                    <p className="text-muted-foreground">{cs.solution}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Results</h3>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      {cs.results.map((r) => (
                        <li key={r}>{r}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                {cs.quote && (
                  <blockquote className="mt-6 flex gap-3 border-t pt-6 text-muted-foreground italic">
                    <Quote className="h-5 w-5 shrink-0 text-[#0055ff]" aria-hidden />
                    <div>
                      &ldquo;{cs.quote.text}&rdquo;
                      <footer className="mt-2 text-sm not-italic text-foreground font-medium">
                        — {cs.quote.author}, {cs.quote.role}
                      </footer>
                    </div>
                  </blockquote>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="py-16 bg-muted/30 text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-semibold mb-4">Join 500+ growing companies</h2>
            <Button asChild className="rounded-full bg-[#0055ff] h-11 px-8">
              <Link to="/contact">
                Book a free demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </PageShell>
  );
};

export default Customers;
