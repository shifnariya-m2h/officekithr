"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Play, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

const benefits = [
  { text: "WPS Compliant", icon: "✓" },
  { text: "UAE Labour Law", icon: "✓" },
  { text: "DIFC & Free Zones", icon: "✓" },
  { text: "Gratuity Automation", icon: "✓" },
  { text: "EOS Settlement", icon: "✓" },
  { text: "Leave Management", icon: "✓" },
  { text: "Payroll Processing", icon: "✓" },
  { text: "Visa Management", icon: "✓" },
];

const Hero: React.FC = () => {
  const { language, t, isRTL } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Auto-play might be blocked
      });
      videoRef.current.addEventListener('loadeddata', () => setIsVideoLoaded(true));
    }
  }, []);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ opacity: [0.08, 0.15, 0.08], scale: [1, 1.15, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-[800px] h-[800px] md:w-[1200px] md:h-[1200px] bg-gradient-radial from-blue-500/25 to-transparent blur-3xl"
        />
        <motion.div
          animate={{ x: [-120, 80], y: [40, -40] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-32 -left-32 w-[700px] h-[700px] md:w-[1000px] md:h-[1000px] bg-gradient-radial from-cyan-500/20 to-transparent blur-3xl"
        />
      </div>

      {/* Main Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full"
      >
        <div className="px-4 sm:px-6 md:px-8 lg:px-10 pt-16 sm:pt-20 md:pt-32 lg:pt-24 pb-24 sm:pb-32 md:pb-40">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
              {/* LEFT SIDE - Text Content */}
              <motion.div
                variants={child}
                className={`space-y-6 sm:space-y-8 text-center lg:text-left ${isRTL ? 'lg:text-right' : ''}`}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-5 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-xl border border-blue-500/40 shadow-lg hover:border-blue-500/60 transition-colors duration-300 mx-auto lg:mx-0"
                >
                  <Sparkles className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-medium tracking-wider text-blue-100">
                    {t('hero.badge')}
                  </span>
                </motion.div>

                <div className="space-y-3 sm:space-y-4">
                  <h1
                    className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl font-bold leading-tight text-white text-balance ${
                      isRTL ? 'font-arabic' : ''
                    }`}
                  >
                    {language === 'ar' ? (
                      <>
                        نظام موارد بشرية مدعوم بالذكاء الاصطناعي
                        <br className="hidden sm:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500">
                          مصمم خصيصاً للإمارات
                        </span>
                      </>
                    ) : (
                      <>
                        HR Compliance
                        <br className="hidden sm:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500">
                          Reimagined with AI
                        </span>
                      </>
                    )}
                  </h1>
                </div>

                <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 text-balance">
                  {language === 'ar' ? (
                    'مبني وفقاً لقانون العمل الإماراتي، نظام الأجور (WPS)، المناطق الحرة وDIFC — مع الأتمتة التنبؤية والامتثال المدعوم بالذكاء الاصطناعي الذي يتطور مع عملك.'
                  ) : (
                    'Built for UAE Labour Law, WPS, Free Zones & DIFC — with predictive automation and AI-driven compliance that evolves with your business.'
                  )}
                </p>

                {/* Key Benefits Grid */}
                <motion.div
                  variants={container}
                  className="pt-4 sm:pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4"
                >
                  {benefits.map((benefit, i) => (
                    <motion.div
                      key={i}
                      variants={child}
                      whileHover={{ scale: 1.05, y: -4 }}
                      className="flex flex-col items-center gap-2 p-3 sm:p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-500/50 transition-all duration-300"
                    >
                      <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                      <span className="text-xs sm:text-sm font-medium text-white text-center">
                        {benefit.text}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  variants={container}
                  className={`pt-4 sm:pt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center ${isRTL ? 'lg:justify-start' : 'lg:justify-start'}`}
                >
                  <motion.div variants={child}>
                    <Link to="/contact">
                      <Button className="w-full sm:w-auto h-12 sm:h-11 px-6 sm:px-8 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg hover:shadow-blue-500/25 transition-all duration-300 group text-sm sm:text-base">
                        {t('hero.cta.demo')}
                        <ArrowRight className={`ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 ${isRTL ? 'rotate-180' : ''}`} />
                      </Button>
                    </Link>
                  </motion.div>

                  <motion.div variants={child}>
                    <Link to="https://www.youtube.com/watch?v=Tposa0O5s_k" target="_blank">
                      <Button
                        variant="outline"
                        className="w-full sm:w-auto h-12 sm:h-11 px-6 sm:px-8 border border-slate-600 bg-slate-800/50 hover:bg-slate-700/50 text-slate-100 hover:text-white transition-all duration-300 text-sm sm:text-base"
                      >
                        <Play className="mr-2 h-4 w-4" />
                        {t('hero.cta.watch')}
                      </Button>
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* RIGHT SIDE - Video/Visual */}
              <motion.div
                variants={child}
                className="relative w-full flex justify-center lg:justify-end py-8 lg:py-0"
              >
                <div className="relative w-full max-w-lg lg:max-w-2xl xl:max-w-3xl">
                  <motion.div
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="relative"
                  >
                    <div className="absolute inset-0 -inset-x-20 -inset-y-10 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-3xl rounded-full animate-pulse" />
                    
                    <ContainerScroll
                      titleComponent={
                        <div className="text-center">
                          <h2 className="text-4xl font-bold text-white">UAE HRMS</h2>
                        </div>
                      }
                    >
                      <video
                        ref={videoRef}
                        src="/sequence-hero.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="auto"
                        className="w-full h-full rounded-2xl shadow-2xl border border-blue-500/20"
                        draggable={false}
                      />
                    </ContainerScroll>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
