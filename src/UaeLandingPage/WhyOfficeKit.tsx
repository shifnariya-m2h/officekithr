"use client";

import type React from "react";
import { ShieldCheck, Banknote, FileCheck2, Settings2, Bot, Check } from "lucide-react";
import { m } from "@/lib/performance/motion";
import { useLanguage } from "@/contexts/LanguageContext";

const WhyOfficeKit: React.FC = () => {
  const { language, isRTL } = useLanguage();

  const benefits = language === 'ar' ? [
    { text: "هندسة معمارية تركز على الامتثال (قانون العمل الإماراتي، DIFC، المناطق الحرة)", icon: ShieldCheck },
    { text: "أتمتة المكافأة، راتب الإجازة، نهاية الخدمة وقواعد الإعادة", icon: Banknote },
    { text: "كشوف مرتبات جاهزة لـ WPS تنتج ملفات SIF مقبولة من البنوك", icon: FileCheck2 },
    { text: "سياسات مرنة لهياكل التذاكر ومرور الهواء الفريدة", icon: Settings2 },
    { text: "مساعدة مدعومة بالذكاء الاصطناعي لإجابات فورية للموظفين", icon: Bot },
  ] : [
    { text: "Compliance-first architecture (UAE Labour Law, DIFC, Free-Zones)", icon: ShieldCheck },
    { text: "Automated Gratuity, Leave Salary, EOS & Repatriation rules", icon: Banknote },
    { text: "WPS-ready payroll producing SIF files accepted by banks", icon: FileCheck2 },
    { text: "Flexible policies for unique ticket & air passage structures", icon: Settings2 },
    { text: "AI-powered assistance for instant employee answers", icon: Bot },
  ];

  const title = language === 'ar' 
    ? 'صُنع خصيصاً لـ' 
    : 'Built specifically for';
  
  const titleHighlight = language === 'ar'
    ? 'الشركات في دولة الإمارات'
    : 'UAE Businesses';

  const description = language === 'ar'
    ? 'إدارة الموارد البشرية في دولة الإمارات لها متطلبات خاصة. قانون العمل الإماراتي مختلف، نظام الأجور WPS يحتاج ملفات SIF، والمناطق الحرة مثل DIFC وADGM لديها قواعدها الخاصة. OfficeKit HRMS على officekithr.com تم بناؤه مع مراعاة هذه الفروقات.'
    : "HR management in the UAE has unique requirements. UAE Labour Law is different, WPS needs SIF files, and free zones like DIFC and ADGM have their own rules. OfficeKit HRMS on officekithr.com was built with these differences in mind.";

  const highlightText = language === 'ar'
    ? 'معظم أنظمة HRMS تحاول تعديل الحلول العالمية. OfficeKit صُمم من البداية للعمل في الإمارات.'
    : "Most HRMS systems try to adapt global solutions. OfficeKit was designed from the start to work in the UAE.";

  return (
    <section className="py-24 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`flex flex-col lg:flex-row items-center gap-16 ${isRTL ? 'lg:flex-row-reverse' : ''}`}>
          <m.div
            initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:w-1/2"
          >
            <h2 className={`text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight ${isRTL ? 'font-arabic text-right' : ''}`}>
              {title} <span className="text-blue-600">{titleHighlight}</span>.
            </h2>
            <p className={`text-gray-600 text-lg mb-8 leading-relaxed ${isRTL ? 'text-right' : ''}`}>
              {description}
            </p>

            <div className={`bg-white border-l-4 border-blue-600 p-6 rounded-r-xl mb-10 shadow-sm ${isRTL ? 'border-r-4 border-l-0 rounded-l-xl rounded-r-none' : ''}`}>
              <p className={`text-gray-700 text-lg ${isRTL ? 'text-right' : ''}`}>
                    {language === 'ar' ? (
                  <>
                    معظم أنظمة HRMS تحاول تعديل الحلول العالمية. <br />
                    <strong className="text-blue-700">OfficeKit صُمم من البداية للعمل في الإمارات.</strong>
                  </>
                ) : (
                  <>
                    Most HRMS systems try to adapt global solutions. <br />
                    <strong className="text-blue-700">OfficeKit was designed from the start for the UAE.</strong>
                  </>
                )}
              </p>
            </div>

            <div className="space-y-5">
              {benefits.map((item, idx) => (
                <m.div
                  key={idx}
                  initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.12, duration: 0.5 }}
                  className={`flex items-start gap-4 group ${isRTL ? 'flex-row-reverse' : ''}`}
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-50 group-hover:bg-blue-100 transition-colors flex items-center justify-center mt-1">
                    <item.icon size={20} className="text-blue-600" />
                  </div>
                  <p className={`text-gray-700 text-lg ${isRTL ? 'text-right' : ''}`}>{item.text}</p>
                </m.div>
              ))}
            </div>
          </m.div>

          <m.div
            initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:w-1/2 w-full relative"
          >
            <m.div
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="relative rounded-2xl overflow-hidden shadow-lg border border-blue-100 bg-white p-8"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-blue-600"></div>

              <div className={`flex items-center justify-between mb-8 border-b border-gray-100 pb-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className={isRTL ? 'text-right' : ''}>
                  <h3 className="text-gray-900 font-bold text-lg">
                    {language === 'ar' ? 'تسوية نهاية الخدمة' : 'EOS Settlement'}
                  </h3>
                  <p className="text-gray-500 text-sm">
                    {language === 'ar' ? 'الموظف: أحمد الفارسي' : 'Employee: Ahmed Al-Farsi'}
                  </p>
                </div>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide flex items-center gap-1">
                  <Check size={12} /> {language === 'ar' ? 'جاهز' : 'Ready'}
                </span>
              </div>

              <div className="space-y-4 mb-8">
                <div className={`flex justify-between items-center text-sm ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <span className="text-gray-500">
                    {language === 'ar' ? 'الراتب الأساسي' : 'Basic Salary'}
                  </span>
                  <span className="text-gray-900 font-mono font-medium">AED 15,000.00</span>
                </div>
                <div className={`flex justify-between items-center text-sm ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <span className="text-gray-500">
                    {language === 'ar' ? 'المكافأة (5 سنوات)' : 'Gratuity (5 Years)'}
                  </span>
                  <span className="text-gray-900 font-mono font-medium">AED 56,250.00</span>
                </div>
                <div className={`flex justify-between items-center text-sm ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <span className="text-gray-500">
                    {language === 'ar' ? 'استحقاق الإجازة (12 يوم)' : 'Leave Encashment (12 days)'}
                  </span>
                  <span className="text-gray-900 font-mono font-medium">AED 6,000.00</span>
                </div>
                <div className={`flex justify-between items-center text-sm ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <span className="text-gray-500">
                    {language === 'ar' ? 'تذكرة الإعادة' : 'Repatriation Ticket'}
                  </span>
                  <span className="text-gray-900 font-mono font-medium">AED 1,200.00</span>
                </div>
                <div className="h-px bg-gray-100 my-2"></div>
                <div className={`flex justify-between items-center text-lg font-bold ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <span className="text-blue-600">
                    {language === 'ar' ? 'المبلغ المستحق' : 'Net Payable'}
                  </span>
                  <span className="text-gray-900 font-mono">AED 78,450.00</span>
                </div>
              </div>

              <div className={`bg-blue-50 rounded-lg p-4 flex gap-3 border border-blue-100 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <Bot className="text-blue-600 shrink-0" size={24} />
                <div className={isRTL ? 'text-right' : ''}>
                  <p className="text-gray-600 text-sm italic">
                    {language === 'ar' 
                      ? '"محسوب بناءً على قواعد العقد المحدود في البر الرئيسي (21 يوم للأولى 5 سنوات). لم يتم العثور على خصومات."'
                      : '"Calculated based on Mainland Limited Contract rules (21 days for first 5 years). No deductions found."'
                    }
                  </p>
                </div>
              </div>
            </m.div>
          </m.div>
        </div>
      </div>
    </section>
  );
};

export default WhyOfficeKit;
