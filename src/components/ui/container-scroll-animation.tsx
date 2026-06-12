"use client";
import React, { useRef } from "react";
import { m, useScroll, useTransform, type MotionValue } from "@/lib/performance/motion";

export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = React.useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia("(max-width: 768px)").matches
      : false
  );

  React.useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const onChange = () => setIsMobile(mq.matches);
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div
      className="h-[56rem] md:h-[72rem] lg:h-[76rem] flex items-center justify-center relative px-4 sm:px-6 md:px-10 lg:px-16 pt-28 sm:pt-32 md:pt-36 lg:pt-40 pb-10 md:pb-16"
      ref={containerRef}
    >
      <div
        className="w-full relative max-w-5xl mx-auto"
        style={{
          perspective: "1000px",
        }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} translate={translate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  );
};

type HeaderProps = { translate: number; titleComponent: React.ReactNode };

export const Header = ({ translate, titleComponent }: HeaderProps) => {
  return (
    <m.div
      style={{
        translateY: translate,
      }}
      className="div max-w-5xl mx-auto text-center"
    >
      {titleComponent}
    </m.div>
  );
};

export const Card = ({
  rotate,
  scale,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  children: React.ReactNode;
}) => {
  return (
    <m.div
      style={{
        rotateX: rotate,
        scale,
      }}
      className="max-w-4xl lg:max-w-5xl mt-10 sm:mt-12 md:mt-16 lg:mt-20 mx-auto h-[22rem] md:h-[30rem] lg:h-[32rem] w-full rounded-[28px]"
    >
      <div className="h-full w-full overflow-hidden bg-transparent rounded-[30px]">
        {children}
      </div>
    </m.div>
  );
};
