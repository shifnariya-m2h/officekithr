"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "motion/react";

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
    offset: ["start start", "end start"],
  });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0], {
    clamp: false,
  });
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions(), {
    clamp: false,
  });
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100], {
    clamp: false,
  });

  return (
    <div
      className="h-[50rem] sm:h-[55rem] md:h-[60rem] lg:h-[70rem] xl:h-[80rem] flex items-center justify-center relative px-2 sm:px-4 md:px-8 lg:px-16 xl:px-20 pt-2 sm:pt-4 md:pt-8 lg:pt-12 xl:pt-20 pb-0"
      ref={containerRef}
      style={{
        willChange: "scroll-position",
      }}
    >
      <div
        className="py-6 sm:py-8 md:py-12 lg:py-20 xl:py-40 w-full relative"
        style={{
          perspective: "1000px",
          willChange: "transform",
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

export const Header = ({ translate, titleComponent }: any) => {
  return (
    <motion.div
      style={{
        translateY: translate,
        willChange: "transform",
        transform: "translate3d(0, 0, 0)",
      }}
      className="div max-w-5xl mx-auto text-center"
    >
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({
  rotate,
  scale,
  translate,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
        willChange: "transform",
        transformStyle: "preserve-3d",
        backfaceVisibility: "hidden",
      }}
      className="max-w-5xl -mt-6 sm:-mt-8 md:-mt-10 lg:-mt-12 mx-auto h-[20rem] min-[375px]:h-[24rem] sm:h-[28rem] md:h-[32rem] lg:h-[36rem] xl:h-[40rem] w-full border-2 sm:border-[3px] md:border-4 border-[#6C6C6C] bg-[#222222] rounded-[20px] sm:rounded-[25px] md:rounded-[30px] shadow-2xl overflow-hidden"
    >
      <div className="h-full w-full overflow-hidden rounded-[18px] sm:rounded-[22px] md:rounded-[26px] bg-gray-100 dark:bg-zinc-900">
        {children}
      </div>
    </motion.div>
  );
};
