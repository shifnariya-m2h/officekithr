"use client";

import { AlertTriangle, FileWarning, Calculator, Plane, HelpCircle, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const PainPoints = () => {
  const { language, isRTL } = useLanguage();

  const cards = language === 'ar' ? [
    { title: "رفض WPS", desc: "حقل خاطئ واحد = رواتب متأخرة + غرامات", icon: FileWarning, color: "red" },
    { title: "فوضى الاختصاص", desc: "البر الرئيسي مقابل DIFC مقابل المنطقة الحرة — قواعد مختلفة", icon: AlertTriangle, color: "amber" },
    { title: "أخطاء المكافأة", desc: "أخطاء Excel تكلف الثقة والآلاف", icon: Calculator, color: "blue" },
    { title: "فوضى الإعادة", desc: "التتبع اليدوي = نفقات مفاجئة", icon: Plane, color: "sky" },
    { title: "استفسارات لا نهاية لها", desc: "أسئلة رصيد الإجازة تضيع وقتك", icon: HelpCircle, color: "purple" },
    { title: "تأخيرات نهاية الخدمة", desc: "أقسام HR + Payroll + Finance المعزولة تبطئ كل شيء", icon: Clock, color: "orange" },
  ] : [
    { title: "WPS Rejections", desc: "One wrong field = delayed salaries + penalties", icon: FileWarning, color: "red" },
    { title: "Jurisdiction Chaos", desc: "Mainland vs DIFC vs Free Zone — different rules", icon: AlertTriangle, color: "amber" },
    { title: "Gratuity Errors", desc: "Excel mistakes cost trust and thousands", icon: Calculator, color: "blue" },
    { title: "Repatriation Mess", desc: "Manual tracking = surprise expenses", icon: Plane, color: "sky" },
    { title: "Endless Queries", desc: "Leave balance questions waste your time", icon: HelpCircle, color: "purple" },
    { title: "EOS Delays", desc: "HR + Payroll + Finance silos slow everything", icon: Clock, color: "orange" },
  ];

  return (
    <section className="relative py-24 lg:py-32">
      {/* Background decoration */}
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`text-center mb-20 ${isRTL ? 'font-arabic' : ''}`}
        >
          <h2 className={`text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6 ${isRTL ? 'text-right' : ''}`}>
            {language === 'ar' ? (
              <>
                تحديات الموارد البشرية
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  وحلول OfficeKit الذكية
                </span>
              </>
            ) : (
              <>
                Common HR Challenges
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  Solved by OfficeKit
                </span>
              </>
            )}
          </h2>
          <p className="text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            {language === 'ar'
              ? 'تخلص من الأخطاء اليدوية وتعقيدات الامتثال مع نظامنا الآلي المتكامل.'
              : 'Say goodbye to manual errors and compliance headaches. Our automated system handles the complexity for you.'}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className={`group relative bg-white/60 backdrop-blur-md rounded-3xl p-8 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 ring-1 ring-gray-900/5 transition-all duration-300 ${isRTL ? 'text-right' : ''}`}
            >
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${isRTL ? 'ml-auto' : ''}`}>
                <c.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{c.title}</h3>
              <p className="text-gray-600 leading-relaxed">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
