"use client"

import type React from "react"
import { motion } from "framer-motion"
import {
  ArrowRight,
  Sparkles,
  Zap,
  Target,
  Gauge,
  Shield,
  Eye,
  Globe,
  Brain,
  BarChart3,
  DollarSign,
  Users,
  ArrowUpRight,
  Clock,
  FileCheck,
  Lock,
  CheckCircle2,
  Play,
  Calendar,
  Scale,
  DoorOpen,
} from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "dotlottie-player": any
    }
  }
}

const benefits = [
  { text: "Recruitment", icon: Users },
  { text: "Onboarding", icon: FileCheck },
  { text: "Employee Management", icon: Users },
  { text: "Leave Management", icon: Calendar },
  { text: "Attendance", icon: Clock },
  { text: "Payroll", icon: FileCheck },
  { text: "Performance Management", icon: Gauge },
  { text: "Exit Management", icon: DoorOpen },
  { text: "WPS File Generation", icon: FileCheck },
  { text: "DIFC Payroll Compliant", icon: Shield },
  { text: "UAE Labour Laws", icon: Scale },

  // Your previous items kept
  { text: "Cost-saving", icon: DollarSign },
  { text: "Self-service", icon: Users },
  { text: "Scalability", icon: ArrowUpRight },
  { text: "Payroll Ease", icon: FileCheck },
  { text: "Data Security", icon: Lock },
  { text: "AI Insights", icon: Sparkles },
];


const Hero: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.25 },
    },
  }

  const child = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  }

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 pt-10">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ opacity: [0.08, 0.15, 0.08], scale: [1, 1.15, 1] }}
          transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-[800px] h-[800px] md:w-[1200px] md:h-[1200px] bg-gradient-radial from-blue-500/25 to-transparent blur-3xl"
        />

        <motion.div
          animate={{ x: [-120, 80], y: [40, -40] }}
          transition={{ duration: 22, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute -bottom-32 -left-32 w-[700px] h-[700px] md:w-[1000px] md:h-[1000px] bg-gradient-radial from-cyan-500/20 to-transparent blur-3xl"
        />
      </div>

      {/* Main Content Container */}
      <motion.div variants={container} initial="hidden" animate="visible" className="relative z-10 w-full">
        <div className="px-4 sm:px-6 md:px-8 lg:px-10 pt-16 sm:pt-20 md:pt-32 lg:pt-22 pb-24 sm:pb-32 md:pb-40">
          <div className="max-w-7xl mx-auto">
            {/* Grid Layout - responsive from single column to two columns */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
              {/* LEFT SIDE - Text Content */}
              <motion.div variants={child} className="space-y-6 sm:space-y-8 text-center lg:text-left">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-5 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-xl border border-blue-500/40 shadow-lg hover:border-blue-500/60 transition-colors duration-300 mx-auto lg:mx-0"
                >
                  <Sparkles className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-medium tracking-wider text-blue-100">Future of UAE HR</span>
                </motion.div>

                <div className="space-y-3 sm:space-y-4">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl font-bold leading-tight text-white text-balance">
                    HR Compliance
                    <br className="hidden sm:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500">
                      Reimagined with AI
                    </span>
                  </h1>
                </div>

                <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 text-balance">
                  Built for UAE Labour Law, WPS, Free Zones & DIFC — with predictive automation and AI-driven compliance
                  that evolves with your business.
                </p>

                <motion.div
                  variants={container}
                  className="pt-4 sm:pt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
                >
                  <motion.div variants={child}>
                    <Link to="/contact">
                      <Button className="w-full sm:w-auto h-12 sm:h-11 px-6 sm:px-8 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg hover:shadow-blue-500/25 transition-all duration-300 group text-sm sm:text-base">
                        Schedule Demo
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
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
                        Watch Demo
                      </Button>
                    </Link>
                  </motion.div>
                </motion.div>


              </motion.div>

              {/* RIGHT SIDE – Clean, Transparent Center + Perfect Orbit */}
              {/* RIGHT SIDE - Advanced Responsive Visual Experience */}
              <motion.div
                variants={child}
                className="relative w-full flex justify-center lg:justify-end py-8 lg:py-0"
              >
                {/* Main Container with Perspective for 3D Effect */}
                <div className="relative w-full max-w-lg lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl">

                  {/* Central Lottie + Floating Glow */}
                  <div className="relative z-10">
                    <motion.div
                      animate={{ y: [0, -20, 0] }}
                      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                      className="relative"
                    >
                      {/* Subtle Glow Background */}
                      <div className="absolute inset-0 -inset-x-20 -inset-y-10 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-3xl rounded-full animate-pulse" />

                   
                    </motion.div>
                  </div>

                  {/* DESKTOP: Dynamic Orbital Benefits (Premium Floating UI) */}
                  <div className="hidden lg:block absolute inset-0 pointer-events-none">
                    {benefits.map((benefit, i) => {
                      const total = benefits.length;
                      const angleStep = 360 / total;
                      const angle = i * angleStep - 90; // Start from top
                      const radiusX = 280 + (i % 3) * 40; // Elliptical orbit
                      const radiusY = 220 + (i % 4) * 30;
                      const delay = i * 0.08;

                      const x = Math.cos((angle * Math.PI) / 180) * radiusX;
                      const y = Math.sin((angle * Math.PI) / 180) * radiusY;

                      return (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
                          animate={{
                            opacity: 1,
                            scale: 1,
                            rotate: 0
                          }}
                          transition={{
                            delay: 0.6 + delay,
                            duration: 0.8,
                            ease: "backOut"
                          }}
                          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                          style={{ x, y }}
                        >
                          <motion.div
                            animate={{
                              y: [0, -16, 0],
                              rotate: [0, 10, -8, 0]
                            }}
                            transition={{
                              y: { duration: 6 + i * 0.3, repeat: Infinity, ease: "easeInOut" },
                              rotate: { duration: 12, repeat: Infinity }
                            }}
                            whileHover={{
                              scale: 1.3,
                              rotate: 10,
                              shadow: "0 20px 40px rgba(0,112,243,0.4)"
                            }}
                            className="group pointer-events-auto cursor-pointer"
                          >
                            <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-2xl bg-gradient-to-br from-blue-500/90 via-blue-600/90 to-cyan-500/90 backdrop-blur-xl border border-blue-400/60 shadow-xl flex flex-col items-center justify-center gap-2 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/40">
                              <benefit.icon className="w-8 h-8 lg:w-9 lg:h-9 text-white drop-shadow-md" />
                              <span className="text-[10px] lg:text-xs font-bold text-white text-center leading-tight px-1">
                                {benefit.text}
                              </span>
                            </div>


                          </motion.div>
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* MOBILE & TABLET: Beautiful Responsive Grid */}
                  <motion.div
                    variants={container}
                    initial="hidden"
                    animate="visible"
                    className="lg:hidden w-full mt-12 px-4 sm:px-6"
                  >
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                      {benefits.map((benefit, i) => (
                        <motion.div
                          key={i}
                          variants={child}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          whileTap={{ scale: 0.95 }}
                          className="group"
                        >
                          <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-500/80 to-cyan-500/80 backdrop-blur-md border border-blue-400/50 shadow-lg hover:shadow-xl hover:shadow-blue-500/30 flex flex-col items-center justify-center gap-2   transition-all duration-300">
                            <benefit.icon className="w-7 h-7 text-white" />
                            <span className="text-[10px] font-bold text-white text-center leading-tight">
                              {benefit.text}
                            </span>
                          </div>


                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
