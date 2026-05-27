import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/contexts/LanguageContext";

const FAQ_ITEMS = [
  {
    qEn: "Does OfficeKit HR support UAE WPS?",
    qAr: "هل يدعم OfficeKit HR نظام حماية الأجور (WPS) في الإمارات؟",
    aEn: "Yes. OfficeKit generates WPS-aligned salary files (SIF), links pay runs to employee records, and helps finance teams reconcile bank transfers before submission.",
    aAr: "نعم. يولّد OfficeKit ملفات رواتب متوافقة مع WPS (SIF)، ويربط كشوف الرواتب بسجلات الموظفين، ويساعد فرق المالية على مطابقة التحويلات البنكية قبل الإرسال.",
  },
  {
    qEn: "Is the platform available in Arabic?",
    qAr: "هل المنصة متوفرة باللغة العربية؟",
    aEn: "Yes. Employee self-service and key HR screens support Arabic and English, including the dedicated UAE experience on this page.",
    aAr: "نعم. تدعم خدمة الموظف الذاتية والشاشات الرئيسية العربية والإنجليزية، بما في ذلك تجربة الإمارات على هذه الصفحة.",
  },
  {
    qEn: "Can we manage India and UAE on one system?",
    qAr: "هل يمكننا إدارة الهند والإمارات في نظام واحد؟",
    aEn: "Yes. OfficeKit serves multi-country groups with region-specific payroll (India statutory and UAE WPS) while sharing core HR and reporting.",
    aAr: "نعم. يخدم OfficeKit المجموعات متعددة الدول بقواعد رواتب خاصة بكل منطقة (الامتثال الهندي وWPS في الإمارات) مع مشاركة الموارد البشرية الأساسية والتقارير.",
  },
  {
    qEn: "How long does implementation take?",
    qAr: "كم يستغرق التنفيذ؟",
    aEn: "Most UAE SMEs go live in a few weeks depending on headcount, payroll complexity, and data migration scope.",
    aAr: "تبدأ معظم الشركات الصغيرة والمتوسطة في الإمارات التشغيل خلال أسابيع قليلة حسب عدد الموظفين وتعقيد الرواتب ونطاق نقل البيانات.",
  },
];

const FAQ = () => {
  const { language, isRTL } = useLanguage();
  const isAr = language === "ar";

  return (
    <section
      className="py-12 md:py-16 bg-white"
      aria-labelledby="uae-faq-heading"
    >
      <div
        className={`container mx-auto max-w-3xl px-4 ${isRTL ? "text-right" : "text-left"}`}
      >
        <h2
          id="uae-faq-heading"
          className="text-3xl font-bold text-gray-900 mb-8 text-center"
        >
          {isAr ? "الأسئلة الشائعة" : "Frequently asked questions"}
        </h2>
        <Accordion type="single" collapsible className="space-y-2">
          {FAQ_ITEMS.map((item, index) => (
            <AccordionItem
              key={index}
              value={`faq-${index}`}
              className="border border-gray-200 rounded-xl px-4"
            >
              <AccordionTrigger className="text-left font-medium text-gray-900 hover:no-underline py-4">
                {isAr ? item.qAr : item.qEn}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-4 leading-relaxed">
                {isAr ? item.aAr : item.aEn}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
