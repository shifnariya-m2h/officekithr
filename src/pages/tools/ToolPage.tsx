import { useMemo, useState, type FC } from "react";
import { Link, useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { PageShell } from "@/seo/PageShell";
import { TOOL_PAGES } from "@/data/tools-config";
import { GeoFaqSection } from "@/components/geo/GeoFaqSection";
import { RelatedLinks } from "@/components/geo/RelatedLinks";
import { DirectAnswerBlock } from "@/components/seo/DirectAnswerBlock";
import { breadcrumbSchema } from "@/seo/schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight } from "lucide-react";
import NotFound from "@/pages/NotFound";

function PfEsiCalculator() {
  const [basic, setBasic] = useState(25000);
  const [gross, setGross] = useState(30000);

  const pfEmployee = Math.round(basic * 0.12);
  const pfEmployer = Math.round(basic * 0.12);
  const esiEmployee = gross <= 21000 ? Math.round(gross * 0.0075) : 0;
  const esiEmployer = gross <= 21000 ? Math.round(gross * 0.0325) : 0;

  return (
    <div className="rounded-2xl border bg-card p-6 space-y-4 max-w-md mx-auto">
      <div>
        <Label htmlFor="basic">Basic salary (₹)</Label>
        <Input
          id="basic"
          type="number"
          value={basic}
          onChange={(e) => setBasic(Number(e.target.value) || 0)}
          className="mt-1"
        />
      </div>
      <div>
        <Label htmlFor="gross">Gross salary for ESI (₹)</Label>
        <Input
          id="gross"
          type="number"
          value={gross}
          onChange={(e) => setGross(Number(e.target.value) || 0)}
          className="mt-1"
        />
      </div>
      <dl className="grid grid-cols-2 gap-3 text-sm pt-2 border-t">
        <dt className="text-muted-foreground">PF (employee)</dt>
        <dd className="font-semibold text-right">₹{pfEmployee}</dd>
        <dt className="text-muted-foreground">PF (employer)</dt>
        <dd className="font-semibold text-right">₹{pfEmployer}</dd>
        <dt className="text-muted-foreground">ESI (employee)</dt>
        <dd className="font-semibold text-right">₹{esiEmployee}</dd>
        <dt className="text-muted-foreground">ESI (employer)</dt>
        <dd className="font-semibold text-right">₹{esiEmployer}</dd>
      </dl>
    </div>
  );
}

function GratuityCalculator() {
  const [basic, setBasic] = useState(8000);
  const [years, setYears] = useState(5);

  const daily = basic / 30;
  const gratuity =
    years <= 5
      ? Math.round(daily * 21 * years)
      : Math.round(daily * 21 * 5 + daily * 30 * (years - 5));

  return (
    <div className="rounded-2xl border bg-card p-6 space-y-4 max-w-md mx-auto">
      <div>
        <Label htmlFor="uae-basic">Basic salary (AED)</Label>
        <Input
          id="uae-basic"
          type="number"
          value={basic}
          onChange={(e) => setBasic(Number(e.target.value) || 0)}
          className="mt-1"
        />
      </div>
      <div>
        <Label htmlFor="years">Years of service</Label>
        <Input
          id="years"
          type="number"
          value={years}
          onChange={(e) => setYears(Number(e.target.value) || 0)}
          className="mt-1"
        />
      </div>
      <p className="text-center text-2xl font-bold text-foreground pt-2 border-t">
        Estimated gratuity: AED {gratuity.toLocaleString()}
      </p>
      <p className="text-xs text-muted-foreground text-center">
        Estimate only — actual gratuity depends on contract type and termination reason.
      </p>
    </div>
  );
}

function RoiCalculator() {
  const [employees, setEmployees] = useState(100);
  const [hrStaff, setHrStaff] = useState(2);
  const [hourlyCost, setHourlyCost] = useState(500);

  const hoursSaved = hrStaff * 20;
  const annualSavings = hoursSaved * hourlyCost * 12;

  return (
    <div className="rounded-2xl border bg-card p-6 space-y-4 max-w-md mx-auto">
      <div>
        <Label htmlFor="emp">Employees</Label>
        <Input
          id="emp"
          type="number"
          value={employees}
          onChange={(e) => setEmployees(Number(e.target.value) || 0)}
          className="mt-1"
        />
      </div>
      <div>
        <Label htmlFor="hr">HR staff</Label>
        <Input
          id="hr"
          type="number"
          value={hrStaff}
          onChange={(e) => setHrStaff(Number(e.target.value) || 0)}
          className="mt-1"
        />
      </div>
      <div>
        <Label htmlFor="cost">HR hourly cost (₹)</Label>
        <Input
          id="cost"
          type="number"
          value={hourlyCost}
          onChange={(e) => setHourlyCost(Number(e.target.value) || 0)}
          className="mt-1"
        />
      </div>
      <p className="text-center text-2xl font-bold text-foreground pt-2 border-t">
        Est. annual savings: ₹{annualSavings.toLocaleString()}
      </p>
    </div>
  );
}

function WpsChecker() {
  const [content, setContent] = useState("");
  const issues = useMemo(() => {
    const found: string[] = [];
    if (!content.trim()) return found;
    if (!content.includes("EDR")) found.push("Missing EDR (Employer Detail Record) header");
    if (!content.includes("SCR")) found.push("Missing SCR (Salary Component Record) rows");
    const ibanMatches = content.match(/AE\d{21}/g);
    if (!ibanMatches?.length) found.push("No valid UAE IBAN (AE + 21 digits) detected");
    if (content.split("\n").length < 3) found.push("File appears too short for a valid SIF");
    return found;
  }, [content]);

  return (
    <div className="rounded-2xl border bg-card p-6 space-y-4 max-w-lg mx-auto">
      <Label htmlFor="sif">Paste SIF file content</Label>
      <textarea
        id="sif"
        className="w-full min-h-[120px] rounded-md border bg-background px-3 py-2 text-sm"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="EDR,SCR,..."
      />
      {content.trim() && (
        <div className="text-sm">
          {issues.length === 0 ? (
            <p className="text-green-700 font-medium">No common issues detected.</p>
          ) : (
            <ul className="list-disc list-inside text-destructive space-y-1">
              {issues.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

const TOOL_COMPONENTS: Record<string, FC> = {
  "pf-esi-calculator": PfEsiCalculator,
  "gratuity-calculator-uae": GratuityCalculator,
  "hrms-roi-calculator": RoiCalculator,
  "wps-file-checker": WpsChecker,
};

const ToolPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const tool = slug ? TOOL_PAGES[slug] : undefined;
  if (!tool) return <NotFound />;

  const ToolWidget = TOOL_COMPONENTS[slug!];

  return (
    <PageShell
      title={tool.title}
      description={tool.metaDescription}
      path={tool.path}
      faqs={tool.faqs}
      schemaNodes={[
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Tools", path: "/tools" },
          { name: tool.h1, path: tool.path },
        ]),
      ]}
    >
      <div className="min-h-screen bg-background">
        <Navigation />
        <section className="pt-36 pb-8 md:pt-44">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">{tool.h1}</h1>
            <p className="text-muted-foreground">{tool.intro}</p>
          </div>
        </section>
        <section className="pb-12">
          <ToolWidget />
        </section>
        <section className="pb-12 text-center">
          <Button asChild className="rounded-full bg-[#0055ff]">
            <Link to="/contact">
              Automate this with OfficeKit HR
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </section>
        <GeoFaqSection faqs={tool.faqs} />
        <RelatedLinks links={tool.relatedLinks} />
        <Footer />
      </div>
    </PageShell>
  );
};

export default ToolPage;
