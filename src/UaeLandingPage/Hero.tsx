"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Play, CheckCircle2, Shield, Zap, Globe, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";
import { m, useScroll, useTransform } from "@/lib/performance/motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { usePerformanceMode } from "@/lib/performance/usePerformanceMode";

const benefits = [
  { text: "WPS Compliant", icon: Shield },
  { text: "UAE Labour Law", icon: CheckCircle2 },
  { text: "DIFC & Free Zones", icon: Globe },
  { text: "Gratuity Automation", icon: Zap },
];

const Hero: React.FC = () => {
  const { language, t, isRTL } = useLanguage();
  const perfMode = usePerformanceMode();
  const isMobilePerf = perfMode === "mobile";
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  
  // Parallax scroll effects (desktop only — mobile uses static layout via MotionConfig)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    if (isMobilePerf || !videoRef.current) return;
    videoRef.current.play().catch(() => {
      /* autoplay may be blocked */
    });
  }, [isMobilePerf]);

  return (
    <section ref={sectionRef} className="relative min-h-[95vh] w-full overflow-hidden bg-white flex items-center justify-center">
      {/* Refined Animated Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top Right - Soft Blue */}
        <m.div
          style={{ y: y1, opacity }}
          className="absolute -top-[20%] -right-[10%] w-[50vw] h-[50vw] bg-blue-100/40 blur-[100px] rounded-full mix-blend-multiply"
        />
        
        {/* Bottom Left - Soft Cyan */}
        <m.div
          style={{ y: y2, opacity }}
          className="absolute -bottom-[20%] -left-[10%] w-[50vw] h-[50vw] bg-cyan-50/60 blur-[100px] rounded-full mix-blend-multiply"
        />
        
        {/* Grid Pattern overlay for texture */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* LEFT SIDE - Text Content */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className={`space-y-8 md:space-y-10 ${isRTL ? 'lg:order-2 text-right' : 'text-left'}`}
            >
              {/* Badge */}
              <m.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50/80 border border-blue-100 backdrop-blur-sm"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                <span className="text-sm font-medium text-blue-800 tracking-wide">
                  {t('hero.badge') || (language === 'ar' ? 'الخيار الأول في الإمارات' : '#1 HR Software in UAE')}
                </span>
              </m.div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1
                  className={`text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 ${
                    isRTL ? 'font-arabic leading-tight' : 'leading-[1.1]'
                  }`}
                >
                  {language === 'ar' ? (
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
                
                {/* Description */}
                <p className={`text-xl text-gray-600 leading-relaxed max-w-xl ${isRTL ? 'mr-0 ml-auto' : ''}`}>
                  {language === 'ar' ? (
                    'نظام متكامل صمم خصيصاً للشركات في الإمارات. متوافق مع كافة القوانين والأنظمة، من التوظيف وحتى الرواتب.'
                  ) : (
                    'The all-in-one HR platform built for UAE businesses. Automate payroll, ensure compliance, and empower your team with a system that just works.'
                  )}
                </p>
              </div>

              {/* CTA Buttons */}
              <div className={`flex flex-col sm:flex-row gap-4 ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
                <Link to="/contact">
                  <Button 
                    size="lg"
                    className="h-14 px-8 text-lg rounded-2xl bg-blue-600 hover:bg-blue-700 text-white shadow-xl hover:shadow-2xl shadow-blue-200 hover:scale-[1.02] transition-all duration-300 w-full sm:w-auto"
                  >
                    {t('hero.cta.demo') || (language === 'ar' ? 'ابدأ تجربتك الآن' : 'Get Started Free')}
                    <ArrowRight className={`ml-2 h-5 w-5 ${isRTL ? 'rotate-180' : ''}`} />
                  </Button>
                </Link>
                <Link to="https://www.youtube.com/watch?v=Tposa0O5s_k" target="_blank">
                  <Button
                    variant="outline"
                    size="lg"
                    className="h-14 px-8 text-lg rounded-2xl border-2 border-gray-200 bg-white hover:bg-gray-50 text-gray-700 hover:text-gray-900 hover:border-gray-300 transition-all duration-300 w-full sm:w-auto"
                  >
                    <Play className="mr-2 h-5 w-5 fill-current" />
                    {t('hero.cta.watch') || (language === 'ar' ? 'فيديو توضيحي' : 'Watch Video')}
                  </Button>
                </Link>
              </div>

              {/* Benefits Grid (Mini) */}
              <div className={`pt-6 border-t border-gray-100 grid grid-cols-2 gap-y-4 gap-x-8 ${isRTL ? 'text-right' : 'text-left'}`}>
                {benefits.map((benefit, i) => (
                  <div key={i} className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <benefit.icon className="w-5 h-5 text-blue-500 flex-shrink-0" />
                    <span className="text-sm font-medium text-gray-600">
                      {benefit.text}
                    </span>
                  </div>
                ))}
              </div>
            </m.div>

            {/* RIGHT SIDE - Laptop Mockup */}
            <m.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={`relative ${isRTL ? 'lg:order-1' : ''}`}
            >
              <div className="relative">
                {/* Decorative blob behind */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-blue-100/50 to-cyan-50/50 rounded-full blur-3xl -z-10" />

                {/* Laptop Container */}
                <m.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="relative transform hover:scale-[1.02] transition-transform duration-500"
                >
                  <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
                      <div className="rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white dark:bg-gray-800">
                          {/* Video or Image Content */}
                          {isMobilePerf ? (
                            <img
                              src="/dashboardok-1024.webp"
                              alt="OfficeKit HR dashboard preview"
                              width={512}
                              height={294}
                              loading="lazy"
                              decoding="async"
                              className="dark:hidden h-full w-full object-cover"
                            />
                          ) : (
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
                              className="dark:hidden h-full w-full object-cover"
                            />
                          )}
                      </div>
                  </div>
                  <div className="relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px]">
                      <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-800"></div>
                  </div>
                </m.div>
                
                {/* Floating Elements/Cards for added depth */}
                <m.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className={`absolute -bottom-6 ${isRTL ? '-right-6' : '-left-6'} p-4 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 hidden sm:block`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">System Status</div>
                      <div className="text-sm font-bold text-gray-900">100% Compliant</div>
                    </div>
                  </div>
                </m.div>

                <m.div
                   animate={{ y: [0, -10, 0] }}
                   transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                   className={`absolute -top-6 ${isRTL ? '-left-6' : '-right-6'} p-4 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 hidden sm:block`}
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
                </m.div>

              </div>
            </m.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
