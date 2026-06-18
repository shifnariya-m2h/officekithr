import Navigation from "@/components/Navigation";
import HeroSection from "./components/Herosection";
import HowWorks from "./components/how-work";
import Benifits from "./components/Benifits";
import Footer from "@/components/Footer";
import { PageShell } from "@/seo/PageShell";
import { productSchema } from "@/seo/schema";
import { canonicalUrl } from "@/seo/site-config";
import { ProductPageShell } from "@/components/product";

const PAGE_PATH = "/features/face-kit";

const FaceLens = () => {
  const url = canonicalUrl(PAGE_PATH);

  return (
    <PageShell
      title="Face Kit — AI Face Scan Attendance | OfficeKit HR"
      description="Touchless AI face scan attendance, free for up to 25 users. Syncs with OfficeKit HR payroll, leave, and workforce insights."
      path={PAGE_PATH}
      schemaNodes={[
        productSchema({
          name: "Face Kit — OfficeKit HR",
          description:
            "AI face scan attendance app with touchless check-in, synced to OfficeKit HR payroll and reports.",
          url,
        }),
      ]}
    >
      <ProductPageShell>
        <Navigation />
        <main id="main-content">
          <HeroSection />
          <HowWorks />
          <Benifits />
        </main>
        <Footer />
      </ProductPageShell>
    </PageShell>
  );
};

export default FaceLens;
