import { DirectAnswerBlock } from "@/components/seo/DirectAnswerBlock";
import { getFeatureGeo } from "@/data/feature-geo";

type FeatureSeoIntroProps = {
  path: string;
};

/** In-page geo SEO block — direct answer + regional compliance chips for /features/* pages. */
export function FeatureSeoIntro({ path }: FeatureSeoIntroProps) {
  const geo = getFeatureGeo(path);
  if (!geo) return null;

  return (
    <section className="py-12 md:py-16 bg-background border-b border-border">
      <div className="container mx-auto px-4 max-w-4xl space-y-8">
        <DirectAnswerBlock answer={geo.directAnswer} definition={geo.definition} />

        {geo.compliancePoints.length > 0 && (
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-3">
              India & GCC coverage
            </h2>
            <ul className="flex flex-wrap gap-2 list-none p-0 m-0">
              {geo.regions.map((region) => (
                <li
                  key={region}
                  className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold"
                >
                  {region}
                </li>
              ))}
              {geo.compliancePoints.map((point) => (
                <li
                  key={point}
                  className="px-3 py-1.5 rounded-full bg-card border text-sm font-medium text-foreground"
                >
                  {point}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
