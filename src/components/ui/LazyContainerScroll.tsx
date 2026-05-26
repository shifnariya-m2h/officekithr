import { lazy, Suspense, useEffect, useState, type ReactNode } from "react";

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
    <div className="h-[60rem] md:h-[80rem] flex items-center justify-center relative p-2 md:p-20">
      <div className="py-10 md:py-40 w-full relative max-w-5xl mx-auto">
        <div className="text-center">{titleComponent}</div>
        <div className="max-w-5xl -mt-12 mx-auto h-[30rem] md:h-[40rem] w-full rounded-[30px] overflow-hidden">
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
    setReducedMotion(mq.matches);
    const onChange = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;
    // Next frame: keep static layout for LCP, then mount scroll animation.
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
