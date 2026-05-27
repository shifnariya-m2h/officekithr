import { lazy, Suspense, useEffect, useState, type ReactNode } from "react";
import { isMobileViewport, prefersReducedMotion } from "@/lib/performance/media";

const ContainerScroll = lazy(() =>
  import("@/components/ui/container-scroll-animation").then((m) => ({
    default: m.ContainerScroll,
  }))
);

type LazyContainerScrollProps = {
  titleComponent: ReactNode;
  children: ReactNode;
};

function StaticHeroLayout({
  titleComponent,
  children,
}: LazyContainerScrollProps) {
  return (
    <div className="relative flex min-h-[70vh] items-center justify-center px-2 pb-4 pt-24 sm:pt-28 md:min-h-0 md:h-[80rem] md:p-20">
      <div className="py-6 md:py-40 w-full relative max-w-5xl mx-auto">
        <div className="text-center">{titleComponent}</div>
        <div className="max-w-5xl -mt-6 md:-mt-12 mx-auto h-[18rem] sm:h-[22rem] md:h-[40rem] w-full rounded-[30px] overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  );
}

/**
 * Hero scroll parallax (rotate + scale on scroll).
 * Static layout paints first for LCP; motion loads right after without blocking first paint.
 */
export function LazyContainerScroll({
  titleComponent,
  children,
}: LazyContainerScrollProps) {
  const [enableMotion, setEnableMotion] = useState(false);
  const [reducedMotion, setReducedMotion] = useState<boolean | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReducedMotion(mq.matches || isMobileViewport());
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (reducedMotion || prefersReducedMotion() || isMobileViewport()) return;
    const desktop = window.matchMedia("(min-width: 768px)");
    if (!desktop.matches) return;
    // Desktop only: keep static layout for LCP, then mount scroll animation.
    const id = requestAnimationFrame(() => setEnableMotion(true));
    return () => cancelAnimationFrame(id);
  }, [reducedMotion]);

  if (reducedMotion === null || reducedMotion || !enableMotion) {
    return (
      <StaticHeroLayout titleComponent={titleComponent}>{children}</StaticHeroLayout>
    );
  }

  return (
    <Suspense
      fallback={
        <StaticHeroLayout titleComponent={titleComponent}>{children}</StaticHeroLayout>
      }
    >
      <ContainerScroll titleComponent={titleComponent}>
        {children}
      </ContainerScroll>
    </Suspense>
  );
}
