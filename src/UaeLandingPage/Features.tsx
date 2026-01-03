"use client";

import React, { useState } from "react";
import { Users, CreditCard, UserPlus, Headphones, BarChart3, ChevronRight, Shield, FileCheck, Calendar, Clock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

interface FeatureItem {
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  details: string[];
  detailsAr: string[];
}

const featureData: FeatureItem[] = [
  {
    title: "Workforce Management",
    titleAr: "إدارة القوى العاملة",
    description: "Complete attendance, leave, and shift management with UAE compliance built-in.",
    descriptionAr: "إدارة كاملة للحضور والإجازات والورديات مع الامتثال للقوانين الإماراتية.",
    icon: Users,
    details: [
      "Face Recognition Attendance",
      "WPS-compliant time tracking",
      "Leave & Time-Off (UAE rules)",
      "Shift & Scheduling",
      "Mobile Check-In/Out",
    ],
    detailsAr: [
      "حضور بالتعرف على الوجه",
      "تتبع الوقت المتوافق مع WPS",
      "الإجازات (قواعد الإمارات)",
      "الورديات والجدولة",
      "تسجيل الدخول/الخروج عبر الهاتف",
    ],
  },
  {
    title: "Payroll & WPS",
    titleAr: "كشوف المرتبات وWPS",
    description: "Automated payroll with WPS SIF file generation and UAE statutory compliance.",
    descriptionAr: "كشوف مرتبات تلقائية مع إنشاء ملفات WPS SIF والامتثال للقوانين الإماراتية.",
    icon: CreditCard,
    details: [
      "WPS SIF File Generation",
      "Automated salary processing",
      "Gratuity calculation (UAE law)",
      "EOS settlement automation",
      "One-click payslips",
    ],
    detailsAr: [
      "إنشاء ملفات WPS SIF",
      "معالجة الرواتب التلقائية",
      "حساب المكافأة (قانون الإمارات)",
      "أتمتة تسوية نهاية الخدمة",
      "كشوف المرتبات بنقرة واحدة",
    ],
  },
  {
    title: "Talent & Onboarding",
    titleAr: "المواهب والانضمام",
    description: "Streamlined recruitment and onboarding with visa and document management.",
    descriptionAr: "توظيف وانضمام مبسط مع إدارة التأشيرات والوثائق.",
    icon: UserPlus,
    details: [
      "Digital onboarding",
      "Visa & document management",
      "Task & checklist automation",
      "Performance reviews (OKR/KRA)",
      "Competency tracking",
    ],
    detailsAr: [
      "انضمام رقمي",
      "إدارة التأشيرات والوثائق",
      "أتمتة المهام والقوائم",
      "مراجعات الأداء",
      "تتبع الكفاءة",
    ],
  },
  {
    title: "Compliance & Operations",
    titleAr: "الامتثال والعمليات",
    description: "UAE Labour Law compliance, DIFC, Free Zones, and operational support.",
    descriptionAr: "الامتثال لقانون العمل الإماراتي، DIFC، المناطق الحرة، والدعم التشغيلي.",
    icon: Shield,
    details: [
      "UAE Labour Law compliance",
      "DIFC & Free Zone rules",
      "Employee self-service (ESS)",
      "HR helpdesk tickets",
      "Policy repository",
    ],
    detailsAr: [
      "الامتثال لقانون العمل الإماراتي",
      "قواعد DIFC والمناطق الحرة",
      "خدمة الموظف الذاتية",
      "تذاكر مكتب المساعدة",
      "مستودع السياسات",
    ],
  },
  {
    title: "Intelligence & Analytics",
    titleAr: "الذكاء والتحليلات",
    description: "AI-powered insights and analytics for better HR decision-making.",
    descriptionAr: "رؤى وتحليلات مدعومة بالذكاء الاصطناعي لاتخاذ قرارات أفضل في الموارد البشرية.",
    icon: BarChart3,
    details: [
      "Executive Dashboards",
      "Attrition Analytics",
      "Absence Heatmaps",
      "Cost-to-Company Analysis",
      "Export-ready reports",
    ],
    detailsAr: [
      "لوحات تحكم تنفيذية",
      "تحليلات الاستنزاف",
      "خرائط حرارية للغياب",
      "تحليل التكلفة للشركة",
      "تقارير جاهزة للتصدير",
    ],
  },
];

const Features: React.FC = () => {
  const { language, isRTL } = useLanguage();
  const [activeFeature, setActiveFeature] = useState(0);

  const getText = (en: string, ar: string) => (language === 'ar' ? ar : en);
  const getDetails = (en: string[], ar: string[]) => (language === 'ar' ? ar : en);

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`text-center mb-16 ${isRTL ? 'font-arabic' : ''}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {getText("OfficeKit HR: The Complete Suite", "OfficeKit HR: الحل الكامل")}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            {getText(
              "From hiring to retiring, we cover every aspect of the employee lifecycle with precision and ease, built specifically for UAE regulations.",
              "من التوظيف إلى التقاعد، نغطي كل جانب من جوانب دورة حياة الموظف بدقة وسهولة، مصمم خصيصاً للوائح الإمارات."
            )}
          </p>
        </motion.div>

        <div className={`flex flex-col lg:flex-row gap-8 ${isRTL ? 'lg:flex-row-reverse' : ''}`}>
          {/* Navigation Tabs */}
          <div className="lg:w-1/3 flex flex-col gap-2">
            {featureData.map((feature, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveFeature(index)}
                whileHover={{ x: isRTL ? -4 : 4 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className={`flex items-center gap-4 p-5 rounded-xl text-left transition-all duration-300 relative overflow-hidden group ${
                  activeFeature === index
                    ? "bg-white shadow-md border-l-4 border-blue-600"
                    : "bg-white hover:bg-gray-50 text-gray-600 border-l-4 border-transparent"
                } ${isRTL ? 'text-right flex-row-reverse' : ''}`}
              >
                <feature.icon
                  size={24}
                  className={`transition-colors flex-shrink-0 ${activeFeature === index ? "text-blue-600" : "text-gray-400"}`}
                />
                <div className="flex-1">
                  <h3
                    className={`font-bold transition-colors ${activeFeature === index ? "text-gray-900" : "text-gray-600"}`}
                  >
                    {getText(feature.title, feature.titleAr)}
                  </h3>
                  <p className="text-xs text-gray-500 hidden sm:block truncate">
                    {getText(feature.description, feature.descriptionAr)}
                  </p>
                </div>
                <ChevronRight
                  className={`ml-auto transition-all flex-shrink-0 ${activeFeature === index ? "translate-x-1 text-blue-600" : "opacity-0"} ${isRTL ? 'rotate-180' : ''}`}
                  size={16}
                />
              </motion.button>
            ))}
          </div>

          {/* Content Area */}
          <div className="lg:w-2/3 bg-white rounded-2xl shadow-md p-8 md:p-12 border border-blue-100 flex flex-col justify-center min-h-[400px] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature}
                initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: isRTL ? -20 : 20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                  {React.createElement(featureData[activeFeature].icon, { className: "text-blue-600 w-7 h-7" })}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {getText(featureData[activeFeature].title, featureData[activeFeature].titleAr)}
                </h3>
                <p className="text-gray-600 mb-8 text-lg">
                  {getText(featureData[activeFeature].description, featureData[activeFeature].descriptionAr)}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {getDetails(featureData[activeFeature].details, featureData[activeFeature].detailsAr).map((detail, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.06 }}
                      className="flex items-center gap-3 p-3 rounded-lg bg-blue-50 border border-blue-100"
                    >
                      <div className="w-2 h-2 rounded-full bg-blue-600 flex-shrink-0"></div>
                      <span className="text-gray-700 font-medium text-sm">{detail}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
