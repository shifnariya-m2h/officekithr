"use client";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Play,
  CheckCircle2,
  Shield,
  Zap,
  Globe,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";
import { m, useScroll, useTransform } from "@/lib/performance/motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { usePerformanceMode } from "@/lib/performance/usePerformanceMode";
import { imgFetchPriority } from "@/lib/img-props";

const benefits = [
  { text: "WPS Compliant", icon: Shield },
  { text: "UAE Labour Law", icon: CheckCircle2 },
  { text: "DIFC & Free Zones", icon: Globe },
  { text: "Gratuity Automation", icon: Zap },
];

function HeroCopy({
  isRTL,
  language,
  t,
}: {
  isRTL: boolean;
  language: string;
  t: (key: string) => string;
}) {
  return (
    <>
      <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5">
        <span className="h-2 w-2 rounded-full bg-blue-500" aria-hidden />
        <span className="text-sm font-medium text-blue-800 tracking-wide">
          {t("hero.badge") ||
            (language === "ar"
              ? "الخيار الأول في الإمارات"
              : "#1 HR Software in UAE")}
        </span>
      </div>

      <div className="space-y-4">
        <h1
          className={`text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 ${
            isRTL ? "font-arabic leading-tight" : "leading-[1.1]"
          }`}
        >
          {language === "ar" ? (
            <>
              إدارة الموارد البشرية
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                بذكاء وسهولة
              </span>
            </>
          ) : (
            <>
              HR Management
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                Made Simple & Smart
              </span>
            </>
          )}
        </h1>

        <p
          className={`text-lg text-gray-600 leading-relaxed max-w-xl ${
            isRTL ? "mr-0 ml-auto" : ""
          }`}
        >
          {language === "ar"
            ? "نظام متكامل صمم خصيصاً للشركات في الإمارات. متوافق مع كافة القوانين والأنظمة، من التوظيف وحتى الرواتب."
            : "The all-in-one HR platform built for UAE businesses. Automate payroll, ensure compliance, and empower your team with a system that just works."}
        </p>
      </div>

      <div
        className={`flex flex-col sm:flex-row gap-3 ${
          isRTL ? "sm:flex-row-reverse" : ""
        }`}
      >
        <Link to="/contact">
          <Button
            size="lg"
            className="h-12 px-6 text-base rounded-xl bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto"
          >
            {t("hero.cta.demo") ||
              (language === "ar" ? "ابدأ تجربتك الآن" : "Get Started Free")}
            <ArrowRight
              className={`ml-2 h-5 w-5 ${isRTL ? "rotate-180" : ""}`}
            />
          </Button>
        </Link>
        <Link
          to="https://www.youtube.com/watch?v=Tposa0O5s_k"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            variant="outline"
            size="lg"
            className="h-12 px-6 text-base rounded-xl border-2 w-full sm:w-auto"
          >
            <Play className="mr-2 h-5 w-5 fill-current" />
            {t("hero.cta.watch") ||
              (language === "ar" ? "فيديو توضيحي" : "Watch Video")}
          </Button>
        </Link>
      </div>

      <div
        className={`grid grid-cols-2 gap-y-3 gap-x-6 border-t border-gray-100 pt-5 ${
          isRTL ? "text-right" : "text-left"
        }`}
      >
        {benefits.map((benefit) => (
          <div
            key={benefit.text}
            className={`flex items-center gap-2 ${isRTL ? "flex-row-reverse" : ""}`}
          >
            <benefit.icon className="h-5 w-5 shrink-0 text-blue-500" />
            <span className="text-sm font-medium text-gray-600">
              {benefit.text}
            </span>
          </div>
        ))}
      </div>
    </>
  );
}

/** Lightweight hero for phones — no video, blur, or scroll motion. */
function UaeHeroMobile() {
  const { language, t, isRTL } = useLanguage();

  return (
    <section className="relative w-full overflow-hidden bg-white py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div
          className={`grid grid-cols-1 gap-10 items-center ${
            isRTL ? "text-right" : "text-left"
          }`}
        >
          <div className="space-y-6">
            <HeroCopy isRTL={isRTL} language={language} t={t} />
          </div>
          <div className="mx-auto w-full max-w-xs">
            <img
              src="/mobile-mockup-240.webp"
              srcSet="/mobile-mockup-240.webp 240w, /mobile-mockup-480.webp 480w"
              sizes="(max-width: 480px) 240px, 320px"
              alt="OfficeKit HR mobile app"
              width={240}
              height={480}
              className="h-auto w-full object-contain"
              loading="eager"
              decoding="async"
              {...imgFetchPriority("high")}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function UaeHeroDesktop() {
  const { language, t, isRTL } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    videoRef.current?.play().catch(() => {
      /* autoplay may be blocked */
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[90vh] w-full overflow-hidden bg-white flex items-center justify-center"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <m.div
          style={{ y: y1, opacity }}
          className="absolute -top-[20%] -right-[10%] w-[50vw] h-[50vw] bg-blue-100/40 blur-[100px] rounded-full mix-blend-multiply"
        />
        <m.div
          style={{ y: y2, opacity }}
          className="absolute -bottom-[20%] -left-[10%] w-[50vw] h-[50vw] bg-cyan-50/60 blur-[100px] rounded-full mix-blend-multiply"
        />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </div>

      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className={`space-y-8 ${isRTL ? "lg:order-2 text-right" : "text-left"}`}
            >
              <HeroCopy isRTL={isRTL} language={language} t={t} />
            </m.div>

            <m.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={`relative ${isRTL ? "lg:order-1" : ""}`}
            >
              <div className="relative mx-auto border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[294px] max-w-[512px]">
                <div className="rounded-lg overflow-hidden h-[278px] bg-white">
                  <video
                    ref={videoRef}
                    src="/sequence-hero.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    width={512}
                    height={294}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className="relative mx-auto bg-gray-900 rounded-b-xl rounded-t-sm h-[21px] max-w-[597px]">
                <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[96px] h-[8px] bg-gray-800" />
              </div>

              <div
                className={`absolute -bottom-6 ${isRTL ? "-right-6" : "-left-6"} hidden sm:block p-4 bg-white rounded-2xl shadow-lg border border-gray-100`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">System Status</div>
                    <div className="text-sm font-bold text-gray-900">
                      100% Compliant
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={`absolute -top-6 ${isRTL ? "-left-6" : "-right-6"} hidden sm:block p-4 bg-white rounded-2xl shadow-lg border border-gray-100`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Active Users</div>
                    <div className="text-sm font-bold text-gray-900">10,000+</div>
                  </div>
                </div>
              </div>
            </m.div>
          </div>
        </div>
      </div>
    </section>
  );
}

const Hero: React.FC = () => {
  const perfMode = usePerformanceMode();
  if (perfMode === "mobile") {
    return <UaeHeroMobile />;
  }
  return <UaeHeroDesktop />;
};

export default Hero;
