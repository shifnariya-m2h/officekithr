import type { ReactNode } from "react";

type LazyContainerScrollProps = {
  titleComponent: ReactNode;
  children: ReactNode;
};

/** Static hero layout — no scroll animation (saves ~33KB motion chunk on first paint). */
export function LazyContainerScroll({
  titleComponent,
  children,
}: LazyContainerScrollProps) {
  return (
    <div className="relative flex min-h-0 items-center justify-center px-3 sm:px-6 pt-24 sm:pt-32 md:pt-36 lg:pt-40 pb-6 sm:pb-14 md:pb-16">
      <div className="w-full relative max-w-5xl mx-auto">
        <div className="text-center">{titleComponent}</div>
        <div className="max-w-4xl lg:max-w-5xl mx-auto mt-6 sm:mt-12 md:mt-16 lg:mt-20 h-[10.5rem] min-[375px]:h-[12.5rem] sm:h-[18rem] md:h-[30rem] lg:h-[32rem] w-full rounded-xl sm:rounded-2xl lg:rounded-[28px] overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  );
}
