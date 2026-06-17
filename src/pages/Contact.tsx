import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import { CalendlyEmbed } from "@/components/CalendlyEmbed";
import { PageShell } from "@/seo/PageShell";
import { breadcrumbSchema, webPageSchema } from "@/seo/schema";
import { PAGE_GEO_BY_PATH } from "@/data/page-faqs";
import { absoluteUrl } from "@/seo/site-config";

const PAGE_PATH = "/contact";

const Contact = () => {
  return (
    <PageShell
      title="Contact OfficeKit HR | Book a Demo"
      description="Book a free OfficeKit HR demo. Talk to our team about payroll, attendance, recruitment, and compliance for your business."
      path={PAGE_PATH}
      faqs={PAGE_GEO_BY_PATH[PAGE_PATH]?.faqs}
      schemaNodes={[
        webPageSchema({
          url: absoluteUrl(PAGE_PATH),
          name: "Contact OfficeKit HR",
          description:
            "Book a demo or contact the OfficeKit HR sales team for India and GCC HRMS.",
          type: "ContactPage",
        }),
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: PAGE_PATH },
        ]),
      ]}
    >
      <div className="min-h-screen bg-background">
        <Navigation />
        <ContactSection headingLevel="h1" />
        <section className="py-16 bg-muted/30 border-t">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl font-semibold text-center text-foreground mb-2">
              Or pick a time instantly
            </h2>
            <p className="text-center text-muted-foreground mb-8">
              Schedule a 30-minute demo with our HR specialists
            </p>
            <CalendlyEmbed />
          </div>
        </section>
        <Footer />
      </div>
    </PageShell>
  );
};

export default Contact;
