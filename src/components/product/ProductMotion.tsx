import type { ReactNode } from "react";
import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { FadeUpOnce } from "@/components/motion/FadeUpOnce";
import { LazyMotionBoundary } from "@/components/motion/LazyMotionBoundary";

export function ProductPageShell({ children }: { children: ReactNode }) {
  return <div className="min-h-screen bg-background">{children}</div>;
}

type BenefitBullet = {
  title: string;
  desc: string;
};

type ProductBenefitsShellProps = {
  eyebrow: string;
  title: string;
  description: string;
  bullets: BenefitBullet[];
  imageSrc: string;
  imageAlt: string;
  children?: ReactNode;
};

export function ProductBenefitsShell({
  eyebrow,
  title,
  description,
  bullets,
  imageSrc,
  imageAlt,
  children,
}: ProductBenefitsShellProps) {
  return (
    <section
      className="relative py-16 sm:py-20 text-white"
      style={{
        backgroundImage: "url(/benifitbg.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/80" aria-hidden />
      <div className="relative container mx-auto grid lg:grid-cols-2 gap-10 items-center px-4 sm:px-6">
        <div>
          <p className="text-lg font-light mb-2 text-white/80">{eyebrow}</p>
          <h2 className="text-3xl sm:text-4xl font-bold leading-snug mb-4">
            {title}
          </h2>
          <p className="text-gray-300 mb-8">{description}</p>
          <ul className="space-y-4 mb-10">
            {bullets.map((item) => (
              <li key={item.title} className="flex gap-3 items-start">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/15">
                  <Check className="h-3 w-3 text-white" />
                </span>
                <span>
                  <span className="font-semibold">{item.title}</span>
                  {" — "}
                  {item.desc}
                </span>
              </li>
            ))}
          </ul>
          {children}
        </div>
        <div className="flex justify-center lg:justify-end">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-[55%] md:w-[50%] lg:w-[45%] xl:w-[60%] h-auto"
            loading="lazy"
            width={400}
            height={800}
          />
        </div>
      </div>
    </section>
  );
}

export type ProductStep = {
  badge?: string;
  title: string;
  description: string;
  bullets: string[];
  image: string;
  imageAlt: string;
  imageFirst?: boolean;
};

type ProductStepsSectionProps = {
  title?: string;
  subtitle?: string;
  steps: ProductStep[];
};

export function ProductStepsSection({
  title = "How it works",
  subtitle,
  steps,
}: ProductStepsSectionProps) {
  return (
    <LazyMotionBoundary>
      <section className="bg-background py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUpOnce className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              {title}
            </h2>
            {subtitle ? (
              <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
                {subtitle}
              </p>
            ) : null}
          </FadeUpOnce>

          <div className="space-y-12 sm:space-y-16">
            {steps.map((step, index) => (
              <FadeUpOnce key={step.title} delay={index * 0.05}>
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center p-6 sm:p-8 rounded-2xl bg-[#F3F5FF]">
                  <div
                    className={`space-y-5 order-1 ${
                      step.imageFirst ? "lg:order-2" : ""
                    }`}
                  >
                    {step.badge ? (
                      <Badge className="bg-white font-normal py-2 text-[#3f5ffc] text-sm border border-[#ededed]">
                        {step.badge}
                      </Badge>
                    ) : null}
                    <h3 className="text-2xl sm:text-3xl font-semibold text-hr-text-primary">
                      {step.title}
                    </h3>
                    <p className="text-hr-text-secondary text-base sm:text-lg leading-relaxed max-w-prose">
                      {step.description}
                    </p>
                    <ul className="space-y-3">
                      {step.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-3">
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#2463EB]">
                            <Check className="h-4 w-4 text-white" />
                          </span>
                          <span className="text-hr-text-secondary">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div
                    className={`flex justify-center order-2 ${
                      step.imageFirst ? "lg:order-1" : ""
                    }`}
                  >
                    <img
                      src={step.image}
                      alt={step.imageAlt}
                      className="rounded-2xl w-full max-h-[22rem] sm:max-h-[25rem] object-cover"
                      loading="lazy"
                      width={560}
                      height={400}
                    />
                  </div>
                </div>
              </FadeUpOnce>
            ))}
          </div>
        </div>
      </section>
    </LazyMotionBoundary>
  );
}
